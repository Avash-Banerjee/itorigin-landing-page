"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Search } from "lucide-react";
import { Wordmark } from "./Logo";

export const NAV = [
  { label: "Practices", href: "#services" },
  { label: "Engage", href: "#engage" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Readiness check", href: "#readiness" },
  { label: "Contact", href: "#contact" },
];

export function Header({ onSearch }: { onSearch: () => void }) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [last, setLast] = useState(0);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setSolid(v > 40);
    setHidden(v > last && v > 400);
    setLast(v);
  });

  return (
    <motion.header
      animate={{ y: hidden && !open ? "-100%" : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? "bg-bg" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-[var(--margin)] py-3.5">
        <a href="#top" aria-label="NEXSHIELD home" className="text-xl">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-[0.9375rem] font-medium lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="py-2 text-muted transition-colors duration-200 hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onSearch}
            aria-label="Open quick navigation"
            className="hidden min-h-11 items-center gap-2 bg-bg2 px-4 text-[0.9375rem] text-muted transition-colors hover:text-ink md:inline-flex"
          >
            <Search className="h-4 w-4" aria-hidden /> Search <span className="text-muted/70">Ctrl K</span>
          </button>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center whitespace-nowrap bg-signal px-4 text-[0.9375rem] font-bold text-signal-ink transition-colors duration-200 hover:bg-ink sm:px-5"
          >
            <span className="sm:hidden">Book a call</span>
            <span className="hidden sm:inline">Book an assessment</span>
          </a>
          <button
            className="grid h-11 w-11 place-items-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-6">
              <motion.span className="absolute inset-x-0 top-0 h-0.5 bg-ink" animate={open ? { y: 5, rotate: 45 } : { y: 0, rotate: 0 }} />
              <motion.span className="absolute inset-x-0 bottom-0 h-0.5 bg-ink" animate={open ? { y: -5, rotate: -45 } : { y: 0, rotate: 0 }} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <motion.nav
          aria-label="Mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col px-[var(--margin)] pb-6 lg:hidden"
        >
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-3xl font-extrabold tracking-[-0.03em]">
              {n.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
