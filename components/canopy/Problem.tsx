"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const painPoints = [
  {
    stat: "23 days",
    label: "Average claim cycle time",
    description:
      "Manual processing creates bottlenecks at every stage. Adjusters spend 60% of their time on data entry and document review — not evaluating claims.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.06)" />
        <path d="M16 10V16L20 18" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    stat: "$80B",
    label: "Annual fraud losses industry-wide",
    description:
      "Traditional rule-based systems catch only 20% of fraudulent claims. The remaining 80% slip through, costing carriers billions annually in false payouts.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 10V18C28 24 22 29 16 30C10 29 4 24 4 18V10L16 4Z" stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.06)" />
        <path d="M16 12V18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="22" r="1" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    stat: "41%",
    label: "Customer churn from slow payouts",
    description:
      "Policyholders who wait more than 14 days for a claim resolution are 3× more likely to switch carriers at renewal. Speed is a retention lever.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24C8 24 10 20 16 20C22 20 24 24 24 24" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="14" r="1.5" fill="#EF4444" />
        <circle cx="20" cy="14" r="1.5" fill="#EF4444" />
        <circle cx="16" cy="16" r="12" stroke="#EF4444" strokeWidth="1.5" fill="rgba(239,68,68,0.06)" />
      </svg>
    ),
  },
];

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} style={{ padding: "100px 0 80px" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            style={{
              fontFamily: "var(--font-fira)",
              fontSize: 12,
              fontWeight: 500,
              color: "#3B82F6",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            The Problem
          </span>
          <h2
            style={{
              fontFamily: "var(--font-space)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "#E4E8F0",
              letterSpacing: "-0.02em",
              marginTop: 12,
              lineHeight: 1.15,
            }}
          >
            The claims process is broken.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 17,
              color: "#6B7FA0",
              maxWidth: 600,
              margin: "16px auto 0",
              lineHeight: 1.6,
            }}
          >
            Insurance carriers lose revenue, customers, and competitive
            advantage to a workflow designed for the 1990s.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              style={{
                background: "#111A30",
                border: "1px solid rgba(59,130,246,0.08)",
                borderRadius: 14,
                padding: "32px 28px",
              }}
            >
              <div className="mb-5">{point.icon}</div>
              <div
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#E4E8F0",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {point.stat}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#3B82F6",
                  marginBottom: 14,
                }}
              >
                {point.label}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "#6B7FA0",
                }}
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
