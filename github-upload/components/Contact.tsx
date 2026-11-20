"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EASE, SplitText } from "./Reveal";
import { Magnetic } from "./Magnetic";

const field = "mt-2 w-full bg-signal-ink/10 px-4 py-3.5 text-signal-ink placeholder:text-signal-ink/60 outline-none transition-colors focus:bg-signal-ink/20";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" aria-labelledby="contact-h" className="on-paper bg-signal px-[var(--margin)] py-[clamp(90px,12vw,200px)] text-signal-ink">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 id="contact-h" className="display text-[clamp(3rem,8vw,8.5rem)]">
            <SplitText text="Talk to an engineer." />
          </h2>
          <p className="mt-8 max-w-[28rem] text-[length:var(--step-lead)] leading-snug">
            Tell us what you are trying to get certified, compliant or protected from. A security engineer, not a sales script, replies.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="lg:col-span-5 lg:col-start-8"
          onSubmit={(e) => {
            e.preventDefault();
            const d = new FormData(e.currentTarget);
            const body = `Name: ${d.get("name")}\nCompany: ${d.get("company")}\nEmail: ${d.get("email")}\nInterested in: ${d.get("topic")}\n\n${d.get("message")}`;
            window.location.href = `mailto:hello@nexshield.example?subject=${encodeURIComponent("Enquiry from " + d.get("company"))}&body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block font-bold">Name<input name="name" required autoComplete="name" className={field} /></label>
            <label className="block font-bold">Company<input name="company" required autoComplete="organization" className={field} /></label>
          </div>
          <label className="mt-6 block font-bold">Work email<input name="email" type="email" required autoComplete="email" className={field} /></label>
          <label className="mt-6 block font-bold">
            I am interested in
            <select name="topic" className={field} defaultValue="DPDPA compliance">
              {["DPDPA compliance", "ISO 27001, SOC 2 or PCI DSS", "Managed SOC and MDR", "Penetration testing and red teaming", "Identity, cloud or data security", "OT and critical infrastructure", "AI security and governance", "Incident response", "Something else"].map((o) => (
                <option key={o} className="text-paper-ink">{o}</option>
              ))}
            </select>
          </label>
          <label className="mt-6 block font-bold">What is going on?<textarea name="message" rows={4} className={field} /></label>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Magnetic>
              <button type="submit" className="inline-flex min-h-14 items-center bg-signal-ink px-9 font-bold text-ink transition-colors duration-200 hover:bg-paper-ink">
                Send message
              </button>
            </Magnetic>
            <p role="status" className="text-sm">{sent ? "Your email app should open with the message ready to send." : "This opens your email app. Nothing is stored on this page."}</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
