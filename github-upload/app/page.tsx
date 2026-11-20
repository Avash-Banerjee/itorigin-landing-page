"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Preloader } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { CommandPalette } from "@/components/CommandPalette";
import { Hero } from "@/components/Hero";
import { Tape } from "@/components/Tape";
import { Services } from "@/components/Services";
import { Engage } from "@/components/Engage";
import { Resilience } from "@/components/Resilience";
import { Sectors } from "@/components/Sectors";
import { Notes } from "@/components/Notes";
import { Products } from "@/components/Products";
import { Explorer } from "@/components/Explorer";
import { Facts } from "@/components/Facts";
import { Readiness } from "@/components/Readiness";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [palette, setPalette] = useState(false);
  return (
    // reducedMotion="user" makes every Framer Motion animation respect prefers-reduced-motion
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <Cursor />
      <Preloader />
      <Header onSearch={() => setPalette(true)} />
      <CommandPalette open={palette} setOpen={setPalette} />
      <main id="main" className="relative z-10 bg-bg">
        <Hero />
        <Tape />
        <Services />
        <Engage />
        <Products />
        <Sectors />
        <Explorer />
        <Facts />
        <Readiness />
        <Process />
        <Resilience />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
