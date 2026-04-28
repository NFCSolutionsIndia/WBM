"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CaseStudiesPage() {
  const sections = [
    { 
      heading: "Industrial E-Waste Optimization", 
      subtext: "Improving recovery efficiency.", 
      content: "A large electronics manufacturer partnered with us to manage high volumes of e-waste. We implemented a structured recovery system that improved material extraction, reduced disposal costs, and enhanced sustainability compliance. The result was a more efficient and environmentally responsible operation." 
    },
    { 
      heading: "EV Supply Chain Support", 
      subtext: "Stabilizing critical material supply.", 
      content: "An EV manufacturer required consistent access to battery materials. Through our recovery processes, we supplied lithium and cobalt, ensuring stable production and reducing reliance on mining sources." 
    },
    { 
      heading: "Data Center Recycling", 
      subtext: "Secure and sustainable hardware disposal.", 
      content: "We helped a data center operator recycle decommissioned hardware, ensuring secure data destruction and recovery of valuable materials." 
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/media/OurProcess.png" alt="Case Studies WBM" fill className="object-cover opacity-60 dark:opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--c-bg)]" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto pt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-[var(--c-fg)] tracking-tight"
          >
            Real Impact. Measurable Results.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-[var(--c-fg)] font-medium max-w-3xl mx-auto drop-shadow-md"
          >
            How we solve real-world industrial challenges.
          </motion.p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-1 gap-12">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-10 md:p-14 rounded-3xl bg-[var(--c-glass)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/50 hover:shadow-[0_0_30px_rgba(193,255,0,0.1)] transition-all group"
          >
            <h2 className="text-[var(--c-lime)] text-sm font-bold tracking-[0.2em] uppercase mb-4">{sec.subtext}</h2>
            <h3 className="text-4xl font-bold mb-6 group-hover:text-[var(--c-lime)] transition-colors">{sec.heading}</h3>
            <p className="text-[var(--c-fg2)] text-xl leading-relaxed">{sec.content}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
