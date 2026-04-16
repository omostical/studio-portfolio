"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For solo founders getting started",
    cta: "Start free",
    featured: false,
    features: [
      "Up to 3 team members",
      "Runway tracker (basic)",
      "Cap table (view only)",
      "1 investor update / month",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per user / month",
    description: "For founding teams raising or scaling",
    cta: "Start 14-day trial",
    featured: true,
    badge: "Most popular",
    features: [
      "Unlimited team members",
      "Runway tracker + scenario modeling",
      "Full cap table with dilution modeling",
      "Unlimited investor updates",
      "Hiring pipeline",
      "Metrics dashboard + integrations",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "per user / month",
    description: "For post-seed teams with complex needs",
    cta: "Contact us",
    featured: false,
    features: [
      "Everything in Pro",
      "Advanced permissions & roles",
      "Custom integrations (API access)",
      "Board deck export",
      "SOC 2 compliance tools",
      "Dedicated account manager",
      "SSO & SAML",
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} id="pricing" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 13,
              fontWeight: 600,
              color: "#FF6B35",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 12,
            }}
          >
            Simple pricing
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#18181B",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Start free. Scale when you&apos;re ready.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 17,
              color: "#71717A",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            No long-term contracts. No per-feature pricing.
            Cancel anytime — we&apos;re founders too, we get it.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 20,
            alignItems: "start",
          }}
          className="md:!grid-cols-3"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: tier.featured ? "#18181B" : "#FFFFFF",
                borderRadius: 16,
                padding: 32,
                border: tier.featured
                  ? "1px solid #18181B"
                  : "1px solid rgba(24,24,27,0.08)",
                position: "relative",
                boxShadow: tier.featured
                  ? "0 16px 48px rgba(24,24,27,0.15)"
                  : "none",
              }}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "var(--font-jakarta)",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#FFFFFF",
                    background: "#FF6B35",
                    padding: "4px 16px",
                    borderRadius: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <p
                style={{
                  fontFamily: "var(--font-sora)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: tier.featured ? "#FFFFFF" : "#18181B",
                  marginBottom: 4,
                }}
              >
                {tier.name}
              </p>

              <p
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 14,
                  color: tier.featured ? "rgba(255,255,255,0.6)" : "#A1A1AA",
                  marginBottom: 20,
                }}
              >
                {tier.description}
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 24 }}>
                <span
                  style={{
                    fontFamily: "var(--font-sora)",
                    fontSize: 40,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: tier.featured ? "#FFFFFF" : "#18181B",
                  }}
                >
                  {tier.price}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: 14,
                    color: tier.featured ? "rgba(255,255,255,0.5)" : "#A1A1AA",
                  }}
                >
                  {tier.period}
                </span>
              </div>

              {/* CTA button */}
              <a
                href="#cta"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "14px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background 0.2s, transform 0.2s",
                  marginBottom: 28,
                  ...(tier.featured
                    ? {
                        background: "#FF6B35",
                        color: "#FFFFFF",
                      }
                    : {
                        background: "transparent",
                        color: "#18181B",
                        border: "1px solid rgba(24,24,27,0.15)",
                      }),
                }}
                onMouseEnter={(e) => {
                  if (tier.featured) {
                    e.currentTarget.style.background = "#E55A2B";
                  } else {
                    e.currentTarget.style.background = "rgba(24,24,27,0.03)";
                  }
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  if (tier.featured) {
                    e.currentTarget.style.background = "#FF6B35";
                  } else {
                    e.currentTarget.style.background = "transparent";
                  }
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {tier.cta}
              </a>

              {/* Features list */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontFamily: "var(--font-jakarta)",
                      fontSize: 14,
                      color: tier.featured ? "rgba(255,255,255,0.8)" : "#52525B",
                      lineHeight: 1.5,
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    >
                      <path
                        d="M3 8.5L6.5 12L13 4"
                        stroke={tier.featured ? "#FF6B35" : "#22C55E"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
