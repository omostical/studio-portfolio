"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* Mini heatmap visualization */
function HeatmapViz() {
  const cells = [
    [0.95, 0.88, 0.92, 0.97, 0.91, 0.86, 0.94],
    [0.89, 0.93, 0.78, 0.95, 0.88, 0.92, 0.96],
    [0.92, 0.85, 0.91, 0.83, 0.96, 0.89, 0.93],
    [0.97, 0.91, 0.94, 0.88, 0.92, 0.95, 0.87],
    [0.86, 0.94, 0.89, 0.96, 0.84, 0.91, 0.92],
  ];
  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(7, 1fr)" }}>
      {cells.flat().map((val, i) => {
        const alpha = 0.15 + val * 0.6;
        return (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{
              background: `rgba(61,107,158,${alpha})`,
              minHeight: "18px",
            }}
          />
        );
      })}
    </div>
  );
}

/* Trend line for maintenance costs */
function TrendLineViz() {
  return (
    <svg
      width="100%"
      height="80"
      viewBox="0 0 200 80"
      fill="none"
      preserveAspectRatio="none"
    >
      {/* Historical line */}
      <path
        d="M0 60 L25 52 L50 58 L75 45 L100 50 L125 38"
        stroke="#C9855E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Predicted line (dashed) */}
      <path
        d="M125 38 L150 32 L175 28 L200 22"
        stroke="#C9855E"
        strokeWidth="2"
        strokeDasharray="4 3"
        fill="none"
        strokeLinecap="round"
      />
      {/* Confidence band */}
      <path
        d="M125 38 L150 28 L175 22 L200 14 L200 30 L175 34 L150 36 L125 38Z"
        fill="rgba(201,133,94,0.08)"
      />
      <circle cx="125" cy="38" r="3" fill="#C9855E" />
      {/* Label */}
      <text
        x="130"
        y="56"
        fill="#6B6B7A"
        fontSize="8"
        fontFamily="var(--font-ibm-mono), monospace"
      >
        Predicted
      </text>
    </svg>
  );
}

