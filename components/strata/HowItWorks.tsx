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
    detail: "7 integrations, zero config",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6.5l8 4.5 8-4.5L11 2zM3 15.5l8 4.5 8-4.5M3 11l8 4.5 8-4.5" stroke="#B8935A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    integrations: ["Stripe", "Salesforce", "QuickBooks", "HubSpot"],
  },
  {
    number: "02",
    title: "Define your contract logic",
    description:
      "Tell Strata how your deals work — in your language, not accounting jargon. Multi-element arrangements, variable consideration, annual true-ups. We map it to ASC 606 or IFRS 15 automatically.",
    proof: "No accounting degree required",
    detail: "Rule builder, no code",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2V7a2 2 0 00-2-2h-2M8 5a1 1 0 011-1h4a1 1 0 011 1v1H8V5zM11 11h4M11 14h4M8 11h.01M8 14h.01" stroke="#B8935A" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    integrations: ["ASC 606", "IFRS 15", "Rule builder", "Auto-map"],
  },
  {
    number: "03",
    title: "Books close when deals close",
    description:
      "Strata produces GAAP-compliant recognition schedules, journal entries, and real-time ARR metrics — updated the moment a deal closes, expands, or churns. Your monthly close stops being a project.",
    proof: "Average close time: 4 hours",
    detail: "Was 14 days",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M14 7v5.5M11 4v7.5M8 11v2.5M18 11a7 7 0 11-14 0 7 7 0 0114 0z" stroke="#B8935A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    integrations: ["Real-time ARR", "Journal entries", "Close in 4 hrs", "Board-ready"],
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="py-[120px]" id="how" style={{ background: "#060A14" }}>
      <div className="max-w-layout mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-5 h-px" style={{ background: "#B8935A" }} />
          <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#B8935A" }}>
            How it works
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-cloud mb-20 max-w-xl text-balance"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
        >
          From contract signed{" "}
          <span className="text-mist">to books closed.</span>
        </motion.h2>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Horizontal connector (desktop only) */}
          <div
            className="hidden md:block absolute pointer-events-none"
            style={{ top: "28px", left: "calc(16.67% + 20px)", right: "calc(16.67% + 20px)", height: "1px" }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full origin-left"
              style={{ background: "linear-gradient(to right, rgba(184,147,90,0.35), rgba(184,147,90,0.1), rgba(184,147,90,0.35))" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2 + i * 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Step icon + number */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="relative flex items-center justify-center w-14 h-14 flex-shrink-0"
                  style={{
                    background: "rgba(184,147,90,0.07)",
                    border: "1px solid rgba(184,147,90,0.2)",
                    borderRadius: "10px",
                  }}
                >
                  {step.icon}
                  <div
                    className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-[9px] font-mono font-bold text-void"
                    style={{ background: "#B8935A", borderRadius: "4px" }}
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              <h3
                className="font-display text-cloud mb-3"
                style={{ fontSize: "1.3125rem", lineHeight: 1.25, letterSpacing: "-0.02em" }}
              >
                {step.title}
              </h3>

              <p className="font-body text-sm text-mist leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Integration pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {step.integrations.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-body px-2 py-0.5"
                    style={{
                      background: "rgba(184,147,90,0.08)",
                      border: "1px solid rgba(184,147,90,0.15)",
                      borderRadius: "3px",
                      color: "rgba(184,147,90,0.8)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-body" style={{ color: "#28966E" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#28966E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {step.proof}
                {step.detail && (
                  <span className="text-mist ml-1">— {step.detail}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
