"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "Tesla",     tag: "EV Manufacturing" },
  { name: "Nvidia",    tag: "AI Infrastructure" },
  { name: "Intel",     tag: "Semiconductors" },
  { name: "Apple",     tag: "Consumer Electronics" },
  { name: "Samsung",   tag: "Global Tech" },
  { name: "Ford",      tag: "Automotive" },
  { name: "Microsoft", tag: "Cloud Computing" },
  { name: "Panasonic", tag: "Energy Storage" }
];

export default function PartnersTrust() {
  return (
    <section className="relative pt-5 md:pt-10 pb-12 bg-[#050505] overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#C1FF00]">Strategic Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
            Built with Industry <span className="text-[#C1FF00]">Leaders</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Collaborating for global impact. We work with manufacturers, recyclers, and technology partners to create a sustainable and scalable supply chain for critical materials.
          </p>
          <button className="px-8 py-4 bg-[#C1FF00] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(193,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Become a Partner
          </button>
        </motion.div>
      </div>

      {/* Auto scrolling interactive strip */}
      <div className="relative flex overflow-x-hidden group py-10">
        {/* Fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap items-center gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Duplicate the list for seamless loop */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col justify-center px-10 py-8 rounded-[10px] bg-black/40 border border-white/10 backdrop-blur-xl hover:border-[#C1FF00]/50 hover:bg-black/60 transition-all duration-300 cursor-pointer min-w-[280px] group/card hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(193,255,0,0.1)] card-theme"
            >
              <span className="text-3xl md:text-4xl font-black tracking-tighter text-white/80 uppercase group-hover/card:text-white transition-colors duration-300">
                {partner.name}
              </span>
              <span className="mt-2 text-xs font-bold uppercase tracking-widest text-[#C1FF00]/60 group-hover/card:text-[#C1FF00] transition-colors duration-300">
                {partner.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
