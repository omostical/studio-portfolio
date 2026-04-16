"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

const line = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ── Mini Scheduling UI (right side of hero) ── */
const appointments = [
  {
    time: "9:00 AM",
    patient: "Maria G.",
    type: "Follow-up",
    status: "confirmed",
  },
  {
    time: "9:30 AM",
    patient: "James T.",
    type: "Annual Physical",
    status: "confirmed",
  },
  {
    time: "10:15 AM",
    patient: "Sarah K.",
    type: "Lab Review",
    status: "pending",
  },
  {
    time: "11:00 AM",
    patient: "David R.",
    type: "Consultation",
    status: "confirmed",
  },
  {
    time: "11:45 AM",
    patient: "Lisa M.",
    type: "Urgent Care",
    status: "reminder-sent",
  },
  {
    time: "1:00 PM",
    patient: "Robert P.",
    type: "Follow-up",
    status: "confirmed",
  },
];

function ScheduleUI() {
  return (
    <div
      style={{
        background: "#162420",
        border: "1px solid rgba(78,203,160,0.12)",
        borderRadius: "14px",
        padding: "20px",
        boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
        width: "100%",
        maxWidth: "400px",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "16px" }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              color: "#7A8F85",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "2px",
            }}
          >
            Today&apos;s Schedule
          </p>
          <p
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#F0EDE5",
            }}
          >
            Tuesday, Mar 18
          </p>
        </div>
        <div
          style={{
            background: "rgba(78,203,160,0.12)",
            borderRadius: "8px",
            padding: "6px 10px",
          }}
        >
          <span
            style={{
              fontFamily:
                "var(--font-jetbrains), monospace",
              fontSize: "0.7rem",
              color: "#4ECBA0",
              fontWeight: 500,
            }}
          >
            12 / 14 slots filled
          </span>
        </div>
      </div>

      {/* Appointment rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {appointments.map((apt, i) => (
          <div
            key={i}
            className="flex items-center justify-between"
            style={{
              background:
                apt.status === "confirmed"
                  ? "rgba(78,203,160,0.04)"
                  : "rgba(255,255,255,0.02)",
              borderRadius: "8px",
              padding: "10px 12px",
              border:
                apt.status === "confirmed"
                  ? "1px solid rgba(78,203,160,0.08)"
                  : "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                style={{
                  fontFamily:
                    "var(--font-jetbrains), monospace",
                  fontSize: "0.7rem",
                  color: "#7A8F85",
                  width: "56px",
                  flexShrink: 0,
                }}
              >
                {apt.time}
              </span>
              <div>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F0EDE5",
                    lineHeight: 1.3,
                  }}
                >
                  {apt.patient}
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.68rem",
                    color: "#7A8F85",
                    lineHeight: 1.3,
                  }}
                >
                  {apt.type}
                </p>
              </div>
            </div>
            <StatusBadge status={apt.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; color: string; label: string }> = {
    confirmed: {
      bg: "rgba(78,203,160,0.12)",
      color: "#4ECBA0",
      label: "Confirmed",
    },
    pending: {
      bg: "rgba(212,165,116,0.12)",
      color: "#D4A574",
      label: "Pending",
    },
    "reminder-sent": {
      bg: "rgba(78,203,160,0.08)",
      color: "#7A8F85",
      label: "Reminded",
    },
  };
  const c = config[status] || config.pending;
  return (
    <span
      style={{
        fontFamily: "var(--font-source), system-ui, sans-serif",
        fontSize: "0.65rem",
        fontWeight: 500,
        color: c.color,
        background: c.bg,
        borderRadius: "4px",
        padding: "3px 8px",
        whiteSpace: "nowrap",
      }}
    >
      {c.label}
    </span>
  );
}

/* ── Pulse Line Divider ── */
export function PulseLine() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ height: "40px", position: "relative" }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="40"
        viewBox="0 0 1280 40"
        preserveAspectRatio="none"
        fill="none"
        style={{ position: "absolute", inset: 0 }}
      >
        <motion.path
          d="M0 20 H440 L460 20 L475 8 L490 32 L505 4 L520 36 L535 12 L550 28 L565 20 H1280"
          stroke="#4ECBA0"
          strokeWidth="1"
          strokeOpacity="0.15"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true, margin: "-8%" }}
        />
        {/* Bright pulse dot traveling along the line */}
        <motion.circle
          r="3"
          fill="#4ECBA0"
          fillOpacity="0.6"
          initial={{ offsetDistance: "0%" }}
          whileInView={{ offsetDistance: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          viewport={{ once: true }}
          style={{
            offsetPath: `path("M0 20 H440 L460 20 L475 8 L490 32 L505 4 L520 36 L535 12 L550 28 L565 20 H1280")`,
          }}
        />
      </svg>
    </div>
  );
}

