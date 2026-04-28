"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Electric Vehicles", img: "/WBM/media/ElectricVehicles.jpg" },
  { name: "AI Infrastructure", img: "/WBM/media/DataCentersAI.jpg" },
  { name: "Aerospace", img: "/WBM/media/AerospaceDefense.jpg" },
  { name: "Consumer Electronics", img: "/WBM/media/ConsumerElectronics.jpg" },
  { name: "Energy & Power", img: "/WBM/media/EnergyPower.jpg" }
];

export default function IndustriesQuickView() {
  return (
    <section className="py-12 bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--c-lime)] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">• INDUSTRY</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-[var(--c-fg)]">
            Powering the World's<br/><span className="text-[var(--c-lime)]">Most Critical Industries</span>
          </h2>
          <p className="text-[var(--c-fg)]/60 text-lg max-w-2xl mx-auto mb-10">
            Supplying essential materials across sectors. Our recovered materials support industries enabling sustainable and reliable production at scale.
          </p>
          <button 
            onClick={() => window.location.href = '/WBM/industries'}
            className="px-8 py-4 bg-[var(--c-fg)] text-[var(--c-bg)] font-bold uppercase tracking-widest text-sm rounded-[10px] hover:bg-[var(--c-lime)] hover:text-black transition-colors duration-300"
          >
            View Industries
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-96 rounded-[10px] overflow-hidden group cursor-pointer border border-gray-100 dark:border-white/10 shadow-sm"
            >
              <Image 
                src={ind.img} 
                alt={ind.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold text-white tracking-wide">{ind.name}</h3>
                <div className="w-0 h-1 bg-[#C1FF00] mt-4 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
