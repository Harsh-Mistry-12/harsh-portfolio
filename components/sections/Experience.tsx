"use client";

import { experience } from "@/lib/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20" aria-label="Work Experience">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <header className="section-divider">
          <h2 className="label">// SECTION: WORK_HISTORY</h2>
          <span className="line" />
          <span className="num">004</span>
        </header>

        {/* Desktop: bordered table — hidden on mobile */}
        <div className="hidden md:block" style={{ border: "1px solid #0a0a0a" }}>
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
                  borderRight: i < 3 ? "1px solid #0a0a0a" : "none",
                }}
              >
                {col}
              </div>
            ))}
          </div>

          {/* Experience items */}
          {experience.map((exp, index) => (
            <article
              key={index}
              itemScope
              itemType="https://schema.org/WorkBreakdown"
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
                <h3
                  style={{
                    padding: "1.2rem 1.5rem",
                    borderRight: "1px solid #0a0a0a",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    color: "#0a0a0a",
                    margin: 0,
                  }}
                >
                  {exp.company}
                </h3>
                <h4
                  style={{
                    padding: "1.2rem 1.5rem",
                    borderRight: "1px solid #0a0a0a",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#d4500a",
                    letterSpacing: "0.04em",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {exp.role}
                </h4>
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
                  <time>{exp.period}</time>
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
                  <address style={{ fontStyle: "normal" }}>{exp.location}</address>
                </div>
              </div>

              {/* Responsibilities list */}
              <ul style={{ padding: "1rem 1.5rem", background: "#e0ddd6", listStyle: "none", margin: 0 }}>
                {exp.responsibilities.map((r, i) => (
                  <li
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
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Mobile: stacked cards — visible only on small screens */}
        <div className="md:hidden flex flex-col" style={{ border: "1px solid #0a0a0a" }}>
          {experience.map((exp, index) => (
            <article
              key={index}
              style={{
                borderBottom:
                  index < experience.length - 1 ? "1px solid #0a0a0a" : "none",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  background: "#dedad1",
                  borderBottom: "1px solid #0a0a0a",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.12em",
                    color: "#6b6b6b",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <time
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    color: "#d4500a",
                  }}
                >
                  {exp.period}
                </time>
              </div>

              {/* Card body */}
              <div style={{ padding: "1.2rem 1rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    marginBottom: "4px",
                    letterSpacing: "0.02em",
                    margin: 0,
                  }}
                >
                  {exp.company}
                </h3>
                <h4
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#d4500a",
                    letterSpacing: "0.04em",
                    marginBottom: "4px",
                    margin: "4px 0",
                    fontWeight: 400,
                  }}
                >
                  {exp.role}
                </h4>
                <address
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.6rem",
                    color: "#6b6b6b",
                    letterSpacing: "0.04em",
                    marginBottom: "1rem",
                    fontStyle: "normal",
                  }}
                >
                  {exp.location}
                </address>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {exp.responsibilities.map((r, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: "10px",
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
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
