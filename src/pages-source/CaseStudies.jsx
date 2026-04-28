import { motion } from 'framer-motion';
import { Cpu, Zap, BarChart3, Globe, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const CaseStudies = () => {
  // ... (cases remains the same)
  const cases = [
    {
      title: <>High-efficiency <span className="text-[var(--c-lime)]">material recovery</span> from industrial e-waste</>,
      category: "Industrial Manufacturing",
      impact: "92%",
      impactLabel: "Recovery efficiency",
      image: "/WBM/media/motherboard-background.jpg",
      description: "Optimized recycling workflows for a global electronics manufacturer, maximizing recovery of gold, silver, and copper from production scrap.",
      icon: <Cpu size={24} className="text-[var(--c-lime)]" />
    },
    {
      title: "Circular supply chain for leading AI data centers",
      category: "Technology & Infrastructure",
      impact: "100%",
      impactLabel: "Zero waste achieved",
      image: "/WBM/media/insideWarehouse.png",
      description: "Implemented an end-to-end recovery system for decommissioned server hardware, returning high-purity rare earth minerals back to the supply chain.",
      icon: <Zap size={24} className="text-[var(--c-lime)]" />
    },
    {
      title: "Sustainable mineral sourcing for automotive catalysts",
      category: "Automotive Industry",
      impact: "85%",
      impactLabel: "Cost reduction",
      image: "/WBM/media/Aerospace.png",
      description: "Advanced extraction of platinum group metals from end-of-life vehicle components, providing a stable and ethical secondary source for manufacturers.",
      icon: <BarChart3 size={24} className="text-[var(--c-lime)]" />
    },
    {
      title: "Urban mining project for smart city infrastructure",
      category: "Public Sector",
      impact: "500t",
      impactLabel: "Annual CO2 offset",
      image: "/WBM/media/destruction-smartphone-scene.jpg",
      description: "Partnered with municipal authorities to establish a regional recovery hub, transforming public electronic waste into high-value urban resources.",
      icon: <Globe size={24} className="text-[var(--c-lime)]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-32 pb-24 md:pt-40 md:pb-32">
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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Real-world impact</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              Driving the <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">circular economy</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Discover how our advanced processes help global industries achieve sustainability goals while securing critical mineral supply.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {cases.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[10px] overflow-hidden mb-8 shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-6 left-6 bg-[var(--c-bg)]/90 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-3 shadow-lg">
                    {item.icon}
                    <span className="font-bold text-[var(--c-fg)] text-sm uppercase tracking-wider">{item.category}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-grow max-w-xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-[var(--c-fg)] mb-4 leading-tight group-hover:text-[var(--c-lime)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <Button href="/contact" variant="ghost" className="flex items-center gap-2 group/btn p-0">
                      View full case study
                    </Button>
                  </div>
                  
                  <div className="shrink-0 text-right">
                    <div className="text-5xl font-bold text-[var(--c-lime)] leading-none mb-1 tracking-tighter">
                      {item.impact}
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {item.impactLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#151515] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                Ready to optimize your <span className="text-[var(--c-lime)]">material recovery</span>?
              </h2>
              <p className="text-gray-400 text-xl font-medium mb-8">
                Join leading industries in building a sustainable, traceable, and efficient mineral supply chain.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button 
                  href="/contact"
                  size="lg"
                >
                  Start a partnership
                </Button>
                <Button 
                  href="/contact"
                  variant="ghost"
                  size="lg"
                  className="text-white border-white/20 hover:bg-white/5"
                >
                  Download Capability Report
                </Button>
              </div>
            </div>
            
            <div className="relative w-full md:w-1/3 aspect-square flex items-center justify-center">
              {/* Outer Pulsing Ring */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 border border-[var(--c-lime)] rounded-full"
              />
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border border-white/10 rounded-full flex items-center justify-center relative"
              >
                {/* Orbiting particles */}
                {[0, 120, 240].map((angle) => (
                  <div 
                    key={angle}
                    className="absolute w-2 h-2 bg-[var(--c-lime)] rounded-full"
                    style={{ 
                      top: '50%', 
                      left: '50%', 
                      transform: `rotate(${angle}deg) translateX(50%)` 
                    }}
                  />
                ))}

                <div className="w-[80%] h-[80%] border border-white/20 rounded-full flex items-center justify-center">
                   <div className="w-[60%] h-[60%] border border-white/40 rounded-full flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-4 h-4 bg-[var(--c-lime)] rounded-full shadow-[0_0_15px_var(--c-highlight)]"
                      />
                   </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-6xl font-bold text-white/5 select-none">WBM</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background circuit pattern placeholder */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

