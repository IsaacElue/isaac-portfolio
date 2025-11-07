// app/contact/page.tsx
"use client";

import Navbar from "@/components/navbar";

export default function ContactPage() {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText("elueisaac14@gmail.com");
    } catch {
      // ignore
    }
  };

  return (
    <main className="bg-[#0b1020] text-white">
      <Navbar />

      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1150px] px-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Contact</h1>
          <p className="mt-2 text-neutral-300/90">
            Open to internships, product work, and collaborations.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-[1150px] px-6">
          <div className="mx-auto grid max-w-[1000px] gap-5 sm:grid-cols-2">
            {/* Email */}
            <a
              href="mailto:elueisaac14@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-medium tracking-tight">Email</h2>
                <span className="text-sm text-sky-300">Open</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300/90">elueisaac14@gmail.com</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/isaac-elue-122182358/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-medium tracking-tight">LinkedIn</h2>
                <span className="text-sm text-sky-300">Open</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300/90">Let’s connect</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/IsaacElue"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-medium tracking-tight">GitHub</h2>
                <span className="text-sm text-sky-300">Open</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300/90">Projects & code</p>
            </a>

            {/* CV */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-medium tracking-tight">Download CV</h2>
                <span className="text-sm text-sky-300">Open</span>
              </div>
              <p className="mt-2 text-sm text-neutral-300/90">PDF, 1–2 pages</p>
            </a>
          </div>

          {/* Quick copy */}
          <div className="mx-auto mt-8 flex max-w-[1000px] items-center gap-3">
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200">
              elueisaac14@gmail.com
            </span>
            <button
              onClick={copy}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/7 transition"
            >
              Copy
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER (same color family) */}
      <footer className="border-white/10 py-30">
        <div className="mx-auto w-full max-w-[1150px] px-6 text-center text-neutral-300/90">
          © {new Date().getFullYear()} Isaac Elue
        </div>
      </footer>
    </main>
  );
}
