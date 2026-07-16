"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/data";

/* ── helpers ───────────────────────────────────────────────────────────────── */
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* ── Blog Card ─────────────────────────────────────────────────────────────── */
function BlogCard({
  blog,
  index,
}: {
  blog: (typeof blogs)[0];
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
            BLOG_{String(index + 1).padStart(2, "0")}.MD
          </span>
        </div>
        <span style={{ color: "#d4500a" }}>{blog.readTime.toUpperCase()}</span>
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
          flexShrink: 0,
        }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <Image
          src={blog.coverImage}
          alt={blog.title}
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
          padding: "1.4rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "0.8rem",
        }}
      >
        {/* Meta row: date + images count */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            color: "#6b6b6b",
            letterSpacing: "0.08em",
          }}
        >
          <span>📅 {formatDate(blog.publishedAt)}</span>
          {blog.images.length > 1 && (
            <span style={{ color: "#d4500a" }}>🖼 {blog.images.length} images</span>
          )}
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
          {blog.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="b-tag"
              style={{ fontSize: "0.58rem", borderColor: "#d4500a", color: "#d4500a" }}
            >
              #{tag}
            </span>
          ))}
          {blog.tags.length > 4 && (
            <span className="b-tag" style={{ fontSize: "0.58rem", color: "#6b6b6b" }}>
              +{blog.tags.length - 4}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: 1.35,
            color: "#0a0a0a",
            margin: 0,
          }}
        >
          {blog.title}
        </h3>

        {/* Short description */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "#6b6b6b",
            lineHeight: 1.8,
            flex: 1,
            margin: 0,
          }}
        >
          {blog.shortDescription}
        </p>

        {/* CTA */}
        <Link
          href={`/blog/${blog.slug}`}
          id={`blog-card-read-${blog.slug}`}
          className="btn-brutalist"
          style={{ textDecoration: "none" }}
        >
          <span className="btn-tab">→</span>
          <span className="btn-body">READ ARTICLE</span>
        </Link>
      </div>
    </article>
  );
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: BLOG_FEED</span>
          <span className="line" />
          <span className="num">00{blogs.length}</span>
        </div>

        {/* Header row */}
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
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
            Technical write-ups, lessons from production systems, and community
            stories — click any card to read the full article.
          </p>
          <Link
            href="/blog"
            id="view-all-blogs-btn"
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
            ■ VIEW ALL POSTS ↗
          </Link>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(16px, 3vw, 28px)",
          }}
        >
          {blogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
