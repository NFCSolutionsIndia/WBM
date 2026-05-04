"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Button from './Button';

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
  ];

  const menuSections = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'What We Recover', href: '/what-we-do' },
        { name: 'Technology', href: '/technology' },
        { name: 'Process', href: '/process' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Industries', href: '/industries' },
        { name: 'Minerals', href: '/materials' },
        { name: 'Circular Economy', href: '/circular-economy' },
        { name: 'AI Data Centers', href: '/data-centers' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Insights', href: '/insights' },
      ]
    }
  ];

  const allLinks = [
    ...mainLinks,
    ...menuSections.flatMap(s => s.links)
  ];

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
      <div className="pointer-events-auto flex items-center justify-between w-full max-w-[85rem] bg-[var(--c-bg)]/80 backdrop-blur-2xl border border-[var(--c-border)] rounded-full px-3 md:px-6 py-2 md:py-3 shadow-[0_8px_32px_var(--c-shadow)] transition-colors duration-500">
        
        {/* Logo */}
        <Link href="/" className="z-50 relative group flex items-center shrink-0 mr-2 md:mr-4">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <div className="transition-all duration-500">
              <Image 
                src={theme === 'dark' ? "/WBM/WBMLogoWhiteText.png" : "/WBM/WBMLogo.svg"} 
                alt="Waste Be Minerals" 
                width={140} 
                height={35} 
                className="h-[28px] md:h-[34px] w-auto object-contain transition-opacity" 
                style={{ width: 'auto' }}
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
          
          {menuSections.map((section) => (
            <div key={section.title} className="relative group px-4 py-1.5 rounded-full shrink-0 cursor-pointer">
              <span className="relative z-10 text-[12px] font-bold tracking-widest uppercase transition-colors duration-300 text-[var(--c-fg)]/70 flex items-center gap-1 group-hover:text-[var(--c-fg)]">
                {section.title} <ChevronDown size={14} />
              </span>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 w-48">
                <div className="bg-[var(--c-bg)] border border-[var(--c-border)] rounded-2xl shadow-xl overflow-hidden py-2 flex flex-col">
                  {section.links.map((link) => {
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
          ))}
        </div>
 
        {/* Right Section (Theme Toggle + CTA) */}
        <div className="hidden md:flex items-center shrink-0 gap-3">
          <button onClick={toggle} className="p-2 rounded-full border border-[var(--c-border)] text-[var(--c-fg)] hover:bg-[var(--c-fg)]/10 transition-colors">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Button href="/contact" size="sm">
            Contact Us
          </Button>
        </div>
 
        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-1">
          <button onClick={toggle} className="p-1.5 rounded-full text-[var(--c-fg)] hover:bg-[var(--c-fg)]/10 transition-colors">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="z-50 text-[var(--c-fg)] hover:text-[var(--c-lime)] transition-colors p-1.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div animate={{ rotate: mobileMenuOpen ? 90 : 0 }}>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-screen w-screen bg-[#0A0A0A] pointer-events-auto z-[200] flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-8 py-8 border-b border-white/5">
              <Image 
                src="/WBM/WBMLogoWhiteText.png" 
                alt="Waste Be Minerals" 
                width={120} 
                height={30} 
                className="h-9 w-auto object-contain" 
                style={{ width: 'auto' }}
              />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-8 py-10 space-y-12 pb-32">
              {/* Main Sections */}
              <div className="flex flex-col gap-10">
                {/* Hero Link */}
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                  <Link 
                    href="/" 
                    className={`text-3xl font-black transition-colors uppercase tracking-tight ${pathname === '/' ? 'text-[var(--c-lime)]' : 'text-white'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                {menuSections.map((section, idx) => (
                  <motion.div 
                    key={section.title} 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.2 + (idx * 0.1) }}
                    className="flex flex-col gap-4"
                  >
                    <span className="text-[var(--c-lime)] text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">{section.title}</span>
                    <div className="flex flex-col gap-4 border-l border-white/10 pl-6">
                      {section.links.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href} 
                          className={`text-xl font-bold transition-colors uppercase tracking-tight ${pathname === link.href ? 'text-[var(--c-lime)]' : 'text-white/70 hover:text-white'}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Fixed Bottom CTA for visibility */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A] to-transparent pt-12">
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 h-14 bg-[var(--c-lime)] rounded-xl shadow-2xl transition-transform active:scale-95"
                >
                  <span className="font-sans font-black text-sm uppercase tracking-[0.2em] text-black">
                    Contact Us
                  </span>
                  <motion.svg 
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>
                </Link>
              </motion.div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[var(--c-lime)]/5 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
