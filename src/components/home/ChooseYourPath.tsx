"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const paths = [
  {
    id: "investor",
    title: "Investor",
    subtitle: "Capital & Returns",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
    ),
    content: {
      title: "INVESTOR",
      subtitle: "Capital & Returns",
      description: "Join a high-growth circular economy company with multiple revenue streams, proven technology, and global expansion strategy.",
      bullets: [
        "Pre-revenue equity opportunities",
        "Projected 3.4× annual growth",
        "ESG-compliant portfolio asset",
        "Carbon credit revenue share",
      ],
      buttonText: "View Investment Deck →",
    },
    accent: "var(--color-orange)",
  },
  {
    id: "customer",
    title: "Customer",
    subtitle: "Buy Certified Minerals",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    ),
    content: {
      title: "CUSTOMER",
      subtitle: "Buy Certified Minerals",
      description: "Secure a domestic, sustainable supply chain of 11 critical minerals purified to industry-grade specifications.",
      bullets: [
        "99.9% purity guaranteed",
        "Transparent ESG reporting",
        "Long-term off-take agreements",
        "Reduced geopolitical supply risk",
      ],
      buttonText: "Request Spec Sheets →",
    },
    accent: "var(--color-ice)",
  },
  {
    id: "supplier",
    title: "Supplier",
    subtitle: "Sell or Donate E-Waste",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
    ),
    content: {
      title: "SUPPLIER",
      subtitle: "Feedstock Partnership",
      description: "Monetize your electronic waste, spent batteries, and decommissioned infrastructure with our efficient tipping models.",
      bullets: [
        "Competitive tipping fees paid",
        "Zero-landfill certification",
        "Secure data destruction",
        "Complete chain of custody",
      ],
      buttonText: "Become a Supplier →",
    },
    accent: "var(--color-lime)",
  },
  {
    id: "government",
    title: "Government",
    subtitle: "Policy & Partnerships",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 21h18"></path><path d="M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13"></path><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path><path d="M12 2v4"></path><path d="M10 4h4"></path></svg>
    ),
    content: {
      title: "GOVERNMENT",
      subtitle: "Policy & Partnerships",
      description: "Partner with us to build sovereign supply chains, drive local job creation, and achieve national net-zero targets.",
      bullets: [
        "Sovereign supply chain security",
        "High-tech job creation",
        "Landfill diversion metrics",
        "Aligns with strategic mineral acts",
      ],
      buttonText: "Explore Partnerships →",
    },
    accent: "var(--color-orange)",
  },
  {
    id: "academia",
    title: "Academia",
    subtitle: "Research & Innovation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
    ),
    content: {
      title: "ACADEMIA",
      subtitle: "Research & Innovation",
      description: "Collaborate on advanced metallurgy, AI sorting models, and the next generation of clean extraction chemistry.",
      bullets: [
        "Access to processing datasets",
        "Joint grant opportunities",
        "Internship & pipeline programs",
        "Real-world lab testing",
      ],
      buttonText: "Collaborate With Us →",
    },
    accent: "var(--color-ice)",
  },
];

export default function ChooseYourPath() {
  const [activeTab, setActiveTab] = useState(paths[0].id);

  const activePath = paths.find((p) => p.id === activeTab)!;
  const activeContent = activePath.content;

  return (
    <section className="py-12 w-full bg-[var(--c-bg2)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-black uppercase tracking-tighter text-[clamp(40px,6vw,72px)] text-[var(--c-fg)] leading-[0.9] mb-6"
          >
            Choose Your <span className="text-[var(--color-lime)]">Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-[var(--c-fg2)] text-lg"
          >
            Whether you&apos;re an investor, customer, supplier, government partner, or researcher — there&apos;s a role for you in the circular economy.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 min-h-[500px]">
          
          {/* Left Tabs */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            {paths.map((path) => {
              const isActive = activeTab === path.id;
              return (
                <button
                  key={path.id}
                  onClick={() => setActiveTab(path.id)}
                  className={`w-full flex items-center gap-4 p-5 rounded-[20px] transition-all duration-300 text-left border ${
                    isActive 
                      ? "bg-[rgba(255,255,255,0.05)] border-[var(--color-lime)] shadow-[0_0_20px_rgba(193,255,0,0.1)]" 
                      : "bg-transparent border-[var(--c-border)] hover:bg-[rgba(255,255,255,0.02)] hover:border-[var(--c-fg3)]"
                  }`}
                  data-cursor="view"
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? "bg-[var(--color-lime)] text-black" : "bg-[var(--c-bg3)] text-[var(--c-fg3)]"}`}
                  >
                    {path.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`font-sans font-bold text-lg mb-0.5 transition-colors ${isActive ? "text-[var(--c-fg)]" : "text-[var(--c-fg2)]"}`}>
                      {path.title}
                    </div>
                    <div className="font-sans text-xs text-[var(--c-fg3)] tracking-wide">
                      {path.subtitle}
                    </div>
                  </div>
                  {isActive && (
                    <motion.div layoutId="arrow" className="text-[var(--color-lime)]">
                      →
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Content Area */}
          <div className="w-full md:w-2/3">
            <TiltCard intensity={2} className="h-full w-full">
              <div className="glass h-full w-full rounded-[32px] border border-[var(--c-border)] p-8 md:p-12 relative overflow-hidden flex flex-col">
                
                {/* Glow blob */}
                <div 
                  className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-10 pointer-events-none transition-colors duration-700"
                  style={{ background: activePath.accent }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex flex-col h-full"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-6 mb-8">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-black"
                        style={{ background: activePath.accent }}
                      >
                        {activePath.icon}
                      </div>
                      <div>
                        <h3 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter text-[var(--c-fg)] mb-1">
                          {activeContent.title}
                        </h3>
                        <p className="font-sans text-sm tracking-widest text-[var(--c-fg3)] uppercase">
                          {activeContent.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-[var(--c-fg2)] text-lg leading-relaxed mb-8">
                      {activeContent.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-4 mb-12 flex-1">
                      {activeContent.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: activePath.accent }}>
                            <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm-1-14.586l-3.707 3.707 1.414 1.414L10 7.414l5.293 5.293 1.414-1.414L10 4.414l-1 1z" fill="currentColor" opacity="0.2" transform="rotate(180 10 10)"/>
                            <path d="M8.5 14.5l-4-4 1.5-1.5 2.5 2.5 6-6 1.5 1.5-7.5 7.5z" fill="currentColor"/>
                          </svg>
                          <span className="font-sans text-[var(--c-fg2)]">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <motion.button 
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="relative overflow-hidden w-full py-4 rounded-xl font-sans font-bold text-sm uppercase tracking-widest text-black group"
                      style={{ background: activePath.accent }}
                      data-cursor="view"
                    >
                      <div className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                      <span className="relative z-10 text-black flex items-center justify-center gap-2">
                        {activeContent.buttonText}
                      </span>
                    </motion.button>

                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
