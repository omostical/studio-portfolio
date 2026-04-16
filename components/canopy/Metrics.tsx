"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Metric {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
}

const metrics: Metric[] = [
  {
    value: 5,
    suffix: "×",
    label: "Faster processing",
    sublabel: "vs. industry average of 23 days",
  },
  {
    value: 94,
    suffix: "%",
    label: "First-touch accuracy",
    sublabel: "Claims resolved without re-routing",
  },
  {
    prefix: "$",
    value: 12,
    suffix: "M",
    label: "Fraud prevented",
    sublabel: "Average per carrier, per year",
  },
  {
    value: 67,
    suffix: "%",
    label: "Less manual review",
    sublabel: "Adjusters focus on complex claims only",
  },
];

function AnimatedCounter({ metric, isInView }: { metric: Metric; isInView: boolean }) {
  const spring = useSpring(0, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      spring.set(metric.value);
    }
  }, [isInView, spring, metric.value]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [display]);

  return (
    <span
      style={{
        fontFamily: "var(--font-space)",
        fontSize: "clamp(36px, 5vw, 52px)",
        fontWeight: 700,
        color: "#3B82F6",
        letterSpacing: "-0.03em",
        lineHeight: 1,
      }}
    >
      {metric.prefix || ""}
      {displayValue}
      {metric.suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="metrics"
      style={{
        padding: "80px 0",
        borderTop: "1px solid rgba(59,130,246,0.06)",
        borderBottom: "1px solid rgba(59,130,246,0.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            Results
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
            Numbers that move the business.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 17,
              color: "#6B7FA0",
              maxWidth: 520,
              margin: "16px auto 0",
              lineHeight: 1.6,
            }}
          >
            Measured across 14 carrier deployments processing 2.3M+ claims
            annually.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              style={{
                background: "#111A30",
                border: "1px solid rgba(59,130,246,0.08)",
                borderRadius: 14,
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <AnimatedCounter metric={metric} isInView={isInView} />
              <div
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#E4E8F0",
                  marginTop: 10,
                  marginBottom: 4,
                }}
              >
                {metric.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 13,
                  color: "#6B7FA0",
                  lineHeight: 1.5,
                }}
              >
                {metric.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
