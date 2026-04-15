"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const pains = [
  {
    number: "01",
    heading: "The spreadsheet breaks every quarter",
    body: "You added usage-based tiers in Q2. Multi-year contracts in Q3. Each change spawned a new tab, a new formula, a new reconciliation. Your accountants now spend a week per close doing work that should take hours.",
  },
  {
    number: "02",
    heading: "Your board asks for ARR. You estimate.",
    body: "When the question is 'what's our real ARR right now?', the honest answer is 'let me get back to you.' Deferred revenue, credits, mid-term expansions, and churned seats live in different systems. Nobody has a clean number.",
  },
  {
    number: "03",
    heading: "Your pricing evolved. Your accounting didn't.",
    body: "ASC 606 was written for simpler deals. It doesn't natively handle hybrid pricing, retroactive contract modifications, or variable consideration at scale. Applying it manually to modern SaaS is a compliance risk, not just an inconvenience.",
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="relative py-[120px]" id="problem">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(184,147,90,0.025), transparent)" }}
      />

      <div className="max-w-layout mx-auto px-6 md:px-10">
        {/* Section label */}
        <motion.div
          initial={{ y: 20 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-12"
        >
          <span className="w-5 h-px" style={{ background: "#B8935A" }} />
          <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#B8935A" }}>
            The problem
          </span>
        </motion.div>

        {/* Human narrative pull quote */}
        <motion.div
          initial={{ y: 28 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 mb-20 items-start"
        >
          <div>
            <blockquote
              className="font-display text-cloud mb-8 text-balance"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", lineHeight: 1.25, letterSpacing: "-0.02em" }}
            >
              &ldquo;It&rsquo;s 10:47pm on the last Tuesday of the quarter. Your CFO just
              Slacked you the question you&rsquo;ve been dreading: &lsquo;Can you send me the
              actual ARR breakdown before the board meeting tomorrow?&rsquo; You open your
              spreadsheet.{" "}
              <em className="not-italic" style={{ color: "#B8935A" }}>Tab 14 of 22.</em>
              &rdquo;
            </blockquote>

            <p className="font-body text-mist leading-relaxed max-w-xl" style={{ fontSize: "1.0625rem" }}>
              This is the reality for most finance teams at fast-growing SaaS companies.
              Not because they&rsquo;re bad at their jobs — because the tools were never
              built for how modern SaaS companies actually sell.
            </p>
          </div>

          {/* Portrait card with quote attribution */}
          <motion.div
            initial={{ x: 20 }}
            animate={inView ? { x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
            style={{
              background: "#0C1220",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {/* Photo strip */}
            <div
              className="relative w-full"
              style={{ height: "200px", background: "#111827" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop"
                alt="Finance professional at work"
                fill
                className="object-cover"
                style={{ opacity: 0.7 }}
                unoptimized
              />
              {/* Warm overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, rgba(6,10,20,0), rgba(12,18,32,0.9))" }}
              />
            </div>

            {/* Quote */}
            <div className="p-5">
              <p className="font-body text-[13px] text-cloud leading-relaxed mb-4">
                &ldquo;I spent four years in finance ops. Every single month-end close
                felt like defusing a bomb. Strata is what I wished existed back then.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image src="https://i.pravatar.cc/40?img=47" alt="Co-founder" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <p className="text-xs font-medium font-body text-cloud">Amara Chen</p>
                  <p className="text-[10px] font-body text-mist">Co-founder, Strata · ex-Stripe Finance Ops</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pain points */}
        <div
          className="grid md:grid-cols-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {pains.map((pain, i) => (
            <motion.div
              key={pain.number}
              initial={{ y: 32 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.15 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-8 lg:p-10"
              style={{
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="font-mono text-xs mb-5 tracking-widest" style={{ color: "#B8935A" }}>
                {pain.number}
              </div>
              <h3
                className="font-display text-cloud mb-3"
                style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", lineHeight: 1.3, letterSpacing: "-0.02em" }}
              >
                {pain.heading}
              </h3>
              <p className="font-body text-sm text-mist leading-relaxed">{pain.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
