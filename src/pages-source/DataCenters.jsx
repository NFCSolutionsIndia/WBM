import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Activity, Trash2, Globe, Magnet, Database, Layers, Microscope } from 'lucide-react';
import Hyperspeed from '../components/ui/backgrounds/Hyperspeed';
import Button from '../components/ui/Button';

const DataCenters = () => {
  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32 transition-colors duration-500">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-100">
          <Hyperspeed 
            effectOptions={{
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xc1ff00, 0x8bc34a, 0x4d7c0f],
                rightCars: [0xffffff, 0xcccccc, 0x999999],
                sticks: 0xc1ff00
              }
            }}
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
            <div className="inline-flex items-center gap-2 bg-[var(--c-fg)]/5 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--c-border)] text-[var(--c-lime)] mb-6 md:mb-8">
              <div className="w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Infrastructure Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              AI Data Centres. <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">Sustainable & Secure.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Enterprise-grade recovery solutions for the world's largest data centers, ensuring secure, sustainable management of retired hardware.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Supply Chain Bridge Section */}
      <section className="py-10 bg-[var(--c-bg)] relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--c-lime)]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="section-title font-black text-[var(--c-fg)] tracking-tight mb-6 uppercase">One Bridged <span className="text-[var(--c-lime)]">Supply Chain.</span></h2>
             <p className="text-lg text-[var(--c-fg2)] font-medium max-w-3xl mx-auto mb-12">
               Each spoke is a mineral category — and a single-country dependency. Hover and explore where WBM picks up the slack.
             </p>

             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex flex-col md:flex-row items-center gap-4 p-6 rounded-2xl bg-[var(--c-lime)]/5 border border-[var(--c-lime)]/20 text-left max-w-4xl mx-auto"
             >
                <div className="w-12 h-12 rounded-full bg-[var(--c-lime)]/10 flex items-center justify-center text-[var(--c-lime)] shrink-0">
                   <Activity size={24} />
                </div>
                <div>
                   <div className="text-[var(--c-fg)] font-bold mb-1">85% of this supply chain currently depends on Asia.</div>
                   <div className="text-[var(--c-fg2)] text-sm">We are the bridge. Every spoke below maps to a WBM-recoverable mineral stream — sourced from allied geographies.</div>
                </div>
             </motion.div>
          </div>

          <div className="relative pt-12 md:pt-20">
            <div className="flex lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 flex-col items-center mb-12 lg:mb-0">
               <div className="px-6 py-3 rounded-full bg-[var(--c-lime)]/10 border border-[var(--c-lime)] text-[var(--c-lime)] text-xs font-black uppercase tracking-widest mb-4">AI DATA CENTRE</div>
               <div className="text-xl font-black text-[var(--c-fg)] uppercase tracking-tighter">5 Component Categories</div>
               <div className="w-px h-12 bg-gradient-to-b from-[var(--c-lime)] to-transparent mt-4 hidden lg:block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-12">
               {[
                 { 
                   title: "Microchips & Processors", 
                   sub: "The brains.", 
                   minerals: ["Silicon", "Germanium", "Arsenic", "+2"], 
                   coverage: 20, 
                   color: "#10b981",
                   icon: <Cpu size={20} />
                 },
                 { 
                   title: "Server Boards & PCBs", 
                   sub: "Every signal travels here.", 
                   minerals: ["Gold", "Silver", "Copper", "+2"], 
                   coverage: 89, 
                   color: "#8b5cf6",
                   icon: <Layers size={20} />
                 },
                 { 
                   title: "Heat Sinks", 
                   sub: "Pull watts from silicon.", 
                   minerals: ["Copper", "Aluminium"], 
                   coverage: 100, 
                   color: "#f59e0b",
                   icon: <Zap size={20} />
                 },
                 { 
                   title: "Cooling Systems", 
                   sub: "Liquid + immersion stacks.", 
                   minerals: ["Rare-Earth", "Copper"], 
                   coverage: 60, 
                   color: "#0ea5e9",
                   icon: <Activity size={20} />
                 },
                 { 
                   title: "Magnets & Storage", 
                   sub: "HDDs, SSDs, motors.", 
                   minerals: ["Neodymium", "Dysprosium", "Boron"], 
                   coverage: 93, 
                   color: "#f43f5e",
                   icon: <Database size={20} />
                 }
               ].map((cat, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="p-8 rounded-[24px] bg-[var(--c-bg2)] border border-[var(--c-border)] hover:border-[var(--c-lime)]/30 transition-all group shadow-sm hover:shadow-xl"
                 >
                   <div className="flex items-center gap-4 mb-6">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                        style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                      >
                        {cat.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--c-fg)] text-lg leading-tight uppercase tracking-tight">{cat.title}</h3>
                        <p className="text-[var(--c-fg2)] text-xs font-medium">{cat.sub}</p>
                      </div>
                   </div>

                   <div className="flex flex-wrap gap-2 mb-8">
                      {cat.minerals.map((m, i) => (
                        <span key={i} className="text-[9px] font-bold px-2 py-1 rounded-md bg-[var(--c-fg)]/5 text-[var(--c-fg2)] uppercase tracking-wider">
                          {m}
                        </span>
                      ))}
                   </div>

                   <div className="space-y-3">
                      <div className="flex justify-between items-end">
                         <div className="text-[9px] font-black text-[var(--c-fg2)] uppercase tracking-tighter">WBM Coverage</div>
                         <div className="text-sm font-black" style={{ color: cat.color }}>{cat.coverage}%</div>
                      </div>
                      <div className="h-1.5 w-full bg-[var(--c-fg)]/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${cat.coverage}%` }}
                           viewport={{ once: true }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className="h-full shadow-[0_0_10px_currentColor]"
                           style={{ backgroundColor: cat.color, color: cat.color }}
                         />
                      </div>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-12 md:py-24 bg-[var(--c-fg)]/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="section-title section-title  font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8 md:mb-10">
                Uncompromising <span className="text-[var(--c-lime)]">security</span> protocols
              </h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: <Activity size={24} />, text: "Real-time tracking of every asset" },
                  { icon: <Trash2 size={24} />, text: "Certified on-site and off-site data destruction" },
                  { icon: <Globe size={24} />, text: "Full compliance with global data privacy regulations" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-6">
                    <div className="bg-[var(--c-lime)]/10 p-2.5 md:p-3 rounded-xl text-[var(--c-lime)] flex-shrink-0">
                      <div className="scale-90 md:scale-100">{item.icon}</div>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-[var(--c-fg)] tracking-tight leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="rounded-[20px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/10"
              >
                <img src="/WBM/media/DataCentersAI.jpg" alt="Data Center Hardware" className="w-full h-auto" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--c-lime)]/20 to-transparent pointer-events-none rounded-[20px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[var(--c-bg)] text-center transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title font-bold text-[var(--c-fg)] tracking-tight mb-10 leading-tight">Ready to decommission your <span className="text-[var(--c-lime)]">retired hardware?</span></h2>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-12 leading-relaxed max-w-3xl mx-auto">Our infrastructure team provides specialized solutions for enterprise data centers and AI clusters.</p>
            <div className="flex justify-center">
              <Button href="/contact">
                Contact Infrastructure Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataCenters;
