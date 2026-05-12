import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mended Health IT collects, uses, and protects information when you visit our site, including analytics and B2B visitor identification.",
};

const LAST_UPDATED = "May 12, 2026";

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal-700 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-lg text-teal-100">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-slate">
          <p className="text-slate-600 leading-7">
            Mended Health IT (&quot;we&quot;, &quot;us&quot;) operates{" "}
            <strong>mendedhealthit.com</strong> (the &quot;Site&quot;). This
            policy explains what we collect when you visit the Site, why we
            collect it, and what choices you have.
          </p>

          <h2 className="mt-10 text-xl font-bold text-slate-800">
            What we collect
          </h2>
          <p className="mt-3 text-slate-600 leading-7">
            When you submit our contact form, we collect the information you
            provide directly: name, email, phone, company, inquiry type,
            subject, and message. We use this information only to respond to
            your inquiry.
          </p>
          <p className="mt-3 text-slate-600 leading-7">
            When you browse the Site, we use the following analytics services,
            subject to your consent (see &quot;Your choices&quot; below):
          </p>
          <ul className="mt-3 space-y-2 text-slate-600 leading-7">
            <li>
              <strong>Vercel Analytics &amp; Speed Insights</strong> &mdash;
              aggregate, anonymous metrics about page views, performance, and
              device/region. No personally identifying cookies.
            </li>
            <li>
              <strong>Microsoft Clarity</strong> &mdash; anonymous session
              recordings and heatmaps used to understand how the Site is used.
              Recordings are masked to exclude form inputs and personal data.
            </li>
            <li>
              <strong>RB2B</strong> &mdash; identifies the company (and, where
              available, the individual) of business visitors to the Site by
              matching against public B2B data sources. Used to inform our
              outreach. This service operates on US traffic only.
            </li>
          </ul>

          <h2 className="mt-10 text-xl font-bold text-slate-800">
            How we use it
          </h2>
          <p className="mt-3 text-slate-600 leading-7">
            We use the information above to:
          </p>
          <ul className="mt-3 space-y-2 text-slate-600 leading-7">
            <li>Respond to inquiries submitted through our contact form.</li>
            <li>
              Understand how visitors use the Site so we can improve content
              and performance.
            </li>
            <li>
              Reach out to organizations that have shown interest in our
              services through targeted, relevant communications.
            </li>
          </ul>
          <p className="mt-3 text-slate-600 leading-7">
            We do not sell your personal information. We do not use this data
            for advertising on third-party networks.
          </p>

          <h2 className="mt-10 text-xl font-bold text-slate-800">
            How we store it
          </h2>
          <p className="mt-3 text-slate-600 leading-7">
            Contact form submissions are stored in a secured Supabase database
            with access restricted to authorized personnel. Analytics data is
            stored by the respective service providers (Vercel, Microsoft,
            RB2B) under their own data protection terms.
          </p>

          <h2 className="mt-10 text-xl font-bold text-slate-800">
            Your choices
          </h2>
          <p className="mt-3 text-slate-600 leading-7">
            When you first visit the Site, we ask for your consent before
            loading analytics scripts. You may reject this consent and continue
            to use the Site fully &mdash; the contact form and all pages work
            without analytics enabled.
          </p>
          <p className="mt-3 text-slate-600 leading-7">
            You may also opt out of B2B visitor identification by sending a
            request to{" "}
            <a
              href="mailto:contact@mendedhealthit.com"
              className="text-teal-700 underline"
            >
              contact@mendedhealthit.com
            </a>
            . We will honor opt-out requests within a reasonable timeframe.
          </p>

          <h2 className="mt-10 text-xl font-bold text-slate-800">
            Your rights
          </h2>
          <p className="mt-3 text-slate-600 leading-7">
            Depending on where you live, you may have the right to access,
            correct, or delete personal information we hold about you, and to
            object to certain uses. To exercise any of these rights, email{" "}
            <a
              href="mailto:contact@mendedhealthit.com"
              className="text-teal-700 underline"
            >
              contact@mendedhealthit.com
            </a>
            .
          </p>

          <h2 className="mt-10 text-xl font-bold text-slate-800">
            Contact
          </h2>
          <p className="mt-3 text-slate-600 leading-7">
            Questions about this policy? Email{" "}
            <a
              href="mailto:contact@mendedhealthit.com"
              className="text-teal-700 underline"
            >
              contact@mendedhealthit.com
            </a>{" "}
            or use the{" "}
            <Link href="/contact" className="text-teal-700 underline">
              contact form
            </Link>
            .
          </p>

          <p className="mt-10 text-sm text-slate-500 italic">
            This is a starting policy. We recommend an attorney review it
            before relying on it for legal compliance, particularly if you
            expand into healthcare data handling, EU traffic, or California
            consumer privacy obligations.
          </p>
        </div>
      </section>
    </>
  );
}
