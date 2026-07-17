"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { creativeWorks, personalInfo } from "@/lib/data";
import type { CreativeCategory } from "@/lib/data";

/* ── constants ─────────────────────────────────────────────────────────────── */
const CATEGORIES: { id: CreativeCategory | "all"; label: string; icon: string; desc: string }[] = [
  { id: "all",          label: "ALL WORK",         icon: "◈", desc: "Everything" },
  { id: "photography",  label: "PHOTOGRAPHY",       icon: "◉", desc: "Event & community photography" },
  { id: "social-media", label: "SOCIAL MEDIA",      icon: "◎", desc: "Content created for platforms" },
  { id: "graphics",     label: "COMMUNITY GRAPHICS", icon: "◆", desc: "Branding & design assets" },
];

const CATEGORY_ACCENT: Record<string, string> = {
  photography:  "#d4500a",
  "social-media": "#2563eb",
  graphics:     "#7c3aed",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/* ── Lightbox ──────────────────────────────────────────────────────────────── */
function Lightbox({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(10,10,10,0.92)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          width: "100%",
          background: "#0a0a0a",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 0 60px rgba(0,0,0,0.8)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 14px",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
            color: "#888",
          }}
        >
          <span>{title.slice(0, 50)}{title.length > 50 ? "…" : ""}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "#d4500a" }}>{idx + 1} / {images.length}</span>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                color: "#888",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                padding: "2px 6px",
              }}
              aria-label="Close lightbox"
            >
              ✕ CLOSE
            </button>
          </div>
        </div>

        {/* Image */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#0a0a0a" }}>
          {/* Part indicator tag */}
          {(() => {
            const path = images[idx] || "";
            let tag = "";
            let tagColor = "#d4500a";
            if (path.includes("/photography/")) {
              tag = "PHOTOGRAPHY";
              tagColor = "#d4500a";
            } else if (path.includes("/graphics-design/")) {
              tag = "GRAPHICS DESIGN";
              tagColor = "#7c3aed";
            }

            if (!tag) return null;

            return (
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  zIndex: 10,
                  background: tagColor,
                  color: "#fff",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.55rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "4px 10px",
                  border: "1px solid #000",
                  boxShadow: "2px 2px 0px #000",
                }}
              >
                {tag}
              </div>
            );
          })()}

          <Image
            src={images[idx]}
            alt={`${title} — ${idx + 1}`}
            fill
            sizes="900px"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 14px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <button
              onClick={prev}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#888",
                background: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "6px 14px",
                cursor: "pointer",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget).style.color = "#fff"; (e.currentTarget).style.borderColor = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget).style.color = "#888"; (e.currentTarget).style.borderColor = "rgba(255,255,255,0.15)"; }}
            >
              ← PREV
            </button>

            {/* Dot indicators */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to image ${i + 1}`}
                  style={{
                    width: i === idx ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === idx ? "#d4500a" : "rgba(255,255,255,0.25)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#888",
                background: "none",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "6px 14px",
                cursor: "pointer",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget).style.color = "#fff"; (e.currentTarget).style.borderColor = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget).style.color = "#888"; (e.currentTarget).style.borderColor = "rgba(255,255,255,0.15)"; }}
            >
              NEXT →
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                position: "relative",
                width: "64px",
                height: "42px",
                border: i === idx ? "2px solid #d4500a" : "1px solid rgba(255,255,255,0.2)",
                overflow: "hidden",
                cursor: "pointer",
                padding: 0,
                background: "none",
                flexShrink: 0,
              }}
            >
              <Image
                src={img}
                alt={`Thumb ${i + 1}`}
                fill
                sizes="64px"
                style={{
                  objectFit: "cover",
                  filter: i === idx ? "none" : "brightness(0.45)",
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

/* ── Creative Card ─────────────────────────────────────────────────────────── */
function CreativeCard({
  work,
  index,
}: {
  work: (typeof creativeWorks)[0];
  index: number;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStart, setLightboxStart] = useState(0);
  const [imgHovered, setImgHovered] = useState(false);

  const accent = CATEGORY_ACCENT[work.category] ?? "#d4500a";

  const openLightbox = (i = 0) => {
    setLightboxStart(i);
    setLightboxOpen(true);
  };

  const categoryLabel = CATEGORIES.find((c) => c.id === work.category)?.label ?? work.category.toUpperCase();

  return (
    <>
      {lightboxOpen && (
        <Lightbox
          images={work.images}
          startIndex={lightboxStart}
          title={work.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}

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
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: accent, display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6b6b6b", display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", border: "1px solid #6b6b6b", display: "inline-block" }} />
            </div>
            <span style={{ color: "#6b6b6b" }}>
              {work.category.toUpperCase()}_{String(index + 1).padStart(2, "0")}.IMG
            </span>
          </div>
          <span style={{ color: accent, fontWeight: 700 }}>{categoryLabel}</span>
        </div>

        {/* Cover image — click to open lightbox */}
        <div
          role="button"
          tabIndex={0}
          aria-label={`Open gallery for ${work.title}`}
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            overflow: "hidden",
            borderBottom: "1px solid #0a0a0a",
            cursor: "pointer",
            flexShrink: 0,
            background: "#dedad1",
          }}
          onClick={() => openLightbox(0)}
          onKeyDown={(e) => e.key === "Enter" && openLightbox(0)}
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
        >
          <Image
            src={work.coverImage}
            alt={work.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            style={{
              objectFit: "contain",
              transform: imgHovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.5s ease",
              filter: imgHovered ? "brightness(0.78)" : "brightness(1)",
            }}
          />

          {/* Overlay UI */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10px",
              background: `linear-gradient(135deg, ${accent}22 0%, transparent 60%)`,
              opacity: imgHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            <div />
            <div
              style={{
                alignSelf: "center",
                background: "rgba(10,10,10,0.75)",
                color: "#e8e5de",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                padding: "6px 14px",
                border: `1px solid ${accent}`,
              }}
            >
              ◉ VIEW GALLERY
            </div>
          </div>

          {/* Image count badge */}
          {work.images.length > 1 && (
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "rgba(10,10,10,0.75)",
                color: "#e8e5de",
                fontFamily: "var(--font-mono)",
                fontSize: "0.55rem",
                letterSpacing: "0.08em",
                padding: "3px 8px",
                border: `1px solid ${accent}`,
              }}
            >
              🖼 {work.images.length}
            </div>
          )}
        </div>

        {/* Body */}
        <div
          style={{
            padding: "1.2rem",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: "0.65rem",
          }}
        >
          {/* Community pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.08em",
              color: accent,
              border: `1px solid ${accent}`,
              padding: "2px 8px",
              alignSelf: "flex-start",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            ◈ {work.community}
          </div>

          {/* Meta: date + platform */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: "#6b6b6b",
              letterSpacing: "0.06em",
            }}
          >
            <span>📅 {formatDate(work.date)}</span>
            {work.platform && (
              <span style={{ color: "#6b6b6b" }}>📲 {work.platform}</span>
            )}
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.82rem, 2vw, 0.95rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
              lineHeight: 1.35,
              color: "#0a0a0a",
              margin: 0,
            }}
          >
            {work.title}
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "#6b6b6b",
              lineHeight: 1.8,
              flex: 1,
              margin: 0,
            }}
          >
            {work.description}
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              paddingTop: "6px",
              borderTop: "1px solid #b0ada6",
            }}
          >
            {Object.entries(work.stats).map(([key, val]) => (
              <div
                key={key}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.06em",
                  color: "#6b6b6b",
                }}
              >
                <span style={{ color: accent, fontWeight: 700 }}>{String(val)}</span>
                {" "}{key}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {work.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="b-tag"
                style={{ fontSize: "0.55rem", borderColor: accent, color: accent }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button
              id={`creative-gallery-${work.slug}`}
              onClick={() => openLightbox(0)}
              style={{
                flex: 1,
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                border: `1px solid #0a0a0a`,
                padding: "10px 0",
                cursor: "pointer",
                background: "#0a0a0a",
                color: "#e8e5de",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.background = accent;
                (e.currentTarget).style.borderColor = accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.background = "#0a0a0a";
                (e.currentTarget).style.borderColor = "#0a0a0a";
              }}
            >
              ◉ OPEN GALLERY
            </button>

            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noreferrer"
                id={`creative-link-${work.slug}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  color: "#6b6b6b",
                  border: "1px solid #b0ada6",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "color 0.15s, border-color 0.15s",
                  flexShrink: 0,
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
                ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function CreativePage() {
  const [activeCategory, setActiveCategory] = useState<CreativeCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? creativeWorks
      : creativeWorks.filter((w) => w.category === activeCategory);

  const counts = {
    all: creativeWorks.length,
    photography: creativeWorks.filter((w) => w.category === "photography").length,
    "social-media": creativeWorks.filter((w) => w.category === "social-media").length,
    graphics: creativeWorks.filter((w) => w.category === "graphics").length,
  };

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
            ■ CREATIVE /{" "}
            <span style={{ color: "#d4500a" }}>{creativeWorks.length} WORKS</span>
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
          <span className="label">// SECTION: CREATIVE_STUDIO</span>
          <span className="line" />
          <span className="num">{String(creativeWorks.length).padStart(3, "0")}</span>
        </div>

        {/* Hero text */}
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
            CREATIVE //<br />
            <span style={{ color: "#d4500a" }}>STUDIO</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "#6b6b6b",
              lineHeight: 1.8,
              maxWidth: "580px",
            }}
          >
            Beyond the code — photography, social media content, and community
            graphics created for the organizations I volunteer with. Click any
            card to open the full image gallery.
          </p>
        </div>

        {/* ── Stat strip ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 0,
            border: "1px solid #0a0a0a",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { label: "TOTAL WORKS",   value: String(creativeWorks.length),                    accent: "#d4500a" },
            { label: "PHOTOGRAPHY",   value: String(counts.photography) + " shoots",           accent: "#d4500a" },
            { label: "SOCIAL CONTENT",value: String(counts["social-media"]) + " campaigns",    accent: "#2563eb" },
            { label: "GRAPHICS",      value: String(counts.graphics) + " projects",            accent: "#7c3aed" },
            { label: "COMMUNITIES",   value: "5 orgs",                                         accent: "#059669" },
          ].map((s, i, arr) => (
            <div
              key={s.label}
              style={{
                padding: "1rem 1.2rem",
                borderRight: i < arr.length - 1 ? "1px solid #0a0a0a" : "none",
                background: "#e8e5de",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.1em",
                  color: "#6b6b6b",
                  marginBottom: "4px",
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: s.accent,
                  letterSpacing: "0.02em",
                }}
              >
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Category filter tabs ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            border: "1px solid #0a0a0a",
            marginBottom: "2.5rem",
            overflow: "hidden",
          }}
        >
          {CATEGORIES.map((cat, i) => {
            const isActive = activeCategory === cat.id;
            const accent = cat.id === "all" ? "#d4500a" : CATEGORY_ACCENT[cat.id] ?? "#d4500a";
            return (
              <button
                key={cat.id}
                id={`creative-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  flex: "1 1 140px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  fontWeight: isActive ? 700 : 400,
                  letterSpacing: "0.1em",
                  padding: "14px 16px",
                  cursor: "pointer",
                  background: isActive ? accent : "transparent",
                  color: isActive ? "#fff" : "#6b6b6b",
                  border: "none",
                  borderRight: i < CATEGORIES.length - 1 ? "1px solid #0a0a0a" : "none",
                  transition: "background 0.15s, color 0.15s",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget).style.background = "#dedad1";
                    (e.currentTarget).style.color = "#0a0a0a";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget).style.background = "transparent";
                    (e.currentTarget).style.color = "#6b6b6b";
                  }
                }}
              >
                <span style={{ fontSize: "0.85rem" }}>
                  {cat.icon} {cat.label}
                </span>
                <span
                  style={{
                    fontSize: "0.52rem",
                    opacity: 0.75,
                    letterSpacing: "0.06em",
                  }}
                >
                  {cat.id === "all" ? `${counts.all} items` : `${counts[cat.id as keyof typeof counts]} items — ${cat.desc}`}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Results label ── */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.62rem",
            color: "#6b6b6b",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
          }}
        >
          Showing{" "}
          <span style={{ color: "#d4500a", fontWeight: 700 }}>{filtered.length}</span>
          {" "}work{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "all" && (
            <span> in <span style={{ color: "#0a0a0a" }}>{CATEGORIES.find((c) => c.id === activeCategory)?.label}</span></span>
          )}
        </div>

        {/* ── Cards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(16px, 3vw, 28px)",
          }}
        >
          {filtered.map((work, index) => (
            <CreativeCard key={work.slug} work={work} index={index} />
          ))}
        </div>

        {/* ── Hire Me strip ── */}
        <div
          style={{
            marginTop: "4rem",
            border: "1px solid #0a0a0a",
            background: "#dedad1",
            padding: "2rem",
            boxShadow: "4px 4px 0px #0a0a0a",
          }}
        >
          <div style={{ display: "flex", gap: "6px", marginBottom: "1rem" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#d4500a", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6b6b6b", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", border: "1px solid #6b6b6b", display: "inline-block" }} />
          </div>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(1rem, 3vw, 1.3rem)",
              fontWeight: 700,
              color: "#0a0a0a",
              marginBottom: "0.6rem",
            }}
          >
            Need creative work for your community?
            <span style={{ color: "#d4500a" }}> Let&apos;s collaborate.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "#6b6b6b",
              lineHeight: 1.8,
              marginBottom: "1.4rem",
              maxWidth: "520px",
            }}
          >
            I take on event photography, social media content creation, and community
            graphic design work — especially for tech communities and non-profits.
            Reach out and let&apos;s make something great.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={`mailto:${personalInfo.email}`}
              id="creative-hire-me-btn"
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
              id="creative-linkedin-btn"
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
          </div>
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
        HM // DEV &nbsp;·&nbsp; CREATIVE STUDIO &nbsp;·&nbsp;{" "}
        <span style={{ color: "#d4500a" }}>{creativeWorks.length} WORKS</span>
      </footer>
    </div>
  );
}
