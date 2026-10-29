// Portfolio content lives here so the site can be kept in sync with the CV and GitHub.

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
  visual?: "mindlens" | "travel" | "solvix" | "data" | "security" | "mobile" | "web" | "learning";
};

export const profile = {
  name: "AMIRU",
  last_name: "MALLAWARACHCHI",
  full_name: "Amiru Mallawarachchi",
  title: "AI Engineering Student",
  subtitle: "GEN AI ENGINEERING · AGENTIC SYSTEMS · PRODUCTION AI",
  hero_line: "AI engineering student building agentic systems that hold up outside the demo.",
  bio_intro: "AI engineering student taking Gen AI from prototype to production — agentic workflows, retrieval, and the backend discipline that keeps them reliable.",
  bio_description:
    "I am a final-year Software Engineering student specialised in Gen AI — building agentic workflows, retrieval systems, reliable backends, and interfaces that hold up in the real world. I chose this path because I was drawn to the future I saw in sci-fi — from Iron Man's workshop to Wakanda's technology — and I am turning that curiosity into disciplined engineering: safe model behaviour, clear architecture, and products that survive beyond the demo.",
  status: "BSc (Hons) Software Engineering — Graduating Feb 2027",
  location: "Moratuwa, Sri Lanka",
  passions: "Agentic AI systems and production Gen AI engineering",
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
  { category: "Gen AI & Agentic Engineering", items: ["LangGraph", "LangChain", "MCP / FastMCP", "RAG pipelines", "Groq API", "Prompt & agent design", "Langfuse tracing"] },
  { category: "Models & Data", items: ["PyTorch", "Hugging Face Transformers", "Pinecone", "XGBoost", "LightGBM", "Fine-tuning", "Embeddings"] },
  { category: "Backend & APIs", items: ["FastAPI (async)", "Spring Boot 3", "REST APIs", "JWT / RBAC", "PostgreSQL", "MongoDB", "Flyway"] },
  { category: "Languages", items: ["Python", "TypeScript / JavaScript", "Java 17", "SQL", "PHP"] },
  { category: "Frontend & Product", items: ["Next.js", "React", "Tailwind CSS", "Streamlit", "Gradio", "SSE / WebSockets"] },
  { category: "Delivery & Quality", items: ["Docker", "GitHub Actions", "Vercel", "Render", "pytest", "CI/CD", "Data privacy"] },
];

export const experience = [
  {
    title: "Batch Representative",
    company: "ICBT Campus - HND in Software Engineering, Batch 124",
    period: "Apr 2023 - Present",
    description: "Represent the batch, coordinate academic activities and events, communicate student feedback to lecturers, and help resolve day-to-day issues with clarity and accountability.",
  },
  {
    title: "Member",
    company: "ICBT IEEE Student Branch",
    period: "Feb 2023 - Oct 2026",
    description: "Engaged with the student engineering community through technical knowledge sharing, professional development, and collaborative software engineering activities.",
  },
  {
    title: "Customer Service Executive",
    company: "Bellvantage (Pvt) Ltd, Colombo",
    period: "Jul 2023 - Feb 2024",
    description: "Supported Sampath Bank credit-card recovery operations with 100-150 outbound calls a day, careful CRM records, banking compliance, and data-privacy responsibilities.",
  },
];

export const education = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "Cardiff Metropolitan University (ICBT Campus, Colombo)",
    period: "Expected Feb 2027",
    description: "Final-year software engineering student building production-shaped systems across backend engineering and applied AI.",
  },
  {
    degree: "Higher National Diploma in Computing (Merit)",
    institution: "ICBT Campus, Colombo",
    period: "Completed",
    description: "Foundation in software engineering, databases, systems design, and application development.",
  },
  {
    degree: "AI Engineer Bootcamp 2.0 - Gen AI Engineer",
    institution: "STEMLink",
    period: "Feb 2026 - Jul 2026",
    description: "Hands-on training in LangChain, LangGraph, RAG, Hugging Face Transformers, prompt engineering, FastAPI, and production-minded AI systems. Outstanding distinction.",
  },
  {
    degree: "GCE Advanced Level",
    institution: "St. Sebastian's College, Moratuwa",
    period: "2019",
    description: "Foundation of engineering and mathematical study.",
  },
];

