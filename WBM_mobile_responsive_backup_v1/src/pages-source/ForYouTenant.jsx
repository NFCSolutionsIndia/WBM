"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Database, Cpu, Activity, Thermometer, Lock, Globe, ArrowRight, Server, Layers, BarChart3, Wind, Sun, Magnet, Recycle } from 'lucide-react';
import Hyperspeed from '../components/ui/backgrounds/Hyperspeed';
import Button from '../components/ui/Button';

const ForYouTenant = () => {
  const offerings = [
    { title: "100% Uptime + Power", desc: "Triple-source power: grid, solar, wind. Battery + mineral-stream resilience baked in.", icon: <Zap size={24} /> },
    { title: "6-Layer Encryption", desc: "Physical, perimeter, network, host, app, and key-vault — independently audited.", icon: <Lock size={24} /> },
    { title: "Rack Compatibility", desc: "NVIDIA HGX, Cisco UCS, Juniper QFX certified. Bring your hardware; we bring the floor.", icon: <Server size={24} /> },
    { title: "15-Year Leases", desc: "Long-tenor leases with structured indexation. Optional offtake-aligned co-location.", icon: <Activity size={24} /> },
  ];

  const floors = [
    { id: "4", status: "Available", size: "25,000 sq ft", load: "~12 MW IT load", color: "text-[var(--c-lime)]" },
    { id: "3", status: "Hyperscaler (LOI)", size: "25,000 sq ft", load: "~12 MW IT load", color: "text-[var(--c-fg2)]" },
    { id: "2", status: "Sovereign AI Tenant", size: "25,000 sq ft", load: "~12 MW IT load", color: "text-[var(--c-fg2)]" },
    { id: "1", status: "Anchor Tenant", size: "25,000 sq ft", load: "~12 MW IT load", color: "text-[var(--c-fg2)]" },
  ];

  const stats = [
    { label: "Uptime SLA", value: "100", suffix: "%", icon: <Activity size={20} /> },
    { label: "Power Availability", value: "100", suffix: "%", icon: <Zap size={20} /> },
    { label: "Encryption Layers", value: "6", suffix: "", icon: <Lock size={20} /> },
    { label: "Lease Tenor", value: "15", suffix: "yr", icon: <Database size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Hyperspeed speed={0.5} color="#839470" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-8">
              <div className="w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Tenant / Data Centre Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase text-glow">
               One Floor. <br /> <span className="text-[var(--c-lime)]">Fifteen Years.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Plug-and-play compatibility with NVIDIA, Cisco, and Juniper. Six-layer encryption. Built into the only AI-native extraction plant on the planet.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/what-we-do/ai-data-centres" size="lg">Tour the floor</Button>
              <Button href="/contact" variant="outline" size="lg">Request Lease Terms</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="py-24 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[32px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)] transition-all group"
                >
                   <div className="w-12 h-12 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors">
                      {point.icon}
                   </div>
                   <h4 className="text-xl font-bold text-[var(--c-fg)] mb-4 uppercase tracking-tight">{point.title}</h4>
                   <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Cooling Architecture Section */}
      <section className="py-24 bg-[var(--c-fg)]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Architecture</h2>
                 <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight mb-8">Liquid Cooling <br /> <span className="opacity-40">Integrated Flow.</span></h3>
                 <p className="text-lg text-[var(--c-fg2)] mb-10">Indicative cross-section. Recovery occurs at end-of-life — the techniques stay with us.</p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { title: "Coolant Fluids", desc: "Coolant-grade fluids recovered & refined at end-of-life.", icon: <Activity size={20} /> },
                      { title: "Heat-Exchangers", desc: "Copper & Aluminium recovered from cold plates.", icon: <Thermometer size={20} /> },
                      { title: "Magnet-Cooling", desc: "Rare-earth magnets returned via the closed-loop wing.", icon: <Magnet size={20} /> },
                      { title: "Closed-Loop", desc: "Feeds the Closed-Loop Feedstock wing of our Butterfly.", icon: <Recycle size={20} /> },
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-2xl border border-[var(--c-border)] bg-[var(--c-bg)] group hover:border-[var(--c-lime)] transition-all">
                         <div className="w-8 h-8 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-4 group-hover:bg-[var(--c-lime)] group-hover:text-black transition-colors">{item.icon}</div>
                         <h4 className="font-bold text-[var(--c-fg)] uppercase text-xs tracking-widest mb-2">{item.title}</h4>
                         <p className="text-[10px] text-[var(--c-fg2)] leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] flex items-center justify-center"
              >
                 <div className="absolute w-80 h-80 rounded-full border border-[var(--c-lime)]/30 flex items-center justify-center animate-spin-slow">
                    <div className="w-4 h-4 rounded-full bg-[var(--c-lime)] absolute top-0" />
                 </div>
                 <div className="absolute w-60 h-60 rounded-full border border-[var(--c-lime)]/20 flex items-center justify-center animate-spin-reverse-slow">
                    <div className="w-3 h-3 rounded-full bg-[var(--c-lime)] absolute bottom-0" />
                 </div>
                 <Server className="w-32 h-32 text-[var(--c-lime)]" />
                 <div className="absolute bottom-0 text-center">
                    <div className="text-[9px] font-black uppercase tracking-widest text-[var(--c-lime)]">Material Recovery Route</div>
                    <div className="text-[9px] font-bold text-[var(--c-fg2)] uppercase tracking-widest mt-1">Documented under MOU</div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Floor Plan Section */}
      <section className="py-24 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Leasing Status</h2>
              <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight">Four Floors. <span className="opacity-40">One is Yours.</span></h3>
           </div>

           <div className="space-y-4 max-w-4xl mx-auto">
              {floors.map((floor, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-[var(--c-bg2)] border border-[var(--c-border)] flex flex-col md:flex-row justify-between items-center gap-6 group hover:border-[var(--c-lime)] transition-all"
                >
                   <div className="flex items-center gap-8">
                      <div className="text-4xl font-black text-[var(--c-fg)]/20 group-hover:text-[var(--c-lime)] transition-colors">0{floor.id}</div>
                      <div>
                         <h4 className="text-xl font-bold text-[var(--c-fg)] uppercase">Floor {floor.id}</h4>
                         <div className="text-xs text-[var(--c-fg2)] font-bold tracking-widest">{floor.size} · {floor.load}</div>
                      </div>
                   </div>
                   <div className={`px-4 py-2 rounded-full border border-current text-[10px] font-black uppercase tracking-widest ${floor.color}`}>
                      {floor.status}
                   </div>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-12 p-8 rounded-3xl bg-[var(--c-fg)]/5 border border-[var(--c-border)] text-center max-w-4xl mx-auto">
              <p className="text-sm font-bold text-[var(--c-fg)] uppercase tracking-widest">Building Total: 100,000 sq ft · ~48 MW IT load · 6-layer encryption envelope</p>
           </div>
        </div>
      </section>

      {/* Proof Points Stats */}
      <section className="py-24 bg-[var(--c-fg)] relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-bg)]/50 uppercase mb-16">The numbers your CTO will ask for</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                   <div className="text-6xl md:text-7xl font-black text-[var(--c-lime)] tracking-tighter mb-4 leading-none">{stat.value}{stat.suffix}</div>
                   <div className="text-[10px] font-bold text-[var(--c-bg)] uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--c-bg)] text-center border-t border-[var(--c-border)] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="section-title font-black text-[var(--c-fg)] tracking-tighter mb-10 leading-none uppercase">See the supply chain <br /> <span className="text-[var(--c-lime)]">That powers your hardware.</span></h2>
            <p className="text-xl text-[var(--c-fg2)] font-medium mb-12 max-w-2xl mx-auto">85% of AI hardware depends on a chokepoint. Tour our supply-chain diagram before you tour the floor.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/what-we-do" size="lg">Open AI-DC Supply Chain</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForYouTenant;
