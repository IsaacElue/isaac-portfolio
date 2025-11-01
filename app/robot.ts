// app/sitemap.ts
import type { MetadataRoute } from "next"
import { projects } from "@/data/projects"


export default function sitemap(): MetadataRoute.Sitemap {
const base = "https://isaacelue.dev"
const items: MetadataRoute.Sitemap = [
{ url: `${base}/`, lastModified: new Date() },
{ url: `${base}/projects`, lastModified: new Date() },
{ url: `${base}/resume`, lastModified: new Date() },
...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() })),
]
return items
}