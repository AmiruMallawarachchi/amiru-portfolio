// All portfolio content lives here. Edit this file and push to update the site.

export type Project = {
  slug: string;
  title: string;
  repo: string;
  description: string;
  body: string;
  highlights?: string[];
  technologies: string[];
  github_url: string;
  demo_url?: string;
  hf_url?: string;
  wiki_url?: string;
  video_url?: string;
  architecture_image?: string;
  thumbnail?: string;
  year: string;
  language: string;
  featured?: boolean;
};

export const profile = {
  name: "AMIRU",
  last_name: "MALLAWARACHCHI",
  full_name: "Amiru Mallawarachchi",
  title: "AI Engineer",
  subtitle: "LLM Applications · Agentic Systems · RAG · Model Training",
  hero_line:
    "Aspiring AI Engineer designing and building the systems that put models to work.",
  bio_intro: "I ship end-to-end: train the models, then build the systems that put them in front of people.",
  bio_description:
    "AI Engineer who trains and deploys transformer models, then wires them into production LLM applications. Comfortable owning an ambiguous problem from spec to production — and fast with coding agents like Claude Code, Cursor and Copilot.",
  status: "BSc (Hons) Software Engineering — final year",
  location: "Moratuwa, Sri Lanka",
  passions: "Agentic systems that hold up in production",
  hero_image: "/amiru.jpg",
  cv_url: "/cv.pdf",
  github_url: "https://github.com/AmiruMallawarachchi",
  linkedin_url: "https://www.linkedin.com/in/amiru-mallawarachchi-97025a282/",
  huggingface_url: "https://huggingface.co/AmiruMallawarachchi",
  email: "amirunoel8@gmail.com",
  phone: "+94 76 637 9121",
};

export type Profile = typeof profile;

export const skills = [
  {
    category: "LLM Applications",
    items: [
      "Anthropic / OpenAI / Groq APIs",
      "Prompt & context engineering",
      "Tool & function calling",
      "Structured JSON outputs",
      "Model routing",
      "Guardrails & PII protection",
      "LLM evaluation",
    ],
  },
  {
    category: "Agentic Systems",
    items: [
      "Supervisor / worker patterns",
      "Shared-state orchestration",
      "Custom async pipelines",
      "LangGraph",
      "LangChain",
      "LlamaIndex",
      "MCP tool servers",
    ],
  },
  {
    category: "ML & Model Training",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "LoRA / QLoRA / PEFT",
      "Cross-encoder rerankers",
      "scikit-learn",
      "XGBoost",
      "Threshold calibration",
    ],
  },
  {
    category: "RAG & Data",
    items: [
      "ChromaDB",
      "Pinecone",
      "FAISS",
      "Semantic chunking",
      "MMR retrieval",
      "Citation grounding",
      "MongoDB",
    ],
  },
  {
    category: "Backend & Engineering",
    items: [
      "Python (async / asyncio)",
      "FastAPI",
      "Pydantic",
      "SSE streaming",
      "pytest",
      "Next.js 16 / React 19",
      "TypeScript",
    ],
  },
  {
    category: "Deployment & Tooling",
    items: [
      "Docker",
      "GitHub Actions",
      "Langfuse",
      "Vercel",
      "MongoDB Atlas",
      "Cloudflare Tunnel",
      "Claude Code / Cursor",
    ],
  },
];

export const experience = [
  {
    title: "Web Development Intern",
    company: "Syntecxhub (Remote)",
    period: "Jan 2026 – Feb 2026",
    description:
      "Built and shipped React / MERN features against an existing codebase, working remotely to ticket-level specs and code review.",
  },
  {
    title: "Customer Service Executive",
    company: "Bellvantage (Pvt) Ltd, Colombo",
    period: "Jul 2023 – Feb 2024",
    description:
      "Supported Sampath Bank's financial recovery operations under banking compliance and data-privacy rules, handling 60–80+ calls daily and analysing account patterns to support recovery strategy. Where I first learned to handle sensitive personal data carefully.",
  },
];

