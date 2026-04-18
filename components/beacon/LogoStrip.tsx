"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const logos = [
  "Y Combinator",
  "Techstars",
  "500 Global",
  "Pioneer Fund",
  "Antler",
  "On Deck",
];

export default function LogoStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 32,
        paddingBottom: 32,
        borderTop: "1px solid #27272A",
        borderBottom: "1px solid #27272A",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 11,
              color: "#71717A",
              letterSpacing: "0.04em",
            }}
          >
            // backed by
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {logos.map((name, i) => (
              <span key={name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {i > 0 && (
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 12,
                      color: "#3F3F46",
                    }}
                  >
                    ·
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#52525B",
                  }}
                >
                  {name}
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
