import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Prabhat Tiwari — Software Engineer",
    template: "%s — Prabhat Tiwari",
  },

  description: siteConfig.description,

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,

  keywords: [
    "Prabhat Tiwari",
    "Software Engineer",
    "Software Engineering",
    "AI",
    "Machine Learning",
    "Backend Engineering",
    "Web Development",
    "Python",
    "FastAPI",
    "Next.js",
  ],

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Prabhat Tiwari",
    title: "Prabhat Tiwari — Software Engineer",
    description: siteConfig.description,
  },

  twitter: {
    card: "summary",
    title: "Prabhat Tiwari — Software Engineer",
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} ${display.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[var(--foreground)] focus:px-4 focus:py-2 focus:text-[var(--background)]"
        >
          Skip to content
        </a>

        <SiteHeader />

        <main id="main-content">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}