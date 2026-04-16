"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

/* Animated counter */
function AnimatedNumber({ value, suffix = "", prefix = "", inView }: { value: number; suffix?: string; prefix?: string; inView: boolean }) {
  const spring = useSpring(0, { duration: 1600, bounce: 0 });
  const display = useTransform(spring, (v: number) => `${prefix}${Math.round(v * 10) / 10}${suffix}`);
  const [text, setText] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  useEffect(() => {
    const unsubscribe = (display as MotionValue<string>).on("change", (v: string) => setText(v));
    return unsubscribe;
  }, [display]);

  return <>{text}</>;
}

const stats = [
  { value: 400, suffix: "+", label: "Early-stage teams", description: "Pre-seed to Series A" },
  { value: 2.1, prefix: "$", suffix: "B", label: "Runway tracked", description: "Across all portfolios" },
  { value: 12, suffix: " min", label: "Avg update time", description: "Down from 2+ hours" },
];

const testimonials = [
  {
    quote:
      "We were spending 3 hours every month pulling numbers from 5 different tools for investor updates. Beacon does it in 12 minutes. That's not a typo.",
    name: "Ava Rodriguez",
    title: "CEO & Co-founder, Patchwork",
    company: "Patchwork (YC W24)",
    avatar: "A",
    color: "#FF6B35",
  },
  {
    quote:
      "Our cap table was a Google Sheet that three people had different versions of. Beacon fixed that in a day. Now I can model our Series A dilution in seconds.",
    name: "Jordan Okafor",
    title: "Co-founder & COO, Layup",
    company: "Layup (Techstars '24)",
    avatar: "J",
    color: "#6366F1",
  },
  {
    quote:
      "I showed our Beacon dashboard to our lead investor and she said it was the most organized startup she'd seen at our stage. That's the whole pitch.",
    name: "Mei Lin Chen",
    title: "Founder & CEO, Kitestring",
    company: "Kitestring (Pioneer Fund)",
    avatar: "M",
    color: "#22C55E",
  },
];

export default function Proof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      id="proof"
      style={{
        paddingTop: 96,
        paddingBottom: 96,
        background: "#FFFFFF",
        borderTop: "1px solid rgba(24,24,27,0.06)",
        borderBottom: "1px solid rgba(24,24,27,0.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: 32,
              textAlign: "center",
            }}
            className="md:!grid-cols-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontSize: "clamp(36px, 5vw, 52px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#FF6B35",
                    marginBottom: 4,
                    lineHeight: 1,
                  }}
                >
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix || ""}
                    inView={inView}
                  />
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#18181B",
                    marginBottom: 4,
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: 14,
                    color: "#A1A1AA",
                  }}
                >
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "clamp(24px, 3.5vw, 32px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#18181B",
              marginBottom: 12,
            }}
          >
            Founders who stopped duct-taping
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 16,
              color: "#71717A",
            }}
          >
            Real teams, real results — no made-up quotes
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 20,
          }}
          className="md:!grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              style={{
                background: "#FAFAF8",
                borderRadius: 14,
                padding: 28,
                border: "1px solid rgba(24,24,27,0.06)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Stars */}
              <div style={{ marginBottom: 16 }}>
                {[0, 1, 2, 3, 4].map((s) => (
                  <span key={s} style={{ color: "#F59E0B", fontSize: 16, marginRight: 2 }}>
                    &#9733;
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "#3F3F46",
                  marginBottom: 24,
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: t.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-sora)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    flexShrink: 0,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-sora)", fontSize: 14, fontWeight: 600, color: "#18181B" }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 12, color: "#A1A1AA" }}>
                    {t.title}
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
