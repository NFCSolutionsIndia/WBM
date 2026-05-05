"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Shield, Zap, Cpu } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";
import MiniChart from "@/components/ui/effects/MiniChart";
import Button from "@/components/ui/Button";

export default function DataCenterBlock() {
  const router = useRouter();
  const cards = [
    { icon: <Shield className="w-8 h-8" />, title: "6-Layer Encryption", desc: "Enterprise-grade security for co-located compute infrastructure." },
    { icon: <Zap className="w-8 h-8" />, title: "100% Uptime", desc: "Redundant power and cooling systems ensuring zero downtime for critical AI loads." },
    { icon: <Cpu className="w-8 h-8" />, title: "NVIDIA-Ready", desc: "Optimized for high-performance GPU clusters including NVIDIA, Cisco, and Juniper." }
  ];

  return (
    <section className="py-24 bg-[#0C0F14] text-white relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--c-highlight)] rounded-full blur-[150px] z-0"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <div className="w-2 h-2 rounded-full bg-[var(--c-highlight)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#839470]">AI Data Centres</span>
          </div>
          <h2 className="section-title font-black uppercase tracking-tighter mb-8 leading-tight">
            AI Data Centres<br/>
            <span className="text-[var(--c-highlight)]">Sustainable & Secure</span>
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Co-located on-site for 100% uptime and 6-layer encryption. Tenants benefit from sharing the same infrastructure, power, and talent as our extraction facility.
          </p>
          <Button 
            href="/for-you/tenant"
            variant="outline"
            className="mx-auto"
            showArrow
          >
            View Lease Specs
          </Button>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <TiltCard
                className="p-10 rounded-[20px] bg-white/5 border border-white/10 backdrop-blur-lg h-full"
                glowColor="rgba(131, 148, 112, 0.15)"
              >
                <div className="w-16 h-16 rounded-[12px] bg-black/50 border border-white/10 flex items-center justify-center text-[#839470] mb-8 group-hover:bg-[var(--c-highlight)] group-hover:text-black transition-all duration-500 shadow-inner">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-[#839470] transition-colors">{card.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{card.desc}</p>
                <MiniChart />
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
