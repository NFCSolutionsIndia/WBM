"use client";

import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import ThreeGlobe from 'three-globe';

const WBM_LOCS = [
  { lat: 18.5204, lng: 73.8567, name: "Pune, India" },
  { lat: 25.7895, lng: 55.9432, name: "Ras al-Khaimah, UAE" },
  { lat: -26.2041, lng: 28.0473, name: "Johannesburg, SA" },
  { lat: 29.7604, lng: -95.3698, name: "Houston, USA" }
];

function GlobeInstance() {
  const { scene } = useThree();
  
  const pointsData = useMemo(() => WBM_LOCS.map(loc => ({
    lat: loc.lat,
    lng: loc.lng,
    size: 0.8,
    color: '#839470'
  })), []);

  const labelsData = useMemo(() => WBM_LOCS.map(loc => ({
    lat: loc.lat,
    lng: loc.lng,
    text: loc.name.split(',')[0],
    color: '#ffffff',
    size: 1.5,
    dotRadius: 0.5
  })), []);

  const arcsData = useMemo(() => {
    const arcs = [];
    for (let i = 0; i < WBM_LOCS.length; i++) {
      for (let j = i + 1; j < WBM_LOCS.length; j++) {
        arcs.push({
          startLat: WBM_LOCS[i].lat,
          startLng: WBM_LOCS[i].lng,
          endLat: WBM_LOCS[j].lat,
          endLng: WBM_LOCS[j].lng,
          color: ['#839470', '#ffffff']
        });
      }
    }
    return arcs;
  }, []);

  const globe = useMemo(() => {
    try {
      // Handle potential ESM/CJS default export differences
      const GlobeConstructor = typeof ThreeGlobe === 'function' ? ThreeGlobe : (ThreeGlobe as any).default;
      return new GlobeConstructor();
    } catch (e) {
      console.error("Failed to initialize ThreeGlobe:", e);
      return null;
    }
  }, []);

  useEffect(() => {
    if (!globe) return;

    globe
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
      .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
      .pointsData(pointsData)
      .pointAltitude(0.02)
      .pointColor('color')
      .pointRadius('size')
      .labelsData(labelsData)
      .labelText('text')
      .labelSize('size')
      .labelColor('color')
      .labelDotRadius('dotRadius')
      .labelAltitude(0.05)
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.5)
      .arcDashGap(2)
      .arcDashAnimateTime(1500)
      .arcStroke(0.8);

    scene.add(globe);

    return () => {
      scene.remove(globe);
    };
  }, [scene, globe, pointsData, labelsData, arcsData]);

  return null;
}

export default function FootprintGlobe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full h-[450px] md:h-[650px] bg-transparent overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[#839470]/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full h-full">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 280]} />
          <ambientLight intensity={3} />
          <directionalLight position={[100, 100, 100]} intensity={2} />
          <pointLight position={[-100, -100, -100]} intensity={1} color="#839470" />
          
          <GlobeInstance />
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.8} 
          />
        </Canvas>
      </div>
    </section>
  );
}
