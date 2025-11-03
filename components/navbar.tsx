// components/navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact", hash: true },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/40 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">IE</Link>
        <div className="flex items-center gap-2 text-sm">
          {items.map((it) => {
            const isActive = !it.hash && (it.href === "/"
              ? pathname === "/"
              : pathname.startsWith(it.href));
            return (
              <Link
                key={it.label}
                href={it.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative rounded-xl px-2 py-1 opacity-80 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50 dark:focus-visible:ring-neutral-600/50 transition",
                )}
              >
                <span>{it.label}</span>
                <span
                  className={cn(
                    "pointer-events-none absolute inset-x-1 -bottom-[6px] h-[2px] rounded-full bg-neutral-900/80 dark:bg-neutral-100/80 transition-opacity",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                />
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
