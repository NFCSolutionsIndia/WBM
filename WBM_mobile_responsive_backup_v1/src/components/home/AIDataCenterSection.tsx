"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Zap, Database } from 'lucide-react';

export default function AIDataCenterSection() {
  const features = [
    { icon: <Zap size={24} />, title: "100% Power Availability", desc: "Redundant, integrated power supplied by renewables and local grid." },
    { icon: <Server size={24} />, title: "15-Year Lease Term", desc: "Long-term real estate infrastructure model." },
    { icon: <Shield size={24} />, title: "Six-Layer Encryption", desc: "Enterprise-grade security perimeter." },
    { icon: <Database size={24} />, title: "Equipment Neutral", desc: "Bring your own NVIDIA, Cisco, or Juniper equipment. Plug-and-play." }
  ];

  return (
    <section id="ai-data-centre" className="py-12 bg-[var(--c-bg)] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--c-lime)]/30 bg-[var(--c-lime)]/10 text-[var(--c-lime)] font-medium text-sm mb-6 pb-2">
              Infrastructure-as-a-Service
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title font-bold text-[var(--c-fg)] mb-6 leading-tight"
            >
              The AI Economy <br/>Starts Here.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-[var(--c-fg)]/70 mb-8"
            >
              85% of the supply chain demand happens from China. If production drops from semiconductor or microchip companies, AI data centres get delayed. We act as the local bridge to supply these minerals securely.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4 p-4 rounded-[10px] bg-[var(--c-bg)] border border-[var(--c-border)] shadow-sm"
                >
                  <div className="shrink-0 pt-1 text-[var(--c-lime)]">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--c-fg)] text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-[var(--c-fg)]/50 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Abstract Data Center Visualization */}
          <div className="w-full lg:w-1/2 h-[500px] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-tr from-[#111827] to-[#1E6091] rounded-[10px] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              
              <div className="flex flex-col gap-8 items-center justify-center h-full p-12">
                {/* Simulated Server Racks */}
                {[1, 2, 3].map((rack) => (
                  <motion.div 
                    key={rack}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: rack * 0.5, ease: "easeInOut" }}
                    className="w-full max-w-sm h-16 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center px-6 gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#00D4FF] shadow-[0_0_10px_#00D4FF] animate-pulse"></div>
                    <div className="w-3 h-3 rounded-full bg-[#C19A33] shadow-[0_0_10px_#C19A33]"></div>
                    <div className="flex-1"></div>
                    <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                    <div className="w-12 h-2 bg-white/20 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
