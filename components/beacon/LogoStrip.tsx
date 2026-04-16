"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  "Y Combinator W24",
  "Techstars '24",
  "500 Global",
  "Pioneer Fund",
  "Antler",
  "On Deck",
  "South Park Commons",
  "Neo",
];

export default function LogoStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 48,
        paddingBottom: 48,
        borderTop: "1px solid rgba(24,24,27,0.06)",
        borderBottom: "1px solid rgba(24,24,27,0.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: 13,
            fontWeight: 500,
            color: "#A1A1AA",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 28,
          }}
        >
          Trusted by 400+ teams from top accelerators
        </motion.p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px 40px",
          }}
        >
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                fontFamily: "var(--font-sora)",
                fontSize: 14,
                fontWeight: 500,
                color: "#C4C4CC",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
