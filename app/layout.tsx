// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SpotlightBG from "@/components/spotlight-bg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { /* ...unchanged... */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          try {
            var t = localStorage.getItem('theme');
            var d = t ? (t === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (d) document.documentElement.classList.add('dark');
            document.documentElement.classList.add(d ? 'dark' : 'light');
          } catch (e) {}
        })();
      `,
    }}
  />
  <style>
    {`
      html { visibility: hidden; }
      html.light, html.dark { visibility: visible; }
    `}
  </style>
</head>


      {/* 👉 Set default text color for both themes */}
      <body
        className={cn(
          inter.className,
          "min-h-dvh bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100"
        )}
      >
        {/* Global spotlight under content */}
        <SpotlightBG mode="fixed" size={600} strength={0.16} />

        <div className="relative z-10">
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
