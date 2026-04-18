"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    brand: "Meridian",
    quote:
      "Reduced support costs by 40% while improving CSAT by 12 points. Aura paid for itself in the first quarter.",
    metric: "40%",
    metricLabel: "cost reduction",
    author: "James Thornton",
    title: "VP of Customer Experience",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    brand: "Everly",
    quote:
      "AI agents now handle 73% of conversations without escalation. Our team focuses on the cases that truly need a human touch.",
    metric: "73%",
    metricLabel: "automated resolution",
    author: "Sarah Chen",
    title: "Head of Support Operations",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    brand: "Northvane",
    quote:
      "Response time dropped from 4 hours to under 30 seconds. Our customers notice the difference immediately.",
    metric: "<30s",
    metricLabel: "avg. response time",
    author: "Michael Osei",
    title: "Director of Customer Success",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face",
  },
  {
    brand: "Caspian",
    quote:
      "Customer satisfaction increased from 82% to 94% in 6 months. The AI understands context in a way we didn't think was possible.",
    metric: "94%",
    metricLabel: "CSAT score",
    author: "Elena Vasquez",
    title: "Chief Customer Officer",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
  },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      style={{
        background: "#FFFFFF",
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
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.15,
              fontWeight: 500,
              color: "#1A1A1A",
              letterSpacing: "-0.025em",
            }}
          >
            The results speak for themselves
          </h2>
        </motion.div>

        {/* Testimonial Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "20px",
          }}
          className="md:!grid-cols-2 lg:!grid-cols-4"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.brand}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.1 + i * 0.1,
              }}
              style={{
                background: "#FFFFFF",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Brand */}
              <span
                className="font-body"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#CCCCCC",
                  letterSpacing: "-0.01em",
                  marginBottom: "20px",
                }}
              >
                {t.brand}
              </span>

              {/* Metric */}
              <div style={{ marginBottom: "16px" }}>
                <span
                  className="font-display"
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 500,
                    color: "#1A1A1A",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {t.metric}
                </span>
                <span
                  className="font-body"
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "#2D7A4F",
                    fontWeight: 500,
                    marginTop: "4px",
                  }}
                >
                  {t.metricLabel}
                </span>
              </div>

              {/* Quote */}
              <p
                className="font-body"
                style={{
                  fontSize: "0.875rem",
                  color: "#6B6B6B",
                  lineHeight: 1.65,
                  flex: 1,
                  marginBottom: "24px",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={36}
                    height={36}
                    unoptimized
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <span
                    className="font-body"
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#1A1A1A",
                    }}
                  >
                    {t.author}
                  </span>
                  <span
                    className="font-body"
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "#999999",
                    }}
                  >
                    {t.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:!grid-cols-2 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .lg\\:!grid-cols-4 {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
