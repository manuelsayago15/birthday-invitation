"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { src: "/photos/photo1.jpg", alt: "Celebración 1" },
  { src: "/photos/photo2.jpg", alt: "Celebración 2" },
  { src: "/photos/photo3.jpg", alt: "Celebración 3" },
];

export default function Gallery() {
  return (
    <section className="section-gallery relative bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden px-6 gap-4 py-8">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-2 text-center"
      >
        <p className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-xs tracking-[0.5em] uppercase">
          — algunos recuerdos —
        </p>
      </motion.div>

      {/* Grid de fotos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-4xl">
    {photos.map((photo, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative aspect-[2/1] md:aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-white/5 group"
        >
        <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover md:grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
        />
        </motion.div>
        ))}
    </div>

      {/* Ornamento inferior */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-4"
      >
        <div className="h-px w-16 md:w-24 bg-[#c9a84c]/40" />
        <span className="text-[#c9a84c]/40 text-sm">✦</span>
        <div className="h-px w-16 md:w-24 bg-[#c9a84c]/40" />
      </motion.div>

    </section>
  );
}