"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "mhi-consent";

export function setConsent(value: "granted" | "denied") {
  localStorage.setItem(STORAGE_KEY, value);
  window.dispatchEvent(new Event("mhi-consent-changed"));
}

export function getConsent(): "granted" | "denied" | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  return v === "granted" || v === "denied" ? v : null;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  const handle = (value: "granted" | "denied") => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-700 bg-slate-900/95 backdrop-blur text-slate-100 shadow-lg"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="text-sm leading-6 max-w-3xl">
          We use analytics to understand how visitors use this site so we can
          improve it. Some tools may identify visiting organizations. Read our{" "}
          <Link href="/privacy" className="underline hover:text-teal-300">
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handle("denied")}
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium hover:border-slate-400 transition-colors"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => handle("granted")}
            className="rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-teal-400 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
