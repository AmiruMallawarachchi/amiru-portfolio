import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "AMIRU MALLAWA ARACHCHI | Gen AI Engineer",
  description: "Portfolio of Amiru Mallawa Arachchi - Software Engineering Student & Gen AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans">
        <SmoothScrollProvider>
          <div className="noise-bg" />
          <div className="fixed inset-0 grid-bg z-[-1]" />
          <CustomCursor />
          <Navigation />
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
