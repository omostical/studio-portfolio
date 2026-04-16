"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const badges = [
  {
    label: "SOC 2 Type II",
    description: "Audited annually",
  },
  {
    label: "HIPAA",
    description: "Health data compliant",
  },
  {
    label: "ISO 27001",
    description: "Information security",
  },
  {
    label: "NAIC",
    description: "Regulatory compliant",
  },
];

export default function TrustBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <div ref={ref} className="flex flex-wrap gap-3 mt-8" id="trust">
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 12px",
            borderRadius: 6,
            border: "1px solid rgba(59,130,246,0.12)",
            background: "rgba(17,26,48,0.5)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L12 4V8.5C12 10.5 9.5 12.5 7 13C4.5 12.5 2 10.5 2 8.5V4L7 1Z"
              stroke="#3B82F6"
              strokeWidth="1.2"
              fill="rgba(59,130,246,0.1)"
            />
            <path
              d="M5 7L6.5 8.5L9 5.5"
              stroke="#3B82F6"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <span
              style={{
                fontFamily: "var(--font-fira)",
                fontSize: 11,
                fontWeight: 500,
                color: "#E4E8F0",
                letterSpacing: "0.02em",
              }}
            >
              {badge.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
