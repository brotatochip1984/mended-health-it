import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mended Health IT is an independent Healthcare AI Advisory and Brokerage practice. We help organizations evaluate AI readiness, select trusted vendors, govern risk, and build implementation teams.",
};

const values = [
  {
    title: "Independent and vendor-neutral",
    description:
      "Our advice is not for sale. Assessments stay independent from referral economics, and any partnership is disclosed.",
  },
  {
    title: "Evidence over hype",
    description:
      "We make claims we can source. Every public statistic traces to a trusted healthcare, clinical, legal, or market reference.",
  },
  {
    title: "Workflow and governance first",
    description:
      "AI value comes from workflow fit and disciplined governance, not model novelty. We optimize for outcomes you can measure.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold">About Mended Health IT</h1>
          <p className="mt-4 max-w-2xl text-lg text-teal-100">
            An independent Healthcare AI Advisory and Brokerage practice. We help
            leaders make practical, safe, and financially disciplined decisions
            about AI.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-800">Our work</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We are not an AI vendor. We are an independent advisor, broker, and
              implementation connector. Healthcare leaders face a crowded AI market
              and real pressure to act. We help them decide whether they are ready,
              which use cases are worth funding, which vendors are credible, how to
              govern risk, and what it takes to implement and prove ROI.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The practice combines a healthcare-specific readiness framework,
              vendor evaluation, governance design, and an implementation talent
              bridge. That combination is what most organizations are missing as
              AI moves from pilot to production.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex-shrink-0 flex items-center justify-center h-32 w-32 rounded-full bg-teal-100 text-teal-700 text-3xl font-bold">
              JC
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Justin Cooper</h2>
              <p className="text-sm font-medium text-teal-700">Founder</p>
              <p className="mt-4 text-slate-600 leading-7">
                Justin founded Mended Health IT to give healthcare leaders the
                independent guidance the AI market does not provide on its own:
                vendor-neutral assessments, governance discipline, and a bridge to
                the people who actually implement. He works directly with CIOs,
                CMIOs, CNIOs, and revenue cycle and operations leadership on the
                decisions where outcomes and risk matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-800">
            How we operate
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <h3 className="text-lg font-semibold text-teal-700">{v.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
