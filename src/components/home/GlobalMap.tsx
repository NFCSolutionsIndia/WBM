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
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl text-primary font-display font-medium mb-4">Global Circular Economy</h2>
          <p className="text-xl text-neutral-text/70 max-w-2xl mx-auto">
            Our global footprint forms a semi-circle of supply chain independence, entirely avoiding high-risk dependencies.
          </p>
        </div>

        <div className="relative w-full h-[400px] bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center overflow-hidden">
          {/* Abstract Map Background Simulation */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(#1E6091 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl px-8">
            {locations.map((loc, idx) => (
              <motion.div 
                key={loc.country}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-6 rounded-2xl shadow-xl shadow-primary/5 flex flex-col items-center text-center border-t-4 border-emerald"
              >
                <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mb-4 text-emerald">
                  <MapPin size={32} />
                </div>
                <h3 className="text-2xl font-bold text-primary">{loc.country}</h3>
                <div className="text-gold font-medium mb-2">{loc.count} {loc.count > 1 ? 'Locations' : 'Location'}</div>
                <p className="text-sm text-neutral-text/60">{loc.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
