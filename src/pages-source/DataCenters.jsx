import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Activity, Trash2, Globe } from 'lucide-react';
import Hyperspeed from '../components/ui/backgrounds/Hyperspeed';
import Button from '../components/ui/Button';

const DataCenters = () => {
  // ... (services remains the same)
  const services = [
    {
      title: "Secure Decommissioning",
      desc: "End-to-end management of retired server infrastructure with 100% data security assurance and certified destruction.",
      icon: <ShieldCheck size={32} className="text-[var(--c-lime)]" />
    },
    {
      title: "GPU & AI Hardware Recovery",
      desc: "Specialized extraction of critical components from high-density AI clusters and GPU arrays for maximum mineral yield.",
      icon: <Cpu size={32} className="text-[var(--c-lime)]" />
    },
    {
      title: "Sustainable Asset Recovery",
      desc: "Maximizing the residual value of data center hardware through component reuse and advanced material recovery.",
      icon: <Zap size={32} className="text-[var(--c-lime)]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 z-0">
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
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-[var(--c-lime)] mb-6 md:mb-8">
              <div className="w-2 h-2 bg-[var(--c-lime)] rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Infrastructure Solutions</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              Future-proofing <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">data center</span> lifecycles
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              We provide enterprise-grade recovery solutions for the world's largest data centers, ensuring secure, sustainable management.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-24 bg-[var(--c-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-[var(--c-bg)] p-8 md:p-12 rounded-[20px] border border-[var(--c-border)] shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 dark:bg-white/5 rounded-[10px] flex items-center justify-center mb-8 md:mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <div className="scale-75 md:scale-100">{service.icon}</div>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-[var(--c-fg)] mb-4 md:mb-6 tracking-tight group-hover:text-[var(--c-lime)] transition-colors">{service.title}</h3>
                <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
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
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--c-fg)] leading-tight tracking-tight mb-8 md:mb-10">
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
            <h2 className="text-4xl md:text-6xl font-bold text-[var(--c-fg)] tracking-tight mb-10 leading-tight">Ready to decommission your <span className="text-[var(--c-lime)]">retired hardware?</span></h2>
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
