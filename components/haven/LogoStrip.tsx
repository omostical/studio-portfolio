"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companies = [
  "Greystar",
  "Brookfield Properties",
  "Lincoln Property Co.",
  "Hines",
  "Cushman & Wakefield",
  "CBRE Residential",
];

export default function LogoStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      className="py-12 md:py-16"
      style={{
        background: "#F5F1EB",
        borderTop: "1px solid rgba(26,26,46,0.06)",
        borderBottom: "1px solid rgba(26,26,46,0.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-center mb-8"
          style={{
            color: "#6B6B7A",
            fontFamily: "var(--font-ibm-mono), monospace",
          }}
        >
          Trusted by property managers across
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 md:gap-x-16">
          {companies.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.05 * i,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-sm md:text-base font-semibold tracking-tight whitespace-nowrap"
              style={{
                color: "rgba(26,26,46,0.25)",
                fontFamily: "var(--font-jakarta), sans-serif",
              }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
