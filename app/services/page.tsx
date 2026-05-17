import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Staff augmentation, managed delivery, advisory services, and go-live stabilization across Epic, Cerner, MEDITECH, NextGen, QNXT, Facets, HealthRules, and more.",
};

const engagementModels = [
  {
    title: "Staff augmentation",
    image: "/images/services/staff-augmentation.png",
    description:
      "Individual consultants, interim leadership, and specialized SMEs embedded with your team.",
    details: [
      "Project-specific resources for go-lives, optimizations, and stabilization",
      "Interim CIO, CMIO, PMO, and informatics leadership",
      "Specialized SMEs across EHR, payer systems, AI, analytics, and infrastructure",
      "Temporary operational support for command centers and hypercare",
    ],
  },
  {
    title: "Managed delivery",
    image: "/images/services/managed-delivery.png",
    description:
      "PM-led teams executing complete initiatives — optimization, stabilization, and reporting modernization.",
    details: [
      "Team-based execution under a single point of accountability",
      "Optimization initiatives across Epic, Cerner, MEDITECH, and NextGen",
      "Revenue cycle stabilization and reporting visibility",
      "Operational analytics modernization (Clarity, Caboodle, Cogito, Power BI)",
    ],
  },
  {
    title: "Advisory services",
    image: "/images/services/advisory-services.png",
    description:
      "Strategic assessments and operational planning before you commit budget to a direction.",
    details: [
      "AI readiness assessments — governance, workflows, data infrastructure",
      "EHR optimization reviews",
      "Revenue cycle and denials assessments",
      "Interoperability strategy (CMS-0057-F, TEFCA, FHIR)",
      "Delivery planning and operational risk reviews",
    ],
  },
  {
    title: "Go-live & stabilization",
    image: "/images/services/go-live-stabilization.png",
    description:
      "On-the-ground support for the most operationally fragile moments.",
    details: [
      "Command center support and escalation management",
      "Hypercare execution and workflow remediation",
      "Training and clinician adoption support",
      "Revenue cycle and reporting stabilization",
      "Optimization following stabilization",
    ],
  },
];

const focusAreas = [
  {
    title: "AI & healthcare transformation",
    description:
      "Ambient AI documentation, clinical workflow AI, AI governance, and AI-enabled revenue cycle. Focused on operational fit rather than tool selection.",
  },
  {
    title: "Interoperability",
    description:
      "CMS-0057-F and TEFCA readiness, FHIR strategy, API modernization, payer-provider integration, HIE integration, and data governance.",
  },
  {
    title: "Revenue cycle",
    description:
      "Denial reduction, claims optimization, billing stabilization, Epic HB/PB and NextGen RCM optimization, cash acceleration, and reporting visibility.",
  },
  {
    title: "Tribal & community health",
    description:
      "Tribal healthcare, Indian Health Service environments, FQHCs, community health, and rural healthcare. Cultural respect and community trust shape every engagement.",
  },
];

const platforms = [
  {
    category: "EHR",
    items: [
      "Epic (Ambulatory, ClinDoc, ASAP, Beaker, Cadence, Resolute HB/PB, Cogito, MyChart, Tapestry, and more)",
      "Oracle Health / Cerner",
      "MEDITECH (Magic, C/S, 6.x, Expanse)",
      "NextGen",
      "Allscripts / Altera",
      "CPSI / TruBridge",
      "Athenahealth",
      "eClinicalWorks",
      "OCHIN Epic",
    ],
  },
  {
    category: "Payer platforms",
    items: [
      "QNXT",
      "Facets",
      "HealthRules",
      "HealthEdge",
      "Amisys Advance",
      "Epic Tapestry",
    ],
  },
  {
    category: "Enterprise systems",
    items: [
      "Workday",
      "UKG / Kronos",
      "PeopleSoft",
      "Infor",
      "SAP",
      "Oracle ERP",
      "Anaplan",
    ],
  },
  {
    category: "Analytics & data",
    items: [
      "SQL",
      "Power BI",
      "Clarity",
      "Caboodle",
      "Cogito",
      "Tableau",
      "SSRS",
      "Population health analytics",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold">How we work</h1>
          <p className="mt-4 max-w-2xl text-lg text-teal-100">
            Four engagement models, four strategic focus areas, and platform
            depth across the systems healthcare actually runs on.
          </p>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-800">
            Engagement models
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Sized to the work, not the other way around.
          </p>
          <div className="mt-16 space-y-16">
            {engagementModels.map((s, i) => (
              <div
                key={s.title}
                className={`flex flex-col gap-8 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-slate-600 leading-7">
                    {s.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src={s.image}
                      alt={`${s.title} — abstract data-visualization`}
                      fill
                      sizes="(min-width: 1024px) 28rem, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-800">
            Strategic focus areas
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Where healthcare IT is moving — and where we work.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {focusAreas.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-xl font-bold text-slate-800">{f.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-slate-800">
            Platform depth
          </h2>
          <p className="mt-3 text-center text-slate-600">
            The systems we work with — and the workflows behind them.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {platforms.map((p) => (
              <div key={p.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                  {p.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Different shape of engagement?
          </h2>
          <p className="mt-3 text-slate-600">
            Most of what we do doesn&apos;t fit a box. Tell us the situation
            and we&apos;ll talk through how we&apos;d approach it.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow hover:bg-teal-600 transition-colors"
          >
            Talk to us
          </Link>
        </div>
      </section>
    </>
  );
}
