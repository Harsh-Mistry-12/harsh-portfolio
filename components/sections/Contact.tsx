"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 section-soft">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Let&apos;s Connect</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3">Get In Touch</h2>
          <span className="section-rule" />
          <p className="mt-5 text-slate-500 max-w-lg mx-auto text-sm">
            Open for new opportunities. Whether it&apos;s a project, role, or just a hello — I&apos;ll get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="card p-6 space-y-5">
              <h3 className="text-base font-bold text-slate-900">Contact Details</h3>

              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "text-indigo-600", bg: "bg-indigo-50" },
                { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: "text-sky-600", bg: "bg-sky-50" },
                { icon: MapPin, label: "Location", value: personalInfo.location, href: "#", color: "text-emerald-600", bg: "bg-emerald-50" },
              ].map(({ icon: Icon, label, value, href, color, bg }) => (
                <a key={label} href={href}
                  className="flex items-center gap-4 group">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-4.5 h-4.5 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
                    <p className={`text-sm font-medium text-slate-700 group-hover:${color} transition-colors`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="card p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Find Me Online</p>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub,   href: personalInfo.github,   label: "GitHub",   color: "hover:bg-slate-900 hover:text-white hover:border-slate-900" },
                  { icon: FaLinkedin, href: personalInfo.linkedin,  label: "LinkedIn", color: "hover:bg-sky-600 hover:text-white hover:border-sky-600" },
                  { icon: FaGitlab,   href: personalInfo.gitlab,    label: "GitLab",   color: "hover:bg-orange-500 hover:text-white hover:border-orange-500" },
                ].map(({ icon: Icon, href, label, color }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                    className={`flex-1 h-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 transition-all ${color}`}>
                    <Icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 card p-8"
          >
            <h3 className="text-base font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Name</label>
                  <input type="text" id="name" className="input" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Email</label>
                  <input type="email" id="email" className="input" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Subject</label>
                <input type="text" id="subject" className="input" placeholder="Project idea, job offer, collaboration…" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Message</label>
                <textarea id="message" rows={5} className="input resize-none" placeholder="Hey Harsh, I'd love to…" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
