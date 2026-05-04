"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause, Rewind, FastForward } from "lucide-react";

const BLOCKS = [
  {
    num: "01",
    title: "Lithium-Ion Batteries",
    text: "Lithium, cobalt, nickel — recovered from EV and grid storage waste.",
    accent: "#C1FF00",
  },
  {
    num: "02",
    title: "Rare-Earth Magnets",
    text: "Neodymium, dysprosium — extracted from end-of-life turbines & motors.",
    accent: "#C1FF00",
  },
  {
    num: "03",
    title: "PCBs & Electronics",
    text: "Gold, silver, palladium, copper — refined from circuit boards.",
    accent: "#C1FF00",
  },
];

function Block({ block, index }: { block: typeof BLOCKS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col p-8 rounded-[10px] border transition-all hover:-translate-y-1 hover:shadow-xl card-theme"
      style={{
        background: "var(--c-bg2)",
        borderColor: "var(--c-border)",
      }}
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6" style={{ background: "var(--color-lime)20", color: "var(--color-lime)", fontWeight: "bold" }}>
        {block.num}
      </div>
      <h3 className="font-sans font-black text-xl md:text-2xl text-[var(--c-fg)] tracking-tight mb-3">
        {block.title}
      </h3>
      <p className="font-sans text-[var(--c-fg2)] text-base leading-relaxed">
        {block.text}
      </p>
    </motion.div>
  );
}

export default function ImpactPurpose() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.06, 1]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Sync state with video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
    }
  };

  const skip = (amount: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += amount;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newTime = (Number(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-[var(--c-bg)] overflow-hidden py-12">

      {/* ── TOP: Heading ───────────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full border border-[var(--c-border)] bg-[var(--c-bg2)] shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[var(--color-lime)] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[var(--c-fg2)]">
              The world's only integrated extractor
            </span>
          </div>

          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.95] text-4xl md:text-[52px] text-[var(--c-fg)] mb-8">
            The only difference is<br />
            <span className="text-[var(--color-lime)]">who touches it.</span>
          </h2>

          <p className="font-sans text-[var(--c-fg2)] text-lg leading-relaxed max-w-2xl mx-auto">
            Our proprietary LiBERT™ technology recovers 11 critical minerals from three integrated waste streams — a feat no other single-stream specialist can match.
          </p>
        </motion.div>
      </div>


      {/* ── MIDDLE: Grid Cards ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOCKS.map((block, i) => (
            <Block key={block.num} block={block} index={i} />
          ))}
        </div>
      </div>

      {/* ── BOTTOM: Video ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-0">
        <div className="w-full overflow-hidden rounded-[10px] relative group bg-black">
          <motion.div style={{ scale: videoScale }} className="w-full">
            <video
              ref={videoRef}
              src="/WBM/media/WhatweDo.mp4"
              poster="/WBM/media/ThumbnailImg.png"
              playsInline
              className="w-full h-auto block"
              onClick={togglePlay}
            />
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
              >
                <div className="flex items-center gap-6 pointer-events-auto">
                  {/* Rewind */}
                  <button
                    onClick={() => skip(-10)}
                    className="text-white/80 hover:text-[var(--color-lime)] transition-colors p-2"
                    title="Rewind 10s"
                  >
                    <Rewind className="w-8 h-8" />
                  </button>

                  {/* Center Play */}
                  <div 
                    className="w-20 h-20 md:w-28 md:h-28 bg-[var(--color-lime)]/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform"
                    onClick={togglePlay}
                  >
                    <Play className="w-10 h-10 md:w-14 md:h-14 fill-black text-black ml-2" />
                  </div>

                  {/* Fast Forward */}
                  <button
                    onClick={() => skip(10)}
                    className="text-white/80 hover:text-[var(--color-lime)] transition-colors p-2"
                    title="Forward 10s"
                  >
                    <FastForward className="w-8 h-8" />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>


        </div>
      </div>

    </section>
  );
}
