// app/projects/page.tsx
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import Link from "next/link";

export const metadata = { title: "Projects" };

export default function ProjectsIndex() {
  return (
    <main>
      <Navbar />
      <section className="container py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
          Selected work across data, product, and AI.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 transition
hover:-translate-y-0.5 hover:shadow-sm hover:bg-neutral-50/70 dark:hover:bg-neutral-900/60"
>
              <div className="flex items-center justify-between">
  <h3 className="font-medium tracking-tight">{p.title}</h3>
  <span className="text-xs opacity-60 group-hover:opacity-80 transition">{p.year}</span>
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
