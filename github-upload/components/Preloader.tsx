"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldMark } from "./Logo";

export function Preloader() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className="preloader pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-[#03070d]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 2, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-5 text-signal">
        <ShieldMark className="h-20 w-20" draw />
        <motion.p
          className="text-2xl font-extrabold tracking-[-0.04em] text-ink"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          NEXSHIELD
        </motion.p>
      </div>
    </motion.div>
  );
}
