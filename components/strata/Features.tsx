"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const features = [
  {
    title: "Close your books before noon",
    body: "Automated journal entries export directly to QuickBooks and NetSuite. Recognition schedules update in real time. The month-end close that used to take two weeks now takes a morning.",
    tag: "~4 hr avg close",
  },
  {
    title: "Board-ready ARR you trust",
    body: "Real-time ARR, MRR, and NRR broken down by cohort, segment, and contract type. When your board asks for the number, you read it — you don't calculate it.",
    tag: "Always current",
  },
  {
    title: "Every contract structure handled",
    body: "Multi-element arrangements, variable consideration, refund obligations, mid-term contract modifications. Strata handles the complexity that breaks spreadsheets and overwhelms your accountant.",
    tag: "ASC 606 + IFRS 15",
  },
  {
    title: "Audit-ready from day one",
    body: "Every recognition decision has a documented reason. Strata generates full audit trails for each contract — the kind that makes your next audit review a formality, not an emergency.",
    tag: "SOC 2 Type II",
  },
];

function FeatureCard({ feature, index, inView }: { feature: typeof features[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ y: 28 }}
      animate={inView ? { y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.09, ease: [0.25, 0.1, 0.25, 1] }}
      className="p-8 cursor-pointer"
      style={{
        borderRight: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        backgroundColor: hovered ? "rgba(184,147,90,0.04)" : "transparent",
        transition: "background-color 0.25s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3
        className="font-display text-cloud mb-3"
        style={{
          fontSize: "1.1875rem",
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
          color: hovered ? "#B8935A" : "#EDE8DC",
          transition: "color 0.25s",
        }}
      >
        {feature.title}
      </h3>
      <p className="font-body text-sm text-mist leading-relaxed mb-6">{feature.body}</p>
      <div
        className="inline-flex items-center text-[11px] font-mono text-mist px-2 py-1"
        style={{
          backgroundColor: hovered ? "rgba(184,147,90,0.1)" : "rgba(255,255,255,0.04)",
          border: `1px solid ${hovered ? "rgba(184,147,90,0.2)" : "rgba(255,255,255,0.07)"}`,
          borderRadius: "3px",
          color: hovered ? "#B8935A" : "#6B7A8F",
          transition: "background-color 0.25s, border-color 0.25s, color 0.25s",
        }}
      >
        {feature.tag}
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} className="py-[120px]" id="features" style={{ background: "#070C18" }}>
      <div className="max-w-layout mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ y: 24 }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-5 h-px" style={{ background: "#B8935A" }} />
              <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#B8935A" }}>
                What you get
              </span>
            </div>
            <h2
              className="font-display text-cloud mb-6 text-balance"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Built for finance teams who need more than a dashboard.
            </h2>
            <p className="font-body text-mist text-sm leading-relaxed">
              Strata isn&rsquo;t a reporting layer on top of your existing mess.
              It replaces the process that created the mess.
            </p>
          </motion.div>

          <div
            className="grid sm:grid-cols-2"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              borderLeft: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {features.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
