"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* -------- Mini-UI Visualizations -------- */

function TriageViz() {
  return (
    <div
      style={{
        background: "#0B0F1E",
        border: "1px solid rgba(59,130,246,0.1)",
        borderRadius: 12,
        padding: 24,
        width: "100%",
      }}
    >
      {/* Decision tree */}
      <div className="flex flex-col items-center gap-3">
        {/* Root node */}
        <div
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 8,
            padding: "8px 16px",
            fontFamily: "var(--font-fira)",
            fontSize: 11,
            color: "#3B82F6",
          }}
        >
          Claim Received
        </div>
        {/* Connector */}
        <svg width="2" height="20">
          <line x1="1" y1="0" x2="1" y2="20" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
        </svg>
        {/* Decision */}
        <div
          style={{
            background: "rgba(59,130,246,0.06)",
            border: "1px solid rgba(59,130,246,0.15)",
            borderRadius: 8,
            padding: "8px 14px",
            fontFamily: "var(--font-fira)",
            fontSize: 11,
            color: "#6B7FA0",
          }}
        >
          Complexity Score &gt; 0.7?
        </div>
        {/* Branches */}
        <div className="flex items-start gap-6 md:gap-10">
          <div className="flex flex-col items-center gap-2">
            <span style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#10B981" }}>YES</span>
            <svg width="2" height="16">
              <line x1="1" y1="0" x2="1" y2="16" stroke="rgba(16,185,129,0.3)" strokeWidth="1.5" />
            </svg>
            <div
              style={{
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: 8,
                padding: "8px 12px",
                fontFamily: "var(--font-fira)",
                fontSize: 11,
                color: "#10B981",
                textAlign: "center",
              }}
            >
              Escalate to<br />Senior Adjuster
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#3B82F6" }}>NO</span>
            <svg width="2" height="16">
              <line x1="1" y1="0" x2="1" y2="16" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
            </svg>
            <div className="flex flex-col items-center gap-2">
              <div
                style={{
                  background: "rgba(59,130,246,0.06)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  borderRadius: 8,
                  padding: "8px 12px",
                  fontFamily: "var(--font-fira)",
                  fontSize: 11,
                  color: "#6B7FA0",
                  textAlign: "center",
                }}
              >
                Fraud Risk &gt; 0.4?
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span style={{ fontFamily: "var(--font-fira)", fontSize: 9, color: "#F59E0B" }}>YES</span>
                  <div
                    style={{
                      background: "rgba(245,158,11,0.08)",
                      border: "1px solid rgba(245,158,11,0.2)",
                      borderRadius: 6,
                      padding: "6px 10px",
                      fontFamily: "var(--font-fira)",
                      fontSize: 10,
                      color: "#F59E0B",
                    }}
                  >
                    Flag
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span style={{ fontFamily: "var(--font-fira)", fontSize: 9, color: "#10B981" }}>NO</span>
                  <div
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      borderRadius: 6,
                      padding: "6px 10px",
                      fontFamily: "var(--font-fira)",
                      fontSize: 10,
                      color: "#10B981",
                    }}
                  >
                    Auto-approve
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 16,
          padding: "8px 12px",
          borderRadius: 6,
          background: "rgba(59,130,246,0.04)",
          border: "1px solid rgba(59,130,246,0.08)",
          fontFamily: "var(--font-fira)",
          fontSize: 10,
          color: "#6B7FA0",
          textAlign: "center",
        }}
      >
        Model accuracy: 94.2% | Avg. triage time: 1.4s
      </div>
    </div>
  );
}

