import { motion } from "framer-motion";

export default function CustomerSection() {
  return (
    <section className="relative w-full py-12 px-[50px] md:px-[90px] border-y border-[var(--c-border)]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center"
      >
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-sans font-black uppercase tracking-tight text-[var(--c-fg)] mb-6">
            Built For <br/>
            <span style={{ color: "var(--color-orange)" }}>Pioneers</span>
          </h2>
          <p className="text-lg text-[var(--c-fg2)] mb-8">
            From the world's largest AI data centers to cutting-edge electronics manufacturers, our recycled minerals provide a sustainable foundation without compromising on quality or performance.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-bold text-black"
            style={{ background: "var(--color-orange)" }}
          >
            Become a Partner
          </motion.button>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-[10px] glass flex items-center justify-center p-6 text-center card-hover">
              <span className="font-bold text-[var(--c-fg3)]">Partner Logo {i}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
