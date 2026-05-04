import { motion } from 'framer-motion';
import { Target, Shield, Zap, Award, ArrowRight, Cpu, Battery, Activity, Layers, Database, FlaskConical, Truck, ChevronRight } from 'lucide-react';
import PixelBlast from '../components/ui/backgrounds/PixelBlast';
import Button from '../components/ui/Button';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <PixelBlast 
            pixelSize={5}
            color="#c1ff00"
            patternDensity={0.8}
            speed={0.3}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-[1]"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8">
              <div className="w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Our Capabilities</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-8 uppercase">
              What we <br />
              <span className="text-[var(--c-lime)]">recover.</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Transforming three integrated waste streams into 11 critical minerals at OEM-grade purity.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]">
                    <Database size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold uppercase text-xs">E-Waste</div>
                    <div className="text-white/40 text-[10px]">PCBs & Chips</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]">
                    <Battery size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold uppercase text-xs">B-Waste</div>
                    <div className="text-white/40 text-[10px]">Li-ion Batteries</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--c-lime)]">
                    <Zap size={20} />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold uppercase text-xs">REE Magnets</div>
                    <div className="text-white/40 text-[10px]">Rare-Earth Elements</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-Waste Section */}
      <section className="py-24 bg-[var(--c-fg)]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-3xl text-left">
              <div className="text-[var(--c-lime)] font-black text-[10px] uppercase tracking-widest mb-4">Integrated Waste Stream 01</div>
              <h2 className="text-3xl md:text-[52px] font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase">E-Waste <span className="text-[var(--c-lime)]">Extraction.</span></h2>
              <p className="text-xl text-[var(--c-fg3)] font-medium leading-relaxed">
                Your decommissioned electronics carry six of the eleven minerals every modern product needs. We pull them out at OEM-grade purity.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-fg)] tracking-tighter">22k</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">T/Yr Intake</div>
              </div>
              <div className="p-4 bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-lime)] tracking-tighter">≥99.9%</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">Purity</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { mineral: "Gold", sym: "Au", id: "79", desc: "Bonding wires in every PCB and high-reliability connector.", icon: <Layers size={20} /> },
              { mineral: "Silver", sym: "Ag", id: "47", desc: "PV panels, contacts, RF shielding, switch contacts.", icon: <Layers size={20} /> },
              { mineral: "Copper", sym: "Cu", id: "29", desc: "Backbone of every interconnect, cable, and busbar.", icon: <Layers size={20} /> },
              { mineral: "Palladium", sym: "Pd", id: "46", desc: "Catalysts, MLCC capacitors, hydrogen membranes.", icon: <Layers size={20} /> },
              { mineral: "Aluminium", sym: "Al", id: "13", desc: "Casings, busbars, structural — sold as crushed powder too.", icon: <Layers size={20} /> },
              { mineral: "Lead", sym: "Pb", id: "82", desc: "Solder reclaim, radiation shielding, legacy battery anodes.", icon: <Layers size={20} /> }
            ].map((m, idx) => (
              <div key={idx} className="p-8 rounded-[24px] bg-[var(--c-bg)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/30 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)]">
                    {m.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-[var(--c-fg)] tracking-tighter leading-none">{m.sym}</div>
                    <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">#{m.id}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--c-fg)] mb-2 uppercase">{m.mineral}</h3>
                <p className="text-sm text-[var(--c-fg3)] font-medium leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--c-bg)] rounded-[32px] p-8 md:p-12 border border-[var(--c-border)]">
            <h3 className="text-xl font-bold text-[var(--c-fg)] mb-12 uppercase tracking-widest text-center">The 6-Step Extraction Process</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative">
              {[
                { title: "Intake", desc: "Board sorting & gate intake.", icon: <Database size={24} /> },
                { title: "Separation", desc: "Mechanical splitting.", icon: <Cpu size={24} /> },
                { title: "Crushing", icon: <Activity size={24} />, desc: "Powdering for direct sale." },
                { title: "Hydromet", icon: <FlaskConical size={24} />, desc: "Patented process leach." },
                { title: "Refining", icon: <Award size={24} />, desc: "KPI certified streams." },
                { title: "Dispatch", icon: <Truck size={24} />, desc: "OEM off-take delivery." }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--c-fg)]/5 border border-[var(--c-border)] flex items-center justify-center mx-auto mb-4 text-[var(--c-lime)]">
                    {step.icon}
                  </div>
                  <div className="text-[10px] font-black text-[var(--c-lime)] uppercase mb-1">Step 0{idx+1}</div>
                  <h4 className="font-bold text-[var(--c-fg)] mb-2 uppercase text-sm">{step.title}</h4>
                  <p className="text-[10px] text-[var(--c-fg3)] font-medium leading-tight px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B-Waste Section */}
      <section className="py-24 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-3xl text-left">
              <div className="text-[var(--c-lime)] font-black text-[10px] uppercase tracking-widest mb-4">Integrated Waste Stream 02</div>
              <h2 className="text-3xl md:text-[52px] font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase">Battery <span className="text-[var(--c-lime)]">Recycling.</span></h2>
              <p className="text-xl text-[var(--c-fg3)] font-medium leading-relaxed">
                Spent EV packs and grid-storage modules. We accept the chemistries that recycle cleanly — and refuse the ones that don't.
              </p>
            </div>
            <div className="flex gap-4 md:order-1">
              <div className="p-4 bg-[var(--c-fg)]/5 border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-fg)] tracking-tighter">100%</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">Traceable</div>
              </div>
              <div className="p-4 bg-[var(--c-fg)]/5 border border-[var(--c-border)] rounded-2xl text-center min-w-[120px]">
                <div className="text-2xl font-black text-[var(--c-lime)] tracking-tighter">≥99.5%</div>
                <div className="text-[10px] font-bold text-[var(--c-fg3)] uppercase">Li2CO3 Grade</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
               <div className="grid grid-cols-1 gap-6">
                 {[
                   { mineral: "Lithium", sym: "Li", id: "3", desc: "Cathode chemistry for every EV and grid-storage cell.", icon: <Battery size={24} /> },
                   { mineral: "Cobalt", sym: "Co", id: "27", desc: "NMC/NCA cathodes — energy density and cycle life.", icon: <Battery size={24} /> },
                   { mineral: "Nickel", sym: "Ni", id: "28", desc: "High-nickel cathodes for long-range EVs.", icon: <Battery size={24} /> }
                 ].map((m, idx) => (
                   <div key={idx} className="p-6 rounded-2xl bg-[var(--c-fg)]/5 border border-[var(--c-border)] flex items-center gap-6 group hover:border-[var(--c-lime)]/30 transition-all">
                     <div className="w-12 h-12 rounded-xl bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] shrink-0">
                       {m.icon}
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-lg font-bold text-[var(--c-fg)] uppercase">{m.mineral}</h3>
                          <div className="text-right">
                             <span className="text-xl font-black text-[var(--c-fg)] tracking-tighter mr-2">{m.sym}</span>
                             <span className="text-[10px] font-bold text-[var(--c-fg3)] uppercase tracking-widest">#{m.id}</span>
                          </div>
                        </div>
                        <p className="text-sm text-[var(--c-fg3)] font-medium">{m.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="order-1 lg:order-2 relative">
               <div className="rounded-[32px] overflow-hidden border border-[var(--c-border)] bg-[var(--c-fg)]/5 p-8 md:p-12">
                  <h3 className="text-xl font-bold text-[var(--c-fg)] mb-8 uppercase tracking-widest">B-Waste Flow Logic</h3>
                  <div className="space-y-4">
                    {[
                      { title: "Discharge", desc: "Safe de-energisation." },
                      { title: "Extraction", desc: "Black-mass separation." },
                      { title: "Hydromet", desc: "Isolated Li, Co, Ni leach." },
                      { title: "Precipitation", desc: "Precursor-ready output." },
                      { title: "Certification", desc: "Lot-based assay certs." },
                      { title: "Off-take", desc: "Direct to cell partners." }
                    ].map((step, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ x: 10 }}
                        className="flex gap-4 items-start p-3 rounded-xl hover:bg-[var(--c-lime)]/10 transition-colors cursor-default group/step"
                      >
                        <div className="text-[10px] font-black text-[var(--c-lime)] mt-1 group-hover/step:scale-110 transition-transform">0{idx+1}</div>
                        <div>
                          <div className="font-bold text-[var(--c-fg)] uppercase text-sm group-hover/step:text-[var(--c-lime)] transition-colors">{step.title}</div>
                          <div className="text-xs text-[var(--c-fg3)] font-medium">{step.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
