"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import QueryAnimation from "./QueryAnimation";

const integrations = [
  "Zendesk",
  "Salesforce",
  "Snowflake",
  "Segment",
  "Shopify",
];

const secondaryFeatures = [
  {
    title: "Metrics that already know your business.",
    body: "SLA breach rate, first-response time, pipeline velocity, fulfillment lag. Pre-built, not \u2018configure your first metric in 6 hours.\u2019",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17L7 10L11 13L17 3" stroke="#5B8DEF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Know before the exec asks.",
    body: "Thresholds that adapt to your seasonality. Lumen learns what \u2018normal\u2019 looks like for Tuesday at 2pm — and pings you when it isn\u2019t.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2V4" stroke="#5B8DEF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10 16V18" stroke="#5B8DEF" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="10" cy="10" r="4" stroke="#5B8DEF" strokeWidth="1.2" />
        <path d="M15.5 4.5L14 6" stroke="#5B8DEF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 14L4.5 15.5" stroke="#5B8DEF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M18 10H16" stroke="#5B8DEF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M4 10H2" stroke="#5B8DEF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Your team sees the same truth.",
    body: "Share a view, not a screenshot. Comments, decisions, and context live with the data. No more \u2018which number is right?\u2019",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="7" cy="8" r="3" stroke="#5B8DEF" strokeWidth="1.2" />
        <circle cx="13" cy="8" r="3" stroke="#5B8DEF" strokeWidth="1.2" />
        <path d="M3 16C3 13.8 4.8 12 7 12H13C15.2 12 17 13.8 17 16" stroke="#5B8DEF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Product() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-8%" });

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
        {/* Primary feature */}
        <div
          className="flex flex-col lg:flex-row"
          style={{ gap: 48, alignItems: "center", marginBottom: 80 }}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ flex: 1 }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 12,
                color: "#E8B931",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Ask anything
            </div>
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
              Query your ops stack in plain English.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 16,
                lineHeight: 1.6,
                color: "#8B8B8D",
                marginBottom: 24,
                maxWidth: 460,
              }}
            >
              Connect your tools once. Ask &ldquo;why did fulfillment slip last
              week?&rdquo; and get a real answer — with the chart, the root
              cause, and the three tickets that drove it.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 13,
                color: "#5A5A5C",
              }}
            >
              Works across{" "}
              {integrations.map((name, i) => (
                <span key={name}>
                  <span style={{ color: "#8B8B8D" }}>{name}</span>
                  {i < integrations.length - 1 ? ", " : ""}
                </span>
              ))}
              , and 40+ more.
            </p>
          </motion.div>

          {/* Visual — query animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-auto"
            style={{ flex: 1, maxWidth: 520 }}
          >
            <QueryAnimation />
            {/* Integration strip */}
            <div
              style={{
                marginTop: 12,
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
              }}
            >
              {integrations.map((name) => (
                <span
                  key={name}
                  style={{
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 10,
                    color: "#5A5A5C",
                    background: "#141416",
                    border: "1px solid #1F1F22",
                    borderRadius: 4,
                    padding: "3px 8px",
                  }}
                >
                  {name}
                </span>
              ))}
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 10,
                  color: "#5A5A5C",
                  background: "#141416",
                  border: "1px solid #1F1F22",
                  borderRadius: 4,
                  padding: "3px 8px",
                }}
              >
                +40 more
              </span>
            </div>
          </motion.div>
        </div>

        {/* Secondary features — 3 column grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 16 }}
        >
          {secondaryFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
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
              <div style={{ marginBottom: 16 }}>{feature.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#EDEDEF",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "#8B8B8D",
                }}
              >
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
