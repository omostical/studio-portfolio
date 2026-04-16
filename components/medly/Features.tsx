"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PulseLine } from "./Hero";

const features = [
  {
    title: "Smart scheduling",
    subtitle: "Fill gaps before they cost you",
    description:
      "AI-powered scheduling that predicts cancellations, suggests optimal appointment times based on patient history, and automatically fills open slots from your waitlist. No more empty chairs.",
    visual: (
      <SmartScheduleViz />
    ),
  },
  {
    title: "Automated reminders",
    subtitle: "SMS, email, and voice \u2014 on their terms",
    description:
      "Multi-channel reminders that adapt to each patient\u2019s preferred communication method. Send at the right time, in the right channel, with the right message. Patients confirm with a single tap.",
    visual: (
      <ReminderViz />
    ),
  },
  {
    title: "Patient portal",
    subtitle: "Self-service that patients actually use",
    description:
      "Patients can reschedule, complete intake forms, view visit summaries, and message their care team \u2014 all from their phone. No app download required. 89% adoption rate within 30 days.",
    visual: (
      <PortalViz />
    ),
  },
  {
    title: "Real-time analytics",
    subtitle: "Know what\u2019s working. Fix what\u2019s not.",
    description:
      "Track no-show rates, reminder effectiveness, patient engagement scores, and revenue impact \u2014 all in one dashboard. Drill down by provider, location, or patient segment.",
    visual: (
      <AnalyticsViz />
    ),
  },
];

/* ── Feature Visualizations ── */

function SmartScheduleViz() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {[
        { time: "10:15", patient: "Open slot", type: "waitlist", isOpen: true },
        { time: "10:45", patient: "J. Martinez", type: "Predicted cancel (82%)", isOpen: false },
        { time: "11:15", patient: "K. Chen", type: "Confirmed", isOpen: false },
      ].map((slot, i) => (
        <div
          key={i}
          className="flex items-center justify-between"
          style={{
            borderRadius: "8px",
            padding: "10px 14px",
            background: slot.isOpen
              ? "rgba(212,165,116,0.06)"
              : "rgba(255,255,255,0.02)",
            border: slot.isOpen
              ? "1px dashed rgba(212,165,116,0.25)"
              : "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div className="flex items-center gap-3">
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.68rem",
                color: "#7A8F85",
                width: "40px",
              }}
            >
              {slot.time}
            </span>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: slot.isOpen ? "#D4A574" : "#F0EDE5",
                }}
              >
                {slot.patient}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.62rem",
                  color: slot.type.includes("Predicted") ? "#E87461" : "#7A8F85",
                }}
              >
                {slot.type}
              </p>
            </div>
          </div>
          {slot.isOpen && (
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.62rem",
                fontWeight: 500,
                color: "#D4A574",
                background: "rgba(212,165,116,0.12)",
                borderRadius: "4px",
                padding: "3px 8px",
              }}
            >
              Auto-fill
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function ReminderViz() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* SMS preview */}
      <div
        style={{
          background: "rgba(78,203,160,0.06)",
          borderRadius: "12px 12px 12px 4px",
          padding: "12px 14px",
          maxWidth: "260px",
          border: "1px solid rgba(78,203,160,0.1)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-source), system-ui, sans-serif",
            fontSize: "0.75rem",
            color: "#F0EDE5",
            lineHeight: 1.5,
          }}
        >
          Hi Sarah, this is Clearview Medical. Your appointment with Dr. Patel is
          tomorrow at 2:30 PM. Reply Y to confirm or R to reschedule.
        </p>
      </div>
      {/* Patient response */}
      <div
        style={{
          background: "rgba(78,203,160,0.12)",
          borderRadius: "12px 12px 4px 12px",
          padding: "10px 14px",
          maxWidth: "60px",
          alignSelf: "flex-end",
          border: "1px solid rgba(78,203,160,0.2)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-source), system-ui, sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#4ECBA0",
            textAlign: "center",
          }}
        >
          Y
        </p>
      </div>
      {/* Confirmation */}
      <div className="flex items-center gap-2" style={{ marginTop: "2px" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M3.5 7l2.5 2.5L10.5 5"
            stroke="#4ECBA0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontFamily: "var(--font-source), system-ui, sans-serif",
            fontSize: "0.68rem",
            color: "#4ECBA0",
          }}
        >
          Appointment confirmed via SMS
        </span>
      </div>
    </div>
  );
}

