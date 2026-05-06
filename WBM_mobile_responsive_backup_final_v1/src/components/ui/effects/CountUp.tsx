"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  value: number | string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 2, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  // Clean the value of non-numeric characters for calculation
  const cleanString = typeof value === "string" ? value.replace(/[^0-9.]/g, "") : value.toString();
  const numericValue = parseFloat(cleanString);
  const suffix = typeof value === "string" ? value.replace(/[0-9.]/g, "") : "";
  
  // Check if it has decimals based on the cleaned string
  const hasDecimals = cleanString.includes(".");
  const decimalPlaces = hasDecimals ? cleanString.split(".")[1].length : 0;

  const [displayValue, setDisplayValue] = useState(isNaN(numericValue as number) ? value.toString() : "0");
  
  const count = useMotionValue(0);
  const springValue = useSpring(count, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView && !isNaN(numericValue as number)) {
      count.set(numericValue as number);
    }
  }, [isInView, count, numericValue]);

  useEffect(() => {
    if (isNaN(numericValue as number)) return;
    
    return springValue.on("change", (latest) => {
      const formattedValue = hasDecimals 
        ? latest.toFixed(decimalPlaces) 
        : Math.floor(latest).toLocaleString();
      setDisplayValue(formattedValue + suffix);
    });
  }, [springValue, suffix, hasDecimals, decimalPlaces, numericValue]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
