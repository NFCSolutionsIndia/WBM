"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SequenceScroll() {
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
    
    // Make sure canvas internal resolution matches screen size
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Contain fit
    const scale = Math.min(
      window.innerWidth / img.width,
      window.innerHeight / img.height
    );
    
    const x = window.innerWidth / 2 - (img.width / 2) * scale;
    const y = window.innerHeight / 2 - (img.height / 2) * scale;

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
  const opacity0 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // 25% Scroll
  const opacity25 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const y25 = useTransform(scrollYProgress, [0.15, 0.25, 0.45], [50, 0, -50]);

  // 60% Scroll
  const opacity60 = useTransform(scrollYProgress, [0.45, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y60 = useTransform(scrollYProgress, [0.45, 0.6, 0.8], [50, 0, -50]);

  // 90% Scroll
  const opacity90 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);
  const y90 = useTransform(scrollYProgress, [0.8, 0.9], [50, 0]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#000000] text-white" style={{ height: "400vh" }}>
      
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Loading State */}
        {loadedCount < totalFrames && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#000000]">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4" />
            <p className="text-white/60 font-mono text-sm uppercase tracking-widest">
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

        {/* ── Text Overlays ── */}
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          
          {/* 0% Scroll */}
          <motion.div 
            style={{ opacity: opacity0, y: y0 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg">
              Trash to Treasure.
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-medium text-white/70 tracking-tight">
              AI-Native Mineral Extraction.
            </p>
          </motion.div>

          {/* 25% Scroll */}
          <motion.div 
            style={{ opacity: opacity25, y: y25 }}
            className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:px-24 max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-lg">
              Built for Precision.
            </h2>
            <p className="mt-4 text-lg md:text-xl font-medium text-white/70 tracking-tight max-w-md">
              Every detail, measured. From e-waste to raw elements.
            </p>
          </motion.div>

          {/* 60% Scroll */}
          <motion.div 
            style={{ opacity: opacity60, y: y60 }}
            className="absolute inset-0 flex flex-col items-end justify-center text-right px-6 md:px-24"
          >
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-lg">
                Layered Engineering.
              </h2>
              <p className="mt-4 text-lg md:text-xl font-medium text-white/70 tracking-tight">
                See what's inside. Uncovering 11 critical minerals.
              </p>
            </div>
          </motion.div>

          {/* 90% Scroll */}
          <motion.div 
            style={{ opacity: opacity90, y: y90 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg">
              Assembled. Ready.
            </h2>
            <p className="mt-4 text-xl md:text-2xl font-medium text-white/70 tracking-tight">
              Scroll back to replay the extraction.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
