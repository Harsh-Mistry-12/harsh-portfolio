export const personalInfo = {
  name: "Harsh Mistry",
  title: "Software Engineer & Data Scientist",
  tagline: "Building scalable backend systems, intelligent data pipelines, and highly automated workflows.",
  email: "hmistry864@gmail.com",
  phone: "+91-9157641005",
  location: "Gandhinagar, Gujarat, India",
  github: "https://github.com/Harsh-Mistry-12",
  linkedin: "https://www.linkedin.com/in/harshmistry1203",
  gitlab: "https://gitlab.com/HarshMistry_",
};

export const aboutMe = {
  background: "Data Scientist & Analyst with expertise in data engineering, statistical analysis, machine learning, and predictive modeling. B.Tech Graduate in Information Technology at Vidush Somany Institute of Technology and Research with First Class Distinction.",
  journey: "Passionate about backend development (FastAPI, Django), database management, and data-driven solutions. With hands-on experience in machine learning, data engineering, and data analysis, I actively explore innovative solutions in the tech space.",
  strengths: "Proficient in designing ETL pipelines, automating data workflows, and developing AI-driven insights for business decision-making. Skilled in working with structured and unstructured data, cloud computing, and big data frameworks.",
  aspirations: "I have participated in 21 hackathons, taking on the role of team leader in 8 of them. These experiences have sharpened my leadership, management, and problem-solving skills, teaching me both how to win and learn from failures. Eager to contribute, innovate, and grow in the field of backend development, data science, and automation.",
};

export const skills = {
  Languages: ["Python", "SQL", "Mongosh", "Bash", "TypeScript"],
  Databases: ["RDBMS", "MongoDB", "MySQL"],
  "Version Control": ["Git", "GitHub", "GitLab"],
  Cloud: ["AWS (EC2 & S3 basics)"],
  Frameworks: ["Django", "Flask", "FastAPI", "ReactJs", "Next.js", "Tailwind CSS"],
  "Data Tools": ["Numpy", "Pandas", "Dask", "Matplotlib", "Scikit-Learn"],
  "Data Visualization": ["Power BI", "Seaborn", "Plotly"],
  "Automation": ["Selenium", "Playwright", "BS4", "Scrapy", "PyAutoGUI", "Appium"],
  "Machine Learning": ["Regression", "Classification", "Clustering", "NLP", "Deep Learning", "Time Series Forecasting"],
};

