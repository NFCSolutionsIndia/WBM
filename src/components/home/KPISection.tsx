"use client";

import { motion } from "framer-motion";

const kpis = [
  { label: "Lithium Recovery", value: "98", suffix: "%+", desc: "Industry-leading battery-grade Li recovery rate" },
  { label: "Plant Capacity", value: "100k", suffix: " sq ft", desc: "Co-located extraction + AI data centre per site" },
  { label: "Gold Extraction", value: "99.9", suffix: "%", desc: "Pharmaceutical-grade gold from PCBs & chips" },
  { label: "Landfill Diversion", value: "100", suffix: "%", desc: "Zero-to-landfill across all three waste streams" },
];

export default function KPISection() {
  return (
    <section className="py-28 bg-[var(--c-bg)] relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(var(--c-fg) 1px, transparent 1px), linear-gradient(90deg, var(--c-fg) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[var(--c-fg3)]" />
            <span className="font-sans text-xs font-bold tracking-[0.3em] text-[var(--c-fg2)] uppercase">The Pulse</span>
            <div className="w-12 h-px bg-[var(--c-fg3)]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans font-black tracking-tighter uppercase text-[clamp(32px,5vw,72px)] text-[var(--c-fg)] leading-[0.9]"
          >
            Operational{" "}
            <span className="text-[var(--color-lime)]">Excellence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 font-sans text-lg text-[var(--c-fg2)] max-w-2xl mx-auto"
          >
            Our patented hydrometallurgy process delivers industry-leading yields. We share our outcomes, not our formula.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, idx) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass p-8 rounded-[32px] flex flex-col items-center text-center border border-[var(--c-border)] transition-all duration-300"
            >
              <div className="font-sans font-black text-[clamp(40px,6vw,72px)] leading-none tabular-nums mb-2" style={{ color: "var(--color-lime)" }}>
                {kpi.value}
                <span className="text-2xl opacity-60">{kpi.suffix}</span>
              </div>
              <div className="font-sans font-bold text-sm uppercase tracking-widest text-[var(--c-fg)] mb-2">
                {kpi.label}
              </div>
              <p className="font-sans text-xs text-[var(--c-fg3)] leading-relaxed">
                {kpi.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
