"use client";

import { useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

function Count({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!ref.current) return;
    if (!inView || reduce) {
      ref.current.textContent = `${prefix}${reduce ? to : 0}${suffix}`;
      return;
    }
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
      },
    });
    return () => c.stop();
  }, [inView, reduce, to, prefix, suffix]);
  return <span ref={ref} className="tabular">{prefix}0{suffix}</span>;
}

const facts = [
  { n: 6, s: " hours", d: "The window CERT-In gives you to report a listed cyber incident, counted from when you notice it." },
  { n: 180, s: " days", d: "How long CERT-In expects ICT logs kept, inside India." },
  { n: 250, p: "₹", s: " crore", d: "The maximum DPDPA penalty for failing to take reasonable security safeguards." },
  { n: 72, s: " hours", d: "The GDPR window to notify the supervisory authority of a personal data breach, where required." },
];

export function Facts() {
  return (
    <section aria-label="Numbers that shape a security programme" className="bg-bg px-[var(--margin)] py-[clamp(110px,14vw,220px)]">
      <ul className="grid gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {facts.map((f) => (
          <li key={f.d}>
            <p className="display text-[clamp(3.5rem,7vw,7.5rem)] text-signal"><Count to={f.n} prefix={f.p} suffix={f.s} /></p>
            <p className="mt-4 max-w-[22rem] text-[1.0625rem] text-muted">{f.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
