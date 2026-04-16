"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* Mini sparkline SVG for the dashboard preview */
function Sparkline() {
  return (
    <svg
      width="100%"
      height="40"
      viewBox="0 0 200 40"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D6B9E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3D6B9E" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 35 L15 30 L30 32 L50 22 L70 25 L90 18 L110 20 L130 12 L150 15 L170 8 L190 10 L200 6"
        stroke="#3D6B9E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 35 L15 30 L30 32 L50 22 L70 25 L90 18 L110 20 L130 12 L150 15 L170 8 L190 10 L200 6 L200 40 L0 40Z"
        fill="url(#spark-fill)"
      />
    </svg>
  );
}

function MiniDashboard() {
  return (
    <motion.div
      variants={fadeIn}
      className="w-full max-w-[480px] rounded-2xl overflow-hidden"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(26,26,46,0.08)",
        boxShadow:
          "0 1px 3px rgba(26,26,46,0.04), 0 12px 40px rgba(26,26,46,0.08)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(26,26,46,0.06)" }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "#2D5A27" }}
          />
          <span
            className="text-xs font-medium"
            style={{
              color: "#6B6B7A",
              fontFamily: "var(--font-ibm-mono), monospace",
            }}
          >
            Portfolio Overview
          </span>
        </div>
        <span
          className="text-xs"
          style={{
            color: "#6B6B7A",
            fontFamily: "var(--font-ibm-mono), monospace",
          }}
        >
          Apr 2026
        </span>
      </div>

      {/* Metrics row */}
      <div
        className="grid grid-cols-3 gap-0"
        style={{ borderBottom: "1px solid rgba(26,26,46,0.06)" }}
      >
        {[
          {
            label: "Occupancy",
            value: "96.2%",
            delta: "+1.4%",
            positive: true,
          },
          {
            label: "Monthly Rev.",
            value: "$482K",
            delta: "+3.8%",
            positive: true,
          },
          {
            label: "NOI Margin",
            value: "68.4%",
            delta: "+0.6%",
            positive: true,
          },
        ].map((metric, i) => (
          <div
            key={metric.label}
            className="px-5 py-4"
            style={{
              borderRight:
                i < 2 ? "1px solid rgba(26,26,46,0.06)" : "none",
            }}
          >
            <div
              className="text-[10px] uppercase tracking-wider mb-1.5"
              style={{
                color: "#6B6B7A",
                fontFamily: "var(--font-ibm-mono), monospace",
              }}
            >
              {metric.label}
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="text-xl font-semibold"
                style={{
                  color: "#1A1A2E",
                  fontFamily: "var(--font-jakarta), sans-serif",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {metric.value}
              </span>
              <span
                className="text-[11px] font-medium"
                style={{
                  color: metric.positive ? "#2D5A27" : "#C9855E",
                  fontFamily: "var(--font-ibm-mono), monospace",
                }}
              >
                {metric.delta}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Sparkline chart */}
      <div className="px-5 pt-4 pb-2">
        <div
          className="text-[10px] uppercase tracking-wider mb-3"
          style={{
            color: "#6B6B7A",
            fontFamily: "var(--font-ibm-mono), monospace",
          }}
        >
          Revenue trend (12 mo.)
        </div>
        <Sparkline />
      </div>

      {/* Property list */}
      <div className="px-5 pb-4">
        {[
          { name: "The Meridian", units: "142 units", occ: "98.1%" },
          { name: "Ash & Elm", units: "86 units", occ: "94.7%" },
          { name: "Harbor Walk", units: "210 units", occ: "96.8%" },
        ].map((prop) => (
          <div
            key={prop.name}
            className="flex items-center justify-between py-2.5"
            style={{ borderTop: "1px solid rgba(26,26,46,0.04)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-semibold"
                style={{
                  background: "rgba(61,107,158,0.08)",
                  color: "#3D6B9E",
                  fontFamily: "var(--font-ibm-mono), monospace",
                }}
              >
                {prop.name[0]}
              </div>
              <div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "#1A1A2E" }}
                >
                  {prop.name}
                </div>
                <div
                  className="text-[11px]"
                  style={{
                    color: "#6B6B7A",
                    fontFamily: "var(--font-ibm-mono), monospace",
                  }}
                >
                  {prop.units}
                </div>
              </div>
            </div>
            <span
              className="text-sm font-medium"
              style={{
                color: "#2D5A27",
                fontFamily: "var(--font-ibm-mono), monospace",
              }}
            >
              {prop.occ}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-16"
      style={{ background: "#F5F1EB" }}
    >
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,26,46,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,46,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Subtle warm radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "800px",
          height: "650px",
          background:
            "radial-gradient(ellipse at center, rgba(201,133,94,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center py-24 lg:py-32">
        {/* Left copy */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-[560px]"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
            <span
              className="inline-flex h-1.5 w-1.5 rounded-full"
              style={{ background: "#2D5A27" }}
            />
            <span
              className="text-xs font-medium tracking-wide uppercase"
              style={{
                color: "#6B6B7A",
                fontFamily: "var(--font-ibm-mono), monospace",
              }}
            >
              Property Intelligence Platform
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tight mb-6"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-dm-serif), Georgia, serif",
            }}
          >
            See your entire portfolio.{" "}
            <span style={{ color: "#C9855E" }}>
              Know exactly where the money goes.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed mb-10 max-w-[480px]"
            style={{ color: "#6B6B7A" }}
          >
            Haven gives property managers real-time visibility into occupancy,
            maintenance, and NOI across every unit, every building, every market.
            Stop guessing. Start optimizing.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="#trial"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={{ background: "#C9855E", color: "#FFFFFF" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#B5754E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#C9855E")
              }
            >
              Start your free trial
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1 7h12m0 0L8 2.5M13 7l-5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                color: "#1A1A2E",
                border: "1px solid rgba(26,26,46,0.15)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(26,26,46,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(26,26,46,0.15)")
              }
            >
              See a demo
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Mini dashboard */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex justify-center lg:justify-end"
        >
          <MiniDashboard />
        </motion.div>
      </div>
    </section>
  );
}