export const projects = [
  {
    slug: "voxreach",
    title: "AI-Powered Calling Agent & Hyperlocal Analytics Platform",
    technologies: ["RAG+LLM", "Cartesia", "TiDB", "FastAPI", "AWS", "Node.js", "MySQL", "Twilio", "Next.js", "Groq", "Gemini", "Telephony", "Sarvam", "Open Source Models", "Next.js"],
    description: "End-to-end platform for human-like AI voice agents that cold-call and receive calls from customers — resolving queries, booking reservations, and providing support — while generating area-wise analytics and reports to drive business growth.",
    impact: "Automated 85% of voice-based customer interactions and delivered hyperlocal analytics that guided regional business decisions.",
    longDescription: "VoxReach is a full-stack AI calling agent platform that lets businesses run human-like voice conversations at scale — placing outbound cold calls, handling inbound support queries, and making reservations — while surfacing hyperlocal analytics on call volume, resolution rates, and regional trends to guide business decisions.",
    details: [
      {
        heading: "Voice & Telephony Layer",
        body: "Built the calling infrastructure on Twilio for telephony, with Cartesia and Sarvam handling low-latency text-to-speech and speech-to-text so the agent could hold natural, human-like conversations, including support for Indian languages. Designed the call flow to handle interruptions, silences, and turn-taking to keep interactions feeling conversational rather than scripted."
      },
      {
        heading: "RAG + LLM Reasoning Layer",
        body: "Implemented a retrieval-augmented generation pipeline so the agent could pull accurate, business-specific answers (pricing, policies, availability) in real time instead of relying on static prompts. Routed inference across Groq, Gemini, and open-source models based on latency and cost trade-offs, keeping response times low enough for live phone conversations."
      },
      {
        heading: "Data & Analytics Backend",
        body: "Built the backend on FastAPI with MySQL and TiDB for storing call transcripts, outcomes, and structured metadata at scale. Built a Node.js service layer for orchestration and a Next.js dashboard for area-wise call analytics — visualizing volume, resolution rates, and regional trends — with the full stack deployed on AWS for reliability and scale."
      },
      {
        heading: "What impact it made?",
        body: "Automated end-to-end voice interactions that previously required human agents, cutting response time for customer queries and reservations from minutes to seconds. Hyperlocal, area-wise call analytics gave the business visibility into demand patterns across regions, directly informing outreach and resourcing decisions. The RAG-based knowledge layer kept agent responses accurate and current without manual script updates, and the multi-LLM routing (Groq/Gemini/open-source models) kept inference costs low while preserving response quality across call volumes."
      }
    ],
    images: ["/projects/tradeiq/cover.png"],
    github: "https://github.com/Harsh-Mistry-12",
    demo: "#",
  },
  {
    slug: "b2b-scrapping-and-analytics-tool",
    title: "B2B Scraping & Analytics Tool",
    technologies: ["Discord", "Requests", "Resend", "Pandas", "MySQL", "FastAPI", "Node.js", "Next.js", "AWS", "LLMs", "Groq", "Gemini", "Web3Forms", "Multi-threading", "Concurrent"],
    description: "Automated web scraping pipeline that extracts, cleans, and enriches B2B data at scale — with LLM-based classification and real-time analytics dashboards.",
    impact: "Cut manual data collection time from hours to minutes and enabled reliable, structured B2B datasets for downstream business decisions.",
    longDescription: "A full-stack B2B data pipeline that scrapes structured and unstructured data from multiple sources concurrently, enriches it using LLMs for classification and validation, and surfaces the results through an analytics dashboard — with automated alerts and reports delivered via Discord and email.",
    details: [
      {
        heading: "Scraping & Data Pipeline",
        body: "Built a multi-threaded, concurrent scraping engine using Python's Requests library to pull data from multiple sources in parallel, significantly reducing collection time. Used Pandas for cleaning, deduplication, and transformation before persisting structured records to MySQL."
      },
      {
        heading: "LLM-Powered Enrichment",
        body: "Integrated Groq and Gemini to classify, tag, and validate scraped records — filtering noise, standardizing inconsistent fields, and flagging anomalies that would otherwise require manual review. This kept the dataset clean without a dedicated data-entry step."
      },
      {
        heading: "Automation, Alerts & Dashboard",
        body: "Built a FastAPI backend with a Node.js service layer for orchestration and scheduling, and a Next.js dashboard for visualizing scraped data and trends. Wired up Discord notifications for pipeline status/errors, Resend for email reports, and Web3Forms for lightweight external form intake — all deployed on AWS."
      }
    ],
    images: ["/projects/stock-automation/cover.png"],
    github: "https://github.com/Harsh-Mistry-12",
    demo: "#",
  },
  {
    slug: "synchive",
    title: "SyncHive: Automated File Backup & Synchronization",
    technologies: ["Paramiko", "Watchdog", "FTP Protocol", "OpenSSH", "Python"],
    description: "Python package for systematized file backup and synchronization across networked systems.",
    impact: "Executed incremental backup strategies and customizable scheduling. Version 0.2.0 launched on PyPI.",
    longDescription: "SyncHive is an open-source Python package that automates file backup and bidirectional sync across local and remote systems over SSH/FTP — published on PyPI.",
    details: [
      {
        heading: "Core Sync Engine",
        body: "Leveraged Watchdog for real-time filesystem change detection and Paramiko for SSH-based secure transfers. Supports incremental backups — only changed files are synced, dramatically reducing bandwidth usage."
      },
      {
        heading: "Scheduling & Configuration",
        body: "Provides a YAML-based configuration system for defining sync pairs, schedules, and conflict resolution strategies. Supports cron-like scheduling for automated periodic backups."
      },
      {
        heading: "PyPI Release",
        body: "Packaged and published SyncHive v0.2.0 on PyPI with full documentation, CLI support, and example configs. Available for anyone to install with a single `pip install synchive` command."
      }
    ],
    images: ["/projects/synchive/cover.png"],
    github: "https://github.com/Harsh-Mistry-12",
    demo: "#",
  },
  {
    slug: "tradeiq",
    title: "TradeIQ: AI-Powered Paper Trading & Market Intelligence",
    technologies: ["ReactJs", "FastAPI", "MySQL", "MongoDB", "Pandas", "Numpy", "scikit-learn", "Selenium"],
    description: "End-to-end web app for market analysis and paper trading with seasonal pattern detection.",
    impact: "Automated broker authentication to fetch real-time data and built ML models for trend prediction and query analysis.",
    longDescription: "TradeIQ is a comprehensive AI-powered paper trading platform that simulates real market conditions. It integrates live data feeds, ML-based trend prediction, and a full trading dashboard — all without risking real capital.",
    details: [
      {
        heading: "What I Built",
        body: "Designed a ReactJS frontend with a real-time dashboard showing market data, portfolio P&L, and trade history. The FastAPI backend handled authentication, order management, and data pipelines pulling from NSE/BSE via Selenium-automated broker sessions."
      },
      {
        heading: "ML & Intelligence Layer",
        body: "Built scikit-learn models for seasonal pattern detection and trend forecasting using time-series data stored in MongoDB. Integrated an NLP query interface so users can ask natural language questions about stock performance."
      },
      {
        heading: "Data Engineering",
        body: "Created ETL pipelines using Pandas & Numpy to clean, transform, and store tick data. Scheduled cron jobs to refresh data every market day and maintain historical datasets in MySQL for backtesting."
      }
    ],
    images: ["/projects/tradeiq/cover.png"],
    github: "https://github.com/Harsh-Mistry-12",
    demo: "#",
  },
  {
    slug: "student-council-elections",
    title: "Student Council Elections",
    technologies: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript"],
    description: "A secure, web-based school council voting system built for Geneva Liberal School to elect prefects and captains.",
    impact: "Successfully managed 19 different student council positions, supporting live leaderboards, real-time results, and device-based vote limits.",
    longDescription: "A specialized voting system designed for Geneva Liberal School to conduct their student council elections. It features an interactive voter dashboard with a live leaderboard, dynamic ranking badges, and a comprehensive admin control panel to manage candidates, toggle voting, and export results.",
    details: [
      {
        heading: "Voting Core & Leaderboard",
        body: "Developed a dynamic candidate listing across 19 positions (Leadership, House Captains, and Vice House Captains). Implemented a live leaderboard using AJAX polling that auto-refreshes standings, displays ranking badges (gold, silver, bronze), and renders percentage progress bars for candidate votes."
      },
      {
        heading: "Admin Controls & Analytics",
        body: "Built a robust administrative dashboard allowing coordinators to add/remove candidates, upload profile images, toggle the election status (open/close), monitor real-time vote metrics, and export final standings to CSV with built-in reset safeguards."
      },
      {
        heading: "Security & Anti-Fraud",
        body: "Secured the voting process using device-fingerprinting (IP address and browser User-Agent hashes) to prevent double voting. Designed a secure relational database schema in MySQL to persist voter logs and candidate tallies cleanly."
      }
    ],
    images: [
      "/projects/student-council-elections/cover-generated.png",
      "/projects/student-council-elections/GLS-Election.jpeg"
    ],
    github: "https://github.com/Harsh-Mistry-12",
    demo: "#",
  },
];

