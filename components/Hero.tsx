"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FULL_TEXT = "SAYA";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(FULL_TEXT.slice(0, i + 1));
      i++;
      if (i === FULL_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Top label */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-xs tracking-[0.4em] uppercase mb-6 z-10"
      >
        — tienes una invitación —
      </motion.p>

      {/* Name */}
      <div className="font-[family-name:var(--font-tech)] text-white text-[clamp(4rem,20vw,14rem)] leading-none tracking-widest z-10 flex items-center">
        {displayed}
        <span className={`ml-1 inline-block w-[0.08em] h-[0.85em] bg-[#00ffc8] align-middle ${done ? "animate-pulse" : ""}`} />
      </div>

      {/* Date */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-sm md:text-base tracking-[0.3em] mt-8 z-10 uppercase"
      >
        15 . 05 . 2025
      </motion.div>

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 font-[family-name:var(--font-tech)] text-white/30 text-xs tracking-widest z-10"
      >
        scroll ↓
      </motion.p>
    </section>
  );
}