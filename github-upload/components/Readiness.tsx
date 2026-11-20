"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/lib/data";
import { EASE, SplitText } from "./Reveal";

const OPTIONS = [
  { label: "Yes", score: 2 },
  { label: "Partly", score: 1 },
  { label: "Not yet", score: 0 },
];

function tier(p: number) {
  if (p >= 80) return { name: "Well prepared", text: "Your foundations are strong. An independent audit would confirm the details and find edge cases." };
  if (p >= 50) return { name: "On the way", text: "You have real progress and some clear gaps. A focused sprint would close them before the main obligations apply." };
  return { name: "Early stage", text: "Plenty to build, which is normal. A gap assessment will turn the unknowns into a ranked plan." };
}

export function Readiness() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [step, setStep] = useState(0);
  const done = step >= questions.length;
  const total = answers.reduce<number>((a, b) => a + (b ?? 0), 0);
  const pct = Math.round((total / (questions.length * 2)) * 100);
  const t = tier(pct);
  const gaps = questions.filter((_, i) => (answers[i] ?? 0) < 2);

  const mail = () => {
    const body = `DPDPA readiness self-check: ${pct}% (${t.name})\n\nGaps:\n${gaps.map((g) => "- " + g.q).join("\n")}\n\nI'd like to talk about a gap assessment.`;
    return `mailto:hello@nexshield.example?subject=${encodeURIComponent("DPDPA readiness check")}&body=${encodeURIComponent(body)}`;
  };

  const C = 2 * Math.PI * 70;

  return (
    <section id="readiness" aria-labelledby="ready-h" className="bg-bg2 px-[var(--margin)] py-[clamp(110px,14vw,220px)]">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="ready-h" className="display text-[length:var(--step-head)]">
            <SplitText text="How ready are you for the DPDP Act?" />
          </h2>
          <p className="mt-6 max-w-[30rem] text-[length:var(--step-lead)] leading-snug text-muted">
            Six honest questions. Nothing is stored or sent unless you choose to email us the result.
          </p>
          <p className="mt-6 max-w-[30rem] text-[1.0625rem] text-muted">
            The Act&apos;s main duties apply from May 2027, and the Rules were notified in November 2025. A self-check is a conversation starter, not legal advice.
          </p>
        </div>

        <div className="lg:col-span-7" aria-live="polite">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div key={step} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4, ease: EASE }}>
                <p className="font-bold text-signal">Question {step + 1} of {questions.length}</p>
                <p className="mt-4 max-w-[34rem] text-[clamp(1.5rem,2.8vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.03em]">{questions[step].q}</p>
                <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-[34rem]">
                  {OPTIONS.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => {
                        setAnswers((a) => a.map((v, i) => (i === step ? o.score : v)));
                        setStep((s) => s + 1);
                      }}
                      className="min-h-16 bg-bg font-bold transition-colors duration-200 hover:bg-signal hover:text-signal-ink"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button onClick={() => setStep((s) => s - 1)} className="mt-6 min-h-11 text-muted underline underline-offset-4 hover:text-ink">
                    Back
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="grid gap-10 md:grid-cols-[200px_1fr]">
                <div className="relative h-[200px] w-[200px]">
                  <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90" aria-hidden>
                    <circle cx="80" cy="80" r="70" fill="none" stroke="#1b2a45" strokeWidth="12" />
                    <motion.circle cx="80" cy="80" r="70" fill="none" stroke="#3de0a0" strokeWidth="12" strokeDasharray={C} initial={{ strokeDashoffset: C }} animate={{ strokeDashoffset: C * (1 - pct / 100) }} transition={{ duration: 1.4, ease: EASE }} />
                  </svg>
                  <p className="display absolute inset-0 grid place-items-center text-5xl">{pct}%</p>
                </div>
                <div>
                  <p className="text-[length:var(--step-lead)] font-extrabold">{t.name}</p>
                  <p className="mt-2 text-muted">{t.text}</p>
                  {gaps.length > 0 && (
                    <>
                      <p className="mt-8 font-bold text-signal">Where to focus</p>
                      <ul className="mt-3 space-y-3">
                        {gaps.map((g) => (
                          <li key={g.q} className="flex gap-3"><span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 bg-signal" />{g.gap}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <a href={mail()} className="inline-flex min-h-14 items-center bg-signal px-8 font-bold text-signal-ink transition-colors hover:bg-ink">Email us this result</a>
                    <button onClick={() => { setAnswers(Array(questions.length).fill(null)); setStep(0); }} className="min-h-11 underline underline-offset-4 hover:opacity-70">Start again</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
