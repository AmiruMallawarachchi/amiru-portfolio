// Portfolio content lives here so the site can be kept in sync with the CV and GitHub.

export type Project = {
  slug: string;
  title: string;
  repo: string;
  description: string;
  body: string;
  overview?: string;
  problem?: string;
  architecture?: { title: string; detail: string }[];
  highlights?: string[];
  technologies: string[];
  stackNotes?: Record<string, string>;
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
  visual?: "mindlens" | "travel" | "documind" | "solvix" | "data" | "security" | "mobile" | "web" | "learning";
};

export const profile = {
  name: "AMIRU",
  last_name: "MALLAWARACHCHI",
  full_name: "Amiru Mallawarachchi",
  title: "AI Engineering Student",
  subtitle: "GEN AI ENGINEERING · AGENTIC SYSTEMS · PRODUCTION AI",
  hero_line: "I build AI systems that still work when nobody is watching the demo.",
  bio_intro: "Final-year software engineering student. I build AI systems, and I care about what happens after they work once.",
  bio_description:
    "I'm in my final year of Software Engineering at Cardiff Metropolitan University, studying through ICBT in Colombo, and most of what I build is agentic: LangGraph workflows, retrieval over real documents, and the FastAPI services underneath them. I got into this through sci-fi, the workshop and the lab scenes, and stayed because building it turned out to be harder and more interesting than watching it.",
  status: "BSc (Hons) Software Engineering — Graduating Feb 2027",
  location: "Moratuwa, Sri Lanka",
  passions: "Agentic systems, retrieval, and the unglamorous parts that keep them running",
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
    description: "I represent Batch 124 to the lecturers: passing on feedback, coordinating academic activities and events, and sorting out day-to-day problems before they turn into complaints.",
  },
  {
    title: "Member",
    company: "ICBT IEEE Student Branch",
    period: "Feb 2023 - Oct 2026",
    description: "Took part in the branch's technical sessions and student activities, mostly the software engineering side of the programme.",
  },
  {
    title: "Customer Service Executive",
    company: "Bellvantage (Pvt) Ltd, Colombo",
    period: "Jul 2023 - Feb 2024",
    description: "Worked on Sampath Bank credit-card recovery: 100 to 150 outbound calls a day, careful CRM notes, and banking rules on what you may and may not say on a recorded line. It taught me how much of software is really about not losing someone's data.",
  },
];

