"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const materials = [
  { name: "Copper", symbol: "Cu", color: "#B87333" },
  { name: "Gold", symbol: "Au", color: "#FFD700" },
  { name: "Lithium", symbol: "Li", color: "#C0C0C0" },
  { name: "Cobalt", symbol: "Co", color: "#0047AB" },
  { name: "Nickel", symbol: "Ni", color: "#B0C4DE" },
  { name: "Silver", symbol: "Ag", color: "#E5E4E2" },
  { name: "Palladium", symbol: "Pd", color: "#CED0DD" },
  { name: "Neodymium", symbol: "Nd", color: "#FFB6C1" }
];

export default function MaterialOutput() {
  const router = useRouter();

  return (
    <section className="relative py-12 overflow-hidden bg-[#050505]">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#C1FF00]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#C1FF00]">Material Output Showcase</span>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            High-purity materials powering global industries. We recover critical materials that meet industrial standards and are ready for reuse in manufacturing, energy storage, and advanced electronics.
          </p>
          <button 
            onClick={() => router.push('/materials')}
            className="px-8 py-4 bg-[#C1FF00] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(193,255,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Explore Materials
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative p-8 rounded-[10px] bg-black/40 border border-white/5 backdrop-blur-xl group overflow-hidden cursor-pointer hover:border-white/20 transition-all duration-300"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${mat.color}, transparent 70%)` }}
              />
              <div 
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center font-black text-2xl mb-4 transition-transform duration-500 group-hover:rotate-12 shadow-inner group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                style={{ background: `linear-gradient(135deg, ${mat.color}, #111)`, color: "#fff", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
              >
                {mat.symbol}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">{mat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
