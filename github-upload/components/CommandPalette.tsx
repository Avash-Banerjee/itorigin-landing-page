"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CornerDownLeft } from "lucide-react";

const ITEMS = [
  { label: "Twelve practices", hint: "GRC, SOC and MDR, identity, cloud, OT, AI security and more", href: "#services" },
  { label: "Four ways to work with us", hint: "Advisory, implementation, assurance, managed services", href: "#engage" },
  { label: "What the work looks like", hint: "GRC, SOC, privacy and exposure management in practice", href: "#products" },
  { label: "Cyber resilience", hint: "Prepare, protect, respond, recover", href: "#resilience" },
  { label: "Frameworks we work with", hint: "DPDPA, CERT-In, ISO 27001, SOC 2 and more", href: "#frameworks" },
  { label: "DPDPA readiness check", hint: "Six questions, two minutes", href: "#readiness" },
  { label: "Sectors", hint: "Power, oil and gas, manufacturing, transport, telecom, smart cities", href: "#sectors" },
  { label: "How an engagement runs", hint: "From scoping to audit day", href: "#process" },
  { label: "Field notes", hint: "Breach response, DPDPA, audits, pen test reports", href: "#notes" },
  { label: "Book an assessment", hint: "Talk to an engineer", href: "#contact" },
];

export function CommandPalette({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
  const input = useRef<HTMLInputElement>(null);

  const list = useMemo(
    () => ITEMS.filter((x) => (x.label + x.hint).toLowerCase().includes(q.toLowerCase())),
    [q],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!open);
      } else if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) setTimeout(() => input.current?.focus(), 50);
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    setQ("");
    setI(0);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 250);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-start bg-black/70 px-4 pt-[16vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Quick navigation"
            initial={{ y: -16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-xl bg-bg2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={input}
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setI(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") { e.preventDefault(); setI((n) => Math.min(n + 1, list.length - 1)); }
                if (e.key === "ArrowUp") { e.preventDefault(); setI((n) => Math.max(n - 1, 0)); }
                if (e.key === "Enter" && list[i]) go(list[i].href);
              }}
              aria-label="Search the site"
              placeholder="Jump to a section…"
              className="w-full bg-transparent px-6 py-5 text-xl text-ink outline-none placeholder:text-muted"
            />
            <ul className="max-h-[50vh] overflow-y-auto pb-2">
              {list.map((x, n) => (
                <li key={x.href}>
                  <button
                    onMouseEnter={() => setI(n)}
                    onClick={() => go(x.href)}
                    className={`flex w-full items-center justify-between px-6 py-3 text-left transition-colors ${n === i ? "bg-signal text-signal-ink" : "text-ink"}`}
                  >
                    <span>
                      <span className="block font-bold">{x.label}</span>
                      <span className={`block text-sm ${n === i ? "text-signal-ink/80" : "text-muted"}`}>{x.hint}</span>
                    </span>
                    {n === i && <CornerDownLeft className="h-4 w-4" aria-hidden />}
                  </button>
                </li>
              ))}
              {list.length === 0 && <li className="px-6 py-4 text-muted">No match. Try “DPDPA”.</li>}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
