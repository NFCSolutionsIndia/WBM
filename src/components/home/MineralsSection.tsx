"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const allMinerals = [
  { symbol: "H", num: 1, name: "Hydrogen", row: 1, col: 1, wbm: false },
  { symbol: "He", num: 2, name: "Helium", row: 1, col: 18, wbm: false },
  { symbol: "Li", num: 3, name: "Lithium", row: 2, col: 1, wbm: true },
  { symbol: "Be", num: 4, name: "Beryllium", row: 2, col: 2, wbm: false },
  { symbol: "B", num: 5, name: "Boron", row: 2, col: 13, wbm: false },
  { symbol: "C", num: 6, name: "Carbon", row: 2, col: 14, wbm: false },
  { symbol: "N", num: 7, name: "Nitrogen", row: 2, col: 15, wbm: false },
  { symbol: "O", num: 8, name: "Oxygen", row: 2, col: 16, wbm: false },
  { symbol: "F", num: 9, name: "Fluorine", row: 2, col: 17, wbm: false },
  { symbol: "Ne", num: 10, name: "Neon", row: 2, col: 18, wbm: false },
  { symbol: "Na", num: 11, name: "Sodium", row: 3, col: 1, wbm: false },
  { symbol: "Mg", num: 12, name: "Magnesium", row: 3, col: 2, wbm: false },
  { symbol: "Al", num: 13, name: "Aluminium", row: 3, col: 13, wbm: true },
  { symbol: "Si", num: 14, name: "Silicon", row: 3, col: 14, wbm: false },
  { symbol: "P", num: 15, name: "Phosphorus", row: 3, col: 15, wbm: false },
  { symbol: "S", num: 16, name: "Sulfur", row: 3, col: 16, wbm: false },
  { symbol: "Cl", num: 17, name: "Chlorine", row: 3, col: 17, wbm: false },
  { symbol: "Ar", num: 18, name: "Argon", row: 3, col: 18, wbm: false },
  { symbol: "K", num: 19, name: "Potassium", row: 4, col: 1, wbm: false },
  { symbol: "Ca", num: 20, name: "Calcium", row: 4, col: 2, wbm: false },
  { symbol: "Ti", num: 22, name: "Titanium", row: 4, col: 4, wbm: true },
  { symbol: "Cr", num: 24, name: "Chromium", row: 4, col: 6, wbm: false },
  { symbol: "Mn", num: 25, name: "Manganese", row: 4, col: 7, wbm: false },
  { symbol: "Fe", num: 26, name: "Iron", row: 4, col: 8, wbm: false },
  { symbol: "Co", num: 27, name: "Cobalt", row: 4, col: 9, wbm: true },
  { symbol: "Ni", num: 28, name: "Nickel", row: 4, col: 10, wbm: true },
  { symbol: "Cu", num: 29, name: "Copper", row: 4, col: 11, wbm: true },
  { symbol: "Zn", num: 30, name: "Zinc", row: 4, col: 12, wbm: false },
  { symbol: "Ga", num: 31, name: "Gallium", row: 4, col: 13, wbm: false },
  { symbol: "Ge", num: 32, name: "Germanium", row: 4, col: 14, wbm: false },
  { symbol: "As", num: 33, name: "Arsenic", row: 4, col: 15, wbm: false },
  { symbol: "Ag", num: 47, name: "Silver", row: 5, col: 11, wbm: true },
  { symbol: "Pd", num: 46, name: "Palladium", row: 5, col: 10, wbm: true },
  { symbol: "Pb", num: 82, name: "Lead", row: 6, col: 14, wbm: true },
  { symbol: "Au", num: 79, name: "Gold", row: 6, col: 11, wbm: true },
  { symbol: "Nd", num: 60, name: "Neodymium", row: 8, col: 6, wbm: true },
  { symbol: "Dy", num: 66, name: "Dysprosium", row: 8, col: 12, wbm: true },
];

const wbmMinerals = allMinerals.filter((m) => m.wbm);

export default function MineralsSection() {
  const [showOnlyWbm, setShowOnlyWbm] = useState(false);

  return (
    <section className="relative w-full py-12 bg-[var(--c-bg)] border-t border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px bg-[var(--color-ice)]" />
            <span className="font-sans font-bold text-xs tracking-[0.3em] uppercase text-[var(--color-ice)]">
              Recovered Minerals
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-black tracking-tighter leading-[0.9] text-[clamp(36px,6vw,80px)] text-[var(--c-fg)] uppercase max-w-3xl"
            >
              Remember the{" "}
              <span className="text-[var(--color-ice)]">Periodic Table?</span>
              <br />
              We Extract 11 of Them.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 shrink-0"
            >
              <span className="font-sans font-bold text-sm text-[var(--c-fg2)]">Show only WBM minerals</span>
              <button
                onClick={() => setShowOnlyWbm(!showOnlyWbm)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300`}
                style={{ background: showOnlyWbm ? "var(--color-lime)" : "var(--c-bg3)" }}
              >
                <span
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${showOnlyWbm ? "translate-x-7" : "translate-x-1"}`}
                />
              </button>
            </motion.div>
          </div>
        </div>

        {/* WBM Minerals Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3 mb-20">
          {wbmMinerals.map((m, i) => (
            <motion.div
              key={m.symbol}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="aspect-square rounded-2xl flex flex-col items-center justify-center p-2 border cursor-pointer"
              style={{
                background: "var(--c-bg2)",
                borderColor: "var(--color-lime)",
                boxShadow: "0 0 20px rgba(193, 255, 0, 0.08)",
              }}
            >
              <div className="font-sans font-black text-xs text-[var(--c-fg3)]">{m.num}</div>
              <div
                className="font-sans font-black text-xl leading-none"
                style={{ color: "var(--color-lime)" }}
              >
                {m.symbol}
              </div>
              <div className="font-sans font-bold text-[8px] text-center leading-tight text-[var(--c-fg3)] mt-1">
                {m.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Description cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Chip Supply",
              minerals: ["Cu", "Au", "Pd", "Al"],
              desc: "Every AI chip requires copper traces, gold contacts, palladium capacitors and aluminium heat sinks — all recovered by WBM.",
              accent: "var(--color-lime)",
            },
            {
              title: "EV Battery Loops",
              minerals: ["Li", "Co", "Ni"],
              desc: "Lithium, cobalt and nickel recovered from spent EV and grid-storage batteries in a fully closed-loop hydrometallurgical process.",
              accent: "var(--color-orange)",
            },
            {
              title: "Defence & Energy",
              minerals: ["Nd", "Dy", "Ti", "Pb"],
              desc: "Neodymium and dysprosium from end-of-life turbines and MRI machines. Titanium and lead recovered from defence electronics.",
              accent: "var(--color-ice)",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[32px] border border-[var(--c-border)] bg-[var(--c-bg2)] card-hover"
            >
              <div className="flex gap-2 mb-6 flex-wrap">
                {card.minerals.map((sym) => (
                  <span
                    key={sym}
                    className="font-sans font-black text-xs px-3 py-1 rounded-full"
                    style={{ background: card.accent, color: "var(--c-bg)" }}
                  >
                    {sym}
                  </span>
                ))}
              </div>
              <h3 className="font-sans font-black text-xl uppercase tracking-tight text-[var(--c-fg)] mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-sm text-[var(--c-fg2)] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
