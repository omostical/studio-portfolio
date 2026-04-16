"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PulseLine } from "./Hero";

const painCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="#E87461"
          strokeWidth="1.5"
        />
        <path
          d="M9 9l6 6M15 9l-6 6"
          stroke="#E87461"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    stat: "$150–200",
    label: "per missed visit",
    title: "No-shows drain revenue",
    description:
      "The average clinic loses $150–200 every time a patient doesn\u2019t show. For a mid-size practice, that\u2019s $50K–$120K in lost revenue annually \u2014 money that could fund better care.",
    accentColor: "#E87461",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#D4A574" strokeWidth="1.5" />
        <path
          d="M12 7v5l3 3"
          stroke="#D4A574"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    stat: "11 hrs/week",
    label: "spent on manual follow-ups",
    title: "Staff burnout is real",
    description:
      "Your front desk spends 11+ hours a week calling, texting, and chasing patients for confirmations. That\u2019s nearly 30% of their time on work that should be automated.",
    accentColor: "#D4A574",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"
          stroke="#7A8F85"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14h6v6h-6z"
          stroke="#7A8F85"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="3 3"
        />
      </svg>
    ),
    stat: "3–5 tools",
    label: "that don\u2019t talk to each other",
    title: "Patients fall through the cracks",
    description:
      "Scheduling in one system, reminders in another, follow-ups in a spreadsheet. When communication is fragmented, patients get lost \u2014 and outcomes suffer.",
    accentColor: "#7A8F85",
  },
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <>
      <PulseLine />
      <section
        id="problem"
        ref={ref}
        style={{
          background: "#0F1A14",
          padding: "96px 0 80px",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {/* Editorial opening */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: "720px", marginBottom: "64px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "#7A8F85",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "16px",
              }}
            >
              The problem
            </span>
            <h2
              style={{
                fontFamily: "var(--font-libre), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
                color: "#F0EDE5",
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              Every missed appointment costs your practice $200.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                color: "#7A8F85",
              }}
            >
              But the real cost isn&apos;t financial&nbsp;&mdash; it&apos;s the
              patient who needed care and didn&apos;t get it. The parent who
              missed their child&apos;s follow-up. The chronic condition that
              worsened because the reminder never went out.
            </p>
          </motion.div>

          {/* Pain cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {painCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.15 * i,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  background: "#162420",
                  border: "1px solid rgba(78,203,160,0.08)",
                  borderRadius: "12px",
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${card.accentColor}40, transparent)`,
                  }}
                />

                <div style={{ marginBottom: "20px" }}>{card.icon}</div>

                {/* Stat */}
                <div
                  className="flex items-baseline gap-2"
                  style={{ marginBottom: "4px" }}
                >
                  <span
                    style={{
                      fontFamily:
                        "var(--font-jetbrains), monospace",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      color: card.accentColor,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {card.stat}
                  </span>
                  <span
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.75rem",
                      color: "#7A8F85",
                    }}
                  >
                    {card.label}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-libre), Georgia, serif",
                    fontSize: "1.125rem",
                    color: "#F0EDE5",
                    marginBottom: "8px",
                    marginTop: "16px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    color: "#7A8F85",
                  }}
                >
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
