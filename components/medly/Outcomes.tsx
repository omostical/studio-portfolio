"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/* ── Animated Counter ── */
function Counter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
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
    label: "Patient satisfaction",
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
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face",
  },
  {
    quote:
      "The automated reminders feel personal, not robotic. Patients actually respond. We\u2019ve recovered over $90K in what would have been missed appointments this year alone.",
    author: "Marcus Chen",
    title: "Practice Manager, Pacific Urgent Care",
    location: "Portland, OR \u2014 120 patients/day",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=120&fit=crop&crop=face",
  },
  {
    quote:
      "What sold me was the patient portal adoption rate. 89% of our patients signed up in the first month without us having to push it. They genuinely prefer it over phone calls.",
    author: "Angela Torres, RN",
    title: "Clinical Operations Lead, Summit Health Partners",
    location: "Denver, CO \u2014 300 patients/day",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=120&h=120&fit=crop&crop=face",
  },
];

export default function Outcomes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="outcomes"
      ref={ref}
      style={{
        background: "#FFF5EE",
        padding: "140px 0 120px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
          style={{ marginBottom: "72px" }}
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
            Outcomes
          </span>
          <h2
            style={{
              fontFamily: "var(--font-libre), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.15,
              color: "#2D3436",
              letterSpacing: "-0.02em",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Real results from practices{" "}
            <em className="not-italic" style={{ color: "#3D9B7F" }}>
              like yours
            </em>
          </h2>
        </motion.div>

        {/* Metrics row — soft rounded pill shapes */}
        <div
          className="grid md:grid-cols-3 gap-8"
          style={{ marginBottom: "80px" }}
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
              }
              transition={{
                duration: 0.8,
                delay: 0.12 * i,
                ease: "easeOut",
              }}
              className="text-center"
              style={{
                background: "#FFFFFF",
                borderRadius: "24px",
                padding: "40px 28px",
                boxShadow: "0 4px 32px rgba(45,52,54,0.06)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
                  fontWeight: 500,
                  color: "#3D9B7F",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <p
                style={{
                  fontFamily: "var(--font-libre), Georgia, serif",
                  fontSize: "1rem",
                  color: "#2D3436",
                  marginBottom: "6px",
                }}
              >
                {metric.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.8rem",
                  color: "#7F8C8D",
                }}
              >
                {metric.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials — large rounded cards with circular avatars */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }
              }
              transition={{
                duration: 0.8,
                delay: 0.35 + 0.12 * i,
                ease: "easeOut",
              }}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "32px 28px",
                boxShadow: "0 4px 32px rgba(45,52,54,0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Quote */}
              <div>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ marginBottom: "20px" }}
                >
                  <path
                    d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                    fill="#E8A87C"
                    fillOpacity="0.3"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "#2D3436",
                    marginBottom: "28px",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author with circular avatar */}
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    position: "relative",
                    border: "2px solid rgba(61,155,127,0.15)",
                  }}
                >
                  <Image src={t.avatar} alt={t.author} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#2D3436",
                      marginBottom: "2px",
                    }}
                  >
                    {t.author}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.75rem",
                      color: "#7F8C8D",
                      marginBottom: "2px",
                    }}
                  >
                    {t.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: "0.65rem",
                      color: "#7F8C8D",
                      opacity: 0.7,
                    }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
