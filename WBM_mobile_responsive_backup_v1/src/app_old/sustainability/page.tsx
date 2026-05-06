"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SustainabilityPage() {
  const sections = [
    { 
      heading: "Reducing Waste and Emissions", 
      subtext: "Cleaner processes for a better future.", 
      content: "Our operations minimize landfill use and reduce environmental impact through efficient material recovery." 
    },
    { 
      heading: "People-Centered Operations", 
      subtext: "Safety and community focus.", 
      content: "We ensure safe working environments and support workforce development." 
    },
    { 
      heading: "Transparent and Ethical", 
      subtext: "Strong operational standards.", 
      content: "We follow global compliance standards and maintain transparent processes." 
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/media/SustainablebyDesign.jpg" alt="Sustainability WBM" fill className="object-cover opacity-60 dark:opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--c-bg)]" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto pt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-[var(--c-fg)] tracking-tight"
          >
            Sustainable by Design
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-[var(--c-fg)] font-medium max-w-3xl mx-auto drop-shadow-md"
          >
            Building a circular economy through responsible practices.
          </motion.p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-10 rounded-3xl bg-[var(--c-glass)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/50 hover:shadow-[0_0_30px_rgba(193,255,0,0.1)] transition-all group"
          >
            <h2 className="text-[var(--c-lime)] text-sm font-bold tracking-[0.2em] uppercase mb-4">{sec.subtext}</h2>
            <h3 className="text-3xl font-bold mb-6 group-hover:text-[var(--c-lime)] transition-colors">{sec.heading}</h3>
            <p className="text-[var(--c-fg2)] text-lg leading-relaxed">{sec.content}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
