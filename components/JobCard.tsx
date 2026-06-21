import Link from "next/link";

export interface Job {
  id: string;
  title: string;
  location: string;
  type: "Contract" | "Contract-to-Hire" | "Full-Time";
  description: string;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
          <p className="text-sm text-slate-500">
            {job.location} &middot; {job.type}
          </p>
        </div>
        <Link
          href={`/contact?subject=${encodeURIComponent(job.title)}`}
          className="mt-3 sm:mt-0 inline-flex items-center justify-center rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600 transition-colors"
        >
          Apply Now
        </Link>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{job.description}</p>
    </div>
  );
}
