"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";

function Counter({ target, suffix = "" }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function SustainabilityImpact() {
  return (
    <section className="relative py-12 overflow-hidden bg-[#050505]">
      {/* Background slow wave motion and glowing orbs */}
      <motion.div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(193,255,0,0.1) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,107,53,0.1) 0%, transparent 40%)",
          backgroundSize: "200% 200%"
        }}
      />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#839470]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B35]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#839470] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#839470]">Circular Economy</span>
          </div>
          <h2 className="section-title font-black uppercase tracking-tighter text-white mb-6">
            From your dump yard<br/>back to your devices
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Three layers of closed loops. We're the only company on Earth extracting 11 critical minerals from batteries, magnets, AND PCBs—under one AI-native roof.
          </p>
          <button className="px-8 py-4 bg-[#839470] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Our Closed-Loop Journey
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: 98, label: "Material Recovery Rate", suffix: "%" },
            { value: 11, label: "Minerals Extracted", suffix: "/118" },
            { value: 100, label: "Plant Uptime Guarantee", suffix: "%" }
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <TiltCard
                className="p-10 rounded-[10px] bg-black/40 border border-white/5 backdrop-blur-xl hover:border-white/10 transition-colors card-theme"
              >
                <div className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#839470] to-[#FF6B35] tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(193,255,0,0.2)]">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-bold text-sm tracking-widest uppercase text-white/60">{stat.label}</div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

    </section>
  );
}
