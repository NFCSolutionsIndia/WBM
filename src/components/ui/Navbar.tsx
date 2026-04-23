"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
            <span className="text-[#C19A33]">WASTE</span> BE MINERALS
            <span className="text-xs align-top text-[#2E8B57] ml-1">.ai</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Platform', 'Minerals', 'AI Data Centre', 'Circular Loop', 'For You', 'Insights'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm font-medium text-gray-700 hover:text-[#C19A33] transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="#contact"
            className="px-5 py-2 rounded-full bg-[#111827] text-white text-sm font-medium hover:bg-[#C19A33] hover:text-white transition-all transform hover:scale-105"
          >
            Partner With Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 h-screen bg-white pt-24 px-6 md:hidden flex flex-col gap-6"
            >
              {['Platform', 'Minerals', 'AI Data Centre', 'Circular Loop', 'For You', 'Insights'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-2xl font-bold text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link 
                href="#contact"
                className="mt-4 px-6 py-4 rounded-xl bg-[#C19A33] text-white text-center text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner With Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
