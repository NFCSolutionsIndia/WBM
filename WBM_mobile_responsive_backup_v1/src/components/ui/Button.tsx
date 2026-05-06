"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export default function Button({ 
  children, 
  onClick, 
  href,
  className = "", 
  variant = 'primary',
  showArrow = false,
  size = 'md',
  style = {}
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-10 px-4 md:px-5 text-[10px] md:text-[11px] min-w-[100px] md:min-w-[120px]",
    md: "h-12 px-4 md:px-8 text-[11px] md:text-[13px] min-w-[120px] md:min-w-[180px]",
    lg: "h-14 px-6 md:px-10 text-[13px] md:text-[15px] min-w-[180px] md:min-w-[240px]"
  };

  const arrowSize = size === 'sm' ? 10 : size === 'lg' ? 14 : 12;
  const arrowBgSize = size === 'sm' ? "w-5 h-5" : size === 'lg' ? "w-8 h-8" : "w-6 h-6";

  const buttonContent = (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={style}
      className={`
        relative overflow-hidden rounded-full group transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        flex items-center justify-center whitespace-nowrap border
        ${variant === 'primary' 
          ? 'bg-[var(--c-fg)] border-transparent text-[var(--c-bg)] shadow-[0_10px_25px_rgba(0,0,0,0.15)]' 
          : 'bg-white/5 backdrop-blur-md border-white/10 text-[var(--c-fg)] shadow-sm'}
        ${sizeClasses[size]} 
        ${className}
      `}
    >
      {/* Premium Hover background slide */}
      <div className={`
        absolute inset-0 w-full h-full transition-transform duration-600 ease-[cubic-bezier(0.19,1,0.22,1)] translate-y-full group-hover:translate-y-0
        ${variant === 'primary' ? 'bg-[var(--c-highlight)]' : 'bg-white/10'}
      `} />
      
      {/* Border glow on hover */}
      <div className="absolute inset-0 border border-[var(--c-highlight)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      
      <div className="relative z-10 flex items-center justify-center gap-3 w-full">
        <span className={`
          font-black uppercase tracking-[0.2em] transition-colors duration-300
          ${variant === 'primary' ? 'text-[var(--c-bg)]' : 'text-[var(--c-fg)]'} 
          group-hover:text-white
        `}>
          {children}
        </span>
        
        {showArrow && (
          <div 
            className={`
              ${arrowBgSize} rounded-full flex items-center justify-center flex-shrink-0
              ${variant === 'primary' ? 'bg-white/10' : 'bg-[var(--c-fg)]/5'} 
              group-hover:bg-white/20 transition-all duration-300 group-hover:translate-x-1
            `}
          >
            <svg width={arrowSize} height={arrowSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        )}
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-in-out" />
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block w-full sm:w-auto">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
