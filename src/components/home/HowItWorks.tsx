"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    metric: "Global Feedstock",
    title: "Feedstock Intake",
    desc: "We accept B-waste (lithium-ion), E-waste (PCBs), and REE magnets from OEMs, recyclers, and government agencies. Chain-of-custody starts the moment it enters our robot-assisted facility.",
    tags: ["OEM Partners", "Recyclers", "Gov Agencies", "Secure Intake"],
    img: "/WBM/media/Step1.png",
  },
  {
    num: "02",
    metric: "AI Orchestration",
    title: "Robot-Assisted Sorting",
    desc: "Our proprietary AI orchestration layer identifies, scans, and sorts mixed waste streams with 99.9% accuracy. Robotic arms prepare the feedstock for the LiBERT™ engine.",
    tags: ["AI Vision", "Robotics", "Mixed Streams", "High Precision"],
    img: "/WBM/media/Step2.jpg",
  },
  {
    num: "03",
    metric: "LiBERT™ Engine",
    title: "Proprietary Extraction",
    desc: "The only difference is who touches it. We extract lithium, cobalt, nickel, and precious metals simultaneously under one roof—with energy savings of 30-40% over traditional mining.",
    tags: ["Hydrometallurgy", "Closed-loop", "Energy Efficient", "Patented"],
    img: "/WBM/media/Step3.jpg",
  },
  {
    num: "04",
    metric: "11/118 Elements",
    title: "Mineral Formation",
    desc: "Extracted minerals are refined to battery-grade purity. Neodymium, dysprosium, gold, and silver are stabilized for the world's most critical supply chains.",
    tags: ["High Purity", "Battery-grade", "Critical Minerals", "REE Recovery"],
    img: "/WBM/media/Step4.png",
  },
  {
    num: "05",
    metric: "World Engine Supply",
    title: "Closed-loop Distribution",
    desc: "From waste to world engines. We supply the minerals that power the next decade of AI chips, EV batteries, and defence platforms, completing the circular economy.",
    tags: ["AI Chips", "EV Batteries", "Defence", "Circular Economy"],
    img: "/WBM/media/Step5.jpg",
  },
];

const StepBlock = ({ step, index, setActiveStep }: { step: any, index: number, setActiveStep: (idx: number) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  // Whenever this block crosses the center of the viewport, we set it as active
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v > 0 && v < 1) {
        setActiveStep(index);
      }
    });
  }, [scrollYProgress, index, setActiveStep]);

  return (
    <div ref={ref} className="min-h-[70vh] py-10 flex flex-col justify-center relative">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ margin: "-10%" }}
        transition={{ duration: 0.6 }}
        className="lg:pr-10 pr-0 relative group"
      >
        <h3 className="font-sans font-medium text-4xl md:text-5xl text-[var(--c-fg)] mb-6 tracking-tight leading-[1.1]">
          {step.title}
        </h3>

        <p className="font-sans text-[var(--c-fg2)] text-xl leading-relaxed mb-10">
          {step.desc}
        </p>

        <div className="flex items-center gap-4">
          <span className="font-sans font-black text-sm text-[var(--c-fg3)]">
            {step.num}
          </span>
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-[var(--color-lime)]">
            {step.metric}
          </span>
        </div>

        {/* Mobile image (only visible on small screens) */}
        <div className="block lg:hidden mt-12 w-full aspect-square relative rounded-[10px] overflow-hidden border border-[var(--c-border)]">
          <Image 
            src={step.img}
            alt={step.title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative w-full bg-[var(--c-bg)]" id="process">
      
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
              The orchestration layer
            </span>
          </div>
          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] text-3xl md:text-[52px] text-[var(--c-fg)] mb-6">
            From Waste to <br/>
            <span className="text-[var(--color-lime)]">World Engines.</span>
          </h2>
          <p className="font-sans text-[var(--c-fg2)] text-lg">
            PCBs, chips, laptops, servers—everything identified and processed under one AI-native roof.
          </p>

        </motion.div>
      </div>

      {/* Scroll Narrative Section */}
      <div className="w-full relative flex flex-col lg:flex-row pb-10">
        
        {/* Left Side: Scrolling Content */}
        <div className="w-full lg:w-1/2 lg:pl-[max(1.5rem,calc((100vw-80rem)/2))] lg:pr-20 px-6 relative z-10">
          {steps.map((step, index) => (
            <StepBlock 
              key={step.num}
              step={step}
              index={index}
              setActiveStep={setActiveStep}
            />
          ))}
        </div>

        {/* Right Side: Sticky Images (Hidden on mobile) */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="sticky top-0 h-screen w-full flex items-center justify-end py-6 pr-6 pl-0">
            <div 
              className="relative w-full h-full bg-[#0a0a0a] overflow-hidden"
              style={{
                clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% calc(50% + 100px), 40px calc(50% + 60px), 40px calc(50% - 60px), 0% calc(50% - 100px), 0% 0%)"
              }}
            >
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={steps[activeStep].img}
                    alt={steps[activeStep].title}
                    fill
                    className="object-cover object-center"
                    priority={activeStep === 0}
                  />
                  {/* Inner shadow/vignette */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
