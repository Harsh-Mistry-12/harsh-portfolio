"use client";

import { personalInfo } from "@/lib/data";

const techStack = [
  "PYTHON", "FASTAPI", "REACT", "NEXT.JS",
  "MACHINE LEARNING", "DATA ENGINEERING",
  "MONGODB", "POSTGRESQL", "AUTOMATION", "ETL PIPELINES",
];

export const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #0a0a0a",
        padding: "1.5rem 0",
        fontFamily: "var(--font-mono)",
        fontSize: "0.65rem",
        letterSpacing: "0.08em",
      }}
    >
      {/* Ticker bar */}
      <div
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.15)",
          marginBottom: "1.5rem",
          overflow: "hidden",
          padding: "8px 0",
          background: "#dedad1",
        }}
      >
        <div className="ticker-track">
          {[...techStack, ...techStack].map((t, i) => (
            <span
              key={i}
              style={{
                color: "#6b6b6b",
                padding: "0 1.5rem",
                letterSpacing: "0.12em",
                fontSize: "0.6rem",
              }}
            >
              {t} /
            </span>
          ))}
        </div>
      </div>

      <div
        style={{ maxWidth: "1280px" }}
        className="mx-auto px-6 flex flex-wrap items-center justify-between gap-4"
      >
        <div>
          <span style={{ color: "#0a0a0a", fontWeight: 700 }}>HARSH.MISTRY</span>
          <span style={{ color: "#6b6b6b", marginLeft: "12px" }}>
            (C) {new Date().getFullYear()} — ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Social links */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          {[
            { label: "GITHUB", href: personalInfo.github },
            { label: "LINKEDIN", href: personalInfo.linkedin },
            { label: "EMAIL", href: `mailto:${personalInfo.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "EMAIL" ? "_blank" : undefined}
              rel={label !== "EMAIL" ? "noreferrer" : undefined}
              style={{
                color: "#6b6b6b",
                textDecoration: "none",
                transition: "color 0.15s",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#0a0a0a")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#6b6b6b")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
