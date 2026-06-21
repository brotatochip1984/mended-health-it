"use client";

import { useState, FormEvent } from "react";

const AI_INTEREST_OPTIONS = [
  "AI readiness assessment",
  "Vendor selection",
  "AI governance",
  "Ambient clinical documentation",
  "Revenue cycle / prior authorization",
  "Workforce / implementation staffing",
  "Not sure yet",
  "Other",
];

const EHR_OPTIONS = [
  "Epic",
  "Oracle Health / Cerner",
  "MEDITECH",
  "NextGen",
  "Athenahealth",
  "eClinicalWorks",
  "Multiple / Other",
  "Not sure",
];

const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none";

export default function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Failed to send");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-teal-800">Request received</h3>
        <p className="mt-2 text-sm text-teal-700">
          Thanks. We&apos;ll reach out within one business day to schedule your
          readiness call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="inquiryType" value="advisory" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Name *
          </label>
          <input id="name" name="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700">
            Organization
          </label>
          <input id="company" name="company" className={inputClass} />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700">
            Role
          </label>
          <input
            id="role"
            name="role"
            placeholder="e.g. CIO, CMIO, VP Revenue Cycle"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="aiInterest" className="block text-sm font-medium text-slate-700">
            AI interest area
          </label>
          <select id="aiInterest" name="aiInterest" defaultValue="" className={inputClass}>
            <option value="">Select one</option>
            {AI_INTEREST_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="currentEhr" className="block text-sm font-medium text-slate-700">
            Current EHR
          </label>
          <select id="currentEhr" name="currentEhr" defaultValue="" className={inputClass}>
            <option value="">Select one</option>
            {EHR_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      {defaultSubject ? (
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
            Interested in
          </label>
          <input
            id="subject"
            name="subject"
            defaultValue={defaultSubject}
            className={inputClass}
          />
        </div>
      ) : (
        <input type="hidden" name="subject" value="" />
      )}

      <div>
        <label htmlFor="painPoint" className="block text-sm font-medium text-slate-700">
          Biggest operational pain point *
        </label>
        <textarea
          id="painPoint"
          name="painPoint"
          rows={5}
          required
          placeholder="What is the problem you are hoping AI could help with?"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow hover:bg-teal-600 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Schedule a readiness call"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {errorMessage ?? "Something went wrong. Please try again or email us directly."}
        </p>
      )}
    </form>
  );
}
