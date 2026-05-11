import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-teal-700">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Ready to build your Healthcare IT team?
        </h2>
        <p className="mt-4 text-teal-100">
          Whether you need one specialist or an entire department, we deliver
          qualified candidates fast.
        </p>
        <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row">
          <Link
            href="/contact"
            className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-amber-400 transition-colors"
          >
            Contact Us Today
          </Link>
          <Link
            href="/services"
            className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
