// components/scroll-progress.tsx
"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const height = el.scrollHeight - el.clientHeight;
      setW(height > 0 ? (scrolled / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full bg-neutral-900/80 dark:bg-neutral-100/80 transition-[width]"
        style={{ width: `${w}%` }}
        aria-hidden
      />
    </div>
  );
}
