"use client";

import { motion } from "framer-motion";
import { volunteering } from "@/lib/data";

export const Volunteering = () => {
  return (
    <section id="volunteering" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Community</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Volunteering</h2>
          <span className="section-rule" />
          <p className="mt-5 text-slate-500 text-sm max-w-md mx-auto">
            Giving back through open-source contributions, tech events, and community knowledge sharing.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteering.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card p-6 flex flex-col gap-4"
            >
              {/* Icon + org */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-0.5">{item.role}</p>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">{item.organization}</h3>
                </div>
              </div>

              {/* Period badge */}
              <span className="self-start text-xs font-mono text-slate-500 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                {item.period}
              </span>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
