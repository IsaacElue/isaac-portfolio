"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[rgba(11,17,28,0.65)] backdrop-blur-xl">
      <nav className="container mx-auto flex h-14 max-w-[1150px] items-center justify-between px-6">
        <Link
          href="/"
          aria-label="Home"
          className="font-extrabold tracking-tight text-lg md:text-xl bg-gradient-to-r from-sky-300 via-sky-400 to-sky-500 bg-clip-text text-transparent"
        >
          IE
        </Link>
        <div className="flex items-center gap-3 text-sm">
          {navItems.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "relative px-2 py-1 text-[var(--ink-300)] hover:text-[var(--ink-100)] transition",
                  active && "text-[var(--sky-400)]"
                )}
              >
                {n.label}
                {active && (
                  <span className="absolute inset-x-1 -bottom-[5px] h-[2px] rounded-full bg-[var(--sky-400)]" />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
