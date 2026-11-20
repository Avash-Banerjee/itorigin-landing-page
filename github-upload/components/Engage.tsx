"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { engage, layers } from "@/lib/practices";
import { EASE, SplitText } from "./Reveal";

const fields = ["bg-[#0f1a2e]", "bg-[#13233c]", "bg-[#173050]", "bg-[#1b3a60]"];

export function Engage() {
  const [active, setActive] = useState(0);
  return (
    <section id="engage" aria-labelledby="engage-h" className="bg-bg">
      <div className="grid gap-10 px-[var(--margin)] pt-[clamp(110px,14vw,220px)] pb-16 lg:grid-cols-12">
        <h2 id="engage-h" className="display text-[length:var(--step-head)] lg:col-span-7">
          <SplitText text="Four ways to work with us." />
        </h2>
        <p className="max-w-[30rem] text-[length:var(--step-lead)] leading-snug text-muted lg:col-span-4 lg:col-start-9 lg:self-end">
          Every practice can be delivered through any of them, from an assessment to a managed service.
        </p>
      </div>

      <div className="flex flex-col lg:min-h-[34rem] lg:flex-row">
        {engage.map((e, i) => {
          const on = active === i;
          return (
            <motion.div
              key={e.name}
              layout
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              transition={{ duration: 0.6, ease: EASE }}
              className={`${fields[i]} relative flex flex-col justify-between overflow-hidden px-[var(--margin)] py-10 lg:px-8 ${on ? "lg:flex-[2.2]" : "lg:flex-1"}`}
            >
              <div>
                <h3 className="text-[clamp(1.75rem,2.6vw,2.75rem)] font-extrabold leading-none tracking-[-0.04em]">
                  <button type="button" className="text-left" aria-expanded={on} onClick={() => setActive(i)}>{e.name}</button>
                </h3>
                <p className="mt-3 font-semibold text-signal">{e.flow}</p>
              </div>
              <ul className="mt-10 space-y-1.5 text-[1.0625rem] text-ink">
                {e.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <div className="grid gap-x-10 gap-y-12 px-[var(--margin)] py-[clamp(90px,11vw,170px)] md:grid-cols-3">
        {layers.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <h3 className="text-[clamp(1.5rem,2.4vw,2.25rem)] font-extrabold tracking-[-0.03em]">{l.name}</h3>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{l.items.join(" · ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
