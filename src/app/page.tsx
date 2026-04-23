"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomCursor from "@/components/ui/CustomCursor";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import MetalTicker from "@/components/home/MetalTicker";
import ScrollStory from "@/components/home/ScrollStory";
import NumbersThatSpeak from "@/components/home/NumbersThatSpeak";
import ChooseYourPath from "@/components/home/ChooseYourPath";
import SystemModel4x5 from "@/components/home/SystemModel4x5";
import MineralsSection from "@/components/home/MineralsSection";
import GlobalFootprint from "@/components/home/GlobalFootprint";
import ReadyToCollaborate from "@/components/home/ReadyToCollaborate";
import Footer from "@/components/home/Footer";
import ImpactPurpose from "@/components/home/ImpactPurpose";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <main className="relative w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)]">
      <CustomCursor />

      {/* Floating Pill Nav */}
      <nav
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full w-[95%] max-w-4xl"
        style={{
          background: "white",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex items-center gap-3">
          <Image src="/WBM/Waste-be-minerals-Logo-600x195.webp" alt="Waste Be Minerals" width={200} height={65} className="h-8 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-5">
          {["System", "Minerals", "Resources", "About"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-sans text-sm font-medium hover:text-[var(--color-lime)] transition-colors duration-200 text-[var(--c-fg2)]"
            >
              {l}
            </a>
          ))}

          {/* Theme Toggle */}
          <div className="checkbox-wrapper-5 flex items-center justify-center border-l border-white/10 pl-4">
            <div className="check">
              <input
                id="check-5"
                type="checkbox"
                checked={isDark}
                onChange={(e) => setIsDark(e.target.checked)}
              />
              <label htmlFor="check-5"></label>
            </div>
          </div>

          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full text-black ml-1"
            style={{ background: "var(--color-lime)" }}
          >
            Contact
          </motion.a>
        </div>
      </nav>

      {/* Page Sections — no top padding, hero fills viewport */}
      <div>
        {/* 1. Hero */}
        <HeroSection />

        {/* Impact & Purpose (Video + Scroll Story) */}
        <ImpactPurpose />

        {/* 2. How It Works - Sticky Scroll */}
        <HowItWorks />

        {/* 3. Scrolling Metal Ticker */}
        <MetalTicker />

        {/* 4. Three Waste Streams — ScrollStory */}
        <div id="system"><ScrollStory /></div>

        {/* 4. KPI Stats */}
        <NumbersThatSpeak />

        {/* 5. Who Are You — Segment Selector */}
        <div id="resources"><ChooseYourPath /></div>

        {/* 6. 4×5 System / Business Model */}
        <SystemModel4x5 isDark={isDark} />

        {/* 7. Minerals — Periodic Table */}
        <div id="minerals"><MineralsSection /></div>

        {/* 8. Global Footprint */}
        <div id="about"><GlobalFootprint isDark={isDark} /></div>

        {/* 9. CTA / Contact */}
        <ReadyToCollaborate />

        {/* 10. Footer */}
        <Footer />
      </div>
    </main>
  );
}

