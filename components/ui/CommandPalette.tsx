"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { personalInfo } from "@/lib/data";
import { FileText, Code, User, Briefcase, Mail } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    command();
    setOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-white/50 backdrop-blur-sm"
    >
      <div className="w-full max-w-lg bg-card border border-border rounded-xl shadow-2xl overflow-hidden glassmorphism">
        <Command.Input 
          placeholder="Type a command or search..." 
          className="w-full bg-transparent px-4 py-4 text-foreground outline-none border-b border-border placeholder:text-muted-foreground"
        />
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            <Command.Item 
              onSelect={() => runCommand(() => scrollToSection('about'))}
              className="flex items-center px-2 py-2.5 text-sm rounded-md cursor-pointer text-foreground hover:bg-primary/20 hover:text-primary transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
            >
              <User className="mr-2 h-4 w-4" />
              About Me
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => scrollToSection('skills'))}
              className="flex items-center px-2 py-2.5 text-sm rounded-md cursor-pointer text-foreground hover:bg-primary/20 hover:text-primary transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
            >
              <Code className="mr-2 h-4 w-4" />
              Skills
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => scrollToSection('projects'))}
              className="flex items-center px-2 py-2.5 text-sm rounded-md cursor-pointer text-foreground hover:bg-primary/20 hover:text-primary transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Projects
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => scrollToSection('contact'))}
              className="flex items-center px-2 py-2.5 text-sm rounded-md cursor-pointer text-foreground hover:bg-primary/20 hover:text-primary transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Links" className="px-2 py-1.5 text-xs font-medium text-muted-foreground mt-2">
            <Command.Item 
              onSelect={() => runCommand(() => window.open(personalInfo.github, '_blank'))}
              className="flex items-center px-2 py-2.5 text-sm rounded-md cursor-pointer text-foreground hover:bg-primary/20 hover:text-primary transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
            >
              <Github className="mr-2 h-4 w-4" />
              Open GitHub
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.open(personalInfo.linkedin, '_blank'))}
              className="flex items-center px-2 py-2.5 text-sm rounded-md cursor-pointer text-foreground hover:bg-primary/20 hover:text-primary transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Open LinkedIn
            </Command.Item>
            <Command.Item 
              onSelect={() => runCommand(() => window.open('#', '_blank'))}
              className="flex items-center px-2 py-2.5 text-sm rounded-md cursor-pointer text-foreground hover:bg-primary/20 hover:text-primary transition-colors aria-selected:bg-primary/20 aria-selected:text-primary"
            >
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
