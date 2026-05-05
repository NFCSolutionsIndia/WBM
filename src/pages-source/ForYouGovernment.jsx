"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Users, Award, Landmark, Scale, Recycle, Activity, ArrowRight, Zap, Briefcase, TrendingUp } from 'lucide-react';
import Beams from '../components/ui/backgrounds/Beams';
import Button from '../components/ui/Button';

const ForYouGovernment = () => {
  const commitments = [
    { title: "State-level Jobs", desc: "~240 direct jobs per plant. Reverse-logistics and engineering multipliers on top.", icon: <Briefcase size={24} /> },
    { title: "Upskilling Labour", desc: "Apprenticeships convert existing waste-handling labour into robot-operator roles.", icon: <Users size={24} /> },
    { title: "Tonnes Diverted", desc: "Verified landfill diversion published in our SLA Appendix — auditable by issuing authority.", icon: <Recycle size={24} /> },
    { title: "Break the 85%", desc: "Sovereign-supplied critical minerals. Reduce single-country dependency.", icon: <Shield size={24} /> },
  ];

  const jobStats = [
    { country: "United States", jobs: "720", desc: "direct jobs created at full ramp" },
    { country: "Mexico", jobs: "240", desc: "direct jobs created at full ramp" },
    { country: "South Africa", jobs: "240", desc: "direct jobs created at full ramp" },
    { country: "India", jobs: "240", desc: "direct jobs created at full ramp" },
    { country: "UAE", jobs: "240", desc: "direct jobs created at full ramp" },
  ];

  const proofPoints = [
    { label: "Direct Jobs / Plant", value: "240", icon: <Briefcase size={20} /> },
    { label: "Diverted / Plant / Yr", value: "22k", suffix: "t", icon: <Recycle size={20} /> },
    { label: "Sovereign Minerals", value: "11", icon: <Shield size={20} /> },
    { label: "Upskilling Focus", value: "↑", icon: <TrendingUp size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Beams color="#839470" />
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Government & Regulator Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase text-glow">
               Strategic Mineral <br /> <span className="text-[var(--c-lime)]">Independence.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Every state has trash. We turn it into critical minerals — and into jobs that upskill your existing workforce.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">Request Impact Brief</Button>
              <Button href="/footprint" variant="outline" size="lg">View Global Footprint</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Commit To Section */}
      <section className="py-24 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commitments.map((point, i) => (
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
                   <h4 className="text-xl font-bold text-[var(--c-fg)] mb-4 uppercase tracking-tight leading-tight">{point.title}</h4>
                   <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Footprint / Jobs Section */}
      <section className="py-24 bg-[var(--c-fg)]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">A Semi-Circle of Allies</h2>
              <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight">Jobs Created <span className="opacity-40">in Each Region.</span></h3>
              <p className="mt-4 text-[var(--c-fg2)] font-medium">Every active geography is a partnership commitment to local upskilling.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobStats.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-[var(--c-bg)] border border-[var(--c-border)] flex items-center gap-6 group hover:border-[var(--c-lime)] transition-all"
                >
                   <div className="text-5xl font-black text-[var(--c-lime)]">{item.jobs}</div>
                   <div>
                      <h4 className="font-black text-[var(--c-fg)] uppercase text-lg">{item.country}</h4>
                      <p className="text-[10px] text-[var(--c-fg2)] font-bold uppercase tracking-widest">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Proof Points Stats */}
      <section className="py-24 bg-[var(--c-fg)] relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-bg)]/50 uppercase mb-16">The case in four numbers</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {proofPoints.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                   <div className="text-6xl md:text-7xl font-black text-[var(--c-lime)] tracking-tighter mb-4 leading-none">
                      {stat.value}<span className="section-title">{stat.suffix}</span>
                   </div>
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
             <div className="w-16 h-16 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mx-auto mb-10">
                <Landmark size={32} />
             </div>
            <h2 className="section-title font-black text-[var(--c-fg)] tracking-tighter mb-10 leading-none uppercase">A Briefing for <br /> <span className="text-[var(--c-lime)]">Your Office.</span></h2>
            <p className="text-xl text-[var(--c-fg2)] font-medium mb-12 max-w-2xl mx-auto">Impact brief, jobs model, environmental commitments, and patent summary — packaged for cabinet review.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">Request Cabinet Briefing</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ForYouGovernment;
