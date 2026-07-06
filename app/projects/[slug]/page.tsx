"use client";

import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const accentColors = [
  "from-indigo-500 to-sky-500",
  "from-sky-500 to-emerald-500",
  "from-violet-500 to-indigo-500",
  "from-amber-500 to-orange-500",
];

export default function ProjectPage({ params }: Props) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const gradient = accentColors[idx % accentColors.length];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ── Hero Banner ── */}
      <div className="relative overflow-hidden">
        {/* Gradient accent stripe */}
        <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

        {/* Soft mesh background */}
        <div className="py-16 px-4 bg-white"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 30% 10%, rgba(79,70,229,0.05) 0%, transparent 60%)",
          }}
        >
          <div className="max-w-4xl mx-auto">
            <Link href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-black leading-tight mb-6 text-slate-900">
                {project.title}
              </h1>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors shadow-md"
                >
                  <FaGithub className="w-4 h-4" />
                  View on GitHub
                </a>
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    className="btn-ghost !text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-2xl font-black text-slate-900 mb-2">Overview</h2>
          <div className="w-10 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mb-6" />
          <p className="text-lg text-slate-500 leading-relaxed">{project.longDescription}</p>
        </motion.div>

        {/* Detail sections */}
        <div className="space-y-6 mb-14">
          {project.details.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="card p-8 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-indigo-500 to-sky-400" />
              <div className="pl-2">
                <h3 className="text-lg font-bold text-indigo-600 mb-3">{section.heading}</h3>
                <p className="text-slate-500 leading-relaxed">{section.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl border border-indigo-100 bg-indigo-50 p-8 mb-14"
        >
          <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
            💡 Key Impact
          </h3>
          <p className="text-slate-600 leading-relaxed">{project.impact}</p>
        </motion.div>

        {/* Navigation */}
        <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <Link href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>
          <Link href="/#contact" className="btn-primary">
            Let&apos;s Work Together
          </Link>
        </div>
      </div>
    </main>
  );
}
