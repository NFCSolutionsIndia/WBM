"use client";
import { motion } from "framer-motion";
import { Factory, Recycle, BarChart3, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const links = [
  {
    title: "The Plant",
    desc: "100,000 sq ft of robot-assisted, AI-orchestrated extraction.",
    href: "/the-plant",
    icon: <Factory className="w-6 h-6" />,
    accent: "var(--color-lime)"
  },
  {
    title: "The Circular Economy",
    desc: "From your dump yard back to your devices—three layers of closed loops.",
    href: "/circular-economy",
    icon: <Recycle className="w-6 h-6" />,
    accent: "var(--color-ice)"
  },
  {
    title: "The 4×5 Model",
    desc: "The unit economics no single-stream specialist can match.",
    href: "/why-us",
    icon: <BarChart3 className="w-6 h-6" />,
    accent: "var(--color-orange)"
  }
];

export default function FeaturedLinks() {
  return (
    <section className="py-24 bg-[var(--c-bg2)] border-t border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {links.map((link, i) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[24px] bg-[var(--c-bg)] border border-[var(--c-border)] hover:border-[var(--c-fg3)] transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div 
                  className="w-12 h-12 rounded-[12px] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${link.accent}15`, color: link.accent }}
                >
                  {link.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--c-fg)] mb-3">
                  {link.title}
                </h3>
                <p className="text-[var(--c-fg2)] text-base leading-relaxed mb-8">
                  {link.desc}
                </p>
              </div>
              
              <Button 
                href={link.href}
                variant="outline"
                className="w-full justify-center group-hover:bg-[var(--c-fg)] group-hover:text-[var(--c-bg)]"
              >
                Learn more
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
