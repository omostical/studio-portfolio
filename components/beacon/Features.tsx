"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    name: "Runway Tracker",
    description:
      "See exactly how long your money lasts. Model scenarios, set alerts, and never be surprised by a cash crunch.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 5-9" />
      </svg>
    ),
    color: "#FF6B35",
  },
  {
    name: "Cap Table Manager",
    description:
      "Track ownership, model dilution from your next round, and keep SAFEs and convertible notes organized in one view.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 0 20" fill="rgba(99,102,241,0.15)" stroke="none" />
        <path d="M12 2v20" />
        <path d="M2 12h20" />
      </svg>
    ),
    color: "#6366F1",
  },
  {
    name: "Hiring Pipeline",
    description:
      "Kanban-style pipeline for every open role. Track candidates from sourced to signed without switching to another tool.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="5" height="18" rx="1" />
        <rect x="10" y="7" width="5" height="14" rx="1" />
        <rect x="17" y="5" width="5" height="16" rx="1" />
      </svg>
    ),
    color: "#FF6B35",
  },
  {
    name: "Investor Updates",
    description:
      "Compose monthly updates in minutes. Metrics auto-populate, so you spend time writing context — not copying numbers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h6" />
        <path d="M8 16h4" />
      </svg>
    ),
    color: "#6366F1",
  },
  {
    name: "Metrics Dashboard",
    description:
      "MRR, burn rate, headcount, NPS — all in one dashboard. Connect Stripe, your bank, and HR tools for live data.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="13" width="4" height="8" rx="1" />
        <rect x="10" y="9" width="4" height="12" rx="1" />
        <rect x="17" y="5" width="4" height="16" rx="1" />
      </svg>
    ),
    color: "#FF6B35",
  },
  {
    name: "Team Directory",
    description:
      "Who does what, when they started, their equity grant — everything your small team needs to stay aligned without an HRIS.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
      </svg>
    ),
    color: "#6366F1",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} id="features" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 13,
              fontWeight: 600,
              color: "#FF6B35",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 12,
            }}
          >
            Everything you need
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
            Six tools. One place. Zero tab-switching.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 17,
              color: "#71717A",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Most startups duct-tape Notion, Sheets, Carta, Lever, and email together.
            Beacon is the single source of truth your team actually uses.
          </p>
        </motion.div>

        {/* Card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 20,
          }}
          className="md:!grid-cols-2 lg:!grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: "#FFFFFF",
                borderRadius: 14,
                padding: 28,
                border: "1px solid rgba(24,24,27,0.08)",
                cursor: "default",
                transition: "box-shadow 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(24,24,27,0.08), 0 2px 6px rgba(24,24,27,0.04)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background:
                    feature.color === "#FF6B35"
                      ? "rgba(255,107,53,0.08)"
                      : "rgba(99,102,241,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-sora)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#18181B",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {feature.name}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "#71717A",
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
