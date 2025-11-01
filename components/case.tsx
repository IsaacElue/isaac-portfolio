// components/case.tsx
import Image from "next/image"
import { ReactNode } from "react"


export function Section({ title, children }: { title: string; children: ReactNode }) {
return (
<section className="mt-10">
<h2 className="text-xl font-medium tracking-tight">{title}</h2>
<div className="mt-3 prose prose-neutral dark:prose-invert max-w-none">
{children}
</div>
</section>
)
}


export function Metric({ label, value }: { label: string; value: string }) {
return (
<div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 p-4">
<div className="text-xs opacity-70">{label}</div>
<div className="text-2xl font-semibold tracking-tight">{value}</div>
</div>
)
}


export function Gallery({ images }: { images: { src: string; alt: string }[] }) {
return (
<div className="mt-4 grid gap-3 sm:grid-cols-2">
{images.map((img) => (
<div key={img.src} className="overflow-hidden rounded-2xl border border-neutral-200/60 dark:border-neutral-800">
<Image src={img.src} alt={img.alt} width={1200} height={800} className="h-auto w-full object-cover" />
</div>
))}
</div>
)
}