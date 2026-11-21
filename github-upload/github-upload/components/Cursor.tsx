"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const ss = useSpring(scale, { stiffness: 300, damping: 24 });
  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      scale.set((e.target as Element | null)?.closest?.("a,button,[role=tab],input,select,textarea") ? 3 : 1);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, scale]);
  return (
    <motion.div
      aria-hidden
      className="cursor pointer-events-none fixed top-0 left-0 z-[90] -ml-[7px] -mt-[7px] h-[14px] w-[14px] rounded-full bg-white mix-blend-difference"
      style={{ x: sx, y: sy, scale: ss }}
    />
  );
}
