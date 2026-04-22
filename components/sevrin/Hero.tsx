"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "140px 32px 80px",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-12"
        style={{
          gap: 48,
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          alignItems: "end",
        }}
      >
        {/* Text column */}
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-body"
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8A7F6F",
              marginBottom: 36,
            }}
          >
            Collection IX — Autumn / Winter 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.15 }}
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3.2rem, 6.8vw, 6rem)",
              lineHeight: 0.94,
              letterSpacing: "-0.02em",
              color: "#1A1612",
              fontWeight: 400,
            }}
          >
            A quieter way
            <br />
            <em style={{ fontStyle: "italic", color: "#7A3B28" }}>
              to be dressed.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="font-body"
            style={{
              marginTop: 40,
              fontSize: 15,
              lineHeight: 1.7,
              color: "#3D352D",
              maxWidth: 440,
            }}
          >
            Overcoats, knitwear, and leather goods. Cut in Florence, in limited runs, by a bench of three artisans — the same three, each season.
          </motion.p>

          <motion.a
            href="#collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="font-body group"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginTop: 48,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1A1612",
              paddingBottom: 10,
              borderBottom: "1px solid #1A1612",
              textDecoration: "none",
            }}
          >
            Explore the edit
            <span
              style={{
                transition: "transform 0.3s ease",
                display: "inline-block",
              }}
              className="group-hover:translate-x-1"
            >
              →
            </span>
          </motion.a>
        </div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
          style={{
            aspectRatio: "5/6",
            position: "relative",
            overflow: "hidden",
            background: "#2E251C",
          }}
        >
          <Image
            src="/sevrin/hero.jpg"
            alt="Couples in matching beige knitwear, library setting — editorial"
            fill
            priority
            quality={95}
            sizes="(max-width: 768px) 100vw, 58vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          {/* Warm tonal wash for editorial feel */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(26,22,18,0) 55%, rgba(26,22,18,0.55) 100%)",
            }}
          />

          <div
            className="font-body"
            style={{
              position: "absolute",
              top: 28,
              left: 28,
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.85)",
              mixBlendMode: "difference",
            }}
          >
            Look 01 / The Cambrai Overcoat
          </div>
          <div
            className="font-body"
            style={{
              position: "absolute",
              bottom: 28,
              left: 28,
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.75)",
            }}
          >
            Camel wool · hand-cut
          </div>
          <div
            className="font-body"
            style={{
              position: "absolute",
              bottom: 28,
              right: 28,
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(245,241,232,0.75)",
            }}
          >
            F / W · 2026
          </div>
        </motion.div>
      </div>
    </section>
  );
}
