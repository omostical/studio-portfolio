"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const features = [
  {
    id: "close",
    label: "Month-end close",
    number: "01",
    title: "Close your books before noon",
    body: "Automated journal entries export directly to QuickBooks and NetSuite. Recognition schedules update in real time. The close that used to take two weeks now takes a morning.",
    tag: "~4 hr avg close",
  },
  {
    id: "arr",
    label: "ARR visibility",
    number: "02",
    title: "Board-ready ARR you can trust",
    body: "Real-time ARR, MRR, and NRR broken down by cohort, segment, and contract type. When your board asks for the number, you read it — you don't calculate it.",
    tag: "Always current",
  },
  {
    id: "contracts",
    label: "Contract complexity",
    number: "03",
    title: "Every contract structure handled",
    body: "Multi-element arrangements, variable consideration, refund obligations, mid-term modifications. Strata handles the complexity that breaks spreadsheets and overwhelms your accountant.",
    tag: "ASC 606 + IFRS 15",
  },
  {
    id: "audit",
    label: "Audit readiness",
    number: "04",
    title: "Audit-ready from day one",
    body: "Every recognition decision has a documented reason. Strata generates full audit trails per contract — the kind that makes your next review a formality, not an emergency.",
    tag: "SOC 2 Type II",
  },
];

function CloseVisual() {
  return (
    <div className="space-y-4">
      {/* Before */}
      <div className="p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px" }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] text-mist uppercase tracking-widest font-body">Before — spreadsheet</span>
          <span className="text-[10px] font-mono" style={{ color: "#f87171" }}>14 days</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full" style={{ width: "92%", background: "linear-gradient(to right, rgba(248,113,113,0.5), rgba(248,113,113,0.8))" }} />
          </div>
          <span className="text-[10px] text-mist font-body">close cycle</span>
        </div>
      </div>
      {/* After */}
      <div className="p-4" style={{ background: "rgba(40,150,110,0.05)", border: "1px solid rgba(40,150,110,0.18)", borderRadius: "6px" }}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-widest font-body" style={{ color: "#28966E" }}>After — Strata</span>
          <span className="text-[10px] font-mono" style={{ color: "#28966E" }}>~4 hours</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <div className="h-full rounded-full" style={{ width: "7%", background: "#28966E" }} />
          </div>
          <span className="text-[10px] text-mist font-body">close cycle</span>
        </div>
      </div>
      {/* Journal entry preview */}
      <div className="p-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px" }}>
        <div className="text-[10px] text-mist uppercase tracking-widest mb-3 font-body">Auto-generated journal entry</div>
        {[
          { account: "Deferred Revenue", side: "DR", amount: "$164,000" },
          { account: "Revenue", side: "CR", amount: "$164,000" },
        ].map((row) => (
          <div key={row.account} className="flex items-center justify-between py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="flex items-center gap-2.5">
              <span className="text-[9px] font-mono w-6" style={{ color: "rgba(184,147,90,0.6)" }}>{row.side}</span>
              <span className="text-[11px] text-cloud font-body">{row.account}</span>
            </div>
            <span className="text-[11px] font-mono text-cloud tabular-nums">{row.amount}</span>
          </div>
        ))}
        <div className="flex items-center gap-1.5 mt-3">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 5l2.5 2.5 4.5-4" stroke="#28966E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[10px] font-body" style={{ color: "#28966E" }}>Posted to QuickBooks</span>
        </div>
      </div>
    </div>
  );
}

