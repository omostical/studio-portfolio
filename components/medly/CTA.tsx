"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PulseLine } from "./Hero";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <PulseLine />
      <section
        id="cta"
        ref={ref}
        style={{
          background: "#0F1A14",
          padding: "96px 0 80px",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7 }}
            className="text-center"
            style={{
              background: "#162420",
              border: "1px solid rgba(78,203,160,0.1)",
              borderRadius: "20px",
              padding: "64px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "-20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "600px",
                height: "400px",
                background:
                  "radial-gradient(ellipse at center, rgba(78,203,160,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Decorative pulse line behind */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: "15%",
                left: 0,
                right: 0,
                opacity: 0.05,
              }}
            >
              <svg
                width="100%"
                height="40"
                viewBox="0 0 1280 40"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 20 H440 L460 20 L475 8 L490 32 L505 4 L520 36 L535 12 L550 28 L565 20 H1280"
                  stroke="#4ECBA0"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "#4ECBA0",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Get started
              </span>

              <h2
                style={{
                  fontFamily: "var(--font-libre), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  lineHeight: 1.15,
                  color: "#F0EDE5",
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                Ready to see fewer empty chairs?
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.65,
                  color: "#7A8F85",
                  marginBottom: "32px",
                  maxWidth: "440px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Join 200+ healthcare providers who&apos;ve reduced no-shows,
                recovered revenue, and improved patient outcomes with Medly.
              </p>

              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-3"
                  style={{
                    maxWidth: "460px",
                    margin: "0 auto 20px",
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    required
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.875rem",
                      color: "#F0EDE5",
                      background: "rgba(15,26,20,0.8)",
                      border: "1px solid rgba(78,203,160,0.15)",
                      borderRadius: "8px",
                      padding: "12px 16px",
                      width: "100%",
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(78,203,160,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(78,203,160,0.15)")
                    }
                  />
                  <button
                    type="submit"
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "#0F1A14",
                      background: "#4ECBA0",
                      borderRadius: "8px",
                      padding: "12px 24px",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition:
                        "background 0.15s, transform 0.15s, box-shadow 0.15s",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#6AD8B5";
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 20px rgba(78,203,160,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#4ECBA0";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    See it in action
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-center gap-2"
                  style={{ marginBottom: "20px" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <circle
                      cx="10"
                      cy="10"
                      r="9"
                      stroke="#4ECBA0"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 10l3 3 5-5"
                      stroke="#4ECBA0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.9375rem",
                      color: "#4ECBA0",
                      fontWeight: 500,
                    }}
                  >
                    We&apos;ll be in touch within 24 hours
                  </span>
                </motion.div>
              )}

              <div
                className="flex items-center justify-center gap-4 flex-wrap"
                style={{ marginTop: "8px" }}
              >
                <a
                  href="#cta"
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.8rem",
                    color: "#7A8F85",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F0EDE5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#7A8F85")
                  }
                >
                  Talk to our team &rarr;
                </a>
                <span style={{ color: "#7A8F85", opacity: 0.3 }}>|</span>
                <span
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.75rem",
                    color: "#7A8F85",
                  }}
                >
                  No credit card required &middot; HIPAA compliant
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
