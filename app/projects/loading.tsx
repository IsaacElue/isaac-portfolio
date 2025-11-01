// app/projects/loading.tsx
export default function LoadingProjects() {
  return (
    <main className="container py-14 md:py-20">
      <div className="mb-6 flex items-end justify-between">
        <div className="h-7 w-40 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
        <div className="h-5 w-10 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
      </div>

      <div className="grid gap-4 md:grid-cols-2" role="status" aria-label="Loading projects">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5"
          >
            <div className="flex items-center justify-between">
              <div className="h-5 w-48 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
              <div className="h-4 w-10 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
            </div>

            <div className="mt-3 space-y-2">
              <div className="h-4 w-5/6 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
              <div className="h-4 w-2/3 rounded-md bg-neutral-200/70 dark:bg-neutral-800 animate-pulse" />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {Array.from({ length: 3 }).map((_, j) => (
                <div
                  key={j}
                  className="h-6 w-16 rounded-full bg-neutral-200/70 dark:bg-neutral-800 animate-pulse"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
