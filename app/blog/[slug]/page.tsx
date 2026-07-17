"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import { use } from "react";

/* ── helpers ───────────────────────────────────────────────────────────────── */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function renderInlineMarkdown(text: string) {
  if (!text) return "";
  
  // Regex to split on link markdown [text](url), bold **text**, inline code `code`, and italic *text*
  const regex = /(\[.*?\]\(.*?\))|(\*\*.*?\*\*)|(`.*?`)|(\*.*?\*)/g;
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (!part) return null;
    
    // Link: [text](url)
    if (part.startsWith("[") && part.includes("](")) {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, linkText, linkUrl] = match;
        return (
          <a
            key={index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#d4500a",
              textDecoration: "underline",
              fontWeight: 700,
            }}
          >
            {linkText}
          </a>
        );
      }
    }
    
    // Bold: **text**
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} style={{ fontWeight: 700, color: "#0a0a0a" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    
    // Inline code: `code`
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          style={{
            fontFamily: "var(--font-mono)",
            background: "#dedad1",
            padding: "2px 6px",
            fontSize: "0.9em",
            border: "1px solid #0a0a0a",
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    
    // Italic: *text*
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    
    return part;
  });
}

/* ── Image Gallery ─────────────────────────────────────────────────────────── */
function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (images.length === 0) return null;

  return (
    <div style={{ marginBottom: "2.5rem" }}>
      {/* Main image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          border: "1px solid #0a0a0a",
          boxShadow: "4px 4px 0px #0a0a0a",
          marginBottom: "12px",
          background: "#dedad1",
        }}
      >
        <Image
          src={images[activeIdx]}
          alt={`${title} — image ${activeIdx + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 860px"
          style={{ objectFit: "contain", transition: "opacity 0.3s ease" }}
          priority={activeIdx === 0}
        />
        {/* Image counter badge */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            background: "rgba(10,10,10,0.8)",
            color: "#e8e5de",
            fontFamily: "var(--font-mono)",
            fontSize: "0.58rem",
            letterSpacing: "0.08em",
            padding: "4px 10px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails ── shown only when there are multiple images */}
      {images.length > 1 && (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              aria-label={`View image ${i + 1}`}
              style={{
                position: "relative",
                width: "80px",
                height: "52px",
                border: i === activeIdx ? "2px solid #d4500a" : "1px solid #0a0a0a",
                overflow: "hidden",
                cursor: "pointer",
                flexShrink: 0,
                padding: 0,
                background: "none",
                transition: "border-color 0.15s",
                boxShadow: i === activeIdx ? "2px 2px 0px #d4500a" : "1px 1px 0px #0a0a0a",
              }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                sizes="80px"
                style={{
                  objectFit: "cover",
                  filter: i === activeIdx ? "none" : "brightness(0.65)",
                  transition: "filter 0.2s",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [blogsList, setBlogsList] = useState<any[]>([]);
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogsList(data);
          const found = data.find((b) => b.slug === slug);
          if (found) {
            setBlog(found);
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog detail:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#e8e5de",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          color: "#0a0a0a",
        }}
      >
        // LOADING POST CONTENT FROM DEV.TO...
      </div>
    );
  }

  if (!blog) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#e8e5de",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          gap: "1rem",
        }}
      >
        <span style={{ fontSize: "1.2rem", fontWeight: 700 }}>404 // NOT FOUND</span>
        <span style={{ fontSize: "0.75rem", color: "#6b6b6b" }}>The requested article could not be loaded.</span>
        <Link href="/blog" className="btn-brutalist" style={{ textDecoration: "none" }}>
          <span className="btn-tab">←</span>
          <span className="btn-body">BACK TO ARCHIVE</span>
        </Link>
      </div>
    );
  }

  const blogIndex = blogsList.findIndex((b) => b.slug === slug);
  const prevBlog = blogIndex > 0 ? blogsList[blogIndex - 1] : null;
  const nextBlog = blogIndex < blogsList.length - 1 ? blogsList[blogIndex + 1] : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#e8e5de",
        backgroundImage:
          "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
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

          <span
            className="hidden sm:inline"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "#6b6b6b",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "320px",
            }}
          >
            ■ BLOG_{String(blogIndex + 1).padStart(2, "0")}.MD
          </span>

          <Link
            href="/blog"
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
            ← ALL POSTS
          </Link>
        </nav>
      </header>

      {/* ── Content ── */}
      <main
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "clamp(24px, 4vw, 56px) clamp(16px, 4vw, 24px) 80px",
        }}
      >
        {/* ── Meta strip ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "14px",
            marginBottom: "2rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            background: "#dedad1",
            border: "1px solid #0a0a0a",
            padding: "10px 16px",
            boxShadow: "3px 3px 0px #0a0a0a",
          }}
        >
          {/* Post number badge */}
          <span
            style={{
              background: "#d4500a",
              color: "#fff",
              padding: "4px 10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              border: "1px solid #0a0a0a",
            }}
          >
            POST #{String(blogIndex + 1).padStart(2, "0")}
          </span>

          {/* Published date */}
          <span style={{ color: "#6b6b6b" }}>
            Published: <strong style={{ color: "#0a0a0a" }}>{formatDate(blog.publishedAt)}</strong>
          </span>

          {/* Read time */}
          <span
            style={{
              border: "1px solid #0a0a0a",
              background: "#e8e5de",
              padding: "4px 10px",
              color: "#0a0a0a",
              fontWeight: 700,
            }}
          >
            {blog.readTime.toUpperCase()}
          </span>

          {/* Author */}
          <span style={{ color: "#6b6b6b" }}>
            Author: <strong style={{ color: "#0a0a0a" }}>{personalInfo.name}</strong>
          </span>

          {/* Image count */}
          {blog.images.length > 0 && (
            <span style={{ color: "#6b6b6b" }}>
              Images: <strong style={{ color: "#0a0a0a" }}>{blog.images.length}</strong>
            </span>
          )}
        </div>

        {/* ── Tags ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "1.8rem",
          }}
        >
          {blog.tags.map((tag: string) => (
            <span
              key={tag}
              className="b-tag"
              style={{ borderColor: "#d4500a", color: "#d4500a", fontSize: "0.62rem" }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* ── Title ── */}
        <h1
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: 1.25,
            color: "#0a0a0a",
            marginBottom: "1rem",
          }}
        >
          {blog.title}
        </h1>

        {/* ── Short description (lede) ── */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.82rem",
            color: "#6b6b6b",
            lineHeight: 1.85,
            borderLeft: "3px solid #d4500a",
            paddingLeft: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {blog.shortDescription}
        </p>

        {/* ── Divider ── */}
        {blog.images.length > 0 && (
          <>
            <div className="section-divider" style={{ marginBottom: "2rem" }}>
              <span className="label">// ZONE: IMAGES</span>
              <span className="line" />
              <span className="num">{String(blog.images.length).padStart(2, "0")}</span>
            </div>

            {/* ── Image gallery ── */}
            <ImageGallery images={blog.images} title={blog.title} />
          </>
        )}

        {/* ── Article divider ── */}
        <div className="section-divider" style={{ marginBottom: "2rem" }}>
          <span className="label">// CONTENT</span>
          <span className="line" />
          <span className="num">{String(blog.content.length).padStart(2, "0")}</span>
        </div>

        {/* ── Article content ── */}
        <div style={{ marginBottom: "3.5rem" }}>
          {blog.content.map((block: any, i: number) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(1rem, 3vw, 1.25rem)",
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                    lineHeight: 1.3,
                    color: "#0a0a0a",
                    margin: "2.2rem 0 0.9rem",
                    paddingBottom: "6px",
                    borderBottom: "1px solid #0a0a0a",
                  }}
                >
                  <span style={{ color: "#d4500a" }}>// </span>
                  {renderInlineMarkdown(block.text)}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "#3a3a3a",
                    lineHeight: 2,
                    marginLeft: "1.5rem",
                    listStyleType: "square",
                    marginBottom: "0.5rem",
                  }}
                >
                  {renderInlineMarkdown(block.text)}
                </li>
              );
            }
            if (block.type === "code") {
              return (
                <pre
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#0a0a0a",
                    background: "#dedad1",
                    border: "1px solid #0a0a0a",
                    padding: "1rem",
                    boxShadow: "3px 3px 0px #0a0a0a",
                    overflowX: "auto",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-all",
                    margin: "1.5rem 0",
                  }}
                >
                  <code>{block.text}</code>
                </pre>
              );
            }
            return (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "#3a3a3a",
                  lineHeight: 2,
                  marginBottom: "1.2rem",
                }}
              >
                {renderInlineMarkdown(block.text)}
              </p>
            );
          })}
        </div>

        {/* ── Hire Me CTA ── */}
        <div
          style={{
            border: "1px solid #0a0a0a",
            background: "#dedad1",
            padding: "2rem",
            marginBottom: "3rem",
            boxShadow: "4px 4px 0px #0a0a0a",
          }}
        >
          {/* Terminal bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "1.2rem",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#d4500a", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6b6b6b", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", border: "1px solid #6b6b6b", display: "inline-block" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                color: "#6b6b6b",
                marginLeft: "6px",
              }}
            >
              HIRE_ME.SH
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1rem, 3vw, 1.3rem)",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "#0a0a0a",
              marginBottom: "0.6rem",
            }}
          >
            Like what you read?
            <span style={{ color: "#d4500a" }}> Let&#39;s build something.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "#6b6b6b",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              maxWidth: "520px",
            }}
          >
            I&#39;m {personalInfo.name} — a {personalInfo.title} based in{" "}
            {personalInfo.location}. I take on backend, data engineering, ML,
            and automation contracts. If you have a problem worth solving, I want
            to hear about it.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={`mailto:${personalInfo.email}`}
              id="blog-hire-me-btn"
              className="btn-brutalist"
              style={{ textDecoration: "none" }}
            >
              <span className="btn-tab">→</span>
              <span className="btn-body">HIRE ME</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              id="blog-linkedin-btn"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                color: "#6b6b6b",
                border: "1px solid #b0ada6",
                padding: "12px 18px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
                (e.currentTarget as HTMLElement).style.borderColor = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#6b6b6b";
                (e.currentTarget as HTMLElement).style.borderColor = "#b0ada6";
              }}
            >
              ↗ LINKEDIN
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              id="blog-github-btn"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                color: "#6b6b6b",
                border: "1px solid #b0ada6",
                padding: "12px 18px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#0a0a0a";
                (e.currentTarget as HTMLElement).style.borderColor = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#6b6b6b";
                (e.currentTarget as HTMLElement).style.borderColor = "#b0ada6";
              }}
            >
              ↗ GITHUB
            </a>
          </div>
        </div>

        {/* ── Prev / Next Navigation ── */}
        {(prevBlog || nextBlog) && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: prevBlog && nextBlog ? "1fr 1fr" : "1fr",
              gap: "12px",
              marginBottom: "2rem",
            }}
          >
            {prevBlog && (
              <Link
                href={`/blog/${prevBlog.slug}`}
                id={`blog-prev-${prevBlog.slug}`}
                style={{
                  textDecoration: "none",
                  border: "1px solid #b0ada6",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  transition: "border-color 0.15s, background 0.15s",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#0a0a0a";
                  (e.currentTarget as HTMLElement).style.background = "#dedad1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#b0ada6";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    color: "#d4500a",
                  }}
                >
                  ← PREVIOUS
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1.35,
                  }}
                >
                  {prevBlog.title}
                </span>
              </Link>
            )}
            {nextBlog && (
              <Link
                href={`/blog/${nextBlog.slug}`}
                id={`blog-next-${nextBlog.slug}`}
                style={{
                  textDecoration: "none",
                  border: "1px solid #b0ada6",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  alignItems: "flex-end",
                  textAlign: "right",
                  transition: "border-color 0.15s, background 0.15s",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#0a0a0a";
                  (e.currentTarget as HTMLElement).style.background = "#dedad1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#b0ada6";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    color: "#d4500a",
                  }}
                >
                  NEXT →
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1.35,
                  }}
                >
                  {nextBlog.title}
                </span>
              </Link>
            )}
          </div>
        )}
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
        HM // DEV &nbsp;·&nbsp; {blog.title.slice(0, 40)}&hellip; &nbsp;·&nbsp;{" "}
        <span style={{ color: "#d4500a" }}>{blog.readTime.toUpperCase()}</span>
      </footer>
    </div>
  );
}
