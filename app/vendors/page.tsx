import type { Metadata } from "next";
import Link from "next/link";
import vendorCategories from "@/data/vendor-categories.json";

export const metadata: Metadata = {
  title: "Vendor Landscape",
  description:
    "A category map of the healthcare AI vendor landscape, from infrastructure and ambient documentation to revenue cycle, imaging, and governance. Representative examples only, not endorsements.",
};

interface VendorCategory {
  category: string;
  description: string;
  examples: string[];
}

const categories = vendorCategories as VendorCategory[];

export default function VendorsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-300">
            Market map
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Healthcare AI Vendor Landscape
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            The healthcare AI market is crowded and moves quickly. We organize it
            by category so leaders can reason about capabilities, not logos. We
            stay vendor-neutral: examples below are representative of a category,
            not recommendations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {categories.map((c) => (
              <div
                key={c.category}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-slate-800">
                  {c.category}
                </h2>
                <p className="mt-1 text-sm text-slate-600">{c.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm text-amber-900">
              <span className="font-semibold">Disclaimer:</span> Vendor examples
              are representative only and require independent due diligence. Listing
              does not imply endorsement, and the named companies are not
              affiliated with Mended Health IT unless explicitly disclosed.
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-900 p-8 text-center text-white">
            <h2 className="text-2xl font-bold">Need a credible shortlist?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Our Vendor Selection Advisory starts with use case clarity, then
              evaluates vendors on evidence, references, security, and
              interoperability. Referral economics, where they exist, are always
              disclosed.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400"
              >
                Talk to an advisor
              </Link>
              <Link
                href="/pricing"
                className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                See advisory packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
