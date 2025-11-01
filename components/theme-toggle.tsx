"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // 1️⃣ On mount: check saved theme or system preference
  useEffect(() => {
    // Delay state updates to the next frame so ESLint stops whining
    const id = requestAnimationFrame(() => {
      const pref = localStorage.getItem("theme");
      const sys = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = pref ? pref === "dark" : sys;
      document.documentElement.classList.toggle("dark", isDark);
      setDark(isDark);
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  // 2️⃣ On click: toggle + persist choice
  const handleToggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="rounded-2xl border border-neutral-200/60 p-2 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
