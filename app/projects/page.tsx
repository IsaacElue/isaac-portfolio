// app/projects/page.tsx
import Link from "next/link"
import Navbar from "@/components/navbar"
import { projects } from "@/data/projects"


export default function ProjectsPage() {
return (
<main>
<Navbar />
<section className="container py-14 md:py-20">
<div className="mb-6">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
<p className="mt-2 text-neutral-600 dark:text-neutral-300">Selected builds and experiments.</p>
</div>
<div className="grid gap-4 md:grid-cols-2">
{projects.map((p) => (
<Link key={p.slug} href={`/projects/${p.slug}`} className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">{p.title}</h3>
<span className="text-xs opacity-60">{p.year}</span>
</div>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.blurb}</p>
<div className="mt-3 flex flex-wrap gap-2">
{p.stack.map((t) => (
<span key={t} className="rounded-full border border-neutral-200/60 dark:border-neutral-800 px-2 py-1 text-xs opacity-80">{t}</span>
))}
</div>
</Link>
))}
</div>
</section>
</main>
)
}