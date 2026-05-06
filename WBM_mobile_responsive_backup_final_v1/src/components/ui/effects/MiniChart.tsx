"use client";

import { motion } from "framer-motion";

export default function MiniChart() {
  const points = [20, 40, 35, 50, 45, 60, 55, 70, 65, 80];
  const path = points.map((p, i) => `${i * 10},${100 - p}`).join(" L ");

  return (
    <div className="w-full h-12 mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
      <svg viewBox="0 0 90 100" className="w-full h-full overflow-visible">
        <motion.path
          d={`M 0,100 L ${path}`}
          fill="none"
          stroke="var(--c-highlight)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d={`M 0,100 L ${path} L 90,100 Z`}
          fill="url(#gradient)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--c-highlight)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
