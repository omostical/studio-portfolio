"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Connect your stack",
    description:
      "Strata connects to Stripe, Salesforce, HubSpot, QuickBooks, and Xero. Your contracts, invoices, and usage events sync automatically — no CSV exports, no manual entry, no implementation services.",
    proof: "Typical setup: 20 minutes",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 6l8 4 8-4-8-4zM2 14l8 4 8-4M2 10l8 4 8-4" stroke="#B8935A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Define your contract logic",
    description:
      "Tell Strata how your deals work — in your language, not accounting jargon. Multi-element arrangements, variable consideration, annual true-ups, renewals with credits. We map it to ASC 606 or IFRS 15 automatically.",
    proof: "No accounting degree required",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 4H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-2M7 4a1 1 0 011-1h4a1 1 0 011 1v1H7V4zM10 10h3M10 13h3M7 10h.01M7 13h.01" stroke="#B8935A" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Books close when deals close",
    description:
      "Strata produces GAAP-compliant recognition schedules, journal entries, and real-time ARR metrics — updated the moment a deal closes, expands, or churns. Your monthly close stops being a project.",
    proof: "Average close time: 4 hours",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M13 6v5M10 3v8M7 10v2M17 10a7 7 0 11-14 0 7 7 0 0114 0z" stroke="#B8935A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="py-[120px]" id="how" style={{ background: "#060A14" }}>
      <div className="max-w-layout mx-auto px-6 md:px-10">
        <motion.div
          initial={{ y: 24 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-5 h-px" style={{ background: "#B8935A" }} />
          <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#B8935A" }}>
            How it works
          </span>
        </motion.div>

        <motion.h2
          initial={{ y: 24 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-cloud mb-20 max-w-xl text-balance"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
        >
          From contract signed{" "}
          <span className="text-mist">to books closed.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connecting lines */}
          <div
            className="hidden md:block absolute top-5 left-[33%] right-[33%] h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(184,147,90,0.2), rgba(184,147,90,0.2))" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ y: 36 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2 + i * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div
                className="inline-flex items-center justify-center w-10 h-10 mb-7"
                style={{
                  background: "rgba(184,147,90,0.09)",
                  border: "1px solid rgba(184,147,90,0.22)",
                  borderRadius: "6px",
                }}
              >
                {step.icon}
              </div>

              <div className="font-mono text-xs mb-3 tracking-widest" style={{ color: "#B8935A" }}>
                Step {step.number}
              </div>

              <h3
                className="font-display text-cloud mb-3"
                style={{ fontSize: "1.3125rem", lineHeight: 1.25, letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>

              <p className="font-body text-sm text-mist leading-relaxed mb-5">
                {step.description}
              </p>

              <div className="inline-flex items-center gap-1.5 text-xs font-body" style={{ color: "#28966E" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#28966E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {step.proof}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