export const experience = [
  {
    company: "Logieagle Private Limited",
    role: "Python Developer",
    period: "September 2025 - Present",
    location: "Gandhinagar, Gujarat",
    responsibilities: [
      "Backend development, data engineering, and automation workflows."
    ]
  },
  {
    company: "autoDX Technologies Private Limited",
    role: "Jr. Python Developer",
    period: "April 2025 - September 2025",
    location: "Ahmedabad, Gujarat",
    responsibilities: [
      "Developed Python-based automation and backend solutions."
    ]
  },
  {
    company: "RAYVAT Outsourcing",
    role: "Jr. Python Developer",
    period: "August 2023 - March 2025",
    location: "Gandhinagar, Gujarat",
    responsibilities: [
      "Built ML models for predicting stock trends using time series forecasting & NLP.",
      "Developed real-time FastAPI microservices for stock market analytics.",
      "Created ETL pipelines to extract, transform, and load financial data from NSE/BSE.",
      "Scraped financial and market data from platforms like Screener, Tijori, Moneycontrol, Holidify, and Binance.",
      "Mechanized tasks like content generation, auth token retrieval, and order placement via Appium."
    ]
  },
  {
    company: "Oasis Infobyte",
    role: "Jr. Data Scientist [Internship]",
    period: "1 Month",
    location: "Remote",
    responsibilities: [
      "Built classification models for email spam detection & unemployment rate analysis.",
      "Conducted exploratory data analysis (EDA) and feature selection to improve model performance.",
      "Designed interactive dashboards to visualize key trends in large datasets."
    ]
  }
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Vidush Somany Institue of Technology & Research, Gandhinagar",
    marks: "7.75 CGPA",
    year: "Oct 2021 - July 2025",
    highlights: "First Class with Distinction. Participated in 21 hackathons, taking on the role of team leader in 8 of them.",
  },
  {
    degree: "12th (Science A)",
    institution: "MB Patel Secondary & Higher Seconday School, Gandhinagar",
    marks: "66.7%",
    year: "2021",
    highlights: "",
  },
  {
    degree: "10th",
    institution: "MB Patel Secondary & Higher Seconday School, Gandhinagar",
    marks: "92.3 PR",
    year: "2019",
    highlights: "",
  }
];

