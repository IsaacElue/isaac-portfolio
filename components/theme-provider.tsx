"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"          // matches tailwind.config darkMode: "class"
      defaultTheme="system"      // or "light" if you prefer
      enableSystem
      disableTransitionOnChange  // avoids flicker
    >
      {children}
    </NextThemesProvider>
  );
}
