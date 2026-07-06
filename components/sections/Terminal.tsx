"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo, skills, aboutMe } from "@/lib/data";
import { Terminal as TerminalIcon } from "lucide-react";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

export const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <span className="text-primary">
          Welcome to the interactive terminal. Type <span className="text-accent font-bold">'help'</span> to see available commands.
        </span>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <p><span className="text-accent">help</span>    - Show available commands</p>
            <p><span className="text-accent">about</span>   - Read my bio</p>
            <p><span className="text-accent">skills</span>  - List my top skills</p>
            <p><span className="text-accent">contact</span> - Get my contact info</p>
            <p><span className="text-accent">clear</span>   - Clear terminal</p>
          </div>
        );
        break;
      case "about":
        output = <p className="text-muted-foreground">{aboutMe.background}</p>;
        break;
      case "skills":
        output = <p className="text-muted-foreground">{skills.Languages.join(", ")} | {skills.Frameworks.join(", ")} | {skills['Machine Learning'].join(", ")}</p>;
        break;
      case "contact":
        output = (
          <div className="space-y-1">
            <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">{personalInfo.email}</a></p>
            <p>LinkedIn: <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:underline">Profile</a></p>
            <p>GitHub: <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-primary hover:underline">Profile</a></p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "":
        output = "";
        break;
      default:
        output = <span className="text-red-400">Command not found: {trimmedCmd}. Type 'help' for a list of commands.</span>;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <section className="py-16 section-soft">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Interactive</p>
          <h2 className="text-3xl font-black text-slate-900 mb-3">Terminal</h2>
          <span className="section-rule" />
          <p className="mt-4 text-sm text-slate-500">Type <code className="text-indigo-600 font-mono bg-indigo-50 px-1.5 py-0.5 rounded">help</code> to see available commands.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
        >
        <div className="bg-[#e2e8f0] flex items-center px-4 py-3 border-b border-[#cbd5e1]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="mx-auto flex items-center text-xs text-slate-500 font-mono">
            <TerminalIcon className="w-3 h-3 mr-2" />
            guest@harsh-portfolio:~
          </div>
        </div>
        
        <div className="bg-white p-6 font-mono text-sm h-[300px] overflow-y-auto shadow-inner text-slate-700">
          {history.map((entry, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center text-slate-500 mb-1">
                <span className="text-accent mr-2">➜</span>
                <span className="text-primary mr-2">~</span>
                <span className="text-slate-800 font-medium">{entry.command}</span>
              </div>
              <div className="ml-4 text-slate-600">{entry.output}</div>
            </div>
          ))}
          
          <div className="flex items-center text-slate-500 mt-2">
            <span className="text-accent mr-2">➜</span>
            <span className="text-primary mr-2">~</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none flex-1 text-slate-800 font-medium caret-accent"
              autoFocus
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>
        </motion.div>
      </div>
    </section>
  );
};
