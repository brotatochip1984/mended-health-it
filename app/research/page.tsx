import type { Metadata } from "next";
import Link from "next/link";
import researchSources from "@/data/research-sources.json";

export const metadata: Metadata = {
  title: "Research & Trust",
  description:
    "A curated library of trusted healthcare AI research across adoption, governance, clinical safety, workforce transformation, revenue cycle automation, and legal and regulatory context.",
};

interface ResearchSource {
  theme: string;
  source: string;
  title: string;
  points: string[];
  useCase: string;
}

const sources = researchSources as ResearchSource[];

export default function ResearchPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-300">
            Evidence base
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Research and trust</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Healthcare AI buyers should demand evidence, not demos. Our positions
            trace back to trusted, specialized sources. Below is the curated
            library behind our advisory work, organized by theme.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            {sources.map((s) => (
              <article
                key={`${s.source}-${s.title}`}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  {s.theme}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-slate-800">
                  {s.title}
                </h2>
                <p className="text-sm font-medium text-slate-500">{s.source}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {s.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-slate-100 pt-4 text-sm italic text-slate-500">
                  {s.useCase}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-600">
              We cite the source and its key finding whenever a number appears in
              our public materials. We do not publish fabricated logos,
              testimonials, partnerships, or statistics. Full source notes live in
              <span className="font-medium text-slate-700"> docs/research_sources.md</span>.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/assessment"
              className="rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-600"
            >
              Assess your readiness
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Talk to an advisor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
