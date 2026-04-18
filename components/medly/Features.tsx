"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Smart scheduling",
    subtitle: "Fill gaps before they cost you",
    description:
      "AI-powered scheduling that predicts cancellations, suggests optimal appointment times based on patient history, and automatically fills open slots from your waitlist. No more empty chairs.",
    photo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=600&fit=crop&crop=face",
    photoAlt: "Doctor reviewing patient schedule on tablet",
  },
  {
    title: "Automated reminders",
    subtitle: "SMS, email, and voice \u2014 on their terms",
    description:
      "Multi-channel reminders that adapt to each patient\u2019s preferred communication method. Send at the right time, in the right channel, with the right message. Patients confirm with a single tap.",
    photo: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&h=600&fit=crop&crop=face",
    photoAlt: "Nurse checking phone notifications at clinic reception",
  },
  {
    title: "Patient portal",
    subtitle: "Self-service that patients actually use",
    description:
      "Patients can reschedule, complete intake forms, view visit summaries, and message their care team \u2014 all from their phone. No app download required. 89% adoption rate within 30 days.",
    photo: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=600&fit=crop&crop=face",
    photoAlt: "Patient using health app on smartphone",
  },
  {
    title: "Real-time analytics",
    subtitle: "Know what\u2019s working. Fix what\u2019s not.",
    description:
      "Track no-show rates, reminder effectiveness, patient engagement scores, and revenue impact \u2014 all in one dashboard. Drill down by provider, location, or patient segment.",
    photo: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=600&fit=crop&crop=face",
    photoAlt: "Healthcare administrator reviewing analytics dashboard",
  },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      id="features"
      ref={ref}
      style={{
        background: "#FFFFFF",
        padding: "140px 0 120px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ marginBottom: "80px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "#7F8C8D",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              display: "block",
              marginBottom: "20px",
            }}
          >
            Features
          </span>
          <h2
            style={{
              fontFamily: "var(--font-libre), Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              lineHeight: 1.15,
              color: "#2D3436",
              letterSpacing: "-0.02em",
              maxWidth: "560px",
            }}
          >
            Everything your practice needs to keep patients{" "}
            <em className="not-italic" style={{ color: "#3D9B7F" }}>
              engaged
            </em>
          </h2>
        </motion.div>

        {/* Zigzag feature rows */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "80px",
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={
                inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }
              }
              transition={{
                duration: 0.9,
                delay: 0.15 * i,
                ease: "easeOut",
              }}
              className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Circular illustration frame */}
              <div
                className={`flex justify-center ${
                  i % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div
                  style={{
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    background: i % 2 === 0 ? "#EFF8F4" : "#FFF5EE",
                    padding: "12px",
                    position: "relative",
                    boxShadow: "0 8px 40px rgba(45,52,54,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={feature.photo}
                      alt={feature.photoAlt}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      inset: "4px",
                      borderRadius: "50%",
                      border: "1px dashed rgba(61,155,127,0.15)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/* Copy side */}
              <div
                className={
                  i % 2 === 1 ? "md:order-1" : "md:order-2"
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#E8A87C",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  {feature.subtitle}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-libre), Georgia, serif",
                    fontSize: "1.5rem",
                    color: "#2D3436",
                    letterSpacing: "-0.02em",
                    marginBottom: "16px",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "1rem",
                    lineHeight: 1.7,
                    color: "#7F8C8D",
                    maxWidth: "440px",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
