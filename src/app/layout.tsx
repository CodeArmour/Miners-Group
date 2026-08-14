import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { FloatingNavbar } from "@/components/layout/floating-navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Miners Group | From learning to real software experience",
    template: "%s | Miners Group"
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
    apple: "/brand/app-icon.svg"
  },
  openGraph: {
    title: "Miners Group",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Miners Group",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Miners Group",
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const analyticsSrc = process.env.NEXT_PUBLIC_ANALYTICS_SRC;

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <FloatingNavbar />
        {children}
        <SiteFooter />
        {analyticsSrc ? <Script src={analyticsSrc} strategy="afterInteractive" /> : null}
      </body>
    </html>
  );
}
