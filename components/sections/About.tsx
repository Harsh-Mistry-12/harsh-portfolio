"use client";

import { motion } from "framer-motion";
import { aboutMe } from "@/lib/data";
import { Sparkles, Cpu, Target, Trophy } from "lucide-react";

const cards = [
  { icon: Sparkles, color: "indigo", label: "Background",  key: "background"  as const },
  { icon: Cpu,      color: "sky",    label: "The Journey",  key: "journey"     as const },
  { icon: Target,   color: "amber",  label: "Core Strengths", key: "strengths" as const },
  { icon: Trophy,   color: "emerald",label: "Aspirations",  key: "aspirations" as const },
];

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-600",  ring: "hover:border-indigo-200" },
  sky:     { bg: "bg-sky-50",     text: "text-sky-600",     ring: "hover:border-sky-200"    },
  amber:   { bg: "bg-amber-50",   text: "text-amber-600",   ring: "hover:border-amber-200"  },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", ring: "hover:border-emerald-200" },
};

export const About = () => {
  return (
    <section id="about" className="py-24 section-soft">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">About Me</h2>
          <span className="section-rule" />
        </motion.div>

        {/* Grid of cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map(({ icon: Icon, color, label, key }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className={`card p-8 group ${c.ring} transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${c.bg} mb-5`}>
                  <Icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${c.text}`}>{label}</h3>
                <p className="text-slate-500 leading-relaxed text-[0.92rem]">{aboutMe[key]}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
