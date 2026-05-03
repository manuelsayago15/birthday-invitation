"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <section className="relative bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-6 gap-8">

      {/* Ornamento superior */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4"
      >
        <div className="h-px w-16 md:w-32 bg-[#c9a84c]/40" />
        <span className="text-[#c9a84c]/40 text-lg">✦</span>
        <div className="h-px w-16 md:w-32 bg-[#c9a84c]/40" />
      </motion.div>

      {/* Mensaje */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <p className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-xs tracking-[0.5em] uppercase">
          — trae regalos —
        </p>
        <h2 className="font-[family-name:var(--font-vintage)] text-white text-[clamp(2rem,6vw,4rem)]">
          Nos vemos en un rato
        </h2>
        <p className="font-[family-name:var(--font-vintage)] text-white/40 text-base md:text-lg italic max-w-sm">
          &quot;Gracias por ser parte de este día tan especial.&quot;
        </p>
      </motion.div>

      {/* Nombre y fecha */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-2"
      >
        <p className="font-[family-name:var(--font-tech)] text-white/20 text-xs tracking-[0.5em] uppercase">
          Saya · 15 de Mayo 2026
        </p>
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 font-[family-name:var(--font-tech)] text-white/10 text-[0.6rem] tracking-widest uppercase"
      >
        hecho con ♥ para ti
      </motion.p>

    </section>
  );
}