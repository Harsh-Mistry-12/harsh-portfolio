"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Languages:          "bg-indigo-50 text-indigo-700 border-indigo-100",
  Databases:          "bg-sky-50 text-sky-700 border-sky-100",
  "Version Control":  "bg-violet-50 text-violet-700 border-violet-100",
  Cloud:              "bg-amber-50 text-amber-700 border-amber-100",
  Frameworks:         "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Data Tools":       "bg-rose-50 text-rose-700 border-rose-100",
  "Data Visualization":"bg-orange-50 text-orange-700 border-orange-100",
  Automation:         "bg-teal-50 text-teal-700 border-teal-100",
  "Machine Learning": "bg-purple-50 text-purple-700 border-purple-100",
};

const categoryIcons: Record<string, string> = {
  Languages: "⌨️", Databases: "🗄️", "Version Control": "🌿",
  Cloud: "☁️", Frameworks: "🏗️", "Data Tools": "🔬",
  "Data Visualization": "📊", Automation: "🤖", "Machine Learning": "🧠",
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">What I Work With</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Technical Skills</h2>
          <span className="section-rule" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => {
            const tagClass = categoryColors[category] ?? "bg-slate-50 text-slate-700 border-slate-100";
            const icon = categoryIcons[category] ?? "💡";
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="card p-6 flex flex-col gap-4"
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <h3 className="text-sm font-bold text-slate-800 tracking-wide">{category}</h3>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center text-[0.7rem] font-semibold font-mono px-2.5 py-1 rounded-full border transition-all hover:scale-105 cursor-default ${tagClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
