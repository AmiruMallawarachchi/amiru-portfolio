"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Magnetic from "@/components/ui/Magnetic";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Home", path: "/#home" },
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/#contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/projects") return pathname === "/projects" || pathname.startsWith("/projects/");
    if (path === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    if (path === "/#home") return pathname === "/";
    return false;
  };

  return (
    <nav
      className={cn(
        "fixed top-8 left-1/2 -translate-x-1/2 z-[90] transition-all duration-500",
        scrolled ? "top-6" : "top-8"
      )}
    >
      <div className="glass px-6 py-2 rounded-full flex items-center gap-4">
        {navItems.map((item) => (
          <Magnetic key={item.path} strength={0.2}>
            <Link
              href={item.path}
              className="relative px-3 py-2 group flex flex-col items-center"
            >
              <span
                className={cn(
                  "text-[10px] uppercase tracking-widest font-bold transition-colors duration-300",
                  isActive(item.path)
                    ? "text-white"
                    : "text-white/50 group-hover:text-white"
                )}
              >
                {item.name}
              </span>
              <motion.div
                className="w-1 h-1 rounded-full bg-accent mt-1"
                animate={{ opacity: isActive(item.path) ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
          </Magnetic>
        ))}
      </div>
    </nav>
  );
}
