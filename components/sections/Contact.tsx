"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  };
  return (
    <section id="contact" className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: CONNECT</span>
          <span className="line" />
          <span className="num">008</span>
        </div>

        <div className="grid lg:grid-cols-5 gap-0" style={{ border: "1px solid #0a0a0a" }}>
          {/* Left: info panel */}
          <div style={{ borderBottom: "1px solid #0a0a0a" }} className="lg:border-b-0 lg:border-r lg:border-r-[#0a0a0a] lg:col-span-2">
            {/* Title bar */}
            <div
              style={{
                borderBottom: "1px solid #0a0a0a",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#dedad1",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#6b6b6b",
              }}
            >
              <span>CONTACT.INFO</span>
              <span style={{ color: "#d4500a" }}>■ AVAILABLE</span>
            </div>

            <div style={{ padding: "2rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                  marginBottom: "0.25rem",
                }}
              >
                OPEN FOR
              </h2>
              <h2
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#d4500a",
                  marginBottom: "1.5rem",
                }}
              >
                OPPORTUNITIES.
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "#6b6b6b",
                  lineHeight: 1.9,
                  marginBottom: "2rem",
                }}
              >
                Open for new opportunities. Whether it&apos;s a project, role, or just a hello — I&apos;ll get back to you.
              </p>

              {/* Contact details */}
              {[
                { k: "EMAIL", v: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { k: "PHONE", v: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                { k: "LOCATION", v: personalInfo.location, href: "#" },
              ].map(({ k, v, href }) => (
                <div
                  key={k}
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    paddingBottom: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.14em",
                      color: "#6b6b6b",
                      marginBottom: "4px",
                    }}
                  >
                    {k}
                  </p>
                  <a
                    href={href}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "#0a0a0a",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#d4500a")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#0a0a0a")
                    }
                  >
                    {v}
                  </a>
                </div>
              ))}

              {/* Social */}
              <div
                style={{
                  marginTop: "1.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: "#6b6b6b",
                  marginBottom: "0.75rem",
                }}
              >
                FIND_ME_ONLINE /
              </div>
              <div style={{ display: "flex", gap: "0" }}>
                {[
                  { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
                  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: FaGitlab, href: personalInfo.gitlab, label: "GitLab" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    style={{
                      border: "1px solid #0a0a0a",
                      marginRight: "-1px",
                      padding: "12px 18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0a0a0a",
                      transition: "background 0.15s, color 0.15s",
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
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {/* Title bar */}
            <div
              style={{
                borderBottom: "1px solid #0a0a0a",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#dedad1",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#6b6b6b",
              }}
            >
              <span>SEND_MESSAGE.FORM</span>
              <span>MAILTO:HARSH MISTRY</span>
            </div>

            <div style={{ padding: "2rem" }}>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        color: "#6b6b6b",
                        marginBottom: "6px",
                      }}
                    >
                      NAME /
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="b-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        color: "#6b6b6b",
                        marginBottom: "6px",
                      }}
                    >
                      EMAIL /
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="b-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      color: "#6b6b6b",
                      marginBottom: "6px",
                    }}
                  >
                    SUBJECT /
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    className="b-input"
                    placeholder="Project idea, job offer, collaboration…"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      color: "#6b6b6b",
                      marginBottom: "6px",
                    }}
                  >
                    MESSAGE /
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    className="b-input"
                    style={{ resize: "none" }}
                    placeholder="Hey Harsh, I'd love to…"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="btn-brutalist"
                  style={{ width: "100%" }}
                  disabled={status === "sending"}
                >
                  <span className="btn-tab">→</span>
                  <span className="btn-body">
                    {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                  </span>
                </button>

                {status === "success" && (
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "#1e824c",
                      border: "2px solid #1e824c",
                      padding: "8px 12px",
                      background: "#eefcf5",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    ✓ MESSAGE SENT SUCCESSFULLY!
                  </div>
                )}

                {status === "error" && (
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "#d4500a",
                      border: "2px solid #d4500a",
                      padding: "8px 12px",
                      background: "#fdf3ee",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    ✗ ERROR SENDING MESSAGE. PLEASE TRY AGAIN.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
