"use client";

import { education, achievements, funFacts } from "@/lib/data";

export const Education = () => {
  return (
    <section id="education" className="py-20" aria-label="Education and Achievements">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <header className="section-divider">
          <h2 className="label">// SECTION: EDUCATION_LOG</h2>
          <span className="line" />
          <span className="num">005</span>
        </header>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Education */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "#6b6b6b",
                marginBottom: "1.2rem",
              }}
            >
              ACADEMIC_RECORDS /
            </div>
            <div style={{ border: "1px solid #0a0a0a" }}>
              {education.map((edu, i) => (
                <article
                  key={i}
                  style={{
                    borderBottom:
                      i < education.length - 1 ? "1px solid #0a0a0a" : "none",
                    padding: "1.5rem",
                  }}
                >
                  {/* Number + degree */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        color: "#d4500a",
                        letterSpacing: "0.08em",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                          color: "#0a0a0a",
                          marginBottom: "4px",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "#6b6b6b",
                          marginBottom: "4px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {edu.institution}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            color: "#d4500a",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {edu.marks}
                        </span>
                        <time
                          className="b-tag"
                          style={{ fontSize: "0.6rem", padding: "3px 8px" }}
                        >
                          {edu.year}
                        </time>
                      </div>
                      {edu.highlights && (
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            color: "#6b6b6b",
                            lineHeight: 1.7,
                            marginTop: "8px",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {edu.highlights}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Achievements + fun facts */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "#6b6b6b",
                marginBottom: "1.2rem",
              }}
            >
              ACHIEVEMENTS.LOG /
            </div>
            <ul style={{ border: "1px solid #0a0a0a", marginBottom: "1.5rem", listStyle: "none", padding: 0, margin: 0 }}>
              {achievements.map((a, i) => (
                <li
                  key={i}
                  style={{
                    borderBottom:
                      i < achievements.length - 1 ? "1px solid #0a0a0a" : "none",
                    padding: "1rem 1.5rem",
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
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
                    ✓
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "#0a0a0a",
                      lineHeight: 1.7,
                      letterSpacing: "0.02em",
                      margin: 0,
                    }}
                  >
                    {a}
                  </p>
                </li>
              ))}
            </ul>

            {/* Fun facts */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "#6b6b6b",
                marginBottom: "1.2rem",
              }}
            >
              FUN_FACTS.TXT /
            </div>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                border: "1px solid #0a0a0a",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {funFacts.map((fact, i) => (
                <li
                  key={i}
                  style={{
                    padding: "1.2rem",
                    borderRight: i % 2 === 0 ? "1px solid #0a0a0a" : "none",
                    borderBottom: i < 2 ? "1px solid #0a0a0a" : "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "#6b6b6b",
                      lineHeight: 1.7,
                      letterSpacing: "0.02em",
                      margin: 0,
                    }}
                  >
                    {fact}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