export const education = [
  {
    degree: "BSc (Hons) Software Engineering",
    institution: "Cardiff Metropolitan University (ICBT Campus, Colombo)",
    period: "Expected Feb 2027",
    description: "Final year. Most of my modules have ended in a shipped system rather than a report, which is how I ended up working on backends and applied AI at the same time.",
  },
  {
    degree: "Higher National Diploma in Computing (Merit)",
    institution: "ICBT Campus, Colombo",
    period: "Completed",
    description: "Databases, systems design, and application development. This is where I learned to finish things.",
  },
  {
    degree: "AI Engineer Bootcamp 2.0 - Gen AI Engineer",
    institution: "STEMLink",
    period: "Feb 2026 - Jul 2026",
    description: "LangChain, LangGraph, RAG, Hugging Face Transformers, prompt engineering, and FastAPI. Finished with an outstanding distinction.",
  },
  {
    degree: "GCE Advanced Level",
    institution: "St. Sebastian's College, Moratuwa",
    period: "2019",
    description: "Maths and science stream. Still the reason I enjoy a well-formed problem.",
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

// One line per technology, shown when a visitor hovers or focuses a stack chip.
// Kept here rather than in the components so a project can explain its own use
// of a tool with `stackNotes` when the default line is too generic.
export const TECH_NOTES: Record<string, string> = {
  Python: "The language both AI backends are written in, from the graph definitions down to the tests.",
  FastAPI: "Async HTTP layer. Pydantic models validate every request and define the OpenAPI schema.",
  LangGraph: "The workflow engine. Nodes and conditional edges are explicit, so each turn can be traced and bounded.",
  LangChain: "Used for the smaller pieces around LangGraph: prompt templates, output parsers, and provider adapters.",
  Groq: "Model inference. Fast enough to keep a multi-step graph inside a usable response time.",
  Pinecone: "Vector store for retrieval. Holds embeddings and never receives personal conversation text.",
  MongoDB: "Document store for conversations, messages, and user records.",
  "MongoDB Atlas": "Managed MongoDB. Chosen because the free tier is genuinely free and the driver story is boring.",
  "Next.js": "Frontend framework: server rendering, routing, and the API boundary where it is needed.",
  "FastMCP": "Each external capability is its own MCP server, so an agent only sees the tools it is allowed to call.",
  MCP: "Model Context Protocol. The contract between the router and each specialist tool service.",
  Supabase: "Authentication and Postgres for saved plans and account-scoped chat history.",
  "Java 17": "The backend language for the ticketing platform. Records and pattern matching keep the domain model readable.",
  "Spring Boot 3": "Application framework: dependency injection, validation, security filters, and REST controllers.",
  PostgreSQL: "Relational store. Ticket lifecycle rules are enforced in the schema as well as the domain layer.",
  Docker: "Both services run as containers, so local and deployed behaviour match.",
  JWT: "Stateless session tokens, signed server-side and checked on every protected request.",
  "Hugging Face": "Model hosting and inference for the NLP suite's five pipelines.",
  "Hugging Face Transformers": "Model loading and tokenisation for summarisation, sentiment, NER, and question answering.",
  Pydantic: "Request and response schemas. Wrong shapes fail at the edge with a clear error, not deep inside a handler.",
  LightGBM: "Gradient-boosted trees, one half of the stellar-object ensemble.",
  XGBoost: "The other half of the ensemble. Cross-checked against LightGBM to keep the vote honest.",
  Streamlit: "A quick analyst-facing UI for the classifier, kept separate from the API.",
  "PHP 8": "Server-rendered application code for the election system and the smaller web apps.",
  "MySQL 8": "Relational storage for voters, candidates, and results.",
  Bootstrap: "Layout and components. Fast to build with, and predictable on older browsers.",
  JavaScript: "Client-side validation and the interactive parts of the PHP applications.",
  Java: "Servlets, Android, and coursework projects. The language I reach for when structure matters more than speed of writing.",
  Servlets: "Request handling without a framework, which makes the HTTP contract very obvious.",
  JSP: "Server-rendered pages for the resort reservation system.",
  Kafka: "Event stream for booking and billing notifications.",
  Android: "Native mobile client, built during the HND.",
  Firebase: "Authentication, and real-time updates for the mobile booking app.",
  SQLite: "Local persistence on the device, so the app still works with a weak connection.",
  "C#": "ASP.NET Core backend for the distributor comparison platform.",
  "ASP.NET Core": "Modular C# application with authentication, catalogue management, and order processing.",
  Express: "Node HTTP layer for the expense tracker.",
  React: "Component layer for the expense tracker and the earlier interface experiments.",
  "Node.js": "Runtime for the Express backend.",
  TypeScript: "Types across the frontend and the earlier experiments. Most of my newer code is written in it.",
  Tailwind: "Utility CSS. The design system here is a small set of tokens rather than a component library.",
  "Tailwind CSS": "Utility CSS driven by the design tokens in globals.css.",
  Transformers: "Notes and experiments on attention, tokenisation, and sequence modelling.",
  NLP: "The umbrella for the five tasks in the suite: summarisation, sentiment, zero-shot classification, NER, and QA.",
  Jupyter: "Notebook exploration that came before the suite was turned into an API.",
  Algorithms: "The mortgage formula, implemented carefully and checked by hand.",
  CLI: "Console interface. No framework, just input, output, and error messages that make sense.",
  Security: "CSRF tokens, rate limiting, session hardening, and hashed credentials.",
  "Three.js": "An earlier portfolio experiment in 3D, kept in the archive.",
  "AI UX": "Interface experiments for presenting model output without hiding what is happening.",
  "Software engineering": "An experimental repository, kept for the record rather than as a finished product.",
  "AI systems": "An experimental repository, kept for the record rather than as a finished product.",
  // Per-project additions
  "Langfuse": "Metadata-only tracing. Enough to see which node ran and how long it took, without storing message content.",
  "sentence-transformers": "Embeddings run in-process, so indexing a document does not depend on a second API key.",
};

export const projects: Project[] = [
  {
    slug: "mindlens",
    title: "MindLens",
    repo: "mindlens",
    description:
      "A wellbeing chat app built on LangGraph, where the safety checks run before any model does and conversations stay private.",
    body: "MindLens is the project I've spent the most time on. The chat window is the easy part. The work was making the graph behave: every turn is assessed, then either leaves through a crisis path or continues through memory, retrieval, a specialist node, and a review node. I kept the edges explicit so I could explain why a particular answer came out the way it did.",
    overview:
      "A full-stack mental-health support system with a Python backend, a Next.js frontend, and a graph that decides what each message is allowed to do next.",
    problem:
      "Wellbeing chatbots tend to fail the same way: they answer confidently when the right response is to stop and hand over. I wanted stopping to be a code path, not a sentence in a system prompt that a model might ignore.",
    architecture: [
      { title: "Intake and screening", detail: "Deterministic rules run first. If a turn matches a crisis pattern, the graph exits to a safe response before any model or retrieval call is made." },
      { title: "Memory and retrieval", detail: "The turn is anonymised, then embedded. Personal text stays in MongoDB; only embeddings go to Pinecone, and only hosted retrieval joins the prompt." },
      { title: "Specialist and review", detail: "A specialist node drafts the reply and a review node checks it. A normal turn is capped at three Groq calls, so a slow provider cannot stall the conversation." },
      { title: "Transport", detail: "REST for durable actions and a WebSocket for the streaming reply, with typed contracts shared by both sides." },
    ],
    highlights: [
      "Crisis screening is code that runs before the model, not an instruction inside the prompt.",
      "Personal text is anonymised before it leaves the service; Pinecone only holds embeddings.",
      "Three Groq calls per normal turn, with a visible fallback instead of a spinner that never ends.",
      "Metadata-only Langfuse traces, so debugging never means reading someone's conversation.",
    ],
    stackNotes: {
      Python: "Backend language. The graph, the safety rules, and the API all live here.",
      FastAPI: "Async API and WebSocket endpoint, with Pydantic models for every message shape.",
      LangGraph: "Assessment, crisis exit, memory, retrieval, specialist, and review are explicit nodes.",
      Groq: "Three calls per normal turn. The cap is a design decision, not a coincidence.",
      Pinecone: "Holds embeddings for hosted retrieval only. No raw conversation text is stored there.",
      MongoDB: "Conversation and user records, including the messages that must never reach a vector store.",
      "Next.js": "The chat interface, streaming UI states, and the pages you are reading now.",
    },
    technologies: ["Python", "FastAPI", "LangGraph", "Groq", "Pinecone", "MongoDB", "Next.js"],
    github_url: `${GH}/mindlens`,
    demo_url: "https://mindlens-theta.vercel.app",
    hf_url: "https://huggingface.co/AmiruMallawarachchi",
    thumbnail: "/projects/mindlens.png",
    year: "2026",
    language: "Python",
    featured: true,
    visual: "mindlens",
  },
  {
    slug: "multi-agent-travel-planner",
    title: "TripWeaver",
    repo: "multi-agent-travel-planner",
    description:
      "Ask for a trip in plain language and a router sends the request to specialist agents, each with its own MCP tool service.",
    body: "TripWeaver started as a test of one question: can a planner research flights, hotels, weather, currency, and places without every agent seeing every tool? The answer was six small MCP services and a LangGraph router that decides which ones a request actually needs. Plans stream in as they are built, and anything that fails degrades into a note rather than a broken page.",
    overview:
      "A Next.js front end and a FastAPI + LangGraph backend, where each research capability is a separate MCP service instead of a function the model can call by accident.",
    problem:
      "Give one agent fifteen tools and it will eventually call the wrong one. Travel planning needs live data from six unrelated providers, and a single bad tool call produces an itinerary that looks fine and is wrong.",
    architecture: [
      { title: "Intent routing", detail: "A LangGraph router classifies the request and picks one of seven specialist agents. Nothing else runs." },
      { title: "Tool isolation", detail: "Six FastMCP services wrap flights, hotels, itinerary building, weather, currency, and location. An agent gets access to its own service and nothing more." },
      { title: "Streaming results", detail: "Partial plans stream to the browser as each service returns, so the interface is never waiting on the slowest provider." },
      { title: "Accounts", detail: "Supabase sessions scope chats to a user, and plans can be saved into folders and reopened later." },
    ],
    highlights: [
      "Seven specialist agents behind one router, with tool access scoped per agent.",
      "Six MCP services, each independently deployable and testable.",
      "Streaming plan construction with graceful degradation when a provider is down.",
      "Offline tests and CI, so the graph can be verified without spending API credits.",
    ],
    stackNotes: {
      "Next.js": "Streaming UI, authentication flow, and saved plans.",
      FastAPI: "Backend service and the boundary the MCP clients talk through.",
      LangGraph: "The router and the seven specialist paths.",
      FastMCP: "Six separate tool servers, one per travel capability.",
      Supabase: "Accounts, sessions, and the plan folders.",
      Python: "Everything server-side, including the MCP services.",
    },
    technologies: ["Next.js", "FastAPI", "LangGraph", "FastMCP", "Supabase", "Python"],
    github_url: `${GH}/multi-agent-travel-planner`,
    demo_url: "https://multi-agent-travel-planner-jet.vercel.app",
    thumbnail: "/projects/multi-agent-travel-planner.png",
    year: "2026",
    language: "Python",
    featured: true,
    visual: "travel",
  },
  {
    slug: "documind",
    title: "DocuMind",
    repo: "documind-ai",
    description:
      "Upload a document, ask a question, and a critic agent checks every claim against your sources before the answer appears.",
    body: "DocuMind is document Q&A with one extra step. A four-agent LangGraph pipeline retrieves the relevant passages, drafts an answer with inline citations, and then a critic reads the draft against those same passages. If a claim is not supported, the draft goes back for one revision. Nothing streams to the browser until that check finishes, which is why the UI can say, honestly, that the answer is being checked.",
    overview:
      "A FastAPI and Next.js product with authentication, per-user document namespaces, rate limiting, and a 203-test suite that runs with no credentials at all.",
    problem:
      "A plain RAG chain always answers. It retrieves something, writes something confident, and leaves the reader to notice that the citation does not say what the answer claims it says.",
    architecture: [
      { title: "Ingestion", detail: "PDF, DOCX, and TXT are parsed, split, and embedded with an in-process sentence-transformers model. Nothing leaves the machine to be indexed." },
      { title: "Four-agent graph", detail: "Retrieve, draft with citations, critique, then either accept or revise once. The critic has veto power, and the revision budget is one." },
      { title: "Tenant isolation", detail: "A session token scopes every read and search to the account that uploaded the document. Argon2id password hashing at the OWASP baseline." },
      { title: "Failure handling", detail: "The health endpoint never touches the database, so a five-second Atlas blip cannot trigger a restart loop on Render." },
    ],
    highlights: [
      "A critic agent verifies the draft against retrieved passages before any text streams.",
      "At most one revision, which keeps latency and cost predictable.",
      "203 tests that need no API keys, so CI can run the whole suite for free.",
      "Register returns the same 202 whether the address is new or old, and a wrong address and a wrong password give one identical 401.",
    ],
    stackNotes: {
      Python: "Backend language, including the graph, ingestion, and the test suite.",
      FastAPI: "API, authentication, and the streaming endpoint behind the chat UI.",
      LangGraph: "Four nodes with conditional edges, including the revision loop.",
      Groq: "Answer and critique generation, kept fast enough for a streamed response.",
      Pinecone: "One serverless index, namespaced per account.",
      MongoDB: "Users, documents, conversations, and message history.",
      "Next.js": "Upload, chat, and account screens, with the status labels driven by real backend events.",
      "sentence-transformers": "Embeddings computed in-process with all-MiniLM-L6-v2, so ingestion needs no third-party API.",
    },
    technologies: ["Python", "FastAPI", "LangGraph", "Groq", "Pinecone", "MongoDB", "Next.js", "sentence-transformers"],
    github_url: `${GH}/documind-ai`,
    demo_url: "https://documind-kappa-indol.vercel.app",
    year: "2026",
    language: "Python",
    featured: true,
    visual: "documind",
    thumbnail: "/projects/documind.png",
  },
  {
    slug: "solvix",
    title: "Solvix",
    repo: "solvix",
    description:
      "An enterprise ticketing platform on Java and Spring Boot, with a six-stage ticket lifecycle and role-based access control.",
    body: "Solvix is the non-AI half of my portfolio, and deliberately so. It is a ticketing system with a Java 17 and Spring Boot 3 backend, a Next.js frontend, PostgreSQL with Flyway migrations, Docker, and JWT-based role access. The domain model enforces six lifecycle stages, so a ticket cannot jump from Open to Resolved by editing a request body.",
    overview:
      "A live deployment on Vercel, Render, and Neon, built to show that the backend discipline behind the AI projects is not a side effect of using Python.",
    problem:
      "Most ticketing demos let any user change any field. Real support work needs transitions that are checked server-side, an audit trail, and a difference between what a customer can do and what an agent can do.",
    architecture: [
      { title: "Domain layer", detail: "Ticket states and allowed transitions live in code, not in the controller. Invalid transitions are rejected with a reason." },
      { title: "Access control", detail: "JWT sessions, BCrypt hashes, and roles for customers and support agents. Endpoints check both role and ownership." },
      { title: "Persistence", detail: "PostgreSQL with Flyway migrations and activity history on every ticket." },
      { title: "Delivery", detail: "Docker for both services, GitHub Actions for CI, and a seeded demo environment for reviewers." },
    ],
    highlights: [
      "Six-stage lifecycle with transitions enforced in the domain layer.",
      "JWT authentication, BCrypt hashing, and role checks on both customers and agents.",
      "Flyway migrations and an activity history that makes every change traceable.",
      "Seeded demo data, so a reviewer can log in without creating an account.",
    ],
    stackNotes: {
      "Java 17": "Backend language. Records keep the DTOs short and the domain model readable.",
      "Spring Boot 3": "Injection, validation, security filters, and REST controllers.",
      PostgreSQL: "Tickets, users, comments, and the activity history behind each one.",
      "Next.js": "Frontend for the agent and customer views.",
      Docker: "Both services containerised for a deployment that matches local.",
      JWT: "Stateless sessions, signed server-side and verified on every protected route.",
    },
    technologies: ["Java 17", "Spring Boot 3", "PostgreSQL", "Next.js", "Docker", "JWT"],
    github_url: `${GH}/solvix`,
    demo_url: "https://solvix-amiru.vercel.app",
    thumbnail: "/projects/solvix.png",
    year: "2026",
    language: "Java",
    visual: "solvix",
  },
  {
    slug: "nlp-suite",
    title: "Multi-Task NLP Intelligence Suite",
    repo: "nlp-suite-project",
    description:
      "Five Hugging Face pipelines behind one typed interface: summarisation, sentiment, zero-shot classification, named-entity recognition, and question answering.",
    body: "Before the agent work, I wanted to understand the models themselves. This suite wraps five pipelines in a single FastAPI service and a Next.js UI, with the model's confidence returned alongside every result instead of hidden behind a polished label.",
    highlights: [
      "One request schema per task, validated at the edge.",
      "Confidence scores returned, not rounded away.",
      "The API can run without the UI, which made it testable.",
    ],
    technologies: ["Python", "FastAPI", "Hugging Face", "Next.js", "Pydantic"],
    github_url: `${GH}/nlp-suite-project`,
    demo_url: "https://nlp-suite-project.vercel.app",
    year: "2026",
    language: "Python",
    visual: "data",
  },
  {
    slug: "stellar-prediction-api",
    title: "Stellar Object Classification",
    repo: "stellar-prediction-api",
    description:
      "A classifier that separates GALAXY, QSO, and STAR observations using a tuned XGBoost and LightGBM ensemble.",
    body: "Photometry from SDSS observations, turned into colour indices, redshift transforms, magnitude statistics, and interaction features. The two models are tuned separately and compared, which made the feature work the interesting part rather than the model choice.",
    technologies: ["Python", "LightGBM", "XGBoost", "FastAPI", "Streamlit"],
    github_url: `${GH}/stellar-prediction-api`,
    year: "2026",
    language: "Python",
    visual: "data",
  },
  {
    slug: "election-system",
    title: "Automated Presidential Election System",
    repo: "election-system",
    description:
      "A multilingual election workflow with voter registration, GN verification, ranked-preference voting, and result publication.",
    body: "A five-person team project that was selected for ICBT's EXITO'26 industry exhibition. I led architecture and delivery across role-based dashboards, scheduling, live turnout, and the security controls that stop a voter from voting twice.",
    highlights: [
      "Selected for EXITO'26 and presented to industry professionals.",
      "CSRF protection, OTP and PIN authentication, and one-vote-per-voter enforcement.",
    ],
    technologies: ["PHP 8", "MySQL 8", "Bootstrap", "Docker", "JavaScript"],
    github_url: `${GH}/election-system`,
    demo_url: "https://election-system-pearl.vercel.app",
    thumbnail: "/projects/election-system.png",
    year: "2026",
    language: "PHP",
    visual: "security",
  },
  {
    slug: "ocean-view-resort",
    title: "OceanView Resort",
    repo: "OceanViewResort_Reservation_System",
    description:
      "A Java Servlet resort system covering reservations, billing, discounts, dashboards, reporting, and booking notifications.",
    body: "A Maven WAR application built on Servlets, JSP, and MySQL, with HikariCP for connection pooling, Kafka for notifications, OpenPDF and Apache POI for the reports, and JUnit, Mockito, and JaCoCo for the tests.",
    technologies: ["Java", "Servlets", "JSP", "MySQL", "Kafka"],
    github_url: `${GH}/OceanViewResort_Reservation_System`,
    year: "2025",
    language: "Java",
    visual: "web",
  },
  {
    slug: "luxevista-mobile",
    title: "LuxeVista Resort Mobile",
    repo: "luxevistaresortFinal",
    description: "A native Android booking app with Firebase authentication and SQLite persistence offline.",
    body: "A Java Android application for browsing and booking rooms. Firebase handles accounts and real-time updates; SQLite keeps the app usable when the connection is not.",
    technologies: ["Java", "Android", "Firebase", "SQLite"],
    github_url: `${GH}/luxevistaresortFinal`,
    year: "2025",
    language: "Java",
    visual: "mobile",
  },
  {
    slug: "gadgethub",
    title: "GadgetHub",
    repo: "GadgetHub",
    description: "An ASP.NET platform for comparing distributors when buying gadgets.",
    body: "A modular C# solution with authentication, catalogue management, distributor comparison, and order processing.",
    technologies: ["C#", "ASP.NET Core", "Firebase", "SQLite"],
    github_url: `${GH}/GadgetHub`,
    year: "2025",
    language: "C#",
    visual: "web",
  },
  {
    slug: "fitzone",
    title: "FitZone",
    repo: "FitZone",
    description: "A gym management platform for members, trainers, schedules, live chat, and admin operations.",
    body: "A PHP and MySQL application with separate member, trainer, and admin workflows, built as a group project during the HND.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    github_url: `${GH}/FitZone`,
    year: "2025",
    language: "PHP",
    visual: "web",
  },
  {
    slug: "syntecxhub-expense-tracker",
    title: "Expense Tracker",
    repo: "Syntecxhub_-Expense_Tracker",
    description: "A MERN expense tracker for income, expenses, and a monthly summary.",
    body: "Built during a remote internship with Syntecxhub: MongoDB, Express, React, and Node.js in the stack most tutorials teach, done properly end to end.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    github_url: `${GH}/Syntecxhub_-Expense_Tracker`,
    year: "2026",
    language: "JavaScript",
    visual: "data",
  },
  {
    slug: "mortgage-calculator",
    title: "Mortgage Calculator",
    repo: "mortgageCalculator",
    description: "A Java console application that works out monthly home-loan payments.",
    body: "A small project I still like: the standard mortgage formula, careful input handling, and output that a person can actually read.",
    technologies: ["Java", "Algorithms", "CLI"],
    github_url: `${GH}/mortgageCalculator`,
    year: "2026",
    language: "Java",
    visual: "learning",
  },
  {
    slug: "election-legacy",
    title: "Election System - Legacy Prototype",
    repo: "Election",
    description: "The first version of the election system, kept as a record of how the design changed.",
    body: "PHP, MySQL, PHPMailer, CSRF tokens, rate limiting, and preference-based counting. The later team build replaced most of it, but this is where the security decisions were first made.",
    technologies: ["PHP", "MySQL", "Bootstrap", "Security"],
    github_url: `${GH}/Election`,
    year: "2025",
    language: "PHP",
    visual: "security",
  },
  {
    slug: "transformer-nextjs",
    title: "Transformer Notes",
    repo: "transformer-nextjs",
    description: "An interactive Next.js page for explaining how transformer attention works.",
    body: "A small learning build: turning notes on attention, tokenisation, and sequence modelling into something you can click through.",
    technologies: ["Next.js", "TypeScript", "Transformers"],
    github_url: `${GH}/transformer-nextjs`,
    demo_url: "https://transformer-nextjs.vercel.app",
    year: "2026",
    language: "TypeScript",
    visual: "learning",
  },
  {
    slug: "amiru-ai-nexus",
    title: "Amiru AI Nexus",
    repo: "amiru-ai-nexus-1.0.0",
    description: "An early interface experiment for presenting AI tools in one place.",
    body: "From the Amiru AI Lab experiments. It is a record of the interface ideas that came before the production-shaped projects, and I keep it public for that reason.",
    technologies: ["React", "TypeScript", "AI UX"],
    github_url: `${GH}/amiru-ai-nexus-1.0.0`,
    demo_url: "https://amiru-ai-nexus-100.vercel.app",
    year: "2026",
    language: "TypeScript",
    visual: "learning",
  },
  {
    slug: "enterprise-iq",
    title: "Enterprise IQ",
    repo: "enterprise-iq",
    description: "An experimental repository exploring structured enterprise workflows.",
    body: "Work in progress, kept public so the experiments are not lost. Not something I would show as finished work.",
    technologies: ["Software engineering", "AI systems"],
    github_url: `${GH}/enterprise-iq`,
    year: "2026",
    language: "Mixed",
    visual: "learning",
  },
  {
    slug: "multi-task-nlp-notebook",
    title: "Multi-Task NLP Notebook",
    repo: "Multi-Task-NLP-Intelligence-Suite",
    description: "The Colab notebooks that came before the NLP suite became an API.",
    body: "Exploration first, product second. These notebooks are where the five tasks in the suite were tested before any of it was wrapped in a service.",
    technologies: ["Python", "NLP", "Jupyter"],
    github_url: `${GH}/Multi-Task-NLP-Intelligence-Suite`,
    year: "2026",
    language: "Notebook",
    visual: "data",
  },
  {
    slug: "gen-ai-portfolio",
    title: "Gen AI Portfolio - Earlier Build",
    repo: "gen-ai-portfolio",
    description: "The previous version of this site, kept for comparison.",
    body: "An archived Next.js portfolio. Useful mostly for seeing what I would do differently now.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github_url: `${GH}/gen-ai-portfolio`,
    year: "2026",
    language: "TypeScript",
    visual: "learning",
  },
  {
    slug: "amiru-portfolio-legacy",
    title: "Amiru Portfolio - Earlier Build",
    repo: "amiru",
    description: "A much earlier portfolio exploration with animation, 3D, and Supabase.",
    body: "The first attempt at this site. Too much motion, not enough writing, but it taught me what the current version needed to be.",
    technologies: ["Next.js", "TypeScript", "Three.js", "Supabase"],
    github_url: `${GH}/amiru`,
    year: "2026",
    language: "TypeScript",
    visual: "learning",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

// MindLens, TripWeaver, and DocuMind lead. Everything else follows in rough
// order of how much there is to talk about in an interview.
const recruiterOrder = [
  "mindlens",
  "multi-agent-travel-planner",
  "documind",
  "solvix",
  "election-system",
  "nlp-suite",
  "ocean-view-resort",
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
