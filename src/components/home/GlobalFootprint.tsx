"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Location data ───────────────────────────────────────────────────────── */
const LOCS = [
  { id: "india",  city: "Pune",          country: "India",         status: "operational", lat: 18.5204, lng: 73.8567, color: "#C1FF00", capacity: "30,000 t/yr intake",   footprint: "100,000 sq ft", desc: "India's flagship AI-powered e-waste facility serving major tech hubs across South Asia." },
  { id: "uae",    city: "Ras al-Khaimah",country: "UAE",           status: "operational", lat: 25.7895, lng: 55.9432, color: "#FF6B35", capacity: "15,000 t/yr intake",   footprint: "75,000 sq ft",  desc: "Strategic Middle East hub processing e-waste from GCC member states." },
  { id: "sa",     city: "Johannesburg",  country: "South Africa",  status: "planned",     lat: -26.2041,lng: 28.0473, color: "#7ECCD6", capacity: "20,000 t/yr (planned)",footprint: "90,000 sq ft",  desc: "Planned greenfield facility to serve Sub-Saharan Africa's growing e-waste volumes." },
  { id: "usa",    city: "Houston",       country: "United States", status: "operational", lat: 29.7604, lng: -95.3698,color: "#C1FF00", capacity: "35,000 t/yr intake",   footprint: "120,000 sq ft", desc: "North American HQ and primary processing hub for US domestic e-waste networks." },
];

