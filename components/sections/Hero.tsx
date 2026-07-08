"use client";

import { personalInfo } from "@/lib/data";
import { useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const leftNodes = ["TRAIN", "PACKAGE", "VERSION"];
const rightNodes = ["ROUTE", "DEPLOY", "OBSERVE"];

export const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        style={{ maxWidth: "1280px" }}
        className="mx-auto px-6 w-full py-8"
      >
        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex-1 min-w-0">

            {/* Big name */}
            <h1
              className="font-bold leading-none tracking-tight select-none"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
                color: "#0a0a0a",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                marginBottom: "0.1em",
              }}
            >
              HARSH.
            </h1>
            <h1
              className="font-bold leading-none tracking-tight select-none"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(3.2rem, 8vw, 7.5rem)",
                color: "#0a0a0a",
                letterSpacing: "-0.02em",
                lineHeight: 1.0,
                marginBottom: "1.6rem",
              }}
            >
              MISTRY.
            </h1>

            {/* Node diagram */}
            <div
              className="flex items-center gap-2 md:gap-6 mb-6 overflow-x-auto"
              style={{ maxWidth: "520px" }}
            >
              {/* Left nodes */}
              <div className="flex flex-col gap-2">
                {leftNodes.map((n) => (
                  <div
                    key={n}
                    className="b-tag"
                    style={{ fontSize: "0.55rem", padding: "4px 10px", letterSpacing: "0.1em" }}
                  >
                    {n}
                  </div>
                ))}
              </div>

              {/* SVG lines */}
              <svg width="60" height="90" viewBox="0 0 60 90" style={{ flexShrink: 0 }}>
                {[15, 45, 75].map((y, i) => (
                  <g key={i}>
                    <line x1="0" y1={y} x2="30" y2="45" stroke="#b0ada6" strokeWidth="0.8" />
                    <circle cx="6" cy={y} r="2.5" fill="#d4500a" opacity="0.85" />
                  </g>
                ))}
              </svg>

              {/* Centre asterisk */}
              <div
                style={{
                  width: "52px", height: "52px",
                  border: "1px solid #0a0a0a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "#dedad1", flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                  <line x1="11" y1="2" x2="11" y2="20" stroke="#d4500a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="2" y1="11" x2="20" y2="11" stroke="#d4500a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              {/* SVG lines right */}
              <svg width="60" height="90" viewBox="0 0 60 90" style={{ flexShrink: 0 }}>
                {[15, 45, 75].map((y, i) => (
                  <g key={i}>
                    <line x1="30" y1="45" x2="60" y2={y} stroke="#b0ada6" strokeWidth="0.8" />
                    <circle cx="54" cy={y} r="2.5" fill="#d4500a" opacity="0.85" />
                  </g>
                ))}
              </svg>

              {/* Right nodes */}
              <div className="flex flex-col gap-2">
                {rightNodes.map((n) => (
                  <div
                    key={n}
                    className="b-tag"
                    style={{ fontSize: "0.55rem", padding: "4px 10px", letterSpacing: "0.1em" }}
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>

            {/* Designation */}
            <h2
              className="font-bold leading-none tracking-tight select-none"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(1.1rem, 3vw, 2.2rem)",
                color: "#0a0a0a",
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
              }}
            >
              SOFTWARE ENGINEER &amp;
            </h2>
            <h2
              className="font-bold leading-none tracking-tight select-none"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(1.1rem, 3vw, 2.2rem)",
                color: "#d4500a",
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              DATA ARCHITECT.
            </h2>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#6b6b6b",
                letterSpacing: "0.03em",
                lineHeight: "1.9",
                marginBottom: "2rem",
                maxWidth: "480px",
              }}
            >
              {personalInfo.tagline}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                id="hero-view-projects-btn"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-brutalist"
              >
                <span className="btn-tab">→</span>
                <span className="btn-body">VIEW MY WORK</span>
              </button>
              <a
                id="hero-resume-btn"
                href="/Harsh Mistry Resume.pdf"
                download="Harsh Mistry Resume.pdf"
                className="btn-brutalist"
                style={{ display: "inline-flex", textDecoration: "none" }}
              >
                <span className="btn-tab">↓</span>
                <span className="btn-body">DOWNLOAD RESUME</span>
              </a>
              <button
                id="hero-contact-btn"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-brutalist"
                style={{ border: "1px solid #0a0a0a" }}
              >
                <span
                  className="btn-tab"
                  style={{ background: "transparent", color: "#0a0a0a" }}
                >
                  ↓
                </span>
                <span
                  className="btn-body"
                  style={{ background: "transparent", color: "#0a0a0a" }}
                >
                  GET IN TOUCH
                </span>
              </button>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-8"
              style={{ borderTop: "1px solid rgba(0,0,0,0.15)", paddingTop: "1.2rem" }}
            >
              {[
                { label: "HACKATHONS", value: "21+" },
                { label: "EXPERIENCE", value: "3+ YRS" },
                { label: "PROJECTS", value: "20+" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
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
                      fontSize: "0.55rem",
                      letterSpacing: "0.12em",
                      color: "#6b6b6b",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}

              <div
                style={{
                  width: "1px",
                  background: "rgba(0,0,0,0.15)",
                  alignSelf: "stretch",
                  margin: "0 4px",
                }}
              />

              {/* Location */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    color: "#6b6b6b",
                    letterSpacing: "0.06em",
                  }}
                >
                  <FaMapMarkerAlt size={10} style={{ marginRight: "4px", color: "#d4500a", flexShrink: 0 }} />
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* ══ RIGHT COLUMN — Photo ══ */}
          <div
            className="relative flex-shrink-0 mx-auto lg:mx-0"
            style={{
              width: "clamp(160px, 50vw, 300px)",
            }}
          >
            {/* "Open to Opportunities" badge — top */}
            <div
              style={{
                position: "absolute",
                top: "-18px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#0a0a0a",
                color: "#e8e5de",
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.12em",
                padding: "6px 14px",
                whiteSpace: "nowrap",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  width: "6px", height: "6px",
                  borderRadius: "50%",
                  background: "#d4500a",
                  display: "inline-block",
                  flexShrink: 0,
                  animation: "blink 1.4s step-start infinite",
                }}
              />
              OPEN TO OPPORTUNITIES
            </div>

            {/* Photo frame */}
            <div
              style={{
                border: "2px solid #0a0a0a",
                width: "100%",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/photo.jpg"
                alt="Harsh Mistry"
                fill
                sizes="(max-width: 1024px) 200px, 300px"
                className="object-cover object-top"
                priority
              />

              {/* Bottom label overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  background: "rgba(10,10,10,0.90)",
                  padding: "10px 14px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.14em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#ffffff", fontWeight: 700 }}>
                  HARSH.MISTRY
                  <span style={{ color: "#d4500a", fontWeight: 700 }}>
                    {" "} // DEV
                  </span>
                </span>
              </div>
            </div>

            {/* Corner decoration — bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: "-10px", right: "-10px",
                width: "40px", height: "40px",
                border: "2px solid #d4500a",
                pointerEvents: "none",
              }}
            />
            {/* Corner decoration — top left */}
            <div
              style={{
                position: "absolute",
                top: "-10px", left: "-10px",
                width: "40px", height: "40px",
                border: "2px solid #0a0a0a",
                pointerEvents: "none",
                zIndex: 5,
              }}
            />
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.55rem",
          letterSpacing: "0.14em",
          color: "#6b6b6b",
          animation: "blink 2s step-start infinite",
        }}
      >
        [ SCROLL DOWN ]
      </div>
    </section>
  );
};
