"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────────────
   TAB DATA
   ────────────────────────────────────────────────────── */

const tabs = [
  { id: "runway", label: "Runway", icon: "chart" },
  { id: "captable", label: "Cap Table", icon: "pie" },
  { id: "hiring", label: "Hiring", icon: "kanban" },
  { id: "updates", label: "Updates", icon: "mail" },
] as const;

type TabId = (typeof tabs)[number]["id"];

/* ──────────────────────────────────────────────────────
   TAB CONTENT COMPONENTS
   ────────────────────────────────────────────────────── */

/* ---- Runway ---- */
const RunwayTab = () => {
  const [scenario, setScenario] = useState<"default" | "aggressive" | "funded">("default");

  const scenarioData: Record<string, { months: string; burn: string; color: string }> = {
    default: { months: "14.2", burn: "$48K", color: "#FF6B35" },
    aggressive: { months: "9.1", burn: "$72K", color: "#EF4444" },
    funded: { months: "26.8", burn: "$48K", color: "#22C55E" },
  };

  const current = scenarioData[scenario];

  // Cash balance chart — 18 months of data
  const chartData: Record<string, number[]> = {
    default: [680, 632, 584, 538, 494, 452, 412, 374, 338, 304, 272, 242, 214, 188, 164, 142, 122, 104],
    aggressive: [680, 608, 540, 476, 416, 360, 308, 260, 216, 176, 140, 108, 80, 56, 36, 20, 8, 0],
    funded: [680, 632, 584, 538, 494, 1452, 1404, 1358, 1314, 1272, 1232, 1194, 1158, 1124, 1092, 1062, 1034, 1008],
  };

  const data = chartData[scenario];
  const maxVal = Math.max(...data);
  const chartH = 160;
  const chartW = 500;

  const pathD = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * chartW;
      const y = chartH - (v / maxVal) * chartH;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  const areaD = pathD + ` L${chartW},${chartH} L0,${chartH} Z`;

  return (
    <div>
      {/* Top metrics */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 24 }}>
        <div
          style={{
            background: `${current.color}12`,
            borderRadius: 10,
            padding: "12px 20px",
            border: `1px solid ${current.color}20`,
          }}
        >
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 11, color: "#71717A", marginBottom: 2 }}>
            Months of Runway
          </p>
          <p style={{ fontFamily: "var(--font-sora)", fontSize: 28, fontWeight: 700, color: current.color, letterSpacing: "-0.02em" }}>
            {current.months}
          </p>
        </div>
        <div style={{ background: "rgba(99,102,241,0.06)", borderRadius: 10, padding: "12px 20px", border: "1px solid rgba(99,102,241,0.12)" }}>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 11, color: "#71717A", marginBottom: 2 }}>
            Monthly Burn
          </p>
          <p style={{ fontFamily: "var(--font-sora)", fontSize: 28, fontWeight: 700, color: "#6366F1", letterSpacing: "-0.02em" }}>
            {current.burn}
          </p>
        </div>
        <div style={{ background: "rgba(24,24,27,0.03)", borderRadius: 10, padding: "12px 20px", border: "1px solid rgba(24,24,27,0.06)" }}>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 11, color: "#71717A", marginBottom: 2 }}>
            Cash Balance
          </p>
          <p style={{ fontFamily: "var(--font-sora)", fontSize: 28, fontWeight: 700, color: "#18181B", letterSpacing: "-0.02em" }}>
            $680K
          </p>
        </div>
      </div>

      {/* Scenario toggles */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {[
          { id: "default" as const, label: "Current Plan" },
          { id: "aggressive" as const, label: "Aggressive Hiring" },
          { id: "funded" as const, label: "+$1M Funding" },
        ].map((s) => (
          <button
            key={s.id}
            onClick={() => setScenario(s.id)}
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 12,
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: 6,
              border: "1px solid",
              borderColor: scenario === s.id ? "#FF6B35" : "rgba(24,24,27,0.1)",
              background: scenario === s.id ? "rgba(255,107,53,0.08)" : "transparent",
              color: scenario === s.id ? "#FF6B35" : "#71717A",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: 10, background: "rgba(24,24,27,0.02)", padding: "20px 16px 12px" }}>
        <svg width="100%" viewBox={`0 0 ${chartW} ${chartH + 20}`} preserveAspectRatio="none">
          <defs>
            <linearGradient id="runwayGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={current.color} stopOpacity="0.15" />
              <stop offset="100%" stopColor={current.color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#runwayGrad)" />
          <path d={pathD} fill="none" stroke={current.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 4 }}>
          {["Jan", "Apr", "Jul", "Oct", "Jan", "Jun"].map((m) => (
            <span key={m} style={{ fontFamily: "var(--font-jetbrains)", fontSize: 10, color: "#A1A1AA" }}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---- Cap Table ---- */
const CapTableTab = () => {
  const segments = [
    { label: "Founders", pct: 62, color: "#FF6B35" },
    { label: "Seed Investors", pct: 18, color: "#6366F1" },
    { label: "SAFE Holders", pct: 12, color: "#22C55E" },
    { label: "Option Pool", pct: 8, color: "#F59E0B" },
  ];

  // Build pie segments
  let cumulative = 0;
  const radius = 80;
  const cx = 90;
  const cy = 90;

  const arcs = segments.map((seg) => {
    const startAngle = (cumulative / 100) * 2 * Math.PI - Math.PI / 2;
    cumulative += seg.pct;
    const endAngle = (cumulative / 100) * 2 * Math.PI - Math.PI / 2;
    const largeArc = seg.pct > 50 ? 1 : 0;

    const x1 = cx + radius * Math.cos(startAngle);
    const y1 = cy + radius * Math.sin(startAngle);
    const x2 = cx + radius * Math.cos(endAngle);
    const y2 = cy + radius * Math.sin(endAngle);

    return {
      ...seg,
      d: `M${cx},${cy} L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`,
    };
  });

  const stakeholders = [
    { name: "Sarah Chen", role: "Co-founder & CEO", shares: "4,200,000", pct: "35.0%" },
    { name: "Mike Torres", role: "Co-founder & CTO", shares: "3,240,000", pct: "27.0%" },
    { name: "Seedcamp", role: "Seed Investor", shares: "1,200,000", pct: "10.0%" },
    { name: "Hustle Fund", role: "Seed Investor", shares: "960,000", pct: "8.0%" },
    { name: "Angel Syndicate", role: "SAFE Holders", shares: "1,440,000", pct: "12.0%" },
    { name: "Option Pool", role: "Unallocated", shares: "960,000", pct: "8.0%" },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }} className="md:!grid-cols-[200px_1fr]">
      {/* Pie chart */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <svg width="180" height="180" viewBox="0 0 180 180">
          {arcs.map((arc) => (
            <path key={arc.label} d={arc.d} fill={arc.color} stroke="#FFFFFF" strokeWidth="2" />
          ))}
          <circle cx={cx} cy={cy} r="40" fill="#FFFFFF" />
          <text x={cx} y={cy - 4} textAnchor="middle" style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 700, fill: "#18181B" }}>
            12M
          </text>
          <text x={cx} y={cy + 14} textAnchor="middle" style={{ fontFamily: "var(--font-jakarta)", fontSize: 10, fill: "#71717A" }}>
            total shares
          </text>
        </svg>
        {/* Legend */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {segments.map((seg) => (
            <div key={seg.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: seg.color, flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-jakarta)", fontSize: 12, color: "#71717A", whiteSpace: "nowrap" }}>
                {seg.label} ({seg.pct}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stakeholder table */}
      <div style={{ overflow: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["Stakeholder", "Role", "Shares", "%"].map((h) => (
                <th
                  key={h}
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#A1A1AA",
                    textAlign: "left",
                    padding: "8px 12px",
                    borderBottom: "1px solid rgba(24,24,27,0.08)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {stakeholders.map((s) => (
              <tr key={s.name}>
                <td style={{ fontFamily: "var(--font-jakarta)", fontSize: 13, fontWeight: 500, color: "#18181B", padding: "10px 12px", borderBottom: "1px solid rgba(24,24,27,0.04)" }}>
                  {s.name}
                </td>
                <td style={{ fontFamily: "var(--font-jakarta)", fontSize: 13, color: "#71717A", padding: "10px 12px", borderBottom: "1px solid rgba(24,24,27,0.04)" }}>
                  {s.role}
                </td>
                <td style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, color: "#18181B", padding: "10px 12px", borderBottom: "1px solid rgba(24,24,27,0.04)" }}>
                  {s.shares}
                </td>
                <td style={{ fontFamily: "var(--font-jetbrains)", fontSize: 12, color: "#6366F1", fontWeight: 500, padding: "10px 12px", borderBottom: "1px solid rgba(24,24,27,0.04)" }}>
                  {s.pct}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ---- Hiring ---- */
const HiringTab = () => {
  const columns = [
    {
      title: "Sourced",
      color: "#A1A1AA",
      cards: [
        { name: "Emily Park", role: "Senior Frontend", source: "LinkedIn" },
        { name: "James Liu", role: "Full-Stack", source: "Referral" },
        { name: "Priya Sharma", role: "Product Designer", source: "Portfolio" },
      ],
    },
    {
      title: "Screening",
      color: "#6366F1",
      cards: [
        { name: "Alex Chen", role: "Backend Engineer", source: "AngelList" },
        { name: "Maria Gonzalez", role: "Full-Stack", source: "Referral" },
      ],
    },
    {
      title: "Interview",
      color: "#FF6B35",
      cards: [
        { name: "David Kim", role: "Senior Frontend", source: "LinkedIn" },
      ],
    },
    {
      title: "Offer",
      color: "#22C55E",
      cards: [
        { name: "Sarah Johnson", role: "Product Designer", source: "Portfolio" },
      ],
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 13, color: "#71717A" }}>
          <span style={{ fontFamily: "var(--font-sora)", fontWeight: 600, color: "#18181B" }}>3 open roles</span> &middot; 7 active candidates
        </p>
        <div
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: 12,
            fontWeight: 500,
            padding: "5px 12px",
            borderRadius: 6,
            background: "rgba(255,107,53,0.08)",
            color: "#FF6B35",
          }}
        >
          + Add role
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
        }}
        className="md:!grid-cols-4"
      >
        {columns.map((col) => (
          <div key={col.title}>
            {/* Column header */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, paddingBottom: 8, borderBottom: `2px solid ${col.color}` }}>
              <span style={{ fontFamily: "var(--font-sora)", fontSize: 13, fontWeight: 600, color: "#18181B" }}>
                {col.title}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 11,
                  color: "#A1A1AA",
                  background: "rgba(24,24,27,0.04)",
                  borderRadius: 4,
                  padding: "1px 6px",
                }}
              >
                {col.cards.length}
              </span>
            </div>

            {/* Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {col.cards.map((card) => (
                <div
                  key={card.name}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: "1px solid rgba(24,24,27,0.08)",
                    cursor: "default",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 13, fontWeight: 500, color: "#18181B", marginBottom: 2 }}>
                    {card.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 11, color: "#71717A" }}>
                    {card.role}
                  </p>
                  <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 10, color: "#A1A1AA", marginTop: 4 }}>
                    via {card.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---- Updates ---- */
const UpdatesTab = () => {
  const metrics = [
    { label: "MRR", value: "$12.4K", change: "+18%", positive: true },
    { label: "Burn Rate", value: "$48K", change: "-4%", positive: true },
    { label: "Runway", value: "14.2 mo", change: "+1.2", positive: true },
    { label: "Team Size", value: "8", change: "+2", positive: true },
    { label: "Active Users", value: "342", change: "+24%", positive: true },
    { label: "NPS", value: "67", change: "+5", positive: true },
  ];

  return (
    <div>
      {/* Compose header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <p style={{ fontFamily: "var(--font-sora)", fontSize: 16, fontWeight: 600, color: "#18181B", marginBottom: 2 }}>
            March 2024 Investor Update
          </p>
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 12, color: "#A1A1AA" }}>
            Draft &middot; 12 recipients &middot; Last sent: Feb 28
          </p>
        </div>
        <div
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: 13,
            fontWeight: 600,
            padding: "8px 18px",
            borderRadius: 8,
            background: "#FF6B35",
            color: "#FFFFFF",
          }}
        >
          Send Update
        </div>
      </div>

      {/* Auto-populated metrics */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <p style={{ fontFamily: "var(--font-sora)", fontSize: 13, fontWeight: 600, color: "#18181B" }}>
            Auto-populated Metrics
          </p>
          <span style={{ fontFamily: "var(--font-jakarta)", fontSize: 10, color: "#22C55E", background: "rgba(34,197,94,0.08)", padding: "2px 8px", borderRadius: 4 }}>
            Live
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 8,
          }}
          className="md:!grid-cols-3"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                background: "rgba(24,24,27,0.02)",
                borderRadius: 8,
                padding: "10px 14px",
                border: "1px solid rgba(24,24,27,0.06)",
              }}
            >
              <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 11, color: "#A1A1AA", marginBottom: 2 }}>
                {m.label}
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontFamily: "var(--font-sora)", fontSize: 18, fontWeight: 600, color: "#18181B" }}>
                  {m.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 11,
                    color: m.positive ? "#22C55E" : "#EF4444",
                  }}
                >
                  {m.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editor area */}
      <div
        style={{
          background: "rgba(24,24,27,0.02)",
          borderRadius: 10,
          padding: 20,
          border: "1px solid rgba(24,24,27,0.06)",
        }}
      >
        <p style={{ fontFamily: "var(--font-sora)", fontSize: 14, fontWeight: 600, color: "#18181B", marginBottom: 12 }}>
          Highlights
        </p>
        <div style={{ fontFamily: "var(--font-jakarta)", fontSize: 14, lineHeight: 1.8, color: "#52525B" }}>
          <p style={{ marginBottom: 8 }}>
            <span style={{ color: "#18181B", fontWeight: 500 }}>Product:</span> Shipped v2.3 with automated investor update metrics. Early feedback is strong — 89% of beta users sent their first update within 48 hours.
          </p>
          <p style={{ marginBottom: 8 }}>
            <span style={{ color: "#18181B", fontWeight: 500 }}>Growth:</span> MRR hit $12.4K (+18% MoM). Pipeline has $28K in qualified opportunities closing this quarter.
          </p>
          <p>
            <span style={{ color: "#18181B", fontWeight: 500 }}>Team:</span> Hired a senior frontend engineer (David, ex-Vercel) and a product designer (Sarah, ex-Figma). Team is now 8 people.
          </p>
        </div>
        <div
          style={{
            marginTop: 16,
            padding: "8px 12px",
            border: "1px dashed rgba(24,24,27,0.12)",
            borderRadius: 6,
            fontFamily: "var(--font-jakarta)",
            fontSize: 13,
            color: "#A1A1AA",
          }}
        >
          Type your asks, challenges, or anything else investors should know...
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────────────── */

const tabComponents: Record<TabId, React.FC> = {
  runway: RunwayTab,
  captable: CapTableTab,
  hiring: HiringTab,
  updates: UpdatesTab,
};

const tabIcons: Record<string, React.ReactNode> = {
  chart: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 2v12h12" />
      <path d="M5 11l3-5 3 3 3-6" />
    </svg>
  ),
  pie: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6" />
      <path d="M8 2v6h6" />
    </svg>
  ),
  kanban: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="3.5" height="12" rx="0.5" />
      <rect x="6.5" y="4" width="3.5" height="10" rx="0.5" />
      <rect x="11" y="3" width="3.5" height="11" rx="0.5" />
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="12" height="10" rx="1" />
      <path d="M2 4l6 5 6-5" />
    </svg>
  ),
};

