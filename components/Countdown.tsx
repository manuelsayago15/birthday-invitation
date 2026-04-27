"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calcTimeLeft(): TimeLeft {
  const target = new Date("2025-05-15T00:00:00");
  const diff = target.getTime() - new Date().getTime();

  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / 1000 / 60) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

function Digit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#00ffc8]/10 blur-xl rounded-lg" />
        <div className="relative border border-[#00ffc8]/30 bg-black/60 px-4 py-3 md:px-8 md:py-5 rounded-lg min-w-[70px] md:min-w-[110px] text-center">
          <span className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-[clamp(2rem,6vw,4rem)] leading-none tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="font-[family-name:var(--font-tech)] text-white/40 text-[0.6rem] tracking-[0.4em] uppercase">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calcTimeLeft());

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calcTimeLeft());
  }, 1000);
  return () => clearInterval(timer);
}, []);

  return (
    <section className="relative bg-black flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-xs tracking-[0.5em] uppercase mb-12 z-10"
      >
        — faltan —
      </motion.p>

      {timeLeft === null ? (
        <div className="font-[family-name:var(--font-tech)] text-[#00ffc8]/40 text-sm tracking-widest z-10">
          Iniciando...
        </div>
      ) : (
        <div className="flex items-start gap-4 md:gap-8 z-10">
          <Digit value={timeLeft.dias} label="días" />
          <span className="font-[family-name:var(--font-tech)] text-[#00ffc8]/50 text-4xl md:text-6xl mt-3 md:mt-4">:</span>
          <Digit value={timeLeft.horas} label="horas" />
          <span className="font-[family-name:var(--font-tech)] text-[#00ffc8]/50 text-4xl md:text-6xl mt-3 md:mt-4">:</span>
          <Digit value={timeLeft.minutos} label="minutos" />
          <span className="font-[family-name:var(--font-tech)] text-[#00ffc8]/50 text-4xl md:text-6xl mt-3 md:mt-4">:</span>
          <Digit value={timeLeft.segundos} label="segundos" />
        </div>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="font-[family-name:var(--font-vintage)] text-white/30 text-lg mt-12 z-10"
      >
        15 de Mayo
      </motion.p>
    </section>
  );
}