"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import Button from "@/components/ui/Button";
import Particles from "@/components/ui/backgrounds/Particles";
import Image from "next/image";

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
          {/* Particles Background */}
          <div className="absolute inset-0 z-0">
            <Particles 
              particleCount={300}
              particleSpread={12}
              speed={0.15}
              particleColors={["#839470", "#ffffff", "#555555"]}
              moveParticlesOnHover
              alphaParticles
              className="opacity-40"
            />
          </div>

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
          
          {/* ── 3D Rotating Object Simulation ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute right-[5%] top-[20%] w-[400px] h-[400px] pointer-events-none hidden lg:block z-[2]"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                y: [0, -20, 0]
              }}
              transition={{ 
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-[var(--c-highlight)]/10 rounded-full blur-3xl animate-pulse" />
                <Image 
                  src="/WBMLogo.svg" 
                  alt="3D Object" 
                  width={300} 
                  height={300} 
                  className="brightness-0 invert opacity-20 drop-shadow-[0_0_30px_var(--c-highlight)]"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ── Hero Text ── */}
          {mounted && (
            <motion.div
              className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-20 md:justify-center md:pt-32 px-6 text-center"
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
                  Integrated Resource Recovery
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-sans font-black text-5xl md:text-[84px] leading-[0.85] tracking-tighter text-white uppercase mb-2"
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
                Recover. Reuse. Reimagine.
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="font-sans text-sm md:text-xl text-white/60 max-w-2xl mb-4 md:mb-6 leading-relaxed"
              >
                100% uptime. 6-layer encryption. 15-year leases. Bring your NVIDIA, Cisco, and Juniper; we handle the rest.
              </motion.p>

              {/* Metric Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="flex flex-wrap justify-center gap-2 mb-4 md:mb-8"
              >
                {[
                  { label: "98% recovery", color: "border-[#839470]/30 text-[#839470]" },
                  { label: "30-40% energy savings", color: "border-[#D9A750]/30 text-[#D9A750]" },
                  { label: "Zero NOx", color: "border-[#4ECDC4]/30 text-[#4ECDC4]" },
                  { label: "LiBERT™ patented", color: "border-[#A18CD1]/30 text-[#A18CD1]" }
                ].map((pill, i) => (
                  <div key={i} className={`px-4 py-1.5 rounded-full border ${pill.color} bg-black/40 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest`}>
                    {pill.label}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="flex flex-col items-center gap-6 md:gap-12"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                  <button className="min-w-[200px] md:min-w-[240px] px-6 py-3 md:px-8 md:py-4 rounded-full bg-[var(--c-highlight)] text-black font-sans font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-[0_0_30px_rgba(131,148,112,0.3)]">
                    View Data Centre Specs
                  </button>
                  <button className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 bg-white/5 text-white font-sans font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all">
                    <span className="opacity-60 text-base md:text-lg">📄</span>
                    Request Tour
                  </button>
                </div>

                {/* Scroll Down Indicator - Now unified and in-flow to prevent overlapping */}
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
