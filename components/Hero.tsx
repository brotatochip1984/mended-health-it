import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* Background image */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right opacity-60"
      />
      {/* Darkening overlay so text stays readable across screen sizes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Healthcare IT,{" "}
            <span className="text-amber-400">operated.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            We support healthcare systems, health plans, Tribal organizations,
            and FQHCs through complex EHR transitions, AI adoption,
            interoperability, and revenue cycle pressure — with operators
            who&apos;ve actually been on the floor.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-amber-500 px-6 py-3 text-center font-semibold text-slate-900 shadow hover:bg-amber-400 transition-colors"
            >
              Talk to us
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-white/30 px-6 py-3 text-center font-semibold text-white hover:bg-white/10 transition-colors"
            >
              How we work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
