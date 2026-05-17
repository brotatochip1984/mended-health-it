import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mended Health IT is a healthcare transformation and advisory organization helping health systems, health plans, Tribal organizations, and FQHCs through complex operational change.",
};

const values = [
  {
    title: "Operationally informed",
    description:
      "Our consultants have been on the floor in command centers, hypercare environments, and revenue cycle operations. They understand what 'works in real life' looks like.",
  },
  {
    title: "Calm under pressure",
    description:
      "Healthcare doesn't reward panic. We bring measured judgment to high-stakes situations — go-lives, denial backlogs, AI adoption decisions.",
  },
  {
    title: "Long-term trust",
    description:
      "We optimize for partnerships that last years, not transactions that close this quarter. The right consultant matters more than placement volume.",
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
            A healthcare transformation and advisory organization. We support
            the operational complexity behind technology change.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-800">Our work</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Healthcare delivery doesn&apos;t pause for project plans. We
              work with that reality, not against it. Our engagements focus on
              EHR transitions, AI adoption, revenue cycle pressure,
              interoperability mandates, and the staffing gaps that emerge
              when all of the above land on the same operational leaders.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We serve healthcare systems, health plans, Tribal organizations,
              FQHCs, and healthcare operators — environments where trust,
              continuity, and operational depth matter more than vendor
              cycles or marketing polish.
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
              <h2 className="text-2xl font-bold text-slate-800">
                Justin Cooper
              </h2>
              <p className="text-sm font-medium text-teal-700">Founder</p>
              <p className="mt-4 text-slate-600 leading-7">
                Justin founded Mended Health IT to build the advisory firm he
                wished existed when he was inside healthcare delivery
                environments — one focused on operational continuity,
                executive-level execution, and long-term trust rather than
                transactional placements. He works directly with CIOs,
                CMIOs, and revenue cycle leadership on the engagements where
                outcomes matter most.
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
                <h3 className="text-lg font-semibold text-teal-700">
                  {v.title}
                </h3>
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
