import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About | Mended Health IT",
  description:
    "Learn about Mended Health IT — our mission, values, and the team behind Healthcare IT staffing and recruitment.",
};

const values = [
  {
    title: "Integrity",
    description:
      "We do what we say. Every candidate is vetted, every timeline is honest, and every relationship is built on trust.",
  },
  {
    title: "Expertise",
    description:
      "Healthcare IT is all we do. We understand EHR workflows, compliance requirements, and the talent landscape inside and out.",
  },
  {
    title: "Partnership",
    description:
      "We succeed when you succeed. We treat every engagement as a long-term partnership, not a transaction.",
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
            Bridging the gap between healthcare organizations and the IT talent
            they need to deliver better patient care.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-800">Our Mission</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Mended Health IT exists to strengthen healthcare by connecting
              organizations with the technology professionals who keep systems
              running, data secure, and care accessible. We believe every
              hospital, clinic, and health system deserves an IT team that
              understands the stakes.
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
                With deep experience in Healthcare IT and a passion for
                connecting people with meaningful work, Justin founded Mended
                Health IT to address the growing demand for specialized IT talent
                in healthcare. His hands-on approach to staffing, recruitment,
                and business development ensures every client and candidate gets
                the attention they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-800">
            Our Values
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
