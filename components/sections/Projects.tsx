"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const accentColors = [
  "from-indigo-500 to-sky-500",
  "from-sky-500 to-emerald-500",
  "from-violet-500 to-indigo-500",
  "from-amber-500 to-orange-500",
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 section-soft">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">My Work</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Featured Projects</h2>
          <span className="section-rule" />
          <p className="mt-6 text-slate-500 max-w-xl mx-auto text-sm">
            End-to-end systems I&apos;ve built — click any card to read the full story.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
              className="card flex flex-col overflow-hidden group"
            >
              {/* Gradient top stripe */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${accentColors[index % accentColors.length]}`} />

              <div className="p-7 flex flex-col h-full">
                {/* Title + links */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-[1.05rem] font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 shrink-0 pt-0.5">
                    <a href={project.github} target="_blank" rel="noreferrer"
                      aria-label="GitHub"
                      className="text-slate-400 hover:text-slate-800 transition-colors">
                      <FaGithub className="w-4.5 h-4.5" />
                    </a>
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer"
                        aria-label="Live demo"
                        className="text-slate-400 hover:text-slate-800 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="inline-flex items-center text-[0.7rem] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/projects/${project.slug}`}
                  id={`view-project-${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 group/link transition-colors"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
