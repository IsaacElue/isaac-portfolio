// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import { Section, Metric, Gallery } from "@/components/case";
import type { ReactNode } from "react";

export function generateStaticParams(): { slug: string }[] {
  return projects
    .filter((p) => !!p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

// If you only want to allow the prebuilt slugs:
// export const dynamicParams = false;

export default function ProjectDetail(
  { params }: Readonly<{ params: Readonly<{ slug: string }> }>
) {
  const proj = projects.find((p) => p.slug === params.slug);
  if (!proj) notFound();

  // per-project extras (typed with ReactNode instead of JSX.Element)
  const extras: Record<
    string,
    {
      metrics?: { label: string; value: string }[];
      images?: { src: string; alt: string }[];
      body?: ReactNode;
    }
  > = {
    "ai-rota-assistant": {
      metrics: [
        { label: "Scheduling time saved (target)", value: "2–4 hrs/week" },
        { label: "Swap requests reduced (target)", value: "-25%" },
      ],
      images: [
        { src: "/projects/ai-rota/flow.png", alt: "Flow overview" },
        { src: "/projects/ai-rota/whatsapp.png", alt: "WhatsApp prototype" },
      ],
      body: (
        <>
          <p>
            Early-stage pilot exploring rota automation via WhatsApp + Zapier + OpenAI for SMEs. Focus: reduce
            back-and-forth, increase staffing visibility, and capture simple constraints.
          </p>
          <ul className="list-disc pl-5">
            <li>WhatsApp requests → Zapier → scheduling sheet/API</li>
            <li>Guardrails for availability and overtime caps</li>
            <li>Track ROI: time saved/week, swap frequency</li>
          </ul>
        </>
      ),
    },
  };

  const x = extras[proj.slug ?? ""] ?? {};

  return (
    <main>
      <Navbar />
      <section className="container py-14 md:py-20">
        <p className="text-sm opacity-70">{proj.year}</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{proj.title}</h1>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">{proj.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(proj.stack ?? []).map((t: string) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200/60 dark:border-neutral-800 px-3 py-1 text-sm opacity-80"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {x.metrics?.length ? (
          <Section title="Metrics">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {x.metrics.map((m) => (
                <Metric key={m.label} {...m} />
              ))}
            </div>
          </Section>
        ) : null}

        {/* Case body */}
        {x.body ? <Section title="Case Study">{x.body}</Section> : null}

        {/* Gallery */}
        {x.images?.length ? (
          <Section title="Gallery">
            <Gallery images={x.images} />
          </Section>
        ) : null}
      </section>
    </main>
  );
}
