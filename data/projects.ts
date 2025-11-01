// data/projects.ts
export type Project = {
  title: string
  slug: string
  year: string
  blurb: string
  stack: string[]
  highlights: string[]
  kpis?: string[]
  challenges?: string[]
  repo?: string
  live?: string
}

export const projects: Project[] = [

  // 7) Microsoft × MU — AI Chatbot (experience project)
  {
    title: "AI Chatbot (Microsoft × Maynooth University)",
    slug: "ms-mu-ai-chatbot",
    year: "2025",
    blurb: "Azure OpenAI chatbot with OCR for accessibility; allergen detection and nutrition insights.",
    stack: ["Azure OpenAI", "OCR", "NLP"],
    highlights: ["Accessibility focus", "Feature‑complete prototype within academic timeline"],
    kpis: ["Improved engagement via real‑time allergen detection", "Six‑month nutrition insights"],
  },
  // 1) Music Management App — from CV
  {
    title: "Music Management App",
    slug: "music-management",
    year: "2025",
    blurb: "CRUD catalog for 5,000+ records with fast search and clean API integration.",
    stack: ["React", "Node", "Express", "MySQL", "Axios", "Tailwind"],
    highlights: [
      "Responsive, accessible UI with keyboard-friendly flows",
      "Seamless API integration and batch operations",
    ],
    kpis: [
      "Catalog size: 5,000+ records",
      "Single‑record create/update in under a second on local demo",
    ],
    challenges: [
      "Schema design for fast lookups vs. flexible metadata",
      "Keeping UI snappy with large lists (pagination + indexed queries)",
    ],
    repo: "https://github.com/IsaacElue", // replace with repo URL when ready
  },

  // 2) AI Rota Assistant (pilot)
  {
    title: "AI Rota Assistant (pilot)",
    slug: "ai-rota-assistant",
    year: "2025–2026",
    blurb: "Scheduling automations for SMEs via WhatsApp + Zapier + OpenAI.",
    stack: ["Zapier", "OpenAI", "WhatsApp Cloud", "Node"],
    highlights: [
      "WhatsApp intent capture → scheduling sheet/API",
      "Availability/overtime guardrails",
    ],
    kpis: ["Target: 2–4 hrs/week saved", "Target: −25% swap requests"],
  },

  {
  title: "EV Data Analytics Dashboard",
  slug: "ev-analytics-dashboard",
  year: "2025",
  blurb: "SQL → Power BI pipeline across 475 EV models; surfaced brand efficiency trends for stakeholders.",
  stack: ["MySQL", "Power BI", "Excel/Power Query"],
  highlights: [
    "Cleaned/standardized raw datasets; SQL EDA on battery, range, drivetrain efficiency",
    "Interactive Power BI dashboard answering stakeholder questions",
  ],
  kpis: [
    "475 models analyzed",
    "Brand efficiency + range KPIs exposed via interactive views",
  ],
  challenges: [
    "Normalizing inconsistent source schemas across manufacturers",
    "Balancing detail vs. readability in dashboard visuals",
  ],
  repo: "https://github.com/IsaacElue/ELECTRIC-VEHICLE-ANALYSIS-PROJECT-PORTFOLIO", // replace with exact repo if you have it
  // live: "https://..." // optional if you publish a web preview
},


  // 4) Layoffs Data Analysis — from CV
  {
    title: "Layoffs Data Analysis",
    slug: "layoffs-sql-pipeline",
    year: "2025",
    blurb: "End‑to‑end SQL pipeline to clean and analyze global layoff data (Kaggle).",
    stack: ["MySQL", "SQL", "Workbench"],
    highlights: [
      "Staging tables + transformations for consistent schema",
      "Exploratory analysis by company, industry, year",
    ],
    kpis: ["Trend views by sector/year", "Top impacted companies derived"],
    repo: "https://github.com/IsaacElue/Layoffs-Data-Analysis-Project", // replace when repo is public
  },

  // 5) Therapist–Client Management System (course project)
  {
    title: "Therapist–Client Management System",
    slug: "therapist-client-management",
    year: "2025",
    blurb: "Role‑based dashboard to manage therapists, clients, and sessions.",
    stack: ["React", "Node", "Express", "SQL"],
    highlights: ["Role‑based views", "CRUD sessions/clients/therapists"],
  },

  // 6) Travel Blog Application (course project)
  {
    title: "Travel Blog Application",
    slug: "travel-blog",
    year: "2025",
    blurb: "Authenticated blogging platform with post management and responsive UI.",
    stack: ["React", "Node", "Express", "MySQL", "Axios"],
    highlights: ["JWT auth and protected routes", "CRUD posts/comments"],
  },

]