export const education = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "Cardiff Metropolitan University (ICBT Campus, Colombo)",
    period: "Expected Dec 2026",
    description: "Final year, focused on modern software architectures and applied AI.",
  },
  {
    degree: "Higher National Diploma in Computing (Merit)",
    institution: "ICBT Campus, Colombo",
    period: "Completed",
    description: "Foundation in software engineering, databases and systems design.",
  },
  {
    degree: "GCE Advanced Level",
    institution: "St. Sebastian's College, Moratuwa",
    period: "2019",
    description: "Foundation of engineering and mathematical study.",
  },
];

export const certifications = [
  "Gen AI Engineer — STEMLink AI Engineer Bootcamp 2.0 (Aug 2026)",
  "Introduction to LangChain — LangChain Academy (Apr 2026)",
  "Python (Basic) — HackerRank (Apr 2026)",
  "Intro to Machine Learning — Kaggle (2026)",
  "Team Leader, EXITO'26 Exhibition — ICBT Campus (Jul 2026)",
];

export const interests = [
  "Agentic Systems",
  "Transformer Fine-Tuning",
  "Retrieval & Grounding",
  "AI Safety & Guardrails",
  "Evaluation",
  "Human-Computer Interaction",
  "Technical Writing",
];

const GH = "https://github.com/AmiruMallawarachchi";

