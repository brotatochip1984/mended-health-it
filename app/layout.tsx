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
    default: "Mended Health IT | Independent Healthcare AI Advisory & Brokerage",
    template: "%s | Mended Health IT",
  },
  description:
    "Independent, vendor-neutral Healthcare AI Advisory and Brokerage. We help healthcare organizations evaluate AI readiness, select trusted vendors, govern risk, and build implementation teams.",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Mended Health IT",
    title: "Mended Health IT | Independent Healthcare AI Advisory & Brokerage",
    description:
      "Vendor-neutral AI readiness, vendor selection, governance, and implementation advisory for healthcare.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mended Health IT",
    description:
      "Independent Healthcare AI Advisory and Brokerage. Vendor-neutral by design.",
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
    "Independent Healthcare AI Advisory and Brokerage.",
  knowsAbout: [
    "Healthcare AI readiness",
    "Healthcare AI governance",
    "AI vendor selection",
    "Clinical informatics",
    "Ambient clinical documentation",
    "Revenue cycle AI",
    "AI implementation planning",
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
