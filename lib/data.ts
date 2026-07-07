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
