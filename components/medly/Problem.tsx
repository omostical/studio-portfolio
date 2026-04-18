"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const painCards = [
  {
    number: "01",
    stat: "$150-200",
    label: "per missed visit",
    title: "No-shows drain revenue",
    description:
      "The average clinic loses $150-200 every time a patient doesn\u2019t show. For a mid-size practice, that\u2019s $50K-$120K in lost revenue annually \u2014 money that could fund better care.",
    iconColor: "#E8A87C",
    iconBg: "#FFF5EE",
  },
  {
    number: "02",
    stat: "11 hrs/week",
    label: "spent on manual follow-ups",
    title: "Staff burnout is real",
    description:
      "Your front desk spends 11+ hours a week calling, texting, and chasing patients for confirmations. That\u2019s nearly 30% of their time on work that should be automated.",
    iconColor: "#E8A87C",
    iconBg: "#FFF5EE",
  },
  {
    number: "03",
    stat: "3-5 tools",
    label: "that don\u2019t talk to each other",
    title: "Patients fall through the cracks",
    description:
      "Scheduling in one system, reminders in another, follow-ups in a spreadsheet. When communication is fragmented, patients get lost \u2014 and outcomes suffer.",
    iconColor: "#3D9B7F",
    iconBg: "#EFF8F4",
  },
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="problem"
      ref={ref}
      style={{
        background: "#FFFFFF",
        padding: "140px 0 120px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Editorial opening */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ maxWidth: "720px", marginBottom: "80px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#7F8C8D",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "block",
              marginBottom: "20px",
            }}
          >
            The problem
          </span>
          <h2
            style={{
              fontFamily: "var(--font-libre), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.15,
              color: "#2D3436",
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            Every missed appointment costs your practice $200.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "#7F8C8D",
            }}
          >
            But the real cost isn&apos;t financial&nbsp;&mdash; it&apos;s the
            patient who needed care and didn&apos;t get it. The parent who
            missed their child&apos;s follow-up. The chronic condition that
            worsened because the reminder never went out.
          </p>
        </motion.div>

        {/* Pain cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {painCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
              }
              transition={{
                duration: 0.8,
                delay: 0.15 * i,
                ease: "easeOut",
              }}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "36px 28px",
                boxShadow: "0 4px 32px rgba(45,52,54,0.06)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 48px rgba(45,52,54,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 32px rgba(45,52,54,0.06)";
              }}
            >
              {/* Circular numbered icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: card.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: card.iconColor,
                  }}
                >
                  {card.number}
                </span>
              </div>

              {/* Stat */}
              <div
                className="flex items-baseline gap-2"
                style={{ marginBottom: "4px" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "#2D3436",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {card.stat}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.75rem",
                    color: "#7F8C8D",
                  }}
                >
                  {card.label}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-libre), Georgia, serif",
                  fontSize: "1.125rem",
                  color: "#2D3436",
                  marginBottom: "10px",
                  marginTop: "18px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "#7F8C8D",
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
