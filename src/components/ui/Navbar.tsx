"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Industries', href: '/industries' },
  ];

  const exploreLinks = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Materials', href: '/materials' },
    { name: 'Technology', href: '/technology' },
    { name: 'Partners', href: '/partners' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Data Centers', href: '/data-centers' },
  ];

  const allLinks = [...mainLinks, ...exploreLinks];

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 left-0 w-full z-[100] px-4 md:px-8 flex justify-center pointer-events-none"
    >
      {/* Floating Dock */}
      <div className="pointer-events-auto flex items-center justify-between w-full max-w-[85rem] bg-[var(--c-bg)]/80 backdrop-blur-2xl border border-[var(--c-border)] rounded-full px-4 md:px-6 py-3 shadow-[0_8px_32px_var(--c-shadow)] transition-colors duration-500">
        
        {/* Logo */}
        <Link href="/" className="z-50 relative group flex items-center shrink-0 mr-4">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <div className="dark:invert transition-all duration-500">
              <Image 
                src="/WBM/WBMLogo.svg" 
                alt="Waste Be Minerals" 
                width={140} 
                height={35} 
                className="h-[26px] md:h-[34px] w-auto object-contain transition-opacity" 
                priority 
              />
            </div>
          </motion.div>
        </Link>
        
        {/* Links */}
        <div className="hidden xl:flex items-center justify-center gap-1.5 bg-[var(--c-fg)]/5 px-2 py-1.5 rounded-full border border-[var(--c-border)]">
          {mainLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className="relative group px-4 py-1.5 rounded-full overflow-hidden shrink-0">
                <span className={`relative z-10 text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-[var(--c-bg)]' : 'text-[var(--c-fg)]/70 group-hover:text-[var(--c-bg)]'}`}>
                  {link.name}
                </span>
                <div className={`absolute inset-0 bg-[var(--c-fg)] transition-transform duration-300 ease-in-out z-0 ${isActive ? 'translate-y-0' : 'translate-y-[100%] group-hover:translate-y-0'}`} />
              </Link>
            );
          })}
          
          {/* Explore Dropdown */}
          <div className="relative group px-4 py-1.5 rounded-full shrink-0 cursor-pointer">
            <span className="relative z-10 text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 text-[var(--c-fg)]/70 flex items-center gap-1 group-hover:text-[var(--c-fg)]">
              Explore <ChevronDown size={14} />
            </span>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 w-48">
              <div className="bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl shadow-xl overflow-hidden py-2 flex flex-col">
                {exploreLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link key={link.name} href={link.href} className={`px-4 py-2.5 text-[11px] font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-[var(--c-lime)] bg-[var(--c-fg)]/5' : 'text-[var(--c-fg)]/70 hover:text-[var(--c-fg)] hover:bg-[var(--c-fg)]/5'}`}>
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Theme Toggle + CTA) */}
        <div className="hidden md:flex items-center shrink-0 gap-3">
          <button onClick={toggle} className="p-2 rounded-full border border-[var(--c-border)] text-[var(--c-fg)] hover:bg-[var(--c-fg)]/10 transition-colors">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/contact">
            <motion.button 
              className="relative overflow-hidden rounded-full shadow-[0_0_15px_rgba(193,255,0,0.1)] group border border-[var(--c-border)] bg-[var(--c-bg)] flex items-center h-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 w-full h-full bg-[var(--c-lime)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <div className="relative z-10 px-5 flex items-center gap-2">
                <span className="font-bold text-[11px] uppercase tracking-wider text-[var(--c-fg)] group-hover:text-black transition-colors duration-300">
                  Contact Us
                </span>
                <motion.div 
                  className="w-5 h-5 rounded-full bg-[var(--c-fg)]/10 flex items-center justify-center group-hover:bg-black/10 transition-colors"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--c-fg)] group-hover:text-black transition-colors">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </motion.div>
              </div>
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-2">
          <button onClick={toggle} className="p-2 rounded-full text-[var(--c-fg)] hover:bg-[var(--c-fg)]/10 transition-colors">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="z-50 text-[var(--c-fg)] hover:text-[var(--c-lime)] transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-screen w-screen bg-[var(--c-bg)]/98 backdrop-blur-2xl pointer-events-auto z-40 pt-28 px-6 flex flex-col gap-4 border-b border-[var(--c-border)] overflow-y-auto pb-12"
          >
            {allLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div key={link.name} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 * i }}>
                  <Link 
                    href={link.href} 
                    className={`text-2xl font-black transition-colors flex items-center gap-3 uppercase tracking-tight ${isActive ? 'text-[var(--c-lime)]' : 'text-[var(--c-fg)] hover:text-[var(--c-lime)]'}`} 
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[var(--c-lime)] shadow-[0_0_10px_var(--c-lime)]' : 'bg-transparent'}`} /> {link.name}
                  </Link>
                </motion.div>
              );
            })}
            
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="flex items-center gap-0 overflow-hidden rounded-xl shadow-[0_0_30px_rgba(193,255,0,0.2)] w-full">
                  <div className="bg-[var(--c-lime)] text-black px-6 py-4 font-black text-lg uppercase tracking-widest transition-colors flex-1 text-center">
                    Contact Us
                  </div>
                  <div className="bg-white text-black px-5 py-4 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
