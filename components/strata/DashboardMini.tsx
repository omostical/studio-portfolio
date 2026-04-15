"use client";

const recognized = [48, 52, 58, 55, 62, 68, 71, 76, 80];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const maxVal = 80;

const contracts = [
  { name: "Acme Corp", type: "Annual + usage", mrr: "$8,400", status: "On track" },
  { name: "Beacon Software", type: "Monthly tiered", mrr: "$3,200", status: "Expanding" },
  { name: "Cirrus Health", type: "2-yr prepaid", mrr: "$12,600", status: "On track" },
];

export default function DashboardMini() {
  return (
    <div
      className="w-full font-body overflow-hidden"
      style={{
        background: "#0C1220",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-3.5 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-cloud">Revenue Schedule</span>
          <span
            className="text-[10px] px-2 py-0.5 text-jade"
            style={{ background: "rgba(40,150,110,0.12)", borderRadius: "3px" }}
          >
            Q2 2025
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          {["YTD", "Monthly"].map((label) => (
            <div
              key={label}
              className="text-[10px] text-mist px-2 py-1 cursor-pointer"
              style={{ background: "rgba(255,255,255,0.04)", borderRadius: "3px" }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {[
          { label: "ARR", value: "$4.82M", delta: "+18% YoY", green: true },
          { label: "Recognized", value: "$142K", delta: "this month", green: false },
          { label: "Deferred", value: "$1.24M", delta: "scheduled", green: false },
        ].map((kpi, i) => (
          <div
            key={kpi.label}
            className="px-4 py-3"
            style={{ borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
          >
            <div className="text-[10px] uppercase tracking-widest text-mist mb-1">{kpi.label}</div>
            <div className="text-sm font-semibold text-cloud tabular-nums">{kpi.value}</div>
            <div className={`text-[10px] mt-0.5 ${kpi.green ? "text-jade" : "text-mist"}`}>
              {kpi.delta}
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="px-5 py-4">
        <div className="text-[10px] uppercase tracking-widest text-mist mb-3">
          Recognized this year
        </div>
        <div className="flex items-end gap-1.5" style={{ height: "72px" }}>
          {recognized.map((val, i) => (
            <div key={months[i]} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full"
                style={{
                  height: `${(val / maxVal) * 56}px`,
                  background:
                    i === recognized.length - 1
                      ? "#B8935A"
                      : `rgba(184,147,90,${0.2 + (i / recognized.length) * 0.4})`,
                  borderRadius: "2px 2px 0 0",
                }}
              />
              <div className="text-[8px] text-mist">{months[i].slice(0, 1)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contracts */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="px-5 py-2.5 text-[10px] uppercase tracking-widest text-mist">
          Active contracts
        </div>
        {contracts.map((row, i) => (
          <div
            key={row.name}
            className="px-5 py-2.5 flex items-center justify-between"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-5 h-5 flex items-center justify-center text-[8px] font-bold text-void flex-shrink-0"
                style={{ background: "#B8935A", borderRadius: "3px" }}
              >
                {row.name[0]}
              </div>
              <div>
                <div className="text-[11px] text-cloud">{row.name}</div>
                <div className="text-[9px] text-mist">{row.type}</div>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="text-[11px] font-medium text-cloud tabular-nums">{row.mrr}</div>
              <div
                className="text-[9px] px-1.5 py-0.5"
                style={{
                  background:
                    row.status === "Expanding"
                      ? "rgba(40,150,110,0.15)"
                      : "rgba(255,255,255,0.05)",
                  color: row.status === "Expanding" ? "#28966E" : "#6B7A8F",
                  borderRadius: "2px",
                }}
              >
                {row.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
