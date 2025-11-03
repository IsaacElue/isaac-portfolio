// components/spotlight-bg.tsx
"use client";
import { useEffect, useState } from "react";

type Props = {
  mode?: "fixed" | "section";   // "fixed" = whole page, "section" = current section
  size?: number;                // base radius in px
  strength?: number;            // 0..1 opacity strength
};

export default function SpotlightBG({
  mode = "fixed",
  size = 600,
  strength = 0.16,
}: Props) {
  const [pos, setPos] = useState({ x: 50, y: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const positionClass = mode === "fixed" ? "fixed" : "absolute";

  return (
    <div
      aria-hidden
      className={`pointer-events-none ${positionClass} inset-0 -z-10`}
      style={{
        background: `radial-gradient(${size}px ${Math.round(
          size * 0.5
        )}px at ${pos.x}% ${pos.y}%, rgba(110,110,255,${strength}), transparent 60%)`,
      }}
    />
  );
}
