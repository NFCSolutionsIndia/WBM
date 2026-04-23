"use client";

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, icon: Icon = ArrowRight, variant = "primary", onClick, className = "" }: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative inline-flex items-center gap-4 rounded-full pl-6 pr-2 py-2 font-bold tracking-wide uppercase transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] text-sm md:text-base ${
        isPrimary 
          ? "bg-primary text-white border-2 border-primary" 
          : "bg-white text-primary border-2 border-primary"
      } ${className}`}
    >
      <span>{children}</span>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${
        isPrimary ? "bg-lime text-primary" : "bg-lime text-primary border-2 border-primary"
      }`}>
        <Icon size={18} strokeWidth={3} />
      </div>
    </motion.button>
  );
}
