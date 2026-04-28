import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Scale, Globe, Zap } from 'lucide-react';
import Particles from '../components/ui/backgrounds/Particles';
import Button from '../components/ui/Button';

const Materials = () => {
  const materialList = [
    {
      symbol: "Au",
      name: "Gold",
      purity: "99.99%",
      source: "PCB & Connector Recovery",
      use: "Precision Electronics & Aerospace",
      color: "bg-[#FFD700]/10",
      textColor: "text-[#D4AF37]"
    },
    {
      symbol: "Cu",
      name: "Copper",
      purity: "99.9%",
      source: "Cable & Infrastructure Scrap",
      use: "Power Grids & EV Motors",
      color: "bg-[#B87333]/10",
      textColor: "text-[#B87333]"
    },
    {
      symbol: "Li",
      name: "Lithium",
      purity: "98.5%",
      source: "EV Battery Cell Recycling",
      use: "Next-Gen Energy Storage",
      color: "bg-[#D3D3D3]/20",
      textColor: "text-gray-500"
    },
    {
      symbol: "Nd",
      name: "Neodymium",
      purity: "95%+",
      source: "Hard Drive & Magnet Recovery",
      use: "AI Compute & Robotics Motors",
      color: "bg-[#8bc34a]/10",
      textColor: "text-[#8bc34a]"
    },
    {
      symbol: "Co",
      name: "Cobalt",
      purity: "99.8%",
      source: "Li-ion Battery Cathode Recovery",
      use: "EV Batteries & Superalloys",
      color: "bg-[#0047AB]/10",
      textColor: "text-[#0047AB]"
    },
    {
      symbol: "Ag",
      name: "Silver",
      purity: "99.95%",
      source: "Solar Panel & Component Recovery",
      use: "Conductive Inks & Contact Points",
      color: "bg-gray-100",
      textColor: "text-gray-400"
    },
    {
      symbol: "Pd",
      name: "Palladium",
      purity: "99.9%",
      source: "Capacitor & Catalyst Recovery",
      use: "High-performance Computing",
      color: "bg-[#E5E4E2]/20",
      textColor: "text-[#757575]"
    },
    {
      symbol: "Pt",
      name: "Platinum",
      purity: "99.95%",
      source: "Fuel Cell & Catalyst Recovery",
      use: "Green Tech & Hydrogen Economy",
      color: "bg-[#E5E4E2]/30",
      textColor: "text-[#4A4A4A]"
    },
    {
      symbol: "Ni",
      name: "Nickel",
      purity: "98.0%",
      source: "EV Battery Cathode Scrap",
      use: "EV Power Systems & Alloys",
      color: "bg-[#71706E]/10",
      textColor: "text-[#71706E]"
    },
    {
      symbol: "Al",
      name: "Aluminum",
      purity: "99.7%",
      source: "Chassis & Heat Sink Recycling",
      use: "Lightweight Infrastructure",
      color: "bg-[#C0C0C0]/20",
      textColor: "text-[#A9A9A9]"
    },
    {
      symbol: "Sn",
      name: "Tin",
      purity: "99.8%",
      source: "Solder & Component Recovery",
      use: "PCB Manufacturing & Electronics",
      color: "bg-[#D3D3D3]/40",
      textColor: "text-[#8E8E8E]"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
          <Particles 
            particleCount={300}
            particleSpread={15}
            speed={0.2}
            particleColors={['#c1ff00', '#ffffff', '#8bc34a']}
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Material Catalog</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              Critical minerals for <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">a digital future</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              We provide a sustainable, ethically sourced supply of high-purity minerals recovered from the world's electronic waste.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Periodic Catalog */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialList.map((mat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-[var(--c-bg2)] p-10 rounded-[10px] border border-[var(--c-border)] shadow-sm hover:shadow-2xl hover:border-[var(--c-lime)]/40 transition-all duration-500 cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--c-lime)]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[var(--c-lime)]/10 transition-colors" />
                
                <div className={`w-20 h-20 ${mat.color} rounded-[10px] flex flex-col items-center justify-center mb-10 border border-[var(--c-border)] group-hover:scale-110 transition-transform relative z-10`}>
                  <div className={`text-3xl font-bold ${mat.textColor}`}>{mat.symbol}</div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold text-[var(--c-fg)] mb-3 tracking-tight">
                    {mat.name.split(' ')[0]} <span className="text-[var(--c-lime)]">{mat.name.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  
                  <div className="inline-block px-3 py-1 rounded-full bg-[var(--c-lime)]/10 border border-[var(--c-lime)]/20 text-[10px] font-black text-[var(--c-lime)] uppercase tracking-[0.2em] mb-10">
                    Purity: {mat.purity}
                  </div>
                  
                  <div className="space-y-8 pt-8 border-t border-[var(--c-border)]">
                    <div className="group/item">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2 group-hover/item:text-[var(--c-lime)] transition-colors">Primary Source</div>
                        <div className="text-base md:text-lg font-bold text-[var(--c-fg)] leading-tight">{mat.source}</div>
                    </div>
                    <div className="group/item">
                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2 group-hover/item:text-[var(--c-lime)] transition-colors">Industrial Use</div>
                        <div className="text-base md:text-lg font-medium text-gray-500 leading-tight">{mat.use}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability Section */}
      <section className="py-12 bg-[var(--c-fg)]/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8">
                Transparency you can <span className="text-[var(--c-lime)]">trust</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--c-bg)] rounded-[10px] shadow-sm border border-[var(--c-border)] flex items-center justify-center shrink-0">
                    <ShieldCheck size={28} className="text-[#8bc34a]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--c-fg)] mb-2">Ethical Assurance</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">Our materials provide a conflict-free alternative to traditional mining, ensuring your supply chain meets the highest ESG standards.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--c-bg)] rounded-[10px] shadow-sm border border-[var(--c-border)] flex items-center justify-center shrink-0">
                    <Scale size={28} className="text-[var(--c-lime)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--c-fg)] mb-2">Precision Grading</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">Every batch undergoes rigorous spectral analysis to guarantee the purity and consistency required for precision manufacturing.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-[var(--c-bg)] rounded-[10px] shadow-sm border border-[var(--c-border)] flex items-center justify-center shrink-0">
                    <Globe size={28} className="text-[var(--c-fg)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--c-fg)] mb-2">Global Traceability</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">Utilizing blockchain-backed documentation, we provide a full chain of custody for every gram of material recovered.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#151515] rounded-[10px] p-12 relative overflow-hidden"
            >
               <div className="relative z-10">
                  <div className="text-sm font-bold text-[var(--c-lime)] uppercase tracking-widest mb-6">Market Impact</div>
                  <h3 className="text-3xl font-bold text-white mb-8">Decoupling innovation from extractive mining.</h3>
                  <div className="space-y-8">
                     <div>
                        <div className="flex justify-between mb-2">
                           <span className="text-gray-400 font-bold">Carbon Footprint Reduction</span>
                           <span className="text-white font-bold">85%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[var(--c-fg)]/10 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "85%" }}
                             viewport={{ once: true }}
                             className="h-full bg-[#8bc34a]" 
                           />
                        </div>
                     </div>
                     <div>
                        <div className="flex justify-between mb-2">
                           <span className="text-gray-400 font-bold">Water Usage Savings</span>
                           <span className="text-white font-bold">92%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white dark:bg-[#121214] dark:bg-[#0A0B0D]/10 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: "92%" }}
                             viewport={{ once: true }}
                             className="h-full bg-[var(--c-lime)]" 
                           />
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Decorative glow */}
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--c-lime)]/20 rounded-full blur-[100px]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[var(--c-bg)] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Zap size={48} className="text-[var(--c-lime)] mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-[var(--c-fg)] mb-6 tracking-tight">Securing your <span className="text-[var(--c-lime)]">material future</span></h2>
          <p className="text-xl text-gray-500 font-medium mb-12">Contact our procurement team for current spot prices, forward supply contracts, and technical grade specifications.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" size="lg">
              Request Material Specs
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Speak with Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materials;

