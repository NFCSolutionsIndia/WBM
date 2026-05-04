import { motion } from "framer-motion";
import { Shield, Zap, Cpu } from "lucide-react";

export default function DataCenterBlock() {
  const cards = [
    { icon: <Shield className="w-8 h-8" />, title: "6-Layer Encryption", desc: "Enterprise-grade security for co-located compute infrastructure." },
    { icon: <Zap className="w-8 h-8" />, title: "100% Uptime", desc: "Redundant power and cooling systems ensuring zero downtime for critical AI loads." },
    { icon: <Cpu className="w-8 h-8" />, title: "NVIDIA-Ready", desc: "Optimized for high-performance GPU clusters including NVIDIA, Cisco, and Juniper." }
  ];

  return (
    <section className="py-24 bg-[#0C0F14] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,255,0,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#C1FF00]">AI Data Centres</span>
          </div>
          <h2 className="text-3xl md:text-[52px] font-black uppercase tracking-tighter mb-6 leading-tight">
            AI Data Centres<br/>Sustainable & Secure
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Co-located on-site for 100% uptime and 6-layer encryption. Tenants benefit from sharing the same infrastructure, power, and talent as our extraction facility.
          </p>
          <button className="px-8 py-4 bg-[#C1FF00] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-colors duration-300">
            View Lease Specs
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[10px] bg-white/5 border border-white/10 backdrop-blur-lg hover:border-[#C1FF00]/50 transition-colors group cursor-pointer card-theme"
            >
              <div className="w-16 h-16 rounded-[10px] bg-black/50 border border-white/10 flex items-center justify-center text-[#C1FF00] mx-auto mb-6 group-hover:scale-110 transition-transform shadow-inner group-hover:shadow-[0_0_20px_rgba(193,255,0,0.2)]">
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
