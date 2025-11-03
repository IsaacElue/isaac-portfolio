"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TEXT = "Isaac Elue";

export default function HeroName() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(TEXT.slice(0, i + 1));
      i++;
      if (i === TEXT.length) {
        clearInterval(id);
        setTimeout(() => setDone(true), 180);
      }
    }, 80);
    return () => clearInterval(id);
  }, []);

  const mx = useMotionValue(0), my = useMotionValue(0);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x); my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const x = useSpring(useTransform(mx, v => v * 8), { stiffness: 120, damping: 20 });
  const y = useSpring(useTransform(my, v => v * 6), { stiffness: 120, damping: 20 });

  return (
    <motion.h1 style={{ x, y }} className="text-4xl md:text-6xl font-semibold tracking-tight">
      <span className="align-baseline">
        {typed}
        {!done && <Cursor />}
      </span>
    </motion.h1>
  );
}

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn(o => !o), 450);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="inline-block w-[0.55ch]">
      <span className={`block h-[1.1em] w-full translate-y-[0.2em] rounded-sm ${on ? "bg-neutral-900 dark:bg-neutral-100" : "bg-transparent"}`} />
    </span>
  );
}
