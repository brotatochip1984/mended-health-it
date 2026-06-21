import type { Metadata } from "next";
import Link from "next/link";
import opportunityMatrix from "@/data/opportunity-matrix.json";

export const metadata: Metadata = {
  title: "Opportunity Matrix",
  description:
    "A department-by-department map of healthcare AI opportunities, with pain points, AI use cases, expected impact, implementation complexity, and risk level.",
};

interface Opportunity {
  department: string;
  painPoint: string;
  aiOpportunity: string;
  impact: string;
  complexity: string;
  risk: string;
}

const rows = opportunityMatrix as Opportunity[];

function badgeClass(level: string): string {
  switch (level) {
    case "Low":
      return "bg-teal-50 text-teal-700 border-teal-200";
    case "Medium":
      return "bg-amber-50 text-amber-700 border-amber-200";
    case "High":
      return "bg-orange-50 text-orange-700 border-orange-200";
    case "Very High":
      return "bg-red-50 text-red-700 border-red-200";
    default:
      return "bg-slate-50 text-slate-600 border-slate-200";
  }
}

function Badge({ level }: { level: string }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeClass(
        level,
      )}`}
    >
      {level}
    </span>
  );
}

export default function OpportunitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-300">
            Where to start
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            AI Opportunity Matrix
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            The safest first AI projects tend to be high-burden and low-risk. This
            matrix maps healthcare departments to AI use cases with a candid read
            on impact, implementation complexity, and risk.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-xl border border-slate-200 lg:block">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Department</th>
                  <th className="px-4 py-3">Pain point</th>
                  <th className="px-4 py-3">AI opportunity</th>
                  <th className="px-4 py-3">Impact</th>
                  <th className="px-4 py-3">Complexity</th>
                  <th className="px-4 py-3">Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {rows.map((r) => (
                  <tr key={r.department} className="align-top">
                    <td className="px-4 py-4 font-semibold text-slate-800">
                      {r.department}
                    </td>
                    <td className="px-4 py-4 text-slate-600">{r.painPoint}</td>
                    <td className="px-4 py-4 text-slate-600">{r.aiOpportunity}</td>
                    <td className="px-4 py-4 text-slate-600">{r.impact}</td>
                    <td className="px-4 py-4">
                      <Badge level={r.complexity} />
                    </td>
                    <td className="px-4 py-4">
                      <Badge level={r.risk} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-4 lg:hidden">
            {rows.map((r) => (
              <div
                key={r.department}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-slate-800">{r.department}</h2>
                </div>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Pain point
                    </dt>
                    <dd className="text-slate-600">{r.painPoint}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      AI opportunity
                    </dt>
                    <dd className="text-slate-600">{r.aiOpportunity}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Impact
                    </dt>
                    <dd className="text-slate-600">{r.impact}</dd>
                  </div>
                  <div className="flex gap-6 pt-1">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Complexity
                      </dt>
                      <dd className="mt-1">
                        <Badge level={r.complexity} />
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Risk
                      </dt>
                      <dd className="mt-1">
                        <Badge level={r.risk} />
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Complexity and risk ratings are directional and depend heavily on your
            data, workflows, and governance maturity. The AI Readiness Assessment
            helps calibrate them for your organization.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/assessment"
              className="rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-600"
            >
              Take the readiness assessment
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Discuss your priorities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
