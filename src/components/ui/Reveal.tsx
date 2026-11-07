"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInViewOnce } from "@/lib/useInViewOnce";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  const ref = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={
        {
          "--reveal-delay": `${Math.round(delay * 1000)}ms`,
          "--reveal-distance": `${distance}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
