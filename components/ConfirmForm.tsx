"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

type Status = "idle" | "loading" | "success" | "error";

export default function ConfirmForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [foodRestriction, setFoodRestriction] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) return;

    setStatus("loading");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          food_restriction: foodRestriction.trim() || "Ninguna",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-black flex flex-col items-center justify-center overflow-hidden px-6 gap-8">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 text-center z-10"
          >
            <span className="text-[#00ffc8] text-5xl">✦</span>
            <h2 className="font-[family-name:var(--font-vintage)] text-white text-4xl md:text-5xl">
              ¡Nos vemos pronto!
            </h2>
            <p className="font-[family-name:var(--font-tech)] text-white/40 text-xs tracking-widest uppercase">
              Tu confirmación fue enviada a {email}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 w-full max-w-md z-10"
          >
            {/* Header */}
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="font-[family-name:var(--font-tech)] text-[#00ffc8] text-xs tracking-[0.5em] uppercase">
                — confirma tu asistencia —
              </p>
              <h2 className="font-[family-name:var(--font-vintage)] text-white text-[clamp(2rem,6vw,3.5rem)]">
                ¿Nos acompañas?
              </h2>
            </div>

            {/* Campos */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex flex-col gap-1">
                <label className="font-[family-name:var(--font-tech)] text-white/40 text-[0.6rem] tracking-[0.4em] uppercase">
                  nombre
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-[family-name:var(--font-tech)] text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ffc8]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-[family-name:var(--font-tech)] text-white/40 text-[0.6rem] tracking-[0.4em] uppercase">
                  correo
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-[family-name:var(--font-tech)] text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ffc8]/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-[family-name:var(--font-tech)] text-white/40 text-[0.6rem] tracking-[0.4em] uppercase">
                  restricción alimentaria <span className="text-white/20">(opcional)</span>
                </label>
                <input
                  type="text"
                  value={foodRestriction}
                  onChange={(e) => setFoodRestriction(e.target.value)}
                  placeholder="Ej: vegetariano, celíaco..."
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-[family-name:var(--font-tech)] text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00ffc8]/50 transition-colors"
                />
              </div>
            </div>

            {/* Error */}
            {status === "error" && (
              <p className="font-[family-name:var(--font-tech)] text-red-400/70 text-xs tracking-widest text-center">
                Algo salió mal. Intenta de nuevo.
              </p>
            )}

            {/* Botón */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading" || !name.trim() || !email.trim()}
              className="w-full border border-[#00ffc8]/40 bg-[#00ffc8]/5 hover:bg-[#00ffc8]/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-[#00ffc8] font-[family-name:var(--font-tech)] text-xs tracking-[0.4em] uppercase py-4 rounded-lg transition-all duration-300"
            >
              {status === "loading" ? "Enviando..." : "Confirmo mi asistencia ✦"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}