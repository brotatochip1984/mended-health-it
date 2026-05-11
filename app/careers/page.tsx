import type { Metadata } from "next";
import JobCard from "@/components/JobCard";
import { jobs } from "@/lib/jobs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Mended Health IT",
  description:
    "Browse open Healthcare IT positions. Mended Health IT connects qualified professionals with top healthcare organizations.",
};

export default function CareersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Open Positions</h1>
          <p className="mt-4 max-w-2xl text-lg text-teal-100">
            Find your next Healthcare IT role. We work with hospitals, health
            systems, and HIT vendors across Arizona and nationwide.
          </p>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* Don't see your role */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Don&apos;t see your role?
          </h2>
          <p className="mt-3 text-slate-600">
            We&apos;re always looking for talented Healthcare IT professionals.
            Send us your resume and we&apos;ll reach out when the right
            opportunity comes along.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow hover:bg-teal-600 transition-colors"
          >
            Submit Your Resume
          </Link>
        </div>
      </section>
    </>
  );
}
