"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function EwasteSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const totalFrames = 192; // 00001.png to 00192.png
  
  // Create an array of image URLs
  const imageUrls = Array.from({ length: totalFrames }, (_, i) => {
    const frameNumber = String(i + 1).padStart(5, "0");
    return `/WBM/media/E-waste_flow_animation/${frameNumber}.png`;
  });

  // Preload all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    imageUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        count++;
        loadedImages[index] = img;
        setLoadedCount(count);
      };
    });

    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Function to draw a specific frame to the canvas
  const drawFrame = (index: number) => {
    if (!canvasRef.current || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    
    // Handle devicePixelRatio for sharp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    // Scale context back to logical pixels so we can draw in logical coordinates
    ctx.scale(dpr, dpr);

    // Ensure clean clear
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Contain fit
    const scale = Math.min(
      window.innerWidth / img.width,
      window.innerHeight / img.height
    );
    
    const x = window.innerWidth / 2 - (img.width / 2) * scale;
    const y = window.innerHeight / 2 - (img.height / 2) * scale;

    // Use smooth image smoothing for premium feel
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // Listen to scroll changes and update canvas via requestAnimationFrame
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (images.length === 0) return;
      
      const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(latest * totalFrames)
      );
      
      requestAnimationFrame(() => drawFrame(frameIndex));
    });

    return () => unsubscribe();
  }, [scrollYProgress, images]);

  // Initial draw and handle resize
  useEffect(() => {
    if (loadedCount > 0) {
      drawFrame(0);
    }
    
    const handleResize = () => {
      if (images.length > 0) {
        const frameIndex = Math.min(
          totalFrames - 1,
          Math.floor(scrollYProgress.get() * totalFrames)
        );
        drawFrame(frameIndex);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loadedCount]);

  // Map scroll progress to text opacity
  // 0% Scroll
  const opacity0 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.15], [0, -30]);

  // 25% Scroll
  const opacity25 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y25 = useTransform(scrollYProgress, [0.15, 0.25, 0.45], [30, 0, -30]);

  // 60% Scroll
  const opacity60 = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y60 = useTransform(scrollYProgress, [0.45, 0.6, 0.8], [30, 0, -30]);

  // 90% Scroll
  const opacity90 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const y90 = useTransform(scrollYProgress, [0.8, 0.9], [30, 0]);

  return (
    <section ref={containerRef} className="relative w-full font-sans tracking-tight bg-[var(--c-bg)] text-[var(--c-fg)] transition-colors duration-300" style={{ height: "400vh" }}>
      
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[var(--c-bg)]">
        
        {/* Loading State */}
        {loadedCount < totalFrames && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[var(--c-bg)]">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin mb-4" />
            <p className="text-[var(--c-fg2)] text-sm font-medium tracking-tight">
              Loading sequence... {Math.round((loadedCount / totalFrames) * 100)}%
            </p>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ width: "100%", height: "100%" }}
        />

        {/* ── Story Text Overlays ── */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
          
          {/* 0% Scroll */}
          <motion.div 
            style={{ opacity: opacity0, y: y0 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <h2 className="section-title font-black tracking-tighter text-[var(--c-fg)] drop-shadow-xl">
              Extraction Sequence.
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-medium text-[var(--c-highlight)] tracking-tight">
              Watch the process unfold.
            </p>
          </motion.div>

          {/* 25% Scroll */}
          <motion.div 
            style={{ opacity: opacity25, y: y25 }}
            className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-24 max-w-2xl"
          >
            <h2 className="section-title font-black tracking-tighter text-[var(--c-fg)] drop-shadow-xl">
              Precision Breakdown.
            </h2>
            <p className="mt-4 text-xl font-medium text-[var(--c-fg2)] tracking-tight">
              Every detail, measured.
            </p>
          </motion.div>

          {/* 60% Scroll */}
          <motion.div 
            style={{ opacity: opacity60, y: y60 }}
            className="absolute inset-0 flex flex-col items-end justify-center text-right px-6 md:px-24"
          >
            <div className="max-w-xl">
              <h2 className="section-title font-black tracking-tighter text-[var(--c-fg)] drop-shadow-xl">
                Layered Engineering.
              </h2>
              <p className="mt-4 text-xl font-medium text-[var(--c-fg2)] tracking-tight">
                See what's inside.
              </p>
            </div>
          </motion.div>

          {/* 90% Scroll */}
          <motion.div 
            style={{ opacity: opacity90, y: y90 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <h2 className="section-title font-black tracking-tighter text-[var(--c-fg)] drop-shadow-xl">
              Minerals Recovered.
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-medium text-[var(--c-highlight)] tracking-tight">
              Scroll back to replay.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