/* ─── Correct lat/lng → 3-D per Three.js SphereGeometry UV mapping ──────── */
function ll2v(lat: number, lng: number, r = 2.02) {
  // Standard equirectangular texture mapping offset
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

/* ─── Pin — hides when behind the globe ─────────────────────────────────── */
function Pin({ loc, onHover }: { loc: typeof LOCS[0]; onHover: (l: typeof LOCS[0] | null, e?: MouseEvent) => void }) {
  const pos    = ll2v(loc.lat, loc.lng);
  const ref    = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const [vis, setVis] = useState(true);

  useFrame(() => {
    if (!ref.current) return;
    // Dot product of pin-outward direction vs camera direction
    const pinDir = pos.clone().normalize();
    const camDir = camera.position.clone().normalize();
    setVis(pinDir.dot(camDir) > 0.05);
  });

  return (
    <group ref={ref}>
      <Html position={pos.toArray()} center zIndexRange={[20, 0]} style={{ pointerEvents: vis ? "auto" : "none", opacity: vis ? 1 : 0, transition: "opacity 0.3s" }}>
        <div
          className="flex flex-col items-center cursor-pointer select-none"
          onMouseEnter={(e) => onHover(loc, e.nativeEvent)}
          onMouseLeave={() => onHover(null)}
        >
          {/* Icon card */}
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-xl text-white font-bold text-xs mb-1"
            style={{ background: loc.color, color: "#000" }}>
            ♻
          </div>
          {/* Teardrop */}
          <div className="w-3 h-3 rounded-full border-2 border-white shadow"
            style={{ background: loc.color }} />
          {/* Pulse ring */}
          <div className="absolute top-10 w-8 h-8 rounded-full animate-ping opacity-30"
            style={{ background: loc.color }} />
        </div>
      </Html>
    </group>
  );
}

/* ─── Globe mesh ─────────────────────────────────────────────────────────── */
function GlobeMesh() {
  const dayTex   = useTexture("https://unpkg.com/three-globe/example/img/earth-day.jpg");
  const bumpTex  = useTexture("https://unpkg.com/three-globe/example/img/earth-topology.png");

  return (
    <>
      {/* Main sphere */}
      <mesh>
        <sphereGeometry args={[2, 80, 80]} />
        <meshStandardMaterial
          map={dayTex}
          bumpMap={bumpTex}
          bumpScale={0.18}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      {/* Atmosphere glow */}
      <mesh scale={[1.05, 1.05, 1.05]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial
          color="#88bbff"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

/* ─── Scene ──────────────────────────────────────────────────────────────── */
function Scene({ isDark, onHover }: { isDark: boolean; onHover: (l: typeof LOCS[0] | null, e?: MouseEvent) => void }) {
  return (
    <>
      <Stars radius={80} depth={50} count={3000} factor={4} fade saturation={0} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 5, 10]} intensity={1.5} color="#ffffff" />
      <Suspense fallback={null}>
        <GlobeMesh />
        {LOCS.map(loc => <Pin key={loc.id} loc={loc} onHover={onHover} />)}
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  );
}

/* ─── Main export ─────────────────────────────────────────────────────────── */
export default function GlobalFootprint({ isDark = true }: { isDark?: boolean }) {
  const [hovered, setHovered] = useState<typeof LOCS[0] | null>(null);
  const [mPos, setMPos] = useState({ x: 0, y: 0 });

  const handleHover = (loc: typeof LOCS[0] | null, e?: MouseEvent) => {
    setHovered(loc);
    if (e) setMPos({ x: e.clientX, y: e.clientY });
  };

  const sectionBg = isDark ? "#080c10" : "#dde8f0";
  const textColor = "#ffffff"; // always white — overlaid on globe
  const subColor  = "rgba(255,255,255,0.55)";
  const cardBg    = isDark ? "rgba(8,12,16,0.75)" : "rgba(255,255,255,0.15)";
  const cardBdr   = isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)";

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden flex flex-col justify-between"
      style={{ background: sectionBg, minHeight: "100vh" }}
    >
      {/* ── GLOBE CANVAS: fills entire section ── */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [-3, 1, -3], fov: 40 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene isDark={isDark} onHover={handleHover} />
        </Canvas>
        {/* edge gradient so text is readable */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)" }} />
      </div>

      {/* ── HEADER: floats over the globe ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-0 text-center mt-12 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#C1FF00] animate-pulse" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-white/60">Global Footprint</span>
          </div>
          <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.9] text-[clamp(36px,5vw,64px)] mb-3"
            style={{ color: textColor }}>
            Our <span className="text-[#C1FF00]">Plants</span> Worldwide
          </h2>
          <p className="font-sans text-base max-w-md mx-auto" style={{ color: subColor }}>
            Drag to explore · hover a pin for full plant details
          </p>
        </motion.div>
      </div>

      {/* spacer so the globe has room */}
      <div className="relative z-0 flex-1 min-h-[40vh]" />

      {/* ── LEGEND CARDS: float at bottom over the globe ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {LOCS.map((loc, i) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl p-5 border backdrop-blur-xl hover:scale-[1.02] transition-transform cursor-default shadow-xl"
            style={{ background: cardBg, borderColor: cardBdr }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ background: loc.color }} />
              <span className="font-sans font-bold text-[9px] uppercase tracking-widest"
                style={{ color: loc.status === "operational" ? "#C1FF00" : "#FF6B35" }}>{loc.status}</span>
            </div>
            <div className="font-sans font-black text-lg" style={{ color: textColor }}>{loc.city}</div>
            <div className="font-sans text-[10px] uppercase tracking-wide mb-1" style={{ color: subColor }}>{loc.country}</div>
            <div className="font-sans text-xs" style={{ color: subColor }}>{loc.capacity}</div>
          </motion.div>
        ))}
      </div>

      {/* ── HOVER POPUP ── */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.93 }}
            transition={{ duration: 0.18 }}
            className="fixed z-[200] pointer-events-none"
            style={{ left: mPos.x + 18, top: mPos.y - 12 }}
          >
            <div className="w-80 rounded-2xl p-6 shadow-2xl border backdrop-blur-xl"
              style={{ background: cardBg, borderColor: cardBdr }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans font-black text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>{hovered.country}</span>
                <span className="font-sans font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ color: hovered.status === "operational" ? "#C1FF00" : "#FF6B35", background: hovered.status === "operational" ? "rgba(193,255,0,0.12)" : "rgba(255,107,53,0.12)", border: `1px solid ${hovered.status === "operational" ? "rgba(193,255,0,0.25)" : "rgba(255,107,53,0.25)"}` }}>
                  {hovered.status}
                </span>
              </div>
              <h3 className="font-sans font-black text-2xl tracking-tight mb-1" style={{ color: textColor }}>{hovered.city}</h3>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: subColor }}>{hovered.desc}</p>
              <div className="grid grid-cols-2 gap-3">
                {[{ l: "Footprint", v: hovered.footprint }, { l: "Capacity", v: hovered.capacity }, { l: "Recovery Rates", v: "See SLA Appendix" }, { l: "Terms", v: "Indicative only" }].map(item => (
                  <div key={item.l} className="rounded-xl p-3 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.06)" }}>
                    <div className="font-sans text-[9px] uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>{item.l}</div>
                    <div className="font-sans font-bold text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
