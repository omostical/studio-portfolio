"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const properties = [
  { name: "The Meridian", units: 142, occ: 98.1, rent: 2450, city: "Austin" },
  { name: "Ash & Elm", units: 86, occ: 94.7, rent: 1890, city: "Denver" },
  { name: "Harbor Walk", units: 210, occ: 96.8, rent: 3100, city: "Miami" },
  { name: "Silverlake Terrace", units: 64, occ: 92.3, rent: 2780, city: "LA" },
  { name: "Pioneer Square", units: 118, occ: 97.5, rent: 2200, city: "Seattle" },
  { name: "Midtown Commons", units: 156, occ: 95.4, rent: 2650, city: "Atlanta" },
];

const monthlyOcc = [
  { month: "May", val: 93.2 },
  { month: "Jun", val: 94.1 },
  { month: "Jul", val: 95.8 },
  { month: "Aug", val: 96.4 },
  { month: "Sep", val: 95.9 },
  { month: "Oct", val: 96.1 },
  { month: "Nov", val: 95.3 },
  { month: "Dec", val: 94.8 },
  { month: "Jan", val: 95.2 },
  { month: "Feb", val: 95.9 },
  { month: "Mar", val: 96.5 },
  { month: "Apr", val: 96.2 },
];

const maintenanceBreakdown = [
  { category: "HVAC", cost: 48200, pct: 32 },
  { category: "Plumbing", cost: 31500, pct: 21 },
  { category: "Electrical", cost: 22800, pct: 15 },
  { category: "Exterior", cost: 19500, pct: 13 },
  { category: "Appliances", cost: 16200, pct: 11 },
  { category: "Other", cost: 12300, pct: 8 },
];

const kpis = [
  { label: "Avg. Rent", value: "$2,512", delta: "+4.2%" },
  { label: "Occupancy Rate", value: "96.2%", delta: "+1.4%" },
  { label: "Maintenance Ratio", value: "8.3%", delta: "-1.1%" },
  { label: "NOI Margin", value: "68.4%", delta: "+0.6%" },
];

