"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type BillingCycle = "monthly" | "annual";

const plans = [
  {
    id: "growth",
    name: "Growth",
    tagline: "For teams getting off spreadsheets",
    price: { monthly: 499, annual: 399 },
    arr: "Up to $5M ARR",
    highlight: false,
    features: [
      "Up to 5 users",
      "Stripe & Salesforce sync",
      "ASC 606 recognition engine",
      "Journal entry export",
      "QuickBooks & Xero integration",
      "Email support",
    ],
    cta: "Start free trial",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For finance teams that mean business",
    price: { monthly: 1499, annual: 1199 },
    arr: "Up to $50M ARR",
    highlight: true,
    features: [
      "Unlimited users",
      "All Growth integrations",
      "IFRS 15 support",
      "Multi-entity consolidation",
      "Audit trail + SOC 2 reports",
      "NetSuite integration",
      "Slack alerts",
      "Priority support",
    ],
    cta: "Start free trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Custom for complex organisations",
    price: null,
    arr: "Unlimited ARR",
    highlight: false,
    features: [
      "Everything in Scale",
      "Custom contract rules",
      "SSO / SAML",
      "Dedicated implementation",
      "SLA guarantee",
      "Quarterly business review",
      "Custom data retention",
      "White-glove onboarding",
    ],
    cta: "Talk to us",
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [billing, setBilling] = useState<BillingCycle>("annual");

  return (
    <section ref={ref} id="pricing" className="py-[120px]" style={{ background: "#09101E" }}>
      <div className="max-w-layout mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-5 h-px" style={{ background: "#B8935A" }} />
          <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#B8935A" }}>
            Pricing
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-cloud text-balance max-w-md"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
          >
            Simple pricing.{" "}
            <span className="text-mist">No surprises.</span>
          </motion.h2>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <button
              onClick={() => setBilling("monthly")}
              className="text-sm font-body cursor-pointer transition-colors"
              style={{
                color: billing === "monthly" ? "#EDE8DC" : "#6B7A8F",
                background: "none",
                border: "none",
                outline: "none",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
              className="relative flex items-center cursor-pointer flex-shrink-0"
              style={{ width: "40px", height: "22px", background: "none", border: "none", outline: "none" }}
            >
              <div
                className="w-full h-full rounded-full transition-colors duration-200"
                style={{ background: billing === "annual" ? "rgba(184,147,90,0.3)" : "rgba(255,255,255,0.1)" }}
              />
              <div
                className="absolute top-0.5 w-[18px] h-[18px] rounded-full transition-all duration-200"
                style={{
                  background: billing === "annual" ? "#B8935A" : "#6B7A8F",
                  left: billing === "annual" ? "calc(100% - 20px)" : "2px",
                }}
              />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBilling("annual")}
                className="text-sm font-body cursor-pointer transition-colors"
                style={{
                  color: billing === "annual" ? "#EDE8DC" : "#6B7A8F",
                  background: "none",
                  border: "none",
                  outline: "none",
                }}
              >
                Annual
              </button>
              <span
                className="text-[10px] font-body px-1.5 py-0.5"
                style={{
                  background: "rgba(40,150,110,0.12)",
                  color: "#28966E",
                  borderRadius: "3px",
                }}
              >
                Save 20%
              </span>
            </div>
          </motion.div>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex flex-col"
              style={{
                background: plan.highlight ? "#0C1220" : "rgba(12,18,32,0.5)",
                border: plan.highlight
                  ? "1px solid rgba(184,147,90,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {/* Recommended badge */}
              {plan.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 text-center py-1.5 text-[10px] uppercase tracking-widest font-body text-void font-medium"
                  style={{ background: "#B8935A" }}
                >
                  Most popular
                </div>
              )}

              <div className={`p-8 flex flex-col flex-1 ${plan.highlight ? "pt-12" : ""}`}>
                {/* Plan name & tagline */}
                <div className="mb-8">
                  <div className="font-display text-cloud text-xl mb-1.5" style={{ letterSpacing: "-0.02em" }}>
                    {plan.name}
                  </div>
                  <div className="font-body text-xs text-mist">{plan.tagline}</div>
                </div>

                {/* Price */}
                <div className="mb-2">
                  {plan.price ? (
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="font-display tabular-nums"
                        style={{ fontSize: "2.5rem", color: "#EDE8DC", letterSpacing: "-0.03em", lineHeight: 1 }}
                      >
                        ${billing === "annual" ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-sm font-body text-mist">/mo</span>
                    </div>
                  ) : (
                    <div
                      className="font-display"
                      style={{ fontSize: "2rem", color: "#EDE8DC", letterSpacing: "-0.025em", lineHeight: 1 }}
                    >
                      Custom
                    </div>
                  )}
                </div>
                {plan.price && billing === "annual" && (
                  <div className="text-xs font-body text-mist mb-1">
                    billed ${plan.price.annual * 12 / 1000}K/yr
                  </div>
                )}
                <div
                  className="inline-flex text-[10px] font-mono mb-8 px-2 py-0.5 self-start"
                  style={{
                    background: "rgba(184,147,90,0.08)",
                    border: "1px solid rgba(184,147,90,0.15)",
                    borderRadius: "3px",
                    color: "rgba(184,147,90,0.8)",
                  }}
                >
                  {plan.arr}
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                        <path
                          d="M2 7l3.5 3.5L12 3"
                          stroke={plan.highlight ? "#B8935A" : "#28966E"}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm font-body text-mist">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#cta"
                  className="block text-center text-sm font-medium font-body py-3 transition-all duration-150"
                  style={{
                    background: plan.highlight ? "#B8935A" : "transparent",
                    color: plan.highlight ? "#060A14" : "#EDE8DC",
                    border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "6px",
                  }}
                  onMouseEnter={(e) => {
                    if (plan.highlight) {
                      e.currentTarget.style.background = "#CBA96A";
                    } else {
                      e.currentTarget.style.borderColor = "rgba(184,147,90,0.4)";
                      e.currentTarget.style.color = "#B8935A";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlight) {
                      e.currentTarget.style.background = "#B8935A";
                    } else {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                      e.currentTarget.style.color = "#EDE8DC";
                    }
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center text-xs font-body text-mist mt-8"
        >
          All plans include a 14-day free trial, no credit card required. You&rsquo;ll talk directly to the founders during onboarding.
        </motion.p>
      </div>
    </section>
  );
}
