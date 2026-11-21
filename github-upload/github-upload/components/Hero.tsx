"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { ThreatField } from "./ThreatField";
import { Magnetic } from "./Magnetic";
import { EASE } from "./Reveal";

const SAMPLE = [
  ["BLOCK", "185.220.x.x", "payments-api", "SQL injection pattern"],
  ["ALERT", "svc-backup", "prod-db-02", "Impossible-travel login"],
  ["BLOCK", "45.155.x.x", "login", "Credential stuffing, 412 attempts"],
  ["PATCH", "web-gateway", "CVE-2025-xxxx", "Virtual patch applied"],
  ["REPORT", "incident-0417", "CERT-In", "Drafted, 41 min after detection"],
  ["BLOCK", "91.240.x.x", "admin-portal", "Brute force, rate limited"],
  ["ALERT", "employee-laptop", "EDR", "Unsigned binary quarantined"],
];

function Console() {
  const [rows, setRows] = useState<{ id: number; t: string; e: (typeof SAMPLE)[number] }[]>([]);
  const reduce = useReducedMotion();
  const counter = useRef(0);

  useEffect(() => {
    const stamp = () => new Date().toTimeString().slice(0, 8);
    const push = () => {
      const n = counter.current++;
      const e = SAMPLE[n % SAMPLE.length];
      setRows((r) => [...r.slice(-5), { id: n, t: stamp(), e }]);
    };
    push();
    if (reduce) return;
    const id = setInterval(push, 1800);
    return () => clearInterval(id);
  }, [reduce]);

  const colour = (k: string) => (k === "BLOCK" ? "text-signal" : k === "ALERT" ? "text-threat" : k === "PATCH" ? "text-ink" : "text-[#ffd479]");

  return (
    <div data-ui className="w-full max-w-[34rem] overflow-hidden bg-[#04090f] font-mono text-[0.8125rem] leading-6" role="log" aria-label="Sample security operations feed">
      <div className="flex items-center justify-between bg-bg2 px-4 py-2.5 text-muted">
        <span><span className="hidden sm:inline">nexshield / sentinel / </span>live feed</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-signal" /> sample data</span>
      </div>
      <ul className="min-h-[11.5rem] space-y-0.5 px-4 py-3">
        {rows.map((r) => (
          <motion.li key={r.id} layout initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="flex gap-3 overflow-hidden whitespace-nowrap">
            <span className="hidden text-muted sm:inline">{r.t}</span>
            <span className={`w-14 shrink-0 font-medium ${colour(r.e[0])}`}>{r.e[0]}</span>
            <span className="min-w-0 truncate text-ink">{r.e[1]} → {r.e[2]} · {r.e[3]}</span>
          </motion.li>
        ))}
        <li className="text-signal">$<span className="caret ml-1 inline-block h-3.5 w-2 bg-signal align-middle" /></li>
      </ul>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const S = reduce ? 0 : 1.55;
  const from = <T,>(v: T) => (reduce ? false : v);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);
  const fade = useTransform(scrollY, [0, 600], [1, 0.2]);

  const line = (t: string, i: number) => (
    <span key={i} className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className="block"
        initial={from({ y: "110%" })}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay: S + i * 0.12, ease: EASE }}
      >
        {t}
      </motion.span>
    </span>
  );

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[var(--margin)] pt-28 pb-[var(--margin)]">
      <motion.div style={{ y, opacity: fade }} className="absolute inset-0">
        <ThreatField />
      </motion.div>

      <div className="relative z-10 grid items-end gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-7">
          <h1 className="display text-[length:var(--step-display)]">
            {line("Security you", 0)}
            {line("can prove.", 1)}
          </h1>
          <motion.p
            initial={from({ opacity: 0, y: 20 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: S + 0.5, ease: EASE }}
            className="mt-8 max-w-[34rem] text-[length:var(--step-lead)] leading-snug text-ink"
          >
            NEXSHIELD Technologies is a cybersecurity firm with twelve practices across advisory, technology and managed services, from DPDPA and ISO 27001 audits to a 24x7 security operations team.
          </motion.p>
          <motion.div
            initial={from({ opacity: 0, y: 20 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: S + 0.65, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Magnetic>
              <a href="#readiness" className="inline-flex min-h-14 items-center gap-2 bg-signal px-8 font-bold text-signal-ink transition-colors duration-200 hover:bg-ink">
                Check your DPDPA readiness <ArrowDownRight className="h-5 w-5" aria-hidden />
              </a>
            </Magnetic>
            <a href="#services" className="inline-flex min-h-14 items-center font-semibold underline decoration-signal decoration-2 underline-offset-[8px] transition-opacity hover:opacity-70">
              See what we do
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={from({ opacity: 0, y: 40 })}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: S + 0.8, ease: EASE }}
          className="min-w-0 lg:col-span-5 lg:justify-self-end"
        >
          <Console />
        </motion.div>
      </div>
    </section>
  );
}
