"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { resilience } from "@/lib/practices";
import { EASE, SplitText } from "./Reveal";

export function Resilience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section id="resilience" ref={ref} aria-labelledby="res-h" className="on-paper bg-paper px-[var(--margin)] py-[clamp(110px,14vw,220px)] text-paper-ink">
      <div className="grid gap-10 lg:grid-cols-12">
        <h2 id="res-h" className="display text-[length:var(--step-head)] lg:col-span-7">
          <SplitText text="Resilience runs through all of it." />
        </h2>
        <p className="max-w-[30rem] text-[length:var(--step-lead)] leading-snug text-paper-muted lg:col-span-4 lg:col-start-9 lg:self-end">
          Not another technology practice. A cycle that every practice feeds, so a bad day is survivable.
        </p>
      </div>

      <div className="relative mt-20">
        <div aria-hidden className="absolute inset-x-0 top-[1.1rem] hidden h-[3px] bg-paper-ink/15 lg:block" />
        <motion.div aria-hidden style={{ scaleX: line }} className="absolute inset-x-0 top-[1.1rem] hidden h-[3px] origin-left bg-paper-signal lg:block" />
        <ol className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {resilience.map((r, i) => (
            <motion.li
              key={r.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
              className="relative lg:pt-12"
            >
              <span aria-hidden className="absolute top-0 left-0 hidden h-[2.25rem] w-[2.25rem] bg-paper-ink lg:block" />
              <h3 className="display text-[clamp(2.25rem,4vw,4rem)]">{r.name}</h3>
              <ul className="mt-4 space-y-1.5 text-[1.0625rem] text-paper-muted">
                {r.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
