import { motion, Variants } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";
import { CircuitBoard, Battery, Magnet, Database } from "lucide-react";

const chapters = [
  {
    num: "01",
    title: "E-Waste Extraction",
    desc: "PCBs, chips, laptops, servers — extracted under one roof.",
    tag: "E-WASTE",
    accent: "var(--color-lime)",
    icon: <CircuitBoard className="w-6 h-6" />,
  },
  {
    num: "02",
    title: "B-Waste Recycling",
    desc: "Lithium-ion only. No acid-filled. Closed-loop chemistry.",
    tag: "B-WASTE",
    accent: "var(--color-orange)",
    icon: <Battery className="w-6 h-6" />,
  },
  {
    num: "03",
    title: "REE Magnets",
    desc: "Rare-earth magnets from MRIs, wind turbines, decommissioned units.",
    tag: "REE MAGNETS",
    accent: "var(--color-ice)",
    icon: <Magnet className="w-6 h-6" />,
  },
  {
    num: "04",
    title: "AI Data Centres",
    desc: "Co-located, multi-tenant, 6-layer encryption, 100% uptime.",
    tag: "AI-DC",
    accent: "var(--color-lime)",
    icon: <Database className="w-6 h-6" />,
  },
];


const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function ScrollStory() {
  return (
    <section className="relative w-full py-12 bg-[var(--c-bg2)] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none" style={{ background: "var(--color-lime)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none" style={{ background: "var(--color-ice)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm mx-auto"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
              Core Capabilities
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-black uppercase tracking-tighter text-3xl md:text-[52px] text-[var(--c-fg)] leading-[1.1]"
            >
              Three Waste Streams.<br />
              <span className="text-[var(--color-lime)]">One AI Roof.</span>
            </motion.h2>
          </div>
        </div>

        {/* ── 2-column equal grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chapters.map((ch, i) => (
            <motion.div
              key={ch.num}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              data-cursor="view"
              className="min-h-[320px]"
            >
              <TiltCard className="h-full w-full" intensity={5} glowColor={ch.accent}>
                <div
                  className="h-full w-full glass rounded-[32px] flex flex-col justify-between border border-[var(--c-border)] overflow-hidden relative p-8 group transition-all duration-500 hover:border-[var(--c-fg3)]"
                  style={{ minHeight: 320 }}
                >
                  {/* Glow blob */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                    style={{ background: ch.accent }}
                    initial={{ opacity: 0.05 }}
                    whileHover={{ opacity: 0.18 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Header row */}
                  <div className="flex justify-between items-start relative z-10">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="font-sans font-bold text-xs tracking-widest px-4 py-1.5 rounded-full cursor-default"
                      style={{ background: ch.accent, color: "var(--c-bg)" }}
                    >
                      {ch.tag}
                    </motion.span>
                    <span className="font-sans font-black text-2xl opacity-20 text-[var(--c-fg)]">/{ch.num}</span>
                  </div>

                  {/* Icon — slides up on hover */}
                  <motion.div
                    className="relative z-10 mt-6"
                    style={{ color: ch.accent }}
                    initial={{ y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    {ch.icon}
                  </motion.div>

                  {/* Text */}
                  <div className="relative z-10 mt-4">
                    <h3 className="font-sans font-black uppercase tracking-tight text-[var(--c-fg)] text-2xl md:text-3xl mb-3 leading-none">
                      {ch.title}
                    </h3>
                    <p className="font-sans text-sm text-[var(--c-fg2)] leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>

                  {/* Bottom arrow — visible on hover */}
                  <motion.div
                    className="relative z-10 mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: ch.accent }}
                  >
                    <span className="font-sans font-bold text-xs uppercase tracking-widest">Explore</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    >
                    </motion.span>
                  </motion.div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
