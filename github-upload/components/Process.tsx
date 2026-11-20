"use client";

import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { EASE } from "./Reveal";

const stages = [
  { lead: "Assess.", body: "Weeks 1 to 4. We scope the business, map your systems and data, test the technical controls and hand you a ranked gap list with an owner against each item." },
  { lead: "Implement.", body: "Weeks 5 to 12. We write the policies, fix the engineering gaps beside your team and switch on automatic evidence collection." },
  { lead: "Train.", body: "Alongside the build. Tabletop exercises and drills for engineers and leadership, so the first real incident is not the first rehearsal." },
  { lead: "Certify.", body: "Audit day. We sit next to you while the accredited auditor works, and fix what they raise." },
  { lead: "Respond.", body: "After the certificate. Monitoring, incident response and a quarterly review, so the audit-ready state stays that way." },
];

export function Process() {
  const ref = useRef<HTMLElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 55%", "end 70%"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const C = 2 * Math.PI * 70;
  const dash = useTransform(p, [0, 1], [C, 0]);
  useMotionValueEvent(p, "change", (v) => {
    if (label.current) label.current.textContent = `${Math.round(Math.min(Math.max(v, 0), 1) * 100)}%`;
  });

  return (
    <section id="process" ref={ref} aria-labelledby="proc-h" className="grid gap-16 px-[var(--margin)] py-[clamp(110px,14vw,220px)] lg:grid-cols-12">
      <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
        <h2 id="proc-h" className="display text-[length:var(--step-head)]">How an engagement runs.</h2>
        <div className="relative mt-10 h-[220px] w-[220px]" aria-hidden>
          <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
            <circle cx="80" cy="80" r="70" fill="none" stroke="#1b2a45" strokeWidth="10" />
            <motion.circle cx="80" cy="80" r="70" fill="none" stroke="#3de0a0" strokeWidth="10" strokeDasharray={C} style={{ strokeDashoffset: dash }} />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-center">
            <div>
              <span ref={label} className="display block text-5xl tabular text-signal">0%</span>
              <span className="text-sm text-muted">audit-ready</span>
            </div>
          </div>
        </div>
        <p className="mt-6 max-w-[22rem] text-sm text-muted">A typical engagement. Timing depends on your scope and starting point.</p>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <div className="max-w-[34rem] space-y-[clamp(64px,8vw,120px)]">
          {stages.map((s) => (
            <motion.p
              key={s.lead}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-14% 0px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="text-[length:var(--step-lead)] leading-[1.4] text-muted"
            >
              <strong className="font-extrabold text-ink">{s.lead}</strong> {s.body}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
