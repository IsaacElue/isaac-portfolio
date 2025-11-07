// app/page.tsx
"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { projects as allProjects } from "@/data/projects";
import { experience as exp } from "@/data/experience";
import type { Project } from "@/types/content";

const projects = allProjects.slice(0, 2);
const experience = exp;

// --- helpers ---
type WithTags = Project & { tags?: string[] };
const getPills = (p: Project): string[] => {
  const t = (p as WithTags).tags;
  return Array.isArray(t) && t.length ? t : (p.stack ?? []);
};
// ---------------

export default function Page() {
  return (
    <main className="bg-[#0b1020] text-white">
      <Navbar />

      {/* HERO (one solid background color) */}
      <section className="relative">
        <div className="mx-auto flex w-full max-w-[1150px] flex-col-reverse items-center justify-between gap-12 px-6 py-28 md:flex-row md:py-40">
          {/* LEFT */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Isaac Elue</h1>
            <h2 className="mt-2 text-xl font-semibold text-sky-400 md:text-2xl">
              Computer Science & Software Engineering Student
            </h2>
            <p className="mt-4 max-w-xl text-neutral-300/90 leading-relaxed">
              Student with a foundation in full-stack development and AI integration, skilled at
              translating user needs into data-driven, scalable solutions. Passionate about building
              intuitive, high-impact products.
            </p>

            {/* Contact line */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-300/90 md:justify-start">
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
                Dublin, Ireland
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
                +353 83 084 5787
              </span>
              <a
                href="mailto:elueisaac14@gmail.com"
                className="flex items-center gap-2 hover:text-sky-300 transition"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
                elueisaac14@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex justify-center gap-5 text-neutral-300/90 md:justify-start">
              <a
                href="https://github.com/IsaacElue"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-300 transition"
                aria-label="GitHub"
              >
                {/* GitHub */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.373 0 12c0 5.304 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577v-2.256c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.747.083-.732.083-.732 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.493.998.108-.776.418-1.304.76-1.604-2.665-.3-5.467-1.332-5.467-5.932 0-1.31.468-2.381 1.235-3.221-.124-.302-.536-1.517.116-3.165 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404 11.43 11.43 0 013.003.404c2.292-1.552 3.298-1.23 3.298-1.23.654 1.648.242 2.863.118 3.165.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.63-5.479 5.924.43.37.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/isaac-elue-122182358/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-300 transition"
                aria-label="LinkedIn"
              >
                {/* LinkedIn */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
                  <path d="M19 0H5C2.239 0 0 2.238 0 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8 19H5v-9h3v9zM6.5 8.7c-.966 0-1.75-.784-1.75-1.75S5.534 5.2 6.5 5.2s1.75.784 1.75 1.75S7.466 8.7 6.5 8.7zM19 19h-3v-4.9c0-1.167-.023-2.667-1.625-2.667-1.625 0-1.875 1.27-1.875 2.583V19h-3v-9h2.875v1.23h.041c.401-.761 1.379-1.562 2.838-1.562 3.034 0 3.594 2.002 3.594 4.604V19z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 scale-125 rounded-full bg-sky-500/20 blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/isaac-image.jpg"
                alt="Isaac Elue"
                className="relative z-10 h-56 w-56 rounded-full border-2 border-sky-500/30 object-cover shadow-lg md:h-64 md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS (same solid bg, same card/pill style) */}
      <section id="projects" className="py-20">
        <div className="mx-auto w-full max-w-[1150px] px-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
            <p className="mt-2 text-neutral-300/90">Selected builds and experiments.</p>
            <div className="mt-3">
              <Link
                href="/projects"
                className="text-sm text-neutral-300/90 underline underline-offset-4 hover:text-sky-300"
              >
                View all →
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-[1000px] gap-5 sm:gap-6 md:grid-cols-2">
            {projects.map((p) => {
              const url = p.href ?? (p.slug ? `/projects/${p.slug}` : "/projects");
              const pills = getPills(p).slice(0, 4);
              return (
                <Link
                  key={p.title}
                  href={url}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-base font-medium tracking-tight md:text-lg hover:underline underline-offset-4">
                      {p.title}
                    </h3>
                    <span className="text-xs text-neutral-400">{p.year}</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-300/90">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {pills.map((t) => (
                      <span
                        key={t}
                        className="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE (same width + cards) */}
      <section id="experience" className="py-20">
        <div className="mx-auto w-full max-w-[1150px] px-6">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Experience</h2>
            <p className="mt-2 text-neutral-300/90">Roles, projects, and outcomes.</p>
          </div>

          <ul className="mx-auto max-w-[950px] space-y-5">
            {experience.map((e) => (
              <li key={e.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs text-neutral-400">{e.time}</p>
                </div>
                <h3 className="mt-1 font-medium tracking-tight">
                  {e.role} — {e.company}
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300/90">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SKILLS (same style as cards/pills) */}
      <section id="stack" className="py-20">
        <div className="mx-auto w-full max-w-[1150px] px-6">
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="flex items-center justify-center gap-2 text-3xl font-semibold tracking-tight">
              <span className="text-sky-400">⚡</span> Skills
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                "Agile & Scrum methodologies",
                "AI integration",
                "Product management",
                "Database management (SQL)",
                "Java programming",
                "Data Analysis & Visualization",
                "Web development",
                "Linux & Operating Systems",
                "UI/UX design",
                "Software Engineering",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/7 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (same color family) */}
      <footer className="border-white/10 py-10">
        <div className="mx-auto w-full max-w-[1150px] px-6 text-center text-neutral-300/90">
          © {new Date().getFullYear()} Isaac Elue
        </div>
      </footer>
    </main>
  );
}