function FraudNetworkViz() {
  return (
    <div
      style={{
        background: "#0B0F1E",
        border: "1px solid rgba(59,130,246,0.1)",
        borderRadius: 12,
        padding: 24,
        width: "100%",
        position: "relative",
        overflow: "hidden",
        minHeight: 280,
      }}
    >
      {/* Network graph */}
      <svg width="100%" height="240" viewBox="0 0 320 240">
        {/* Connections */}
        <line x1="160" y1="60" x2="80" y2="130" stroke="rgba(239,68,68,0.3)" strokeWidth="1.5" />
        <line x1="160" y1="60" x2="240" y2="100" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5" />
        <line x1="160" y1="60" x2="160" y2="160" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <line x1="80" y1="130" x2="130" y2="200" stroke="rgba(239,68,68,0.25)" strokeWidth="1.5" />
        <line x1="80" y1="130" x2="40" y2="190" stroke="rgba(239,68,68,0.15)" strokeWidth="1" />
        <line x1="240" y1="100" x2="280" y2="170" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
        <line x1="240" y1="100" x2="200" y2="180" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
        <line x1="130" y1="200" x2="200" y2="180" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />

        {/* Central node — flagged */}
        <circle cx="160" cy="60" r="18" fill="rgba(239,68,68,0.12)" stroke="#EF4444" strokeWidth="1.5" />
        <text x="160" y="64" textAnchor="middle" fill="#EF4444" fontSize="9" fontFamily="var(--font-fira)">FLAGGED</text>

        {/* Connected nodes */}
        <circle cx="80" cy="130" r="14" fill="rgba(245,158,11,0.1)" stroke="#F59E0B" strokeWidth="1" />
        <text x="80" y="134" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="var(--font-fira)">CLM-12</text>

        <circle cx="240" cy="100" r="14" fill="rgba(245,158,11,0.1)" stroke="#F59E0B" strokeWidth="1" />
        <text x="240" y="104" textAnchor="middle" fill="#F59E0B" fontSize="8" fontFamily="var(--font-fira)">CLM-87</text>

        <circle cx="130" cy="200" r="12" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.4)" strokeWidth="1" />
        <text x="130" y="204" textAnchor="middle" fill="#EF4444" fontSize="7" fontFamily="var(--font-fira)">CLM-23</text>

        <circle cx="160" cy="160" r="10" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
        <text x="160" y="163" textAnchor="middle" fill="#3B82F6" fontSize="7" fontFamily="var(--font-fira)">ADJ-4</text>

        <circle cx="40" cy="190" r="10" fill="rgba(107,127,160,0.08)" stroke="rgba(107,127,160,0.2)" strokeWidth="1" />
        <text x="40" y="193" textAnchor="middle" fill="#6B7FA0" fontSize="7" fontFamily="var(--font-fira)">POL-9</text>

        <circle cx="280" cy="170" r="10" fill="rgba(107,127,160,0.08)" stroke="rgba(107,127,160,0.2)" strokeWidth="1" />
        <text x="280" y="173" textAnchor="middle" fill="#6B7FA0" fontSize="7" fontFamily="var(--font-fira)">VND-3</text>

        <circle cx="200" cy="180" r="10" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <text x="200" y="183" textAnchor="middle" fill="#6B7FA0" fontSize="7" fontFamily="var(--font-fira)">ADR-7</text>
      </svg>

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#EF4444" }} />
            <span style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#6B7FA0" }}>Fraud ring</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#F59E0B" }} />
            <span style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#6B7FA0" }}>Suspicious</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#3B82F6" }} />
            <span style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#6B7FA0" }}>Normal</span>
          </div>
        </div>
        <span style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#EF4444" }}>3 linked claims detected</span>
      </div>
    </div>
  );
}

function RoutingViz() {
  const queueItems = [
    { id: "CLM-4831", priority: "Critical", color: "#EF4444", time: "2m ago" },
    { id: "CLM-4829", priority: "High", color: "#F59E0B", time: "8m ago" },
    { id: "CLM-4827", priority: "Medium", color: "#3B82F6", time: "14m ago" },
    { id: "CLM-4825", priority: "Low", color: "#6B7FA0", time: "22m ago" },
  ];

  return (
    <div
      style={{
        background: "#0B0F1E",
        border: "1px solid rgba(59,130,246,0.1)",
        borderRadius: 12,
        padding: 24,
        width: "100%",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span style={{ fontFamily: "var(--font-fira)", fontSize: 11, color: "#6B7FA0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Priority Queue
        </span>
        <span style={{ fontFamily: "var(--font-fira)", fontSize: 11, color: "#3B82F6" }}>
          4 pending
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {queueItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 14px",
              background: "#111A30",
              borderRadius: 8,
              borderLeft: `3px solid ${item.color}`,
            }}
          >
            <div className="flex items-center gap-3">
              <span style={{ fontFamily: "var(--font-fira)", fontSize: 12, color: "#E4E8F0" }}>
                {item.id}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: item.color,
                  background: `${item.color}14`,
                  padding: "2px 8px",
                  borderRadius: 4,
                }}
              >
                {item.priority}
              </span>
            </div>
            <span style={{ fontFamily: "var(--font-fira)", fontSize: 11, color: "#6B7FA0" }}>
              {item.time}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 12,
          padding: "8px 12px",
          borderRadius: 6,
          background: "rgba(16,185,129,0.06)",
          border: "1px solid rgba(16,185,129,0.1)",
          fontFamily: "var(--font-fira)",
          fontSize: 10,
          color: "#10B981",
          textAlign: "center",
        }}
      >
        Auto-routed to 12 adjusters across 3 teams
      </div>
    </div>
  );
}

