import React from 'react';
import HeroSection from '../sections/HeroSection';
import VideoSection from '../sections/VideoSection';
import AboutSection from '../sections/AboutSection';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import ProcessSection from '../sections/ProcessSection';
import IndustriesSection from '../sections/IndustriesSection';
import SolutionsSection from '../sections/SolutionsSection';
import SustainabilitySection from '../sections/SustainabilitySection';
import OperationalSection from '../sections/OperationalSection';
import InsightsSection from '../sections/InsightsSection';
import ContactSection from '../sections/ContactSection';
import CTASection from '../sections/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <CapabilitiesSection />
      <CTASection />
      <ProcessSection />
      <IndustriesSection />
      <SolutionsSection />
      <SustainabilitySection />
      <OperationalSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
};

export default Home;
