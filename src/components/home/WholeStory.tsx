"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WholeStory() {
  return (
    <section className="relative w-full bg-[#080808] py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#C1FF00] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-white/50">
              The Whole Story in One Frame
            </span>
          </div>

          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] text-[clamp(36px,6vw,72px)] text-white mb-6">
            The Whole Story<br />
            <span className="text-[#C1FF00]">In One Frame.</span>
          </h2>

          <p className="font-sans text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            From Waste to World Engines. The LiBERT™ extraction journey, the 11 critical minerals portfolio, and the closed-loop circular economy — captured in a single diagram.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-[20px] overflow-hidden border border-white/10 shadow-2xl"
        >
          <Image
            src="/WBM/media/ThumbnailImg.png"
            alt="The Whole Story Diagram"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="px-6 py-3 rounded-full bg-[#C1FF00] text-black font-sans font-black uppercase tracking-widest text-xs shadow-2xl">
               View Full Journey Diagram
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
