import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Volunteering } from "@/components/sections/Volunteering";
import { Terminal } from "@/components/sections/Terminal";
import { Contact } from "@/components/sections/Contact";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ScrollProgress />
      <Navbar />
      <CommandPalette />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Volunteering />
      <Terminal />
      <Contact />

      <footer className="py-10 border-t border-slate-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-700">Harsh Mistry</span>. All rights reserved.
          </p>
          <p className="text-xs text-slate-400">
            Press{" "}
            <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-slate-600 font-mono text-[10px]">
              Ctrl K
            </kbd>{" "}
            to open command palette
          </p>
        </div>
      </footer>
    </main>
  );
}
