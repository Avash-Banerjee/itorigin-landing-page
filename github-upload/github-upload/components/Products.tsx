"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE, SplitText } from "./Reveal";

const bars = [
  ["DPDPA", 82],
  ["ISO 27001", 91],
  ["SOC 2", 76],
  ["PCI DSS", 64],
] as const;

function ComplyUI() {
  return (
    <div data-ui className="w-full max-w-[32rem] bg-[#0f1a2e] p-6 text-ink">
      <p className="font-bold">Control coverage <span className="font-normal text-muted">· sample workspace</span></p>
      <ul className="mt-6 space-y-5">
        {bars.map(([n, v], i) => (
          <li key={n}>
            <div className="mb-1.5 flex justify-between text-sm"><span>{n}</span><span className="tabular text-muted">{v}%</span></div>
            <div className="h-3 bg-[#1b2a45]">
              <motion.div className="h-full bg-signal" initial={{ width: 0 }} whileInView={{ width: `${v}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease: EASE }} />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">One control, tested once, counts towards every framework it maps to.</p>
    </div>
  );
}

const alerts = [
  ["02:14", "Impossible-travel login on a finance account", "Contained", "signal"],
  ["02:31", "Unusual outbound transfer from prod-db-02", "Investigating", "threat"],
  ["03:05", "Phishing link blocked for 14 employees", "Resolved", "signal"],
  ["03:42", "CERT-In report drafted for incident 0417", "Ready to file", "ink"],
] as const;

function SentinelUI() {
  return (
    <div data-ui className="w-full max-w-[32rem] bg-[#0f1a2e] p-6 text-ink">
      <div className="flex items-end justify-between">
        <p className="font-bold">Overnight, 02:00 to 04:00 <span className="font-normal text-muted">· sample</span></p>
        <p className="tabular text-2xl font-extrabold text-signal">4 min <span className="text-sm font-normal text-muted">to detect</span></p>
      </div>
      <ul className="mt-5 space-y-3">
        {alerts.map(([t, msg, st, c], i) => (
          <motion.li key={t} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 * i, duration: 0.6, ease: EASE }} className="flex items-start gap-4 bg-[#142038] px-4 py-3 text-sm">
            <span className="tabular text-muted">{t}</span>
            <span className="flex-1">{msg}</span>
            <span className={c === "signal" ? "text-signal" : c === "threat" ? "text-threat" : "text-ink"}>{st}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const purposes = ["Order fulfilment", "Product updates", "Personalised offers", "Analytics"];

function ConsentUI() {
  const [on, setOn] = useState([true, true, false, true]);
  useEffect(() => {
    const id = setInterval(() => setOn((a) => a.map((v, i) => (i === 2 ? !v : v))), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <div data-ui className="w-full max-w-[32rem] bg-white p-6 text-paper-ink">
      <p className="font-bold">Priya&apos;s consent record <span className="font-normal text-paper-muted">· sample</span></p>
      <ul className="mt-5 space-y-4">
        {purposes.map((p, i) => (
          <li key={p} className="flex items-center justify-between">
            <span>{p}</span>
            <button
              role="switch"
              aria-checked={on[i]}
              aria-label={`${p} consent`}
              onClick={() => setOn((a) => a.map((v, k) => (k === i ? !v : v)))}
              className={`relative h-10 w-16 transition-colors duration-300 ${on[i] ? "bg-paper-signal" : "bg-[#b7c0cc]"}`}
            >
              <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 32 }} className={`absolute top-1 h-8 w-8 bg-white ${on[i] ? "right-1" : "left-1"}`} />
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-paper-muted">Every change is time-stamped, versioned and exportable for the Data Protection Board.</p>
    </div>
  );
}

const assets = [
  ["api.shop.example", "Exposed admin route", "High"],
  ["staging-3.shop.example", "Forgotten test server", "High"],
  ["cdn.shop.example", "Outdated TLS config", "Medium"],
  ["mail.shop.example", "SPF record missing", "Low"],
] as const;

function ProbeUI() {
  return (
    <div data-ui className="w-full max-w-[32rem] bg-[#0f1a2e] p-6 text-ink">
      <div className="flex items-end justify-between">
        <p className="font-bold">Attack surface <span className="font-normal text-muted">· sample</span></p>
        <p className="tabular text-sm text-muted"><span className="text-2xl font-extrabold text-ink">1,284</span> assets, <span className="text-threat">17 exposed</span></p>
      </div>
      <ul className="mt-5 space-y-3">
        {assets.map(([a, i, r], k) => (
          <motion.li key={a} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 * k, duration: 0.6, ease: EASE }} className="flex items-center justify-between gap-4 bg-[#142038] px-4 py-3 text-sm">
            <span><span className="block font-medium">{a}</span><span className="text-muted">{i}</span></span>
            <span className={r === "High" ? "text-threat" : r === "Medium" ? "text-[#ffd479]" : "text-signal"}>{r}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const products = [
  { name: "GRC technology", tag: "Compliance, run like a system.", body: "We implement and run GRC platforms that map one set of controls across DPDPA, ISO 27001, SOC 2 and PCI DSS, collect evidence automatically and monitor controls continuously.", ui: <ComplyUI />, tone: "bg-bg2 text-ink", paper: false },
  { name: "Security operations and MDR", tag: "A security team that never sleeps.", body: "SOC design, SIEM, SOAR and managed detection and response across cloud, endpoint and identity, with incident reports drafted for CERT-In while your team is still waking up.", ui: <SentinelUI />, tone: "bg-bg text-ink", paper: false },
  { name: "Privacy technology", tag: "Consent that holds up to the Board.", body: "Consent management, data discovery, rights-request automation and a time-stamped record behind every decision a person makes, built around the DPDP Act.", ui: <ConsentUI />, tone: "bg-paper text-paper-ink on-paper", paper: true },
  { name: "Exposure management", tag: "See what attackers see.", body: "Attack-surface and shadow-IT discovery, plus continuous vulnerability management, so engineers fix real problems first.", ui: <ProbeUI />, tone: "bg-bg2 text-ink", paper: false },
];

export function Products() {
  return (
    <section id="products" aria-labelledby="products-h">
      <div className="px-[var(--margin)] pt-[clamp(110px,14vw,220px)] pb-16">
        <h2 id="products-h" className="display max-w-[16ch] text-[length:var(--step-head)]">
          <SplitText text="What the work looks like." />
        </h2>
      </div>
      {products.map((p, i) => (
        <article key={p.name} className={`grid min-h-[70svh] items-center gap-12 px-[var(--margin)] py-[clamp(72px,9vw,140px)] lg:grid-cols-12 ${p.tone}`}>
          <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2 lg:col-start-7" : ""}`}>
            <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-12% 0px" }} transition={{ duration: 0.9, ease: EASE }}>
              <h3 className="text-[length:var(--step-lead)] font-bold">{p.name}</h3>
              <p className="display mt-3 max-w-[14ch] text-[clamp(2.5rem,5.6vw,5.5rem)]">{p.tag}</p>
              <p className={`mt-6 max-w-[34rem] text-[length:var(--step-body)] ${p.paper ? "text-paper-muted" : "text-muted"}`}>{p.body}</p>
              <a href="#contact" className={`mt-8 inline-flex min-h-12 items-center gap-2 font-bold underline decoration-2 underline-offset-[8px] transition-opacity hover:opacity-70 ${p.paper ? "decoration-paper-signal" : "decoration-signal"}`}>
                Talk to an engineer <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className={`lg:col-span-5 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}
          >
            {p.ui}
          </motion.div>
        </article>
      ))}
    </section>
  );
}
