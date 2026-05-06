"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTASection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--c-bg)] mt-12 border-t border-[var(--c-border)]">
      
      {/* Animated gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-multiply"
        style={{ background: "radial-gradient(circle, var(--color-lime) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none mix-blend-multiply"
        style={{ background: "radial-gradient(circle, var(--color-orange) 0%, transparent 70%)" }}
      />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-lime)] to-transparent opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-[var(--color-lime)]" />
          <span className="font-sans font-bold text-xs tracking-[0.4em] uppercase text-[var(--color-lime)]">Ready When You Are</span>
          <div className="w-12 h-px bg-[var(--color-lime)]" />
        </motion.div>

        {/* Massive headline */}
        <div className="overflow-hidden mb-4">
          <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="font-sans font-black tracking-tighter leading-[0.85] uppercase text-[clamp(72px,14vw,200px)] text-[var(--c-fg)] drop-shadow-sm">
              Trash to
            </h2>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <h2 className="font-sans font-black tracking-tighter leading-[0.85] uppercase relative text-[clamp(72px,14vw,200px)] text-[var(--color-lime)]">
              Treasure.
              <span className="absolute inset-0 text-[var(--color-lime)] blur-[60px] opacity-30 pointer-events-none">Treasure.</span>
            </h2>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-sans text-xl md:text-2xl mb-14 max-w-2xl mx-auto text-[var(--c-fg2)] leading-relaxed"
        >
          The world's only AI-native, integrated extractor of 11 critical minerals from three waste streams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-12"
        >
          <MagneticButton variant="lime" className="text-lg px-12 py-5 font-bold uppercase tracking-wider bg-[var(--color-lime)] text-black rounded-full hover:scale-105 transition-transform">
            Partner With Us
          </MagneticButton>
          <MagneticButton variant="ghost" className="text-lg px-12 py-5 font-bold uppercase tracking-wider text-[var(--c-fg)] border border-[var(--c-border)] rounded-full hover:bg-[var(--c-fg)] hover:text-[var(--c-bg)] transition-colors">
            View Pitch Deck
          </MagneticButton>
        </motion.div>

        {/* Footer links */}
        <div className="border-t border-[var(--c-border)] pt-10 pb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-8 h-8 opacity-80">
              <path d="M 20 4 L 28 16 L 24 16 L 24 24 C 24 28 20 32 20 32 C 20 32 16 28 16 24 L 16 16 L 12 16 Z" fill="var(--color-lime)" transform="rotate(0 20 20)"/>
              <path d="M 20 4 L 28 16 L 24 16 L 24 24 C 24 28 20 32 20 32 C 20 32 16 28 16 24 L 16 16 L 12 16 Z" fill="var(--color-ice)" transform="rotate(120 20 20)"/>
              <path d="M 20 4 L 28 16 L 24 16 L 24 24 C 24 28 20 32 20 32 C 20 32 16 28 16 24 L 16 16 L 12 16 Z" fill="var(--color-orange)" transform="rotate(240 20 20)"/>
            </svg>
            <span className="font-sans font-bold text-sm tracking-wide text-[var(--c-fg2)]">© 2026 WasteBeMinerals.AI</span>
          </div>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="font-sans font-bold text-sm text-[var(--c-fg3)] hover:text-[var(--color-lime)] transition-colors uppercase tracking-wider">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
