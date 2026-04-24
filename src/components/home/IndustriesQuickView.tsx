"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  { name: "Electric Vehicles", img: "/WBM/media/DistributionProcess.png" },
  { name: "AI Infrastructure", img: "/WBM/media/BackgroundImgHero.png" },
  { name: "Aerospace", img: "/WBM/media/outsideWarehouse1.png" },
  { name: "Consumer Electronics", img: "/WBM/media/Industies.jpg" }
];

export default function IndustriesQuickView() {
  return (
    <section className="py-32 bg-[#F5F7F6] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Powering the World's<br/>Most Critical Industries
          </h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto mb-10">
            Supplying essential materials across sectors. Our recovered materials support industries enabling sustainable and reliable production at scale.
          </p>
          <button className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#C1FF00] hover:text-black transition-colors duration-300">
            View Industries →
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer"
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
