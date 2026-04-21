"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const queries = [
  {
    text: "why did fulfillment slip last week?",
    bars: [64, 82, 78, 45, 32, 28, 35],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    rootCause: "Thursday drop traced to 3 delayed carrier pickups in US-West.",
    metric: "Fulfillment rate",
    metricValue: "71.2%",
    metricDelta: "-12.4%",
    deltaNegative: true,
  },
  {
    text: "show me SLA breaches by team this month",
    bars: [12, 34, 8, 22, 45, 18, 6],
    labels: ["Support", "Ops", "Sales", "CS", "Logistics", "Eng", "Finance"],
    rootCause: "Logistics team accounts for 38% of total breaches.",
    metric: "Total breaches",
    metricValue: "145",
    metricDelta: "+23%",
    deltaNegative: true,
  },
  {
    text: "what's driving the pipeline drop?",
    bars: [88, 76, 72, 58, 42, 38, 30],
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7"],
    rootCause: "Demo-to-close conversion fell 18% after pricing page change.",
    metric: "Pipeline value",
    metricValue: "$1.2M",
    metricDelta: "-31%",
    deltaNegative: true,
  },
];

interface QueryAnimationProps {
  compact?: boolean;
}

export default function QueryAnimation({ compact = false }: QueryAnimationProps) {
  const [queryIndex, setQueryIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "chart" | "root" | "pause">("typing");

  const query = queries[queryIndex];

  const startNextCycle = useCallback(() => {
    setQueryIndex((prev) => (prev + 1) % queries.length);
    setDisplayedText("");
    setPhase("typing");
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    const target = queries[queryIndex].text;
    if (displayedText.length < target.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(target.slice(0, displayedText.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setPhase("chart"), 400);
      return () => clearTimeout(timeout);
    }
  }, [phase, displayedText, queryIndex]);

  useEffect(() => {
    if (phase === "chart") {
      const timeout = setTimeout(() => setPhase("root"), 800);
      return () => clearTimeout(timeout);
    }
    if (phase === "root") {
      const timeout = setTimeout(() => setPhase("pause"), 1200);
      return () => clearTimeout(timeout);
    }
    if (phase === "pause") {
      const timeout = setTimeout(startNextCycle, 3000);
      return () => clearTimeout(timeout);
    }
  }, [phase, startNextCycle]);

  const chartHeight = compact ? 80 : 120;

  return (
    <div
      style={{
        background: "#141416",
        border: "1px solid #1F1F22",
        borderRadius: 6,
        overflow: "hidden",
      }}
    >
      {/* Query input */}
      <div
        style={{
          padding: compact ? "12px 16px" : "16px 20px",
          borderBottom: "1px solid #1F1F22",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5.5" stroke="#5A5A5C" strokeWidth="1.2" />
          <path d="M11 11L14 14" stroke="#5A5A5C" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        <span
          style={{
            fontFamily: "var(--font-jetbrains)",
            fontSize: compact ? 12 : 13,
            color: "#EDEDEF",
            flex: 1,
          }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            style={{ color: "#E8B931", marginLeft: 1 }}
          >
            |
          </motion.span>
        </span>
      </div>

      {/* Results area */}
      <AnimatePresence mode="wait">
        {(phase === "chart" || phase === "root" || phase === "pause") && (
          <motion.div
            key={queryIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ padding: compact ? "12px 16px 16px" : "16px 20px 20px" }}
          >
            {/* Metric header */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
                marginBottom: compact ? 10 : 14,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: compact ? 11 : 12,
                  color: "#8B8B8D",
                }}
              >
                {query.metric}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: compact ? 18 : 22,
                  fontWeight: 700,
                  color: "#EDEDEF",
                }}
              >
                {query.metricValue}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: compact ? 11 : 12,
                  color: query.deltaNegative ? "#EF4444" : "#34D399",
                }}
              >
                {query.metricDelta}
              </span>
            </div>

            {/* Chart bars */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: compact ? 4 : 6,
                height: chartHeight,
                marginBottom: compact ? 8 : 12,
              }}
            >
              {query.bars.map((value, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(value / 100) * chartHeight}px` }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                      width: "100%",
                      background: value === Math.min(...query.bars) ? "#EF4444" : "#5B8DEF",
                      borderRadius: 2,
                      opacity: value === Math.min(...query.bars) ? 1 : 0.7 + (value / 100) * 0.3,
                    }}
                  />
                  {!compact && (
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains)",
                        fontSize: 9,
                        color: "#5A5A5C",
                      }}
                    >
                      {query.labels[i]}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Root cause */}
            {(phase === "root" || phase === "pause") && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "#1C1C1F",
                  border: "1px solid #1F1F22",
                  borderRadius: 4,
                  padding: compact ? "8px 10px" : "10px 14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 1, flexShrink: 0 }}>
                  <circle cx="7" cy="7" r="6" stroke="#E8B931" strokeWidth="1.2" />
                  <path d="M7 4V7.5" stroke="#E8B931" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="7" cy="9.5" r="0.75" fill="#E8B931" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: compact ? 11 : 12,
                    color: "#EDEDEF",
                    lineHeight: 1.5,
                  }}
                >
                  {query.rootCause}
                </span>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
