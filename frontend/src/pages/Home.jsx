import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Sprout, Flame } from "lucide-react";
import { IMG, CTA } from "@/lib/site";
import { Eyebrow, Reveal, CTAButton, Counter, Divider } from "@/components/primitives";
import Pressing from "@/components/Pressing";
import { ClosingCTA } from "@/components/Footer";

const CRED = [
  "Independently Lab-Verified — 84.5% Fixed Carbon (db)",
  "Accredited by the Ministry of Agriculture of Indonesia",
  "6+ Years · 18 Sites · 16+ Crops · Zero Failures",
  "243,000 ha National Food-Sovereignty Programme Scope",
  "Exclusive Technology Partnership",
  "Puro.earth & Isometric — Certification In Progress",
  "RSPO & ISPO Partner",
  "🏆 TOP INOVASI PELAYANAN PUBLIK 2023",
];

const CRISES = [
  { icon: Flame, title: "Climate", quote: "The air is filling up.", body: "Most solutions slow the tap. We're the drain." },
  { icon: Sprout, title: "Soil", quote: "Soil is a battery running empty.", body: "Over 60% of Indonesia's farmland is losing productivity. We recharge it." },
  { icon: Award, title: "Waste", quote: "We're burning our climate fortune.", body: "Billions of tonnes of biomass burned each year. We turn it into the cure." },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("okn_intro")) setShowIntro(true);
  }, []);

  const finishIntro = () => {
    sessionStorage.setItem("okn_intro", "1");
    setShowIntro(false);
  };

  return (
    <div data-testid="home-page">
      <AnimatePresence>
        {showIntro && <Pressing key="pressing" onComplete={finishIntro} />}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.canopyKalimantan} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-base/85 via-forest-base/70 to-forest-base" />
          <div className="absolute inset-0 grid-texture opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Carbon-Negative · Soil-Positive · Future-Ready</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="headline text-5xl sm:text-6xl lg:text-7xl text-white mt-6 text-balance">
                We Don't Offset Carbon.<br />We Lock It. <em>Permanently.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-mint/80 max-w-xl mt-8 leading-relaxed font-light">
                Six years of field validation behind a single idea — turn palm-biomass waste
                into permanent carbon removal and soil a farmer can see.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mt-10">
                <CTAButton label={CTA.primary.label} to="/partner" variant="solid" testid="hero-cta-primary" />
                <CTAButton label="See the Proof" to="/proof" variant="ghost" testid="hero-cta-proof" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <motion.img
              src={IMG.octopusBiochar}
              alt="OKN biochar octopus mark"
              className="w-[min(70vw,360px)] mark-glow"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section data-testid="credibility-bar" className="bg-forest-deep border-y border-white/10 py-6 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-[scroll_40s_linear_infinite]" style={{ animation: "none" }}>
          <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-4">
            {CRED.map((c) => (
              <div key={c} className="flex items-start gap-2 text-xs text-mint/70 leading-snug">
                <ShieldCheck size={14} className="text-leaf shrink-0 mt-0.5" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §1.2 THE OTHER LUNG */}
      <section className="relative py-32 px-6 bg-forest-base overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
              <img src={IMG.jungleBali} alt="Indonesian rainforest canopy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-base/70 to-transparent" />
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>Where We Come From · Dari Mana Kami Berasal</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl text-white mt-5">
                Indonesia Is the World's <em>Other Lung.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-mint/75 mt-7 leading-relaxed max-w-lg">
                The Amazon breathes for the West. Indonesia breathes for the rest. 17,508 islands —
                the world's largest archipelago, an untapped carbon vault beneath the richest soil on earth.
                We are not from a lab. We are from Kalimantan Selatan, the heart of Indonesia's oil-palm country.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-8 mt-10">
              <Reveal delay={0.3}>
                <p className="font-serif text-5xl text-leaf"><Counter value={43.2} decimals={1} suffix="M" /></p>
                <p className="text-sm text-mint/60 mt-2">tonnes CO₂e removable each year from Indonesia's palm biomass — without planting a single new tree.</p>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="font-serif text-5xl text-leaf"><Counter value={17} suffix="%" /></p>
                <p className="text-sm text-mint/60 mt-2">of the world's entire 1-gigaton biochar CDR potential sits within Indonesia's existing farmland.</p>
              </Reveal>
            </div>
            <Reveal delay={0.5}>
              <Link to="/story" className="inline-flex items-center gap-2 text-leaf mt-9 text-sm hover:gap-3 transition-all" data-testid="link-story">
                Read our story <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* §1.3 THREE CRISES */}
      <section className="py-32 px-6 bg-forest-deep">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>The Problem We Solve · Masalah Yang Kami Selesaikan</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl text-white mt-5">
                Three Crises. One <em>Root Cause.</em> One Answer.
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {CRISES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12}>
                <div className="group h-full p-8 rounded-lg bg-forest-panel/40 border border-white/10 hover:border-terracotta/50 transition-all duration-500 hover:-translate-y-1">
                  <c.icon className="text-terracotta mb-6" size={28} />
                  <p className="eyebrow text-mint/50">{c.title}</p>
                  <p className="font-serif italic text-2xl text-white mt-3">"{c.quote}"</p>
                  <p className="text-mint/65 mt-4 text-sm leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <Link to="/solution" className="inline-flex items-center gap-2 text-leaf mt-12 text-sm hover:gap-3 transition-all" data-testid="link-solution">
              See how BIOTRON™ works <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* §1.4 MEET BIOTRON */}
      <section className="py-32 px-6 bg-cream text-forest-base">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow className="!text-terracotta">The Solution · Solusi</Eyebrow>
            <h2 className="headline text-4xl sm:text-5xl lg:text-6xl mt-5">
              One Product. <span className="italic text-terracotta">Two</span> Certified Streams.
            </h2>
            <p className="text-forest-pine mt-7 leading-relaxed max-w-lg">
              BIOTRON™ is a biochar built for permanence that also happens to grow better crops.
              Carbon removal you can verify, and yields a farmer can measure.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-9">
              {["84.5% Fixed Carbon (db)", "+14pt above market leader", "1,000+ years permanence"].map((s) => (
                <span key={s} className="text-sm font-medium text-forest-pine border-l-2 border-leaf pl-3">{s}</span>
              ))}
            </div>
            <Link to="/solution" className="inline-flex items-center gap-2 text-forest-pine font-medium mt-9 text-sm hover:gap-3 transition-all" data-testid="link-solution-2">
              Explore the technology <ArrowRight size={16} />
            </Link>
          </div>
          <Reveal>
            <div className="rounded-lg overflow-hidden aspect-square">
              <img src={IMG.handSoil} alt="Hand holding rich dark biochar soil" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* §1.5 THE PROOF */}
      <section className="py-32 px-6 bg-forest-base">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>The Proof · Bukti</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="headline text-4xl sm:text-5xl lg:text-6xl text-white mt-5">
                Six Years. Eighteen Sites. <em>Zero</em> Failures.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-mint/75 mt-6 max-w-xl">
                The most extensive independent biochar field programme in Indonesia — not one disease
                outbreak or trial failure on record.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {[
              { v: 97, p: "+", s: "%", l: "rice" },
              { v: 62, p: "+", s: "%", l: "shallots" },
              { v: 60, p: "+", s: "%", l: "chili" },
              { v: 29, p: "+", s: "%", l: "oil palm" },
              { v: 30, p: "−", s: "%", l: "fertiliser" },
              { v: 0, p: "", s: "", l: "disease outbreaks" },
            ].map((c, i) => (
              <Reveal key={c.l} delay={i * 0.08}>
                <div className="border-t border-white/15 pt-5">
                  <p className="font-serif text-4xl text-leaf">{c.p}<Counter value={c.v} suffix={c.s} /></p>
                  <p className="text-xs text-mint/55 mt-2">{c.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <Link to="/proof" className="inline-flex items-center gap-2 text-leaf mt-12 text-sm hover:gap-3 transition-all" data-testid="link-proof">
              See the field record <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* §1.6 THE OPPORTUNITY */}
      <section className="relative py-32 px-6 bg-forest-deep overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.oilPalm} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-forest-deep/80" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal><Eyebrow className="!justify-center">The Scale Opportunity · Peluang Skala</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="headline text-4xl sm:text-5xl lg:text-6xl text-white mt-5">
              From One Bag to <em>One Gigaton.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-mint/75 mt-7 max-w-xl mx-auto leading-relaxed">
              The opportunity scales along a simple chain — each step multiplying the one before it,
              from a single bag of biochar to a billion tonnes of carbon removed.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10">
              <CTAButton label="See the math" to="/opportunity" variant="outline" testid="link-opportunity" />
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />
      <ClosingCTA />
    </div>
  );
}
