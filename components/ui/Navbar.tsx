"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "PROJECTS", id: "projects" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "EDUCATION", id: "education" },
  { label: "COMMUNITY", id: "volunteering" },
  { label: "CONTACT", id: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-200"
        style={{
          background: "#e8e5de",
          borderBottom: "1px solid #0a0a0a",
          border: "1px solid #0a0a0a",
          margin: "6px",
          borderRadius: "2px",
          padding: "0 2px",
          boxShadow: scrolled ? "3px 3px 0px #0a0a0a" : "2px 2px 0px rgba(10,10,10,0.2)",
        }}
      >
        <nav
          style={{ maxWidth: "1280px" }}
          className="mx-auto px-4 md:px-6 h-14 flex items-center justify-between"
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-sm tracking-widest uppercase flex items-center gap-2"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span
              style={{
                border: "1px solid #0a0a0a",
                padding: "3px 8px",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
              }}
            >
              HM
            </span>
            <span style={{ color: "#d4500a" }}>// DEV</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: active === link.id ? "#d4500a" : "#6b6b6b",
                  textTransform: "uppercase",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (active !== link.id)
                    (e.target as HTMLElement).style.color = "#0a0a0a";
                }}
                onMouseLeave={(e) => {
                  if (active !== link.id)
                    (e.target as HTMLElement).style.color = "#6b6b6b";
                }}
              >
                {link.label} /
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-brutalist"
              id="navbar-hire-btn"
            >
              <span className="btn-tab">→</span>
              <span className="btn-body">HIRE ME!</span>
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "#0a0a0a",
              background: "none",
              border: "1px solid #0a0a0a",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            {menuOpen ? "[ CLOSE ]" : "[ MENU ]"}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-14 inset-x-0 z-40 md:hidden"
          style={{
            background: "#e8e5de",
            borderBottom: "1px solid #0a0a0a",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-0">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "#0a0a0a",
                  textAlign: "left",
                  padding: "14px 0",
                  background: "none",
                  border: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
              >
                &gt; {link.label} /
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="btn-brutalist mt-4"
            >
              <span className="btn-tab">→</span>
              <span className="btn-body">HIRE ME!</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
