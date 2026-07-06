"use client";

import { experience } from "@/lib/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: WORK_HISTORY</span>
          <span className="line" />
          <span className="num">004</span>
        </div>

        {/* Bordered table */}
        <div style={{ border: "1px solid #0a0a0a" }}>
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1fr 1fr",
              borderBottom: "1px solid #0a0a0a",
              background: "#dedad1",
            }}
          >
            {["COMPANY", "ROLE", "PERIOD", "LOCATION"].map((col, i) => (
              <div
                key={col}
                style={{
                  padding: "10px 16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: "#6b6b6b",
                  borderRight:
                    i < 3 ? "1px solid #0a0a0a" : "none",
                }}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Rows */}
          {experience.map((exp, index) => (
            <div
              key={index}
              style={{
                borderBottom:
                  index < experience.length - 1 ? "1px solid #0a0a0a" : "none",
              }}
            >
              {/* Main row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.5fr 1fr 1fr",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    borderRight: "1px solid #0a0a0a",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    color: "#0a0a0a",
                  }}
                >
                  {exp.company}
                </div>
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    borderRight: "1px solid #0a0a0a",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#d4500a",
                    letterSpacing: "0.04em",
                  }}
                >
                  {exp.role}
                </div>
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    borderRight: "1px solid #0a0a0a",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "#6b6b6b",
                    letterSpacing: "0.04em",
                    lineHeight: 1.5,
                  }}
                >
                  {exp.period}
                </div>
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "#6b6b6b",
                    letterSpacing: "0.04em",
                  }}
                >
                  {exp.location}
                </div>
              </div>

              {/* Responsibilities */}
              <div
                style={{
                  padding: "1rem 1.5rem",
                  background: "#e0ddd6",
                }}
              >
                {exp.responsibilities.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      marginBottom: i < exp.responsibilities.length - 1 ? "6px" : 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: "#d4500a",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      &gt;
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "#6b6b6b",
                        lineHeight: 1.7,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
