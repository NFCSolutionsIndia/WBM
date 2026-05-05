"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
    setIsVisible(true);
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      
      // Remove from DOM after fade out
      setTimeout(() => setShouldRender(false), 1000);
    }, 3500); // 3.5 seconds duration

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] overflow-hidden"
        >
          {/* Subtle Glow Background */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.3, 0.1], scale: [0.8, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] bg-[var(--c-highlight)]/20 rounded-full blur-[120px]"
          />

          {/* Logo Container */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative z-10 mb-8"
            >
              <Image
                src="/WBM/WBMLogoWhite.svg"
                alt="WBM Logo"
                width={400}
                height={160}
                className="w-[180px] md:w-[400px] h-auto"
                priority
              />
              
              {/* Logo Glow Effect */}
              <motion.div
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[var(--c-highlight)] blur-2xl -z-10 opacity-30"
              />
            </motion.div>

          </div>

          {/* Particle Animation Background (Subtle) */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: Math.random() * 100 + "%",
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, "-100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2, 
                  repeat: Infinity, 
                  delay: Math.random() * 2 
                }}
                className="absolute w-1 h-1 bg-[var(--c-highlight)] rounded-full"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