/* Message preview for tenant comms */
function MessageViz() {
  const messages = [
    {
      from: "J. Martinez",
      unit: "Unit 4B",
      msg: "Maintenance request submitted",
      time: "2m ago",
      unread: true,
    },
    {
      from: "S. Chen",
      unit: "Unit 12A",
      msg: "Lease renewal signed",
      time: "18m ago",
      unread: false,
    },
    {
      from: "R. Patel",
      unit: "Unit 7C",
      msg: "Move-in checklist completed",
      time: "1h ago",
      unread: false,
    },
  ];
  return (
    <div className="space-y-2">
      {messages.map((m, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-2.5 rounded-lg"
          style={{
            background: m.unread
              ? "rgba(61,107,158,0.04)"
              : "transparent",
          }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0 mt-0.5"
            style={{
              background: "rgba(201,133,94,0.1)",
              color: "#C9855E",
              fontFamily: "var(--font-ibm-mono), monospace",
            }}
          >
            {m.from[0]}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span
                className="text-xs font-semibold truncate"
                style={{ color: "#1A1A2E" }}
              >
                {m.from}
              </span>
              <span
                className="text-[10px] flex-shrink-0"
                style={{
                  color: "#6B6B7A",
                  fontFamily: "var(--font-ibm-mono), monospace",
                }}
              >
                {m.time}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="text-[10px]"
                style={{
                  color: "#6B6B7A",
                  fontFamily: "var(--font-ibm-mono), monospace",
                }}
              >
                {m.unit}
              </span>
              <span className="text-[10px]" style={{ color: "#6B6B7A" }}>
                &middot;
              </span>
              <span className="text-[11px]" style={{ color: "#6B6B7A" }}>
                {m.msg}
              </span>
            </div>
          </div>
          {m.unread && (
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
              style={{ background: "#3D6B9E" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* NOI waterfall chart */
function WaterfallViz() {
  const bars = [
    { label: "Revenue", value: 85, color: "#3D6B9E", height: "85%" },
    { label: "Vacancy", value: -8, color: "#C9855E", height: "8%", offset: "77%" },
    { label: "OpEx", value: -22, color: "#C9855E", height: "22%", offset: "55%" },
    { label: "Maint.", value: -7, color: "#C9855E", height: "7%", offset: "48%" },
    { label: "NOI", value: 48, color: "#2D5A27", height: "48%" },
  ];
  return (
    <div className="flex items-end gap-3 h-[100px]">
      {bars.map((bar) => (
        <div key={bar.label} className="flex flex-col items-center flex-1">
          <div className="relative w-full h-[80px] flex items-end">
            {bar.value > 0 ? (
              <div
                className="w-full rounded-t-sm"
                style={{
                  background: bar.color,
                  height: bar.height,
                  opacity: 0.75,
                }}
              />
            ) : (
              <div className="w-full relative" style={{ height: "100%" }}>
                <div
                  className="absolute w-full rounded-sm"
                  style={{
                    background: bar.color,
                    height: bar.height,
                    bottom: bar.offset,
                    opacity: 0.45,
                  }}
                />
              </div>
            )}
          </div>
          <span
            className="text-[9px] mt-1.5 text-center"
            style={{
              color: "#6B6B7A",
              fontFamily: "var(--font-ibm-mono), monospace",
            }}
          >
            {bar.label}
          </span>
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    title: "Portfolio Overview",
    desc: "See occupancy, revenue, and performance across every property in one view. Color-coded heatmaps surface underperformers instantly.",
    tag: "Real-time data",
    large: true,
    viz: <HeatmapViz />,
  },
  {
    title: "Predictive Maintenance",
    desc: "ML models analyze historical patterns to forecast maintenance costs 90 days out. Fix problems before they become emergencies.",
    tag: "AI-powered",
    large: false,
    viz: <TrendLineViz />,
  },
  {
    title: "Tenant Communication",
    desc: "Unified inbox for maintenance requests, lease renewals, and tenant updates. Every conversation tied to the right unit.",
    tag: "Centralized",
    large: false,
    viz: <MessageViz />,
  },
  {
    title: "Financial Intelligence",
    desc: "Track NOI from gross revenue through every expense category. Waterfall charts show exactly where margin leaks and where you gain it back.",
    tag: "NOI optimization",
    large: true,
    viz: <WaterfallViz />,
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: "#F5F1EB" }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,26,46,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,46,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <span
            className="text-xs uppercase tracking-widest mb-4 block"
            style={{
              color: "#C9855E",
              fontFamily: "var(--font-ibm-mono), monospace",
            }}
          >
            Platform
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-[44px] tracking-tight mb-4"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-dm-serif), Georgia, serif",
            }}
          >
            Everything you need to run a portfolio
          </h2>
          <p
            className="text-base md:text-lg max-w-[520px] mx-auto"
            style={{ color: "#6B6B7A" }}
          >
            Four core modules that replace spreadsheets, gut instinct, and the
            three other tools you&apos;re paying for.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 * i,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`group rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                feat.large ? "md:col-span-2" : ""
              }`}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(26,26,46,0.06)",
                boxShadow: "0 1px 3px rgba(26,26,46,0.03)",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,133,94,0.3)";
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(201,133,94,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,26,46,0.06)";
                e.currentTarget.style.boxShadow =
                  "0 1px 3px rgba(26,26,46,0.03)";
              }}
            >
              <div
                className={`${
                  feat.large
                    ? "grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-10 items-center"
                    : ""
                }`}
              >
                <div>
                  <span
                    className="inline-block text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full mb-4"
                    style={{
                      background: "rgba(201,133,94,0.08)",
                      color: "#C9855E",
                      fontFamily: "var(--font-ibm-mono), monospace",
                    }}
                  >
                    {feat.tag}
                  </span>
                  <h3
                    className="text-xl md:text-2xl tracking-tight mb-3"
                    style={{
                      color: "#1A1A2E",
                      fontFamily: "var(--font-dm-serif), Georgia, serif",
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed max-w-[400px]"
                    style={{ color: "#6B6B7A" }}
                  >
                    {feat.desc}
                  </p>
                </div>
                <div
                  className="mt-5 md:mt-0 rounded-xl p-4 md:p-5"
                  style={{
                    background: "rgba(245,241,235,0.6)",
                    border: "1px solid rgba(26,26,46,0.04)",
                  }}
                >
                  {feat.viz}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