export const achievements = [
  "Participated in 21 hackathons, leading teams in 8 events.",
  "Open Source Contributor (CNCF, Google Developers Group Gandhinagar, Open Source Weekend, Pixelverse.community, KCD Gujarat)",
  "Introduction to Generative AI Certification",
  "Certificate of Participation in Shri Ram Trading Challenge 2023",
];

export const funFacts = [
  "Hackathon Enthusiast: Competed in 21 hackathons!",
  "Open Source Advocate: Active contributor to CNCF and GDG.",
  "Automation Geek: I love making computers do my repetitive tasks.",
  "Creative Coder: Enjoy combining code with graphic design.",
];

// ── VOLUNTEERING ────────────────────────────────────────────────────────────
// Replace the placeholder entries below with your real volunteering history.
export const volunteering = [
  {
    organization: "Google Developers Group (GDG) Gandhinagar",
    role: "Contributor",
    period: "2025 – Present",
    description:
      "Actively participated in GDG events, workshops, and DevFests. Helped coordinate sessions, guided attendees, and contributed to community outreach initiatives in Gujarat.",
    icon: "FaGlobe",
  },
  {
    organization: "Cloud Native Computing Foundation Ahmedabad (CNCF)",
    role: "Contributor",
    period: "2026 – Present",
    description:
      "Contributed to CNCF open-source projects, filed issues, reviewed documentation, and participated in community discussions to support cloud-native adoption.",
    icon: "FaCloud",
  },
  {
    organization: "KCD Gujarat (Kubernetes Community Days)",
    role: "Contributor",
    period: "2026 - Present",
    description:
      "Volunteered at KCD Gujarat, assisting speakers, managing logistics, and helping attendees navigate the conference. Contributed to one of the largest Kubernetes community events in the region.",
    icon: "FaCog",
  },
  {
    organization: "Open Source Weekend",
    role: "Contributor",
    period: "2025 - Present",
    description:
      "Participated in the Open Source Weekend hackathon-style event focused on making meaningful open-source contributions within 48 hours alongside developers across India.",
    icon: "FaCode",
  },
  {
    organization: "Pixelverse.community",
    role: "Core Team & Contributor",
    period: "2026 – Present",
    description:
      "Contributed to community-driven projects at Pixelverse, collaborating with designers and developers to build open tools and creative tech solutions.",
    icon: "FaPalette",
  },
  {
    organization: "99Barkville Foundation",
    role: "Volunteer",
    period: "2026 - Present",
    description:
      "Contribute to community-driven animal welfare rescues, adoptions, and awareness campaigns for strays.",
    icon: "FaCloud",
    link: "https://99barkville.org/",
  },
];

