"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const rows = [
  {
    label: "Time to first answer",
    bi: "Days to weeks",
    sheets: "Hours (if you know the formula)",
    lumen: "Seconds",
  },
  {
    label: "Needs a data team",
    bi: true,
    sheets: false,
    lumen: false,
    boolRow: true,
  },
  {
    label: "Updates in real time",
    bi: false,
    sheets: false,
    lumen: true,
    boolRow: true,
  },
  {
    label: "Alerts on anomalies",
    bi: false,
    sheets: false,
    lumen: true,
    boolRow: true,
  },
  {
    label: "Built for ops workflows",
    bi: false,
    sheets: false,
    lumen: true,
    boolRow: true,
  },
];

function BoolMark({ value }: { value: boolean }) {
  return value ? (
    <span style={{ color: "#34D399", fontSize: 16 }}>&#10003;</span>
  ) : (
    <span style={{ color: "#EF4444", fontSize: 16 }}>&#10007;</span>
  );
}

export default function Compare() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  const cellBase: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans)",
    fontSize: 14,
    padding: "14px 16px",
    borderBottom: "1px solid #1F1F22",
    textAlign: "center",
  };

  return (
    <section
      ref={ref}
      style={{
        paddingTop: 100,
        paddingBottom: 100,
        borderBottom: "1px solid #1F1F22",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "var(--font-manrope)",
            fontSize: "clamp(26px, 3.5vw, 38px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#EDEDEF",
            marginBottom: 48,
          }}
        >
          Not another dashboard.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: 600,
              borderCollapse: "collapse",
              border: "1px solid #1F1F22",
              borderRadius: 6,
              overflow: "hidden",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    ...cellBase,
                    textAlign: "left",
                    color: "#5A5A5C",
                    fontWeight: 400,
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    background: "#141416",
                    width: "28%",
                  }}
                />
                <th
                  style={{
                    ...cellBase,
                    color: "#5A5A5C",
                    fontWeight: 500,
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    background: "#141416",
                    width: "24%",
                  }}
                >
                  Traditional BI
                </th>
                <th
                  style={{
                    ...cellBase,
                    color: "#5A5A5C",
                    fontWeight: 500,
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    background: "#141416",
                    width: "24%",
                  }}
                >
                  Spreadsheets
                </th>
                <th
                  style={{
                    ...cellBase,
                    color: "#E8B931",
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    background: "#141416",
                    width: "24%",
                    borderLeft: "1px solid #E8B931",
                    borderRight: "1px solid #E8B931",
                    borderTop: "1px solid #E8B931",
                  }}
                >
                  Lumen
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label}>
                  <td
                    style={{
                      ...cellBase,
                      textAlign: "left",
                      color: "#EDEDEF",
                      fontWeight: 400,
                      background: i % 2 === 0 ? "#0C0C0E" : "#111113",
                    }}
                  >
                    {row.label}
                  </td>
                  <td
                    style={{
                      ...cellBase,
                      color: "#8B8B8D",
                      background: i % 2 === 0 ? "#0C0C0E" : "#111113",
                    }}
                  >
                    {row.boolRow ? (
                      <BoolMark value={row.bi as boolean} />
                    ) : (
                      (row.bi as string)
                    )}
                  </td>
                  <td
                    style={{
                      ...cellBase,
                      color: "#8B8B8D",
                      background: i % 2 === 0 ? "#0C0C0E" : "#111113",
                    }}
                  >
                    {row.boolRow ? (
                      <BoolMark value={row.sheets as boolean} />
                    ) : (
                      (row.sheets as string)
                    )}
                  </td>
                  <td
                    style={{
                      ...cellBase,
                      color: "#EDEDEF",
                      fontWeight: 500,
                      background: i % 2 === 0 ? "#0C0C0E" : "#111113",
                      borderLeft: "1px solid #E8B931",
                      borderRight: "1px solid #E8B931",
                      ...(i === rows.length - 1
                        ? { borderBottom: "1px solid #E8B931" }
                        : {}),
                    }}
                  >
                    {row.boolRow ? (
                      <BoolMark value={row.lumen as boolean} />
                    ) : (
                      <span style={{ color: "#E8B931" }}>
                        {row.lumen as string}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
