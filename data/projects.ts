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
  title: "Grocery Guardian (Microsoft × Maynooth University)",
  slug: "grocery-guardian",
  year: "2025",
  blurb: "AI-powered allergen safety and shopping assistant: scan barcodes, flag allergens, suggest safe alternatives, and chat for recipes.",
  stack: ["OpenAI API", "Azure SQL", "Google OAuth", "Apple Login", "HTML/CSS/JS"],
  highlights: [
    "Barcode scanning → allergen detection with synonym handling",
    "AI assistant for recipes and nutrition guidance",
    "Secure auth via Google and Apple",
  ],
  kpis: [
    "Instant allergen alerts at scan time",
    "Single flow for scan → safety → alternatives → chat",
  ],
  challenges: [
    "Normalizing product/allergen synonym lists",
    "Balancing recall (caution) vs false positives in alerts",
  ],
  repo: "https://github.com/gabrieltoadere/AI-Guardian",       // add if/when you publish it
  live: "https://youtube.com/shorts/cQiBTsUjWuo?feature=share", // demo video
},

  // 2) AI Rota Assistant (pilot)
  {
  title: "AI Rota Assistant (pilot) - Collaborative",
  slug: "ai-rota-assistant",
  year: "2025–2026",
  blurb: "WhatsApp + Zapier + OpenAI workflow to speed up rota requests, reduce swaps, and improve staffing visibility.",
  stack: ["WhatsApp Cloud", "Zapier", "OpenAI", "Google Sheets / API", "Node"],
  highlights: [
    "Natural-language shift requests via WhatsApp",
    "Guardrails for availability, max hours, and OT caps",
    "Single source of truth (sheet/API) with audit trail",
  ],
  kpis: [
    "Target: 2–4 hrs/week scheduler time saved",
    "Target: −25% shift-swap requests",
    "Target: faster approvals (median < 10 min)",
  ],
  challenges: [
    "Handling ambiguous messages and edge cases (no-shows, partial shifts)",
    "Reconciling employee preferences with coverage constraints",
  ],
  // repo: "https://github.com/...",     // add later if you open-source it
  // live: "https://...",                // optional demo link
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
  title: "Layoffs Data Analysis (SQL Pipeline)",
  slug: "layoffs-sql-pipeline",
  year: "2025",
  blurb: "End-to-end MySQL pipeline to clean and analyze global layoffs (Kaggle) — staging → transforms → insights.",
  stack: ["MySQL", "SQL", "Workbench"],
  highlights: [
    "Built staging tables, standardized schema, and repeatable transforms",
    "Exploratory queries by company, industry, date; rolling trends",
  ],
  kpis: [
    "Top impacted companies & sectors identified",
    "Year-over-year trend lines produced for reporting",
  ],
  challenges: [
    "De-duping messy rows and null handling across multiple sources",
    "Designing indexes that help both ad-hoc queries and summaries",
  ],
    repo: "https://github.com/IsaacElue/Layoffs-Data-Analysis-Project", // replace when repo is public
  },

  {
  title: "Therapist–Client Management System",
  slug: "therapist-client-management",
  year: "2025",
  blurb: "Role-based dashboard to manage therapists, clients, and sessions with clean CRUD flows.",
  stack: ["React", "Node", "Express", "SQL"],
  highlights: [
    "Role-based views (therapist, client, admin)",
    "CRUD for sessions/clients/therapists with validation"
  ],
  kpis: [
    "Create/edit session flow under 10s (demo)",
    "Consistent data model across roles",
  ],
  challenges: [
    "Designing relational schema for schedules vs notes",
    "Form UX that stays fast and accessible",
  ],
  // repo: "https://github.com/IsaacElue/therapist-client-management",
  // live: "https://…",
},
{
  title: "Travel Blog Application",
  slug: "travel-blog",
  year: "2025",
  blurb: "Authenticated blogging platform with post management, comments, and responsive UI.",
  stack: ["React", "Node", "Express", "MySQL", "Axios", "JWT"],
  highlights: [
    "JWT auth + protected routes",
    "CRUD posts/comments with pagination"
  ],
  kpis: [
    "Create → publish in < 30s (demo)",
    "Largest page TTI < 2s on local",
  ],
  challenges: [
    "Auth/session handling across routes",
    "Preventing N+1 calls in list views",
  ],
  // repo: "https://github.com/IsaacElue/travel-blog",
  // live: "https://…",
},
{
  title: "Music Management App",
  slug: "music-management",
  year: "2025",
  blurb: "CRUD catalog for 5,000+ records with fast search and clean API integration.",
  stack: ["React", "Node", "Express", "MySQL", "Axios", "Tailwind"],
  highlights: [
    "Batch operations and search",
    "Accessible, keyboard-friendly flows"
  ],
  kpis: [
    "Catalog size: 5,000+ records",
    "Create/update < 1s on local demo",
  ],
  challenges: [
    "Schema for fast lookups vs flexible metadata",
    "Keeping large lists snappy (pagination + indexes)",
  ],
  // repo: "https://github.com/IsaacElue/music-management",
  // live: "https://…",
}




 

]

