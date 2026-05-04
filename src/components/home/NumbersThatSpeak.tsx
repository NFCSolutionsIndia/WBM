"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const numbers = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M4 14a8 8 0 0 1 15-3"/><path d="M19 11v3h-3"/><path d="M20 10a8 8 0 0 0-15 3"/><path d="M5 13v-3h3"/></svg>, value: "98%",        title: "Material Recovery",      desc: "Material recovery (LiBERT)",   accent: "#78B933" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="12" x2="8" y2="17"/><line x1="12" y1="10" x2="12" y2="17"/><line x1="16" y1="14" x2="16" y2="17"/></svg>, value: "11",         title: "Minerals",     desc: "Critical minerals extracted",   accent: "#78B933" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,                                                                                                                                                                   value: "3",          title: "Waste Streams",         desc: "Waste streams integrated",    accent: "#78B933" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,                                                                                                                                                      value: "30–40%",    title: "Energy Savings",        desc: "Energy savings vs traditional",       accent: "#7ECCD6" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,                                                                                                                                        value: "5",          title: "Revenue",       desc: "Revenue avenues",  accent: "#78B933" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 8h8v8H8z"/></svg>,                                                                                                                                    value: "100k",       title: "Operational Sq Ft",     desc: "Robot-assisted facility footprint optimized for AI-native extraction",         accent: "#78B933" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,                                                                                                                      value: "15-YR",      title: "Lease Terms",           desc: "Long-term infrastructure security for our AI data centre tenants",           accent: "#78B933" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,                                                                                                                                                   value: "6-LAYER",    title: "Data Encryption",       desc: "Enterprise-grade security for co-located compute infrastructure",                accent: "#78B933" },
];

const highlights = [
  { label: "Recovery Rate",   value: "98%" },
  { label: "Energy Savings",  value: "30-40%" },
  { label: "Waste Streams",   value: "3" },
  { label: "Revenue Lines",   value: "5" },
];

export default function NumbersThatSpeak() {
  return (
    <section className="relative bg-[#080808] min-h-screen">

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

      {/* Two-column content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-6 gap-12 py-24">
        
        {/* ── LEFT: heading + stats ── */}
        <div className="w-full lg:w-5/12 lg:pr-8 flex-shrink-0 flex flex-col justify-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#78B933] animate-pulse" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-white/70">
                Performance Metrics
              </span>
            </div>

            <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.88] text-3xl md:text-[52px] text-white mb-8">
              Numbers<br />
              <span style={{ color: "#78B933" }}>That Speak</span>
            </h2>

            <p className="font-sans text-white/50 text-lg leading-relaxed mb-14 max-w-md">
              Our AI-powered facility delivers industry-leading performance across every metric — from recovery rates to environmental compliance.
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/5 rounded-[10px] overflow-hidden border border-white/5">
              {highlights.map((h) => (
                <div key={h.label} className="p-6 bg-black/40 backdrop-blur-md transition-colors hover:bg-black/60">
                  <div className="font-sans font-black text-3xl text-[#78B933] tracking-tighter mb-1">
                    {h.value}
                  </div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: card grid ── */}
        <div className="w-full lg:w-7/12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {numbers.map((num, i) => (
              <div
                key={i}
                className="group relative rounded-[20px] bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-[#78B933]/50 hover:shadow-[0_10px_40px_rgba(178,197,130,0.1)]"
              >
                {/* Hover gradient sweep */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                  style={{ background: `linear-gradient(135deg, ${num.accent}, transparent)` }} 
                />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-[10px] flex items-center justify-center border border-white/10 mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-500"
                    style={{ background: "rgba(255,255,255,0.03)", color: num.accent }}
                  >
                    <div className="scale-75 md:scale-100">{num.icon}</div>
                  </div>

                  <div>
                    <h3 
                      className="font-sans font-black text-2xl md:text-4xl tracking-tighter mb-1 md:mb-2 transition-colors duration-300"
                      style={{ color: num.accent }}
                    >
                      {num.value}
                    </h3>
                    <div className="font-sans font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/80 mb-2">
                      {num.title}
                    </div>
                    <p className="font-sans text-white/50 text-xs md:text-sm leading-relaxed">
                      {num.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
