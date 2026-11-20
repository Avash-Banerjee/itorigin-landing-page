"use client";

import { motion } from "framer-motion";

export function ShieldMark({ className = "h-8 w-8", draw = false }: { className?: string; draw?: boolean }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 32 34" className={className} aria-hidden>
      {draw ? (
        <>
          <motion.path {...common} d="M16 2 29 7.5V17c0 7-5.5 12.2-13 15C8.5 29.200 3 24 3 17V7.5Z" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut" }} />
          <motion.path {...common} d="M11 23V12l10 11V12" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }} />
        </>
      ) : (
        <>
          <path {...common} d="M16 2 29 7.5V17c0 7-5.5 12.2-13 15C8.5 29.200 3 24 3 17V7.5Z" />
          <path {...common} d="M11 23V12l10 11V12" />
        </>
      )}
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-extrabold tracking-[-0.04em] ${className}`}>
      <ShieldMark className="h-[1.1em] w-[1.1em] text-signal" />
      NEXSHIELD
    </span>
  );
}
