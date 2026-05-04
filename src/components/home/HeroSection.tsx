"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, X, ArrowRight, FileText, Leaf } from "lucide-react";
import Button from "@/components/ui/Button";

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
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["10px", "0px"]);

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
            src="/WBM/media/BackgroundVideoHero.mp4"
            poster="/WBM/media/BackgroundImgHero.png"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          {/* Radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

          {/* ── Hero Text (visible by default) ── */}
          {mounted && (
            <motion.div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center pt-10"
            >
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="inline-flex items-center gap-2 md:gap-3 mb-6 md:mb-8 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-[var(--c-highlight)]/60 bg-white/5 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--c-highlight)] shadow-[0_0_10px_var(--c-highlight)] animate-pulse" />
                <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/90 uppercase">
                  FIRST & ONLY OF ITS KIND — WORLDWIDE
                </span>
              </motion.div>

              {/* Static Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-black uppercase tracking-tighter leading-[1.1] text-white drop-shadow-lg mb-2 text-3xl md:text-[64px]"
              >
                TRASH to <br className="sm:hidden" />
                <span className="text-[var(--c-highlight)]" style={{ textShadow: "0 0 60px rgba(120,185,51,0.5)" }}>treasure.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-6 md:mt-8 flex flex-col items-center"
              >
                <h2 className="font-sans text-white text-xl md:text-2xl font-bold mb-4">
                  Recover. Reuse. Reimagine.
                </h2>
                <p className="font-sans text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
                  We're the only company on Earth extracting 11 critical minerals from batteries, magnets, AND PCBs—under one AI-native roof.
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="mt-8 flex flex-wrap justify-center gap-3"
              >
                <div className="px-3 py-1 rounded-full border border-[var(--c-highlight)]/30 bg-[var(--c-highlight)]/10 text-[var(--c-highlight)] text-[10px] font-bold uppercase tracking-wider">
                  98% recovery
                </div>
                <div className="px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
                  30–40% energy savings
                </div>
                <div className="px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Leaf size={10} /> Zero NOx
                </div>
                <div className="px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                  LiBERT™ patented
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full max-w-[320px] sm:max-w-none justify-center"
              >
                <Button 
                  href="/what-we-do"
                  variant="primary"
                  className="w-full sm:w-auto justify-center"
                  showArrow
                >
                  See How We Do It
                </Button>
                
                <Button 
                  href="/pitch-deck"
                  variant="outline"
                  className="w-full sm:w-auto justify-center"
                >
                  Request Pitch Deck
                </Button>
              </motion.div>

            </motion.div>
          )}

          {/* Scroll indicator */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
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
