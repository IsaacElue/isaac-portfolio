// app/resume/page.tsx
import Navbar from "@/components/navbar"


export default function ResumePage() {
return (
<main>
<Navbar />
<section className="container py-14 md:py-20">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Résumé</h1>
<p className="mt-2 text-neutral-600 dark:text-neutral-300">Download the latest PDF below.</p>
<div className="mt-5">
<a href="/cv.pdf" className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900">Download CV</a>
</div>
</section>
</main>
)
}