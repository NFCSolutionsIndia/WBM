"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const segments = [
  { title: "Investor", desc: "Unit economics, TAM, moat, thesis.", icon: "◆", accent: "var(--color-lime)" },
  { title: "Customer / OEM", desc: "Spec sheets & off-take supply terms.", icon: "⬡", accent: "var(--color-ice)" },
  { title: "Feedstock Supplier", desc: "Sell us your waste streams at tipping fees.", icon: "▲", accent: "var(--color-orange)" },
  { title: "AI DC Tenant", desc: "Co-located, low-cost, sovereign compute.", icon: "■", accent: "var(--color-lime)" },
  { title: "Government", desc: "Compliance, sovereignty, job creation.", icon: "●", accent: "var(--color-orange)" },
  { title: "Academia", desc: "Datasets, research collaboration.", icon: "✦", accent: "var(--color-ice)" },
];

export default function SegmentSelector() {
  return (
    <section className="py-12 w-full bg-[var(--c-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">Personalized Intelligence</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-black tracking-tighter leading-none text-[clamp(40px,7vw,96px)] text-[var(--c-fg)]"
            >
              Who Are You?
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="font-sans text-xl max-w-sm text-[var(--c-fg2)]">
            Tell us who you are — we'll surface exactly what matters to your role.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((seg, idx) => (
            <TiltCard key={seg.title} glowColor={seg.accent} className="group h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative glass rounded-[32px] p-8 border border-[var(--c-border)] cursor-pointer overflow-hidden h-full flex flex-col transition-colors duration-300"
                whileHover={{ borderColor: seg.accent }}
              >
                {/* Background shape */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                  style={{ background: seg.accent }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-[10px] flex items-center justify-center text-2xl mb-8 transition-all duration-300 group-hover:scale-110 shadow-sm"
                  style={{ background: `var(--c-bg2)`, border: `1px solid var(--c-border)`, color: seg.accent }}
                >
                  {seg.icon}
                </div>

                {/* Content */}
                <h3 className="font-sans font-black text-2xl md:text-3xl text-[var(--c-fg)] mb-3 leading-tight tracking-tight uppercase">{seg.title}</h3>
                <p className="font-sans text-base leading-relaxed text-[var(--c-fg2)] flex-grow">{seg.desc}</p>

                {/* Arrow reveal on hover */}
                <div
                  className="mt-8 flex items-center gap-2 font-sans font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-2"
                  style={{ color: seg.accent }}
                >
                  <span>Explore</span>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
