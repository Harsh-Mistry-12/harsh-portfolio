import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Volunteering } from "@/components/sections/Volunteering";
import { Terminal } from "@/components/sections/Terminal";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { StickmanScrollbar } from "@/components/ui/StickmanScrollbar";

export default function Home() {
  return (
    <main style={{ paddingTop: "56px" }}>
      <ScrollProgress />
      <Navbar />
      <StickmanScrollbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Volunteering />
      <Blog />
      <Terminal />
      <Contact />

      <Footer />
    </main>
  );
}