// ── BLOG POSTS ────────────────────────────────────────────────────────────────
export const blogs = [
  {
    slug: "building-ai-voice-agents-at-scale",
    title: "Building AI Voice Agents at Scale: Lessons from VoxReach",
    shortDescription:
      "How we built a human-like AI calling agent using RAG + LLMs, Twilio, and multi-model routing — and the hard lessons learned along the way.",
    tags: ["AI", "LLM", "FastAPI", "Twilio", "RAG", "Python"],
    readTime: "8 min read",
    publishedAt: "2026-06-15",
    updatedAt: "2026-07-01",
    coverImage: "/projects/tradeiq/cover.png",
    images: [
      "/projects/tradeiq/cover.png",
      "/projects/synchive/cover.png",
    ],
    content: [
      {
        type: "paragraph",
        text: "When we set out to build VoxReach, the brief sounded deceptively simple: make a bot that can cold-call customers, answer questions, and book reservations — and sound human while doing it. Twelve weeks and a lot of wrong turns later, I want to share what we actually learned.",
      },
      {
        type: "heading",
        text: "The Latency Problem is Real",
      },
      {
        type: "paragraph",
        text: "Phone conversations have an unforgiving latency budget. Anything above ~800ms of silence triggers the 'hello? are you there?' reflex in callers. Our first architecture — a single LLM call per turn — clocked in at 1.4–2.1 seconds on average. We fixed this by parallelizing ASR, intent classification, and knowledge retrieval, and switching from OpenAI to Groq for the final generation step. This alone brought median latency down to 620ms.",
      },
      {
        type: "heading",
        text: "RAG vs Fine-Tuning: Why We Chose RAG",
      },
      {
        type: "paragraph",
        text: "Business-specific data (menu prices, operating hours, booking policies) changes frequently. Fine-tuning a model every time the client updates their menu is a non-starter. A retrieval-augmented generation pipeline gave us real-time accuracy without retraining. We stored business knowledge in TiDB vector tables and retrieved the top-3 relevant chunks per turn — keeping context under 1200 tokens and latency predictable.",
      },
      {
        type: "heading",
        text: "Multi-LLM Routing: Cost vs Quality Trade-offs",
      },
      {
        type: "paragraph",
        text: "Not every turn needs a frontier model. Simple confirmations ('Your booking is set for 7 PM — does that work?') were routed to smaller open-source models running on our own inference endpoints, reducing cost by ~60% per call. Complex reasoning turns (handling objections, multi-step availability checks) were escalated to Gemini or GPT-4o via a lightweight router trained on turn complexity scores.",
      },
      {
        type: "heading",
        text: "What We'd Do Differently",
      },
      {
        type: "paragraph",
        text: "Start with interruption handling before anything else. Users interrupt agents constantly — treating every utterance as a complete sentence before processing it kills the conversational feel. We retrofitted VAD (voice activity detection) late and it caused a painful refactor. Build it in from day one.",
      },
    ],
  },
  {
    slug: "etl-pipelines-with-dask-and-fastapi",
    title: "Production-Grade ETL Pipelines: Dask, FastAPI & Lessons from 200GB Datasets",
    shortDescription:
      "A deep dive into building resilient, scalable data pipelines that handle real-world messiness — schema drift, partial failures, and downstream data quality expectations.",
    tags: ["Python", "Dask", "FastAPI", "ETL", "Data Engineering", "MySQL"],
    readTime: "11 min read",
    publishedAt: "2026-05-08",
    updatedAt: "2026-05-08",
    coverImage: "/projects/stock-automation/cover.png",
    images: [
      "/projects/stock-automation/cover.png",
      "/projects/tradeiq/cover.png",
    ],
    content: [
      {
        type: "paragraph",
        text: "At RAYVAT, we were extracting financial data from NSE/BSE, Screener, Tijori, and Moneycontrol daily — often more than 200GB of raw, semi-structured data. Here is how we built a pipeline that didn't fall over every other Tuesday.",
      },
      {
        type: "heading",
        text: "Why Dask Over Pandas Alone",
      },
      {
        type: "paragraph",
        text: "Pandas is fantastic until your DataFrame doesn't fit in RAM. We hit that ceiling on day three of production. Dask gave us a familiar API but lazily evaluated computations that could span multiple cores and spill to disk gracefully. For our workloads — mostly groupby aggregations and join-heavy transforms — Dask reduced peak memory usage by 73% while keeping wall-clock time within 15% of an equivalent in-memory Pandas run on smaller datasets.",
      },
      {
        type: "heading",
        text: "Schema Drift is Your Biggest Enemy",
      },
      {
        type: "paragraph",
        text: "Source websites change their HTML or JSON structures without notice. We built a lightweight schema fingerprinting layer that hashed expected column names and types each run. Any drift triggered a Slack alert before the bad data ever touched MySQL. This saved us from corrupting downstream ML features on three separate occasions.",
      },
      {
        type: "heading",
        text: "FastAPI as the Pipeline Orchestration Layer",
      },
      {
        type: "paragraph",
        text: "We exposed each pipeline stage as a FastAPI endpoint — ingest, transform, validate, load. This made partial reruns trivial: if the transform stage failed, we could rerun just that stage without re-scraping. It also gave us a clean HTTP interface for monitoring and a natural integration point for our internal dashboard.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "paragraph",
        text: "Idempotency first. Every stage should be safe to rerun. Design for failure — not the happy path. Observability (structured logging + metrics) pays for itself in the first incident. And finally: test with production-shaped data, not toy CSVs. Real financial data is ugly, and your pipeline will tell you exactly how ugly.",
      },
    ],
  },
  {
    slug: "open-source-contributions-cncf-gdg",
    title: "From Consumer to Contributor: My Journey into Open Source with CNCF & GDG",
    shortDescription:
      "What I learned contributing to cloud-native projects, helping run community events, and why open source is the best career accelerant available to any developer.",
    tags: ["Open Source", "CNCF", "Community", "Cloud Native", "Career"],
    readTime: "6 min read",
    publishedAt: "2026-04-20",
    updatedAt: "2026-04-20",
    coverImage: "/projects/synchive/cover.png",
    images: [
      "/projects/synchive/cover.png",
    ],
    content: [
      {
        type: "paragraph",
        text: "I used open-source software for two years before I ever contributed back. The jump from user to contributor felt intimidating — impostor syndrome, fear of rejection, not knowing where to start. Here is the honest account of how I got past all of that.",
      },
      {
        type: "heading",
        text: "Starting Small: Documentation First",
      },
      {
        type: "paragraph",
        text: "My first real contribution was fixing a broken link in the CNCF Landscape docs. Trivial — but it taught me the full contribution workflow: fork, branch, commit, PR, review cycle. The maintainers were warm and thorough. That experience made the next contribution — a small CLI flag fix — feel much less scary.",
      },
      {
        type: "heading",
        text: "GDG Gandhinagar: Community as a Learning Engine",
      },
      {
        type: "paragraph",
        text: "Volunteering at GDG sessions put me in rooms with engineers solving real problems at scale. More than the talks, it was the hallway conversations — 'how did you handle X?', 'what do you use for Y?' — that levelled up my thinking. You can't replicate that from YouTube tutorials.",
      },
      {
        type: "heading",
        text: "KCD Gujarat: Running, Not Just Attending",
      },
      {
        type: "paragraph",
        text: "Helping run Kubernetes Community Days Gujarat was a different kind of challenge — logistics, speaker coordination, attendee experience. It taught me that engineering events are a product, and the same first-principles thinking that makes good software makes good conferences.",
      },
      {
        type: "heading",
        text: "Why You Should Start Now",
      },
      {
        type: "paragraph",
        text: "Open source contributions are public proof of skill, visible to every recruiter and engineering lead who looks at your GitHub. Community involvement builds a network of peers faster than any other method I know. Start with a typo fix. Ship the first PR. The second one will feel natural.",
      },
    ],
  },
];

