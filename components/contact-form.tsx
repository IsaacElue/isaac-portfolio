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
}