function OccupancyChart() {
  const maxVal = 100;
  const minDisplay = 90;
  const range = maxVal - minDisplay;

  return (
    <div>
      <div className="flex items-end gap-1.5 h-[120px]">
        {monthlyOcc.map((m, i) => {
          const normalized = ((m.val - minDisplay) / range) * 100;
          return (
            <div key={m.month} className="flex flex-col items-center flex-1 group">
              <div className="relative w-full flex items-end h-[100px]">
                <div
                  className="w-full rounded-t-sm transition-colors duration-200"
                  style={{
                    height: `${normalized}%`,
                    background:
                      i === monthlyOcc.length - 1
                        ? "#3D6B9E"
                        : "rgba(61,107,158,0.25)",
                    minHeight: "4px",
                  }}
                />
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[9px] font-medium whitespace-nowrap"
                  style={{
                    color: "#3D6B9E",
                    fontFamily: "var(--font-ibm-mono), monospace",
                  }}
                >
                  {m.val}%
                </div>
              </div>
              <span
                className="text-[8px] mt-1.5"
                style={{
                  color: "#6B6B7A",
                  fontFamily: "var(--font-ibm-mono), monospace",
                }}
              >
                {m.month}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MaintenanceChart() {
  return (
    <div className="space-y-2.5">
      {maintenanceBreakdown.map((item) => (
        <div key={item.category} className="group">
          <div className="flex items-center justify-between mb-1">
            <span
              className="text-[11px] font-medium"
              style={{
                color: "#1A1A2E",
                fontFamily: "var(--font-ibm-mono), monospace",
              }}
            >
              {item.category}
            </span>
            <span
              className="text-[11px]"
              style={{
                color: "#6B6B7A",
                fontFamily: "var(--font-ibm-mono), monospace",
              }}
            >
              ${item.cost.toLocaleString()} ({item.pct}%)
            </span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "rgba(26,26,46,0.04)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500 group-hover:opacity-100"
              style={{
                width: `${item.pct * 2.5}%`,
                background: "#C9855E",
                opacity: 0.65,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DashboardSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [selectedProp, setSelectedProp] = useState(0);

  return (
    <section
      id="dashboard"
      ref={ref}
      className="py-20 md:py-28"
      style={{ background: "#F5F1EB" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-14 md:mb-20"
        >
          <span
            className="text-xs uppercase tracking-widest mb-4 block"
            style={{
              color: "#C9855E",
              fontFamily: "var(--font-ibm-mono), monospace",
            }}
          >
            Product Preview
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-[44px] tracking-tight mb-4"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-dm-serif), Georgia, serif",
            }}
          >
            Your portfolio at a glance
          </h2>
          <p
            className="text-base md:text-lg max-w-[520px] mx-auto"
            style={{ color: "#6B6B7A" }}
          >
            One dashboard. Every property. No more toggling between five
            different systems to get a clear picture.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#FFFFFF",
            border: "1px solid rgba(26,26,46,0.08)",
            boxShadow:
              "0 1px 3px rgba(26,26,46,0.04), 0 16px 48px rgba(26,26,46,0.08)",
          }}
        >
          {/* Toolbar */}
          <div
            className="px-5 md:px-6 py-3.5 flex items-center justify-between"
            style={{ borderBottom: "1px solid rgba(26,26,46,0.06)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "rgba(26,26,46,0.1)" }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "rgba(26,26,46,0.1)" }}
                />
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: "rgba(26,26,46,0.1)" }}
                />
              </div>
              <span
                className="text-xs font-medium"
                style={{
                  color: "#6B6B7A",
                  fontFamily: "var(--font-ibm-mono), monospace",
                }}
              >
                haven.app/dashboard
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] px-2 py-1 rounded-md"
                style={{
                  background: "rgba(45,90,39,0.08)",
                  color: "#2D5A27",
                  fontFamily: "var(--font-ibm-mono), monospace",
                }}
              >
                Live
              </span>
            </div>
          </div>

          {/* KPI row */}
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ borderBottom: "1px solid rgba(26,26,46,0.06)" }}
          >
            {kpis.map((kpi, i) => (
              <div
                key={kpi.label}
                className="px-5 md:px-6 py-4"
                style={{
                  borderRight:
                    i < kpis.length - 1
                      ? "1px solid rgba(26,26,46,0.06)"
                      : "none",
                }}
              >
                <div
                  className="text-[10px] uppercase tracking-wider mb-1"
                  style={{
                    color: "#6B6B7A",
                    fontFamily: "var(--font-ibm-mono), monospace",
                  }}
                >
                  {kpi.label}
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-lg md:text-xl font-semibold"
                    style={{
                      color: "#1A1A2E",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {kpi.value}
                  </span>
                  <span
                    className="text-[11px] font-medium"
                    style={{
                      color: kpi.delta.startsWith("+")
                        ? "#2D5A27"
                        : kpi.delta.startsWith("-")
                        ? "#3D6B9E"
                        : "#6B6B7A",
                      fontFamily: "var(--font-ibm-mono), monospace",
                    }}
                  >
                    {kpi.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
            {/* Property sidebar */}
            <div
              className="hidden lg:block"
              style={{
                borderRight: "1px solid rgba(26,26,46,0.06)",
              }}
            >
              <div
                className="px-5 py-3"
                style={{ borderBottom: "1px solid rgba(26,26,46,0.04)" }}
              >
                <span
                  className="text-[10px] uppercase tracking-wider font-medium"
                  style={{
                    color: "#6B6B7A",
                    fontFamily: "var(--font-ibm-mono), monospace",
                  }}
                >
                  Properties
                </span>
              </div>
              {properties.map((prop, i) => (
                <div
                  key={prop.name}
                  className="flex items-center justify-between px-5 py-3 cursor-pointer transition-colors duration-150"
                  style={{
                    background:
                      selectedProp === i
                        ? "rgba(61,107,158,0.04)"
                        : "transparent",
                    borderBottom: "1px solid rgba(26,26,46,0.03)",
                    borderLeft:
                      selectedProp === i
                        ? "2px solid #3D6B9E"
                        : "2px solid transparent",
                  }}
                  onClick={() => setSelectedProp(i)}
                  onMouseEnter={(e) => {
                    if (selectedProp !== i)
                      e.currentTarget.style.background =
                        "rgba(26,26,46,0.02)";
                  }}
                  onMouseLeave={(e) => {
                    if (selectedProp !== i)
                      e.currentTarget.style.background = "transparent";
                  }}
                >
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "#1A1A2E" }}
                    >
                      {prop.name}
                    </div>
                    <div
                      className="text-[11px]"
                      style={{
                        color: "#6B6B7A",
                        fontFamily: "var(--font-ibm-mono), monospace",
                      }}
                    >
                      {prop.units} units &middot; {prop.city}
                    </div>
                  </div>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-md"
                    style={{
                      background:
                        prop.occ >= 96
                          ? "rgba(45,90,39,0.08)"
                          : prop.occ >= 94
                          ? "rgba(61,107,158,0.08)"
                          : "rgba(201,133,94,0.08)",
                      color:
                        prop.occ >= 96
                          ? "#2D5A27"
                          : prop.occ >= 94
                          ? "#3D6B9E"
                          : "#C9855E",
                      fontFamily: "var(--font-ibm-mono), monospace",
                    }}
                  >
                    {prop.occ}%
                  </span>
                </div>
              ))}
            </div>

            {/* Charts area */}
            <div className="p-5 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Occupancy trend */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{
                        color: "#1A1A2E",
                        fontFamily: "var(--font-ibm-mono), monospace",
                      }}
                    >
                      Occupancy Trend
                    </span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(26,26,46,0.04)",
                        color: "#6B6B7A",
                        fontFamily: "var(--font-ibm-mono), monospace",
                      }}
                    >
                      12 months
                    </span>
                  </div>
                  <OccupancyChart />
                </div>

                {/* Maintenance breakdown */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{
                        color: "#1A1A2E",
                        fontFamily: "var(--font-ibm-mono), monospace",
                      }}
                    >
                      Maintenance Cost
                    </span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(26,26,46,0.04)",
                        color: "#6B6B7A",
                        fontFamily: "var(--font-ibm-mono), monospace",
                      }}
                    >
                      $150.5K total
                    </span>
                  </div>
                  <MaintenanceChart />
                </div>
              </div>

              {/* Recent activity */}
              <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(26,26,46,0.06)" }}>
                <span
                  className="text-xs font-medium uppercase tracking-wider block mb-3"
                  style={{
                    color: "#1A1A2E",
                    fontFamily: "var(--font-ibm-mono), monospace",
                  }}
                >
                  Recent Activity
                </span>
                <div className="space-y-2">
                  {[
                    {
                      action: "Lease signed",
                      detail: "Unit 12A, The Meridian",
                      time: "12 min ago",
                      icon: "check",
                    },
                    {
                      action: "Maintenance completed",
                      detail: "HVAC repair, Harbor Walk #204",
                      time: "45 min ago",
                      icon: "wrench",
                    },
                    {
                      action: "Rent payment received",
                      detail: "Unit 7C, Silverlake Terrace",
                      time: "1h ago",
                      icon: "dollar",
                    },
                    {
                      action: "Inspection scheduled",
                      detail: "Pioneer Square, Building B",
                      time: "2h ago",
                      icon: "calendar",
                    },
                  ].map((activity, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg transition-colors duration-150"
                      style={{
                        cursor: "default",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(26,26,46,0.02)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            activity.icon === "check"
                              ? "rgba(45,90,39,0.08)"
                              : activity.icon === "dollar"
                              ? "rgba(61,107,158,0.08)"
                              : "rgba(201,133,94,0.08)",
                        }}
                      >
                        <span
                          className="text-[10px]"
                          style={{
                            color:
                              activity.icon === "check"
                                ? "#2D5A27"
                                : activity.icon === "dollar"
                                ? "#3D6B9E"
                                : "#C9855E",
                          }}
                        >
                          {activity.icon === "check"
                            ? "✓"
                            : activity.icon === "wrench"
                            ? "⚙"
                            : activity.icon === "dollar"
                            ? "$"
                            : "◎"}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="text-sm font-medium"
                          style={{ color: "#1A1A2E" }}
                        >
                          {activity.action}
                        </span>
                        <span className="text-sm" style={{ color: "#6B6B7A" }}>
                          {" "}
                          &middot; {activity.detail}
                        </span>
                      </div>
                      <span
                        className="text-[10px] flex-shrink-0"
                        style={{
                          color: "#6B6B7A",
                          fontFamily: "var(--font-ibm-mono), monospace",
                        }}
                      >
                        {activity.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
