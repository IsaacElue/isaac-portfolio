// app/projects/page.tsx
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import Link from "next/link";

export const metadata = { title: "Projects — Isaac Elue" };

export default function ProjectsIndex() {
  return (
    <main>
      <Navbar />
      <section className="container py-14 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Selected work across data, product, and AI.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
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
                {p.stack.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-200/60 dark:border-neutral-800 px-2 py-1 text-xs opacity-80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
