import type { Metadata } from "next";
import AssessmentClient from "@/components/AssessmentClient";

export const metadata: Metadata = {
  title: "AI Readiness Assessment",
  description:
    "A vendor-neutral Healthcare AI Readiness Assessment across strategy, data, technology, workforce, governance, ROI, and monitoring. Get a readiness score, top risks, and recommended next steps.",
};

export default function AssessmentPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-300">
            Free self-assessment
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Healthcare AI Readiness Assessment
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Score your organization across ten readiness dimensions. You get a
            tiered readiness score, your top risks, recommended next steps, and a
            suggested advisory package. Answers stay in your browser, and you can
            export them as JSON or CSV.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AssessmentClient />
        </div>
      </section>
    </>
  );
}
