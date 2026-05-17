import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-teal-700">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Operational support, when you need it.
        </h2>
        <p className="mt-4 text-teal-100">
          Whether you&apos;re stabilizing a recent go-live, planning AI
          adoption, or filling a specialized gap on a complex initiative —
          we can help.
        </p>
        <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-amber-400 transition-colors"
          >
            Talk to us
          </Link>
          <Link
            href="/services"
            className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            How we work
          </Link>
        </div>
      </div>
    </section>
  );
}