/* ── Hero Section ── */
export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "#0F1A14" }}
    >
      {/* Ambient glow — green/teal */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-5%",
          width: "900px",
          height: "750px",
          background:
            "radial-gradient(ellipse at center, rgba(78,203,160,0.07) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "-8%",
          width: "500px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(212,165,116,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-8 items-center py-24 lg:py-32">
        {/* Left: Copy */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ maxWidth: "560px" }}
        >
          <motion.div
            variants={fade}
            className="flex items-center gap-2"
            style={{ marginBottom: "2rem" }}
          >
            <span
              className="inline-flex"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#4ECBA0",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#7A8F85",
              }}
            >
              Patient engagement platform
            </span>
          </motion.div>

          <motion.h1
            variants={stagger}
            style={{
              fontFamily: "var(--font-libre), Georgia, serif",
              color: "#F0EDE5",
              fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
            }}
          >
            <motion.span className="block" variants={line}>
              Your patients want
            </motion.span>
            <motion.span className="block" variants={line}>
              to show up.{" "}
              <em className="not-italic" style={{ color: "#4ECBA0" }}>
                Make it easy.
              </em>
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fade}
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              color: "#7A8F85",
              marginBottom: "2.5rem",
              maxWidth: "460px",
            }}
          >
            Medly is a patient engagement platform that reduces no-shows by
            40%&nbsp;&mdash; through smart scheduling, automated reminders, and
            real-time communication that patients actually respond to.
          </motion.p>

          <motion.div
            variants={fade}
            className="flex items-center gap-4 flex-wrap"
            style={{ marginBottom: "2.5rem" }}
          >
            <a
              href="#cta"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#0F1A14",
                background: "#4ECBA0",
                borderRadius: "6px",
                padding: "12px 24px",
                textDecoration: "none",
                transition:
                  "background 0.15s, transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#6AD8B5";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(78,203,160,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#4ECBA0";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              See it in action
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 4l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.875rem",
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
              Talk to our team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7 3l4 4-4 4M3 7h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* Trust signal */}
          <motion.div
            variants={fade}
            className="flex items-center gap-3"
          >
            <div className="flex items-center">
              {/* Stacked clinic icons */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "8px",
                    background: `hsl(${155 + i * 15}, 35%, ${18 + i * 3}%)`,
                    border: "2px solid #0F1A14",
                    marginLeft: i === 0 ? 0 : "-8px",
                    zIndex: 4 - i,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M6 2v8M2 6h8"
                      stroke="#4ECBA0"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeOpacity="0.5"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div>
              <p
                style={{
                  fontFamily:
                    "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#F0EDE5",
                }}
              >
                200+ clinics, 2.3M patients engaged
              </p>
              <p
                style={{
                  fontFamily:
                    "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.65rem",
                  color: "#7A8F85",
                }}
              >
                across primary care, urgent care &amp; specialty
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Schedule UI */}
        <motion.div
          initial={{ opacity: 0, x: 28, y: 6 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative hidden lg:flex justify-end"
        >
          {/* Glow behind card */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              filter: "blur(48px)",
              background:
                "radial-gradient(ellipse at center, rgba(78,203,160,0.12), transparent 65%)",
            }}
          />

          {/* Floating notification card */}
          <motion.div
            initial={{ opacity: 0, y: 12, x: -12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute -top-4 -left-4 z-10"
            style={{
              background: "#162420",
              border: "1px solid rgba(78,203,160,0.15)",
              borderRadius: "10px",
              padding: "10px 14px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
              maxWidth: "200px",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: "rgba(78,203,160,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 7l2.5 2.5L10.5 5"
                    stroke="#4ECBA0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "#F0EDE5",
                  }}
                >
                  Maria confirmed
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.6rem",
                    color: "#7A8F85",
                  }}
                >
                  via SMS · 2 min ago
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating metric */}
          <motion.div
            initial={{ opacity: 0, y: 12, x: 12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute -bottom-4 -right-2 z-10"
            style={{
              background: "#162420",
              border: "1px solid rgba(78,203,160,0.2)",
              borderRadius: "10px",
              padding: "10px 14px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: "rgba(78,203,160,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 10l3.5-3.5L8 9l4-5"
                    stroke="#4ECBA0"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily:
                      "var(--font-jetbrains), monospace",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "#F0EDE5",
                  }}
                >
                  No-shows &darr; 41%
                </p>
                <p
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.58rem",
                    color: "#7A8F85",
                  }}
                >
                  this month vs. last
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ScheduleUI />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "var(--font-source), system-ui, sans-serif",
            fontSize: "0.625rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#7A8F85",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10M4 9l4 4 4-4"
              stroke="#7A8F85"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
