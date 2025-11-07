// tailwind.config.ts
import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"


const config: Config = {
darkMode: "class",
content: [
"./app/**/*.{ts,tsx}",
"./components/**/*.{ts,tsx}",
"./content/**/*.{md,mdx}",
"./pages/**/*.{ts,tsx}",
"./src/**/*.{ts,tsx}",
],
theme: {
    container: {
      center: true,
      padding: "1rem",
      // wider than default so layout feels fuller on big screens
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",   // <- was 1280; push to 1440
      },
    },



extend: {
    colors: {
  navy: {
    950: "#070B14",
    900: "#0B1220",
    800: "#10172A",
  },
  ink: {
    100: "#E8EBF3",
    300: "#C3C9DA",
    500: "#9BA3B8",
    700: "#6C7390",
    900: "#1A1F2E",
  },
  sky: {
    300: "#7DD3FC",
    400: "#38BDF8",
    500: "#0EA5E9",
  },
},

borderRadius: {
lg: "var(--radius)",
md: "calc(var(--radius) - 2px)",
sm: "calc(var(--radius) - 4px)",
},


keyframes: {
"accordion-down": { from: { height: 0 }, to: { height: "var(--radix-accordion-content-height)" } },
"accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: 0 } },
},
animation: {
"accordion-down": "accordion-down 0.2s ease-out",
"accordion-up": "accordion-up 0.2s ease-out",
},
},
},
plugins: [animate],
}
export default config