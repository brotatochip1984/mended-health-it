"use client";

import { useState, FormEvent, ChangeEvent } from "react";

const MAX_ATTACHMENT_BYTES = 4 * 1024 * 1024;
const ACCEPT_ATTRIBUTE = ".pdf,.doc,.docx";

export default function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    setFileError(null);
    const file = e.currentTarget.files?.[0] ?? null;
    if (!file) {
      setFileName(null);
      return;
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setFileError("File is over the 4 MB limit. Please pick a smaller one.");
      setFileName(null);
      e.currentTarget.value = "";
      return;
    }
    setFileName(file.name);
  }

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
      setFileName(null);
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-teal-200 bg-teal-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-teal-800">Message sent!</h3>
        <p className="mt-2 text-sm text-teal-700">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700">
          I am a... *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        >
          <option value="">Select one</option>
          <option value="candidate">Candidate looking for a role</option>
          <option value="employer">Employer looking for talent</option>
          <option value="general">General inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          defaultValue={defaultSubject}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        />
      </div>

      <div>
        <label htmlFor="linkedinUrl" className="block text-sm font-medium text-slate-700">
          LinkedIn profile
        </label>
        <input
          id="linkedinUrl"
          name="linkedinUrl"
          type="url"
          placeholder="https://www.linkedin.com/in/your-name"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        />
        <p className="mt-1 text-xs text-slate-500">
          Optional. Helpful if you&apos;re applying for a role.
        </p>
      </div>

      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-slate-700">
          Resume / attachment
        </label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept={ACCEPT_ATTRIBUTE}
          onChange={handleFileChange}
          className="mt-1 block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-teal-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-teal-700 hover:file:bg-teal-100"
        />
        <p className="mt-1 text-xs text-slate-500">
          Optional. PDF, DOC, or DOCX. Max 4 MB.
          {fileName ? ` Selected: ${fileName}` : ""}
        </p>
        {fileError && (
          <p className="mt-1 text-xs text-red-600">{fileError}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white shadow hover:bg-teal-600 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          {errorMessage ?? "Something went wrong. Please try again or email us directly."}
        </p>
      )}
    </form>
  );
}
