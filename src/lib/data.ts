export const projectDetails: Record<string, any> = {
  "ocean-view-resort": {
    title: "Ocean View Resort",
    description: "Developing enterprise-level web-based resort management system with Java Servlet architecture. Implementing robust database design and RESTful API endpoints for reservation management.",
    full_content: "This project was a comprehensive dive into enterprise Java development. I handled everything from the initial database schema design in MySQL to the final frontend implementation using JSP and modern CSS. The system manages room bookings, guest profiles, and staff schedules with high efficiency.",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    github_url: "https://github.com",
    demo_url: "https://example.com",
    hf_url: null,
    wiki_url: "https://github.com/wiki",
    architecture_img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    ],
    technologies: ["Java", "Servlets", "JSP", "MySQL", "Apache Tomcat"]
  },
  "luxevista-mobile": {
    title: "LuxeVista Resort Mobile",
    description: "Created native Android application for hotel room booking with Firebase authentication. Integrated real-time database synchronization.",
    full_content: "LuxeVista Mobile brings the resort booking experience to Android. Built with native Java and Android Studio, it leverages Firebase for real-time updates and seamless authentication. The UI was designed to feel premium and intuitive for high-end travelers.",
    video_url: null,
    github_url: "https://github.com",
    demo_url: "https://play.google.com",
    hf_url: null,
    wiki_url: null,
    architecture_img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600",
    thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
    ],
    technologies: ["Java", "Android Studio", "Firebase", "SQLite"]
  },
  "gadgethub-api": {
    title: "GadgetHub API System",
    description: "Built RESTful Web API for e-commerce platform using ASP.NET Core framework. Implemented secure authentication and order processing.",
    full_content: "GadgetHub is a robust backend solution for modern e-commerce. Utilizing ASP.NET Core and C#, I implemented a modular architecture with secure JWT authentication, a complex product catalog manager, and a streamlined order processing pipeline. Firebase and SQLite were used for efficient data storage and real-time syncing.",
    video_url: null,
    github_url: "https://github.com",
    demo_url: "https://example.com",
    hf_url: null,
    wiki_url: "https://github.com/wiki",
    architecture_img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    ],
    technologies: ["C#", "ASP.NET Core", "Firebase", "SQLite"]
  }
};

export const allProjects = Object.keys(projectDetails).map(slug => ({
  slug,
  ...projectDetails[slug]
}));
