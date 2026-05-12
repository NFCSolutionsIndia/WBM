"use client";

import { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Recycle } from "lucide-react";
import dynamic from "next/dynamic";

const FootprintGlobe = dynamic(() => import("./FootprintGlobe"), { 
  ssr: false,
  loading: () => <div className="w-full h-[500px] bg-[#0a0a0a]/50 animate-pulse rounded-[20px]" />
});

const LOCS = [
  { id: "india",  city: "Pune",          country: "India",         status: "operational", x: 72, y: 45, color: "#839470", capacity: "30,000 t/yr intake",   footprint: "100,000 sq ft", desc: "India's flagship AI-powered e-waste facility serving major tech hubs across South Asia." },
  { id: "uae",    city: "Ras al-Khaimah",country: "UAE",           status: "operational", x: 65, y: 40, color: "#839470", capacity: "15,000 t/yr intake",   footprint: "75,000 sq ft",  desc: "Strategic Middle East hub processing e-waste from GCC member states." },
  { id: "sa",     city: "Johannesburg",  country: "South Africa",  status: "planned",     x: 55, y: 75, color: "#839470", capacity: "20,000 t/yr (planned)",footprint: "90,000 sq ft",  desc: "Planned greenfield facility to serve Sub-Saharan Africa's growing e-waste volumes." },
  { id: "usa",    city: "Houston",       country: "United States", status: "operational", x: 20, y: 35, color: "#839470", capacity: "35,000 t/yr intake",   footprint: "120,000 sq ft", desc: "North American HQ and primary processing hub for US domestic e-waste networks." },
];

export default function GlobalFootprint({ isDark = true }: { isDark?: boolean }) {
  const [hovered, setHovered] = useState<typeof LOCS[0] | null>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setScale(0.75);
      else if (width < 768) setScale(0.6);
      else if (width < 1024) setScale(0.8);
      else setScale(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionBg = "#050505";
  const textColor = "#ffffff";
  const cardBg    = "rgba(8,12,16,0.85)";
  const cardBdr   = "rgba(255,255,255,0.15)";

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden flex flex-col justify-between"
      style={{ background: sectionBg, minHeight: "100vh" }}
    >
      {/* ── BACKGROUND GLOWS ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#839470]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#839470]/5 rounded-full blur-[120px]" />
      </div>

      {/* ── HEADER ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-0 text-center w-full pointer-events-none">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#839470] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#839470]">Our Footprint</span>
          </div>
          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] section-title mb-3 text-white">
            A SEMI-CIRCLE OF ALLIES.<br />
            <span className="text-[#839470]">A BYPASS TO FRAGILE SUPPLY CHAINS.</span>
          </h2>
          <p className="font-sans text-base max-w-2xl mx-auto text-white/60">
            Four countries. Eight plants. Zero exposure to the geographies that hold the West hostage. By design, not by default. WBM does not operate in non-allied parts of Asia. Our semi-circle of allied geographies is the bypass route.
          </p>
        </motion.div>
      </div>

      {/* ── INTERACTIVE 3D GLOBE ── */}
      <div className="relative z-0 flex-1 min-h-[500px] flex items-center justify-center mt-10 md:mt-16 overflow-hidden">
        <div className="w-full h-full max-w-5xl">
          <FootprintGlobe />
        </div>
      </div>

      {/* ── FLOATING HOVER POPUP (Fixed to Screen Center to avoid isometric skew) ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[200] bottom-12 left-1/2 -translate-x-1/2 w-[340px] md:w-[400px] pointer-events-none"
          >
            <div className="rounded-[10px] p-6 shadow-2xl border backdrop-blur-2xl bg-[#080c10]/90 border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${hovered.color}, transparent)` }} />
              
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans font-black text-xs uppercase tracking-widest text-white/50">{hovered.country}</span>
                <span className="font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ color: hovered.color, background: `${hovered.color}15`, border: `1px solid ${hovered.color}40` }}>
                  {hovered.status}
                </span>
              </div>
              <h3 className="section-title font-sans font-black tracking-tight mb-2 text-white">{hovered.city}</h3>
              <p className="font-sans text-sm leading-relaxed mb-5 text-white/70">{hovered.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[10px] p-3 border border-white/10 bg-white/5">
                  <div className="font-sans text-[9px] uppercase tracking-widest mb-1 text-white/40">Footprint</div>
                  <div className="font-sans font-bold text-xs text-white/90">{hovered.footprint}</div>
                </div>
                <div className="rounded-[10px] p-3 border border-white/10 bg-white/5">
                  <div className="font-sans text-[9px] uppercase tracking-widest mb-1 text-white/40">Capacity</div>
                  <div className="font-sans font-bold text-xs text-white/90">{hovered.capacity}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LEGEND CARDS ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {LOCS.map((loc, i) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onMouseEnter={() => setHovered(loc)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-[10px] p-5 border backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-xl card-theme ${hovered?.id === loc.id ? 'scale-105 border-white/30' : 'border-white/10 hover:border-white/20'}`}
            style={{ background: cardBg }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]" style={{ background: loc.color, color: loc.color }} />
              <span className="font-sans font-bold text-[9px] uppercase tracking-widest" style={{ color: loc.color }}>{loc.status}</span>
            </div>
            <div className="font-sans font-black text-lg text-white">{loc.city}</div>
            <div className="font-sans text-[10px] uppercase tracking-wide mb-1 text-white/50">{loc.country}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
