"use client";

import { motion } from "framer-motion";
import { education, achievements, funFacts } from "@/lib/data";
import { GraduationCap, Award, Zap } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 section-soft">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Education & Achievements</h2>
          <span className="section-rule" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Education</h3>
            </motion.div>

            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card p-6 relative overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-indigo-500 to-sky-400" />
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h4 className="font-bold text-slate-900 leading-tight">{edu.degree}</h4>
                    <span className="text-xs font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-1">{edu.institution}</p>
                  <p className="text-xs font-bold text-emerald-600 mb-2">{edu.marks}</p>
                  {edu.highlights && (
                    <p className="text-xs text-slate-400 leading-relaxed">{edu.highlights}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements + Fun Facts */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Achievements</h3>
            </motion.div>

            <div className="space-y-3 mb-10">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="card flex items-start gap-4 p-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-amber-500" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
                </motion.div>
              ))}
            </div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-5"
            >
              <h3 className="text-lg font-bold text-slate-900">Fun Facts ✨</h3>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                  className="card p-4 flex items-center justify-center text-center"
                >
                  <p className="text-xs text-slate-500 leading-relaxed">{fact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