function PortalViz() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* Mini phone frame */}
      <div
        style={{
          background: "#0F1A14",
          border: "1px solid rgba(78,203,160,0.12)",
          borderRadius: "16px",
          padding: "12px",
          maxWidth: "220px",
          margin: "0 auto",
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: "12px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#F0EDE5",
            }}
          >
            My Portal
          </span>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "rgba(78,203,160,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "0.55rem", color: "#4ECBA0" }}>S</span>
          </div>
        </div>
        {/* Quick actions */}
        {[
          { icon: "\uD83D\uDCC5", label: "Upcoming appointments", count: "2" },
          { icon: "\uD83D\uDCCB", label: "Intake forms", count: "1 pending" },
          { icon: "\uD83D\uDCAC", label: "Messages", count: "New" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between"
            style={{
              padding: "8px 10px",
              borderRadius: "6px",
              background: "rgba(255,255,255,0.02)",
              marginBottom: "4px",
            }}
          >
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "0.7rem" }}>{item.icon}</span>
              <span
                style={{
                  fontFamily:
                    "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.68rem",
                  color: "#F0EDE5",
                }}
              >
                {item.label}
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.55rem",
                color: i === 2 ? "#4ECBA0" : "#7A8F85",
              }}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsViz() {
  return (
    <div>
      {/* Mini chart bars */}
      <div
        className="flex items-end gap-2"
        style={{ height: "80px", marginBottom: "12px" }}
      >
        {[35, 28, 22, 18, 15, 12, 9].map((val, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${val * 2}px`,
              background:
                i < 3
                  ? `rgba(232,116,97,${0.3 + i * 0.1})`
                  : `rgba(78,203,160,${0.15 + (i - 3) * 0.12})`,
              borderRadius: "3px 3px 0 0",
              transition: "height 0.3s",
            }}
          />
        ))}
      </div>
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "8px" }}
      >
        <span
          style={{
            fontFamily: "var(--font-source), system-ui, sans-serif",
            fontSize: "0.62rem",
            color: "#7A8F85",
          }}
        >
          No-show rate (7 months)
        </span>
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "0.68rem",
            color: "#4ECBA0",
            fontWeight: 500,
          }}
        >
          &darr; 41%
        </span>
      </div>
      {/* Mini stat row */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Avg. confirmation rate", value: "94%" },
          { label: "Revenue recovered", value: "$48.2K" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: "6px",
              padding: "8px 10px",
              border: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#F0EDE5",
                marginBottom: "2px",
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontFamily:
                  "var(--font-source), system-ui, sans-serif",
                fontSize: "0.55rem",
                color: "#7A8F85",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Features Section ── */
export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PulseLine />
      <section
        id="features"
        ref={ref}
        style={{
          background: "#0F1A14",
          padding: "96px 0 80px",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: "56px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                color: "#7A8F85",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Features
            </span>
            <h2
              style={{
                fontFamily: "var(--font-libre), Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                lineHeight: 1.15,
                color: "#F0EDE5",
                letterSpacing: "-0.02em",
                maxWidth: "560px",
              }}
            >
              Everything your practice needs to keep patients{" "}
              <em className="not-italic" style={{ color: "#4ECBA0" }}>
                engaged
              </em>
            </h2>
          </motion.div>

          {/* Large card layout with zigzag alternating sides */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.12 * i,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`grid md:grid-cols-[1fr_1fr] gap-0 items-stretch`}
                style={{
                  background: "#162420",
                  border:
                    activeIndex === i
                      ? "1px solid rgba(78,203,160,0.15)"
                      : "1px solid rgba(78,203,160,0.06)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                {/* Copy */}
                <div
                  style={{
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    order: i % 2 === 1 ? 1 : 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      color: "#4ECBA0",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {feature.subtitle}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-libre), Georgia, serif",
                      fontSize: "1.375rem",
                      color: "#F0EDE5",
                      letterSpacing: "-0.02em",
                      marginBottom: "12px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily:
                        "var(--font-source), system-ui, sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "#7A8F85",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Visual */}
                <div
                  style={{
                    background: "rgba(15,26,20,0.5)",
                    padding: "24px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderLeft:
                      i % 2 === 0
                        ? "1px solid rgba(78,203,160,0.06)"
                        : "none",
                    borderRight:
                      i % 2 === 1
                        ? "1px solid rgba(78,203,160,0.06)"
                        : "none",
                    order: i % 2 === 1 ? 0 : 1,
                    minHeight: "200px",
                  }}
                >
                  <div style={{ width: "100%", maxWidth: "320px" }}>
                    {feature.visual}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