function ArrVisual() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "ARR", value: "$4.82M", delta: "+18% YoY", up: true },
          { label: "NRR", value: "114%", delta: "+3pts QoQ", up: true },
          { label: "MRR", value: "$401K", delta: "+12% MoM", up: true },
          { label: "Deferred", value: "$1.24M", delta: "14 contracts", up: null },
        ].map((kpi) => (
          <div key={kpi.label} className="p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "6px" }}>
            <div className="text-[10px] uppercase tracking-widest text-mist mb-1.5 font-body">{kpi.label}</div>
            <div className="text-lg font-semibold text-cloud tabular-nums font-body" style={{ letterSpacing: "-0.02em" }}>{kpi.value}</div>
            <div className="text-[10px] mt-1 font-body" style={{ color: kpi.up ? "#28966E" : "#6B7A8F" }}>{kpi.delta}</div>
          </div>
        ))}
      </div>
      <div className="p-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "6px" }}>
        <div className="text-[10px] text-mist uppercase tracking-widest mb-3 font-body">ARR trend — last 6 months</div>
        <div className="flex items-end gap-2" style={{ height: "44px" }}>
          {[62, 68, 76, 84, 94, 100].map((val, i) => (
            <div
              key={i}
              className="flex-1"
              style={{
                height: `${val}%`,
                background: i === 5 ? "#B8935A" : `rgba(184,147,90,${0.18 + i * 0.07})`,
                borderRadius: "2px 2px 0 0",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContractsVisual() {
  const types = [
    { label: "Annual + usage", method: "Ratable + variable", tcv: "$100,800", color: "#B8935A" },
    { label: "Monthly tiered", method: "Monthly as-invoiced", tcv: "—", color: "#8A6D42" },
    { label: "2-yr prepaid", method: "Ratable straight-line", tcv: "$302,400", color: "#CBA96A" },
    { label: "Usage-only", method: "As invoiced", tcv: "—", color: "#6B5235" },
  ];
  return (
    <div className="space-y-2">
      <div className="text-[10px] text-mist uppercase tracking-widest mb-3 font-body">Contract types — recognized automatically</div>
      {types.map((t) => (
        <div
          key={t.label}
          className="flex items-center justify-between p-3.5"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "5px" }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: t.color }} />
            <div>
              <div className="text-[11px] text-cloud font-body">{t.label}</div>
              <div className="text-[10px] text-mist font-body mt-0.5">{t.method}</div>
            </div>
          </div>
          <div className="text-[11px] font-mono text-cloud tabular-nums">{t.tcv}</div>
        </div>
      ))}
      <div className="flex items-center gap-1.5 pt-1">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M1.5 5l2.5 2.5 4.5-4" stroke="#28966E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[10px] font-body" style={{ color: "#28966E" }}>All mapped to ASC 606 or IFRS 15</span>
      </div>
    </div>
  );
}

function AuditVisual() {
  const trail = [
    { date: "Jun 30, 2025", action: "Revenue recognized", note: "Ratable — 1/24 months", by: "System" },
    { date: "Jun 28, 2025", action: "Contract modified", note: "Seat expansion +3", by: "System" },
    { date: "Jun 1, 2025", action: "Period opened", note: "Jun 2025 schedule locked", by: "A. Chen" },
    { date: "May 31, 2025", action: "Period closed", note: "May entries posted", by: "System" },
  ];
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] text-mist uppercase tracking-widest font-body">Audit trail — Cirrus Health</div>
        <div className="text-[10px] font-mono px-2 py-0.5" style={{ background: "rgba(40,150,110,0.12)", color: "#28966E", borderRadius: "3px" }}>
          SOC 2 ready
        </div>
      </div>
      <div className="relative pl-4" style={{ borderLeft: "1px solid rgba(184,147,90,0.2)" }}>
        {trail.map((entry, i) => (
          <div key={i} className="relative pb-5 last:pb-0">
            {/* Timeline dot */}
            <div
              className="absolute -left-[17px] top-0.5 w-2 h-2 rounded-full"
              style={{ background: i === 0 ? "#B8935A" : "rgba(184,147,90,0.35)", border: `1px solid ${i === 0 ? "#B8935A" : "rgba(184,147,90,0.2)"}` }}
            />
            <div className="text-[10px] text-mist font-body mb-0.5">{entry.date}</div>
            <div className="text-[11px] text-cloud font-body">{entry.action}</div>
            <div className="text-[10px] text-mist font-body">{entry.note} · <span style={{ color: "rgba(184,147,90,0.7)" }}>{entry.by}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  close: <CloseVisual />,
  arr: <ArrVisual />,
  contracts: <ContractsVisual />,
  audit: <AuditVisual />,
};

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="py-[120px]" id="features" style={{ background: "#070C18" }}>
      <div className="max-w-layout mx-auto px-6 md:px-10">

        <div className="grid lg:grid-cols-[360px_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: sticky heading + tab list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
              className="font-display text-cloud mb-4 text-balance"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              Built for finance teams who need more than a dashboard.
            </h2>
            <p className="font-body text-mist text-sm leading-relaxed mb-10">
              Strata isn&rsquo;t a reporting layer on top of your existing mess.
              It replaces the process that created the mess.
            </p>

            {/* Tab list */}
            <div className="space-y-px">
              {features.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActive(i)}
                  className="w-full text-left flex items-center gap-4 px-4 py-3.5 cursor-pointer transition-all duration-200"
                  style={{
                    background: active === i ? "rgba(184,147,90,0.07)" : "transparent",
                    borderLeft: `2px solid ${active === i ? "#B8935A" : "transparent"}`,
                    borderRadius: "0 6px 6px 0",
                    outline: "none",
                  }}
                >
                  <span
                    className="font-mono text-xs flex-shrink-0 tabular-nums"
                    style={{ color: active === i ? "#B8935A" : "rgba(184,147,90,0.35)" }}
                  >
                    {f.number}
                  </span>
                  <span
                    className="font-body text-sm transition-colors duration-200"
                    style={{ color: active === i ? "#EDE8DC" : "#6B7A8F" }}
                  >
                    {f.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: content panel */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                className="p-8 lg:p-10"
                style={{
                  background: "#0C1220",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "12px",
                }}
              >
                <div className="font-mono text-xs mb-4 tracking-widest" style={{ color: "#B8935A" }}>
                  {features[active].number} — {features[active].label}
                </div>

                <h3
                  className="font-display text-cloud mb-4 text-balance"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.875rem)", lineHeight: 1.2, letterSpacing: "-0.025em" }}
                >
                  {features[active].title}
                </h3>

                <p className="font-body text-mist text-sm leading-relaxed mb-8 max-w-lg">
                  {features[active].body}
                </p>

                {/* Visual */}
                <div
                  className="p-5 mb-8"
                  style={{
                    background: "rgba(255,255,255,0.015)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "8px",
                  }}
                >
                  {visuals[features[active].id]}
                </div>

                <div
                  className="inline-flex items-center text-[11px] font-mono text-mist px-2.5 py-1"
                  style={{
                    backgroundColor: "rgba(184,147,90,0.1)",
                    border: "1px solid rgba(184,147,90,0.2)",
                    borderRadius: "3px",
                    color: "#B8935A",
                  }}
                >
                  {features[active].tag}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom step navigation */}
            <div className="flex items-center justify-between mt-6 px-1">
              <button
                onClick={() => setActive((v) => Math.max(0, v - 1))}
                disabled={active === 0}
                className="flex items-center gap-2 text-xs font-body text-mist cursor-pointer disabled:opacity-30 transition-opacity"
                style={{ background: "none", border: "none", outline: "none" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
              </button>
              <div className="flex items-center gap-1.5">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="cursor-pointer transition-all duration-200"
                    style={{
                      width: active === i ? "20px" : "6px",
                      height: "6px",
                      background: active === i ? "#B8935A" : "rgba(255,255,255,0.15)",
                      borderRadius: "3px",
                      border: "none",
                      outline: "none",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() => setActive((v) => Math.min(features.length - 1, v + 1))}
                disabled={active === features.length - 1}
                className="flex items-center gap-2 text-xs font-body text-mist cursor-pointer disabled:opacity-30 transition-opacity"
                style={{ background: "none", border: "none", outline: "none" }}
              >
                Next
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
