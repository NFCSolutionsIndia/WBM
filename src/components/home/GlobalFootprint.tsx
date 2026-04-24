"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOCS = [
  { id: "india",  city: "Pune",          country: "India",         status: "operational", x: 72, y: 45, color: "#C1FF00", capacity: "30,000 t/yr intake",   footprint: "100,000 sq ft", desc: "India's flagship AI-powered e-waste facility serving major tech hubs across South Asia." },
  { id: "uae",    city: "Ras al-Khaimah",country: "UAE",           status: "operational", x: 65, y: 40, color: "#FF6B35", capacity: "15,000 t/yr intake",   footprint: "75,000 sq ft",  desc: "Strategic Middle East hub processing e-waste from GCC member states." },
  { id: "sa",     city: "Johannesburg",  country: "South Africa",  status: "planned",     x: 55, y: 75, color: "#7ECCD6", capacity: "20,000 t/yr (planned)",footprint: "90,000 sq ft",  desc: "Planned greenfield facility to serve Sub-Saharan Africa's growing e-waste volumes." },
  { id: "usa",    city: "Houston",       country: "United States", status: "operational", x: 20, y: 35, color: "#C1FF00", capacity: "35,000 t/yr intake",   footprint: "120,000 sq ft", desc: "North American HQ and primary processing hub for US domestic e-waste networks." },
];

export default function GlobalFootprint({ isDark = true }: { isDark?: boolean }) {
  const [hovered, setHovered] = useState<typeof LOCS[0] | null>(null);

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
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C1FF00]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6B35]/5 rounded-full blur-[120px]" />
      </div>

      {/* ── HEADER ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-0 text-center w-full pointer-events-none">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#C1FF00] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#C1FF00]">Global Distribution</span>
          </div>
          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] text-[clamp(36px,5vw,64px)] mb-3 text-white">
            Our <span className="text-[#C1FF00]">Network</span>
          </h2>
          <p className="font-sans text-base max-w-md mx-auto text-white/60">
            Hover a location pin to explore full operational details and facility metrics.
          </p>
        </motion.div>
      </div>

      {/* ── ISOMETRIC 3D MAP ── */}
      <div className="relative z-0 flex-1 min-h-[60vh] flex items-center justify-center -mt-10 perspective-[1200px]">
        <motion.div 
          initial={{ rotateX: 60, rotateZ: -10, y: 50, opacity: 0 }}
          whileInView={{ rotateX: 60, rotateZ: -20, y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-[1000px] h-[500px] preserve-3d"
        >
          {/* Map Base (SVG from Wikimedia, tinted via CSS) */}
          <div 
            className="absolute inset-0 opacity-40 mix-blend-screen"
            style={{ 
              backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg")',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              filter: 'invert(1) sepia(1) saturate(5) hue-rotate(45deg) drop-shadow(0 0 15px rgba(193,255,0,0.5))'
            }}
          />
          
          {/* Tech Grid Floor */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />

          {/* Location Pins */}
          {LOCS.map((loc) => (
            <div 
              key={loc.id} 
              className="absolute group"
              style={{ left: `${loc.x}%`, top: `${loc.y}%`, transform: 'translateZ(20px) rotateX(-60deg) rotateZ(20deg)' }}
              onMouseEnter={() => setHovered(loc)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Pin Pillar / Beam */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-t from-transparent to-white/50 blur-[1px] pointer-events-none" style={{ background: `linear-gradient(to top, transparent, ${loc.color})` }} />
              
              {/* Interactive Node */}
              <div className="relative flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:scale-125">
                <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] text-black font-bold text-[10px]" style={{ background: loc.color }}>
                  ♻
                </div>
                <div className="absolute inset-0 rounded-full animate-ping opacity-40 pointer-events-none" style={{ background: loc.color }} />
              </div>
            </div>
          ))}

        </motion.div>
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
            <div className="rounded-2xl p-6 shadow-2xl border backdrop-blur-2xl bg-[#080c10]/90 border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${hovered.color}, transparent)` }} />
              
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans font-black text-xs uppercase tracking-widest text-white/50">{hovered.country}</span>
                <span className="font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ color: hovered.color, background: `${hovered.color}15`, border: `1px solid ${hovered.color}40` }}>
                  {hovered.status}
                </span>
              </div>
              <h3 className="font-sans font-black text-3xl tracking-tight mb-2 text-white">{hovered.city}</h3>
              <p className="font-sans text-sm leading-relaxed mb-5 text-white/70">{hovered.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-3 border border-white/10 bg-white/5">
                  <div className="font-sans text-[9px] uppercase tracking-widest mb-1 text-white/40">Footprint</div>
                  <div className="font-sans font-bold text-xs text-white/90">{hovered.footprint}</div>
                </div>
                <div className="rounded-xl p-3 border border-white/10 bg-white/5">
                  <div className="font-sans text-[9px] uppercase tracking-widest mb-1 text-white/40">Capacity</div>
                  <div className="font-sans font-bold text-xs text-white/90">{hovered.capacity}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LEGEND CARDS ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {LOCS.map((loc, i) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            onMouseEnter={() => setHovered(loc)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-2xl p-5 border backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-xl ${hovered?.id === loc.id ? 'scale-105 border-white/30' : 'border-white/10 hover:border-white/20'}`}
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
