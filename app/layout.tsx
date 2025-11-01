// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
metadataBase: new URL("https://isaacelue.dev"),
title: {
default: "Isaac Elue — Portfolio",
template: "%s — Isaac Elue",
},
description: "Projects, experience, and writing by Isaac Elue.",
openGraph: {
type: "website",
url: "https://isaacelue.dev",
title: "Isaac Elue — Portfolio",
description: "Projects, experience, and writing by Isaac Elue.",
images: [{ url: "/opengraph-image" }],
},
twitter: {
card: "summary_large_image",
title: "Isaac Elue — Portfolio",
description: "Projects, experience, and writing by Isaac Elue.",
images: ["/opengraph-image"],
},
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (

<html lang="en" suppressHydrationWarning>
<body className={cn(inter.className, "min-h-dvh bg-white dark:bg-neutral-950")}>{children}</body>
</html>
)
}

// inside body, after {children}
<Analytics />
<SpeedInsights />