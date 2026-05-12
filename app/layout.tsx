import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://mendedhealthit.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mended Health IT | Healthcare IT Staffing & Recruitment",
    template: "%s | Mended Health IT",
  },
  description:
    "Healthcare IT staffing, recruitment, and business development. Mended Health IT connects hospitals, health systems, and HIT vendors with vetted Epic, Cerner, MEDITECH, security, and informatics talent.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Mended Health IT",
    title: "Mended Health IT | Healthcare IT Staffing & Recruitment",
    description:
      "Healthcare IT staffing, recruitment, and business development. Vetted Epic, Cerner, MEDITECH, security, and informatics talent.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mended Health IT",
    description:
      "Healthcare IT staffing, recruitment, and business development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mended Health IT",
  url: SITE_URL,
  email: "contact@mendedhealthit.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Justin Cooper",
  },
  description:
    "Healthcare IT staffing, recruitment, and business development.",
  knowsAbout: [
    "Healthcare IT staffing",
    "Epic EHR recruitment",
    "Cerner recruitment",
    "MEDITECH recruitment",
    "Healthcare cybersecurity",
    "Clinical informatics",
    "HIPAA compliance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <AnalyticsProvider />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
