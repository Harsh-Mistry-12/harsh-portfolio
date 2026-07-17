"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { creativeWorks } from "@/lib/data";

const CATEGORY_ACCENT: Record<string, string> = {
  photography:   "#d4500a",
  "social-media": "#2563eb",
  graphics:      "#7c3aed",
};

const CATEGORY_LABEL: Record<string, string> = {
  photography:   "PHOTOGRAPHY",
  "social-media": "SOCIAL MEDIA",
  graphics:      "GRAPHICS",
};

function MiniCard({ work, index }: { work: (typeof creativeWorks)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const accent = CATEGORY_ACCENT[work.category] ?? "#d4500a";
  const label  = CATEGORY_LABEL[work.category]  ?? work.category.toUpperCase();

  return (
    <Link
      href="/creative"
      id={`creative-preview-${work.slug}`}
      style={{ textDecoration: "none" }}
    >
      <article
        style={{
          border: "1px solid #0a0a0a",
          background: "#e8e5de",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "box-shadow 0.2s ease, transform 0.2s ease",
          boxShadow: hovered ? "6px 6px 0px #0a0a0a" : "3px 3px 0px #0a0a0a",
          transform: hovered ? "translate(-2px,-2px)" : "translate(0,0)",
          cursor: "pointer",
          height: "100%",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
              CREATIVE_{String(index + 1).padStart(2, "0")}.MD
            </span>
          </div>
          <span style={{ color: accent, fontWeight: 700 }}>{label}</span>
        </div>

        {/* Cover image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4 / 3",
            overflow: "hidden",
            borderBottom: "1px solid #0a0a0a",
            flexShrink: 0,
          }}
        >
          <Image
            src={work.coverImage}
            alt={work.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
            style={{
              objectFit: "cover",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.45s ease",
              filter: hovered ? "brightness(0.8)" : "brightness(1)",
            }}
          />
          {/* Image count badge */}
          {work.images.length > 1 && (
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "rgba(10,10,10,0.7)",
                color: "#e8e5de",
                fontFamily: "var(--font-mono)",
                fontSize: "0.5rem",
                letterSpacing: "0.06em",
                padding: "3px 7px",
              }}
            >
              🖼 {work.images.length}
            </div>
          )}
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
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              color: accent,
              letterSpacing: "0.06em",
              margin: 0,
            }}
          >
            {work.community}
          </p>
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
            {work.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export const Creative = () => {
  // Show 1 from each category for a variety preview
  const preview = [
    creativeWorks.find((w) => w.category === "photography"),
    creativeWorks.find((w) => w.category === "social-media"),
    creativeWorks.find((w) => w.category === "graphics"),
  ].filter(Boolean) as typeof creativeWorks;

  return (
    <section id="creative" className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: CREATIVE_STUDIO</span>
          <span className="line" />
          <span className="num">{String(creativeWorks.length).padStart(3, "0")}</span>
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
            Beyond code — photography, social media content, and community graphics
            created for the organizations I&apos;m part of.
          </p>
          <Link
            href="/creative"
            id="view-all-creative-btn"
            target="_blank"
            rel="noreferrer"
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
            ■ VIEW FULL STUDIO ↗
          </Link>
        </div>


        {/* Preview grid — 3 cards, one per category */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "clamp(16px, 3vw, 28px)",
            marginBottom: "1.5rem",
          }}
        >
          {preview.map((work, index) => (
            <MiniCard key={work.slug} work={work} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
