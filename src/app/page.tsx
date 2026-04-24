"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/components/ui/ThemeProvider";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import MetalTicker from "@/components/home/MetalTicker";
import ScrollStory from "@/components/home/ScrollStory";
import NumbersThatSpeak from "@/components/home/NumbersThatSpeak";
import ChooseYourPath from "@/components/home/ChooseYourPath";
import SystemModel4x5 from "@/components/home/SystemModel4x5";
import MineralsSection from "@/components/home/MineralsSection";
import EwasteScrollSequence from "@/components/home/EwasteScrollSequence";
import GlobalFootprint from "@/components/home/GlobalFootprint";
import ReadyToCollaborate from "@/components/home/ReadyToCollaborate";
import ImpactPurpose from "@/components/home/ImpactPurpose";

import MaterialOutput from "@/components/home/MaterialOutput";
import IndustriesQuickView from "@/components/home/IndustriesQuickView";
import TechnologySnapshot from "@/components/home/TechnologySnapshot";
import DataCenterBlock from "@/components/home/DataCenterBlock";
import SustainabilityImpact from "@/components/home/SustainabilityImpact";
import PartnersTrust from "@/components/home/PartnersTrust";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="relative w-full min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)]">
      {/* Page Sections */}
      <div>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Impact & Purpose */}
        <ImpactPurpose />

        {/* 3. Partners Trust */}
        <PartnersTrust />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. Technology Snapshot */}
        <TechnologySnapshot />

        {/* 6. Scrollytelling Sequence */}
        <EwasteScrollSequence />

        {/* 7. Minerals Section */}
        <div id="minerals">
          <MineralsSection />
        </div>

        {/* 8. Scrolling Metal Ticker */}
        <MetalTicker />

        {/* 9. Three Waste Streams */}
        <div id="system"><ScrollStory /></div>

        {/* 10. Industries Quick View */}
        <IndustriesQuickView />

        {/* 11. KPI Stats */}
        <NumbersThatSpeak />

        {/* 12. 4x5 System / Business Model */}
        <SystemModel4x5 isDark={isDark} />

        {/* 13. Choose Your Path */}
        <div id="resources">
          <ChooseYourPath />
        </div>

        {/* 14. Global Footprint (Distribution) */}
        <div id="about">
          <GlobalFootprint isDark={isDark} />
        </div>

        {/* 15. CTA / Contact */}
        <ReadyToCollaborate />
      </div>
    </main>
  );
}

