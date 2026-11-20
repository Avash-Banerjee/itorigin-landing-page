"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { practices } from "@/lib/practices";
import { EASE, SplitText } from "./Reveal";

export function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="services" aria-labelledby="services-h" className="px-[var(--margin)] py-[clamp(110px,14vw,220px)]">
      <div className="grid gap-10 lg:grid-cols-12">
        <h2 id="services-h" className="display text-[length:var(--step-head)] lg:col-span-7">
          <SplitText text="Twelve practices, one portfolio." />
        </h2>
        <p className="max-w-[30rem] text-[length:var(--step-lead)] leading-snug text-muted lg:col-span-4 lg:col-start-9 lg:self-end">
          Built around the problem you have, not the product we resell. Vendor products are components of the solution, never the portfolio itself.
        </p>
      </div>

      <ul className="mt-20">
        {practices.map((p, i) => {
          const isOpen = open === p.id;
          return (
            <motion.li
              key={p.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group relative overflow-hidden"
            >
              <motion.span
                aria-hidden
                variants={{ rest: { scaleX: isOpen ? 1 : 0 }, hover: { scaleX: 1 } }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0 origin-left bg-signal"
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.06, ease: EASE }}
                className={`relative transition-colors duration-300 group-hover:text-signal-ink ${isOpen ? "text-signal-ink" : ""}`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`practice-${p.id}`}
                    onClick={() => setOpen(isOpen ? null : p.id)}
                    className="grid w-full items-start gap-3 py-7 text-left lg:grid-cols-12 lg:gap-10 lg:px-4"
                  >
                    <span className="text-[clamp(1.625rem,3.2vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.04em] lg:col-span-6">{p.name}</span>
                    <span className={`text-[1.0625rem] font-normal leading-snug transition-colors duration-300 group-hover:text-signal-ink lg:col-span-5 ${isOpen ? "text-signal-ink" : "text-muted"}`}>{p.line}</span>
                    <motion.span aria-hidden animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3, ease: EASE }} className="hidden justify-self-end lg:col-span-1 lg:block">
                      <Plus className="h-8 w-8" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`practice-${p.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-x-10 gap-y-8 pb-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-4">
                        {p.groups.map((g) => (
                          <div key={g.title}>
                            <h4 className="font-extrabold">{g.title}</h4>
                            <ul className="mt-2 space-y-1 text-[1.0625rem] leading-snug">
                              {g.items.map((it) => <li key={it}>{it}</li>)}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <p className="pb-10 font-semibold lg:px-4">How we deliver it: <span className="font-normal">{p.model}</span></p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
