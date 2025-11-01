// app/projects/[slug]/loading.tsx
export default function LoadingProjectDetail() {
  return (
    <main className="container py-14 md:py-20" role="status" aria-label="Loading project">
      {/* year */}
      <div className="h-4 w-24 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />

      {/* title */}
      <div className="mt-3 h-8 w-80 md:w-1/2 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />

      {/* blurb lines */}
      <div className="mt-4 space-y-2">
        <div className="h-4 w-5/6 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
        <div className="h-4 w-3/4 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
      </div>

      {/* stack pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-7 w-20 rounded-full bg-neutral-200/70 dark:bg-neutral-800 animate-pulse"
          />
        ))}
      </div>

      {/* section heading */}
      <div className="mt-10 h-6 w-40 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />

      {/* bullets */}
      <ul className="mt-3 space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <li key={i} className="h-4 w-11/12 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
        ))}
      </ul>

      {/* gallery strip */}
      <div className="mt-10 h-40 rounded-xl bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
    </main>
  );
}
