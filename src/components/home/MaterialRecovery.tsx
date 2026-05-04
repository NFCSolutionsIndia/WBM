"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const steps = [
  { num: "01", title: "Collection", desc: "Tipping fees earned the moment feedstock arrives at the gate.", accent: "#FF6B35" },
  { num: "02", title: "AI Sorting", desc: "Vision systems classify every component—98.7% accuracy.", accent: "#00E5FF" },
  { num: "03", title: "Extraction", desc: "Patented hydrometallurgy. Zero liquid discharge.", accent: "#C7F53E" },
  { num: "04", title: "Purification", desc: "Pharmaceutical-grade purity. Certified per batch.", accent: "#FF6B35" },
  { num: "05", title: "Distribution", desc: "NVIDIA, Intel, Tata, Airbus — straight to OEM off-take.", accent: "#C7F53E" },
];

const metrics = [
  { label: "Gold", val: 94, accent: "#FFD700" },
  { label: "Copper", val: 97, accent: "#FF6B35" },
  { label: "Lithium", val: 92, accent: "#C7F53E" },
  { label: "Neodymium", val: 89, accent: "#AA77FF" },
  { label: "Silver", val: 96, accent: "#C0C0C0" },
  { label: "Palladium", val: 91, accent: "#88DDFF" },
];

export default function MaterialRecovery() {
  return (
    <section className="py-12 w-full" style={{ background: "#090909" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
          <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">Five-Step Process</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 mb-12">
          {/* Process steps horizontal */}
          <div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="font-display font-bold text-[clamp(40px,6vw,80px)] text-text-primary leading-none mb-12">
              From Waste<br />to <span style={{ color: "#C7F53E" }}>World-Class</span>
            </motion.h2>
            <div className="space-y-2">
              {steps.map((s, i) => (
                <TiltCard key={s.num} intensity={5} glowColor={`${s.accent}12`}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center gap-5 px-5 py-4 rounded-[10px] border border-white/5 cursor-pointer hover:border-white/15 transition-colors duration-300"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <span className="font-mono text-xs w-8" style={{ color: s.accent }}>{s.num}</span>
                    <div className="w-px h-8 self-stretch" style={{ background: `${s.accent}30` }} />
                    <div className="flex-1">
                      <div className="font-sans font-bold text-text-primary group-hover:text-lime transition-colors">{s.title}</div>
                      <div className="font-sans text-xs mt-0.5" style={{ color: "rgba(245,245,240,0.35)" }}>{s.desc}</div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Recovery rates */}
          <div>
            <h3 className="font-display font-bold text-4xl text-text-primary mb-10">Recovery <span style={{ color: "#C7F53E" }}>Efficiency</span></h3>
            <div className="space-y-6">
              {metrics.map((m, idx) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans font-bold text-sm text-text-primary">{m.label}</span>
                    <span className="font-mono text-sm font-bold" style={{ color: m.accent }}>{m.val}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.val}%` }}
                      transition={{ duration: 1.4, delay: idx * 0.1, ease: "easeOut" }}
                      style={{ background: `linear-gradient(90deg, ${m.accent}80, ${m.accent})`, boxShadow: `0 0 10px ${m.accent}60` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* KPI pills */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { val: "12,540+", label: "Tonnes / Year", accent: "#C7F53E" },
                { val: "98.7%", label: "AI Sort Accuracy", accent: "#00E5FF" },
              ].map((k) => (
                <motion.div
                  key={k.label}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-[10px] p-5 border text-center"
                  style={{ background: `${k.accent}08`, borderColor: `${k.accent}25` }}
                >
                  <div className="font-display font-bold text-4xl mb-1" style={{ color: k.accent, textShadow: `0 0 20px ${k.accent}50` }}>{k.val}</div>
                  <div className="font-mono text-xs uppercase tracking-widest" style={{ color: "rgba(245,245,240,0.4)" }}>{k.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
