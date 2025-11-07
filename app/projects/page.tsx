// app/projects/page.tsx
import Link from "next/link";
import Navbar from "@/components/navbar";
import { projects as allProjects } from "@/data/projects";
import type { Project } from "@/types/content";

type WithTags = Project & { tags?: string[] };
const getPills = (p: Project): string[] => {
  const t = (p as WithTags).tags;
  return Array.isArray(t) && t.length ? t : (p.stack ?? []);
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#0b1020] text-white">
      <Navbar />

      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1150px] px-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Projects</h1>
          <p className="mt-2 text-neutral-300/90">
            Selected work across data, product, and AI.
          </p>
        </div>
      </section>

      {/* List */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-[1150px] px-6">
          <div className="mx-auto grid max-w-[1000px] gap-5 sm:gap-6 md:grid-cols-2">
            {allProjects.map((p) => {
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
                    {p.year ? (
                      <span className="text-xs text-neutral-400">{p.year}</span>
                    ) : null}
                  </div>

                  {p.blurb ? (
                    <p className="mt-2 text-sm text-neutral-300/90">{p.blurb}</p>
                  ) : null}

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

      <footer className="border-white/10 py-10">
        <div className="mx-auto w-full max-w-[1150px] px-6 text-center text-neutral-300/90">
          © {new Date().getFullYear()} Isaac Elue
        </div>
      </footer>
    </main>
  );
}
