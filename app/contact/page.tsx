// app/contact/page.tsx
import Navbar from "@/components/navbar";
import CopyEmail from "@/components/copy-email";

export const metadata = {
  title: "Contact — Isaac Elue",
  description: "Reach out for internships, product work, or collaborations.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="container py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-xl">
          Open to internships, product work, and collaborations. Pick what suits you.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:elueisaac14@gmail.com?subject=Hello%20Isaac&body=Hi%20Isaac%2C%0A%0A"
            aria-label="Email — elueisaac14@gmail.com"
            className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 transition hover:-translate-y-0.5 hover:shadow-sm hover:bg-neutral-50/70 dark:hover:bg-neutral-900/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-tight">Email</span>
              <span className="text-xs opacity-60 group-hover:opacity-80 transition">Open</span>
            </div>
            <p className="mt-1 text-sm opacity-80">elueisaac14@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/isaac-elue-122182358"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — open in new tab"
            className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 transition hover:-translate-y-0.5 hover:shadow-sm hover:bg-neutral-50/70 dark:hover:bg-neutral-900/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-tight">LinkedIn</span>
              <span className="text-xs opacity-60 group-hover:opacity-80 transition">Open</span>
            </div>
            <p className="mt-1 text-sm opacity-80">Let’s connect</p>
          </a>

          <a
            href="https://github.com/IsaacElue"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — open in new tab"
            className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 transition hover:-translate-y-0.5 hover:shadow-sm hover:bg-neutral-50/70 dark:hover:bg-neutral-900/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-tight">GitHub</span>
              <span className="text-xs opacity-60 group-hover:opacity-80 transition">Open</span>
            </div>
            <p className="mt-1 text-sm opacity-80">Projects & code</p>
          </a>

          <a
            href="/cv.pdf"
            aria-label="Download CV (PDF)"
            className="group rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-5 transition hover:-translate-y-0.5 hover:shadow-sm hover:bg-neutral-50/70 dark:hover:bg-neutral-900/60"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-medium tracking-tight">Download CV</span>
              <span className="text-xs opacity-60 group-hover:opacity-80 transition">Open</span>
            </div>
            <p className="mt-1 text-sm opacity-80">PDF, 1–2 pages</p>
          </a>
        </div>

        <div className="mt-8">
          <p className="text-sm opacity-70">Quick copy</p>
          <div className="mt-2">
            <CopyEmail email="elueisaac14@gmail.com" />
          </div>
        </div>
      </section>
    </main>
  );
}
