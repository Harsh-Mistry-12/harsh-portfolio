"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

/* ── Animated "Look Into Project" button ──────────────────────────────────── */
function ProjectButton({ href, slug }: { href: string; slug: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      id={`projects-page-btn-${slug}`}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        textDecoration: "none",
        border: "1px solid #0a0a0a",
        padding: "13px 20px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "color 0.35s ease",
        color: hovered ? "#fff" : "#0a0a0a",
        borderColor: "#0a0a0a",
        boxShadow: "3px 3px 0px #0a0a0a",
      }}
    >
      {/* Slide-fill animation layer */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "#d4500a",
          transform: hovered ? "translateX(0%)" : "translateX(-101%)",
          transition: "transform 0.35s cubic-bezier(0.65,0,0.35,1)",
          zIndex: 0,
        }}
      />

      {/* Arrow */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          transform: hovered ? "translateX(0)" : "translateX(-4px)",
          opacity: hovered ? 1 : 0.5,
          transition: "transform 0.35s ease, opacity 0.35s ease",
          fontSize: "1rem",
        }}
      >
        →
      </span>

      <span style={{ position: "relative", zIndex: 1 }}>
        LOOK INTO PROJECT
      </span>
    </Link>
  );
}

/* ── Project Card ─────────────────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <article
      style={{
        border: "1px solid #0a0a0a",
        background: "#e8e5de",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        boxShadow: "3px 3px 0px #0a0a0a",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "6px 6px 0px #0a0a0a";
        (e.currentTarget as HTMLElement).style.transform = "translate(-2px,-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "3px 3px 0px #0a0a0a";
        (e.currentTarget as HTMLElement).style.transform = "translate(0,0)";
      }}
    >
      {/* Terminal title bar */}
      <div
        style={{
          borderBottom: "1px solid #0a0a0a",
          padding: "8px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#dedad1",
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.1em",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ display: "flex", gap: "4px" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#d4500a", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6b6b6b", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", border: "1px solid #6b6b6b", display: "inline-block" }} />
          </div>
          <span style={{ color: "#6b6b6b" }}>
            PROJECT_{String(index + 1).padStart(2, "0")}.MD
          </span>
        </div>
        <span style={{ color: "#d4500a" }}>
          {String(index + 1).padStart(3, "0")}
        </span>
      </div>

      {/* Cover image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          borderBottom: "1px solid #0a0a0a",
          cursor: "pointer",
        }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          style={{
            objectFit: "cover",
            transform: imgHovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.5s ease",
            filter: imgHovered ? "brightness(0.85)" : "brightness(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(212,80,10,0.18) 0%, transparent 60%)",
            opacity: imgHovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>

      {/* Body */}
      <div
        style={{
          padding: "1.2rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: 1.3,
            color: "#0a0a0a",
            marginBottom: "0.6rem",
          }}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "#6b6b6b",
            lineHeight: 1.8,
            marginBottom: "1rem",
            flex: 1,
          }}
        >
          {project.longDescription || project.description}
        </p>

        {/* Tech tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            marginBottom: "1.2rem",
          }}
        >
          {project.technologies.slice(0, 6).map((tech) => (
            <span key={tech} className="b-tag" style={{ fontSize: "0.6rem" }}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span
              className="b-tag"
              style={{ color: "#d4500a", borderColor: "#d4500a", fontSize: "0.6rem" }}
            >
              +{project.technologies.length - 6}
            </span>
          )}
        </div>

        {/* CTA Button — full width on all screen sizes */}
        <ProjectButton
          href={`/projects/${project.slug}`}
          slug={project.slug}
        />
      </div>
    </article>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "#e8e5de",
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          fontFamily: "var(--font-mono)",
        }}
      >
        {/* ── Sticky header ── */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "#e8e5de",
            border: "1px solid #0a0a0a",
            margin: "6px",
            padding: "0 2px",
            boxShadow: "2px 2px 0px rgba(10,10,10,0.25)",
          }}
        >
          <nav
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 12px",
              height: "52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "8px",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                textDecoration: "none",
                color: "#0a0a0a",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  border: "1px solid #0a0a0a",
                  padding: "3px 7px",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                }}
              >
                HM
              </span>
              <span style={{ color: "#d4500a" }} className="hidden sm:inline">
                // DEV
              </span>
            </Link>

            {/* Page title — hidden on very small screens */}
            <span
              className="hidden sm:inline"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                color: "#6b6b6b",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              ■ PROJECTS /{" "}
              <span style={{ color: "#d4500a" }}>{projects.length} LOADED</span>
            </span>

            {/* Back button */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#6b6b6b",
                border: "1px solid #6b6b6b",
                padding: "5px 10px",
                transition: "color 0.15s, border-color 0.15s",
                flexShrink: 0,
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
                (e.currentTarget as HTMLElement).style.borderColor = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#6b6b6b";
                (e.currentTarget as HTMLElement).style.borderColor = "#6b6b6b";
              }}
            >
              ← BACK
            </Link>
          </nav>
        </header>

        {/* ── Content ── */}
        <main
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "clamp(20px, 4vw, 48px) clamp(16px, 4vw, 24px) 80px",
          }}
        >
          {/* Section heading */}
          <div className="section-divider" style={{ marginBottom: "2rem" }}>
            <span className="label">// SECTION: ALL_PROJECTS</span>
            <span className="line" />
            <span className="num">{String(projects.length).padStart(3, "0")}</span>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "clamp(1.6rem, 6vw, 2.8rem)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                lineHeight: 1.2,
                color: "#0a0a0a",
                marginBottom: "0.8rem",
              }}
            >
              PROJECTS //<br />
              <span style={{ color: "#d4500a" }}>FULL LOG</span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#6b6b6b",
                lineHeight: 1.8,
                maxWidth: "560px",
              }}
            >
              End-to-end systems I&apos;ve shipped — from AI-powered trading
              platforms to open-source Python packages. Click any card to read
              the full case study.
            </p>
          </div>

          {/* Cards grid — 1 col on mobile, 2 on sm, 3 on xl */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(16px, 3vw, 28px)",
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </main>

        {/* ── Footer strip ── */}
        <footer
          style={{
            borderTop: "1px solid #0a0a0a",
            padding: "16px clamp(16px, 4vw, 24px)",
            textAlign: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "#6b6b6b",
          }}
        >
          HM // DEV &nbsp;·&nbsp; PROJECTS LOG &nbsp;·&nbsp;{" "}
          <span style={{ color: "#d4500a" }}>{projects.length} ENTRIES</span>
        </footer>
      </div>
    </>
  );
}
