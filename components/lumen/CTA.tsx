"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 120,
        paddingBottom: 120,
        borderBottom: "1px solid #1F1F22",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#EDEDEF",
              marginBottom: 16,
            }}
          >
            Stop reporting. Start operating.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 17,
              lineHeight: 1.6,
              color: "#8B8B8D",
              marginBottom: 36,
            }}
          >
            Free for teams under 10. No credit card, no sales call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            <a
              href="#"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 15,
                fontWeight: 500,
                color: "#0C0C0E",
                background: "#E8B931",
                padding: "12px 32px",
                borderRadius: 100,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Start free
            </a>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 15,
                fontWeight: 500,
                color: "#EDEDEF",
                border: "1px solid #2A2A2E",
                padding: "12px 32px",
                borderRadius: 100,
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#3A3A3E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#2A2A2E")
              }
            >
              Book a 20-min walkthrough
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 13,
              color: "#5A5A5C",
            }}
          >
            Built for operators, by operators.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
