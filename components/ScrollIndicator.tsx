"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Ocultar cuando lleguen a la sección de confirmación (75% del scroll total)
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrolled < 0.75);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToConfirm = () => {
    const sections = document.querySelectorAll("section");
    const confirmSection = sections[3]; // Sección 4 = ConfirmForm
    confirmSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 3 }}
          onClick={scrollToConfirm}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 border border-[#00ffc8]/30 bg-black/80 backdrop-blur-sm hover:bg-[#00ffc8]/10 cursor-pointer text-white font-[family-name:var(--font-space)] text-[0.6rem] tracking-[0.3em] uppercase px-4 py-3 rounded-full transition-all duration-300"
        >
          <span>confirmar asistencia</span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}