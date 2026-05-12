import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Healthcare IT staffing (contract, contract-to-hire, direct placement), end-to-end recruitment, and business development for HIT organizations. Epic, Cerner, MEDITECH, security, and informatics roles.",
};

const services = [
  {
    title: "HIT Staffing",
    description:
      "We provide qualified Healthcare IT professionals on a contract, contract-to-hire, or direct placement basis. Our staffing solutions cover the full spectrum of HIT roles.",
    details: [
      "EHR/EMR analysts and developers (Epic, Cerner, MEDITECH)",
      "Clinical informatics specialists",
      "Healthcare network and infrastructure engineers",
      "HIPAA compliance and security professionals",
      "Health data analysts and BI developers",
      "IT support and help desk teams for clinical environments",
    ],
  },
  {
    title: "Recruitment",
    description:
      "Our end-to-end recruitment process ensures every candidate is thoroughly sourced, screened, and credentialed before placement.",
    details: [
      "Targeted sourcing from Healthcare IT talent networks",
      "Technical and behavioral screening",
      "Credential verification and compliance checks",
      "Background and reference checks",
      "Onboarding support and retention follow-up",
      "Candidate pipeline development for future needs",
    ],
  },
  {
    title: "Business Development",
    description:
      "We help Healthcare IT organizations and vendors grow through strategic consulting, client acquisition, and market positioning.",
    details: [
      "Go-to-market strategy for HIT products and services",
      "Client acquisition and relationship management",
      "Market analysis and competitive positioning",
      "Partnership and channel development",
      "Proposal and RFP support",
      "Sales enablement and team coaching",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-teal-100">
            Staffing, recruitment, and business development built for Healthcare IT.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col gap-8 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800">{s.title}</h2>
                <p className="mt-4 text-slate-600 leading-7">{s.description}</p>
                <ul className="mt-6 space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="h-48 w-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                  {s.title} illustration
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Need a custom solution?
          </h2>
          <p className="mt-3 text-slate-600">
            Every organization is different. Let&apos;s talk about what you need.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow hover:bg-teal-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
