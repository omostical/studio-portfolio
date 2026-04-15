"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Fictional but realistic-sounding SaaS companies
const logos = [
  { name: "Lume Analytics", abbr: "LA" },
  { name: "Vesper Technologies", abbr: "VT" },
  { name: "Fieldwork", abbr: "FW" },
  { name: "Cirrus Health", abbr: "CH" },
  { name: "Beacon Software", abbr: "BS" },
  { name: "Delphi Labs", abbr: "DL" },
  { name: "Acme Corp", abbr: "AC" },
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
          initial={{ y: 8 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-mist font-body text-center mb-8"
        >
          Trusted by finance teams at
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ y: 8 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: "easeOut" }}
              className="flex items-center gap-2 group cursor-default"
            >
              <div
                className="w-6 h-6 flex items-center justify-center text-[9px] font-bold text-void flex-shrink-0"
                style={{
                  background: "rgba(184,147,90,0.6)",
                  borderRadius: "4px",
                  transition: "background 0.2s",
                }}
              >
                {logo.abbr}
              </div>
              <span
                className="text-sm font-body font-medium"
                style={{ color: "rgba(237,232,220,0.45)", transition: "color 0.2s" }}
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