export const certifications = [
  "Gen AI Engineer - STEMLink AI Engineer Bootcamp 2.0 (Outstanding distinction)",
  "Introduction to LangChain - LangChain Academy (Apr 2026)",
  "Team Leader, EXITO'26 Exhibition - ICBT Campus (Jul 2026)",
];

export const interests = [
  "Agentic systems",
  "Production software",
  "Transformer fine-tuning",
  "Retrieval and grounding",
  "AI safety and evaluation",
  "Human-computer interaction",
  "Sci-fi technology",
  "Workout lifestyle",
  "Video games",
];

const GH = "https://github.com/AmiruMallawarachchi";

export const projects: Project[] = [
  {
    slug: "mindlens", title: "MindLens", repo: "mindlens",
    description: "A privacy-conscious multi-agent wellbeing platform with bounded LangGraph orchestration, deterministic crisis protection, and hosted retrieval.",
    body: "MindLens is a full-stack AI system for reflective mental-health support. I built the workflow around explicit nodes and conditional edges so safety, assessment, memory recall, retrieval, specialist generation, review, and persistence remain inspectable and bounded. The hosted version combines FastAPI, Next.js, Groq, Pinecone, MongoDB Atlas, and metadata-only Langfuse tracing.",
    highlights: ["Deterministic crisis screening exits before any model or retrieval call.", "PII is anonymized before external model calls; personal conversations never enter Pinecone.", "Normal turns are bounded to a maximum of three Groq calls, with graceful degradation when providers fail.", "Stable REST and WebSocket contracts connect the FastAPI backend to the Next.js frontend."],
    technologies: ["Python", "FastAPI", "LangGraph", "Groq", "Pinecone", "MongoDB", "Next.js"], github_url: `${GH}/mindlens`, demo_url: "https://mindlens-theta.vercel.app", hf_url: "https://huggingface.co/AmiruMallawarachchi", thumbnail: "/projects/mindlens.png", year: "2026", language: "Python", featured: true, visual: "mindlens",
  },
  {
    slug: "multi-agent-travel-planner", title: "TripWeaver", repo: "multi-agent-travel-planner",
    description: "An intent-routed, MCP-based travel planner that streams live flight, hotel, weather, currency, and location research into one plan.",
    body: "TripWeaver turns a free-text travel request into a structured itinerary through a Next.js interface and a FastAPI + LangGraph backend. Each capability is isolated behind its own MCP service, so specialist agents receive only the tools they are allowed to call. Account-scoped chats, structured results, and graceful provider degradation make it feel like a product rather than a prompt demo.",
    highlights: ["A LangGraph router sends requests to one of seven specialist agents.", "Six MCP services isolate flight, hotel, itinerary, weather, currency, and location tools.", "Streaming responses, Supabase authentication, plan folders, and structured travel results.", "Offline tests and CI support a deployable Vercel + Render workflow."],
    technologies: ["Next.js", "FastAPI", "LangGraph", "FastMCP", "Supabase", "Python"], github_url: `${GH}/multi-agent-travel-planner`, demo_url: "https://multi-agent-travel-planner-jet.vercel.app", thumbnail: "/projects/multi-agent-travel-planner.png", year: "2026", language: "Python", featured: true, visual: "travel",
  },
  {
    slug: "solvix", title: "Solvix", repo: "solvix",
    description: "An enterprise ticketing and operations platform that turns customer requests into clear, accountable work.",
    body: "Solvix is the software-engineering anchor of the portfolio: a secure ticketing platform with a Java 17 and Spring Boot 3 backend, a Next.js frontend, PostgreSQL persistence, Flyway migrations, Docker, and JWT-based role access. It models a six-stage ticket lifecycle in the domain layer and ships as a live Vercel, Render, and Neon deployment.",
    highlights: ["JWT authentication, BCrypt password hashing, and role-based access control for customers and support agents.", "Six-stage ticket lifecycle with domain-enforced transitions and complete activity history.", "Flyway migrations, GitHub Actions CI, Docker, and a recruiter-friendly synthetic demo environment."],
    technologies: ["Java 17", "Spring Boot 3", "PostgreSQL", "Next.js", "Docker", "JWT"], github_url: `${GH}/solvix`, demo_url: "https://solvix-amiru.vercel.app", thumbnail: "/projects/solvix.png", year: "2026", language: "Java", featured: true, visual: "solvix",
  },
  {
    slug: "nlp-suite", title: "Multi-Task NLP Intelligence Suite", repo: "nlp-suite-project",
    description: "A unified FastAPI and Next.js product exposing five Hugging Face NLP pipelines with model confidence and live analysis.", body: "The suite makes summarisation, sentiment analysis, zero-shot classification, named-entity recognition, and extractive question answering available through one typed product interface and a Hugging Face-backed service.", technologies: ["Python", "FastAPI", "Hugging Face", "Next.js", "Pydantic"], github_url: `${GH}/nlp-suite-project`, demo_url: "https://nlp-suite-project.vercel.app", year: "2026", language: "Python", visual: "data",
  },
  {
    slug: "stellar-prediction-api", title: "Stellar Object Classification", repo: "stellar-prediction-api",
    description: "A FastAPI and Streamlit classifier for GALAXY, QSO, and STAR observations using a tuned XGBoost-LightGBM ensemble.", body: "Feature engineering turns SDSS-style photometry into colour indices, redshift transforms, magnitude statistics, and interaction features before the tuned ensemble predicts the object class.", technologies: ["Python", "LightGBM", "XGBoost", "FastAPI", "Streamlit"], github_url: `${GH}/stellar-prediction-api`, year: "2026", language: "Python", visual: "data",
  },
  {
    slug: "election-system", title: "Automated Presidential Election System", repo: "election-system",
    description: "A multilingual Sri Lankan election workflow with voter registration, GN verification, secure voting, and result publication.", body: "A five-person team project selected from Batch 124 for ICBT's EXITO'26 industry exhibition. I led architecture and delivery across role-based dashboards, election scheduling, ranked-preference voting, live turnout, and security controls.", highlights: ["Selected for EXITO'26 and presented to industry professionals.", "CSRF protection, OTP + PIN authentication, password hashing, and one-vote-per-voter enforcement."], technologies: ["PHP 8", "MySQL 8", "Bootstrap", "Docker", "JavaScript"], github_url: `${GH}/election-system`, demo_url: "https://election-system-pearl.vercel.app", thumbnail: "/projects/election-system.png", year: "2026", language: "PHP", visual: "security",
  },
  {
    slug: "ocean-view-resort", title: "OceanView Resort", repo: "OceanViewResort_Reservation_System",
    description: "A Java Servlet resort operations system with reservations, billing, discounts, dashboards, reporting, and event notifications.", body: "A Maven WAR application built around Java Servlets, JSP, MySQL, HikariCP, Kafka notifications, OpenPDF, Apache POI, JUnit, Mockito, and JaCoCo.", technologies: ["Java", "Servlets", "JSP", "MySQL", "Kafka"], github_url: `${GH}/OceanViewResort_Reservation_System`, year: "2025", language: "Java", visual: "web",
  },
  {
    slug: "luxevista-mobile", title: "LuxeVista Resort Mobile", repo: "luxevistaresortFinal",
    description: "A native Android resort booking application with Firebase authentication and SQLite persistence.", body: "A Java Android application for browsing and booking resort rooms, combining Firebase authentication and real-time updates with local SQLite persistence.", technologies: ["Java", "Android", "Firebase", "SQLite"], github_url: `${GH}/luxevistaresortFinal`, year: "2025", language: "Java", visual: "mobile",
  },
  {
    slug: "gadgethub", title: "GadgetHub", repo: "GadgetHub",
    description: "An ASP.NET platform helping customers compare distributors when buying gadgets.", body: "A modular C# solution with authentication, product catalogue management, distributor comparison, and order processing.", technologies: ["C#", "ASP.NET Core", "Firebase", "SQLite"], github_url: `${GH}/GadgetHub`, year: "2025", language: "C#", visual: "web",
  },
  {
    slug: "fitzone", title: "FitZone", repo: "FitZone",
    description: "A gym management platform for members, trainers, schedules, live chat, and admin operations.", body: "A PHP, MySQL, and Bootstrap web application with separate member, trainer, and admin workflows.", technologies: ["PHP", "MySQL", "Bootstrap"], github_url: `${GH}/FitZone`, year: "2025", language: "PHP", visual: "web",
  },
  {
    slug: "syntecxhub-expense-tracker", title: "Expense Tracker", repo: "Syntecxhub_-Expense_Tracker",
    description: "A MERN expense tracker for recording income, expenses, and personal financial summaries.", body: "A remote internship build using MongoDB, Express, React, and Node.js to track income and expenses in a practical full-stack workflow.", technologies: ["MongoDB", "Express", "React", "Node.js"], github_url: `${GH}/Syntecxhub_-Expense_Tracker`, year: "2026", language: "JavaScript", visual: "data",
  },
  {
    slug: "mortgage-calculator", title: "Mortgage Calculator", repo: "mortgageCalculator",
    description: "A Java console application calculating monthly home-loan payments from principal, rate, and duration.", body: "A focused Java project applying the standard mortgage formula with clear input handling and formatted output.", technologies: ["Java", "Algorithms", "CLI"], github_url: `${GH}/mortgageCalculator`, year: "2026", language: "Java", visual: "learning",
  },
  {
    slug: "election-legacy", title: "Election System - Legacy Prototype", repo: "Election",
    description: "An earlier secure voting prototype with preference counting, multi-factor login, and audit-minded workflows.", body: "The earlier version of the election project explored PHP, MySQL, PHPMailer, CSRF protection, rate limiting, session hardening, and preference-based vote counting.", technologies: ["PHP", "MySQL", "Bootstrap", "Security"], github_url: `${GH}/Election`, year: "2025", language: "PHP", visual: "security",
  },
  {
    slug: "transformer-nextjs", title: "Transformer Notes", repo: "transformer-nextjs",
    description: "A Next.js learning build for explaining transformer concepts through an interactive web experience.", body: "A small product experiment around translating transformer architecture ideas into a clear browser-based learning interface.", technologies: ["Next.js", "TypeScript", "Transformers"], github_url: `${GH}/transformer-nextjs`, demo_url: "https://transformer-nextjs.vercel.app", year: "2026", language: "TypeScript", visual: "learning",
  },
  {
    slug: "amiru-ai-nexus", title: "Amiru AI Nexus", repo: "amiru-ai-nexus-1.0.0",
    description: "An exploratory AI product interface focused on presenting intelligent tools through a polished web experience.", body: "A visual product experiment from the early Amiru AI Lab work, useful as a record of the progression from interface ideas to production-shaped systems.", technologies: ["React", "TypeScript", "AI UX"], github_url: `${GH}/amiru-ai-nexus-1.0.0`, demo_url: "https://amiru-ai-nexus-100.vercel.app", year: "2026", language: "TypeScript", visual: "learning",
  },
  {
    slug: "enterprise-iq", title: "Enterprise IQ", repo: "enterprise-iq",
    description: "An experimental enterprise product repository exploring structured software and AI workflows.", body: "A work-in-progress repository kept in the collection as part of the broader Amiru AI Lab experimentation archive.", technologies: ["Software engineering", "AI systems"], github_url: `${GH}/enterprise-iq`, year: "2026", language: "Mixed", visual: "learning",
  },
  {
    slug: "multi-task-nlp-notebook", title: "Multi-Task NLP Notebook", repo: "Multi-Task-NLP-Intelligence-Suite",
    description: "The original notebook exploration behind the production-oriented Multi-Task NLP Intelligence Suite.", body: "A Google Colab notebook repository documenting the earlier experimentation phase of the NLP suite.", technologies: ["Python", "NLP", "Jupyter"], github_url: `${GH}/Multi-Task-NLP-Intelligence-Suite`, year: "2026", language: "Notebook", visual: "data",
  },
  {
    slug: "gen-ai-portfolio", title: "Gen AI Portfolio - Earlier Build", repo: "gen-ai-portfolio",
    description: "An earlier portfolio scaffold from the progression toward the current portfolio system.", body: "An archived Next.js portfolio experiment retained to show the evolution of the portfolio and product presentation work.", technologies: ["Next.js", "TypeScript", "Tailwind CSS"], github_url: `${GH}/gen-ai-portfolio`, year: "2026", language: "TypeScript", visual: "learning",
  },
  {
    slug: "amiru-portfolio-legacy", title: "Amiru Portfolio - Earlier Build", repo: "amiru",
    description: "An earlier AI engineer portfolio exploration with animation, 3D, and Supabase ideas.", body: "An archived portfolio repository exploring a different visual direction before the current focused portfolio system.", technologies: ["Next.js", "TypeScript", "Three.js", "Supabase"], github_url: `${GH}/amiru`, year: "2026", language: "TypeScript", visual: "learning",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

const recruiterOrder = [
  "mindlens",
  "multi-agent-travel-planner",
  "solvix",
  "election-system",
  "fitzone",
  "ocean-view-resort",
  "nlp-suite",
  "luxevista-mobile",
  "stellar-prediction-api",
];

export const orderedProjects = [...projects].sort((a, b) => {
  const aIndex = recruiterOrder.indexOf(a.slug);
  const bIndex = recruiterOrder.indexOf(b.slug);
  return (aIndex === -1 ? recruiterOrder.length : aIndex) - (bIndex === -1 ? recruiterOrder.length : bIndex);
});

export const MEDIUM_URL = "https://medium.com/@amirunoel8";

export const articles = [
  {
    title: "The Transformer: A Mechanical Deconstruction of the Engine Powering Modern AI",
    description: "How the 2017 Transformer paper replaced an entire paradigm and ignited the generative AI era.",
    link: "https://medium.com/@amirunoel8/the-transformer-a-mechanical-deconstruction-of-the-engine-powering-modern-ai-9bfea4a5e497",
    image: "https://cdn-images-1.medium.com/max/1024/1*xrSLdl9G6IMxVCV6sFH0og.png", published_date: "Mar 11, 2026", read_time: "10 min read", category: "Transformers", pinned: true,
  },
  {
    title: "From Neighbors to the Whole Picture: The Evolution of Sequence Modelling in AI",
    description: "How machine learning learned to stop looking at isolated data points and start reading the room.",
    link: "https://medium.com/@amirunoel8/from-neighbors-to-the-whole-picture-the-evolution-of-sequence-modelling-in-ai-58f8ce6b9be4",
    image: "https://cdn-images-1.medium.com/max/1024/1*59gv8CrNsm73J0LFF9wdpw.png", published_date: "Mar 10, 2026", read_time: "9 min read", category: "Machine Learning", pinned: true,
  },
  {
    title: "Machine Learning isn't magic.",
    description: "A practical breakdown of the core machine-learning algorithms every AI engineer should understand.",
    link: "https://medium.com/@amirunoel8/machine-learning-isnt-magic-ecf08ec85248",
    image: "https://cdn-images-1.medium.com/max/1024/1*4d9GLT7ZEzEf1lVGW0wxuA.png", published_date: "Mar 9, 2026", read_time: "2 min read", category: "Machine Learning", pinned: true,
  },
];

export type Article = (typeof articles)[number];
