"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
              className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center pt-20"
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
                  AI-Native Mineral Extraction
                </span>
              </motion.div>

              {/* Static Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans font-black uppercase tracking-tighter leading-[0.85] text-white drop-shadow-lg mb-2"
                style={{ fontSize: "clamp(32px, 10vw, 150px)" }}
              >
                Trash To <br className="sm:hidden" />
                <span className="text-[var(--c-highlight)]" style={{ textShadow: "0 0 60px rgba(120,185,51,0.5)" }}>Treasure.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-6 md:mt-8 font-sans text-white/60 text-base md:text-xl max-w-xl leading-relaxed"
              >
                The world's only AI-native platform extracting 11 critical minerals from e-waste, batteries, and rare-earth magnets.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.7 }}
                className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full max-w-[320px] sm:max-w-none justify-center"
              >
                <Button 
                  href="/contact"
                  variant="primary"
                  className="w-full sm:w-auto justify-center"
                >
                  Take Charge Of Your Supply
                </Button>
                
                <Button 
                  href="/about"
                  variant="outline"
                  className="w-full sm:w-auto justify-center"
                >
                  Learn About WBM
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
