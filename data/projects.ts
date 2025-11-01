// data/projects.ts
export type Project = {
title: string
slug: string
year: string
blurb: string
stack: string[]
highlights: string[]
}


export const projects: Project[] = [
{
title: "AI Rota Assistant (pilot)",
slug: "ai-rota-assistant",
year: "2025–2026",
blurb: "Scheduling automations for SMEs in Dublin; early-stage pilot.",
stack: ["Zapier", "OpenAI", "WhatsApp Cloud", "Node"],
highlights: [
"Explored staff rota automation and WhatsApp-based requests",
"Goal: reduce scheduling time, fewer swaps, better staffing visibility",
"Early pilot; tracking ROI: time saved per week, swap frequency",
],
},
{
title: "Therapist–Client Management System",
slug: "therapist-client-management",
year: "2025",
blurb: "Full‑stack dashboard for therapists, clients, and sessions (CRUD).",
stack: ["React", "Node", "Express", "SQL"],
highlights: [
"Role-based views; create/update sessions, clients, therapists",
"Deployed prototype with seeded data for demos",
],
},
{
title: "Travel Blog Application",
slug: "travel-blog",
year: "2025",
blurb: "Authenticated blogging platform with post management and responsive UI.",
stack: ["React", "Node", "Express", "MySQL", "Axios"],
highlights: [
"JWT auth, protected routes, CRUD posts/comments",
"Responsive layout; focus on readability and accessibility",
],
},
{
title: "Music Management App",
slug: "music-management",
year: "2025",
blurb: "Manage a 5k+ record catalog; fast CRUD with clean API integration.",
stack: ["React", "Node", "Express", "MySQL", "Axios", "Tailwind"],
highlights: [
"Batch operations and search; keyboard-friendly flows",
"Accessible components and fluid list/detail views",
],
},
]

