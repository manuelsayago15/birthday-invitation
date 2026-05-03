"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FULL_TEXT = "SAYA";

function calcTimeLeft() {
  const target = new Date("2026-05-15T00:00:00");
  const diff = target.getTime() - new Date().getTime();
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / 1000 / 60) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
const [done, setDone] = useState(false);
const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

// Efecto del countdown
useEffect(() => {
  const countdown = setInterval(() => {
    setTimeLeft(calcTimeLeft());
  }, 1000);
  return () => clearInterval(countdown);
}, []);

// Efecto del texto
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
    <section className="relative bg-black flex flex-col items-center justify-center overflow-hidden px-6 gap-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-xs tracking-[0.4em] uppercase z-10"
      >
        — Feriado Internacional —
      </motion.p>

      {/* Nombre */}
      <div className="font-[family-name:var(--font-tech)] text-white text-[clamp(4rem,18vw,12rem)] leading-none tracking-widest z-10 flex items-center">
        {displayed}
        <span className={`ml-1 inline-block w-[0.08em] h-[0.85em] bg-[#00ffc8] align-middle ${done ? "animate-pulse" : ""}`} />
      </div>

      {/* Subtítulo vintage */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="font-[family-name:var(--font-vintage)] text-white/60 text-lg md:text-2xl z-10 tracking-wide"
      >
        te invita a su cumpleaños
      </motion.p>

      {/* Fecha */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-sm tracking-[0.4em] uppercase z-10"
      >
        15 . 05 . 2026
      </motion.p>

      {/* Countdown */}
      {(
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex items-start gap-3 md:gap-6 z-10 mt-2"
        >
          {[
            { value: timeLeft.dias, label: "días" },
            { value: timeLeft.horas, label: "horas" },
            { value: timeLeft.minutos, label: "min" },
            { value: timeLeft.segundos, label: "seg" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 md:gap-6">
              <div className="flex flex-col items-center gap-1">
                <div className="border border-[#00ffc8]/30 bg-black/60 px-3 py-2 md:px-5 md:py-3 rounded-lg min-w-[52px] md:min-w-[80px] text-center">
                  <span className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-xl md:text-3xl leading-none tabular-nums">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-[family-name:var(--font-tech)] text-white/30 text-[0.55rem] tracking-[0.3em] uppercase">
                  {item.label}
                </span>
              </div>
              {i < 3 && (
                <span className="font-[family-name:var(--font-tech)] text-[#00ffc8]/40 text-xl md:text-3xl mt-1">:</span>
              )}
            </div>
          ))}
        </motion.div>
      )}

      {/* Scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 font-[family-name:var(--font-tech)] text-white/20 text-xs tracking-widest z-10"
      >
        scroll ↓
      </motion.p>
    </section>
  );
}