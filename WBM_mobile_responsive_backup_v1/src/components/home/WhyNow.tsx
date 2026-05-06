import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ScrollReveal from "@/components/ui/effects/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";

export default function WhyNow() {
  const router = useRouter();
  return (
    <section className="py-24 bg-[#050505] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[var(--c-lime)]">Why Now</span>
            </div>
            <h2 className="section-title font-black uppercase tracking-tighter mb-6 leading-tight text-white">
              85% of the world's<br/>
              <span className="text-[var(--c-lime)]">AI-Critical Minerals</span> come from Asia.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl">
              Every delay in semiconductor or PCB production delays AI itself. We are the bridge.
            </p>
            <button 
              onClick={() => router.push('/circular-economy')}
              className="px-8 py-4 border border-[var(--c-lime)]/30 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[var(--c-lime)] hover:text-black transition-all duration-300"
            >
              The Geopolitical Choke Point
            </button>
          </ScrollReveal>
        </div>
 
        {/* Right: Visual (Reusing split layout pattern) */}
        <div className="w-full lg:w-1/2 relative h-[500px]">
          <ScrollReveal direction="right" className="w-full h-full relative rounded-[20px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(193,255,0,0.1)]">
            <Image
              src="/WBM/media/RareEarthElements.jpg"
              alt="Geopolitical mapping"
              fill
              className="object-cover opacity-80 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 p-6 rounded-[15px] bg-[#050505]/80 backdrop-blur-md border border-white/10 max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-[var(--c-lime)] animate-pulse" />
                <span className="text-white font-bold tracking-widest text-[10px] uppercase">Supply Chain Alert</span>
              </div>
              <div className="text-white/60 text-xs leading-relaxed font-sans">
                Dependency on non-allied geographies poses a critical risk to AI infrastructure sovereignty.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
 
      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "THE PLANT",
              desc: "100,000 sq ft of robot-assisted, AI-orchestrated extraction.",
              href: "/technology",
              icon: "🏭"
            },
            {
              title: "THE CIRCULAR ECONOMY",
              desc: "From your dump yard back to your devices—three layers of closed loops.",
              href: "/circular-economy",
              icon: "♻️"
            },
            {
              title: "THE 4×5 MODEL",
              desc: "The unit economics no single-stream specialist can match.",
              href: "/process",
              icon: "📊"
            }
          ].map((card, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <TiltCard
                onClick={() => router.push(card.href)}
                className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-[var(--c-lime)]/30 transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                <div className="text-2xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4 text-white group-hover:text-[var(--c-lime)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-8 flex-grow">
                  {card.desc}
                </p>
                <div className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-[10px] group-hover:bg-[var(--c-lime)] group-hover:text-black transition-all duration-300 text-center">
                  LEARN MORE
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
