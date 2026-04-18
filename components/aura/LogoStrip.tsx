"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  "Meridian",
  "Northvane",
  "Caspian",
  "Everly",
  "Solstice",
  "Pinecrest",
  "Woven",
  "Halcyon",
  "Larkspur",
  "Vantage",
  "Kinetic",
  "Summit",
  "Riviera",
  "Arclight",
  "Fieldstone",
  "Veridian",
];

export default function LogoStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        background: "#FFFFFF",
        padding: "80px 24px",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span
            className="font-body"
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "#2D7A4F",
              background: "rgba(45,122,79,0.08)",
              padding: "6px 14px",
              borderRadius: "100px",
              letterSpacing: "0.03em",
              marginBottom: "16px",
              textTransform: "uppercase",
            }}
          >
            Customer stories
          </span>
          <p
            className="font-body"
            style={{
              fontSize: "1.05rem",
              color: "#6B6B6B",
            }}
          >
            Leading brands succeed with Aura
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
          className="!grid-cols-2 md:!grid-cols-4"
        >
          {brands.map((brand, i) => (
            <div
              key={brand}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px 16px",
                borderRight:
                  (i + 1) % 4 !== 0
                    ? "1px solid rgba(0,0,0,0.06)"
                    : "none",
                borderBottom:
                  i < 12 ? "1px solid rgba(0,0,0,0.06)" : "none",
              }}
            >
              <span
                className="font-body"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#CCCCCC",
                  letterSpacing: "-0.01em",
                }}
              >
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .\\!grid-cols-2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 768px) {
          .md\\:!grid-cols-4 {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
