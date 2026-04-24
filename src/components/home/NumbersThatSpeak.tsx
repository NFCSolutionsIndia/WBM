"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const numbers = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M4 14a8 8 0 0 1 15-3"/><path d="M19 11v3h-3"/><path d="M20 10a8 8 0 0 0-15 3"/><path d="M5 13v-3h3"/></svg>, value: "98.7%",      title: "AI Accuracy Rate",       desc: "Material identification precision across every waste stream",   accent: "#B2C582" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="12" x2="8" y2="17"/><line x1="12" y1="10" x2="12" y2="17"/><line x1="16" y1="14" x2="16" y2="17"/></svg>, value: "50k T/YR", title: "Plant Capacity",          desc: "Annual processing throughput at full operational capacity",   accent: "#FF6B35" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,                                                                                                                                                                   value: "99.9%",      title: "Mineral Purity",         desc: "Industry-grade output quality certified for immediate use",    accent: "#B2C582" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,                                                                                                                                                      value: "0 L",        title: "Liquid Discharge",       desc: "Zero liquid waste — fully closed-loop hydromet process",       accent: "#7ECCD6" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,                                                                                                                                        value: "24/7",       title: "Operational Hours",      desc: "Continuous AI-monitored operation with zero downtime targets",  accent: "#FF6B35" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 8h8v8H8z"/></svg>,                                                                                                                                    value: "48",         title: "Robotic Arms",           desc: "AI-guided robotic sorting systems operating in unison",         accent: "#B2C582" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,                                                                                                                      value: "3.4×",       title: "Annual Revenue Growth",  desc: "Year-over-year expansion across all revenue streams",           accent: "#FF6B35" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,                                                                                                                                                   value: "12,000+",    title: "Carbon Credits/yr",      desc: "Certified emissions offsets generated annually",                accent: "#B2C582" },
];

const highlights = [
  { label: "Facility Capacity", value: "50,000 T/YR" },
  { label: "Mineral Purity",    value: "99.9%" },
  { label: "AI Accuracy",       value: "98.7%" },
  { label: "Countries Served",  value: "40+" },
];

export default function NumbersThatSpeak() {
  return (
    <section className="relative bg-[#080808] min-h-screen">
      {/* Top curved cap */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[var(--c-bg)] rounded-b-[56px] z-30 pointer-events-none" />

      {/* Background image — flipped horizontally */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/WBM/media/BackgroundImgHero.png"
          alt="Facility background"
          fill
          className="object-cover"
          style={{ transform: "scaleX(-1)" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Bottom curved cap */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[var(--c-bg2)] rounded-t-[56px] z-30 pointer-events-none" />

      {/* Two-column content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 gap-12 py-32">
        
        {/* ── LEFT: heading + stats ── */}
        <div className="w-full lg:w-5/12 lg:pr-8 flex-shrink-0 lg:sticky lg:top-32 h-fit">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#B2C582]" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[#B2C582]">
                Performance Metrics
              </span>
            </div>

            <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.88] text-[clamp(44px,6vw,80px)] text-white mb-8">
              Numbers<br />
              <span style={{ color: "#B2C582" }}>That Speak</span>
            </h2>

            <p className="font-sans text-white/50 text-lg leading-relaxed mb-14 max-w-md">
              Our AI-powered facility delivers industry-leading performance across every metric — from recovery rates to environmental compliance.
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
              {highlights.map((h) => (
                <div key={h.label} className="p-6 bg-black/40 backdrop-blur-md transition-colors hover:bg-black/60">
                  <div className="font-sans font-black text-3xl text-[#B2C582] tracking-tighter mb-1">
                    {h.value}
                  </div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: card grid ── */}
        <div className="w-full lg:w-7/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {numbers.map((num, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative rounded-[24px] bg-black/60 backdrop-blur-xl border border-white/10 p-8 overflow-hidden transition-all duration-500 hover:border-[#B2C582]/50 hover:shadow-[0_10px_40px_rgba(178,197,130,0.1)]"
              >
                {/* Hover gradient sweep */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                  style={{ background: `linear-gradient(135deg, ${num.accent}, transparent)` }} 
                />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500"
                    style={{ background: "rgba(255,255,255,0.03)", color: num.accent }}
                  >
                    {num.icon}
                  </div>

                  <div>
                    <h3 
                      className="font-sans font-black text-4xl tracking-tighter mb-2 transition-colors duration-300"
                      style={{ color: num.accent }}
                    >
                      {num.value}
                    </h3>
                    <div className="font-sans font-bold text-xs tracking-[0.2em] uppercase text-white/80 mb-2">
                      {num.title}
                    </div>
                    <p className="font-sans text-white/50 text-sm leading-relaxed">
                      {num.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
