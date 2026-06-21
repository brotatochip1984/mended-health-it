import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";

const coreServices = [
  {
    title: "AI Readiness Assessment",
    description:
      "Score your organization across strategy, data, technology, workforce, governance, ROI, and monitoring. Get a readiness tier and a 90-day roadmap.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Vendor Selection Advisory",
    description:
      "Move from use case clarity to a credible shortlist. We evaluate vendors on evidence, references, security, and interoperability. Referral economics are always disclosed.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
      </svg>
    ),
  },
  {
    title: "AI Governance Sprint",
    description:
      "Shadow-AI policy, governance workflow, evaluation templates, and a monitoring plan. Put guardrails in place before tools scale.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Implementation Workforce Planning",
    description:
      "Staffing models, role design, and recruiting profiles so the people who own workflow redesign and adoption are in place before go-live.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const problems = [
  "Are we ready for AI, and where do we start?",
  "Which use cases are actually worth funding?",
  "Which vendors are credible, and which are hype?",
  "How do we govern risk without stopping progress?",
  "What staff and implementation resources do we need?",
  "How do we prove ROI to finance?",
];

const differentiators = [
  {
    title: "Vendor-neutral by design",
    description:
      "Our assessments stay independent from referral economics. When a partnership exists, we disclose it.",
  },
  {
    title: "Healthcare-specific framework",
    description:
      "Built for EHRs, claims, clinical workflows, and the realities of health system governance. Not a generic AI checklist.",
  },
  {
    title: "Governance-first approach",
    description:
      "Shadow AI is already inside most organizations. We help you put safe zones, policy, and monitoring around it.",
  },
  {
    title: "Implementation talent bridge",
    description:
      "The next AI gap in healthcare is implementation talent. We connect strategy to the people who execute it.",
  },
  {
    title: "Trusted-source discipline",
    description:
      "Every public claim traces to a specialized healthcare, clinical, legal, or market source. No fabricated stats.",
  },
  {
    title: "ROI and workflow-first",
    description:
      "We optimize for workflow fit and measurable benefit, not model novelty. AI hype does not pay bills.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* What we solve */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-800">What we solve</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Healthcare leaders face a crowded AI market and real pressure to act.
              We help you answer the questions that decide whether AI delivers
              value or risk.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {problems.map((q) => (
              <div
                key={q}
                className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4"
              >
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <p className="text-sm text-slate-700">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-800">Why now</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Adoption is already here. In a survey of more than 2,000 US
              hospitals, 31.5% reported using generative AI in 2024, and many more
              planned to within a year. Some are adopting without complete
              safeguards. The organizations that prepare deliberately will move
              faster and safer than those that react.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Source: JAMA Network Open / PMC. See our{" "}
              <Link href="/research" className="font-medium text-teal-700 hover:underline">
                Research and Trust
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800">Core services</h2>
            <p className="mt-3 text-slate-600">
              Independent advice across the AI decision lifecycle.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coreServices.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-block rounded-lg border border-teal-600 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50"
            >
              View all packages and pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-800">
              A first-of-its-kind advisory practice
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Assessment, brokerage, governance, and staffing in one independent
              practice. Here is what sets us apart.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title}>
                <p className="text-lg font-semibold text-teal-700">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
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
