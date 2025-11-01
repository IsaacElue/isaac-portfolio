"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"


export default function ThemeToggle() {
const [mounted, setMounted] = useState(false)
const [dark, setDark] = useState(false)
useEffect(() => { setMounted(true); setDark(document.documentElement.classList.contains("dark")) }, [])
if (!mounted) return null
return (
<button
aria-label="Toggle theme"
onClick={() => {
const el = document.documentElement
el.classList.toggle("dark")
setDark(el.classList.contains("dark"))
}}
className="rounded-2xl border border-neutral-200/60 p-2 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition"
>
{dark ? <Sun size={18} /> : <Moon size={18} />}
</button>
)
}