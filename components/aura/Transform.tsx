"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featureCards = [
  {
    title: "Empower every team",
    description:
      "Give support, sales, and success teams AI agents tailored to their workflows.",
    tint: "rgba(45,122,79,0.06)",
    accentColor: "#2D7A4F",
    visual: (
      <div style={{ display: "flex", gap: "-8px", marginBottom: "16px" }}>
        {["#2D7A4F", "#4A9E6F", "#7BC09A"].map((color, i) => (
          <div
            key={i}
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: color,
              border: "2px solid #FFFFFF",
              marginLeft: i > 0 ? "-8px" : "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.7rem",
              color: "#FFFFFF",
              fontWeight: 600,
            }}
          >
            {["S", "A", "C"][i]}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Unify your channels",
    description:
      "Web, email, SMS, in-app — one AI brain across every customer touchpoint.",
    tint: "rgba(59,130,246,0.06)",
    accentColor: "#3B82F6",
    visual: (
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        {["Web", "Email", "SMS", "App"].map((channel) => (
          <span
            key={channel}
            className="font-body"
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              color: "#3B82F6",
              background: "rgba(59,130,246,0.08)",
              padding: "4px 10px",
              borderRadius: "100px",
            }}
          >
            {channel}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Pay for a job well done",
    description:
      "Outcome-based pricing. You only pay when an agent successfully resolves an issue.",
    tint: "rgba(212,165,116,0.1)",
    accentColor: "#D4A574",
    visual: (
      <div
        style={{
          display: "flex",
          gap: "2px",
          marginBottom: "16px",
          alignItems: "center",
        }}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={star <= 4 ? "#D4A574" : "none"}
            stroke="#D4A574"
            strokeWidth="1.5"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
        <span
          className="font-body"
          style={{
            fontSize: "0.75rem",
            color: "#D4A574",
            fontWeight: 600,
            marginLeft: "6px",
          }}
        >
          4.0
        </span>
      </div>
    ),
  },
];

export default function Transform() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        background: "#FAF8F5",
        padding: "120px 24px",
      }}
    >
      <div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        className="md:px-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.15,
              fontWeight: 500,
              color: "#1A1A1A",
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            Transform your customer experience
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: "1.05rem",
              color: "#6B6B6B",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Aura helps the great companies of the world show up for their
            customers.
          </p>
        </motion.div>

        {/* Chat Mockup Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          style={{
            background: "#FFFFFF",
            borderRadius: "16px",
            boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
            border: "1px solid rgba(0,0,0,0.08)",
            padding: "32px",
            marginBottom: "32px",
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "#1A1A1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="font-display"
                style={{ color: "#FFFFFF", fontSize: "0.85rem", fontWeight: 600 }}
              >
                a
              </span>
            </div>
            <div>
              <span
                className="font-body"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                }}
              >
                Aura Agent
              </span>
              <span
                className="font-body"
                style={{
                  fontSize: "0.75rem",
                  color: "#2D7A4F",
                  marginLeft: "8px",
                  fontWeight: 500,
                }}
              >
                Online
              </span>
            </div>
          </div>

          {/* Messages */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Customer message */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                className="font-body"
                style={{
                  maxWidth: "70%",
                  background: "#F5F5F5",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 4px 16px",
                  fontSize: "0.9rem",
                  color: "#1A1A1A",
                  lineHeight: 1.6,
                }}
              >
                Hi, I ordered the wrong size on order #4821. Can I exchange it
                for a medium?
              </div>
            </div>

            {/* AI response */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ maxWidth: "75%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    className="font-body"
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      background: "#2D7A4F",
                      padding: "2px 8px",
                      borderRadius: "100px",
                    }}
                  >
                    Aura AI
                  </span>
                </div>
                <div
                  className="font-body"
                  style={{
                    background: "rgba(45,122,79,0.06)",
                    padding: "12px 16px",
                    borderRadius: "16px 16px 16px 4px",
                    fontSize: "0.9rem",
                    color: "#1A1A1A",
                    lineHeight: 1.6,
                  }}
                >
                  Of course! I found order #4821 — a Classic Tee in Large. I&apos;ve
                  initiated an exchange for a Medium. A prepaid return label is on
                  its way to your email. Your new size will ship as soon as we
                  receive the original.
                </div>
              </div>
            </div>

            {/* Customer follow-up */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                className="font-body"
                style={{
                  maxWidth: "70%",
                  background: "#F5F5F5",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 4px 16px",
                  fontSize: "0.9rem",
                  color: "#1A1A1A",
                  lineHeight: 1.6,
                }}
              >
                That was incredibly fast. Thank you!
              </div>
            </div>
          </div>

          {/* Resolution badge */}
          <div
            style={{
              marginTop: "20px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="7" fill="rgba(45,122,79,0.1)" stroke="#2D7A4F" strokeWidth="1" />
              <path d="M5 8l2 2 4-4" stroke="#2D7A4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span
              className="font-body"
              style={{ fontSize: "0.8rem", color: "#2D7A4F", fontWeight: 500 }}
            >
              Resolved in 28 seconds — no escalation needed
            </span>
          </div>
        </motion.div>

        {/* Feature Cards Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "16px",
          }}
          className="md:!grid-cols-3"
        >
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.3 + i * 0.1,
              }}
              style={{
                background: card.tint,
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              {card.visual}
              <h3
                className="font-body"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  marginBottom: "8px",
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: "0.875rem",
                  color: "#6B6B6B",
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:!grid-cols-3 {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
