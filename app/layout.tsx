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
    default: "Mended Health IT | Healthcare Transformation & Advisory",
    template: "%s | Mended Health IT",
  },
  description:
    "Healthcare IT transformation, advisory, and strategic staffing. Mended Health IT supports health systems, health plans, Tribal organizations, and FQHCs through complex EHR, AI, interoperability, and revenue cycle initiatives.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Mended Health IT",
    title: "Mended Health IT | Healthcare Transformation & Advisory",
    description:
      "Healthcare IT transformation, advisory, and strategic staffing. Operators who've been on the floor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mended Health IT",
    description:
      "Healthcare IT transformation and advisory. Operators, not resume brokers.",
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
