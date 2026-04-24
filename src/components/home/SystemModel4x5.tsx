"use client";

import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Data & Connections ───────────────────────────────────────────────────── */
const OFFERINGS = [
  { id: "ewaste",  label: "E-Waste",         short: "EW",    accent: "#C1FF00", icon: "♻", desc: "PCBs, chips, laptops, servers — extracted under one roof." },
  { id: "bwaste",  label: "B-Waste",         short: "BW",    accent: "#FF6B35", icon: "⚡", desc: "Lithium-ion only. No acid-filled. Closed-loop chemistry." },
  { id: "ree",     label: "REE Magnets",     short: "REE",   accent: "#7ECCD6", icon: "🧲", desc: "Rare-earth magnets from MRIs, wind turbines, decommissioned units." },
  { id: "aidc",    label: "AI Data Centres", short: "AI-DC", accent: "#C1FF00", icon: "🖥", desc: "Co-located, multi-tenant, 6-layer encryption, 100% uptime." },
];

const REVENUES = [
  { id: "tipping",   num: "01", title: "Tipping Fees",        desc: "Government-paid intake fees. Revenue earned the moment feedstock arrives." },
  { id: "crushed",   num: "02", title: "Crushed Powders",     desc: "Aluminium powder → aluminium mfrs. Plastic powder → plastic mfrs." },
  { id: "minerals",  num: "03", title: "Extracted Minerals",  desc: "The core 11 — sold to OEM off-take partners worldwide." },
  { id: "carbon",    num: "04", title: "Carbon Credits",      desc: "Landfill diversion + on-site renewables. Verified, auditable, tradeable." },
  { id: "leasing",   num: "05", title: "Data Centre Leasing", desc: "15-year leases. 100% uptime. 6-layer encryption. NVIDIA-ready." },
];

const MINERALS = [
  { id: "au", symbol: "Au", name: "Gold",       group: "precious" },
  { id: "ag", symbol: "Ag", name: "Silver",     group: "precious" },
  { id: "cu", symbol: "Cu", name: "Copper",     group: "precious" },
  { id: "pd", symbol: "Pd", name: "Palladium",  group: "precious" },
  { id: "li", symbol: "Li", name: "Lithium",    group: "critical" },
  { id: "co", symbol: "Co", name: "Cobalt",     group: "critical" },
  { id: "ni", symbol: "Ni", name: "Nickel",     group: "critical" },
  { id: "al", symbol: "Al", name: "Aluminium",  group: "critical" },
  { id: "pb", symbol: "Pb", name: "Lead",       group: "critical" },
  { id: "dy", symbol: "Dy", name: "Dysprosium", group: "ree" },
  { id: "nd", symbol: "Nd", name: "Neodymium",  group: "ree" },
];

/* Which offerings connect to which revenues, and which minerals each revenue produces */
const OFF_TO_REV: Record<string, string[]> = {
  ewaste: ["tipping", "crushed", "minerals", "carbon"],
  bwaste: ["tipping", "crushed", "minerals", "carbon"],
  ree:    ["tipping", "crushed", "minerals", "carbon"],
  aidc:   ["tipping", "leasing", "carbon"],
};
const REV_TO_MIN: Record<string, string[]> = {
  tipping:  [],
  crushed:  ["al", "pb"],
  minerals: ["au", "ag", "cu", "pd", "li", "co", "ni", "al", "pb", "dy", "nd"],
  carbon:   [],
  leasing:  [],
};

/* ─── Helper to compute active sets ──────────────────────────────────────── */
function getActive(hoveredOffering: string | null) {
  if (!hoveredOffering) return { revs: new Set<string>(), mins: new Set<string>() };
  const revs = new Set(OFF_TO_REV[hoveredOffering] ?? []);
  const mins = new Set<string>();
  revs.forEach(r => REV_TO_MIN[r]?.forEach(m => mins.add(m)));
  return { revs, mins };
}

/* ─── Animated SVG curved connection lines ────────────────────────────────── */
interface LineProps { from: DOMRect | null; to: DOMRect | null; color: string; container: DOMRect | null; }
function CurvedLine({ from, to, color, container }: LineProps) {
  if (!from || !to || !container) return null;
  const x1 = from.right  - container.left;
  const y1 = from.top    + from.height / 2 - container.top;
  const x2 = to.left     - container.left;
  const y2 = to.top      + to.height / 2 - container.top;
  const cx1 = x1 + (x2 - x1) * 0.4;
  const cx2 = x1 + (x2 - x1) * 0.6;
  const d   = `M${x1},${y1} C${cx1},${y1} ${cx2},${y2} ${x2},${y2}`;
  return (
    <motion.path
      d={d} fill="none" stroke={color}
      strokeWidth="1.5" strokeLinecap="round"
      strokeOpacity="0.7"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ pathLength: 0, opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    />
  );
}

