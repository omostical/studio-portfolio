"use client";

import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  inView: boolean;
}) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1600, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      motionVal.set(target);
    }
  }, [inView, target, motionVal]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => {
      if (decimals > 0) {
        setDisplay(v.toFixed(decimals));
      } else {
        setDisplay(Math.round(v).toLocaleString());
      }
    });
    return unsubscribe;
  }, [spring, decimals]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  {
    label: "Assets under management",
    target: 2.1,
    prefix: "$",
    suffix: "B",
    decimals: 1,
  },
  {
    label: "Units tracked",
    target: 12400,
    prefix: "",
    suffix: "+",
    decimals: 0,
  },
  {
    label: "Collection rate",
    target: 98.2,
    prefix: "",
    suffix: "%",
    decimals: 1,
  },
  {
    label: "Avg. NOI improvement",
    target: 14,
    prefix: "+",
    suffix: "%",
    decimals: 0,
  },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-20"
      style={{ background: "#F5F1EB" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl px-6 py-10 md:px-12 md:py-12"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(26,26,46,0.06)",
            boxShadow: "0 1px 3px rgba(26,26,46,0.03)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * i,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-center"
                style={{
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(26,26,46,0.06)"
                      : "none",
                }}
              >
                <div
                  className="text-3xl md:text-4xl font-semibold tracking-tight mb-2"
                  style={{
                    color: "#1A1A2E",
                    fontFamily: "var(--font-jakarta), sans-serif",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    inView={inView}
                  />
                </div>
                <div
                  className="text-xs uppercase tracking-wider"
                  style={{
                    color: "#6B6B7A",
                    fontFamily: "var(--font-ibm-mono), monospace",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
