"use client";

import { projects } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: PROJECTS_LOG</span>
          <span className="line" />
          <span className="num">003</span>
        </div>

        {/* Subtitle */}
        <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "#6b6b6b",
              letterSpacing: "0.04em",
              maxWidth: "480px",
              lineHeight: 1.8,
            }}
          >
            End-to-end systems I&apos;ve built — click any card to read the full case study.
          </p>
          <Link
            href="/projects"
            target="_blank"
            rel="noreferrer"
            id="view-all-projects-btn"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "#0a0a0a",
              textDecoration: "none",
              border: "1px solid #0a0a0a",
              padding: "6px 14px",
              boxShadow: "2px 2px 0px #0a0a0a",
              transition: "color 0.15s, background 0.15s",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#d4500a";
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.borderColor = "#d4500a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
              (e.currentTarget as HTMLElement).style.borderColor = "#0a0a0a";
            }}
          >
            ■ VIEW ALL PROJECTS ↗
          </Link>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-0" style={{ border: "1px solid #0a0a0a" }}>
          {projects.map((project, index) => (
            <div
              key={project.slug}
              style={{
                borderRight:
                  index % 2 === 0 ? "1px solid #0a0a0a" : "none",
                borderBottom:
                  index < projects.length - 2 || (projects.length % 2 !== 0 && index < projects.length - 1)
                    ? "1px solid #0a0a0a"
                    : "none",
                display: "flex",
                flexDirection: "column",
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
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#d4500a",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#6b6b6b",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        border: "1px solid #6b6b6b",
                        display: "inline-block",
                      }}
                    />
                  </div>
                  <span style={{ color: "#6b6b6b" }}>
                    PROJECT_{String(index + 1).padStart(2, "0")}.MD
                  </span>
                </div>
                <span style={{ color: "#d4500a" }}>
                  {String(index + 1).padStart(3, "0")}
                </span>
              </div>

              {/* Content */}
              <div
                className="flex flex-col flex-1"
                style={{ padding: "1.8rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    lineHeight: 1.3,
                    marginBottom: "0.75rem",
                    color: "#0a0a0a",
                  }}
                >
                  {project.title}
                </h3>

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
                  {project.description}
                </p>

                {/* Impact */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "#d4500a",
                    lineHeight: 1.7,
                    marginBottom: "1.2rem",
                    borderLeft: "2px solid #d4500a",
                    paddingLeft: "12px",
                  }}
                >
                  {project.impact}
                </p>

                {/* Tech tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="b-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span
                      className="b-tag"
                      style={{ color: "#d4500a", borderColor: "#d4500a" }}
                    >
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    id={`view-project-${project.slug}`}
                    className="btn-brutalist"
                    style={{ flex: 1 }}
                  >
                    <span className="btn-tab">→</span>
                    <span className="btn-body">CASE STUDY</span>
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    style={{
                      border: "1px solid #0a0a0a",
                      padding: "12px 14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0a0a0a",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#0a0a0a";
                      (e.currentTarget as HTMLElement).style.color = "#e8e5de";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
                    }}
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