function AnalyticsViz() {
  const barData = [65, 82, 71, 94, 88, 76, 91];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div
      style={{
        background: "#0B0F1E",
        border: "1px solid rgba(59,130,246,0.1)",
        borderRadius: 12,
        padding: 24,
        width: "100%",
      }}
    >
      {/* Mini KPI row */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: "Claims/hr", value: "142", trend: "+12%" },
          { label: "Avg. cycle", value: "4.2h", trend: "-34%" },
          { label: "Fraud rate", value: "2.1%", trend: "-0.8%" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            style={{
              padding: "10px 12px",
              background: "#111A30",
              borderRadius: 8,
              border: "1px solid rgba(59,130,246,0.06)",
            }}
          >
            <div style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#6B7FA0", marginBottom: 4 }}>
              {kpi.label}
            </div>
            <div className="flex items-baseline gap-2">
              <span style={{ fontFamily: "var(--font-space)", fontSize: 18, fontWeight: 600, color: "#E4E8F0" }}>
                {kpi.value}
              </span>
              <span style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#10B981" }}>
                {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div style={{ fontFamily: "var(--font-fira)", fontSize: 10, color: "#6B7FA0", marginBottom: 8 }}>
        Resolution rate (%)
      </div>
      <div className="flex items-end gap-2" style={{ height: 100 }}>
        {barData.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-1 flex-1">
            <div
              style={{
                width: "100%",
                height: val,
                background: `linear-gradient(180deg, #3B82F6 0%, rgba(59,130,246,0.3) 100%)`,
                borderRadius: "4px 4px 0 0",
                minWidth: 16,
              }}
            />
            <span style={{ fontFamily: "var(--font-fira)", fontSize: 9, color: "#6B7FA0" }}>
              {days[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------- Feature rows -------- */

interface FeatureData {
  tag: string;
  title: string;
  description: string;
  bullets: string[];
  visual: React.ReactNode;
}

const features: FeatureData[] = [
  {
    tag: "Intelligence",
    title: "AI Triage Engine",
    description:
      "Every incoming claim is scored across 47 risk dimensions in under 2 seconds. The model adapts to your carrier's specific portfolio — learning from historical outcomes to improve routing accuracy over time.",
    bullets: [
      "47-dimension risk scoring in 1.4s average",
      "Adapts to carrier-specific claim patterns",
      "94.2% routing accuracy on first pass",
    ],
    visual: <TriageViz />,
  },
  {
    tag: "Security",
    title: "Fraud Detection Network",
    description:
      "Graph-based analysis maps relationships between claims, claimants, providers, and addresses to surface organized fraud rings that rule-based systems miss entirely.",
    bullets: [
      "Cross-claim relationship mapping",
      "Pattern detection across 12M+ historical claims",
      "$12M average fraud prevention per carrier annually",
    ],
    visual: <FraudNetworkViz />,
  },
  {
    tag: "Efficiency",
    title: "Smart Routing",
    description:
      "Claims are automatically assigned to the right adjuster based on complexity, specialty, current workload, and historical performance — eliminating manual queue management.",
    bullets: [
      "Load-balanced across adjuster teams",
      "Specialty matching (auto, property, health)",
      "67% reduction in manual review time",
    ],
    visual: <RoutingViz />,
  },
  {
    tag: "Visibility",
    title: "Real-time Analytics",
    description:
      "A unified dashboard tracking every metric that matters — cycle time, resolution rates, fraud detection, adjuster performance, and payout velocity — updated in real time.",
    bullets: [
      "Live claims throughput monitoring",
      "Adjuster performance scoring",
      "Configurable alerts and SLA tracking",
    ],
    visual: <AnalyticsViz />,
  },
];

function FeatureRow({
  feature,
  index,
  reversed,
}: {
  feature: FeatureData;
  index: number;
  reversed: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        reversed ? "lg:direction-rtl" : ""
      }`}
      style={{ padding: "60px 0" }}
    >
      <motion.div
        initial={{ opacity: 0, x: reversed ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ order: reversed ? 2 : 1 }}
        className="lg:order-none"
      >
        <span
          style={{
            fontFamily: "var(--font-fira)",
            fontSize: 11,
            fontWeight: 500,
            color: "#3B82F6",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            display: "block",
            marginBottom: 12,
          }}
        >
          {feature.tag}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-space)",
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 700,
            color: "#E4E8F0",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: 15,
            lineHeight: 1.7,
            color: "#6B7FA0",
            marginBottom: 20,
            maxWidth: 480,
          }}
        >
          {feature.description}
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {feature.bullets.map((b, bi) => (
            <motion.li
              key={bi}
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + bi * 0.1 }}
              className="flex items-start gap-2 mb-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ marginTop: 3, flexShrink: 0 }}
              >
                <circle cx="8" cy="8" r="6" stroke="#3B82F6" strokeWidth="1" fill="rgba(59,130,246,0.08)" />
                <path d="M5.5 8L7 9.5L10.5 6" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 14,
                  color: "#E4E8F0",
                  lineHeight: 1.5,
                }}
              >
                {b}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{ order: reversed ? 1 : 2 }}
        className="lg:order-none"
      >
        {feature.visual}
      </motion.div>
    </div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} id="features" style={{ padding: "60px 0 40px" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
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
            Platform
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
            Built for the complexity of claims.
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
            Four capabilities. One platform. Every claim covered from
            first notice of loss to final payout.
          </p>
        </motion.div>

        {features.map((feature, i) => (
          <FeatureRow
            key={feature.title}
            feature={feature}
            index={i}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
