"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      style={{ color: "#4ADE80", fontWeight: 400 }}
    >
      |
    </motion.span>
  );
}

/* Mini product mockup card */
function ProductMockup() {
  return (
    <div
      style={{
        background: "#18181B",
        border: "1px solid #27272A",
        borderRadius: 2,
        padding: 20,
        width: "100%",
        maxWidth: 360,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 11,
          color: "#71717A",
          marginBottom: 16,
          letterSpacing: "0.04em",
        }}
      >
        // dashboard overview
      </div>

      {/* Metrics grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        {[
          { label: "Runway", value: "14.2mo", color: "#4ADE80" },
          { label: "Burn", value: "$48K", color: "#FBBF24" },
          { label: "Team", value: "8", color: "#FAFAFA" },
          { label: "MRR", value: "$12.4K", color: "#4ADE80" },
        ].map((m) => (
          <div
            key={m.label}
            style={{
              background: "#09090B",
              border: "1px solid #27272A",
              borderRadius: 2,
              padding: "10px 12px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 10,
                color: "#71717A",
                marginBottom: 4,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {m.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 18,
                fontWeight: 500,
                color: m.color,
                letterSpacing: "-0.02em",
              }}
            >
              {m.value}
            </div>
          </div>
        ))}
      </div>

      {/* Mini sparkline */}
      <div style={{ display: "flex", alignItems: "end", gap: 3, height: 32 }}>
        {[40, 45, 38, 52, 48, 60, 55, 68, 62, 74, 70, 80].map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: i >= 10 ? "#4ADE80" : "#27272A",
              borderRadius: 1,
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>
      <div
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 10,
          color: "#71717A",
          marginTop: 6,
        }}
      >
        MRR trend (12 months)
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-[1280px] mx-auto px-6 md:px-10"
        style={{ position: "relative", width: "100%" }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 12,
            color: "#71717A",
            marginBottom: 48,
            letterSpacing: "0.04em",
          }}
        >
          // startup-os
        </motion.div>

        {/* Main content: text left, mockup right on desktop */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 48,
            alignItems: "center",
          }}
          className="lg:!flex-row lg:!items-center lg:!gap-16"
        >
          {/* Left: copy */}
          <div style={{ flex: 1, textAlign: "center" }} className="lg:!text-left">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#FAFAFA",
                marginBottom: 20,
              }}
            >
              Stop duct-taping
              <br />
              your startup
              <br />
              together.
              <BlinkingCursor />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(15px, 1.8vw, 17px)",
                lineHeight: 1.7,
                color: "#A1A1AA",
                maxWidth: 520,
                marginBottom: 32,
              }}
              className="lg:!mx-0 mx-auto"
            >
              Beacon replaces the 6 tools you&apos;re juggling with one.
              Runway, cap table, hiring, investor updates — finally in one
              place that actually talks to each other.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 48,
                justifyContent: "center",
              }}
              className="lg:!justify-start"
            >
              <a
                href="#cta"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#09090B",
                  background: "#FBBF24",
                  padding: "12px 24px",
                  borderRadius: 2,
                  textDecoration: "none",
                  transition: "background 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F59E0B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#FBBF24";
                }}
              >
                Start free — no credit card
              </a>
              <a
                href="#product"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#FAFAFA",
                  background: "transparent",
                  padding: "12px 24px",
                  border: "1px solid #27272A",
                  borderRadius: 2,
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3F3F46";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272A";
                }}
              >
                See how it works
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
              className="lg:!justify-start"
            >
              {[
                { value: "400+", label: "teams" },
                { value: "$2.1B", label: "tracked" },
                { value: "12 min", label: "avg update" },
              ].map((stat, i) => (
                <div key={stat.label} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  {i > 0 && (
                    <span style={{ color: "#27272A", fontSize: 14 }}>
                      ·
                    </span>
                  )}
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains), monospace",
                        fontSize: 16,
                        fontWeight: 500,
                        color: "#4ADE80",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 13,
                        color: "#71717A",
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: product mockup (desktop only) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:!block"
            style={{ flexShrink: 0 }}
          >
            <ProductMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
