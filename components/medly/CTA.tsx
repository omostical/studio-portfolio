"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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
    <section
      id="cta"
      ref={ref}
      style={{
        background: "#EFF8F4",
        padding: "140px 0 120px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center"
          style={{
            background: "#FFFFFF",
            borderRadius: "24px",
            padding: "72px 32px",
            boxShadow: "0 4px 32px rgba(45,52,54,0.06)",
            position: "relative",
            overflow: "hidden",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          {/* Subtle background circles */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-60px",
              left: "-60px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(239,248,244,0.5)",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-40px",
              right: "-40px",
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              background: "rgba(255,245,238,0.5)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#E8A87C",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Get started
            </span>

            <h2
              style={{
                fontFamily: "var(--font-libre), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: 1.15,
                color: "#2D3436",
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
                lineHeight: 1.7,
                color: "#7F8C8D",
                marginBottom: "36px",
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
                  maxWidth: "440px",
                  margin: "0 auto 24px",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  required
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.9rem",
                    color: "#2D3436",
                    background: "#FAFAF5",
                    border: "1px solid rgba(45,52,54,0.1)",
                    borderRadius: "100px",
                    padding: "14px 20px",
                    width: "100%",
                    outline: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(61,155,127,0.3)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(61,155,127,0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(45,52,54,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="submit"
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    background: "#E8A87C",
                    borderRadius: "100px",
                    padding: "14px 28px",
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition:
                      "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                    flexShrink: 0,
                    boxShadow: "0 4px 20px rgba(232,168,124,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#E09A6A";
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(232,168,124,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#E8A87C";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(232,168,124,0.25)";
                  }}
                >
                  See it in action
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-2"
                style={{ marginBottom: "24px" }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#EFF8F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3.5 7l2.5 2.5L10.5 5"
                      stroke="#3D9B7F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.9375rem",
                    color: "#3D9B7F",
                    fontWeight: 500,
                  }}
                >
                  We&apos;ll be in touch within 24 hours
                </span>
              </motion.div>
            )}

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {["No credit card required", "HIPAA compliant", "Setup in 20 minutes"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5"
                    style={{
                      fontFamily: "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.75rem",
                      color: "#7F8C8D",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#3D9B7F",
                        display: "inline-block",
                        opacity: 0.5,
                      }}
                    />
                    {item}
                    {i < 2 && (
                      <span
                        style={{
                          marginLeft: "8px",
                          color: "#7F8C8D",
                          opacity: 0.3,
                        }}
                      >
                        &middot;
                      </span>
                    )}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