export default function ProductShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [activeTab, setActiveTab] = useState<TabId>("runway");

  const ActiveComponent = tabComponents[activeTab];

  return (
    <section
      ref={ref}
      id="product"
      style={{
        paddingTop: 96,
        paddingBottom: 96,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(24,24,27,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10" style={{ position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 13,
              fontWeight: 600,
              color: "#6366F1",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 12,
            }}
          >
            Product deep-dive
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#18181B",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Built for how founders actually work
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 17,
              color: "#71717A",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Every feature was designed with a founding team of 2-15 in mind.
            No enterprise bloat. No features you&apos;ll never use.
          </p>
        </motion.div>

        {/* Tabbed interface */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#FFFFFF",
            borderRadius: 20,
            border: "1px solid rgba(24,24,27,0.08)",
            boxShadow: "0 12px 48px rgba(24,24,27,0.06), 0 2px 8px rgba(24,24,27,0.03)",
            overflow: "hidden",
          }}
        >
          {/* Tab bar */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid rgba(24,24,27,0.06)",
              padding: "0 8px",
              overflowX: "auto",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: "var(--font-sora)",
                  fontSize: 14,
                  fontWeight: activeTab === tab.id ? 600 : 500,
                  color: activeTab === tab.id ? "#FF6B35" : "#71717A",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab.id ? "2px solid #FF6B35" : "2px solid transparent",
                  padding: "16px 20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                <span style={{ display: "flex" }}>
                  {tabIcons[tab.icon]}
                </span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: "28px 28px 32px", minHeight: 360 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
