"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  { name: "Lume Analytics" },
  { name: "Vesper Technologies" },
  { name: "Fieldwork" },
  { name: "Cirrus Health" },
  { name: "Beacon Software" },
  { name: "Delphi Labs" },
  { name: "Echo Systems" },
];

export default function LogoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section
      ref={ref}
      className="py-14"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-layout mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-mist font-body text-center mb-10"
        >
          Trusted by finance teams at
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: "easeOut" }}
              className="flex items-center gap-2 group cursor-default select-none"
            >
              {/* Wordmark-style with amber square accent */}
              <div
                className="w-4 h-4 flex-shrink-0"
                style={{
                  background: "rgba(184,147,90,0.25)",
                  borderRadius: "3px",
                  border: "1px solid rgba(184,147,90,0.2)",
                }}
              />
              <span
                className="font-body font-medium text-sm tracking-tight transition-colors duration-200 group-hover:text-cloud"
                style={{ color: "rgba(237,232,220,0.35)", letterSpacing: "-0.01em" }}
              >
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
