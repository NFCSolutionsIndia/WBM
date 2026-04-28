"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProcessPage() {
  const sections = [
    { 
      heading: "Sourcing Materials", 
      subtext: "Efficient and scalable intake systems.", 
      content: "We collect waste materials from industrial partners, suppliers, and recycling networks, ensuring consistent input for processing." 
    },
    { 
      heading: "Material Classification", 
      subtext: "Organizing for efficiency.", 
      content: "Advanced systems categorize materials based on type and composition, enabling optimized processing workflows." 
    },
    { 
      heading: "Component Separation", 
      subtext: "Breaking down complex devices.", 
      content: "Devices are disassembled into components, allowing targeted recovery of valuable materials." 
    },
    { 
      heading: "Refining Materials", 
      subtext: "From waste to resource.", 
      content: "Materials are processed and refined to extract high-value minerals ready for industrial use." 
    },
    { 
      heading: "Supplying Industries", 
      subtext: "Closing the loop.", 
      content: "Recovered materials are delivered to manufacturers across industries, completing the circular supply chain." 
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/media/OurProcess.png" alt="Process WBM" fill className="object-cover opacity-60 dark:opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--c-bg)]" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto pt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-[var(--c-fg)] tracking-tight"
          >
            End-to-End Material Recovery Process
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-[var(--c-fg)] font-medium max-w-3xl mx-auto drop-shadow-md"
          >
            A structured approach from waste collection to material distribution.
          </motion.p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="relative border-l-2 border-[var(--c-border)] ml-6 md:ml-0 md:border-l-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--c-border)] -translate-x-1/2" />
          
          {sections.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative mb-16 md:w-1/2 ${isEven ? 'md:pr-16 md:ml-0' : 'md:pl-16 md:ml-auto'} pl-8 md:pl-0`}
            >
              <div className={`absolute top-2 w-4 h-4 rounded-full bg-[var(--c-lime)] ${isEven ? 'md:-right-2' : 'md:-left-2'} -left-[25px] md:left-auto border-4 border-[var(--c-bg)] z-10`} />
              
              <div className="p-8 rounded-3xl bg-[var(--c-glass)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/50 transition-colors group">
                <div className="text-[var(--c-lime)] font-mono text-sm mb-2 font-bold tracking-widest uppercase">{step.subtext}</div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-[var(--c-lime)] transition-colors">{step.heading}</h3>
                <p className="text-[var(--c-fg2)] text-lg leading-relaxed">{step.content}</p>
              </div>
            </motion.div>
          )})}
        </div>
      </section>
    </div>
  );
}
