"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    volume: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo form — no submission
  };

  return (
    <section ref={ref} id="cta" style={{ padding: "100px 0" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            background: "#111A30",
            border: "1px solid rgba(59,130,246,0.12)",
            borderRadius: 20,
            padding: "clamp(32px, 5vw, 60px) clamp(24px, 4vw, 56px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Blue glow */}
          <div
            style={{
              position: "absolute",
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              background:
                "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              left: -80,
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left — Copy */}
            <div>
              <span
                style={{
                  fontFamily: "var(--font-fira)",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#3B82F6",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: 16,
                }}
              >
                Get Started
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: "clamp(28px, 4vw, 36px)",
                  fontWeight: 700,
                  color: "#E4E8F0",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                See Canopy process your claims data.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "#6B7FA0",
                  marginBottom: 28,
                  maxWidth: 440,
                }}
              >
                Schedule a 30-minute technical demo with our team. We will run
                your sample claims through the pipeline and show you exactly
                where the bottlenecks disappear.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  "Live processing demo with your data",
                  "ROI projection based on your claim volume",
                  "Implementation timeline and integration plan",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 10,
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: 14,
                        color: "#E4E8F0",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { key: "name", label: "Full name", type: "text", placeholder: "Jane Smith" },
                { key: "email", label: "Work email", type: "email", placeholder: "jane@carrier.com" },
                { key: "company", label: "Company", type: "text", placeholder: "Acme Insurance" },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#6B7FA0",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formState[field.key as keyof typeof formState]}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, [field.key]: e.target.value }))
                    }
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid rgba(59,130,246,0.15)",
                      background: "rgba(11,15,30,0.6)",
                      color: "#E4E8F0",
                      fontFamily: "var(--font-outfit)",
                      fontSize: 14,
                      outline: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "rgba(59,130,246,0.15)")
                    }
                  />
                </div>
              ))}

              <div>
                <label
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#6B7FA0",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  Monthly claim volume
                </label>
                <select
                  value={formState.volume}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, volume: e.target.value }))
                  }
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(59,130,246,0.15)",
                    background: "rgba(11,15,30,0.6)",
                    color: formState.volume ? "#E4E8F0" : "#6B7FA0",
                    fontFamily: "var(--font-outfit)",
                    fontSize: 14,
                    outline: "none",
                    appearance: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled>
                    Select volume
                  </option>
                  <option value="10k-25k">10,000 – 25,000</option>
                  <option value="25k-50k">25,000 – 50,000</option>
                  <option value="50k-100k">50,000 – 100,000</option>
                  <option value="100k+">100,000+</option>
                </select>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px 24px",
                  borderRadius: 10,
                  border: "none",
                  background: "#3B82F6",
                  color: "#fff",
                  fontFamily: "var(--font-outfit)",
                  fontSize: 15,
                  fontWeight: 500,
                  cursor: "pointer",
                  marginTop: 8,
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#2563EB";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#3B82F6";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Schedule a demo
              </button>

              <p
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 12,
                  color: "#6B7FA0",
                  textAlign: "center",
                  marginTop: 4,
                }}
              >
                No commitment. 30-minute call with a solutions engineer.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
