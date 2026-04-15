"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const recognized = [98, 105, 112, 108, 119, 124, 131, 138, 142, 151, 158, 164];
const deferred = [82, 78, 74, 71, 67, 63, 60, 56, 51, 47, 43, 38];
const chartMax = 210;

const allContracts = [
  { company: "Acme Corp", type: "Annual + usage", start: "Jan '25", end: "Dec '25", tcv: "$100,800", monthly: "$8,400", method: "Ratable + variable", status: "Active" },
  { company: "Beacon Software", type: "Monthly tiered", start: "Mar '24", end: "Ongoing", tcv: "—", monthly: "$3,200", method: "Monthly", status: "Active" },
  { company: "Cirrus Health", type: "2-yr prepaid", start: "Jul '24", end: "Jun '26", tcv: "$302,400", monthly: "$12,600", method: "Ratable", status: "Active" },
  { company: "Delphi Labs", type: "Annual + seats", start: "Feb '25", end: "Jan '26", tcv: "$57,600", monthly: "$4,800", method: "Ratable", status: "Expanding" },
  { company: "Echo Systems", type: "Usage-only", start: "Nov '24", end: "Ongoing", tcv: "—", monthly: "~$2,100", method: "As invoiced", status: "Active" },
];

const waterfall = [
  { label: "Opening balance", value: "$1,408K", type: "neutral" },
  { label: "New bookings", value: "+$186K", type: "positive" },
  { label: "Recognized (Jun)", value: "–$164K", type: "negative" },
  { label: "Contract amendments", value: "–$12K", type: "negative" },
  { label: "Closing balance", value: "$1,238K", type: "total" },
];

const navTabs = ["Overview", "Contracts", "Schedule", "Journal", "Reports"];