/* ─── Main Component ──────────────────────────────────────────────────────── */
export default function SystemModel4x5({ isDark = true }: { isDark?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const { revs: activeRevs, mins: activeMins } = getActive(hovered);

  /* Refs for measuring elements (for SVG lines) */
  const containerRef  = useRef<HTMLDivElement>(null);
  const offeringRefs  = useRef<Record<string, HTMLDivElement | null>>({});
  const revenueRefs   = useRef<Record<string, HTMLDivElement | null>>({});
  const mineralRefs   = useRef<Record<string, HTMLDivElement | null>>({});
  const [rects, setRects] = useState<{ offerings: Record<string, DOMRect>; revenues: Record<string, DOMRect>; minerals: Record<string, DOMRect>; container: DOMRect | null }>({ offerings: {}, revenues: {}, minerals: {}, container: null });

  const measureRects = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const offerings: Record<string, DOMRect> = {};
    const revenues:  Record<string, DOMRect> = {};
    const minerals:  Record<string, DOMRect> = {};
    Object.entries(offeringRefs.current).forEach(([k, el]) => { if (el) offerings[k] = el.getBoundingClientRect(); });
    Object.entries(revenueRefs.current).forEach(([k, el])  => { if (el) revenues[k]  = el.getBoundingClientRect(); });
    Object.entries(mineralRefs.current).forEach(([k, el])  => { if (el) minerals[k]  = el.getBoundingClientRect(); });
    setRects({ offerings, revenues, minerals, container });
  }, []);

  useLayoutEffect(() => { measureRects(); }, [measureRects]);

  /* Active offering accent color */
  const activeOffering = OFFERINGS.find(o => o.id === hovered);
  const lineColor = activeOffering?.accent ?? "#C1FF00";

  /* Opacity helpers */
  const offOp  = (id: string) => !hovered || hovered === id ? 1 : 0.2;
  const revOp  = (id: string) => !hovered || activeRevs.has(id) ? 1 : 0.2;
  const minOp  = (id: string) => !hovered || activeMins.has(id) ? 1 : 0.2;

  /* Styles based on theme */
  const bg   = isDark ? "#0d0d0d" : "#F6F1E7";
  const card = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.09)";
  const fg   = isDark ? "#ffffff" : "#0a0a0a";
  const fg2  = isDark ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)";
  const fg3  = isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.2)";

  const cardStyle = (opacity: number, glow?: boolean, accent?: string) => ({
    background: card,
    border: `1px solid ${glow && accent ? accent + "60" : border}`,
    borderRadius: 14,
    opacity,
    transition: "opacity 0.35s ease, box-shadow 0.35s ease, transform 0.25s ease",
    boxShadow: glow && accent ? `0 0 18px ${accent}30` : isDark ? "0 2px 12px rgba(0,0,0,0.3)" : "0 2px 12px rgba(0,0,0,0.07)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  });

  return (
    <section style={{ background: bg }} className="w-full py-12 relative overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full" style={{ border: `1px solid ${border}`, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)" }}>
          <div className="w-2 h-2 rounded-full bg-[#C1FF00] animate-pulse" />
          <span className="font-sans font-bold text-xs uppercase tracking-[0.25em]" style={{ color: fg2 }}>Revenue Model</span>
        </div>
        <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] text-[clamp(32px,5vw,60px)]" style={{ color: fg }}>
          How We <span style={{ color: isDark ? "#C1FF00" : "#1A4D2E" }}>Generate Revenue</span>
        </h2>
        <p className="font-sans text-base mt-3 max-w-xl mx-auto" style={{ color: fg2 }}>
          Hover any offering to reveal its connected revenue streams and output minerals.
        </p>
      </div>

      {/* 3-column interactive grid */}
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-6">

        {/* SVG overlay for connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: "visible" }}>
          <AnimatePresence>
            {hovered && OFF_TO_REV[hovered]?.map(revId => (
              <CurvedLine
                key={`off-${hovered}-${revId}`}
                from={rects.offerings[hovered] ?? null}
                to={rects.revenues[revId] ?? null}
                color={lineColor}
                container={rects.container ?? null}
              />
            ))}
            {hovered && OFF_TO_REV[hovered]?.map(revId =>
              REV_TO_MIN[revId]?.map(minId => (
                <CurvedLine
                  key={`rev-${revId}-${minId}`}
                  from={rects.revenues[revId] ?? null}
                  to={rects.minerals[minId] ?? null}
                  color={lineColor}
                  container={rects.container ?? null}
                />
              ))
            )}
          </AnimatePresence>
        </svg>

        <div className="grid grid-cols-3 gap-8 relative z-20">

          {/* ── LEFT: Offerings ── */}
          <div>
            <div className="mb-4">
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em]" style={{ color: isDark ? "#C1FF00" : "#1A4D2E" }}>4 Offerings</span>
              <p className="font-sans text-xs mt-1" style={{ color: fg3 }}>Three waste streams. One AI orchestration layer.</p>
            </div>
            <div className="flex flex-col gap-3">
              {OFFERINGS.map(off => (
                <motion.div
                  key={off.id}
                  ref={el => { offeringRefs.current[off.id] = el; }}
                  style={cardStyle(offOp(off.id), hovered === off.id, off.accent)}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 cursor-pointer select-none"
                  onMouseEnter={() => { setHovered(off.id); measureRects(); }}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: off.accent + "20", border: `1px solid ${off.accent}40` }}>
                      {off.icon}
                    </div>
                    <span className="font-sans font-black text-base" style={{ color: fg }}>{off.label}</span>
                  </div>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: fg2 }}>{off.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── MIDDLE: Revenue Streams ── */}
          <div>
            <div className="mb-4">
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em]" style={{ color: isDark ? "#C1FF00" : "#1A4D2E" }}>5 Revenue Streams</span>
              <p className="font-sans text-xs mt-1" style={{ color: fg3 }}>Each offering compounds across multiple lines.</p>
            </div>
            <div className="flex flex-col gap-3">
              {REVENUES.map(rev => (
                <motion.div
                  key={rev.id}
                  ref={el => { revenueRefs.current[rev.id] = el; }}
                  style={cardStyle(revOp(rev.id), activeRevs.has(rev.id), lineColor)}
                  whileHover={{ scale: 1.01 }}
                  className="p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-sans font-black text-base" style={{ color: fg }}>{rev.title}</span>
                      <p className="font-sans text-xs leading-relaxed mt-1" style={{ color: fg2 }}>{rev.desc}</p>
                    </div>
                    <span className="font-sans font-black text-xs flex-shrink-0" style={{ color: fg3 }}>{rev.num}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Minerals ── */}
          <div>
            <div className="mb-4">
              <span className="font-sans font-bold text-[10px] uppercase tracking-[0.25em]" style={{ color: isDark ? "#C1FF00" : "#1A4D2E" }}>11 Minerals</span>
              <p className="font-sans text-xs mt-1" style={{ color: fg3 }}>From 118 — these are the ones that matter.</p>
            </div>

            {/* Precious Metals */}
            <div className="mb-5">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] mb-2 block" style={{ color: fg3 }}>Precious Metals</span>
              <div className="grid grid-cols-4 gap-2">
                {MINERALS.filter(m => m.group === "precious").map(m => (
                  <motion.div key={m.id} ref={el => { mineralRefs.current[m.id] = el; }}
                    style={cardStyle(minOp(m.id), activeMins.has(m.id), lineColor)}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 text-center"
                  >
                    <div className="font-sans font-black text-xl" style={{ color: activeMins.has(m.id) ? lineColor : fg }}>{m.symbol}</div>
                    <div className="font-sans text-[9px] mt-0.5" style={{ color: fg3 }}>{m.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Critical Minerals */}
            <div className="mb-5">
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] mb-2 block" style={{ color: fg3 }}>Critical Minerals</span>
              <div className="grid grid-cols-4 gap-2">
                {MINERALS.filter(m => m.group === "critical").map(m => (
                  <motion.div key={m.id} ref={el => { mineralRefs.current[m.id] = el; }}
                    style={cardStyle(minOp(m.id), activeMins.has(m.id), lineColor)}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 text-center"
                  >
                    <div className="font-sans font-black text-xl" style={{ color: activeMins.has(m.id) ? lineColor : fg }}>{m.symbol}</div>
                    <div className="font-sans text-[9px] mt-0.5" style={{ color: fg3 }}>{m.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* REE */}
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] mb-2 block" style={{ color: fg3 }}>Rare-Earth Elements</span>
              <div className="grid grid-cols-4 gap-2">
                {MINERALS.filter(m => m.group === "ree").map(m => (
                  <motion.div key={m.id} ref={el => { mineralRefs.current[m.id] = el; }}
                    style={cardStyle(minOp(m.id), activeMins.has(m.id), lineColor)}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 text-center"
                  >
                    <div className="font-sans font-black text-xl" style={{ color: activeMins.has(m.id) ? lineColor : fg }}>{m.symbol}</div>
                    <div className="font-sans text-[9px] mt-0.5" style={{ color: fg3 }}>{m.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
