import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-teal-700">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Is your organization ready for AI?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-teal-100">
          Start with a free, vendor-neutral readiness assessment. Get a tiered
          score, your top risks, and a clear set of next steps in minutes.
        </p>
        <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row">
          <Link
            href="/assessment"
            className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-amber-400 transition-colors"
          >
            Take the assessment
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Schedule a call
          </Link>
        </div>
      </div>
    </section>
  );
}
