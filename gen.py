import os

pages = {
    "about": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a14] to-transparent z-10" />
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">Redefining Resource Recovery</h1>
            <p className="text-xl text-gray-400">Transforming waste into a reliable source of critical minerals for the industries shaping the future.</p>
          </motion.div>
          <motion.div 
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="hidden md:block rounded-2xl bg-gray-800/50 border border-white/10"
            style={{ minHeight: '400px', backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 bg-[#0a140f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We are a technology-driven company focused on transforming complex waste streams into high-value industrial resources. Our approach combines advanced processing techniques with scalable infrastructure to create a sustainable material supply chain.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] rounded-2xl bg-gray-800/50 border border-white/10"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { title: "Vision", desc: "To build a sustainable global supply chain for critical minerals." },
            { title: "Mission", desc: "To recover and deliver high-value materials through advanced recycling and processing technologies." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(193, 255, 0, 0.15)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C1FF00]/30 transition-colors"
            >
              <h3 className="text-3xl font-bold mb-4 text-[#C1FF00]">{item.title}</h3>
              <p className="text-xl text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-6 bg-[#0a140f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Why It Matters
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-gray-300 leading-relaxed font-light"
          >
            Electronic waste is growing at an unprecedented rate. Recovering materials from waste reduces dependency on mining, minimizes environmental impact, and ensures a stable supply of critical resources.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
""",
    "technology": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function TechnologyPage() {
  const techs = [
    { title: "Battery Recycling", desc: "Recover lithium, cobalt, and nickel from end-of-life batteries using advanced chemical and mechanical processes.", icon: "🔋" },
    { title: "E-Waste Processing", desc: "Efficient separation of electronic components to isolate valuable materials from complex assemblies.", icon: "💻" },
    { title: "Rare Earth Recovery", desc: "Extraction of rare earth elements from magnets and electronic systems for reuse in advanced industries.", icon: "🧲" },
    { title: "AI Hardware Recycling", desc: "Recovery of high-value materials from servers, GPUs, and data center infrastructure.", icon: "🖥️" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-24 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Advanced Technologies for Material Recovery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400"
        >
          Engineered processes designed for efficiency, precision, and sustainability.
        </motion.p>
      </section>
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C1FF00]/50 hover:shadow-[0_0_30px_rgba(193,255,0,0.1)] transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
              <p className="text-gray-400 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
""",
    "process": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessPage() {
  const steps = [
    { title: "Collection", desc: "Gathering electronic waste from multiple sources" },
    { title: "Sorting", desc: "Categorizing materials for efficient processing" },
    { title: "Disassembly", desc: "Breaking down devices into components" },
    { title: "Processing", desc: "Applying advanced separation techniques" },
    { title: "Extraction", desc: "Recovering high-purity materials" },
    { title: "Distribution", desc: "Supplying materials to global industries" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          End-to-End Material Recovery Process
        </motion.h1>
      </section>

      <section className="px-6 max-w-4xl mx-auto">
        <div className="relative border-l-2 border-white/10 ml-6 md:ml-0 md:border-l-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />
          
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative mb-16 md:w-1/2 ${isEven ? 'md:pr-16 md:ml-0' : 'md:pl-16 md:ml-auto'} pl-8 md:pl-0`}
            >
              <div className={`absolute top-2 w-4 h-4 rounded-full bg-[#C1FF00] ${isEven ? 'md:-right-2' : 'md:-left-2'} -left-[25px] md:left-auto border-4 border-[#0d1a14] z-10`} />
              
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="text-[#C1FF00] font-mono text-sm mb-2">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

      <section className="mt-24 px-6 text-center max-w-3xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 leading-relaxed"
        >
          Each stage is optimized for efficiency, safety, and maximum recovery, ensuring minimal environmental impact and high output quality.
        </motion.p>
      </section>
    </div>
  );
}
""",
    "industries": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function IndustriesPage() {
  const industries = [
    { title: "Electric Vehicles", desc: "Battery-grade materials for powering the future of mobility" },
    { title: "Data Centers", desc: "Critical metals for computing and connectivity" },
    { title: "Aerospace", desc: "High-performance materials for advanced engineering" },
    { title: "Electronics", desc: "Sustainable materials for next-generation devices" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Serving High-Impact Industries
        </motion.h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {industries.map((ind, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-gray-800" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300" />
            <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
              <h3 className="text-3xl font-bold mb-3">{ind.title}</h3>
              <p className="text-lg text-gray-300 opacity-80 group-hover:opacity-100 transition-opacity">{ind.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
""",
    "materials": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function MaterialsPage() {
  const materials = [
    { name: "Lithium", desc: "Essential for battery production", symbol: "Li" },
    { name: "Copper", desc: "High conductivity for electrical systems", symbol: "Cu" },
    { name: "Gold", desc: "Reliable performance in connectors and circuits", symbol: "Au" },
    { name: "Rare Earth Elements", desc: "Used in magnets, motors, and advanced technologies", symbol: "REE" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Critical Materials We Recover
        </motion.h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {materials.map((mat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ rotateY: 10, rotateX: 5, y: -10 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl font-mono font-bold text-white/10 mb-8">{mat.symbol}</div>
            <h3 className="text-2xl font-bold mb-3">{mat.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{mat.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="px-6 text-center max-w-3xl mx-auto">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300"
        >
          All recovered materials meet industrial-grade standards and are ready for reintegration into manufacturing supply chains.
        </motion.p>
      </section>
    </div>
  );
}
""",
    "sustainability": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SustainabilityPage() {
  const pillars = [
    { title: "Environmental Impact", desc: "Reducing waste, emissions, and resource depletion", icon: "🌱" },
    { title: "Social Responsibility", desc: "Ensuring safe and ethical operations", icon: "🤝" },
    { title: "Governance", desc: "Maintaining transparency and compliance", icon: "⚖️" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-[#C1FF00]"
        >
          Sustainable by Design
        </motion.h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
          >
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, delay: i }}
              className="text-5xl mb-6 inline-block"
            >
              {pillar.icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
            <p className="text-gray-400">{pillar.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
""",
    "data-centers": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function DataCentersPage() {
  const blocks = [
    { title: "Server Recycling", desc: "Efficient handling of end-of-life servers" },
    { title: "GPU Recovery", desc: "Extraction of high-value components" },
    { title: "Data Destruction", desc: "Secure and compliant data removal" },
    { title: "Material Reuse", desc: "Reintegration into supply chain" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-20 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Sustainable Solutions for AI Infrastructure
        </motion.h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="grid gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-2 text-[#C1FF00]">{block.title}</h3>
              <p className="text-gray-400">{block.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-[600px] rounded-3xl bg-gray-900 border border-white/10 relative overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 opacity-20">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-full w-px bg-[#C1FF00]"
                style={{ left: `${(i + 1) * 10}%` }}
                animate={{ y: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2 + Math.random() * 2, ease: "linear" }}
              />
            ))}
          </div>
          <div className="text-white/20 font-mono text-4xl font-bold z-10">DATA FLOW</div>
        </motion.div>
      </section>
    </div>
  );
}
""",
    "partners": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function PartnersPage() {
  const sections = [
    { title: "Why Partner", desc: "Access to sustainable and reliable materials" },
    { title: "Supply Chain Advantage", desc: "Scalable and efficient sourcing" },
    { title: "Investment Opportunity", desc: "Positioned in a rapidly growing industry" }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Collaborate With Us
        </motion.h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-24">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-4">{sec.title}</h3>
            <p className="text-gray-400">{sec.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
""",
    "case-studies": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  const cases = [
    { title: "Case 1", desc: "Recovered high-value materials from industrial waste streams, improving efficiency and reducing environmental impact." },
    { title: "Case 2", desc: "Enabled supply chain support for EV manufacturing through sustainable material recovery." }
  ];

  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Real Impact. Real Results.
        </motion.h1>
      </section>

      <section className="px-6 max-w-5xl mx-auto grid gap-8">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-10 rounded-3xl bg-white/5 border border-white/10 cursor-pointer"
          >
            <h3 className="text-3xl font-bold mb-4 text-[#C1FF00]">{c.title}</h3>
            <p className="text-xl text-gray-300">{c.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
""",
    "contact": """
"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0d1a14] text-white pt-32 pb-24">
      <section className="px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold"
        >
          Let's Work Together
        </motion.h1>
      </section>

      <section className="px-6 max-w-2xl mx-auto">
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-10 rounded-3xl grid gap-6"
        >
          <div className="grid gap-2">
            <label className="text-sm text-gray-400 ml-1">Name</label>
            <input type="text" className="bg-[#0d1a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C1FF00] transition-colors" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-gray-400 ml-1">Email</label>
            <input type="email" className="bg-[#0d1a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C1FF00] transition-colors" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-gray-400 ml-1">Company</label>
            <input type="text" className="bg-[#0d1a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C1FF00] transition-colors" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-gray-400 ml-1">Message</label>
            <textarea rows={4} className="bg-[#0d1a14] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C1FF00] transition-colors resize-none" />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 bg-[#C1FF00] text-black font-bold text-lg py-4 rounded-xl hover:bg-[#aee600] transition-colors"
          >
            Submit Inquiry
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
}
"""
}

for route, content in pages.items():
    dir_path = os.path.join('src', 'app', route)
    os.makedirs(dir_path, exist_ok=True)
    with open(os.path.join(dir_path, 'page.tsx'), 'w', encoding='utf-8') as f:
        f.write(content.strip() + "\\n")
    print(f"Created {route}/page.tsx")
