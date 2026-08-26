"use client";

import { motion, useReducedMotion } from "framer-motion";

// A router handing off to specialist nodes — the shape of every multi-agent
// system in this portfolio, used as the hero's signature visual instead of a
// generic blurred gradient blob. The convergence point sits behind the name:
// the name is the router.
const CENTER = { x: 500, y: 250 };

// Positioned to clear the centered text column and the badge above it.
const NODES = [
  { id: "agents", label: "agents", x: 110, y: 90 },
  { id: "retrieval", label: "retrieval", x: 890, y: 90 },
  { id: "full-stack", label: "full-stack", x: 90, y: 410 },
  { id: "shipped", label: "shipped", x: 910, y: 410 },
  { id: "systems", label: "systems", x: 500, y: 480 },
] as const;

const CYCLE = 1.4;
const PULSE = 1.8;

export default function RouterGraph() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 1000 520"
      className="w-full h-full"
      role="img"
      aria-label="A router node connected to five capability nodes: agents, retrieval, full-stack, shipped, and systems"
    >
      {NODES.map((node) => (
        <line
          key={`edge-${node.id}`}
          x1={CENTER.x}
          y1={CENTER.y}
          x2={node.x}
          y2={node.y}
          stroke="rgba(236,235,229,0.13)"
          strokeWidth={1.5}
        />
      ))}

      {!reduceMotion &&
        NODES.map((node, i) => (
          <motion.line
            key={`pulse-${node.id}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={node.x}
            y2={node.y}
            stroke="#ff9f1c"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray="16 600"
            initial={{ strokeDashoffset: 0, opacity: 0 }}
            animate={{ strokeDashoffset: -620, opacity: [0, 1, 1, 0] }}
            transition={{
              duration: PULSE,
              delay: i * CYCLE,
              repeat: Infinity,
              repeatDelay: NODES.length * CYCLE - PULSE,
              ease: "linear",
            }}
          />
        ))}

      {/* Router node */}
      <circle cx={CENTER.x} cy={CENTER.y} r={9} fill="#ff9f1c" />
      <circle cx={CENTER.x} cy={CENTER.y} r={19} fill="none" stroke="#ff9f1c" strokeWidth={1} opacity={0.35} />
      <text
        x={CENTER.x}
        y={CENTER.y + 44}
        textAnchor="middle"
        fontFamily="var(--font-mono-face), monospace"
        fontSize="19"
        letterSpacing="0.14em"
        fill="rgba(255,159,28,0.75)"
      >
        router
      </text>

      {/* Capability nodes */}
      {NODES.map((node) => (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r={5.5} fill="#2ec4b6" />
          <circle cx={node.x} cy={node.y} r={13} fill="none" stroke="#2ec4b6" strokeWidth={1} opacity={0.3} />
          <text
            x={node.x}
            y={node.y + (node.y < CENTER.y ? -26 : 34)}
            textAnchor="middle"
            fontFamily="var(--font-mono-face), monospace"
            fontSize="19"
            letterSpacing="0.08em"
            fill="rgba(236,235,229,0.5)"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
