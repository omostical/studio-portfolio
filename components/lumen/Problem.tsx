"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const painTiles = [
  {
    title: "Dashboards nobody opens.",
    body: "Built for a quarterly review, useless on a Tuesday.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#E8B931" strokeWidth="1.2" />
        <path d="M2 7H18" stroke="#E8B931" strokeWidth="1.2" />
        <path d="M6 11H14" stroke="#E8B931" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 14H10" stroke="#E8B931" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Data team bottleneck.",
    body: "Every question becomes a Jira ticket.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="#E8B931" strokeWidth="1.2" />
        <path d="M10 6V10L13 13" stroke="#E8B931" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Alerts that cry wolf.",
    body: "Slack noise you\u2019ve learned to ignore.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L18 16H2L10 2Z" stroke="#E8B931" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M10 8V11" stroke="#E8B931" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="10" cy="13.5" r="0.75" fill="#E8B931" />
      </svg>
    ),
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        borderBottom: "1px solid #1F1F22",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 600, marginBottom: 56 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#EDEDEF",
              marginBottom: 16,
            }}
          >
            Your dashboard answers yesterday&apos;s question.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "#8B8B8D",
            }}
          >
            By the time someone builds the report, the fire&apos;s already out.
            Ops teams need answers in the moment — not a Looker ticket and a
            three-day wait.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 16 }}
        >
          {painTiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                background: "#141416",
                border: "1px solid #1F1F22",
                borderRadius: 6,
                padding: 28,
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#2A2A2E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#1F1F22")
              }
            >
              <div style={{ marginBottom: 16 }}>{tile.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#E8B931",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {tile.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "#8B8B8D",
                }}
              >
                {tile.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
