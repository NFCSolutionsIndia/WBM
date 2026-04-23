"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function PlantExperience() {
  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-t from-primary to-transparent opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-cyan/20 text-cyan text-sm font-medium border border-cyan/30">
              Next-Generation Manufacturing
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-medium leading-tight">
              AI-Native Robot-Assisted Operations
            </h2>
            <p className="text-xl text-neutral-light/80">
              Just as Henry Ford created the automated assembly line, we are creating the intelligent AI-based plant. 
            </p>
            <blockquote className="border-l-4 border-gold pl-4 italic text-neutral-light text-lg">
              "Humans are taking care of robots—not robots taking jobs of humans."
            </blockquote>
            <p className="text-neutral-light/70">
              Our 100,000 sq ft facilities run 24/7. We heavily invest in AI upskilling for our workforce, providing first-in-class amenities from CoE innovation labs to multi-cultural canteens and on-site clinics.
            </p>
            
            <button className="mt-8 flex items-center gap-3 bg-white text-primary px-6 py-3 rounded-full hover:bg-gold hover:text-white transition-all font-medium">
              <PlayCircle /> Take the Virtual Tour
            </button>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="aspect-video bg-black/50 border border-white/20 rounded-2xl overflow-hidden relative flex items-center justify-center shadow-2xl shadow-cyan/20 cursor-pointer group"
            >
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all" />
              <div className="text-center z-10 p-6">
                <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-gold mx-auto mb-4 transition-colors" />
                <div className="text-white font-medium tracking-wide">PLAY PLANT WALK-THROUGH</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
