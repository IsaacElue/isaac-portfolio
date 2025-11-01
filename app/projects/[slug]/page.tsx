// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import { projects } from "@/data/projects";
import type { ReactNode } from "react";

// If you statically generate detail pages:
export function generateStaticParams(): { slug: string }[] {
  return projects.map((p) => ({ slug: p.slug }));
}

// ✅ params is a Promise in new Next versions — await it
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

  // Extra content per project (metrics, case body, images)
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
      <p className="opacity-80 text-sm">
      </p>
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
        <a href="https://youtube.com/shorts/cQiBTsUjWuo?feature=share" className="underline" target="_blank" rel="noreferrer">
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


    // add other projects

  };

  const extra = extras[slug];

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="container py-14 md:py-20">
        <p className="text-sm opacity-70">{proj.year}</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{proj.title}</h1>
        <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">{proj.blurb}</p>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {(proj.stack ?? []).map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200/60 dark:border-neutral-800 px-3 py-1 text-sm opacity-80"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Highlights */}
        {proj.highlights?.length ? (
          <div className="mt-8">
            <h2 className="text-xl font-medium tracking-tight">Highlights</h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              {proj.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        ) : null}

        {/* KPIs */}
        {proj.kpis?.length ? (
          <div className="mt-8">
            <h2 className="text-xl font-medium tracking-tight">Outcomes & KPIs</h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              {proj.kpis.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </div>
        ) : null}

        {/* Challenges */}
        {proj.challenges?.length ? (
          <div className="mt-8">
            <h2 className="text-xl font-medium tracking-tight">Challenges</h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-300">
              {proj.challenges.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        ) : null}

        {/* Links */}
        {(proj.repo || proj.live) ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {proj.repo && (
              <a
                href={proj.repo}
                className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                GitHub
              </a>
            )}
            {proj.live && (
              <a
                href={proj.live}
                className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 px-4 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900"
              >
                Live Demo
              </a>
            )}
          </div>
        ) : null}

        {/* Extra metrics / case content */}
        {extra?.metrics?.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-medium tracking-tight">Metrics</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {extra.metrics.map((m) => (
                <div key={m.label} className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-4">
                  <div className="text-xs opacity-70">{m.label}</div>
                  <div className="text-2xl font-semibold tracking-tight">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {extra?.body ? (
          <div className="mt-12">
            <h2 className="text-xl font-medium tracking-tight">Case Study</h2>
            <div className="mt-3 prose prose-neutral dark:prose-invert max-w-none">
              {extra.body}
            </div>
          </div>
        ) : null}

        {extra?.images?.length ? (
          <div className="mt-12">
            <h2 className="text-xl font-medium tracking-tight">Gallery</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {extra.images.map((img) => (
                <div
                  key={img.src}
                  className="overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
