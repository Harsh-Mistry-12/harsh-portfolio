"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Work Experience</h2>
          <span className="section-rule" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-sky-200 to-transparent rounded-full" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-16"
              >
                {/* Dot */}
                <div className="absolute left-[14px] top-6 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white ring-2 ring-indigo-200 z-10" />

                {/* Card */}
                <div className="card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-sm font-semibold text-indigo-600 mt-0.5">
                        {exp.company}
                        <span className="text-slate-400 font-normal ml-2">· {exp.location}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full whitespace-nowrap">
                      <Briefcase className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-500 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
