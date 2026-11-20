"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { notes } from "@/lib/data";
import { EASE, SplitText } from "./Reveal";

export function Notes() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="notes" aria-labelledby="notes-h" className="bg-bg2 px-[var(--margin)] py-[clamp(110px,14vw,220px)]">
      <div className="grid gap-12 lg:grid-cols-12">
        <h2 id="notes-h" className="display text-[length:var(--step-head)] lg:col-span-5">
          <SplitText text="Field notes." />
        </h2>
        <ul className="lg:col-span-7">
          {notes.map((n, i) => {
            const isOpen = open === i;
            return (
              <li key={n.title}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`note-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span>
                      <span className="block text-[clamp(1.375rem,2.2vw,2rem)] font-extrabold leading-tight tracking-[-0.03em]">{n.title}</span>
                      <span className="mt-1 block text-sm text-muted">{n.read}</span>
                    </span>
                    <motion.span aria-hidden animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: EASE }} className="shrink-0 text-signal">
                      <Plus className="h-8 w-8" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`note-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-[40rem] space-y-4 pb-10 text-[length:var(--step-body)] leading-relaxed text-muted">
                        {n.body.map((p) => <p key={p}>{p}</p>)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
