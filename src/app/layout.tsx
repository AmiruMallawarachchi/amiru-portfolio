import type { Metadata, Viewport } from "next";
import { Archivo, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";
import { buildGraph, personSchema, websiteSchema } from "@/lib/schema";

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-face",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#08090b",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s · Amiru Mallawarachchi",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  keywords: [...SITE.keywords],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.shortDescription,
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body className="antialiased font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:text-background"
        >
          Skip to content
        </a>
        <JsonLd data={buildGraph([personSchema(), websiteSchema()])} />
        <SmoothScrollProvider>
          <div className="noise-bg" />
          <div className="fixed inset-0 grid-bg z-[-1]" />
          <CustomCursor />
          <Navigation />
          <main id="main">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
