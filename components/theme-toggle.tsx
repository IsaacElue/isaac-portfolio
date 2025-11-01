"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const el = document.documentElement;
    const nextIsDark = !el.classList.contains("dark");
    el.classList.toggle("dark", nextIsDark);
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="rounded-2xl border border-neutral-200/60 p-2 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
      suppressHydrationWarning
    >
      {/* No state. CSS decides which icon shows. */}
      <span className="dark:hidden"><Moon size={18} /></span>
      <span className="hidden dark:inline"><Sun size={18} /></span>
    </button>
  );
}
