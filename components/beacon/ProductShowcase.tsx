"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "runway", label: "Runway" },
  { id: "captable", label: "Cap Table" },
  { id: "hiring", label: "Hiring" },
  { id: "updates", label: "Updates" },
] as const;

type TabId = (typeof tabs)[number]["id"];

/* ── Runway Tab ── */
const RunwayTab = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const values = [680, 632, 584, 538, 494, 452, 412, 374, 338, 304, 272, 242];
  const maxVal = Math.max(...values);

  return (
    <div>
      {/* Metrics row */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          marginBottom: 28,
        }}
      >
        {[
          { label: "RUNWAY", value: "14.2 mo", color: "#4ADE80" },
          { label: "BURN RATE", value: "$48K/mo", color: "#FBBF24" },
          { label: "CASH", value: "$680K", color: "#FAFAFA" },
        ].map((m) => (
          <div key={m.label}>
            <div
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 10,
                color: "#71717A",
                marginBottom: 4,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {m.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 28,
                fontWeight: 700,
                color: m.color,
                letterSpacing: "-0.02em",
              }}
            >
              {m.value}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart with divs */}
      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: "#71717A",
          marginBottom: 8,
        }}
      >
        Cash balance projection
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {months.map((month, i) => {
          const pct = (values[i] / maxVal) * 100;
          const isLow = values[i] < 300;
          return (
            <div
              key={month}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  width: 28,
                  fontSize: 11,
                  color: "#71717A",
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                {month}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 16,
                  background: "#18181B",
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: "100%",
                    background: isLow
                      ? "linear-gradient(90deg, #EF4444, #DC2626)"
                      : "linear-gradient(90deg, #4ADE80, #22C55E)",
                    borderRadius: 1,
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  color: isLow ? "#EF4444" : "#4ADE80",
                  width: 48,
                  textAlign: "right",
                  flexShrink: 0,
                }}
              >
                ${values[i]}K
              </span>
            </div>
          );
        })}
      </div>

      {/* Scenario toggles */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 16,
        }}
      >
        {["Base case", "Conservative", "Growth"].map((label, i) => (
          <button
            key={label}
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 12,
              color: i === 0 ? "#FAFAFA" : "#71717A",
              background: i === 0 ? "#27272A" : "transparent",
              border: `1px solid ${i === 0 ? "#3F3F46" : "#27272A"}`,
              borderRadius: 2,
              padding: "6px 12px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ── Cap Table Tab ── */
const CapTableTab = () => {
  const rows = [
    { stakeholder: "Founders", shares: "7,440,000", pct: "62%", type: "Common" },
    { stakeholder: "Seed Round", shares: "2,160,000", pct: "18%", type: "Preferred" },
    { stakeholder: "SAFE Holders", shares: "1,440,000", pct: "12%", type: "SAFE" },
    { stakeholder: "Option Pool", shares: "960,000", pct: "8%", type: "Options" },
  ];

  const colors: Record<string, string> = {
    Founders: "#4ADE80",
    "Seed Round": "#FBBF24",
    "SAFE Holders": "#F97316",
    "Option Pool": "#71717A",
  };

  return (
    <div>
      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 13,
          }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid #27272A" }}>
              {["Stakeholder", "Shares", "%", "Type"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    padding: "10px 12px",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#71717A",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.stakeholder}
                style={{ borderBottom: "1px solid #1E1E21" }}
              >
                <td style={{ padding: "12px", color: "#FAFAFA", fontWeight: 500 }}>
                  {row.stakeholder}
                </td>
                <td style={{ padding: "12px", color: "#A1A1AA" }}>{row.shares}</td>
                <td style={{ padding: "12px", color: colors[row.stakeholder], fontWeight: 600 }}>
                  {row.pct}
                </td>
                <td style={{ padding: "12px", color: "#71717A" }}>{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visual ownership bar */}
      <div
        style={{
          display: "flex",
          height: 8,
          overflow: "hidden",
          borderRadius: 2,
          marginTop: 20,
        }}
      >
        <div style={{ width: "62%", background: "#4ADE80" }} />
        <div style={{ width: "18%", background: "#FBBF24" }} />
        <div style={{ width: "12%", background: "#F97316" }} />
        <div style={{ width: "8%", background: "#71717A" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginTop: 12,
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 12,
          color: "#A1A1AA",
        }}
      >
        {rows.map((row) => (
          <span key={row.stakeholder} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 1,
                background: colors[row.stakeholder],
                display: "inline-block",
              }}
            />
            {row.stakeholder} {row.pct}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ── Hiring Tab ── */
const HiringTab = () => {
  const columns = [
    {
      title: "Sourced",
      count: 3,
      cards: [
        { role: "Frontend Eng", name: "Emily Park" },
        { role: "Full-Stack Eng", name: "James Liu" },
        { role: "Product Designer", name: "Priya Sharma" },
      ],
    },
    {
      title: "Screening",
      count: 2,
      cards: [
        { role: "Backend Eng", name: "Alex Chen" },
        { role: "Full-Stack Eng", name: "Maria Gonzalez" },
      ],
    },
    {
      title: "Interview",
      count: 1,
      cards: [{ role: "Frontend Eng", name: "David Kim" }],
    },
    {
      title: "Offer",
      count: 1,
      cards: [{ role: "Product Designer", name: "Sarah Johnson" }],
    },
  ];

  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          color: "#71717A",
          marginBottom: 16,
        }}
      >
        3 open roles · 7 active candidates
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                paddingBottom: 8,
                borderBottom: "1px solid #27272A",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#FAFAFA",
                  letterSpacing: "0.02em",
                }}
              >
                {col.title}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  color: "#71717A",
                  background: "#27272A",
                  borderRadius: 2,
                  padding: "1px 6px",
                }}
              >
                {col.count}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {col.cards.map((card) => (
                <div
                  key={card.name}
                  style={{
                    background: "#18181B",
                    border: "1px solid #27272A",
                    borderRadius: 2,
                    padding: "10px 12px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#FAFAFA",
                      marginBottom: 2,
                    }}
                  >
                    {card.role}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 12,
                      color: "#71717A",
                    }}
                  >
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Updates Tab ── */
const UpdatesTab = () => {
  const metrics = [
    { label: "MRR", value: "$12.4K", change: "+18%" },
    { label: "BURN", value: "$48K", change: "-4%" },
    { label: "RUNWAY", value: "14.2 mo", change: "+1.2" },
    { label: "TEAM", value: "8", change: "+2" },
    { label: "USERS", value: "342", change: "+24%" },
    { label: "NPS", value: "67", change: "+5" },
  ];

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              color: "#71717A",
              marginBottom: 4,
            }}
          >
            To: 12 investors
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: "#FAFAFA",
            }}
          >
            March 2024 Investor Update
          </div>
        </div>
        <button
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            fontWeight: 500,
            padding: "8px 16px",
            background: "#FBBF24",
            color: "#09090B",
            border: "none",
            borderRadius: 2,
            cursor: "pointer",
          }}
        >
          Send update
        </button>
      </div>

      {/* Auto-populated metrics */}
      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 11,
            color: "#71717A",
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          Auto-populated metrics
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#4ADE80",
              display: "inline-block",
            }}
          />
          <span style={{ color: "#4ADE80", fontSize: 10 }}>LIVE</span>
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
                background: "#18181B",
                border: "1px solid #27272A",
                borderRadius: 2,
                padding: "10px 12px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 10,
                  color: "#71717A",
                  marginBottom: 4,
                  letterSpacing: "0.06em",
                }}
              >
                {m.label}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#FAFAFA",
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 11,
                    color: "#4ADE80",
                  }}
                >
                  {m.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editor preview */}
      <div
        style={{
          background: "#18181B",
          border: "1px solid #27272A",
          borderRadius: 2,
          padding: 16,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            lineHeight: 1.75,
            color: "#A1A1AA",
          }}
        >
          <p style={{ marginBottom: 10, fontWeight: 600, color: "#FAFAFA" }}>Highlights</p>
          <p style={{ marginBottom: 8 }}>
            <span style={{ fontWeight: 500, color: "#FAFAFA" }}>Product:</span> Shipped v2.3 with automated
            investor update metrics. 89% of beta users sent their first update within 48 hours.
          </p>
          <p style={{ marginBottom: 8 }}>
            <span style={{ fontWeight: 500, color: "#FAFAFA" }}>Growth:</span> MRR hit $12.4K (+18% MoM).
            Pipeline has $28K in qualified opportunities closing this quarter.
          </p>
          <p>
            <span style={{ fontWeight: 500, color: "#FAFAFA" }}>Team:</span> Hired senior frontend (David,
            ex-Vercel) and product designer (Sarah, ex-Figma). Team is now 8.
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── Main Component ── */
const tabComponents: Record<TabId, React.FC> = {
  runway: RunwayTab,
  captable: CapTableTab,
  hiring: HiringTab,
  updates: UpdatesTab,
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
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 12,
              color: "#71717A",
              letterSpacing: "0.04em",
              marginBottom: 16,
            }}
          >
            // product
          </p>
          <h2
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#FAFAFA",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            See it in action
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 16,
              color: "#A1A1AA",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every feature designed for teams of 2-15. No enterprise bloat.
            No features you&apos;ll never use.
          </p>
        </motion.div>

        {/* Tabbed interface */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            background: "#111113",
            border: "1px solid #27272A",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {/* Tab bar */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #27272A",
              background: "#18181B",
              overflowX: "auto",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 13,
                  fontWeight: activeTab === tab.id ? 500 : 400,
                  color: activeTab === tab.id ? "#FAFAFA" : "#71717A",
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    activeTab === tab.id
                      ? "2px solid #4ADE80"
                      : "2px solid transparent",
                  padding: "14px 24px",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div style={{ padding: "24px 24px 28px", minHeight: 380 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
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
