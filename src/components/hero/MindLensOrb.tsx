"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "observe", position: "left-[8%] top-[24%]", color: "#ff9f1c" },
  { label: "retrieve", position: "right-[8%] top-[19%]", color: "#2ec4b6" },
  { label: "reason", position: "left-[13%] bottom-[22%]", color: "#9e8cff" },
  { label: "protect", position: "right-[10%] bottom-[18%]", color: "#f19bd8" },
];

export default function MindLensOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px] overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        animate={{ backgroundColor: ["#ff9f1c", "#2ec4b6", "#9e8cff", "#f19bd8", "#ff9f1c"], opacity: [0.18, 0.28, 0.2, 0.24, 0.18], scale: [0.85, 1.05, 0.9, 1.08, 0.85] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/30 shadow-[0_0_80px_rgba(255,159,28,0.18)] backdrop-blur-sm"
        animate={{ borderColor: ["rgba(255,159,28,0.35)", "rgba(46,196,182,0.35)", "rgba(158,140,255,0.35)", "rgba(241,155,216,0.35)", "rgba(255,159,28,0.35)"], rotate: [0, 360] }}
        transition={{ borderColor: { duration: 18, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 40, repeat: Infinity, ease: "linear" } }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[13%] w-[13%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{ backgroundColor: ["#ff9f1c", "#2ec4b6", "#9e8cff", "#f19bd8", "#ff9f1c"], boxShadow: ["0 0 28px #ff9f1c", "0 0 34px #2ec4b6", "0 0 30px #9e8cff", "0 0 34px #f19bd8", "0 0 28px #ff9f1c"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[4.2rem] font-mono text-[10px] uppercase tracking-[0.36em] text-foreground/45">mindlens / live</div>

      {nodes.map((node, index) => (
        <div key={node.label} className={`absolute ${node.position} flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/45`}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: node.color, boxShadow: `0 0 14px ${node.color}` }} />
          {node.label}
          <motion.span className="absolute h-px w-20 bg-white/10" animate={{ opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2.4 + index * 0.3, repeat: Infinity }} />
        </div>
      ))}
    </div>
  );
}
