import { motion } from 'framer-motion';
import { Car, Database, Plane, Smartphone, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import PixelBlast from '../components/ui/backgrounds/PixelBlast';
import Button from '../components/ui/Button';

const Industries = () => {
  // ... (industries remains the same)
  const industries = [
    {
      title: <>Electric <span className="text-[var(--c-lime)]">Vehicles</span></>,
      icon: <Car size={32} className="text-[var(--c-lime)]" />,
      image: "/WBM/media/ElectricVehicles.jpg",
      desc: "Supplying battery-grade Lithium, Cobalt, and Nickel recovered from end-of-life battery packs to support the global shift to sustainable mobility.",
      benefits: ["High-purity material refinement", "Battery-grade standards", "Circular supply integration"]
    },
    {
      title: <>Data Centers & <span className="text-[var(--c-lime)]">AI</span></>,
      icon: <Database size={32} className="text-[var(--c-lime)]" />,
      image: "/WBM/media/DataCentersAI.jpg",
      desc: "Secure decommissioning and material recovery for high-density compute infrastructure, GPUs, and enterprise storage systems.",
      benefits: ["Certified data destruction", "Precious metal recovery", "Infrastructure asset recovery"]
    },
    {
      title: <>Aerospace & <span className="text-[var(--c-lime)]">Defense</span></>,
      icon: <Plane size={32} className="text-[var(--c-lime)]" />,
      image: "/WBM/media/AerospaceDefense.jpg",
      desc: "Precision extraction of critical alloys and rare earth elements for high-performance applications requiring absolute traceability.",
      benefits: ["Strategic mineral security", "Aerospace-grade purity", "Full lifecycle tracking"]
    },
    {
      title: <>Consumer <span className="text-[var(--c-lime)]">Electronics</span></>,
      icon: <Smartphone size={32} className="text-[var(--c-lime)]" />,
      image: "/WBM/media/ConsumerElectronics.jpg",
      desc: "Large-scale recovery programs for smartphone, laptop, and wearable manufacturers to meet environmental targets.",
      benefits: ["Zero-waste manufacturing", "Closed-loop programs", "Scalable collection networks"]
    },
    {
      title: <>Energy & <span className="text-[var(--c-lime)]">Power</span></>,
      icon: <Zap size={32} className="text-[var(--c-lime)]" />,
      image: "/WBM/media/EnergyPower.jpg",
      desc: "Recovering critical conductors and storage materials from grid-scale infrastructure and renewable energy systems.",
      benefits: ["Grid-scale material recovery", "Copper & conductor extraction", "Renewable supply support"]
    }
  ];

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
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Sector Expertise</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 md:mb-8 uppercase">
              Solutions for <br className="hidden sm:block" />
              <span className="text-[var(--c-lime)]">mission-critical</span> industries
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              We provide the critical minerals and material intelligence that power the world's most innovative sectors.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {industries.map((ind, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                <div className="lg:w-1/2 relative">
                  <div className="rounded-[10px] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src={ind.image} alt={ind.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Floating Icon Box */}
                  <div className={`absolute ${idx % 2 === 1 ? '-left-8' : '-right-8'} top-1/2 -translate-y-1/2 bg-[var(--c-bg)] p-8 rounded-[10px] shadow-2xl hidden md:block border border-[var(--c-border)]`}>
                    <div className="w-16 h-16 bg-[var(--c-fg)]/5 rounded-[10px] flex items-center justify-center mb-4">
                      {ind.icon}
                    </div>
                    <div className="text-sm font-bold text-[var(--c-fg)] uppercase tracking-widest">Industry Leader</div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <h2 className="text-4xl font-bold text-[var(--c-fg)] mb-6 tracking-tight">{ind.title}</h2>
                  <p className="text-xl text-gray-500 font-medium leading-relaxed mb-10">
                    {ind.desc}
                  </p>
                  <div className="space-y-4 mb-10">
                    {ind.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 size={24} className="text-[#8bc34a]" />
                        <span className="text-lg text-[var(--c-fg)] font-bold">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    href="/contact"
                    className="flex items-center gap-3"
                  >
                    Learn about {ind.title}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnership Section */}
      <section className="py-12 bg-[#151515] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight max-w-4xl mx-auto leading-tight">
            Securing the supply chain for <br/><span className="text-[var(--c-lime)]">global manufacturing</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div>
              <div className="text-6xl font-bold text-white mb-4 tracking-tighter">50+</div>
              <h3 className="text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest">Global Partners</h3>
              <p className="text-gray-400 font-medium">Leading OEMs and technology providers trust WBM for their material security needs.</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-4 tracking-tighter">12</div>
              <h3 className="text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest">Industry Sectors</h3>
              <p className="text-gray-400 font-medium">Providing specialized recovery and sourcing solutions across a diverse range of sectors.</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-white mb-4 tracking-tighter">100%</div>
              <h3 className="text-xl font-bold text-[var(--c-lime)] mb-4 uppercase tracking-widest">Traceability</h3>
              <p className="text-gray-400 font-medium">Every gram of material we recover is fully documented from collection to refinement.</p>
            </div>
          </div>
        </div>
        
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <pattern id="grid-industries" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-industries)" />
          </svg>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[var(--c-bg)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[var(--c-fg)] tracking-tight mb-8">Ready to discuss your industry requirements?</h2>
          <p className="text-xl text-gray-500 font-medium mb-12">Our experts are ready to design a custom recovery and sourcing program tailored to your sector's unique needs.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" size="lg">
              Consult With Our Experts
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Request Industry Specs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

