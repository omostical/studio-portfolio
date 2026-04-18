"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function BlinkingCursor() {
  return (
    <motion.span
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      style={{ color: "#4ADE80" }}
    >
      |
    </motion.span>
  );
}

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
        borderTop: "1px solid #27272A",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-10"
        style={{ position: "relative" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 600,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 12,
              color: "#71717A",
              letterSpacing: "0.04em",
              marginBottom: 32,
            }}
          >
            // get-started
          </p>

          {/* Terminal prompt */}
          <div
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "clamp(16px, 2.5vw, 20px)",
              color: "#4ADE80",
              marginBottom: 32,
            }}
          >
            <span style={{ color: "#71717A" }}>$ </span>
            beacon init
            <BlinkingCursor />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#FAFAFA",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Your startup deserves better
            <br />
            than spreadsheets.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 16,
              color: "#A1A1AA",
              lineHeight: 1.7,
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
                maxWidth: 480,
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
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  padding: "12px 16px",
                  borderRadius: 2,
                  border: "1px solid #27272A",
                  background: "#18181B",
                  color: "#FAFAFA",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "#4ADE80")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "#27272A")
                }
              />
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#09090B",
                  background: "#FBBF24",
                  padding: "12px 24px",
                  borderRadius: 2,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#F59E0B")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#FBBF24")
                }
              >
                Get started free
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                background: "#18181B",
                border: "1px solid #4ADE80",
                borderRadius: 2,
                padding: "20px 28px",
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#4ADE80",
                  marginBottom: 4,
                }}
              >
                You&apos;re in.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  color: "#A1A1AA",
                }}
              >
                Check your inbox for your login link. Welcome to Beacon.
              </p>
            </motion.div>
          )}

          {/* Trust pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              marginTop: 20,
              flexWrap: "wrap",
            }}
          >
            {["No credit card", "Free plan forever", "Setup in 2 minutes"].map(
              (pill, i) => (
                <span
                  key={pill}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  {i > 0 && (
                    <span style={{ color: "#27272A", fontSize: 12 }}>·</span>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13,
                      color: "#71717A",
                    }}
                  >
                    {pill}
                  </span>
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
