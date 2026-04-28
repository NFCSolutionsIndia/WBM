"use client";
import { motion } from "framer-motion";

export default function DataCenterBlock() {
  const cards = [
    { icon: "💻", title: "Hardware Recycling", desc: "Secure lifecycle management for servers and enterprise hardware." },
    { icon: "⚡", title: "GPU Recovery", desc: "Extraction of critical minerals from high-performance components." },
    { icon: "♻", title: "Material Reuse", desc: "Returning processed materials back to the supply chain safely." }
  ];

  return (
    <section className="py-12 bg-[#0C0F14] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,255,0,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#C1FF00]">Data Center & AI Infra</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Powering AI with<br/>Sustainable Infrastructure
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Next-generation data solutions with responsible sourcing. We support AI and data center operations through hardware recycling, GPU recovery, and material reuse.
          </p>
          <button className="px-8 py-4 bg-[#C1FF00] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(193,255,0,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
            Explore Data Solutions
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{ delay: i * 0.1, repeat: Infinity, duration: 4 + i, ease: "easeInOut" }}
              className="p-10 rounded-[10px] bg-white/5 border border-white/10 backdrop-blur-lg hover:border-[#C1FF00]/50 transition-colors group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-[10px] bg-black/50 border border-white/10 flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform shadow-inner group-hover:shadow-[0_0_20px_rgba(193,255,0,0.2)]">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-[#C1FF00] transition-colors">{card.title}</h3>
              <p className="text-white/50">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
