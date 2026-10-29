"use client";

import { useState } from "react";

// The signature visual: a bounded agentic system — an orchestrator at the centre
// with six capability nodes it can dispatch to. Every edge is a tool call, and
// the travelling packet is a token leaving the loop.
//
// Everything here is CSS/SVG animation (no per-frame React state) so the hero
// stays cheap: one hover state, zero requestAnimationFrame loops.

const W = 1000;
const H = 560;
const CX = W / 2;
const CY = 268;
const CORE_R = 46;

type GraphNode = {
  id: string;
  label: string;
  meta: string;
  x: number;
  y: number;
};

const NODES: GraphNode[] = [
  { id: "retrieval", label: "retrieval", meta: "vector search", x: 150, y: 150 },
  { id: "planner", label: "planner", meta: "intent routing", x: 852, y: 138 },
  { id: "tools", label: "tools", meta: "mcp servers", x: 104, y: 352 },
  { id: "memory", label: "memory", meta: "state + context", x: 896, y: 340 },
  { id: "evaluation", label: "evaluation", meta: "langfuse traces", x: 340, y: 486 },
  { id: "guardrails", label: "guardrails", meta: "safety gates", x: 660, y: 486 },
];

const COLORS = ["#2ec4b6", "#ff9f1c", "#38bdf8", "#a78bfa", "#4ade80", "#f472b6"];

// A quadratic edge that leaves the core ring and lands just short of the node
// dot, bent slightly so the six paths read as one rotation instead of a star.
function edgePath(node: GraphNode) {
  const dx = node.x - CX;
  const dy = node.y - CY;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;

  const sx = CX + ux * (CORE_R + 4);
  const sy = CY + uy * (CORE_R + 4);
  const ex = node.x - ux * 15;
  const ey = node.y - uy * 15;

  const bend = 24;
  const cx = (sx + ex) / 2 - uy * bend;
  const cy = (sy + ey) / 2 + ux * bend;

  return `M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`;
}

export default function AgentGraph() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full overflow-visible lg:h-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Architecture diagram of an agentic AI system: a central agent orchestrator connected to retrieval, planner, tools, memory, evaluation and guardrail nodes."
    >
      <defs>
        <radialGradient id="ag-core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff9f1c" stopOpacity="0.22" />
          <stop offset="55%" stopColor="#ff9f1c" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#ff9f1c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ag-core-fill" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ff9f1c" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#ff9f1c" stopOpacity="0.03" />
        </radialGradient>
        <filter id="ag-node-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient core light */}
      <circle cx={CX} cy={CY} r={190} fill="url(#ag-core-glow)" aria-hidden="true" />

      {/* Orbit rings — dash offset animation reads as slow rotation without
          relying on transform-origin across SVG engines. */}
      <circle
        cx={CX}
        cy={CY}
        r={78}
        fill="none"
        stroke="rgba(236,235,229,0.10)"
        strokeWidth={1}
        strokeDasharray="2 10"
        className="ag-ring-slow"
        aria-hidden="true"
      />
      <circle
        cx={CX}
        cy={CY}
        r={118}
        fill="none"
        stroke="rgba(236,235,229,0.06)"
        strokeWidth={1}
        strokeDasharray="1 16"
        className="ag-ring-slower"
        aria-hidden="true"
      />

      {/* Edges */}
      {NODES.map((node, i) => {
        const d = edgePath(node);
        const isActive = active === node.id;
        return (
          <g key={`edge-${node.id}`}>
            <path
              d={d}
              fill="none"
              stroke={isActive ? `${COLORS[i]}99` : "rgba(236,235,229,0.15)"}
              strokeWidth={isActive ? 1.6 : 1.1}
              style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease" }}
            />
            <path
              d={d}
              fill="none"
              stroke={COLORS[i]}
              strokeWidth={1.6}
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray="0.05 0.95"
              className="ag-flow"
              style={{ animationDelay: `${i * 0.62}s` }}
              opacity={isActive ? 1 : 0.75}
            />
          </g>
        );
      })}

      {/* Core */}
      <g>
        <circle
          cx={CX}
          cy={CY}
          r={CORE_R}
          fill="url(#ag-core-fill)"
          stroke="rgba(255,159,28,0.38)"
          strokeWidth={1}
        />
        <circle
          cx={CX}
          cy={CY}
          r={CORE_R + 6}
          fill="none"
          stroke="rgba(255,159,28,0.16)"
          strokeWidth={1}
          strokeDasharray="3 7"
          className="ag-ring-slow"
        />
        <text
          x={CX}
          y={CY - 2}
          textAnchor="middle"
          fontFamily="var(--font-mono-face), monospace"
          fontWeight="700"
          letterSpacing="0.18em"
          fill="#ff9f1c"
          className="text-[26px] sm:text-[13px]"
        >
          AGENT
        </text>
        <text
          x={CX}
          y={CY + 17}
          textAnchor="middle"
          fontFamily="var(--font-mono-face), monospace"
          letterSpacing="0.26em"
          fill="rgba(255,159,28,0.55)"
          className="text-[16px] sm:text-[9px]"
        >
          LOOP
        </text>
      </g>

      {/* Nodes */}
      {NODES.map((node, i) => {
        const isActive = active === node.id;
        const color = COLORS[i];
        const labelY = node.y + 40;
        const metaY = node.y + 59;
        return (
          <g
            key={node.id}
            onMouseEnter={() => setActive(node.id)}
            onMouseLeave={() => setActive(null)}
            onPointerDown={() => setActive(null)}
          >
            <title>{`${node.label} — ${node.meta}`}</title>

            {/* hit area */}
            <circle cx={node.x} cy={node.y} r={26} fill="transparent" />

            <circle
              cx={node.x}
              cy={node.y}
              r={isActive ? 17 : 13}
              fill="none"
              stroke={color}
              strokeOpacity={isActive ? 0.6 : 0.32}
              strokeWidth={1.1}
              style={{ transition: "r 0.35s ease, stroke-opacity 0.35s ease" }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={isActive ? 6 : 4.5}
              fill={color}
              filter="url(#ag-node-glow)"
              style={{ transition: "r 0.35s ease" }}
            />

            <text
              x={node.x}
              y={labelY}
              textAnchor="middle"
              fontFamily="var(--font-mono-face), monospace"
              letterSpacing="0.06em"
              fill={isActive ? color : "rgba(236,235,229,0.72)"}
              style={{ transition: "fill 0.35s ease" }}
              className="text-[32px] sm:text-[20px]"
            >
              {node.label}
            </text>
            <text
              x={node.x}
              y={metaY}
              textAnchor="middle"
              fontFamily="var(--font-mono-face), monospace"
              letterSpacing="0.14em"
              fill={isActive ? "rgba(236,235,229,0.7)" : "rgba(236,235,229,0.4)"}
              style={{ transition: "fill 0.35s ease" }}
              className="text-[22px] sm:text-[12px]"
            >
              {node.meta.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
