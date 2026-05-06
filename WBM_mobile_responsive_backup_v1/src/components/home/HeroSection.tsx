"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 40]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#080808]"
      style={{ height: "120vh" }}
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center p-3 md:p-5">
        <motion.div
          style={{ scale, borderRadius }}
          className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#050505]"
        >
          {/* ── Background Video ── */}
          <video
            src="/WBM/media/BackgroundVideoHero.mp4"
            poster="/WBM/media/BackgroundImgHero.png"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center mix-blend-screen opacity-40 z-[1]"
          />

          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-[2]" />
          
          {/* ── Hero Text ── */}
          {mounted && (
            <motion.div
              className="absolute inset-0 z-10 flex flex-col items-center justify-center pt-40 md:pt-40 px-6 text-center"
            >
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-8 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-[var(--c-highlight)]/60 bg-white/5 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--c-highlight)] shadow-[0_0_10px_var(--c-highlight)] animate-pulse" />
                <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/90 uppercase">
                   Integrated Resource Recovery
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-sans font-black text-4xl md:text-6xl lg:text-[84px] leading-[0.85] tracking-tighter text-white uppercase mb-2"
              >
                TRASH TO <br />
                <span className="text-[var(--c-highlight)] lime-glow-text">TREASURE.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="font-sans text-lg md:text-3xl font-black text-white uppercase tracking-tight mb-4"
              >
                RECOVER. REUSE. REIMAGINE.
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="font-sans text-sm md:text-xl text-white/60 max-w-2xl mb-6 leading-relaxed"
              >
                100% uptime. 6-layer encryption. 15-year leases. Bring your NVIDIA, Cisco, and Juniper; we handle the rest.
              </motion.p>

              {/* Metric Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="flex flex-wrap justify-center gap-2 mb-8"
              >
                {[
                  { label: "98% recovery", color: "border-[#839470]/30 text-[#839470]" },
                  { label: "30-40% energy savings", color: "border-[#D9A750]/30 text-[#D9A750]" },
                  { label: "Zero NOx", color: "border-[#4ECDC4]/30 text-[#4ECDC4]" },
                  { label: "LiBERT™ patented", color: "border-[#A18CD1]/30 text-[#A18CD1]" }
                ].map((pill, i) => (
                  <div key={i} className={`px-2 md:px-4 py-1 md:py-1.5 rounded-full border ${pill.color} bg-black/40 backdrop-blur-sm text-[9px] md:text-[10px] font-black uppercase tracking-widest`}>
                    {pill.label}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="flex flex-col items-center gap-12"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Button 
                    href="/data-centers" 
                    variant="primary" 
                    size="lg"
                    showArrow
                  >
                    VIEW DATA CENTRE SPECS
                  </Button>
                  <Button 
                    href="/contact" 
                    variant="outline" 
                    size="lg"
                    showArrow
                  >
                    REQUEST TOUR
                  </Button>
                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="flex flex-col items-center gap-2 mt-6 opacity-60"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50">Scroll</span>
                  <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--c-highlight)] to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
