"use client";

import { aboutMe, personalInfo } from "@/lib/data";
import { useEffect, useState } from "react";

export const About = () => {
  const [uptime, setUptime] = useState("000d 00h 00m 00s");

  useEffect(() => {
    // Start date — April 2025 when professional career began
    const start = new Date("2023-08-01T00:00:00Z");
    const tick = () => {
      const diff = Math.floor((Date.now() - start.getTime()) / 1000);
      const d = Math.floor(diff / 86400);
      const h = Math.floor((diff % 86400) / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;
      setUptime(
        `${String(d).padStart(3, "0")}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { key: "HACKATHONS_ENTERED", value: "21" },
    { key: "TEAMS_LED", value: "8" },
    { key: "PROJECTS_SHIPPED", value: "20+" },
    { key: "YEARS_EXPERIENCE", value: "3+" },
  ];

  return (
    <section id="about" className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: ABOUT_DEV</span>
          <span className="line" />
          <span className="num">001</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-0" style={{ border: "1px solid #0a0a0a" }}>
          {/* Left: Manifest */}
          <div style={{ borderBottom: "1px solid #0a0a0a" }} className="lg:border-b-0 lg:border-r lg:border-r-[#0a0a0a]">
            {/* Title bar */}
            <div
              style={{
                borderBottom: "1px solid #0a0a0a",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#6b6b6b",
                background: "#dedad1",
              }}
            >
              <span>MANIFEST.MD</span>
              <span>V3.1.0</span>
            </div>

            <div className="p-8">
              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  marginBottom: "0.5rem",
                }}
              >
                BUILT FOR
              </h2>
              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.2,
                  color: "#d4500a",
                  marginBottom: "2rem",
                }}
              >
                RAW DATA.
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#6b6b6b",
                  lineHeight: 1.9,
                  marginBottom: "1.2rem",
                }}
              >
                {aboutMe.background}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#6b6b6b",
                  lineHeight: 1.9,
                  marginBottom: "1.2rem",
                }}
              >
                {aboutMe.journey}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "#6b6b6b",
                  lineHeight: 1.9,
                }}
              >
                {aboutMe.aspirations}
              </p>

              {/* Uptime */}
              <div
                style={{
                  borderTop: "1px solid #0a0a0a",
                  marginTop: "2rem",
                  paddingTop: "1.2rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#d4500a",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                <span style={{ color: "#6b6b6b" }}>CAREER UPTIME:</span>
                <span style={{ color: "#d4500a" }}>{uptime}</span>
              </div>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div>
            {/* Title bar */}
            <div
              style={{
                borderBottom: "1px solid #0a0a0a",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#6b6b6b",
                background: "#dedad1",
              }}
            >
              <span>METRICS.LIVE</span>
              <span style={{ color: "#d4500a" }}>■</span>
            </div>

            <div className="grid grid-cols-2" style={{ height: "calc(100% - 40px)" }}>
              {stats.map((s, i) => (
                <div
                  key={s.key}
                  style={{
                    padding: "2rem",
                    borderRight: i % 2 === 0 ? "1px solid #0a0a0a" : "none",
                    borderBottom: i < 2 ? "1px solid #0a0a0a" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "#0a0a0a",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: "#6b6b6b",
                      marginTop: "8px",
                    }}
                  >
                    {s.key}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
