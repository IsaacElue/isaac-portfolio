// data/experience.ts
export type ExperienceItem = {
company: string
role: string
time: string
points: string[]
}


export const experience: ExperienceItem[] = [
{
company: "IBM Ireland",
role: "Associate Product Manager Intern (Incoming)",
time: "Feb 2026 — Aug 2026, Dublin",
points: [
"Selected for 6‑month internship focused on product development",
"User insights and cross‑functional collaboration in Cloud & AI",
],
},
{
company: "Maynooth University — CS Support Centre",
role: "Computer Science Tutor",
time: "Oct 2024 — Present",
points: [
"Guided Java/OOP, algorithms, and logic in a supportive setting",
],
},
{
company: "Microsoft × Maynooth University",
role: "AI Chatbot Developer",
time: "Jan 2025 — May 2025",
points: [
"Azure OpenAI chatbot; integrated NLP + OCR for accessibility",
"Allergen detection and 6‑month nutrition insights improved engagement",
"Balanced usability, scalability, and performance to ship on time",
],
},
]

