// components/side-toc.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { id: string; label: string };
export default function SideToc({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 1] }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav className="hidden lg:block sticky top-24">
      <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-4">
        <p className="text-xs uppercase tracking-wide opacity-60 mb-2">On this page</p>
        <ul className="space-y-2 text-sm">
          {items.map((i) => (
            <li key={i.id}>
              <Link
                href={`#${i.id}`}
                className={`block hover:underline underline-offset-4 ${
                  active === i.id ? "opacity-100" : "opacity-70"
                }`}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