export default function ProductPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8%" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section ref={sectionRef} className="py-[120px] overflow-hidden" style={{ background: "#060A14" }}>
      <div className="max-w-layout mx-auto px-6 md:px-10 mb-12">
        <motion.div
          initial={{ y: 24 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-5 h-px" style={{ background: "#B8935A" }} />
          <span className="text-xs tracking-widest uppercase font-body" style={{ color: "#B8935A" }}>
            The product
          </span>
        </motion.div>

        <motion.h2
          initial={{ y: 24 }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-cloud max-w-xl text-balance"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
        >
          A revenue layer your whole company can rely on.
        </motion.h2>
      </div>

      <motion.div
        initial={{ y: 40 }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative"
      >
        <motion.div style={{ y }} className="max-w-layout mx-auto px-6 md:px-10">
          <FullDashboard navTabs={navTabs} />
        </motion.div>

        <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none" style={{ background: "linear-gradient(to right, #060A14, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none" style={{ background: "linear-gradient(to left, #060A14, transparent)" }} />
      </motion.div>
    </section>
  );
}

function FullDashboard({ navTabs }: { navTabs: string[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const filteredContracts = activeFilter
    ? allContracts.filter((c) => c.status === activeFilter)
    : allContracts;

  return (
    <div
      className="font-body overflow-hidden"
      style={{
        background: "#0C1220",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "8px",
        boxShadow: "0 48px 120px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03)",
      }}
    >
      {/* App chrome */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-semibold text-cloud">Strata</span>
          <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.1)" }} />
          <nav className="flex items-center gap-1">
            {navTabs.map((item, i) => (
              <button
                key={item}
                onClick={() => setActiveTab(i)}
                className="text-xs px-3 py-1.5 cursor-pointer transition-all duration-150"
                style={{
                  color: activeTab === i ? "#EDE8DC" : "#6B7A8F",
                  background: activeTab === i ? "rgba(255,255,255,0.07)" : "transparent",
                  borderRadius: "4px",
                  border: "none",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== i) e.currentTarget.style.color = "#A0ACBD";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== i) e.currentTarget.style.color = "#6B7A8F";
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2.5">
          <button
            className="text-[11px] text-mist px-3 py-1.5 flex items-center gap-1.5 cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "3px",
              transition: "background 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="2" width="8" height="7" rx="1" stroke="#6B7A8F" strokeWidth="1.2" />
              <path d="M3 1v2M7 1v2M1 5h8" stroke="#6B7A8F" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            FY 2025
          </button>
          <div
            className="w-6 h-6 flex items-center justify-center text-[10px] font-bold text-void"
            style={{ background: "#B8935A", borderRadius: "4px" }}
          >
            S
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        {[
          { label: "ARR", value: "$4.82M", delta: "+18% YoY", up: true },
          { label: "MRR", value: "$401K", delta: "+12% MoM", up: true },
          { label: "Recognized (MTD)", value: "$164K", delta: "Jun 2025", up: null },
          { label: "Deferred Revenue", value: "$1.24M", delta: "14 contracts", up: null },
          { label: "Net Revenue Retention", value: "114%", delta: "+3pts QoQ", up: true },
        ].map((kpi, i) => (
          <div
            key={kpi.label}
            className="px-5 py-4 cursor-default"
            style={{
              borderRight: i < 4 ? "1px solid rgba(255,255,255,0.07)" : "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div className="text-[10px] text-mist uppercase tracking-widest mb-1.5">{kpi.label}</div>
            <div className="text-base font-semibold text-cloud tabular-nums mb-1">{kpi.value}</div>
            <div className="text-[10px]" style={{ color: kpi.up === true ? "#28966E" : "#6B7A8F" }}>
              {kpi.delta}
            </div>
          </div>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ y: 8 }}
          animate={{ y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {activeTab === 0 && (
            <OverviewTab
              hoveredBar={hoveredBar}
              setHoveredBar={setHoveredBar}
              hoveredRow={hoveredRow}
              setHoveredRow={setHoveredRow}
              filteredContracts={filteredContracts}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          )}
          {activeTab === 1 && <ContractsTab />}
          {activeTab === 2 && <ScheduleTab />}
          {activeTab === 3 && <JournalTab />}
          {activeTab === 4 && <ReportsTab />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function OverviewTab({
  hoveredBar,
  setHoveredBar,
  hoveredRow,
  setHoveredRow,
  filteredContracts,
  activeFilter,
  setActiveFilter,
}: {
  hoveredBar: number | null;
  setHoveredBar: (i: number | null) => void;
  hoveredRow: number | null;
  setHoveredRow: (i: number | null) => void;
  filteredContracts: typeof allContracts;
  activeFilter: string | null;
  setActiveFilter: (f: string | null) => void;
}) {
  return (
    <>
      <div className="p-5 grid lg:grid-cols-[1.5fr_1fr] gap-4 mb-4">
        {/* Chart */}
        <div
          className="p-5"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px" }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="text-xs font-medium text-cloud">Revenue recognition schedule</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[10px] text-mist">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "#B8935A" }} />
                Recognized
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-mist">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ background: "rgba(184,147,90,0.2)" }} />
                Deferred
              </div>
            </div>
          </div>

          <div className="flex items-end gap-1.5 relative" style={{ height: "120px" }}>
            {months.map((month, i) => {
              const recH = (recognized[i] / chartMax) * 100;
              const defH = (deferred[i] / chartMax) * 80;
              const isActive = hoveredBar === i;
              return (
                <div
                  key={month}
                  className="flex-1 flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHoveredBar(i)}
                  onMouseLeave={() => setHoveredBar(null)}
                >
                  {isActive && (
                    <div
                      className="absolute -top-7 text-[10px] font-mono text-cloud px-1.5 py-0.5 pointer-events-none z-10"
                      style={{
                        background: "#1A2440",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "3px",
                        left: `${(i / months.length) * 100}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      ${recognized[i]}K
                    </div>
                  )}
                  <div className="w-full flex flex-col justify-end gap-0.5" style={{ height: "108px" }}>
                    <div
                      className="w-full"
                      style={{
                        height: `${defH}%`,
                        background: isActive ? "rgba(184,147,90,0.3)" : "rgba(184,147,90,0.18)",
                        borderRadius: "2px 2px 0 0",
                        transition: "background 0.15s",
                      }}
                    />
                    <div
                      className="w-full"
                      style={{
                        height: `${recH}%`,
                        background: isActive
                          ? "#CBA96A"
                          : i === months.length - 1
                          ? "#B8935A"
                          : `rgba(184,147,90,${0.3 + (i / months.length) * 0.4})`,
                        borderRadius: "2px 2px 0 0",
                        transition: "background 0.15s",
                      }}
                    />
                  </div>
                  <div className="text-[8px] text-mist mt-1.5">{month}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Waterfall */}
        <div
          className="p-5"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px" }}
        >
          <div className="text-xs font-medium text-cloud mb-5">Deferred revenue movement</div>
          <div className="space-y-3">
            {waterfall.map((row) => (
              <div key={row.label}>
                {row.type === "total" && (
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "12px" }} />
                )}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-mist">{row.label}</div>
                  <div
                    className="text-xs tabular-nums font-medium"
                    style={{
                      color: row.type === "positive" ? "#28966E" : row.type === "negative" ? "#f87171" : row.type === "total" ? "#EDE8DC" : "#6B7A8F",
                    }}
                  >
                    {row.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-[10px] text-mist mb-2.5">Deferred balance trend (12M)</div>
            <div className="flex items-end gap-1" style={{ height: "32px" }}>
              {[100, 96, 92, 88, 84, 80, 76, 71, 66, 60, 54, 47].map((val, i) => (
                <div
                  key={i}
                  className="flex-1 cursor-pointer"
                  style={{
                    height: `${val}%`,
                    background: i === 11 ? "#B8935A" : "rgba(184,147,90,0.25)",
                    borderRadius: "1px 1px 0 0",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#B8935A")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = i === 11 ? "#B8935A" : "rgba(184,147,90,0.25)")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contract table */}
      <div className="px-5 pb-5">
        <div
          className="overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}
        >
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="text-xs font-medium text-cloud">Active contracts</div>
            <div className="flex items-center gap-2">
              {["Active", "Expanding"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(activeFilter === f ? null : f)}
                  className="text-[10px] px-2.5 py-1 cursor-pointer"
                  style={{
                    background: activeFilter === f ? "rgba(184,147,90,0.15)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${activeFilter === f ? "rgba(184,147,90,0.3)" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: "3px",
                    color: activeFilter === f ? "#B8935A" : "#6B7A8F",
                    transition: "all 0.15s",
                  }}
                >
                  {f}
                </button>
              ))}
              <div className="text-[10px] text-mist ml-1">
                {filteredContracts.length} of {allContracts.length}
              </div>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                {["Company", "Type", "Term", "TCV", "Monthly rec.", "Method", "Status"].map((h) => (
                  <th key={h} className="text-left px-5 py-2.5 text-[10px] text-mist uppercase tracking-widest font-normal whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout">
                {filteredContracts.map((row, i) => (
                  <motion.tr
                    key={row.company}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      borderBottom: i < filteredContracts.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                      background: hoveredRow === i ? "rgba(255,255,255,0.02)" : "transparent",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 flex items-center justify-center text-[8px] font-bold text-void flex-shrink-0" style={{ background: "#B8935A", borderRadius: "3px" }}>
                          {row.company[0]}
                        </div>
                        <span className="text-xs text-cloud">{row.company}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-xs text-mist whitespace-nowrap">{row.type}</td>
                    <td className="px-5 py-3 text-xs text-mist whitespace-nowrap">{row.start} – {row.end}</td>
                    <td className="px-5 py-3 text-xs text-cloud tabular-nums">{row.tcv}</td>
                    <td className="px-5 py-3 text-xs font-medium text-cloud tabular-nums">{row.monthly}</td>
                    <td className="px-5 py-3 text-xs text-mist whitespace-nowrap">{row.method}</td>
                    <td className="px-5 py-3">
                      <span
                        className="text-[10px] px-2 py-0.5 whitespace-nowrap"
                        style={{
                          background: row.status === "Expanding" ? "rgba(40,150,110,0.15)" : "rgba(255,255,255,0.05)",
                          color: row.status === "Expanding" ? "#28966E" : "#6B7A8F",
                          borderRadius: "3px",
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function ContractsTab(_props: Record<string, never>) {
  const [search, setSearch] = useState("");
  const filtered = allContracts.filter(
    (c) => c.company.toLowerCase().includes(search.toLowerCase()) || c.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="flex items-center gap-2 flex-1 max-w-xs px-3 py-2"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="5" cy="5" r="3.5" stroke="#6B7A8F" strokeWidth="1.2" />
            <path d="M8 8l2.5 2.5" stroke="#6B7A8F" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search contracts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-xs text-cloud bg-transparent outline-none w-full placeholder-mist"
          />
        </div>
        <div className="text-[10px] text-mist">{filtered.length} contracts</div>
      </div>
      <div className="overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {["Company", "Type", "Term", "TCV", "Monthly rec.", "Method", "Status"].map((h) => (
                <th key={h} className="text-left px-5 py-2.5 text-[10px] text-mist uppercase tracking-widest font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr
                key={row.company}
                style={{
                  borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 flex items-center justify-center text-[8px] font-bold text-void" style={{ background: "#B8935A", borderRadius: "3px" }}>
                      {row.company[0]}
                    </div>
                    <span className="text-xs text-cloud">{row.company}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-xs text-mist">{row.type}</td>
                <td className="px-5 py-3 text-xs text-mist">{row.start} – {row.end}</td>
                <td className="px-5 py-3 text-xs text-cloud tabular-nums">{row.tcv}</td>
                <td className="px-5 py-3 text-xs font-medium text-cloud tabular-nums">{row.monthly}</td>
                <td className="px-5 py-3 text-xs text-mist">{row.method}</td>
                <td className="px-5 py-3">
                  <span className="text-[10px] px-2 py-0.5" style={{ background: row.status === "Expanding" ? "rgba(40,150,110,0.15)" : "rgba(255,255,255,0.05)", color: row.status === "Expanding" ? "#28966E" : "#6B7A8F", borderRadius: "3px" }}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ScheduleTab() {
  return (
    <div className="p-5">
      <div className="text-xs font-medium text-cloud mb-4">Recognition schedule — FY 2025</div>
      <div className="overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <th className="text-left px-5 py-2.5 text-[10px] text-mist uppercase tracking-widest font-normal">Period</th>
              {allContracts.map((c) => (
                <th key={c.company} className="text-right px-4 py-2.5 text-[10px] text-mist uppercase tracking-widest font-normal whitespace-nowrap">{c.company.split(" ")[0]}</th>
              ))}
              <th className="text-right px-5 py-2.5 text-[10px] text-mist uppercase tracking-widest font-normal">Total</th>
            </tr>
          </thead>
          <tbody>
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
              <tr
                key={m}
                style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "background 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <td className="px-5 py-2.5 text-xs text-mist">{m} 2025</td>
                {[8400, 3200, 12600, 4800, 2100].map((v, j) => (
                  <td key={j} className="px-4 py-2.5 text-xs text-cloud tabular-nums text-right">${(v / 1000).toFixed(1)}K</td>
                ))}
                <td className="px-5 py-2.5 text-xs font-semibold text-cloud tabular-nums text-right">$31.1K</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function JournalTab() {
  const entries = [
    { date: "Jun 30, 2025", ref: "JE-2025-0623", debit: "Deferred Revenue", credit: "Revenue", amount: "$164,000", status: "Posted" },
    { date: "Jun 30, 2025", ref: "JE-2025-0622", debit: "Accounts Receivable", credit: "Deferred Revenue", amount: "$186,000", status: "Posted" },
    { date: "May 31, 2025", ref: "JE-2025-0598", debit: "Deferred Revenue", credit: "Revenue", amount: "$158,000", status: "Posted" },
    { date: "May 31, 2025", ref: "JE-2025-0597", debit: "Accounts Receivable", credit: "Deferred Revenue", amount: "$171,000", status: "Posted" },
  ];
  return (
    <div className="p-5">
      <div className="text-xs font-medium text-cloud mb-4">Journal entries</div>
      <div className="overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "4px" }}>
        <table className="w-full">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {["Date", "Reference", "Debit", "Credit", "Amount", "Status"].map((h) => (
                <th key={h} className="text-left px-5 py-2.5 text-[10px] text-mist uppercase tracking-widest font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((e, i) => (
              <tr key={e.ref} style={{ borderBottom: i < entries.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", transition: "background 0.15s" }}
                onMouseEnter={(el) => (el.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={(el) => (el.currentTarget.style.background = "transparent")}
              >
                <td className="px-5 py-3 text-xs text-mist whitespace-nowrap">{e.date}</td>
                <td className="px-5 py-3 text-xs font-mono text-ember">{e.ref}</td>
                <td className="px-5 py-3 text-xs text-cloud">{e.debit}</td>
                <td className="px-5 py-3 text-xs text-cloud">{e.credit}</td>
                <td className="px-5 py-3 text-xs font-medium text-cloud tabular-nums">{e.amount}</td>
                <td className="px-5 py-3"><span className="text-[10px] px-2 py-0.5" style={{ background: "rgba(40,150,110,0.15)", color: "#28966E", borderRadius: "3px" }}>{e.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ReportsTab() {
  const [activeReport, setActiveReport] = useState(0);
  const reports = ["ARR Waterfall", "Revenue by Segment", "Cohort Analysis", "Compliance Summary"];
  return (
    <div className="p-5">
      <div className="flex items-center gap-2 mb-5">
        {reports.map((r, i) => (
          <button
            key={r}
            onClick={() => setActiveReport(i)}
            className="text-xs px-3 py-1.5 cursor-pointer"
            style={{
              background: activeReport === i ? "rgba(184,147,90,0.12)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${activeReport === i ? "rgba(184,147,90,0.25)" : "rgba(255,255,255,0.07)"}`,
              borderRadius: "3px",
              color: activeReport === i ? "#B8935A" : "#6B7A8F",
              transition: "all 0.15s",
            }}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="p-8 text-center" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px" }}>
        <div className="font-display text-cloud mb-2" style={{ fontSize: "1.1rem" }}>{reports[activeReport]}</div>
        <div className="text-xs text-mist">Report preview available in full dashboard</div>
      </div>
    </div>
  );
}
