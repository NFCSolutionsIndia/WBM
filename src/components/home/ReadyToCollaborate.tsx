"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

export default function ReadyToCollaborate() {
  const [intent, setIntent] = useState("Invest");

  return (
    <section className="py-12 w-full bg-[var(--c-bg)] relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-white/5"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[var(--c-fg)]">Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans font-black uppercase tracking-tighter text-[clamp(40px,6vw,72px)] text-[var(--c-fg)] leading-[0.9] mb-6"
          >
            Ready to <span className="text-[var(--color-lime)]">Collaborate?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-[var(--c-fg2)] text-lg"
          >
            Whether you want to invest, supply e-waste, or build a strategic partnership — our team responds within 48 hours.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="glass rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-[var(--c-border)] h-full">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Intent toggle */}
                <div>
                  <label className="block font-sans text-xs font-bold uppercase tracking-widest text-[var(--c-fg3)] mb-3">I want to</label>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {["Invest", "Supply E-Waste", "Partner"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setIntent(opt)}
                        className={`flex-1 min-w-[100px] py-3 px-3 rounded-[10px] font-sans font-bold text-[11px] md:text-sm tracking-wide transition-all ${
                          intent === opt 
                            ? "bg-[var(--color-lime)] text-black" 
                            : "border border-[var(--c-border)] text-[var(--c-fg)] hover:border-[var(--c-fg3)]"
                        }`}
                      >
                        {opt === "Invest" && <span className="mr-1 md:mr-2">↗</span>}
                        {opt === "Supply E-Waste" && <span className="mr-1 md:mr-2">♻</span>}
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-[var(--c-fg3)] mb-2">Full Name *</label>
                    <input type="text" placeholder="Jane Smith" className="w-full bg-[rgba(255,255,255,0.02)] border border-[var(--c-border)] rounded-[10px] px-4 py-3 text-[var(--c-fg)] font-sans focus:outline-none focus:border-[var(--color-lime)] transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-[var(--c-fg3)] mb-2">Email *</label>
                    <input type="email" placeholder="jane@company.com" className="w-full bg-[rgba(255,255,255,0.02)] border border-[var(--c-border)] rounded-[10px] px-4 py-3 text-[var(--c-fg)] font-sans focus:outline-none focus:border-[var(--color-lime)] transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-[var(--c-fg3)] mb-2">Company</label>
                    <input type="text" placeholder="Acme Corp" className="w-full bg-[rgba(255,255,255,0.02)] border border-[var(--c-border)] rounded-[10px] px-4 py-3 text-[var(--c-fg)] font-sans focus:outline-none focus:border-[var(--color-lime)] transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block font-sans text-xs font-bold uppercase tracking-widest text-[var(--c-fg3)] mb-2">Partner Detail</label>
                    <input type="text" placeholder="Your organisation / role" className="w-full bg-[rgba(255,255,255,0.02)] border border-[var(--c-border)] rounded-[10px] px-4 py-3 text-[var(--c-fg)] font-sans focus:outline-none focus:border-[var(--color-lime)] transition-colors text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-xs font-bold uppercase tracking-widest text-[var(--c-fg3)] mb-2">Message</label>
                  <textarea rows={4} placeholder="Describe the partnership opportunity..." className="w-full bg-[rgba(255,255,255,0.02)] border border-[var(--c-border)] rounded-[10px] px-4 py-3 text-[var(--c-fg)] font-sans focus:outline-none focus:border-[var(--color-lime)] transition-colors resize-none text-sm"></textarea>
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden w-full py-4 mt-2 rounded-[10px] font-sans font-bold text-sm uppercase tracking-widest text-black group bg-[var(--color-lime)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  <span className="relative z-10 text-black">Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Info Cards */}
          <div className="w-full lg:w-2/5 flex flex-col gap-2">
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <TiltCard intensity={2} className="h-full">
                <div className="glass rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-[var(--c-border)] h-full flex flex-col">
                  <h3 className="font-sans font-black text-xl text-[var(--c-fg)] mb-8">Contact Information</h3>
                  
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4 text-[var(--c-fg2)]">
                      <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0">
                        ✉
                      </div>
                      <span className="font-sans text-sm md:text-base break-all">hello@wastebaminerals.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-[var(--c-fg2)]">
                      <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0">
                        ☏
                      </div>
                      <span className="font-sans text-sm md:text-base">+1 (800) WASTE-BE</span>
                    </div>
                    <div className="flex items-start gap-4 text-[var(--c-fg2)]">
                      <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <span className="font-sans text-sm md:text-base leading-tight mt-2">Houston TX · Dubai · Mumbai · Johannesburg</span>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-[-8px]"
            >
              <TiltCard intensity={2}>
                <div className="glass rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-[var(--color-orange)]/30 bg-gradient-to-br from-[var(--color-orange)]/5 to-transparent relative overflow-hidden">
                  <div className="absolute top-8 right-8 text-4xl text-[var(--color-orange)] opacity-50">✓</div>
                  <h3 className="font-sans font-black text-4xl md:text-5xl text-[var(--color-orange)] mb-2">48H</h3>
                  <div className="font-sans font-bold text-xs md:text-sm tracking-wide uppercase text-[var(--c-fg)] mb-2">Guaranteed Response</div>
                  <p className="font-sans text-[10px] md:text-xs text-[var(--c-fg3)] leading-relaxed">
                    Our team reviews every inquiry personally and responds within two business days.
                  </p>
                </div>
              </TiltCard>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
