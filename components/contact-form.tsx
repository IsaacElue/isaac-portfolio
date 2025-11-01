"use client"
import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle")
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    // Formspree example endpoint; replace with your own form ID
    const r = await fetch("https://formspree.io/f/yourid", { method:"POST", body:data })
    setStatus(r.ok ? "ok" : "err")
  }
  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-3 max-w-md">
      <input name="name" required placeholder="Your name" className="rounded-xl border px-3 py-2"/>
      <input type="email" name="email" required placeholder="Email" className="rounded-xl border px-3 py-2"/>
      <textarea name="message" required placeholder="Tell me something…" className="rounded-xl border px-3 py-2 h-28"/>
      <button className="rounded-2xl border px-4 py-2 text-sm">Send</button>
      {status==="ok" && <p className="text-sm opacity-70">Thanks — I’ll reply soon.</p>}
      {status==="err" && <p className="text-sm text-red-600">Couldn’t send. Try again.</p>}
    </form>
  )
}