export const projects: Project[] = [
  {
    slug: "mindlens",
    title: "MindLens",
    repo: "mindlens",
    description:
      "A 14-agent AI wellbeing platform — five transformer models I trained, served by a pipeline I built without an agent framework.",
    body: "Sole architect and engineer. MindLens is a 14-agent async orchestration pipeline written in plain Python asyncio over a shared state object — eight layers and a seven-step turn covering safety gating, signal extraction, retrieval, planning, generation, post-checks and persistence, with agents fanned out concurrently and merged before generation. Around 11,900 lines of Python and 18,000 of TypeScript across 180 commits, with 730 passing pytest tests, pre-commit hooks and CI, built to Sri Lanka PDPA 2022 data-protection requirements.",
    highlights: [
      "Fine-tuned and published five transformer models to Hugging Face — DistilBERT crisis classifier, RoBERTa emotion classifier, MentalBERT multi-label classifier, RoBERTa cognitive-distortion classifier and a cross-encoder RAG reranker. Best model: macro F1 0.815, average AUC 0.938.",
      "Curated eight public datasets from 539,437 raw to 377,423 cleaned examples, handling class imbalance up to 172×.",
      "Built a two-stage crisis gate — ~45 deterministic regex patterns, then the DistilBERT classifier at a calibrated 0.45 threshold. Iterated to v3, which caught 5/5 crisis probes at every threshold from 0.45 to 0.9 with 0/6 false positives and a +0.998 separation margin, up from +0.06 in v1.",
      "Grounded RAG over ChromaDB: a 60-entry cited corpus chunked to ~67 passages, MMR retrieval with recency boosting, then cross-encoder reranking to k=5. Reranker trained on 5,069 mined pairs and evaluated with NDCG@3, MRR and P@3.",
      "Async FastAPI service with dual-tier Groq model routing, two-layer memory, APScheduler check-ins, MongoDB Atlas persistence and SSE streaming to a Next.js 16 / React 19 frontend.",
    ],
    technologies: ["Python", "FastAPI", "PyTorch", "Transformers", "ChromaDB", "MongoDB", "Groq", "Next.js", "Docker"],
    github_url: `${GH}/mindlens`,
    demo_url: "https://mindlens-theta.vercel.app",
    hf_url: "https://huggingface.co/AmiruMallawarachchi",
    thumbnail: "/projects/mindlens.png",
    year: "2026",
    language: "Python",
    featured: true,
  },
  {
    slug: "multi-agent-travel-planner",
    title: "TripWeaver",
    repo: "multi-agent-travel-planner",
    description:
      "MCP-based multi-agent travel planner over live Amadeus inventory. Capstone for the STEMLink AI Engineer Bootcamp 2.0.",
    body: "TripWeaver turns one free-text trip request into a costed, day-by-day plan. A supervisor/worker agent graph in LangGraph coordinates specialist flight, hotel and itinerary agents through shared state, and live Amadeus flight and hotel inventory reaches those agents as tools through two FastMCP servers — real Model Context Protocol tool access rather than hard-coded API calls, so tools can be swapped or added without touching agent logic.",
    highlights: [
      "Supervisor/worker agent graph in LangGraph with specialist flight, hotel and itinerary agents coordinating through shared state.",
      "Two FastMCP servers expose live Amadeus inventory as MCP tools, keeping tool wiring separate from agent logic.",
      "Streaming Gradio product over a FastAPI service layer, with token streaming and graceful degradation when an upstream provider returns no inventory.",
      "Built through the STEMLink AI Engineer Bootcamp 2.0 and assessed by viva — certified as a Gen AI Engineer.",
    ],
    technologies: ["FastAPI", "LangGraph", "FastMCP", "Amadeus API", "Gradio", "Python"],
    github_url: `${GH}/multi-agent-travel-planner`,
    demo_url: "https://multi-agent-travel-planner-jet.vercel.app",
    thumbnail: "/projects/multi-agent-travel-planner.png",
    year: "2026",
    language: "Python",
    featured: true,
  },
  {
    slug: "election-system",
    title: "Automated Presidential Election System",
    repo: "election-system",
    description:
      "End-to-end Sri Lankan election platform. Led a five-person team; selected from Batch 124 for the EXITO'26 industry exhibition.",
    body: "A complete election workflow across three role-based dashboards in English, Sinhala and Tamil: voter registration, Grama Niladhari officer verification, admin-controlled election scheduling, ranked-preference voting, live turnout monitoring and result publication. I led a five-member team — splitting scope, reviewing merges and leading the industry presentation — and owned architecture and delivery.",
    highlights: [
      "Selected from the whole of Batch 124 for the EXITO'26 Exhibition at ICBT Campus, presented to lecturers, senior students and IT industry professionals.",
      "Owned MVC structure, MySQL schema and migrations across a five-developer team.",
      "Security layer with CSRF tokens, prepared statements, password hashing, OTP + PIN authentication, session regeneration, failed-login tracking and one-vote-per-voter enforcement.",
    ],
    technologies: ["PHP 8", "MySQL 8", "Bootstrap", "Docker", "JavaScript"],
    github_url: `${GH}/election-system`,
    demo_url: "https://election-system-pearl.vercel.app",
    thumbnail: "/projects/election-system.png",
    year: "2026",
    language: "PHP",
    featured: true,
  },
  {
    slug: "nlp-suite",
    title: "Multi-Task NLP Service",
    repo: "nlp-suite-project",
    description:
      "A five-pipeline Hugging Face inference API behind a typed FastAPI layer.",
    body: "One service exposing summarisation, sentiment, zero-shot classification, named-entity recognition and extractive question answering, each behind Pydantic schemas so callers get a typed contract rather than raw pipeline output.",
    technologies: ["Python", "FastAPI", "Hugging Face", "Pydantic", "Streamlit"],
    github_url: `${GH}/nlp-suite-project`,
    demo_url: "https://nlp-suite-project.vercel.app",
    year: "2026",
    language: "Python",
  },
  {
    slug: "stellar-prediction-api",
    title: "Stellar Classification",
    repo: "stellar-prediction-api",
    description:
      "Multi-class GALAXY / STAR / QSO classification — Kaggle Playground Series S6E6, 0.95458 leaderboard score.",
    body: "Feature engineering and XGBoost hyperparameter tuning to a 0.95458 leaderboard score on Kaggle Playground Series S6E6, served through a FastAPI endpoint with a Streamlit front-end for interactive exploration.",
    technologies: ["Python", "XGBoost", "LightGBM", "FastAPI", "Streamlit"],
    github_url: `${GH}/stellar-prediction-api`,
    year: "2026",
    language: "Python",
  },
  {
    slug: "ocean-view-resort",
    title: "Ocean View Resort",
    repo: "OceanViewResort_Reservation_System",
    description: "Enterprise resort reservation and management system on Java Servlets.",
    body: "Java Servlet–based resort reservation and management system with dashboards, billing, discounts, reporting and a MySQL backend.",
    technologies: ["Java", "Servlets", "JSP", "MySQL", "Apache Tomcat"],
    github_url: `${GH}/OceanViewResort_Reservation_System`,
    year: "2025",
    language: "Java",
  },
  {
    slug: "luxevista-mobile",
    title: "LuxeVista Resort Mobile",
    repo: "luxevistaresortFinal",
    description: "Native Android hotel booking app with Firebase authentication.",
    body: "Native Java Android application for resort room booking, using Firebase for real-time updates and authentication with SQLite for local persistence.",
    technologies: ["Java", "Android Studio", "Firebase", "SQLite"],
    github_url: `${GH}/luxevistaresortFinal`,
    year: "2025",
    language: "Java",
  },
  {
    slug: "gadgethub-api",
    title: "GadgetHub",
    repo: "GadgetHub",
    description: "ASP.NET Core platform helping customers compare distributors when buying gadgets.",
    body: "An ASP.NET Core solution that helps customers choose the best distributor for a given gadget, with a modular architecture, authentication, a product catalog manager and an order processing pipeline.",
    technologies: ["C#", "ASP.NET Core", "Firebase", "SQLite"],
    github_url: `${GH}/GadgetHub`,
    year: "2025",
    language: "C#",
  },
  {
    slug: "fitzone",
    title: "FitZone",
    repo: "FitZone",
    description: "Gym management system for members, trainers and admins.",
    body: "A PHP, MySQL and Bootstrap web platform enabling profile viewing, workout scheduling, live chat and admin management across member, trainer and admin roles.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github_url: `${GH}/FitZone`,
    year: "2025",
    language: "PHP",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const MEDIUM_URL = "https://medium.com/@amirunoel8";

export const articles = [
  {
    title: "The Transformer: A Mechanical Deconstruction of the Engine Powering Modern AI",
    description:
      "How eight Google researchers in 2017 replaced an entire paradigm — and accidentally ignited the generative AI era.",
    link: "https://medium.com/@amirunoel8/the-transformer-a-mechanical-deconstruction-of-the-engine-powering-modern-ai-9bfea4a5e497",
    image: "https://cdn-images-1.medium.com/max/1024/1*xrSLdl9G6IMxVCV6sFH0og.png",
    published_date: "Mar 11, 2026",
    read_time: "10 min read",
    category: "Transformers",
    pinned: true,
  },
  {
    title: "From Neighbors to the Whole Picture: The Evolution of Sequence Modelling in AI",
    description:
      "How machine learning learned to stop looking at isolated data points and start reading the room.",
    link: "https://medium.com/@amirunoel8/from-neighbors-to-the-whole-picture-the-evolution-of-sequence-modelling-in-ai-58f8ce6b9be4",
    image: "https://cdn-images-1.medium.com/max/1024/1*59gv8CrNsm73J0LFF9wdpw.png",
    published_date: "Mar 10, 2026",
    read_time: "9 min read",
    category: "Machine Learning",
    pinned: true,
  },
  {
    title: "Machine Learning isn't magic.",
    description:
      "A breakdown of the core machine learning algorithms every AI engineer should understand — and the maths underneath them.",
    link: "https://medium.com/@amirunoel8/machine-learning-isnt-magic-ecf08ec85248",
    image: "https://cdn-images-1.medium.com/max/1024/1*4d9GLT7ZEzEf1lVGW0wxuA.png",
    published_date: "Mar 9, 2026",
    read_time: "2 min read",
    category: "Machine Learning",
    pinned: true,
  },
];

export type Article = (typeof articles)[number];
