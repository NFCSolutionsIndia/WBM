"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── Nav link data ──────────────────────────────────────────────────────── */
const COL_SYSTEM = [
  { label: "How It Works",      href: "#process" },
  { label: "Minerals",          href: "#minerals" },
  { label: "Global Footprint",  href: "#about" },
  { label: "Business Model",    href: "#system" },
];
const COL_COMPANY = [
  { label: "About",             href: "#about" },
  { label: "Resources",         href: "#resources" },
  { label: "Contact",           href: "#contact" },
  { label: "Invest",            href: "#contact" },
];

/* ─── SVG path definitions (from user's SVG) ────────────────────────────── */
const PATHS = [
  {
    id: "p1",
    d: "M 608.4,0 L 608.4,114.85 A 50,50 0 0 1 558.4,164.85 L 430.25,164.85 L 202.1,164.85 A 50,50 0 0 0 152.1,214.85 L 152.1,529.45 A 25.5,25.5 0 0 1 106.38,544.99 L 0,406.63",
    len: 1180,
    dotLen: 11.8,
    startOffset: -78,
    duration: 4,
    delay: 0,
  },
  {
    id: "p2",
    d: "M 912.6,0 L 912.6,202.77 A 50,50 0 0 0 962.6,252.77 L 1318.9,252.77 A 50,50 0 0 1 1368.9,302.77 L 1368.9,444.55 A 50,50 0 0 0 1418.9,494.55 L 1521,494.55",
    len: 1038,
    dotLen: 10.4,
    startOffset: -821,
    duration: 5,
    delay: 1,
  },
  {
    id: "p3",
    d: "M 1521,879.2 L 1382.46,729.05 A 45.67,45.67 0 0 0 1348.9,714.35 L 1038.65,714.35 A 50,50 0 0 0 988.65,764.35 L 988.65,1099",
    len: 965,
    dotLen: 9.7,
    startOffset: -63,
    duration: 4.5,
    delay: 0.5,
  },
  {
    id: "p4",
    d: "M 0,714.35 L 336.3,714.35 A 58.09,58.09 0 0 1 381.86,808.47 L 152.1,1099",
    len: 836,
    dotLen: 8.4,
    startOffset: -661,
    duration: 3.5,
    delay: 1.5,
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function Footer() {
  const dotRefs = useRef<(SVGPathElement | null)[]>([]);

  /* Animate the traveling dots */
  useEffect(() => {
    dotRefs.current.forEach((el, i) => {
      if (!el) return;
      const p = PATHS[i];
      gsap.fromTo(
        el,
        { strokeDashoffset: p.startOffset },
        {
          strokeDashoffset: p.startOffset - p.len,
          duration: p.duration,
          delay: p.delay,
          ease: "none",
          repeat: -1,
        }
      );
    });
  }, []);

  return (
    <footer className="relative w-full bg-[#0d1a14] overflow-hidden">

      {/* ── Animated SVG circuit lines ─────────────────────────────────── */}
      <svg
        viewBox="0 0 1521 1099"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="footer-blur">
            <feGaussianBlur stdDeviation="17" />
          </filter>
        </defs>

        {PATHS.map((p, i) => (
          <g key={p.id}>
            {/* Ghost track */}
            <path
              d={p.d}
              stroke="#A2A2A2"
              fill="none"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
            {/* Traveling dot */}
            <path
              ref={(el) => { dotRefs.current[i] = el; }}
              d={p.d}
              fill="none"
              stroke="#C1FF00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${p.dotLen}, ${p.len}`}
              strokeDashoffset={p.startOffset}
            />
          </g>
        ))}
      </svg>

      {/* ── Top CTA block ──────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-10 md:py-12 border-b border-white/5">
        
        {/* Decorative rounded rectangles (like the reference) */}
        <div className="absolute top-10 left-10 w-32 h-20 rounded-[10px] border border-white/5 pointer-events-none hidden lg:block" />
        <div className="absolute top-16 right-16 w-24 h-16 rounded-[10px] border border-white/5 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-24 left-20 w-16 h-24 rounded-[10px] border border-white/5 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-20 right-12 w-28 h-20 rounded-[10px] border border-white/5 pointer-events-none hidden lg:block" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <div className="w-2 h-2 rounded-full bg-[#C1FF00] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-white/70">
              Join the Circular Economy
            </span>
          </div>

          <h2 className="font-sans font-black text-3xl md:text-[52px] text-white uppercase tracking-tighter leading-[0.9] mb-10 max-w-4xl mx-auto">
            READY WHEN <br />
            <span className="text-[#C1FF00]">YOU ARE.</span>
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-white font-sans font-bold text-xs uppercase tracking-[0.25em] hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            data-cursor="view"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>

      {/* ── Footer bottom bar ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-white/5">

        {/* Tagline / Socials */}
        <div className="col-span-2 md:col-span-1">
          <Image 
            src="/WBM/WBMLogoWhiteText.png" 
            alt="Waste BE Minerals" 
            width={180} 
            height={60} 
            className="w-auto h-12 mb-6" 
            style={{ width: 'auto' }}
          />
          <p className="font-sans text-xs text-white/30 leading-relaxed max-w-[250px]">
            Trash to Treasure. Recover. Reuse. Reimagine. The world's only integrated extractor for critical minerals.
          </p>

          <div className="flex gap-3 mt-6">
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C1FF00] hover:border-[#C1FF00]/30 transition-colors font-bold text-sm">in</a>
            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#C1FF00] hover:border-[#C1FF00]/30 transition-colors font-bold text-sm">𝕏</a>
          </div>
        </div>

        {/* System column */}
        <div>
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5">System</h4>
          <ul className="space-y-3">
            {COL_SYSTEM.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div>
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5">Company</h4>
          <ul className="space-y-3">
            {COL_COMPANY.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach Us column */}
        <div>
          <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.25em] text-white/40 mb-5">Reach Us</h4>
          <p className="font-sans text-sm text-white/60 mb-4 leading-relaxed">
            Ready for a world without<br />e-waste?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest text-[#C1FF00] hover:gap-3 transition-all duration-200"
          >
            Get in touch
          </a>
          <div className="mt-6 space-y-2">
            <div className="font-sans text-xs text-white/30">hello@wastebeminerals.com</div>
            <div className="font-sans text-xs text-white/30">Houston · Dubai · Mumbai</div>
          </div>
        </div>
      </div>

      {/* ── Legal bar ──────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-sans text-[11px] text-white/20">
          © {new Date().getFullYear()} Waste BE Minerals. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a href="#" className="font-sans text-[11px] text-white/20 hover:text-white/50 transition-colors">Privacy Policy</a>
          <a href="#" className="font-sans text-[11px] text-white/20 hover:text-white/50 transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
