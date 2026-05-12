import Link from "next/link";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
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
              Healthcare IT staffing, recruitment, and business development.
              Connecting top talent with organizations that improve patient care.
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
              <li>jcooper@healthtech-resources.com</li>
              <li>(555) 000-0000</li>
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
