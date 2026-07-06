"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { ChevronDown, MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Soft gradient mesh background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(79,70,229,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(14,165,233,0.06) 0%, transparent 60%)",
        }}
      />
      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4f46e5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-6 px-4 py-2 bg-indigo-50 rounded-full border border-indigo-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Work
              </span>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.06] mb-4 text-slate-900">
                Hi, I&apos;m{" "}
                <span
                  className="animate-gradient-x"
                  style={{
                    background:
                      "linear-gradient(135deg, #4f46e5, #0ea5e9, #f59e0b)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Harsh Mistry
                </span>
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-slate-500 mb-5">
                {personalInfo.title}
              </p>
              <p className="text-base text-slate-500 max-w-lg leading-relaxed mb-8 mx-auto lg:mx-0">
                {personalInfo.tagline}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 justify-center lg:justify-start mb-10">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  {personalInfo.location}
                </span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors">
                  <Mail className="w-4 h-4 text-indigo-500" />
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <button
                id="hero-view-projects-btn"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                id="hero-contact-btn"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social + stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-8 justify-center lg:justify-start"
            >
              <div className="flex gap-3">
                <a href={personalInfo.github} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition-all hover:shadow-md">
                  <FaGithub className="w-4.5 h-4.5" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-300 transition-all hover:shadow-md">
                  <FaLinkedin className="w-4.5 h-4.5" />
                </a>
              </div>
              <div className="h-6 w-px bg-slate-200" />
              {[
                { label: "Hackathons", value: "21+" },
                { label: "Experience", value: "2+ yrs" },
                { label: "Projects", value: "10+" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-bold text-slate-900">{s.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Photo (full-length portrait) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, type: "spring", stiffness: 70, damping: 18 }}
            className="relative flex-shrink-0"
          >
            {/* Soft gradient blob behind photo */}
            <div
              className="absolute -inset-4 rounded-[2rem] -z-10 opacity-40 blur-2xl"
              style={{
                background: "linear-gradient(135deg, #4f46e5 0%, #0ea5e9 50%, #f59e0b 100%)",
              }}
            />

            {/* Photo card */}
            <div
              className="relative rounded-[1.5rem] overflow-hidden"
              style={{
                width: "clamp(220px, 24vw, 310px)",
                height: "clamp(310px, 36vw, 440px)",
                boxShadow: "0 24px 64px rgba(79,70,229,.16), 0 8px 24px rgba(0,0,0,.10)",
                border: "3px solid rgba(255,255,255,0.9)",
              }}
            >
              <Image
                src="/photo.jpg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 220px, 310px"
                className="object-cover object-center"
                priority
              />
              {/* Subtle inner gradient overlay at bottom for depth */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(79,70,229,0.12), transparent)",
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 bg-white border border-slate-200 rounded-2xl px-4 py-2.5 shadow-lg whitespace-nowrap"
            >
              <p className="text-xs font-bold text-slate-800">🚀 Open to Opportunities</p>
            </motion.div>

            {/* Decorative dot grid — top right */}
            <div
              className="absolute -top-5 -right-5 w-20 h-20 -z-10 opacity-50"
              style={{
                backgroundImage: "radial-gradient(circle, #4f46e5 1.5px, transparent 1.5px)",
                backgroundSize: "8px 8px",
              }}
            />
            {/* Decorative dot grid — bottom left */}
            <div
              className="absolute -bottom-5 -left-5 w-16 h-16 -z-10 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle, #0ea5e9 1.5px, transparent 1.5px)",
                backgroundSize: "8px 8px",
              }}
            />
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
};
