"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, FlaskConical, GraduationCap, Award, Database, Globe, Activity, Zap, ArrowRight, Library, BookOpen, Users, Brain } from 'lucide-react';
import Particles from '../components/ui/backgrounds/Particles';
import Button from '../components/ui/Button';

const ForYouAcademia = () => {
  const offerings = [
    { title: "Collaboration Framework", desc: "Joint IP, shared data, and co-authored publications under a clear MoU.", icon: <Users size={24} /> },
    { title: "Publications Library", desc: "White papers, SLA appendices, and KPI methodology — all openly cited.", icon: <Library size={24} /> },
    { title: "Guest Lecture Program", desc: "Engineering talks at chemistry and materials science departments worldwide.", icon: <BookOpen size={24} /> },
    { title: "Fellowship Program", desc: "Annual cohort of doctoral fellows with co-advisorship and lab access.", icon: <GraduationCap size={24} /> },
  ];

  const themes = [
    { title: "Hydrometallurgy Efficiency", desc: "Solvent recovery, leach kinetics, and selectivity benchmarks across multiple feedstocks.", icon: <FlaskConical size={24} /> },
    { title: "Circular Economy Modeling", desc: "Closed-loop material flow analysis, regional MFA, and EPR scheme design.", icon: <Activity size={24} /> },
    { title: "AI-Orchestrated Mfg", desc: "Computer vision for sortation, RL for batch scheduling, and anomaly detection.", icon: <Brain size={24} /> },
  ];

  const stats = [
    { label: "Published Papers", value: "12", suffix: "+", icon: <BookOpen size={20} /> },
    { label: "Active Collaborations", value: "8", suffix: "", icon: <Users size={20} /> },
    { label: "Fellows / Year", value: "5", suffix: "", icon: <GraduationCap size={20} /> },
    { label: "Proprietary Datasets", value: "4", suffix: "TB", icon: <Database size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <Particles color="#839470" particleCount={400} speed={0.4} />
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Academia & Research Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-[64px] font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase text-glow">
               The Next Frontier <br /> <span className="text-[var(--c-lime)]">of Metallurgy.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
               Research collaborations, white papers, internships, and guest lectures. Engineering-first — published SLAs and KPIs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">Start Research Relationship</Button>
              <Button href="/insights" variant="outline" size="lg" className="h-auto py-4 md:h-14 md:py-0">Access Publications Library</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
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
                   <h4 className="text-xl font-bold text-[var(--c-fg)] mb-4 uppercase tracking-tight leading-tight">{point.title}</h4>
                   <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{point.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Research Themes Section */}
      <section className="py-24 bg-[var(--c-fg)]/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-lime)] uppercase mb-4">Focus Areas</h2>
              <h3 className="section-title font-black text-[var(--c-fg)] uppercase tracking-tight">Active Research <span className="text-[#839470]">Themes.</span></h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {themes.map((theme, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-12 rounded-[32px] bg-[var(--c-bg)] border border-[var(--c-border)] group hover:border-[var(--c-lime)] transition-all relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-lime)]/5 rounded-bl-full group-hover:bg-[var(--c-lime)]/10 transition-colors" />
                   <div className="w-14 h-14 rounded-2xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] mb-8 group-hover:scale-110 transition-transform">
                      {theme.icon}
                   </div>
                   <h4 className="text-2xl font-black text-[var(--c-fg)] mb-4 uppercase tracking-tight leading-none">{theme.title}</h4>
                   <p className="text-sm text-[var(--c-fg2)] leading-relaxed">{theme.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Proof Points Stats */}
      <section className="py-24 bg-[var(--c-bg)] relative">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
           <h2 className="text-sm font-black tracking-[0.3em] text-[var(--c-fg2)] uppercase mb-16">Engagement at a glance</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                   <div className="text-6xl md:text-7xl font-black text-[var(--c-fg)] tracking-tighter mb-4 leading-none">
                      <span className="text-[var(--c-lime)]">{stat.value}</span>{stat.suffix}
                   </div>
                   <div className="text-[10px] font-black text-[var(--c-fg2)] uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
           </div>
           <p className="mt-16 text-[var(--c-fg2)] text-[10px] font-bold uppercase tracking-widest italic">Full bibliography available in our SLA Appendix.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--c-fg)] text-[var(--c-bg)] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
             <div className="w-16 h-16 rounded-full bg-[var(--c-lime)]/20 flex items-center justify-center text-[var(--c-lime)] mx-auto mb-10">
                <Microscope size={32} />
             </div>
            <h2 className="section-title font-black tracking-tighter mb-10 leading-none uppercase">Start a Research <br /> <span className="text-[var(--c-lime)]">Relationship.</span></h2>
            <p className="text-xl opacity-60 font-medium mb-12 max-w-2xl mx-auto">Join a global network of academic partners bridging the gap between metallurgy research and industrial-scale recovery.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">Collaborate With Us</Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg width="100%" height="100%"><pattern id="grid-academia-cta" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="white"/></pattern><rect width="100%" height="100%" fill="url(#grid-academia-cta)" /></svg>
        </div>
      </section>
    </div>
  );
};

export default ForYouAcademia;
