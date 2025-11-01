"use client";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form"
import { projects as allProjects } from "@/data/projects"
import { experience as exp } from "@/data/experience"
import type { Project } from "@/types/content";

const projects = allProjects.slice(0, 2);
const experience = exp;

const stack = ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Framer Motion", "Lucide", "MDX"];

export default function Page() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200/60 dark:border-neutral-800">
        <div className="absolute inset-0 bg-grid" />
        <div className="container relative py-20 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl/tight md:text-6xl/tight font-semibold tracking-tight"
          >
            Isaac Elue
          </motion.h1>

          <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
            CS & Software Engineering student focused on <strong>product</strong>, <strong>data</strong>, and <strong>UX</strong>. I build practical tools and clean interfaces.
            Incoming APM Intern at IBM (Feb–Aug 2026).
            </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1 rounded-2xl border border-neutral-200/60 dark:border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
            >
              View projects <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1 rounded-2xl border border-neutral-200/60 dark:border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container py-14 md:py-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
          <Link href="/projects" className="text-sm opacity-70 hover:opacity-100">
            All
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p: Project) => {
            const url = p.href ?? (p.slug ? `/projects/${p.slug}` : "/projects");
            return (
              <Link
                key={p.title}
                href={url}
                className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium tracking-tight">{p.title}</h3>
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
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Experience</h2>
        <ul className="space-y-5">
          {experience.map((e) => (
            <li key={e.company} className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5">
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
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-neutral-200/60 dark:border-neutral-800 px-3 py-1 text-sm opacity-80">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-14 md:py-20 border-t border-neutral-200/60 dark:border-neutral-800">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">Contact</h2>
        <p className="text-neutral-600 dark:text-neutral-300">Open to internships, product work, and collaborations.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="mailto:elueisaac14@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/isaac-elue-122182358">LinkedIn</a>
          <a href="https://github.com/IsaacElue">GitHub</a>
          <a href="/cv.pdf">Download CV</a>
          <ContactForm />

        </div>
      </section>

      <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-10">
        <div className="container text-sm opacity-70">© {new Date().getFullYear()} Isaac Elue</div>
      </footer>
    </main>
  );
}
