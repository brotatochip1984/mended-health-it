"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  assessment,
  responseKey,
  totalQuestionCount,
  type ResponseMap,
} from "@/lib/assessment";
import { scoreAssessment } from "@/lib/scoring";

const STORAGE_KEY = "mhit-ai-readiness-responses-v1";

const SCALE: { value: number; label: string }[] = [
  { value: 1, label: "Not at all" },
  { value: 2, label: "Early" },
  { value: 3, label: "Partial" },
  { value: 4, label: "Mostly" },
  { value: 5, label: "Fully in place" },
];

const tierColor: Record<string, string> = {
  "Not Ready": "text-red-700 bg-red-50 border-red-200",
  "Foundation Ready": "text-amber-700 bg-amber-50 border-amber-200",
  "Pilot Ready": "text-teal-700 bg-teal-50 border-teal-200",
  "Scale Ready": "text-teal-800 bg-teal-100 border-teal-300",
  "Enterprise AI Mature": "text-teal-900 bg-teal-100 border-teal-400",
};

function downloadFile(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AssessmentClient() {
  const [responses, setResponses] = useState<ResponseMap>({});
  const [showResults, setShowResults] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const total = totalQuestionCount();

  // Restore any saved progress on mount. Reading localStorage must happen after
  // hydration (not in a lazy initializer) to avoid a server/client mismatch.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration-safe restore of persisted state
      if (saved) setResponses(JSON.parse(saved) as ResponseMap);
    } catch {
      // Ignore malformed storage.
    }
  }, []);

  // Persist progress as the user answers.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
    } catch {
      // Storage may be unavailable (private mode); scoring still works in memory.
    }
  }, [responses]);

  const answeredCount = Object.keys(responses).length;
  const result = useMemo(() => scoreAssessment(responses), [responses]);
  const progress = Math.round((answeredCount / total) * 100);

  function setAnswer(ci: number, qi: number, value: number) {
    setResponses((prev) => ({ ...prev, [responseKey(ci, qi)]: value }));
  }

  function handleSeeResults() {
    setShowResults(true);
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function handleReset() {
    setResponses({});
    setShowResults(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // No-op.
    }
  }

  function exportJson() {
    const payload = {
      generatedAt: new Date().toISOString(),
      assessment: assessment.title,
      responses,
      result,
    };
    downloadFile(
      "ai-readiness-assessment.json",
      JSON.stringify(payload, null, 2),
      "application/json",
    );
  }

  function exportCsv() {
    const rows: string[][] = [["Category", "Question", "Score (1-5)"]];
    assessment.categories.forEach((category, ci) => {
      category.questions.forEach((question, qi) => {
        const value = responses[responseKey(ci, qi)];
        rows.push([category.name, question, value ? String(value) : ""]);
      });
    });
    rows.push([]);
    rows.push(["Overall score", `${result.score}/100`, result.tier.name]);
    const csv = rows
      .map((r) => r.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(","))
      .join("\n");
    downloadFile("ai-readiness-assessment.csv", csv, "text/csv");
  }

  return (
    <div className="space-y-10">
      {/* Sticky progress */}
      <div className="sticky top-0 z-10 -mx-6 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur lg:-mx-8 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-700">
            {answeredCount} of {total} answered
          </p>
          <button
            onClick={handleSeeResults}
            disabled={answeredCount === 0}
            className="rounded-lg bg-teal-700 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-teal-600 disabled:opacity-50"
          >
            See my results
          </button>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-teal-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {assessment.categories.map((category, ci) => (
          <section
            key={category.name}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-lg font-semibold text-slate-800">
                {category.name}
              </h2>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Weight {category.weight}
              </span>
            </div>
            <div className="mt-5 space-y-6">
              {category.questions.map((question, qi) => {
                const current = responses[responseKey(ci, qi)];
                return (
                  <div key={qi}>
                    <p className="text-sm font-medium text-slate-700">{question}</p>
                    <div className="mt-3 grid grid-cols-5 gap-2">
                      {SCALE.map((opt) => {
                        const active = current === opt.value;
                        return (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setAnswer(ci, qi, opt.value)}
                            aria-pressed={active}
                            className={`flex flex-col items-center gap-1 rounded-lg border px-2 py-2 text-center transition-colors ${
                              active
                                ? "border-teal-600 bg-teal-50 text-teal-800"
                                : "border-slate-200 text-slate-500 hover:border-teal-300 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-base font-semibold">{opt.value}</span>
                            <span className="text-[10px] leading-tight">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleSeeResults}
          disabled={answeredCount === 0}
          className="rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow hover:bg-teal-600 disabled:opacity-50"
        >
          See my results
        </button>
        <button
          onClick={handleReset}
          className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div
          ref={resultRef}
          className="scroll-mt-24 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                Readiness score
              </p>
              <p className="mt-1 text-5xl font-bold text-slate-900">
                {result.score}
                <span className="text-2xl font-medium text-slate-400">/100</span>
              </p>
              {!result.complete && (
                <p className="mt-2 text-xs text-slate-500">
                  Based on {result.answered} of {result.total} questions. Answer
                  the rest for a complete picture.
                </p>
              )}
            </div>
            <div
              className={`rounded-xl border px-5 py-4 ${
                tierColor[result.tier.name] ?? "text-slate-700 bg-white border-slate-200"
              }`}
            >
              <p className="text-lg font-bold">{result.tier.name}</p>
              <p className="mt-1 max-w-xs text-sm">{result.tier.description}</p>
            </div>
          </div>

          {/* Category breakdown */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Category breakdown
            </h3>
            <div className="mt-4 space-y-3">
              {result.categories.map((c) => (
                <div key={c.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700">{c.name}</span>
                    <span className="text-slate-500">
                      {c.answered > 0 ? `${Math.round(c.percent)}%` : "—"}
                    </span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-teal-600"
                      style={{ width: `${c.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top risks + next steps */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Top risks
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {result.topRisks.map((r) => (
                  <li key={r.name} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-400" />
                    <span>
                      <span className="font-medium">{r.name}</span> — {Math.round(r.percent)}% mature
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Recommended next steps
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {result.nextSteps.map((step, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-teal-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Suggested package */}
          <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Suggested advisory package
            </h3>
            <p className="mt-2 text-sm text-teal-900">{result.suggestedPackage}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-teal-600"
              >
                Schedule a readiness call
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-teal-300 px-5 py-2.5 text-sm font-semibold text-teal-800 hover:bg-teal-100"
              >
                View packages
              </Link>
            </div>
          </div>

          {/* Exports */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={exportJson}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-white"
            >
              Export JSON
            </button>
            <button
              onClick={exportCsv}
              className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-white"
            >
              Export CSV
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            This self-assessment is directional and does not constitute legal,
            clinical, or compliance advice. Results are stored only in your browser.
          </p>
        </div>
      )}
    </div>
  );
}
