"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// ─── Studio header ────────────────────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity 0.4s ease, transform 0.4s ease, background 0.3s ease, border-color 0.3s ease",
        background: scrolled ? "rgba(6,10,20,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-layout mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <span className="font-display text-cloud text-sm tracking-tight" style={{ letterSpacing: "-0.01em" }}>
          Selected Work
        </span>
        <a
          href="mailto:omostical@gmail.com"
          className="text-xs font-body text-mist"
          style={{ transition: "color 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DC")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7A8F")}
        >
          Get in touch →
        </a>
      </div>
    </header>
  );
}

// ─── Strata dashboard preview (CSS-only mockup) ───────────────────────────────

function StrataDashboardPreview() {
  return (
    <div
      className="w-full font-body overflow-hidden"
      style={{
        background: "#0C1220",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "6px",
        boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
      }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-3">
          <span className="font-display text-xs font-semibold text-cloud">Strata</span>
          <div style={{ width: "1px", height: "12px", background: "rgba(255,255,255,0.1)" }} />
          {["Overview", "Contracts", "Schedule", "Journal"].map((t, i) => (
            <span
              key={t}
              className="text-[10px] px-2 py-1"
              style={{
                color: i === 0 ? "#EDE8DC" : "#6B7A8F",
                background: i === 0 ? "rgba(255,255,255,0.07)" : "transparent",
                borderRadius: "3px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-mist px-2 py-1 rounded" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>FY 2025</span>
          <div className="w-5 h-5 flex items-center justify-center text-[9px] font-bold text-void rounded" style={{ background: "#B8935A" }}>S</div>
        </div>
      </div>

      {/* KPI strip */}
      <div className="grid grid-cols-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {[
          { label: "ARR", value: "$4.82M", delta: "+18% YoY", up: true },
          { label: "MRR", value: "$401K", delta: "+12% MoM", up: true },
          { label: "Recognized (MTD)", value: "$164K", delta: "Jun 2025", up: null },
          { label: "Deferred Revenue", value: "$1.24M", delta: "14 contracts", up: null },
        ].map((k, i) => (
          <div key={k.label} className="px-4 py-3" style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
            <div className="text-[9px] text-mist uppercase tracking-widest mb-1">{k.label}</div>
            <div className="text-sm font-semibold text-cloud tabular-nums">{k.value}</div>
            <div className="text-[9px] mt-0.5" style={{ color: k.up === true ? "#28966E" : "#6B7A8F" }}>{k.delta}</div>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="p-4 grid grid-cols-[1.5fr_1fr] gap-3">
        <div className="p-4 rounded" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] text-cloud font-medium">Revenue recognition schedule</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[9px] text-mist"><div className="w-2 h-2 rounded-sm" style={{ background: "#B8935A" }} />Recognized</div>
              <div className="flex items-center gap-1 text-[9px] text-mist"><div className="w-2 h-2 rounded-sm" style={{ background: "rgba(184,147,90,0.2)" }} />Deferred</div>
            </div>
          </div>
          <div className="flex items-end gap-1" style={{ height: "72px" }}>
            {[98,105,112,108,119,124,131,138,142,151,158,164].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-0.5" style={{ height: "64px" }}>
                <div className="w-full rounded-t-sm" style={{ height: `${([82,78,74,71,67,63,60,56,51,47,43,38][i] / 210) * 60}%`, background: "rgba(184,147,90,0.2)" }} />
                <div className="w-full rounded-t-sm" style={{ height: `${(v / 210) * 100}%`, background: i === 11 ? "#B8935A" : `rgba(184,147,90,${0.3 + (i / 12) * 0.5})` }} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-1.5">
            {["Jul","","","Oct","","","Jan","","","Apr","","Jun"].map((m, i) => (
              <div key={i} className="flex-1 text-[8px] text-center" style={{ color: m ? "#6B7A8F" : "transparent" }}>{m}</div>
            ))}
          </div>
        </div>
        <div className="p-4 rounded" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-[10px] text-cloud font-medium mb-3">Deferred revenue movement</div>
          <div className="space-y-2">
            {[
              { label: "Opening balance", value: "$1,408K", color: "#6B7A8F" },
              { label: "New bookings", value: "+$186K", color: "#28966E" },
              { label: "Recognized (Jun)", value: "–$164K", color: "#f87171" },
              { label: "Closing balance", value: "$1,238K", color: "#EDE8DC" },
            ].map((r) => (
              <div key={r.label} className="flex justify-between items-center">
                <span className="text-[10px] text-mist">{r.label}</span>
                <span className="text-[10px] tabular-nums font-medium" style={{ color: r.color }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table preview */}
      <div className="px-4 pb-4">
        <div className="rounded overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="px-4 py-2 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <span className="text-[10px] text-cloud font-medium">Active contracts</span>
            <span className="text-[9px] text-mist">5 contracts</span>
          </div>
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                {["Company", "Type", "Monthly rec.", "Method", "Status"].map(h => (
                  <th key={h} className="text-left px-4 py-2 text-[9px] text-mist uppercase tracking-widest font-normal">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { co: "Acme Corp", type: "Annual + usage", rec: "$8,400", method: "Ratable + variable", status: "Active", statusColor: "#6B7A8F" },
                { co: "Cirrus Health", type: "2-yr prepaid", rec: "$12,600", method: "Ratable", status: "Active", statusColor: "#6B7A8F" },
                { co: "Delphi Labs", type: "Annual + seats", rec: "$4,800", method: "Ratable", status: "Expanding", statusColor: "#28966E" },
              ].map((r, i) => (
                <tr key={r.co} style={{ borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                  <td className="px-4 py-2 text-[10px] text-cloud">{r.co}</td>
                  <td className="px-4 py-2 text-[10px] text-mist">{r.type}</td>
                  <td className="px-4 py-2 text-[10px] text-cloud tabular-nums font-medium">{r.rec}</td>
                  <td className="px-4 py-2 text-[10px] text-mist">{r.method}</td>
                  <td className="px-4 py-2">
                    <span className="text-[9px] px-1.5 py-0.5 rounded" style={{ background: r.status === "Expanding" ? "rgba(40,150,110,0.15)" : "rgba(255,255,255,0.05)", color: r.statusColor }}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ─── Upcoming project ghost card ──────────────────────────────────────────────

function GhostCard({ label, title, tags }: { label: string; title: string; tags: string[] }) {
  return (
    <div
      className="p-8 relative overflow-hidden cursor-not-allowed"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "12px",
      }}
    >
      <div className="absolute top-4 right-4">
        <span className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.05)", color: "#6B7A8F" }}>
          In progress
        </span>
      </div>
      <p className="text-[10px] uppercase tracking-widest font-body mb-3" style={{ color: "#B8935A" }}>{label}</p>
      <h3 className="font-display text-cloud mb-4" style={{ fontSize: "1.25rem", lineHeight: 1.2, letterSpacing: "-0.02em", opacity: 0.5 }}>
        {title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(t => (
          <span key={t} className="text-[10px] font-body px-2 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.04)", color: "#6B7A8F", border: "1px solid rgba(255,255,255,0.07)" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const projectInView = useInView(projectRef, { once: true, margin: "-5%" });

  return (
    <main className="relative overflow-x-hidden" style={{ background: "#060A14" }}>
      <Header />

      {/* Ambient glow */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(184,147,90,0.06) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-24 px-6 md:px-10 max-w-layout mx-auto">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs uppercase tracking-widest font-body mb-6" style={{ color: "#B8935A" }}>
            Design · Product · Strategy
          </p>
          <h1
            className="font-display text-cloud text-balance"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "820px",
            }}
          >
            Interfaces that earn trust{" "}
            <span className="text-mist">before users read a word.</span>
          </h1>
          <p className="font-body text-mist mt-6 max-w-lg leading-relaxed" style={{ fontSize: "1.0625rem" }}>
            Product design for SaaS companies that need to move fast and look like they have
            everything under control. Ex-Stripe, Intercom, Facebook, Apollo.io.
          </p>
        </motion.div>
      </section>

      {/* Featured project */}
      <section ref={projectRef} className="relative px-6 md:px-10 pb-32 max-w-layout mx-auto">
        <motion.div
          initial={{ y: 32 }}
          animate={projectInView ? { y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0C1424 0%, #080D1A 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
          }}
        >
          {/* Amber corner glow */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: "500px",
              height: "400px",
              background: "radial-gradient(ellipse at top right, rgba(184,147,90,0.09), transparent 65%)",
            }}
          />

          <div className="grid lg:grid-cols-[420px_1fr] gap-0">
            {/* Left: project info */}
            <div className="p-10 lg:p-14 flex flex-col justify-between" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-5 h-px" style={{ background: "#B8935A" }} />
                  <span className="text-[10px] uppercase tracking-widest font-body" style={{ color: "#B8935A" }}>
                    01 · Fintech SaaS
                  </span>
                </div>

                <h2
                  className="font-display text-cloud mb-3"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.75rem)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                >
                  Strata
                </h2>
                <p className="font-body text-mist mb-8 leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                  Revenue recognition automation for SaaS companies with complex pricing.
                  ASC 606-compliant schedules, real-time ARR, and clean audit trails — built
                  for finance teams running usage-based and multi-year contracts.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-10">
                  {["Product design", "UX writing", "Dashboard", "B2B SaaS", "Fintech"].map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] font-body px-2.5 py-1 rounded"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "#6B7A8F",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {[
                    { value: "14 hrs", label: "saved per close cycle" },
                    { value: "99.1%", label: "recognition accuracy" },
                    { value: "3×", label: "faster audit readiness" },
                    { value: "20 min", label: "typical onboarding" },
                  ].map(m => (
                    <div key={m.label}>
                      <div className="font-display tabular-nums mb-0.5" style={{ fontSize: "1.5rem", color: "#B8935A", letterSpacing: "-0.025em", lineHeight: 1 }}>
                        {m.value}
                      </div>
                      <div className="text-[11px] font-body text-mist">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/work/strata"
                className="inline-flex items-center gap-2 text-sm font-medium font-body text-void self-start px-6 py-3 rounded"
                style={{
                  background: "#B8935A",
                  transition: "background 0.15s, transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#CBA96A";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(184,147,90,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#B8935A";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                View full project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Right: dashboard preview */}
            <div className="relative p-8 lg:p-10 flex items-start overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(8,13,26,0.8))" }}
              />
              <motion.div
                initial={{ y: 16 }}
                animate={projectInView ? { y: 0 } : {}}
                transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full"
                style={{ transformOrigin: "top center", scale: 0.92 }}
              >
                <StrataDashboardPreview />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming work */}
        <motion.div
          initial={{ y: 24 }}
          animate={projectInView ? { y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 grid md:grid-cols-2 gap-5"
        >
          <GhostCard
            label="02 · Insurtech"
            title="Coverage intelligence platform for complex commercial policies"
            tags={["Product design", "B2B", "Dashboard", "Insurtech"]}
          />
          <GhostCard
            label="03 · Proptech"
            title="Portfolio management dashboard for institutional real estate operators"
            tags={["Product design", "Dashboard", "Real estate", "Analytics"]}
          />
        </motion.div>
      </section>

      {/* Studio note */}
      <section className="px-6 md:px-10 pb-32 max-w-layout mx-auto">
        <div
          className="p-10 md:p-14 grid md:grid-cols-[1fr_360px] gap-12 items-center"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
          }}
        >
          <div>
            <p className="text-xs uppercase tracking-widest font-body mb-5" style={{ color: "#B8935A" }}>
              The work
            </p>
            <h2
              className="font-display text-cloud mb-4 text-balance"
              style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.025em" }}
            >
              Deep domain research. Staff-level execution.
            </h2>
            <p className="font-body text-mist leading-relaxed" style={{ fontSize: "1rem", maxWidth: "540px" }}>
              Every project starts with understanding the industry before opening a design tool.
              Strata took 6 weeks of research into ASC 606, finance team workflows, and competitor gaps
              before a single screen was designed. The work shows.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { co: "Stripe", role: "Finance Ops tooling, 3 years" },
              { co: "Intercom", role: "Product surface design, 2 years" },
              { co: "Facebook", role: "Internal tools, Ads platform" },
              { co: "Apollo.io", role: "Revenue platform, GTM design" },
            ].map(item => (
              <div
                key={item.co}
                className="flex items-center justify-between p-3.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "8px",
                }}
              >
                <span className="text-sm font-medium text-cloud font-body">{item.co}</span>
                <span className="text-xs text-mist font-body">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 md:px-10 py-10 max-w-layout mx-auto flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="font-display text-cloud text-sm" style={{ letterSpacing: "-0.01em" }}>Selected Work</span>
        <a
          href="mailto:omostical@gmail.com"
          className="text-xs font-body text-mist"
          style={{ transition: "color 0.15s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DC")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7A8F")}
        >
          omostical@gmail.com
        </a>
      </footer>
    </main>
  );
}
