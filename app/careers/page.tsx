import type { Metadata } from "next";
import JobCard from "@/components/JobCard";
import { jobs } from "@/lib/jobs";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consultants",
  description:
    "Healthcare IT consultants and operators — work with Mended Health IT on EHR, AI, interoperability, revenue cycle, and stabilization engagements.",
};

export default function CareersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Work with us</h1>
          <p className="mt-4 max-w-2xl text-lg text-teal-100">
            Healthcare IT operators — consultants, post-go-live veterans,
            informatics leaders. We engage with people who bring more than a
            resume to every engagement.
          </p>
        </div>
      </section>

      {/* Job listings */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Current engagements
          </h2>
          <p className="mt-3 text-slate-600">
            Roles we&apos;re actively staffing for client work.
          </p>
          <div className="mt-8 space-y-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-slate-800">
            Don&apos;t see the right engagement?
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Working with Mended Health IT isn&apos;t about finding the next
            gig. We build long-term relationships with operators who treat
            every engagement as their own. Send your background and a note
            about what you do best — we&apos;ll be in touch when the work
            matches.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow hover:bg-teal-600 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
