"use client";

import { motion } from "framer-motion";
import { sectors } from "@/lib/data";
import { EASE, SplitText } from "./Reveal";

export function Sectors() {
  return (
    <section id="sectors" aria-labelledby="sectors-h" className="px-[var(--margin)] py-[clamp(110px,14vw,220px)]">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <h2 id="sectors-h" className="display text-[length:var(--step-head)]">
            <SplitText text="Built for critical infrastructure." />
          </h2>
          <p className="mt-8 max-w-[26rem] text-[length:var(--step-lead)] leading-snug text-muted">
            Every sector answers to a different regulator or buyer. We start from that, not from a generic checklist.
          </p>
        </div>

        <ul className="lg:col-span-7">
          {sectors.map((s) => (
            <motion.li
              key={s.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="py-9 first:pt-0"
            >
              <motion.h3
                initial={{ color: "#9eabbf" }}
                whileInView={{ color: "#e9eef5" }}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                transition={{ duration: 0.4 }}
                className="text-[clamp(1.875rem,3.6vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em]"
              >
                {s.name}
              </motion.h3>
              <p className="mt-3 text-[1.0625rem] font-semibold text-signal">{s.answers}</p>
              <p className="mt-2 max-w-[34rem] text-[1.0625rem] leading-snug text-muted">{s.work}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
