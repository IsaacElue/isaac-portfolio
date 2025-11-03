"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { projects as allProjects } from "@/data/projects"
import { experience as exp } from "@/data/experience"
import type { Project } from "@/types/content";
import SpotlightBG from "../components/spotlight-bg";
import HeroName from "@/components/hero-name";


const projects = allProjects.slice(0, 2);
const experience = exp;

const stack = ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion", "Lucide", "MDX"];

export default function Page() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
<section className="relative overflow-hidden border-b border-neutral-200/60 dark:border-neutral-800">
  {/* subtle grid + spotlight */}
  <div className="absolute inset-0 bg-grid opacity-[0.18] dark:opacity-[0.12]" />
  <SpotlightBG />

  <div className="container relative py-24 md:py-32">
    <div className="max-w-3xl mx-auto text-center">
      <div className="glow-mask mx-auto">
        <HeroName />
      </div>

      <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-balance">
        CS & Software Engineering student focused on <b>product</b>, <b>data</b>, and <b>UX</b>. I build
        practical tools and clean interfaces. Incoming APM Intern at IBM (Feb–Aug 2026).
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <a
          href="/cv.pdf"
          aria-label="Download my CV as PDF"
          className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 shadow-soft"
        >
          Download CV
        </a>
        <a
          href="/contact"
          className="rounded-2xl px-4 py-2 text-sm border border-transparent hover:underline"
          aria-label="Go to contact page"
        >
          Contact →
        </a>
      </div>
    </div>
  </div>
</section>



      {/* Projects */}
<section id="projects" className="container py-14 md:py-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
    <p className="mt-2 text-neutral-600 dark:text-neutral-300">
      Selected builds and experiments.
    </p>
    <div className="mt-3">
      <Link href="/projects" className="text-sm opacity-70 hover:opacity-100 underline underline-offset-4">
        View all →
      </Link>
    </div>
  </div>

  <div className="mt-8 grid gap-4 md:grid-cols-2">
    {projects.map((p: Project) => {
      const url = p.href ?? (p.slug ? `/projects/${p.slug}` : "/projects");
      return (
        <Link
          key={p.title}
          href={url}
          className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 backdrop-blur
                     hover:-translate-y-0.5 hover:shadow-soft hover:bg-neutral-50/60 dark:hover:bg-neutral-900/50 transition"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium tracking-tight group-hover:underline underline-offset-4 decoration-neutral-400/40">
              {p.title}
            </h3>
            <span className="text-xs opacity-60">{p.year}</span>
          </div>

          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.blurb}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {(p.tags ?? []).map((t: string) => (
              <span
                key={t}
                className="rounded-full border border-neutral-200/60 dark:border-neutral-800 px-2 py-1 text-xs opacity-80"
              >
                {t}
              </span>
            ))}
          </div>
        </Link>
      );
    })}
  </div>
</section>


      {/* Experience */}
<section id="experience" className="container py-14 md:py-20 border-t border-neutral-200/60 dark:border-neutral-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
    <p className="mt-2 text-neutral-600 dark:text-neutral-300">
      Roles, projects, and outcomes.
    </p>
  </div>

  <ul className="mt-8 max-w-3xl mx-auto space-y-5">
    {experience.map((e) => (
      <li
        key={e.company}
        className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 hover:-translate-y-0.5 hover:shadow-soft transition"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm opacity-70">{e.time}</p>
            <h3 className="font-medium tracking-tight">
              {e.role} — {e.company}
            </h3>
          </div>
        </div>
        <ul className="mt-3 list-disc pl-5 text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
          {e.points.map((pt: string) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</section>


      {/* Stack */}
<section id="stack" className="container py-14 md:py-20 border-t border-neutral-200/60 dark:border-neutral-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Tech Stack</h2>
    <p className="mt-2 text-neutral-600 dark:text-neutral-300">
      Tools I reach for often.
    </p>
  </div>

  <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
    {stack.map((s) => (
      <span
        key={s}
        className="rounded-full border border-neutral-200/60 dark:border-neutral-800 px-3 py-1 text-sm opacity-80"
      >
        {s}
      </span>
    ))}
  </div>
</section>



      <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-10">
  <div className="container text-sm opacity-70 text-center">© {new Date().getFullYear()} Isaac Elue</div>
</footer>

    </main>
  );
}
