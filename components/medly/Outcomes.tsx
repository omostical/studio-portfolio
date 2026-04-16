"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { PulseLine } from "./Hero";

/* ── Animated Counter ── */
function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const spring = useSpring(0, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v) => {
    if (suffix === "x") return `${prefix}${v.toFixed(1)}${suffix}`;
    if (suffix === "%") return `${prefix}${Math.round(v)}${suffix}`;
    return `${prefix}${Math.round(v)}${suffix}`;
  });
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  useEffect(() => {
    return display.on("change", (v) => setDisplayValue(v));
  }, [display]);

  return <span ref={ref}>{displayValue}</span>;
}

const metrics = [
  {
    value: 40,
    suffix: "%",
    label: "Reduction in no-shows",
    sublabel: "average across all Medly practices",
  },
  {
    value: 3.2,
    suffix: "x",
    label: "ROI in first 6 months",
    sublabel: "based on recovered revenue alone",
  },
  {
    value: 92,
    suffix: "%",
    label: "Patient satisfaction score",
    sublabel: "from post-visit surveys",
  },
];

const testimonials = [
  {
    quote:
      "We went from a 22% no-show rate to under 13% in three months. The ROI was obvious by week six. My front desk staff finally has time to focus on patients who are actually in the building.",
    author: "Dr. Rachel Simmons",
    title: "Medical Director, Northside Medical Group",
    location: "Atlanta, GA \u2014 180 patients/day",
  },
  {
    quote:
      "The automated reminders feel personal, not robotic. Patients actually respond. We\u2019ve recovered over $90K in what would have been missed appointments this year alone.",
    author: "Marcus Chen",
    title: "Practice Manager, Pacific Urgent Care",
    location: "Portland, OR \u2014 120 patients/day",
  },
  {
    quote:
      "What sold me was the patient portal adoption rate. 89% of our patients signed up in the first month without us having to push it. They genuinely prefer it over phone calls.",
    author: "Angela Torres, RN",
    title: "Clinical Operations Lead, Summit Health Partners",
    location: "Denver, CO \u2014 300 patients/day",
  },
];

export default function Outcomes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <>
      <PulseLine />
      <section
        id="outcomes"
        ref={ref}
        style={{
          background: "#0F1A14",
          padding: "96px 0 80px",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-center"
            style={{ marginBottom: "56px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "#7A8F85",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Outcomes
            </span>
            <h2
              style={{
                fontFamily: "var(--font-libre), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
                color: "#F0EDE5",
                letterSpacing: "-0.02em",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Real results from practices{" "}
              <em className="not-italic" style={{ color: "#4ECBA0" }}>
                like yours
              </em>
            </h2>
          </motion.div>

          {/* Metrics row */}
          <div
            className="grid md:grid-cols-3 gap-6"
            style={{ marginBottom: "64px" }}
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.1 * i,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-center"
                style={{
                  background: "#162420",
                  border: "1px solid rgba(78,203,160,0.08)",
                  borderRadius: "14px",
                  padding: "32px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "30%",
                    right: "30%",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, #4ECBA040, transparent)",
                  }}
                />
                <p
                  style={{
                    fontFamily:
                      "var(--font-jetbrains), monospace",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    fontWeight: 500,
                    color: "#4ECBA0",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  <Counter value={metric.value} suffix={metric.suffix} />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-libre), Georgia, serif",
                    fontSize: "1rem",
                    color: "#F0EDE5",
                    marginBottom: "4px",
                  }}
                >
                  {metric.label}
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.75rem",
                    color: "#7A8F85",
                  }}
                >
                  {metric.sublabel}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.3 + 0.12 * i,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  background: "#162420",
                  border: "1px solid rgba(78,203,160,0.06)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Quote */}
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ marginBottom: "16px", opacity: 0.3 }}
                  >
                    <path
                      d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                      fill="#4ECBA0"
                    />
                  </svg>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "#F0EDE5",
                      marginBottom: "24px",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div
                  style={{
                    borderTop: "1px solid rgba(78,203,160,0.08)",
                    paddingTop: "16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#F0EDE5",
                      marginBottom: "2px",
                    }}
                  >
                    {t.author}
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.75rem",
                      color: "#7A8F85",
                      marginBottom: "2px",
                    }}
                  >
                    {t.title}
                  </p>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-jetbrains), monospace",
                      fontSize: "0.65rem",
                      color: "#7A8F85",
                      opacity: 0.7,
                    }}
                  >
                    {t.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
