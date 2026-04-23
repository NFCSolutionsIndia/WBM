"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const CARD_W = 580;
const CARD_H = 360;

const numbers = [
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M4 14a8 8 0 0 1 15-3"/><path d="M19 11v3h-3"/><path d="M20 10a8 8 0 0 0-15 3"/><path d="M5 13v-3h3"/></svg>, value: "98.7%",      title: "AI Accuracy Rate",       desc: "Material identification precision across every waste stream",   accent: "#B2C582" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="12" x2="8" y2="17"/><line x1="12" y1="10" x2="12" y2="17"/><line x1="16" y1="14" x2="16" y2="17"/></svg>, value: "50,000 T/YR", title: "Plant Capacity",          desc: "Annual processing throughput at full operational capacity",   accent: "#FF6B35" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,                                                                                                                                                                   value: "99.9%",      title: "Mineral Purity",         desc: "Industry-grade output quality certified for immediate use",    accent: "#B2C582" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,                                                                                                                                                      value: "0 L",        title: "Liquid Discharge",       desc: "Zero liquid waste — fully closed-loop hydromet process",       accent: "#7ECCD6" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,                                                                                                                                        value: "24/7",       title: "Operational Hours",      desc: "Continuous AI-monitored operation with zero downtime targets",  accent: "#FF6B35" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 8h8v8H8z"/></svg>,                                                                                                                                    value: "48",         title: "Robotic Arms",           desc: "AI-guided robotic sorting systems operating in unison",         accent: "#B2C582" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,                                                                                                                      value: "3.4×",       title: "Annual Revenue Growth",  desc: "Year-over-year expansion across all revenue streams",           accent: "#FF6B35" },
  { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,                                                                                                                                                   value: "12,000+",    title: "Carbon Credits/yr",      desc: "Certified emissions offsets generated annually",                accent: "#B2C582" },
];

const highlights = [
  { label: "Facility Capacity", value: "50,000 T/YR" },
  { label: "Mineral Purity",    value: "99.9%" },
  { label: "AI Accuracy",       value: "98.7%" },
  { label: "Countries Served",  value: "40+" },
];

// Final stack position for card at index i (0 = front/top, n-1 = back)
const stackPos = (i: number) => ({
  x: i * 35,
  y: -i * 24,
  rotate: -i * 2,
  zIndex: numbers.length - i,
});

export default function NumbersThatSpeak() {
  const sectionRef  = useRef<HTMLElement>(null);
  const stickyRef   = useRef<HTMLDivElement>(null);
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const ctxRef      = useRef<gsap.Context | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ctxRef.current = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const n = cards.length;

      // Place all cards below the viewport initially
      cards.forEach((card, i) => {
        const pos = stackPos(i);
        gsap.set(card, {
          x: pos.x,
          y: "110vh",
          rotate: pos.rotate - 12,
          opacity: 0,
          zIndex: pos.zIndex,
          force3D: true,
        });
      });

      // One scrubbed timeline spanning the full section scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      // Cards enter back-to-front: card[n-1] first, card[0] last
      const segDur   = 1 / n;          // fraction of total timeline per card
      const animDur  = segDur * 0.75;  // how long each card's animation takes

      for (let enterOrder = 0; enterOrder < n; enterOrder++) {
        const cardIdx = n - 1 - enterOrder; // back first → front last
        const pos     = stackPos(cardIdx);
        const startAt = enterOrder * segDur;

        tl.to(
          cards[cardIdx],
          {
            y: pos.y,
            opacity: 1,
            rotate: pos.rotate,
            duration: animDur,
            ease: "power3.out",
          },
          startAt,
        );
      }
    }, sectionRef);

    return () => ctxRef.current?.revert();
  }, []);

  return (
    // Height = (numCards + 2) × 100vh  →  provides scroll room for the animation
    <section
      ref={sectionRef}
      style={{ height: `${(numbers.length + 2) * 100}vh` }}
      className="relative bg-[#080808]"
    >
      {/* Top curved cap */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[var(--c-bg)] rounded-b-[56px] z-30 pointer-events-none" />

      {/* Sticky viewport */}
      <div
        ref={stickyRef}
        style={{ position: "sticky", top: 0, height: "100vh" }}
        className="relative overflow-hidden"
      >
        {/* Background image — flipped horizontally */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/BackgroundImgHero.png"
            alt="Facility background"
            fill
            className="object-cover"
            style={{ transform: "scaleX(-1)" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        {/* Bottom curved cap */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[var(--c-bg2)] rounded-t-[56px] z-30 pointer-events-none" />

        {/* Two-column content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center w-full h-full max-w-7xl mx-auto px-6 gap-12">

          {/* ── LEFT: heading + stats ── */}
          <div className="w-full lg:w-1/2 lg:pr-8 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#B2C582]" />
                <span className="font-sans font-bold text-xs uppercase tracking-[0.3em] text-[#B2C582]">
                  Performance Metrics
                </span>
              </div>

              <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.88] text-[clamp(44px,6vw,80px)] text-white mb-8">
                Numbers<br />
                <span style={{ color: "#B2C582" }}>That Speak</span>
              </h2>

              <p className="font-sans text-white/50 text-lg leading-relaxed mb-14 max-w-md">
                Our AI-powered facility delivers industry-leading performance across every metric — from recovery rates to environmental compliance.
              </p>

              <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                {highlights.map((h) => (
                  <div key={h.label} className="p-6 bg-black/30 backdrop-blur-sm">
                    <div className="font-sans font-black text-3xl text-[#B2C582] tracking-tighter mb-1">
                      {h.value}
                    </div>
                    <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
                      {h.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: card stack ── */}
          <div className="w-full lg:w-1/2 flex items-center justify-center" style={{ height: "100%" }}>
            {/* Anchor for the absolute-positioned cards */}
            <div style={{ position: "relative", width: CARD_W, height: CARD_H }}>
              {numbers.map((num, i) => (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: CARD_W,
                    height: CARD_H,
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(10,10,10,0.88)",
                    backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)",
                    overflow: "hidden",
                    willChange: "transform",
                  }}
                >
                  {/* Card content */}
                  <div className="w-full h-full flex flex-col justify-between p-8 relative">
                    {/* Top Row: Icon */}
                    <div>
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10"
                        style={{ background: "rgba(255,255,255,0.03)", color: num.accent }}>
                        {num.icon}
                      </div>
                    </div>

                    {/* Bottom Row: Text */}
                    <div>
                      <div className="font-sans font-black text-5xl tracking-tighter mb-2" style={{ color: num.accent }}>
                        {num.value}
                      </div>
                      <div className="font-sans font-bold text-sm tracking-[0.25em] uppercase text-white/80 mb-3">
                        {num.title}
                      </div>
                      <p className="font-sans text-white/50 text-base leading-relaxed max-w-[85%]">
                        {num.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
