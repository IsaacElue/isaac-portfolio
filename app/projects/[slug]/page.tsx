// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import type { ReactNode } from "react";
import SideToc from "@/components/side-toc";
import ScrollProgress from "@/components/scroll-progress";
import Magnetic from "@/components/magnetic";

// Build static paths
export function generateStaticParams(): { slug: string }[] {
  return projects.map((p) => ({ slug: p.slug }));
}

// params is a Promise in latest Next
export default async function ProjectDetail(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const proj = projects.find((p) => p.slug === slug);
  if (!proj) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: proj.title,
    datePublished: proj.year,
    description: proj.blurb,
  };

  const extras: Record<
    string,
    {
      metrics?: { label: string; value: string }[];
      images?: { src: string; alt: string }[];
      body?: ReactNode;
    }
  > = {
    "ev-analytics-dashboard": {
      metrics: [
        { label: "Models analyzed", value: "475" },
        { label: "Key personas", value: "Consumer & Biz stakeholders" },
      ],
      images: [
        { src: "/projects/ev-analytics-dashboard/dashboard-overview-1.png", alt: "Dashboard overview (top)" },
        { src: "/projects/ev-analytics-dashboard/dashboard-overview-2.png", alt: "Dashboard overview (detail grid)" },
        { src: "/projects/ev-analytics-dashboard/average-range-by-segment.png", alt: "Average range by segment" },
        { src: "/projects/ev-analytics-dashboard/range-by-battery-size.png", alt: "Battery size vs range" },
        { src: "/projects/ev-analytics-dashboard/most-energy-efficient-drivetrains.png", alt: "Energy efficiency by drivetrain" },
        { src: "/projects/ev-analytics-dashboard/brand-dominating-ev-market.png", alt: "Brands dominating EV market" },
        { src: "/projects/ev-analytics-dashboard/brands-by-model-count.png", alt: "Brands by model count" },
        { src: "/projects/ev-analytics-dashboard/car-body-type-efficiency.png", alt: "Car body type efficiency" },
        { src: "/projects/ev-analytics-dashboard/fast-charging-models.png", alt: "Fast charging ready models" },
        { src: "/projects/ev-analytics-dashboard/largest-cargo-suv.png", alt: "Largest cargo family SUVs" },
      ],
      body: (
        <>
          <p>
            SQL → Power BI pipeline across 475 EV models. Cleaned and standardized raw data,
            ran SQL EDA on battery/range/efficiency, and built interactive dashboard views for
            brand, segment, and drivetrain questions.
          </p>
          <ul>
            <li>Which segments have longest real-world range? Which brands dominate?</li>
            <li>Battery size vs expected range, drivetrain efficiency, and road-trip filters.</li>
          </ul>
        </>
      ),
    },

    "layoffs-sql-pipeline": {
      metrics: [
        { label: "Rows processed", value: "100% cleaned (deduped/null-safe)" },
        { label: "Key views", value: "YoY trends, industries, top companies" },
      ],
      body: (
        <>
          <p>
            Built a reproducible SQL pipeline: raw → staging → clean tables. Standardized columns,
            handled nulls/duplicates, and added indexes for fast exploratory queries.
          </p>
          <ul>
            <li>Staging: preserve raw; add audit columns (ingested_at, source).</li>
            <li>Transforms: trim/normalize text, parse dates, coerce numeric fields.</li>
            <li>Insights: company/industry aggregations, rolling 3-month trends.</li>
          </ul>
        </>
      ),
    },

    "grocery-guardian": {
      metrics: [
        { label: "Core flows", value: "Scan → Check → Alternatives → Chat" },
        { label: "Auth", value: "Google & Apple" },
      ],
      body: (
        <>
          <p>
            Web app for safer grocery shopping with allergies. Users log in, scan a product barcode,
            get immediate allergen checks (including synonyms), see safe alternatives, and can ask the
            AI assistant for recipe or nutrition help.
          </p>
          <ul>
            <li><strong>Barcode Scanning:</strong> product lookup and allergen match.</li>
            <li><strong>Allergen Safety Checks:</strong> synonym-aware detection with clear alerts.</li>
            <li><strong>Alternatives:</strong> safe product suggestions when flagged.</li>
            <li><strong>AI Chatbot:</strong> recipes and nutrition guidance.</li>
            <li><strong>Auth:</strong> Google & Apple login; data stored in Azure SQL.</li>
          </ul>
          <p className="mt-3">
            <a
              href="https://youtube.com/shorts/cQiBTsUjWuo?feature=share"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Watch the demo video
            </a>
          </p>
        </>
      ),
    },

    "ai-rota-assistant": {
      metrics: [
        { label: "Teams", value: "SMEs (retail/restaurant)" },
        { label: "Goal", value: "Time saved + fewer swaps" },
        { label: "Pilot status", value: "Early testing" },
      ],
      body: (
        <>
          <p>
            Pilot exploring rota automation through WhatsApp requests captured by Zapier, validated with
            business rules (availability, max hours, overtime), then synced to a central rota (sheet/API).
            Managers get quick approvals; employees get confirmations and coverage visibility.
          </p>
          <ul>
            <li><strong>Capture:</strong> WhatsApp → Zapier webhook parses date, time, role, location.</li>
            <li><strong>Validate:</strong> check availability, conflicts, and hour caps; ask clarifying Qs if needed.</li>
            <li><strong>Sync:</strong> write shift to rota store; notify manager and employee with status.</li>
            <li><strong>Metrics:</strong> time saved/week, swap frequency, approval latency.</li>
          </ul>
          <p className="opacity-80 text-sm">Future: auto-suggest coverage when gaps appear; manager dashboard for exceptions.</p>
        </>
      ),
    },

    "therapist-client-management": {
      metrics: [
        { label: "Roles", value: "Therapist, Client, Admin" },
        { label: "Core flow", value: "Create → schedule → record notes" },
      ],
      body: (
        <>
          <p>
            A small full-stack app to manage schedules and records. Focused on a clean, low-friction CRUD
            flow and an obvious separation of roles.
          </p>
          <ul>
            <li><strong>Schema:</strong> therapists, clients, sessions, notes.</li>
            <li><strong>Validation:</strong> dates, conflicts, required fields.</li>
            <li><strong>UX:</strong> minimal forms, keyboard shortcuts, accessible labels.</li>
          </ul>
        </>
      ),
    },

    "travel-blog": {
      metrics: [
        { label: "Auth", value: "JWT + protected routes" },
        { label: "CRUD", value: "Posts & comments" },
      ],
      body: (
        <>
          <p>
            A classic blog with authentication and a simple editorial flow. Built to practice auth,
            protected routes, and a tidy data model for posts and comments.
          </p>
          <ul>
            <li><strong>Editor:</strong> basic formatting, draft → publish.</li>
            <li><strong>Lists:</strong> paginated index to avoid heavy payloads.</li>
            <li><strong>Comments:</strong> nested list with simple moderation.</li>
          </ul>
        </>
      ),
    },

    "music-management": {
      metrics: [
        { label: "Records", value: "5,000+" },
        { label: "Goal", value: "Fast CRUD & search" },
      ],
      body: (
        <>
          <p>
            Catalog manager for a large music library. Prioritizes responsive list views,
            quick edits, and predictable keyboard-friendly workflows.
          </p>
          <ul>
            <li><strong>Search:</strong> server-side pagination + indexed queries.</li>
            <li><strong>Batch:</strong> multi-select, bulk updates.</li>
            <li><strong>Accessibility:</strong> focus management, ARIA labels.</li>
          </ul>
        </>
      ),
    },
  };

  const extra = extras[slug];

  return (
    <main className="bg-[#0b1020] text-white">
      <ScrollProgress />
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page header + two-column body */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1150px] px-6">
          {/* Grid: content + sticky TOC */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
            {/* LEFT: content */}
            <div className="mx-auto w-full max-w-[1000px]">
              <p className="text-sm text-neutral-400">{proj.year}</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">
                {proj.title}
              </h1>
              {proj.blurb ? (
                <p className="mt-3 text-neutral-300/90">{proj.blurb}</p>
              ) : null}

              {/* Stack pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {(proj.stack ?? []).map((t) => (
                  <span
                    key={t}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              {proj.highlights?.length ? (
                <div id="highlights" className="mt-10">
                  <h2 className="text-xl font-medium tracking-tight">Highlights</h2>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-300/90">
                    {proj.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              ) : null}

              {/* KPIs */}
              {proj.kpis?.length ? (
                <div id="kpis" className="mt-10">
                  <h2 className="text-xl font-medium tracking-tight">Outcomes & KPIs</h2>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-300/90">
                    {proj.kpis.map((k) => <li key={k}>{k}</li>)}
                  </ul>
                </div>
              ) : null}

              {/* Challenges */}
              {proj.challenges?.length ? (
                <div id="challenges" className="mt-10">
                  <h2 className="text-xl font-medium tracking-tight">Challenges</h2>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-300/90">
                    {proj.challenges.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              ) : null}

              {/* Links */}
              {(proj.repo || proj.live) ? (
                <div id="links" className="mt-10 flex flex-wrap gap-3">
                  {proj.repo && (
                    <Magnetic>
                      <a
                        href={proj.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open GitHub repository for ${proj.title}`}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/7 transition"
                      >
                        GitHub
                      </a>
                    </Magnetic>
                  )}
                  {proj.live && (
                    <Magnetic>
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${proj.title}`}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-200 hover:bg-white/7 transition"
                      >
                        Live Demo
                      </a>
                    </Magnetic>
                  )}
                </div>
              ) : null}

              {/* Metrics */}
              {extra?.metrics?.length ? (
                <div id="metrics" className="mt-12">
                  <h2 className="text-xl font-medium tracking-tight">Metrics</h2>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {extra.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="text-xs text-neutral-400">{m.label}</div>
                        <div className="text-2xl font-semibold tracking-tight">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Case Study body */}
              {extra?.body ? (
                <div id="case" className="mt-12">
                  <h2 className="text-xl font-medium tracking-tight">Case Study</h2>
                  <div className="prose prose-invert mt-3 max-w-none">
                    {extra.body}
                  </div>
                </div>
              ) : null}

              {/* Gallery */}
              {extra?.images?.length ? (
                <div id="gallery" className="mt-12">
                  <h2 className="text-xl font-medium tracking-tight">Gallery</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {extra.images.map((img) => (
                      <div
                        key={img.src}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.src} alt={img.alt} className="h-auto w-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* RIGHT: sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <SideToc
                  items={[
                    { id: "highlights", label: "Highlights" },
                    { id: "kpis", label: "Outcomes & KPIs" },
                    { id: "challenges", label: "Challenges" },
                    ...(extra?.metrics?.length ? [{ id: "metrics", label: "Metrics" }] : []),
                    ...(extra?.body ? [{ id: "case", label: "Case Study" }] : []),
                    ...(extra?.images?.length ? [{ id: "gallery", label: "Gallery" }] : []),
                    ...(proj.repo || proj.live ? [{ id: "links", label: "Links" }] : []),
                  ]}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto w-full max-w-[1150px] px-6 text-center text-neutral-300/90">
          © {new Date().getFullYear()} Isaac Elue
        </div>
      </footer>
    </main>
  );
}
