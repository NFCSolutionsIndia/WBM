"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function GlobalMap() {
  const locations = [
    { country: "United States", count: 5, desc: "Primary operational hubs" },
    { country: "India", count: 1, desc: "Geographic circular loop active" },
    { country: "UAE", count: 1, desc: "Ras al-Khaimah" },
    { country: "South Africa", count: 1, desc: "African continent hub" }
  ];

  return (
    <section className="py-12 bg-[var(--c-bg)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 relative z-10">
          <h2 className="section-title text-[var(--c-fg)] font-bold mb-4 uppercase tracking-tighter">Global Circular Economy</h2>
          <p className="text-xl text-[var(--c-fg)]/70 max-w-2xl mx-auto">
            Our global footprint forms a semi-circle of supply chain independence, entirely avoiding high-risk dependencies.
          </p>
        </div>

        <div className="relative w-full h-[400px] bg-[var(--c-bg)]/50 rounded-[10px] border border-[var(--c-border)] flex items-center justify-center overflow-hidden">
          {/* Abstract Map Background Simulation */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(var(--c-lime) 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl px-8">
            {locations.map((loc, idx) => (
              <motion.div 
                key={loc.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-[var(--c-bg)] p-6 rounded-[10px] shadow-xl border border-[var(--c-border)] flex flex-col items-center text-center border-t-4 border-[var(--c-lime)]"
              >
                <div className="w-16 h-16 bg-[var(--c-lime)]/10 rounded-full flex items-center justify-center mb-4 text-[var(--c-lime)]">
                  <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[var(--c-fg)]">{loc.country}</h3>
                <div className="text-[var(--c-lime)] font-bold mb-2">{loc.count} {loc.count > 1 ? 'Locations' : 'Location'}</div>
                <p className="text-sm text-[var(--c-fg)]/60">{loc.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
