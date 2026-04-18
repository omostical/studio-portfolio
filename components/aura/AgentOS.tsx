"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  value,
  isInView,
  delay = 0,
}: {
  value: number;
  isInView: boolean;
  delay?: number;
}) {
  const spring = useSpring(0, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString()
  );
  const [text, setText] = useState("0");

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => spring.set(value), delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, spring, value, delay]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setText(v));
    return unsubscribe;
  }, [display]);

  return <>{text}</>;
}

const kpis = [
  { label: "Conversations", value: 88412, display: null, suffix: "" },
  { label: "Resolution Rate", value: 94.2, display: "94.2%", suffix: "" },
  { label: "CSAT", value: 4.8, display: "4.8/5", suffix: "" },
  { label: "Avg Response", value: null, display: "<30s", suffix: "" },
];

const conversations = [
  {
    customer: "Sarah M.",
    message: "Need to update my subscription plan",
    status: "Resolved",
    time: "12s",
  },
  {
    customer: "David K.",
    message: "Where is my order #8294?",
    status: "Resolved",
    time: "8s",
  },
  {
    customer: "Amy L.",
    message: "Can I get a refund for the premium tier?",
    status: "Active",
    time: "—",
  },
  {
    customer: "Robert J.",
    message: "API integration question for webhooks",
    status: "Escalated",
    time: "—",
  },
  {
    customer: "Lisa T.",
    message: "Billing discrepancy on last invoice",
    status: "Resolved",
    time: "22s",
  },
];

export default function AgentOS() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        background: "#1A1A1A",
        padding: "120px 24px 140px",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="md:px-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span
            className="font-body"
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#2D7A4F",
              background: "rgba(45,122,79,0.15)",
              padding: "6px 14px",
              borderRadius: "100px",
              letterSpacing: "0.03em",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Product
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.15,
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            Aura Agent OS
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: "1.05rem",
              color: "#999999",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Build, test, and optimize the best AI agents — all from one
            platform.
          </p>
        </motion.div>

        {/* Product Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          style={{
            background: "#222222",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          {/* Chrome Bar */}
          <div
            style={{
              padding: "12px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              {/* Dots */}
              <div style={{ display: "flex", gap: "6px" }}>
                {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: c,
                    }}
                  />
                ))}
              </div>
              <span
                className="font-display"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                aura
              </span>
            </div>
            <div className="font-body hidden md:flex" style={{ gap: "24px" }}>
              {["Overview", "Agents", "Conversations", "Analytics"].map(
                (tab, i) => (
                  <span
                    key={tab}
                    style={{
                      fontSize: "0.8rem",
                      color: i === 0 ? "#FFFFFF" : "#666666",
                      fontWeight: i === 0 ? 500 : 400,
                      cursor: "pointer",
                    }}
                  >
                    {tab}
                  </span>
                )
              )}
            </div>
            <div style={{ width: "60px" }} />
          </div>

          {/* Dashboard Content */}
          <div style={{ padding: "24px 20px" }}>
            {/* KPI Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
                marginBottom: "20px",
              }}
              className="md:!grid-cols-4"
            >
              {kpis.map((kpi, i) => (
                <div
                  key={kpi.label}
                  style={{
                    background: "#2A2A2A",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    className="font-body"
                    style={{
                      fontSize: "0.7rem",
                      color: "#666666",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {kpi.label}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      color:
                        kpi.label === "Resolution Rate" || kpi.label === "CSAT"
                          ? "#2D7A4F"
                          : "#FFFFFF",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {kpi.value && typeof kpi.value === "number" && kpi.value > 100 ? (
                      <AnimatedCounter
                        value={kpi.value}
                        isInView={isInView}
                        delay={200 + i * 100}
                      />
                    ) : (
                      kpi.display
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Chart + Conversation Feed */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "12px",
              }}
              className="md:!grid-cols-chart"
            >
              {/* Chart Area */}
              <div
                style={{
                  background: "#2A2A2A",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <span
                    className="font-body"
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "#CCCCCC",
                    }}
                  >
                    Resolution volume
                  </span>
                  <span
                    className="font-body"
                    style={{
                      fontSize: "0.7rem",
                      color: "#666666",
                    }}
                  >
                    Last 7 days
                  </span>
                </div>
                {/* Bar Chart */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "6px",
                    height: "120px",
                    paddingTop: "8px",
                  }}
                >
                  {[65, 78, 55, 88, 72, 94, 82].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${h}%` } : {}}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.4 + i * 0.06,
                      }}
                      style={{
                        flex: 1,
                        background:
                          i === 5
                            ? "#2D7A4F"
                            : "rgba(255,255,255,0.08)",
                        borderRadius: "4px 4px 0 0",
                        minHeight: "4px",
                      }}
                    />
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                  }}
                >
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <span
                        key={day}
                        className="font-mono"
                        style={{
                          fontSize: "0.6rem",
                          color: "#555555",
                          flex: 1,
                          textAlign: "center",
                        }}
                      >
                        {day}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Conversation Feed */}
              <div
                style={{
                  background: "#2A2A2A",
                  borderRadius: "12px",
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <span
                  className="font-body"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#CCCCCC",
                    display: "block",
                    marginBottom: "16px",
                  }}
                >
                  Recent conversations
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {conversations.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 0",
                        borderBottom:
                          i < conversations.length - 1
                            ? "1px solid rgba(255,255,255,0.04)"
                            : "none",
                        gap: "12px",
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <span
                          className="font-body"
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 500,
                            color: "#CCCCCC",
                            display: "block",
                          }}
                        >
                          {c.customer}
                        </span>
                        <span
                          className="font-body"
                          style={{
                            fontSize: "0.75rem",
                            color: "#666666",
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {c.message}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          flexShrink: 0,
                        }}
                      >
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.65rem",
                            color:
                              c.status === "Resolved"
                                ? "#2D7A4F"
                                : c.status === "Active"
                                ? "#D4A574"
                                : "#999999",
                            fontWeight: 500,
                          }}
                        >
                          {c.status}
                        </span>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.65rem",
                            color: "#555555",
                            width: "28px",
                            textAlign: "right",
                          }}
                        >
                          {c.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:!grid-cols-4 {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .md\\:!grid-cols-chart {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
