"use client";

import { motion } from "framer-motion";

export default function Details() {
  return (
    <section className="relative bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-6 gap-8">

      {/* Ornamento superior */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-4"
      >
        <div className="h-px w-16 md:w-32 bg-[#c9a84c]" />
        <span className="text-[#c9a84c] text-lg">✦</span>
        <div className="h-px w-16 md:w-32 bg-[#c9a84c]" />
      </motion.div>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-[family-name:var(--font-vintage)] text-white text-[clamp(2.5rem,8vw,6rem)] text-center leading-tight"
      >
        El Saya Party
      </motion.h2>

      {/* Detalles */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
      >
        <div className="text-center">
          <p className="font-[family-name:var(--font-tech)] text-white/40 text-[0.6rem] tracking-[0.4em] uppercase mb-1">fecha</p>
          <p className="font-[family-name:var(--font-vintage)] text-white text-xl">15 de Mayo, 2026</p>
        </div>

        <span className="text-[#c9a84c] hidden md:block">◆</span>

        <div className="text-center">
          <p className="font-[family-name:var(--font-tech)] text-white/40 text-[0.6rem] tracking-[0.4em] uppercase mb-1">hora</p>
          <p className="font-[family-name:var(--font-vintage)] text-white/80 text-xl">8:00 PM</p>
        </div>

        <span className="text-[#c9a84c] hidden md:block">◆</span>

        <div className="text-center">
          <p className="font-[family-name:var(--font-tech)] text-white/40 text-[0.6rem] tracking-[0.4em] uppercase mb-1">lugar</p>
          <p className="font-[family-name:var(--font-vintage)] text-white/80 text-xl text-center">Antonio Varas 2255 - Salón de fiestas</p>
        </div>
      </motion.div>

      {/* Mensaje personal */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-[family-name:var(--font-vintage)] text-white/40 text-base md:text-lg text-center max-w-md italic"
      >
        &quot;Una fiesta para divertirnos obviamente y donde sabrás porqué eres importante para mí.&quot;
      </motion.p>

      {/* Ornamento inferior */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center gap-4"
      >
        <div className="h-px w-16 md:w-32 bg-[#c9a84c]" />
        <span className="text-[#c9a84c] text-lg">✦</span>
        <div className="h-px w-16 md:w-32 bg-[#c9a84c]" />
      </motion.div>

    </section>
  );
}