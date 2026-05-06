import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import TiltCard from "@/components/ui/TiltCard";
import { CircuitBoard, Battery, Magnet, Database } from "lucide-react";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";

const chapters = [
  {
    num: "01",
    title: "E-Waste Extraction",
    desc: "PCBs, chips, laptops, servers — extracted under one roof.",
    tag: "E-WASTE",
    accent: "var(--color-lime)",
    icon: <CircuitBoard className="w-6 h-6" />,
    href: "/process",
  },
  {
    num: "02",
    title: "B-Waste Recycling",
    desc: "Lithium-ion only. No acid-filled. Closed-loop chemistry.",
    tag: "B-WASTE",
    accent: "var(--color-orange)",
    icon: <Battery className="w-6 h-6" />,
    href: "/process",
  },
  {
    num: "03",
    title: "REE Magnets",
    desc: "Rare-earth magnets from MRIs, wind turbines, decommissioned units.",
    tag: "REE MAGNETS",
    accent: "var(--color-ice)",
    icon: <Magnet className="w-6 h-6" />,
    href: "/materials",
  },
  {
    num: "04",
    title: "AI Data Centres",
    desc: "Co-located, multi-tenant, 6-layer encryption, 100% uptime.",
    tag: "AI-DC",
    accent: "var(--color-lime)",
    icon: <Database className="w-6 h-6" />,
    href: "/for-you/tenant",
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
  const router = useRouter();
  return (
    <section className="relative w-full py-12 bg-[var(--c-bg2)] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-[150px] opacity-20 pointer-events-none" style={{ background: "var(--color-lime)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none" style={{ background: "var(--color-ice)" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm mx-auto"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
                Core Capabilities
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              className="font-sans font-black uppercase tracking-tighter section-title text-[var(--c-fg)] leading-[1.1]"
            >
              Three Waste Streams.<br />
              <span className="text-[var(--color-lime)]">One AI Roof.</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* ── 2-column equal grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chapters.map((ch, i) => (
            <ScrollReveal key={ch.num} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <TiltCard intensity={5} glowColor={ch.accent} className="h-full">
                <div
                  onClick={() => router.push(ch.href)}
                  className="h-full w-full glass rounded-[inherit] flex flex-col justify-between overflow-hidden relative p-8 group transition-all duration-500 hover:border-[var(--c-highlight)] cursor-pointer"
                >
                  <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-5 group-hover:opacity-20 transition-opacity duration-500" style={{ background: ch.accent }} />
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="font-sans font-bold text-xs tracking-widest px-4 py-1.5 rounded-full" style={{ background: ch.accent, color: "var(--c-bg)" }}>
                      {ch.tag}
                    </span>
                    <span className="font-sans font-black text-2xl opacity-20 text-[var(--c-fg)]">/{ch.num}</span>
                  </div>

                  <div className="relative z-10 mt-6 group-hover:-translate-y-1 transition-transform duration-300" style={{ color: ch.accent }}>
                    {ch.icon}
                  </div>

                  <div className="relative z-10 mt-4">
                    <h3 className="font-sans font-black uppercase tracking-tight text-[var(--c-fg)] text-[30px] mb-3">
                      {ch.title}
                    </h3>
                    <p className="font-sans text-sm text-[var(--c-fg2)] leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: ch.accent }}>
                    <span className="font-sans font-bold text-xs uppercase tracking-widest">Explore</span>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
