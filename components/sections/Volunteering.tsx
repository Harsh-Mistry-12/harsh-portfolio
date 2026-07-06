"use client";

import { volunteering } from "@/lib/data";

export const Volunteering = () => {
  return (
    <section id="volunteering" className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: COMMUNITY_LOG</span>
          <span className="line" />
          <span className="num">006</span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "#6b6b6b",
            letterSpacing: "0.04em",
            lineHeight: 1.8,
            marginBottom: "2rem",
            maxWidth: "560px",
          }}
        >
          Giving back through open-source contributions, tech events, and community knowledge sharing.
        </p>

        {/* Grid of bordered cards */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3"
          style={{ border: "1px solid #0a0a0a" }}
        >
          {volunteering.map((item, index) => (
            <div
              key={index}
              style={{
                borderRight:
                  (index + 1) % 3 !== 0 && index !== volunteering.length - 1
                    ? "1px solid #0a0a0a"
                    : "none",
                borderBottom:
                  index < volunteering.length - (volunteering.length % 3 === 0 ? 3 : volunteering.length % 3)
                    ? "1px solid #0a0a0a"
                    : "none",
                padding: "1.8rem",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                  {item.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      color: "#d4500a",
                      marginBottom: "4px",
                    }}
                  >
                    {item.role.toUpperCase()}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.02em",
                      color: "#0a0a0a",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.organization}
                  </h3>
                </div>
              </div>

              {/* Period */}
              <span className="b-tag" style={{ fontSize: "0.6rem", padding: "3px 8px", marginBottom: "12px", display: "inline-flex" }}>
                {item.period}
              </span>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  color: "#6b6b6b",
                  lineHeight: 1.8,
                  letterSpacing: "0.02em",
                  marginTop: "12px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
