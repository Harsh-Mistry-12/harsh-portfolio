"use client";

import { skills } from "@/lib/data";

const categoryPrefix: Record<string, string> = {
  Languages:            "01",
  Databases:            "02",
  "Version Control":    "03",
  Cloud:                "04",
  Frameworks:           "05",
  "Data Tools":         "06",
  "Data Visualization": "07",
  Automation:           "08",
  "Machine Learning":   "09",
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: TECH_STACK</span>
          <span className="line" />
          <span className="num">002</span>
        </div>

        {/* Main bordered table */}
        <div style={{ border: "1px solid #0a0a0a" }}>
          {/* Header bar */}
          <div
            style={{
              borderBottom: "1px solid #0a0a0a",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#dedad1",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "#6b6b6b",
            }}
          >
            <span>SKILLS.MANIFEST</span>
            <span>{Object.keys(skills).length} CATEGORIES LOADED</span>
          </div>

          {/* Skill rows */}
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              style={{
                borderBottom:
                  index < Object.entries(skills).length - 1
                    ? "1px solid #0a0a0a"
                    : "none",
              }}
            >
              {/* Mobile: stacked layout */}
              <div className="md:hidden">
                {/* Category label row */}
                <div
                  style={{
                    background: "#dedad1",
                    borderBottom: "1px solid rgba(0,0,0,0.15)",
                    padding: "8px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "#d4500a",
                      letterSpacing: "0.08em",
                      flexShrink: 0,
                    }}
                  >
                    {categoryPrefix[category] ?? "00"}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      color: "#0a0a0a",
                      fontWeight: 700,
                    }}
                  >
                    {category.toUpperCase()}
                  </span>
                </div>
                {/* Skills tags */}
                <div
                  style={{
                    padding: "10px 14px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  {items.map((skill) => (
                    <span key={skill} className="b-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: side-by-side grid */}
              <div
                className="hidden md:grid"
                style={{ gridTemplateColumns: "1fr 3fr" }}
              >
                {/* Category label */}
                <div
                  style={{
                    borderRight: "1px solid #0a0a0a",
                    padding: "1.2rem 1.5rem",
                    background: "#dedad1",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      color: "#d4500a",
                      letterSpacing: "0.08em",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    {categoryPrefix[category] ?? "00"}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.08em",
                      color: "#0a0a0a",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {category.toUpperCase()}
                  </span>
                </div>

                {/* Skills */}
                <div
                  style={{
                    padding: "1.2rem 1.5rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    alignContent: "flex-start",
                  }}
                >
                  {items.map((skill) => (
                    <span key={skill} className="b-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
