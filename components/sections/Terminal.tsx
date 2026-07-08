"use client";

import { useState, useRef, useEffect } from "react";
import { personalInfo, skills, aboutMe } from "@/lib/data";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
};

export const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "sys.init",
      output: (
        <div style={{ color: "#d4500a", fontFamily: "var(--font-mono)" }}>
          <p>&gt; HARSH.MISTRY PORTFOLIO SYSTEM v1.0.0</p>
          <p>&gt; Type <span style={{ color: "#e0e0e0" }}>&apos;help&apos;</span> to see available commands.</p>
          <p>&gt; All systems nominal. Ready.</p>
        </div>
      ),
    },
  ]);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              lineHeight: 2,
              color: "#a0a0a0",
            }}
          >
            <p>
              <span style={{ color: "#d4500a" }}>help</span>
              {"    "}— Show available commands
            </p>
            <p>
              <span style={{ color: "#d4500a" }}>about</span>
              {"   "}— Read my bio
            </p>
            <p>
              <span style={{ color: "#d4500a" }}>skills</span>
              {"  "}— List my top skills
            </p>
            <p>
              <span style={{ color: "#d4500a" }}>contact</span>
              {" "}— Get my contact info
            </p>
            <p>
              <span style={{ color: "#d4500a" }}>clear</span>
              {"   "}— Clear terminal
            </p>
          </div>
        );
        break;
      case "about":
        output = (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "#a0a0a0",
              lineHeight: 1.8,
            }}
          >
            {aboutMe.background}
          </p>
        );
        break;
      case "skills":
        output = (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "#a0a0a0",
              lineHeight: 1.8,
            }}
          >
            LANGUAGES: {skills.Languages.join(", ")}{"\n"}
            FRAMEWORKS: {skills.Frameworks.join(", ")}{"\n"}
            ML: {skills["Machine Learning"].join(", ")}
          </p>
        );
        break;
      case "contact":
        output = (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "#a0a0a0",
              lineHeight: 2,
            }}
          >
            <p>
              EMAIL:{"    "}
              <a
                href={`mailto:${personalInfo.email}`}
                style={{ color: "#d4500a" }}
              >
                {personalInfo.email}
              </a>
            </p>
            <p>
              LINKEDIN:{" "}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#d4500a" }}
              >
                {personalInfo.linkedin}
              </a>
            </p>
            <p>
              GITHUB:{"   "}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#d4500a" }}
              >
                {personalInfo.github}
              </a>
            </p>
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
        output = (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: "#ff6b6b",
            }}
          >
            ERROR: Command not found: &apos;{trimmedCmd}&apos;. Type &apos;help&apos; for a list of commands.
          </span>
        );
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
    <section className="py-20">
      <div style={{ maxWidth: "1280px" }} className="mx-auto px-6">
        {/* Section divider */}
        <div className="section-divider">
          <span className="label">// SECTION: TERMINAL_SYS</span>
          <span className="line" />
          <span className="num">007</span>
        </div>

        {/* Terminal */}
        <div className="b-terminal">
          {/* Title bar */}
          <div className="b-terminal-bar">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div className="b-terminal-dots">
                <span
                  className="b-terminal-dot"
                  style={{ background: "#d4500a" }}
                />
                <span
                  className="b-terminal-dot"
                  style={{ background: "#6b6b6b" }}
                />
                <span
                  className="b-terminal-dot"
                  style={{ border: "1px solid #6b6b6b" }}
                />
              </div>
              <span>TERMINAL.SYS</span>
            </div>
            <span>guest@harsh-mistry:~</span>
          </div>

          <div
            ref={outputRef}
            style={{
              padding: "1.5rem",
              minHeight: "300px",
              maxHeight: "400px",
              overflowY: "auto",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              lineHeight: 1.7,
            }}
          >
            {history.map((entry, index) => (
              <div key={index} style={{ marginBottom: "1rem" }}>
                {entry.command && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ color: "#d4500a" }}>$</span>
                    <span style={{ color: "#e0e0e0" }}>{entry.command}</span>
                  </div>
                )}
                <div style={{ paddingLeft: "1rem" }}>{entry.output}</div>
              </div>
            ))}

            {/* Input row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#d4500a", flexShrink: 0 }}>$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#e0e0e0",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  flex: 1,
                  caretColor: "#d4500a",
                }}
                spellCheck={false}
                placeholder="type a command..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
