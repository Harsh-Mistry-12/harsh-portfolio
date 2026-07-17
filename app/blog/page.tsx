"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs as fallbackBlogs } from "@/lib/data";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function BlogCard({
  blog,
  index,
}: {
  blog: (typeof fallbackBlogs)[0];
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
          background: "#dedad1",
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
            objectFit: "contain",
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
        {/* Meta row */}
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
          <span>Published: {formatDate(blog.publishedAt)}</span>
          {blog.images.length > 1 && (
            <span style={{ color: "#d4500a" }}>Images: {blog.images.length}</span>
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
        <h2
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
        </h2>

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
          id={`blog-listing-read-${blog.slug}`}
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

export default function BlogListingPage() {
  const [blogsList, setBlogsList] = useState<typeof fallbackBlogs>(fallbackBlogs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setBlogsList(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dev.to blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
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
              letterSpacing: "0.12em",
              color: "#6b6b6b",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            ■ BLOG /{" "}
            <span style={{ color: "#d4500a" }}>
              {loading ? "..." : `${blogsList.length} ARTICLES`}
            </span>
          </span>

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
          <span className="label">// SECTION: ALL_ARTICLES</span>
          <span className="line" />
          <span className="num">
            {loading ? "..." : String(blogsList.length).padStart(3, "0")}
          </span>
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
            BLOG //<br />
            <span style={{ color: "#d4500a" }}>FULL ARCHIVE</span>
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
            {loading ? "Loading articles archive from dev.to..." : "Technical deep-dives, production lessons, and open-source stories from building real systems. Click any card to read the full article."}
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(16px, 3vw, 28px)",
          }}
        >
          {blogsList.map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} />
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
        HM // DEV &nbsp;·&nbsp; BLOG ARCHIVE &nbsp;·&nbsp;{" "}
        <span style={{ color: "#d4500a" }}>
          {loading ? "..." : `${blogsList.length} ARTICLES`}
        </span>
      </footer>
    </div>
  );
}
