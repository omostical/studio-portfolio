"use client";

const columns: { h: string; l: string[] }[] = [
  { h: "Shop", l: ["Collection IX", "Overcoats", "Knitwear", "Leather"] },
  { h: "House", l: ["Atelier", "Journal", "Stockists", "Appointments"] },
  {
    h: "Contact",
    l: [
      "Florence — Via de' Serragli 82",
      "London — by appointment",
      "+39 055 2478 931",
      "atelier@sevrin.co",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="stockists"
      style={{
        padding: "120px 32px 40px",
        background: "#1A1612",
        color: "#F5F1E8",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Large wordmark */}
        <div
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(5rem, 16vw, 14rem)",
            letterSpacing: "0.08em",
            lineHeight: 0.85,
            fontWeight: 400,
            color: "#F5F1E8",
            paddingBottom: 80,
            borderBottom: "1px solid rgba(245,241,232,0.14)",
          }}
        >
          SEVRIN
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr]"
          style={{
            gap: 48,
            paddingTop: 80,
            paddingBottom: 80,
            borderBottom: "1px solid rgba(245,241,232,0.14)",
          }}
        >
          <div>
            <div
              className="font-body"
              style={{
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#8A7F6F",
                marginBottom: 20,
              }}
            >
              Correspondence
            </div>
            <p
              className="font-body"
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(245,241,232,0.65)",
                maxWidth: 360,
                marginBottom: 28,
              }}
            >
              Dispatches from the atelier. Rare by design — a letter, every other season.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                gap: 0,
                maxWidth: 360,
                borderBottom: "1px solid rgba(245,241,232,0.22)",
              }}
            >
              <input
                type="email"
                placeholder="Your address"
                className="font-body"
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  color: "#F5F1E8",
                  padding: "12px 0",
                  outline: "none",
                  fontSize: 14,
                }}
              />
              <button
                type="submit"
                className="font-body"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#B8935A",
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  padding: "0 0 0 16px",
                }}
              >
                Join →
              </button>
            </form>
          </div>

          {columns.map((c) => (
            <div key={c.h}>
              <div
                className="font-body"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#8A7F6F",
                  marginBottom: 24,
                }}
              >
                {c.h}
              </div>
              <ul
                className="font-body"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {c.l.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: 14,
                      color: "rgba(245,241,232,0.78)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="font-body flex flex-col md:flex-row md:justify-between"
          style={{
            gap: 12,
            marginTop: 36,
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(245,241,232,0.42)",
          }}
        >
          <div>© 2026 SEVRIN — Florence · London</div>
          <div>A house in the Oltrarno since 1987</div>
        </div>
      </div>
    </footer>
  );
}
