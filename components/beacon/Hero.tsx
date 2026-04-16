"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* Dot grid background pattern */
const DotGrid = () => (
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
);

/* Mini sparkline for burn rate */
const Sparkline = () => {
  const points = [48, 52, 47, 51, 49, 46, 48, 50, 47, 45, 48, 46];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const h = 32;
  const w = 120;
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path d={path} stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/* Dashboard mockup card */
const DashboardMockup = () => (
  <div
    style={{
      background: "#FFFFFF",
      borderRadius: 16,
      border: "1px solid rgba(24,24,27,0.08)",
      padding: 24,
      boxShadow: "0 8px 32px rgba(24,24,27,0.08), 0 1px 2px rgba(24,24,27,0.04)",
      width: "100%",
      maxWidth: 420,
    }}
  >
    {/* Header */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
      <div>
        <p
          style={{
            fontFamily: "var(--font-sora)",
            fontSize: 13,
            fontWeight: 600,
            color: "#71717A",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: 2,
          }}
        >
          Startup Overview
        </p>
        <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 12, color: "#A1A1AA" }}>
          Updated 2 min ago
        </p>
      </div>
      <div
        style={{
          background: "rgba(34,197,94,0.1)",
          color: "#22C55E",
          fontFamily: "var(--font-jetbrains)",
          fontSize: 11,
          fontWeight: 500,
          padding: "4px 10px",
          borderRadius: 20,
        }}
      >
        Healthy
      </div>
    </div>

    {/* Metrics grid */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
      {[
        { label: "Runway", value: "14.2", unit: "months", color: "#FF6B35" },
        { label: "Monthly Burn", value: "$48K", unit: "", color: "#6366F1" },
        { label: "Team Size", value: "8", unit: "people", color: "#6366F1" },
        { label: "Next Milestone", value: "Series A", unit: "", color: "#FF6B35" },
      ].map((metric) => (
        <div
          key={metric.label}
          style={{
            background: "#FAFAF8",
            borderRadius: 10,
            padding: "12px 14px",
            border: "1px solid rgba(24,24,27,0.06)",
          }}
        >
          <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 11, color: "#A1A1AA", marginBottom: 4 }}>
            {metric.label}
          </p>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
            <span
              style={{
                fontFamily: "var(--font-sora)",
                fontSize: 22,
                fontWeight: 700,
                color: metric.color,
                letterSpacing: "-0.02em",
              }}
            >
              {metric.value}
            </span>
            {metric.unit && (
              <span style={{ fontFamily: "var(--font-jakarta)", fontSize: 11, color: "#A1A1AA" }}>
                {metric.unit}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Burn rate sparkline */}
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 12, color: "#71717A" }}>
          Burn Rate (12 months)
        </p>
        <p style={{ fontFamily: "var(--font-jetbrains)", fontSize: 11, color: "#FF6B35" }}>
          -4.2%
        </p>
      </div>
      <Sparkline />
    </div>
  </div>
);

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{ position: "relative", overflow: "hidden", paddingTop: 80, paddingBottom: 80 }}
    >
      <DotGrid />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="lg:!grid-cols-[1fr_420px]"
        >
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,107,53,0.08)",
                border: "1px solid rgba(255,107,53,0.15)",
                borderRadius: 20,
                padding: "6px 14px",
                marginBottom: 24,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B35" }} />
              <span
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#FF6B35",
                }}
              >
                Now in public beta
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-sora)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#18181B",
                marginBottom: 20,
              }}
            >
              Stop{" "}
              <span style={{ color: "#FF6B35" }}>duct-taping</span>
              <br />
              your startup together.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "clamp(16px, 2vw, 18px)",
                lineHeight: 1.6,
                color: "#71717A",
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              Beacon replaces the 6 tools you&apos;re juggling with one. Runway, cap
              table, hiring, investor updates — finally in one place that actually
              talks to each other.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
              <a
                href="#cta"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "#FF6B35",
                  padding: "14px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background 0.2s, transform 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E55A2B";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FF6B35";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start free — no credit card
              </a>
              <a
                href="#product"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#18181B",
                  background: "transparent",
                  padding: "14px 28px",
                  borderRadius: 10,
                  border: "1px solid rgba(24,24,27,0.15)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(24,24,27,0.3)";
                  e.currentTarget.style.background = "rgba(24,24,27,0.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(24,24,27,0.15)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                See how it works
              </a>
            </div>

            {/* Trust signal */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex" }}>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border: "2px solid #FAFAF8",
                      background: ["#FF6B35", "#6366F1", "#22C55E", "#F59E0B"][i],
                      marginLeft: i > 0 ? -8 : 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-sora)",
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#FFF",
                    }}
                  >
                    {["A", "M", "S", "K"][i]}
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 13, color: "#A1A1AA" }}>
                <span style={{ color: "#18181B", fontWeight: 600 }}>400+ teams</span>{" "}
                &middot; $2.1B runway tracked
              </p>
            </div>
          </motion.div>

          {/* Right — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", justifyContent: "center" }}
            className="lg:justify-end"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
