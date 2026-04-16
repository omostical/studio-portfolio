"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clinics = [
  "Northside Medical Group",
  "Pacific Urgent Care",
  "Summit Health Partners",
  "Clearview Family Medicine",
  "Harbor Specialty Clinic",
  "Meridian Women\u2019s Health",
  "Redwood Pediatrics",
  "Bayshore Internal Medicine",
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        background: "#0F1A14",
        borderTop: "1px solid rgba(78,203,160,0.06)",
        borderBottom: "1px solid rgba(78,203,160,0.06)",
        padding: "32px 0",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-source), system-ui, sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            color: "#7A8F85",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "20px",
          }}
        >
          Trusted by 200+ healthcare providers
        </p>

        {/* Scrolling marquee */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            animation: "medly-marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {[...clinics, ...clinics].map((name, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 400,
                color: "#7A8F85",
                opacity: 0.6,
                whiteSpace: "nowrap",
                letterSpacing: "0.02em",
              }}
            >
              {name}
            </span>
          ))}
        </div>

        <style jsx>{`
          @keyframes medly-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </motion.div>
    </section>
  );
}
