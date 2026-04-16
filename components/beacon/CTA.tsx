"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      ref={ref}
      id="cta"
      style={{
        paddingTop: 96,
        paddingBottom: 96,
        background: "#18181B",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            Your startup deserves better
            <br />
            than spreadsheets.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 17,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              marginBottom: 36,
            }}
          >
            Join 400+ founding teams who replaced their duct-tape stack with
            Beacon. Free to start, takes 5 minutes to set up.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                maxWidth: 440,
                margin: "0 auto",
              }}
              className="sm:!flex-row"
            >
              <input
                type="email"
                placeholder="you@startup.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 15,
                  padding: "14px 18px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#FFFFFF",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,107,53,0.5)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "#FF6B35",
                  padding: "14px 28px",
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#E55A2B")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#FF6B35")}
              >
                Start free
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: 12,
                padding: "20px 28px",
                maxWidth: 440,
                margin: "0 auto",
              }}
            >
              <p style={{ fontFamily: "var(--font-sora)", fontSize: 16, fontWeight: 600, color: "#22C55E", marginBottom: 4 }}>
                You&apos;re in!
              </p>
              <p style={{ fontFamily: "var(--font-jakarta)", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                Check your inbox for your login link. Welcome to Beacon.
              </p>
            </motion.div>
          )}

          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              marginTop: 16,
            }}
          >
            No credit card required &middot; Free for up to 3 users &middot; Set up in 5 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
