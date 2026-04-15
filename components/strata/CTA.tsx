"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  return (
    <section ref={ref} id="cta" className="py-[120px] relative overflow-hidden" style={{ background: "#060A14" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(184,147,90,0.055), transparent)" }}
      />

      <div className="max-w-layout mx-auto px-6 md:px-10">
        <motion.div
          initial={{ y: 32 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden"
          style={{
            background: "#0C1220",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "16px",
          }}
        >
          <div className="grid lg:grid-cols-[1fr_400px]">
            {/* Left: Form */}
            <div className="p-10 lg:p-16 relative">
              <div
                className="absolute top-0 right-0 w-80 h-72 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at top right, rgba(184,147,90,0.08), transparent 60%)" }}
              />

              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#28966E" }} />
                <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#28966E" }}>
                  Limited beta · Now accepting Series A–C
                </span>
              </div>

              <h2
                className="font-display text-cloud mb-5 text-balance"
                style={{ fontSize: "clamp(1.9rem, 3.2vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
              >
                Stop building revenue schedules.{" "}
                <span className="text-mist">Start trusting them.</span>
              </h2>

              <p className="font-body text-mist leading-relaxed mb-10 max-w-md" style={{ fontSize: "1.0625rem" }}>
                We personally onboard every customer. Request access — Amara or Daniel
                will reach out within 48 hours to schedule a conversation.
              </p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-2.5 max-w-md mb-8"
                  >
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      className="flex-1 px-4 py-3 text-sm font-body text-cloud placeholder-mist outline-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "6px",
                        transition: "border-color 0.15s",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(184,147,90,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3 text-void text-sm font-medium font-body whitespace-nowrap cursor-pointer"
                      style={{
                        background: loading ? "#8A6D42" : "#B8935A",
                        borderRadius: "6px",
                        transition: "background 0.15s, transform 0.15s, box-shadow 0.15s",
                        minWidth: "148px",
                      }}
                      onMouseEnter={(e) => {
                        if (!loading) {
                          e.currentTarget.style.background = "#CBA96A";
                          e.currentTarget.style.transform = "translateY(-1px)";
                          e.currentTarget.style.boxShadow = "0 8px 24px rgba(184,147,90,0.3)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = loading ? "#8A6D42" : "#B8935A";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            className="inline-block w-3.5 h-3.5 rounded-full"
                            style={{ border: "1.5px solid rgba(6,10,20,0.3)", borderTopColor: "rgba(6,10,20,0.9)" }}
                          />
                          Sending…
                        </span>
                      ) : (
                        "Request access →"
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-start gap-3 font-body text-sm mb-8 p-4"
                    style={{
                      background: "rgba(40,150,110,0.1)",
                      border: "1px solid rgba(40,150,110,0.2)",
                      borderRadius: "8px",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 flex-shrink-0">
                      <circle cx="9" cy="9" r="8" stroke="#28966E" strokeWidth="1.5" />
                      <path d="M5.5 9l2.5 2.5L12.5 6" stroke="#28966E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p style={{ color: "#28966E" }}>You&rsquo;re on the list.</p>
                      <p className="text-mist text-xs mt-1">
                        Amara or Daniel will personally reach out within 48 hours to schedule a call.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-5 flex-wrap">
                {["No commitment required", "14-day pilot", "You talk to the founders"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs font-body text-mist">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#6B7A8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Photo + founder availability */}
            <div
              className="relative hidden lg:flex flex-col"
              style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Photo */}
              <div className="relative flex-1" style={{ minHeight: "280px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop"
                  alt="Finance team collaboration"
                  fill
                  className="object-cover"
                  style={{ opacity: 0.55 }}
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, rgba(12,18,32,0.3), rgba(12,18,32,0.85))" }}
                />

                {/* Overlay quote */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-cloud text-[15px] leading-snug mb-3" style={{ letterSpacing: "-0.01em" }}>
                    &ldquo;We wanted to build the tool we
                    wished had existed when we were in the chair.&rdquo;
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full overflow-hidden relative" style={{ border: "2px solid rgba(184,147,90,0.3)" }}>
                      <Image src="https://i.pravatar.cc/40?img=47" alt="Amara Chen" fill className="object-cover" unoptimized />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-cloud font-body">Amara Chen</p>
                      <p className="text-[10px] text-mist font-body">Co-founder, Strata</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability indicator */}
              <div
                className="p-5 flex items-center gap-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative" style={{ border: "2px solid rgba(40,150,110,0.25)" }}>
                    <Image src="https://i.pravatar.cc/40?img=12" alt="Daniel Ruiz" fill className="object-cover" unoptimized />
                  </div>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full"
                    style={{ background: "#28966E", border: "2px solid #0C1220" }}
                  />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-cloud font-body">Daniel is available today</p>
                  <p className="text-[10px] text-mist font-body">Usually replies within a few hours</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
