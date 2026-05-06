import { motion } from 'framer-motion';
import { Cpu, Zap, BarChart3, Globe, ArrowUpRight, ShieldCheck, Beaker } from 'lucide-react';
import Button from '../components/ui/Button';
import ScrollReveal from '../components/ui/effects/ScrollReveal';
import TiltCard from '../components/ui/TiltCard';

const CaseStudies = () => {
  const cases = [
    {
      title: "High-efficiency material recovery from industrial e-waste",
      category: "Industrial Manufacturing",
      impact: "92%",
      impactLabel: "Recovery efficiency",
      image: "/WBM/media/motherboard-background.jpg",
      description: "Optimized recycling workflows for a global electronics manufacturer, maximizing recovery of gold, silver, and copper from production scrap.",
      icon: <Cpu size={20} />,
      tags: ["High-yield", "Automated"]
    },
    {
      title: "Circular supply chain for leading AI data centers",
      category: "Technology & Infrastructure",
      impact: "100%",
      impactLabel: "Zero waste achieved",
      image: "/WBM/media/insideWarehouse.png",
      description: "Implemented an end-to-end recovery system for decommissioned server hardware, returning high-purity rare earth minerals back to the supply chain.",
      icon: <Zap size={20} />,
      tags: ["Circular", "AI-Native"]
    },
    {
      title: "Sustainable mineral sourcing for automotive catalysts",
      category: "Automotive Industry",
      impact: "85%",
      impactLabel: "Cost reduction",
      image: "/WBM/media/Aerospace.png",
      description: "Advanced extraction of platinum group metals from end-of-life vehicle components, providing a stable and ethical secondary source for manufacturers.",
      icon: <BarChart3 size={20} />,
      tags: ["Eco-friendly", "Efficient"]
    },
    {
      title: "Urban mining project for smart city infrastructure",
      category: "Public Sector",
      impact: "500t",
      impactLabel: "Annual CO2 offset",
      image: "/WBM/media/destruction-smartphone-scene.jpg",
      description: "Partnered with municipal authorities to establish a regional recovery hub, transforming public electronic waste into high-value urban resources.",
      icon: <Globe size={20} />,
      tags: ["Sustainable", "Community"]
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-500">
      {/* Hero Section - DO NOT CHANGE per user request */}
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
            
            <h1 className="text-3xl md:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              The <span className="text-[var(--c-lime)]">Whole Story.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Capturing the LiBERT™ extraction journey, the 11 critical minerals portfolio, and the closed-loop circular economy.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--c-lime)]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {cases.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
                <TiltCard className="group relative bg-[var(--c-bg2)] rounded-[32px] overflow-hidden border border-[var(--c-border)] hover:border-[var(--c-lime)]/40 transition-all duration-500 shadow-xl flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Category Tag */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                      <div className="text-[var(--c-lime)]">{item.icon}</div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/90">
                        {item.category}
                      </span>
                    </div>

                    {/* Impact Badge */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div className="flex gap-2">
                        {item.tags?.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-[var(--c-lime)]/20 backdrop-blur-md border border-[var(--c-lime)]/30 rounded-full text-[9px] font-bold text-[var(--c-lime)] uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6 mb-6">
                      <h3 className="text-[22px] md:text-[24px] font-black uppercase tracking-tight leading-[1.1] text-[var(--c-fg)] group-hover:text-[var(--c-lime)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      {/* Metric Display */}
                      <div className="text-left sm:text-right shrink-0">
                        <div className="text-3xl sm:text-4xl font-black text-[var(--c-lime)] leading-none mb-1 tracking-tighter">
                          {item.impact}
                        </div>
                        <div className="text-[9px] font-bold text-[var(--c-fg3)] uppercase tracking-widest whitespace-nowrap">
                          {item.impactLabel}
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--c-fg2)] text-base md:text-lg leading-relaxed mb-10 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-[var(--c-border)] flex items-center justify-between">
                      <Button variant="outline" size="sm" showArrow>
                        View Details
                      </Button>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--c-bg2)] relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--c-lime)]/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-[30px] font-black uppercase tracking-tight text-[var(--c-fg)] mb-8 leading-tight">
              Ready to optimize your <br className="hidden md:block" />
              <span className="text-[var(--c-lime)]">material recovery</span>?
            </h2>
            
            <p className="text-[var(--c-fg2)] text-xl font-medium mb-12 max-w-2xl mx-auto">
              Join leading industries in building a sustainable, traceable, and efficient mineral supply chain.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                href="/contact"
                className="px-10 py-5 rounded-full bg-[var(--c-highlight)] text-black font-black uppercase tracking-widest text-sm shadow-xl shadow-[var(--c-highlight)]/20 hover:scale-105 transition-transform"
              >
                Start a partnership
              </Button>
              <Button 
                variant="outline"
                className="px-10 py-5 rounded-full border border-[var(--c-border)] text-[var(--c-fg)] font-black uppercase tracking-widest text-sm hover:bg-[var(--c-fg)] hover:text-[var(--c-bg)] transition-all"
              >
                Capability Report
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-20 animate-float opacity-20 hidden lg:block">
          <ShieldCheck className="text-[var(--c-lime)]" size={48} />
        </div>
        <div className="absolute bottom-20 right-20 animate-float-delayed opacity-20 hidden lg:block">
          <Beaker className="text-[var(--c-lime)]" size={48} />
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
