"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";

/* Animated counter */
function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  inView,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}) {
  const spring = useSpring(0, { duration: 1600, bounce: 0 });
  const display = useTransform(
    spring,
    (v: number) => `${prefix}${Math.round(v * 10) / 10}${suffix}`
  );
  const [text, setText] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  useEffect(() => {
    const unsubscribe = (display as MotionValue<string>).on(
      "change",
      (v: string) => setText(v)
    );
    return unsubscribe;
  }, [display]);

  return <>{text}</>;
}

const stats = [
  { value: 400, suffix: "+", label: "teams", description: "Pre-seed to Series A" },
  { value: 2.1, prefix: "$", suffix: "B", label: "runway tracked", description: "Across all portfolios" },
  { value: 12, suffix: " min", label: "avg update time", description: "Down from 2+ hours" },
];

const testimonials = [
  {
    quote:
      "We replaced 6 tools with Beacon on day one. That's not hyperbole — we literally deleted 6 subscriptions.",
    name: "Sarah Kim",
    title: "CEO, Lumina",
    badge: "YC W24",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote:
      "Our cap table was a Google Sheet that three people had different versions of. Beacon fixed that in a day.",
    name: "Jordan Okafor",
    title: "Co-founder, Layup",
    badge: "Techstars '24",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    quote:
      "I showed our Beacon dashboard to our lead investor and she said it was the most organized startup she'd seen at our stage.",
    name: "Mei Lin Chen",
    title: "Founder, Kitestring",
    badge: "Pioneer Fund",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
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
        borderTop: "1px solid #27272A",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 12,
              color: "#71717A",
              letterSpacing: "0.04em",
              marginBottom: 16,
            }}
          >
            // results
          </p>
        </motion.div>

        {/* Large metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 32,
            textAlign: "center",
            marginBottom: 80,
          }}
          className="md:!grid-cols-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: "clamp(40px, 6vw, 56px)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#4ADE80",
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
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#FAFAFA",
                  marginBottom: 4,
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  color: "#71717A",
                }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 16,
          }}
          className="md:!grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{
                background: "#18181B",
                border: "1px solid #27272A",
                borderRadius: 2,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#3F3F46";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#27272A";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#A1A1AA",
                  marginBottom: 24,
                  flex: 1,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  borderTop: "1px solid #27272A",
                  paddingTop: 16,
                }}
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={36}
                  height={36}
                  unoptimized
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#FAFAFA",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 12,
                      color: "#71717A",
                    }}
                  >
                    {t.title}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 10,
                    color: "#4ADE80",
                    background: "rgba(74, 222, 128, 0.1)",
                    border: "1px solid rgba(74, 222, 128, 0.2)",
                    borderRadius: 2,
                    padding: "3px 8px",
                    letterSpacing: "0.02em",
                    flexShrink: 0,
                  }}
                >
                  {t.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
