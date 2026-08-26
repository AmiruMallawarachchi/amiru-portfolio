import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

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

export const metadata: Metadata = {
  title: "Amiru Mallawarachchi | AI Engineer",
  description:
    "AI Engineer building LLM applications, agentic systems and RAG. Fine-tuned and published five transformer models to Hugging Face, then built the 14-agent platform that serves them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
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
