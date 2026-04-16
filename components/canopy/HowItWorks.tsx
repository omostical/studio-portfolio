"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Intake",
    description:
      "Claims arrive via API, portal, or email. Canopy normalizes documents, extracts entities, and creates a structured record in under 8 seconds.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="2" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
        <path d="M4 10H24" stroke="#3B82F6" strokeWidth="1.5" />
        <path d="M10 14H18" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 17H15" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Triage",
    description:
      "ML models score complexity, estimate liability, and route each claim to the optimal path — auto-approve, fast-track, or escalate to a senior adjuster.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
        <path d="M14 8V14L18 16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11L11 14L9 17" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 11L17 14L19 17" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Review Queue",
    description:
      "Flagged claims surface in a priority-ranked queue with pre-populated context — policy history, fraud indicators, comparable claims, and recommended action.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="4" width="18" height="20" rx="2" stroke="#3B82F6" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
        <path d="M9 9H19" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M9 13H19" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M9 17H14" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="5" stroke="#10B981" strokeWidth="1.5" fill="rgba(16,185,129,0.08)" />
        <path d="M18 20L19.5 21.5L22.5 18.5" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Auto-Pay",
    description:
      "Approved claims trigger instant payout via ACH, wire, or check. Policyholders receive funds within 24 hours — not the industry average of 23 days.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="14" rx="2" stroke="#10B981" strokeWidth="1.5" fill="rgba(16,185,129,0.08)" />
        <path d="M3 12H25" stroke="#10B981" strokeWidth="1.5" />
        <path d="M7 18H11" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M14 18H16" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ArrowConnector() {
  return (
    <div className="hidden lg:flex items-center" style={{ width: 48 }}>
      <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
        <motion.path
          d="M0 8H40"
          stroke="rgba(59,130,246,0.3)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <motion.path
          d="M38 4L44 8L38 12"
          stroke="rgba(59,130,246,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 1 }}
        />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="how-it-works"
      style={{
        padding: "80px 0 100px",
        borderTop: "1px solid rgba(59,130,246,0.06)",
        borderBottom: "1px solid rgba(59,130,246,0.06)",
      }}
    >
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
            How It Works
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
            Four stages. Zero bottlenecks.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 17,
              color: "#6B7FA0",
              maxWidth: 560,
              margin: "16px auto 0",
              lineHeight: 1.6,
            }}
          >
            Every claim flows through an intelligent pipeline that learns from
            your historical data and improves with every decision.
          </p>
        </motion.div>

        {/* Horizontal pipeline — desktop */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                style={{
                  background: "#111A30",
                  border: "1px solid rgba(59,130,246,0.1)",
                  borderRadius: 14,
                  padding: "28px 24px",
                  flex: 1,
                  minWidth: 0,
                  width: "100%",
                  maxWidth: 260,
                }}
                className="lg:max-w-none"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "rgba(59,130,246,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-fira)",
                      fontSize: 12,
                      color: "rgba(59,130,246,0.5)",
                      fontWeight: 500,
                    }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-space)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "#E4E8F0",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: "#6B7FA0",
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
              {i < steps.length - 1 && <ArrowConnector />}
            </div>
          ))}
        </div>

        {/* Mobile vertical connectors are implied by the column layout gap */}
      </div>
    </section>
  );
}
