"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--c-bg)] text-[var(--c-fg)] pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/WBM/media/outsideWarehouse1.png" alt="Contact WBM" fill className="object-cover opacity-60 dark:opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--c-bg)]" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto pt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-[var(--c-fg)] tracking-tight"
          >
            Let&apos;s Work Together
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-[var(--c-fg)] font-medium max-w-3xl mx-auto drop-shadow-md"
          >
            Partner with us to build a sustainable future.
          </motion.p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 mb-20">
        {/* Get in Touch */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[var(--c-lime)] text-sm font-bold tracking-[0.2em] uppercase mb-4">Get in Touch</h2>
          <h3 className="text-4xl font-bold mb-6">Start the Conversation</h3>
          <p className="text-[var(--c-fg2)] text-xl leading-relaxed mb-8">
            We&apos;re here to help. Reach out for partnerships, supply chain solutions, or investment opportunities.
          </p>
          <div className="p-8 rounded-3xl bg-[var(--c-lime)]/10 border border-[var(--c-lime)]/30">
            <h4 className="text-2xl font-bold mb-2">Build the Future with Sustainable Materials</h4>
            <p className="text-[var(--c-fg2)]">Let&apos;s create impact together.</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 rounded-3xl bg-[var(--c-glass)] border border-[var(--c-border)]"
        >
          <h2 className="text-[var(--c-lime)] text-sm font-bold tracking-[0.2em] uppercase mb-4">Contact Form</h2>
          <h3 className="text-3xl font-bold mb-8">Send an Inquiry</h3>
          <p className="text-[var(--c-fg2)] mb-8">Our team will respond promptly.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-[var(--c-fg3)] uppercase tracking-wider mb-2">Name</label>
                <input type="text" className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-xl px-4 py-3 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-[var(--c-fg3)] uppercase tracking-wider mb-2">Company</label>
                <input type="text" className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-xl px-4 py-3 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-[var(--c-fg3)] uppercase tracking-wider mb-2">Email</label>
              <input type="email" className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-xl px-4 py-3 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[var(--c-fg3)] uppercase tracking-wider mb-2">Message</label>
              <textarea rows={4} className="w-full bg-[var(--c-bg)] border border-[var(--c-border)] rounded-xl px-4 py-3 text-[var(--c-fg)] focus:outline-none focus:border-[var(--c-lime)] transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-4 rounded-xl bg-[var(--c-lime)] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