export type Blog = (typeof blogs)[0];

// ── CREATIVE WORKS ────────────────────────────────────────────────────────────
// Categories: "photography" | "social-media" | "graphics"
export const creativeWorks = [
  // // ── PHOTOGRAPHY ──────────────────────────────────────────────────────────
  // {
  //   slug: "gdg-devfest-2025-moments",
  //   category: "photography" as const,
  //   title: "GDG DevFest 2025 — Captured Moments",
  //   description:
  //     "Behind-the-lens coverage of Google Developers Group DevFest Gandhinagar 2025. Candid speaker portraits, crowd energy, and workshop sessions.",
  //   community: "Google Developers Group (GDG) Gandhinagar",
  //   platform: null,
  //   date: "2025-11-22",
  //   tags: ["Event Photography", "GDG", "DevFest", "Community"],
  //   images: [
  //     "/projects/student-council-elections/GLS-Election.jpeg",
  //     "/projects/tradeiq/cover.png",
  //   ],
  //   coverImage: "/projects/student-council-elections/GLS-Election.jpeg",
  //   stats: { shots: "200+", selected: 28, event: "DevFest 2025" },
  //   link: null,
  // },
  // {
  //   slug: "kcd-gujarat-2026-photography",
  //   category: "photography" as const,
  //   title: "KCD Gujarat 2026 — Conference Highlights",
  //   description:
  //     "Visual documentation of Kubernetes Community Days Gujarat 2026 — stage setups, speaker sessions, networking corners, and community booths.",
  //   community: "KCD Gujarat (Kubernetes Community Days)",
  //   platform: null,
  //   date: "2026-03-15",
  //   tags: ["Event Photography", "KCD", "Kubernetes", "Conference"],
  //   images: [
  //     "/projects/tradeiq/cover.png",
  //     "/projects/synchive/cover.png",
  //   ],
  //   coverImage: "/projects/tradeiq/cover.png",
  //   stats: { shots: "350+", selected: 45, event: "KCD Gujarat 2026" },
  //   link: null,
  // },
  {
    slug: "autonomous-hacks-26",
    category: "photography" as const,
    title: "Autonomous Hacks'26 — 36 Hours Agentic Hackathon organised by GDG Gandhinagar",
    description:
      "Raw, unfiltered photography from the 36-hour GDG Gandhinagar sprint. Late-night coding, Jamming Session, and final demo energy.",
    community: "GDG Gandhinagar",
    platform: null,
    date: "2026-01-10",
    tags: ["Hackathon Photography", "Graphic Design", "GDG Gandhinagar", "Community"],
    images: [
      "/projects/autonomous-hacks/photography/3175cbda-2790-46ce-b578-b15fc92faf4e~1.jpg",
      "/projects/autonomous-hacks/photography/8d612df9-9043-42a3-b682-3405b6c03646~1.jpg",
      "/projects/autonomous-hacks/photography/PXL_20260110_202008144.MP.jpg",
      "/projects/autonomous-hacks/photography/c1ce32dc-3f0e-426f-b4ed-164e219432cd~1.jpg",
      "/projects/autonomous-hacks/photography/e966ecda-15a7-4f4e-8cf2-76c50ecc6369~1.jpg",
      "/projects/autonomous-hacks/photography/f60c8983-adb9-4755-9f94-f154dc6132e3~1.jpg",
      "/projects/autonomous-hacks/graphics-design/Google Tools Stickers.png",
      "/projects/autonomous-hacks/graphics-design/PXL_20260110_013556516.MP.jpg",
      "/projects/autonomous-hacks/graphics-design/PXL_20260112_151456831.MP.jpg",
      "/projects/autonomous-hacks/graphics-design/PXL_20260112_151502623.MP.jpg",
      "/projects/autonomous-hacks/graphics-design/Step Background.png",
      "/projects/autonomous-hacks/graphics-design/b4819b8a-7fb9-46ec-8a92-c241416753f6~1.jpg"
    ],
    coverImage: "/projects/autonomous-hacks/photography/f60c8983-adb9-4755-9f94-f154dc6132e3~1.jpg",
    stats: { shots: "120+", selected: 12, event: "Autonomous Hacks'26" },
    link: null,
  },

  // // ── SOCIAL MEDIA CONTENT ─────────────────────────────────────────────────
  // {
  //   slug: "gdg-reels-recap-series",
  //   category: "social-media" as const,
  //   title: "GDG Event Recap Reel Series",
  //   description:
  //     "Short-form video recaps for GDG Gandhinagar's Instagram and LinkedIn — edit, voiceover, captions, and motion graphics handled end-to-end.",
  //   community: "Google Developers Group (GDG) Gandhinagar",
  //   platform: "Instagram / LinkedIn",
  //   date: "2025-12-01",
  //   tags: ["Video Editing", "Reels", "GDG", "Social Media"],
  //   images: [
  //     "/projects/tradeiq/cover.png",
  //   ],
  //   coverImage: "/projects/tradeiq/cover.png",
  //   stats: { posts: 6, reach: "4,200+", platform: "Instagram" },
  //   link: "https://www.linkedin.com/in/harshmistry1203",
  // },
  // {
  //   slug: "cncf-community-updates",
  //   category: "social-media" as const,
  //   title: "CNCF Ahmedabad — Community Update Posts",
  //   description:
  //     "Designed and wrote LinkedIn posts announcing CNCF meetup schedules, speaker reveals, and post-event wrap-ups to grow local cloud-native awareness.",
  //   community: "Cloud Native Computing Foundation Ahmedabad (CNCF)",
  //   platform: "LinkedIn",
  //   date: "2026-02-10",
  //   tags: ["LinkedIn Content", "CNCF", "Cloud Native", "Copywriting"],
  //   images: [
  //     "/projects/synchive/cover.png",
  //     "/projects/stock-automation/cover.png",
  //   ],
  //   coverImage: "/projects/synchive/cover.png",
  //   stats: { posts: 12, reach: "2,800+", platform: "LinkedIn" },
  //   link: "https://www.linkedin.com/in/harshmistry1203",
  // },
  // {
  //   slug: "pixelverse-social-drops",
  //   category: "social-media" as const,
  //   title: "Pixelverse.community — Social Content Drops",
  //   description:
  //     "Created visual + written social posts to promote Pixelverse open-source tool launches, community milestones, and contributor shoutouts.",
  //   community: "Pixelverse.community",
  //   platform: "Twitter / LinkedIn / Instagram",
  //   date: "2026-04-05",
  //   tags: ["Content Creation", "Pixelverse", "Open Source", "Design"],
  //   images: [
  //     "/projects/stock-automation/cover.png",
  //   ],
  //   coverImage: "/projects/stock-automation/cover.png",
  //   stats: { posts: 9, reach: "1,500+", platform: "Multi-platform" },
  //   link: null,
  // },
  // {
  //   slug: "99barkville-awareness-campaign",
  //   category: "social-media" as const,
  //   title: "99Barkville — Animal Welfare Awareness Campaign",
  //   description:
  //     "Scripted and produced social media content for 99Barkville's adoption drives and fundraising campaigns — carousels, stories, and awareness posts.",
  //   community: "99Barkville Foundation",
  //   platform: "Instagram / Facebook",
  //   date: "2026-05-20",
  //   tags: ["Social Media", "Animal Welfare", "Campaign", "Awareness"],
  //   images: [
  //     "/projects/synchive/cover.png",
  //   ],
  //   coverImage: "/projects/synchive/cover.png",
  //   stats: { posts: 8, reach: "3,100+", platform: "Instagram" },
  //   link: "https://99barkville.org/",
  // },

  // // ── COMMUNITY GRAPHICS ───────────────────────────────────────────────────
  // {
  //   slug: "gdg-devfest-event-graphics",
  //   category: "graphics" as const,
  //   title: "GDG DevFest 2025 — Event Branding & Graphics",
  //   description:
  //     "Full suite of event graphics for GDG DevFest Gandhinagar 2025: speaker announcement cards, schedule posters, banners, and post-event thank-you visuals.",
  //   community: "Google Developers Group (GDG) Gandhinagar",
  //   platform: null,
  //   date: "2025-10-15",
  //   tags: ["Graphic Design", "GDG", "Branding", "Event Graphics", "Figma"],
  //   images: [
  //     "/projects/student-council-elections/cover-generated.png",
  //     "/projects/tradeiq/cover.png",
  //     "/projects/synchive/cover.png",
  //   ],
  //   coverImage: "/projects/student-council-elections/cover-generated.png",
  //   stats: { assets: "40+", tools: "Figma / Canva", deliverables: "Posters, Cards, Banners" },
  //   link: null,
  // },
  // {
  //   slug: "kcd-gujarat-visual-identity",
  //   category: "graphics" as const,
  //   title: "KCD Gujarat 2026 — Visual Identity Assets",
  //   description:
  //     "Designed promotional material for KCD Gujarat 2026 including speaker spotlight cards, schedule graphics, and on-site signage templates.",
  //   community: "KCD Gujarat (Kubernetes Community Days)",
  //   platform: null,
  //   date: "2026-01-20",
  //   tags: ["Graphic Design", "KCD", "Kubernetes", "Visual Identity", "Figma"],
  //   images: [
  //     "/projects/tradeiq/cover.png",
  //     "/projects/synchive/cover.png",
  //   ],
  //   coverImage: "/projects/tradeiq/cover.png",
  //   stats: { assets: "25+", tools: "Figma", deliverables: "Cards, Posters, Signage" },
  //   link: null,
  // },
  // {
  //   slug: "pixelverse-open-source-graphics",
  //   category: "graphics" as const,
  //   title: "Pixelverse — Open-Source Tool Launch Graphics",
  //   description:
  //     "Created launch graphics and promotional design assets for multiple Pixelverse community open-source tool releases, maintaining consistent visual language.",
  //   community: "Pixelverse.community",
  //   platform: null,
  //   date: "2026-03-30",
  //   tags: ["Graphic Design", "Pixelverse", "Open Source", "Branding"],
  //   images: [
  //     "/projects/stock-automation/cover.png",
  //   ],
  //   coverImage: "/projects/stock-automation/cover.png",
  //   stats: { assets: "15+", tools: "Figma / Canva", deliverables: "Launch Cards, Banners" },
  //   link: null,
  // },
  // {
  //   slug: "cncf-meetup-graphics-pack",
  //   category: "graphics" as const,
  //   title: "CNCF Ahmedabad — Meetup Graphics Pack",
  //   description:
  //     "Designed recurring meetup graphics pack for CNCF Ahmedabad: agenda slides, speaker intro cards, and social-share post-event visuals.",
  //   community: "Cloud Native Computing Foundation Ahmedabad (CNCF)",
  //   platform: null,
  //   date: "2026-02-28",
  //   tags: ["Graphic Design", "CNCF", "Cloud Native", "Slides", "Figma"],
  //   images: [
  //     "/projects/synchive/cover.png",
  //     "/projects/stock-automation/cover.png",
  //   ],
  //   coverImage: "/projects/synchive/cover.png",
  //   stats: { assets: "20+", tools: "Figma", deliverables: "Slides, Cards, Posts" },
  //   link: null,
  // },
];

export type CreativeWork = (typeof creativeWorks)[0];
export type CreativeCategory = CreativeWork["category"];
