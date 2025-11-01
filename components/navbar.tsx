// components/navbar.tsx
import Link from "next/link"
import ThemeToggle from "./theme-toggle"


export default function Navbar() {
return (
<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/40 border-b border-neutral-200/60 dark:border-neutral-800">
<nav className="container flex h-14 items-center justify-between">
<Link href="/" className="font-semibold tracking-tight">IE</Link>
<div className="flex items-center gap-3 text-sm">
<Link href="/projects" className="opacity-80 hover:opacity-100">Projects</Link>
<Link href="/#experience" className="opacity-80 hover:opacity-100">Experience</Link>
<Link href="/#stack" className="opacity-80 hover:opacity-100">Stack</Link>
<Link href="/#contact" className="opacity-80 hover:opacity-100">Contact</Link>
<Link href="/resume" className="opacity-80 hover:opacity-100">Resume</Link>
<ThemeToggle />
</div>
</nav>
</header>
)
}