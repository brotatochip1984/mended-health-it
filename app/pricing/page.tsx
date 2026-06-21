import type { Metadata } from "next";
import Link from "next/link";
import pricing from "@/data/pricing.json";

export const metadata: Metadata = {
  title: "Advisory Packages & Pricing",
  description:
    "Transparent advisory packages: AI Readiness Snapshot, full Readiness Assessment, Vendor Selection Advisory, Governance Sprint, Implementation Workforce Planning, and ongoing retainer. Vendor-neutral by design.",
};

interface PricingPackage {
  name: string;
  priceRange: string;
  scope: string;
}

interface VendorPartnership {
  referralFee: string;
  terms: string;
  disclosure: string;
  guardrail: string;
}

interface PricingData {
  packages: PricingPackage[];
  vendorPartnership: VendorPartnership;
}

const data = pricing as PricingData;

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-300">
            Engagements
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Advisory packages and pricing
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Fixed-scope engagements sized to where you are. Start with a snapshot,
            run a full assessment, or bring us in for vendor selection, governance,
            and implementation planning. Pricing scales with organization size and
            scope.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.packages.map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-slate-800">{p.name}</h2>
                <p className="mt-2 text-2xl font-bold text-teal-700">
                  {p.priceRange}
                </p>
                <p className="mt-3 flex-1 text-sm text-slate-600">{p.scope}</p>
                <Link
                  href={`/contact?subject=${encodeURIComponent(p.name)}`}
                  className="mt-5 inline-block rounded-lg border border-teal-600 px-4 py-2 text-center text-sm font-semibold text-teal-700 hover:bg-teal-50"
                >
                  Request this engagement
                </Link>
              </div>
            ))}
          </div>

          {/* Vendor partnership model */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-xl font-bold text-slate-800">
              How vendor partnerships work
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              We are transparent about how the practice makes money so our advice
              stays trustworthy.
            </p>
            <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-slate-800">
                  Referral fee
                </dt>
                <dd className="mt-1 text-sm text-slate-600">
                  {data.vendorPartnership.referralFee}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-800">Terms</dt>
                <dd className="mt-1 text-sm text-slate-600">
                  {data.vendorPartnership.terms}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-800">
                  Disclosure
                </dt>
                <dd className="mt-1 text-sm text-slate-600">
                  {data.vendorPartnership.disclosure}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-slate-800">Guardrail</dt>
                <dd className="mt-1 text-sm text-slate-600">
                  {data.vendorPartnership.guardrail}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/assessment"
              className="rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-600"
            >
              Start with the free assessment
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
