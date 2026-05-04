"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TechnologySnapshot() {
  return (
    <section className="py-12 bg-[#080808] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#C1FF00]">The LiBERT Engine</span>
            </div>
            <h2 className="text-4xl md:text-[52px] font-black uppercase tracking-tighter mb-6 leading-tight">
              The Only Difference is<br/>
              <span className="text-[#C1FF00]">Who Touches It</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              100,000 sq ft of robot-assisted, AI-orchestrated extraction. Our proprietary LiBERT™ technology recovers 11 critical minerals from three integrated waste streams — a feat no other single-stream specialist can match.
            </p>
            <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              Inside the Plant
            </button>

          </motion.div>
        </div>

        {/* Right: Visual */}
        <div className="w-full lg:w-1/2 relative h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, clipPath: "circle(0% at 50% 50%)" }}
            whileInView={{ opacity: 1, scale: 1, clipPath: "circle(100% at 50% 50%)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full relative rounded-[10px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(193,255,0,0.1)]"
          >
            <video
              src="/WBM/media/BackgroundVideoHero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 p-6 rounded-[10px] bg-black/40 backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#C1FF00] animate-pulse" />
                <span className="text-white font-bold tracking-widest text-xs uppercase">AI System Active</span>
              </div>
              <div className="text-white/60 text-xs">Real-time material classification</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
