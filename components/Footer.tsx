import Link from "next/link";

const quickLinks = [
  { href: "/assessment", label: "AI Readiness Assessment" },
  { href: "/vendors", label: "Vendor Landscape" },
  { href: "/opportunities", label: "Opportunity Matrix" },
  { href: "/pricing", label: "Pricing" },
  { href: "/research", label: "Research & Trust" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">
              <span className="text-teal-400">Mended</span> Health IT
            </p>
            <p className="mt-3 text-sm leading-6">
              Independent Healthcare AI Advisory and Brokerage. Helping
              organizations evaluate AI readiness, select trusted vendors, govern
              risk, and build implementation teams.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@mendedhealthit.com"
                  className="hover:text-teal-400 transition-colors"
                >
                  contact@mendedhealthit.com
                </a>
              </li>
              <li>Phoenix, AZ</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-slate-700 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:justify-between sm:gap-0">
          <p>
            &copy; {new Date().getFullYear()} Mended Health IT. All rights
            reserved.
          </p>
          <Link
            href="/privacy"
            className="hover:text-teal-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
