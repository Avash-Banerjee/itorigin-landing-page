"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { frameworks } from "@/lib/data";
import { EASE, SplitText } from "./Reveal";

export function Explorer() {
  const [id, setId] = useState(frameworks[0].id);
  const f = frameworks.find((x) => x.id === id)!;

  return (
    <section id="frameworks" aria-labelledby="fw-h" className="on-paper bg-paper px-[var(--margin)] py-[clamp(110px,14vw,220px)] text-paper-ink">
      <h2 id="fw-h" className="display max-w-[18ch] text-[length:var(--step-head)]">
        <SplitText text="Every framework your auditors will name." />
      </h2>
      <p className="mt-6 max-w-[40rem] text-[length:var(--step-lead)] leading-snug text-paper-muted">
        Pick one to see who it applies to, what it asks for, and how we help. Always confirm dates and scope against the primary text.
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        <div role="tablist" aria-label="Frameworks" aria-orientation="vertical" className="-mx-[var(--margin)] flex snap-x gap-x-7 gap-y-1 overflow-x-auto px-[var(--margin)] pb-2 [scrollbar-width:none] lg:mx-0 lg:col-span-4 lg:flex-col lg:overflow-visible lg:px-0">
          {frameworks.map((x) => {
            const active = x.id === id;
            return (
              <button
                key={x.id}
                role="tab"
                aria-selected={active}
                onClick={() => setId(x.id)}
                className="relative min-h-12 shrink-0 text-left text-[clamp(1.5rem,2.6vw,2.5rem)] font-extrabold tracking-[-0.04em] transition-colors duration-200"
                style={{ color: active ? "var(--paper-ink)" : "#8a97aa" }}
              >
                {active && <motion.span layoutId="fw-bar" className="absolute top-1/2 -left-4 hidden h-3 w-3 -translate-y-1/2 bg-paper-signal lg:block" />}
                {x.short}
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-8" role="tabpanel" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={f.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4, ease: EASE }}>
              <h3 className="text-[length:var(--step-lead)] font-bold">{f.name}</h3>
              <dl className="mt-8 grid gap-x-10 gap-y-9 md:grid-cols-2">
                <div>
                  <dt className="font-bold text-paper-signal">Who it applies to</dt>
                  <dd className="mt-2">{f.applies}</dd>
                </div>
                <div>
                  <dt className="font-bold text-paper-signal">Key numbers and dates</dt>
                  <dd className="mt-2">{f.figures}</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="font-bold text-paper-signal">What it asks of you</dt>
                  <dd className="mt-2">
                    <ul className="space-y-2">
                      {f.asks.map((a) => (
                        <li key={a} className="flex gap-3"><span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-paper-ink" />{a}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="font-bold text-paper-signal">How NEXSHIELD helps</dt>
                  <dd className="mt-2 text-[length:var(--step-lead)] leading-snug">{f.help}</dd>
                </div>
              </dl>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
