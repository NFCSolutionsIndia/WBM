"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

const rotatingWords = ["Treasure.", "Compute.", "Power.", "Value."];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Prevent SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "0px"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#080808]"
      style={{ height: "120vh" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center p-3 md:p-5">
        <motion.div
          style={{ scale, borderRadius }}
          className="relative w-full h-full overflow-hidden flex items-center justify-center"
        >
          {/* ── Background Video ── */}
          <video
            src="/media/BackgroundVideoHero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(241, 239, 239, 0.6)_100%)]" />

          {/* ── Hero Text (visible by default) ── */}
          {mounted && (
            <motion.div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
            >
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-[#C1FF00]/60 bg-white/5 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#C1FF00] shadow-[0_0_10px_#C1FF00] animate-pulse" />
                <span className="font-sans text-xs font-bold tracking-[0.2em] text-white/90 uppercase">
                  AI-Native Mineral Extraction
                </span>
              </motion.div>

              {/* Static Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-black uppercase tracking-tighter leading-[0.85] text-white drop-shadow-lg mb-2"
                style={{ fontSize: "clamp(48px, 9vw, 150px)" }}
              >
                Trash To <br className="sm:hidden" />
                <span className="text-[#C1FF00]" style={{ textShadow: "0 0 60px rgba(193,255,0,0.5)" }}>Treasure.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-8 font-sans text-white/60 text-lg md:text-xl max-w-xl leading-relaxed"
              >
                The world&apos;s only AI-native platform extracting 11 critical minerals from e-waste, batteries, and rare-earth magnets.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.7 }}
                className="mt-10 flex flex-col sm:flex-row items-center gap-4"
              >
                <motion.a
                  href="#system"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-sans font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full text-black"
                  style={{ background: "#C1FF00" }}
                >
                  Take Charge Of Your Supply
                </motion.a>
                <motion.a
                  href="#system"
                  whileHover={{ scale: 1.03 }}
                  className="font-sans font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full text-white border border-white/20 backdrop-blur-sm"
                >
                  See How It Works ↓
                </motion.a>
              </motion.div>
            </motion.div>
          )}

          {/* Scroll indicator */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-white/40">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
