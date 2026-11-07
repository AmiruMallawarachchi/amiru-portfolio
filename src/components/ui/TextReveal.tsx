"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInViewOnce } from "@/lib/useInViewOnce";

interface TextRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export default function TextReveal({ children, width = "fit-content", delay = 0.2 }: TextRevealProps) {
  const ref = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="text-reveal"
      style={
        {
          width,
          "--reveal-delay": `${Math.round(delay * 1000)}ms`,
        } as CSSProperties
      }
    >
      <div className="text-reveal-inner">{children}</div>
    </div>
  );
}
