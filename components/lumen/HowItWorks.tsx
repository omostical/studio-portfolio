"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect",
    body: "One-click integrations with the tools you already run on.",
  },
  {
    number: "02",
    title: "Ask",
    body: "Type a question or pick from 40+ pre-built ops views.",
  },
  {
    number: "03",
    title: "Decide",
    body: "Share, alert, or act — directly from the answer.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        borderBottom: "1px solid #1F1F22",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#EDEDEF",
            marginBottom: 56,
          }}
        >
          Live in an afternoon.
        </motion.h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 0, position: "relative" }}
        >
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: 20,
              left: "16.67%",
              right: "16.67%",
              height: 1,
              background: "#1F1F22",
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                position: "relative",
                padding: "0 24px",
                textAlign: "center",
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid #E8B931",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#E8B931",
                  marginBottom: 20,
                  background: "#0C0C0E",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.number}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#EDEDEF",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "#8B8B8D",
                  maxWidth: 280,
                  margin: "0 auto",
                }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
