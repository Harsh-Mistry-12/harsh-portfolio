"use client";

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#e8e5de",
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Nav bar */}
      <div
        style={{
          borderBottom: "1px solid #0a0a0a",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#e8e5de",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <Link
          href="/#projects"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "#6b6b6b",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          ← BACK TO PROJECTS /
        </Link>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "#d4500a",
          }}
        >
          PROJECT_{String(idx + 1).padStart(2, "0")}.MD
        </span>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              color: "#d4500a",
              marginBottom: "0.75rem",
            }}
          >
            // PROJECT: {String(idx + 1).padStart(3, "0")}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              color: "#0a0a0a",
              marginBottom: "1.5rem",
            }}
          >
            {project.title}
          </h1>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.5rem" }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="b-tag"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-brutalist"
            >
              <span className="btn-tab">
                <FaGithub size={14} />
              </span>
              <span className="btn-body">VIEW ON GITHUB</span>
            </a>
            {project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn-brutalist"
              >
                <span className="btn-tab">↗</span>
                <span className="btn-body">LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>

        {/* Bordered content area */}
        <div style={{ border: "1px solid #0a0a0a" }}>
          {/* Overview */}
          <div style={{ borderBottom: "1px solid #0a0a0a" }}>
            <div
              style={{
                borderBottom: "1px solid #0a0a0a",
                padding: "10px 16px",
                background: "#dedad1",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#6b6b6b",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>OVERVIEW.MD</span>
            </div>
            <div style={{ padding: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "#6b6b6b",
                  lineHeight: 1.9,
                  letterSpacing: "0.02em",
                }}
              >
                {project.longDescription}
              </p>
            </div>
          </div>

          {/* Detail sections */}
          {project.details.map((section, i) => (
            <div
              key={i}
              style={{
                borderBottom: i < project.details.length - 1 ? "1px solid #0a0a0a" : "none",
              }}
            >
              <div
                style={{
                  borderBottom: "1px solid #0a0a0a",
                  padding: "10px 16px",
                  background: "#dedad1",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "#6b6b6b",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#d4500a" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{section.heading.toUpperCase()}</span>
              </div>
              <div style={{ padding: "2rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "#6b6b6b",
                    lineHeight: 1.9,
                    letterSpacing: "0.02em",
                  }}
                >
                  {section.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact callout */}
        <div
          style={{
            marginTop: "1.5rem",
            border: "1px solid #d4500a",
            padding: "2rem",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              color: "#d4500a",
              marginBottom: "1rem",
            }}
          >
            ■ KEY_IMPACT
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "#0a0a0a",
              lineHeight: 1.9,
              letterSpacing: "0.02em",
            }}
          >
            {project.impact}
          </p>
        </div>

        {/* Bottom nav */}
        <div
          style={{
            marginTop: "2rem",
            borderTop: "1px solid #0a0a0a",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <Link href="/#projects" className="btn-brutalist">
            <span className="btn-tab">←</span>
            <span className="btn-body" style={{ background: "transparent", color: "#0a0a0a" }}>
              ALL PROJECTS
            </span>
          </Link>
          <Link href="/#contact" className="btn-brutalist">
            <span className="btn-tab">→</span>
            <span className="btn-body">LET&apos;S WORK TOGETHER</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
