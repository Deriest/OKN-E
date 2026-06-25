import React from "react";
import { IMG } from "@/lib/site";
import { Eyebrow, Reveal, CTAButton, Bar, Counter, Divider } from "@/components/primitives";
import { ClosingCTA } from "@/components/Footer";

const CRISES = [
  {
    n: "01", k: "Krisis Iklim", t: <>The Air Is <em>Filling Up</em></>,
    body: "Every second, 1,400 tonnes of CO₂ enter the atmosphere. \"Offsetting\" plants trees that grow for decades, then burn down. We remove carbon permanently — locking it into soil for 1,000+ years. Not slowing the fill. Reversing it.",
    quote: "Imagine filling a bathtub with the tap running. Most climate solutions just slow the tap. We're the drain.",
  },
  {
    n: "02", k: "Degradasi Tanah", t: <>Soil Is a Battery <em>Running Empty</em></>,
    body: "Over 60% of Indonesia's agricultural land is losing productivity. Chemical fertilisers are a patch — masking the problem while accelerating depletion. BIOTRON™ repairs the battery permanently, restoring the soil biology that lets crops grow without chemical dependency.",
    quote: "A smartphone with a broken battery looks fine — until it shuts off. That's Indonesia's farmland.",
  },
  {
    n: "03", k: "Limbah Biomassa", t: <>We Are Burning Our <em>Climate Fortune</em></>,
    body: "Indonesia's 16.2M+ hectares of palm oil generate vast biomass that is burned or left to decompose — releasing carbon back into the air. TERRA KAYA™ captures that carbon at the source and locks it into BIOTRON™. Waste becomes the solution.",
    quote: "It's like having gold in your backyard and using it as firewood.",
  },
];

export default function Solution() {
  return (
    <div data-testid="solution-page">
      {/* INTRO */}
      <section className="pt-36 pb-24 px-6 bg-forest-base">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Eyebrow className="!justify-center">The Problem We Solve · Masalah Yang Kami Selesaikan</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="headline text-5xl sm:text-6xl text-white mt-6">
              Three Crises. One <em>Root Cause.</em> One Answer.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-mint/75 mt-8 leading-relaxed">
              Imagine a battery that took millions of years to charge — and humanity has been
              draining it for 200. That battery is the soil. We're here to recharge it permanently,
              and lock the damage in reverse.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CRISES */}
      <section className="pb-24 px-6 bg-forest-base">
        <div className="max-w-6xl mx-auto space-y-px">
          {CRISES.map((c, i) => (
            <Reveal key={c.n}>
              <div className="grid lg:grid-cols-12 gap-8 py-14 border-t border-white/10 items-start">
                <div className="lg:col-span-3">
                  <p className="font-serif text-6xl text-terracotta/50">{c.n}</p>
                  <p className="eyebrow text-mint/50 mt-2">{c.k}</p>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="headline text-3xl sm:text-4xl text-white">{c.t}</h2>
                  <p className="text-mint/75 mt-5 leading-relaxed max-w-2xl">{c.body}</p>
                  <p className="font-serif italic text-xl text-mint/60 mt-6 border-l-2 border-terracotta pl-5 max-w-2xl">{c.quote}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEET BIOTRON */}
      <section className="py-32 px-6 bg-cream text-forest-base">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="rounded-lg overflow-hidden aspect-[4/5]">
              <img src={IMG.productBags} alt="BIOTRON biochar product bags" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Eyebrow className="!text-terracotta">01 · The Product</Eyebrow>
            <h2 className="headline text-4xl sm:text-5xl mt-5">Meet <em className="text-terracotta not-italic font-medium">BIOTRON™</em></h2>
            <p className="text-forest-pine mt-7 leading-relaxed max-w-lg">
              A biochar built for permanence that also happens to grow better crops. One product,
              two certified revenue streams: verifiable carbon removal, and measurable yield.
              Product established Sep 2024; the science behind it began in 2019.
            </p>
          </div>
        </div>
      </section>

      {/* GLOBAL BENCHMARK */}
      <section className="py-32 px-6 bg-forest-deep">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal><Eyebrow>02 · Specification</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">The Global Benchmark. <em>Set.</em></h2></Reveal>
            <Reveal delay={0.2}>
              <p className="text-mint/75 mt-7 leading-relaxed max-w-lg">
                BIOTRON™ achieves 84.5% Fixed Carbon (db) — independently verified, February 2026.
                The current global market leader in biochar carbon-removal credits reaches 70%.
                We surpass it by more than 14 percentage points. In carbon-credit markets, specification is price.
              </p>
            </Reveal>
            <div className="flex gap-10 mt-9">
              <div><p className="font-serif text-5xl text-leaf"><Counter value={84.5} decimals={1} suffix="%" /></p><p className="text-xs text-mint/55 mt-1">Fixed Carbon (db)</p></div>
              <div><p className="font-serif text-5xl text-leaf">+14<span className="text-2xl">pt</span></p><p className="text-xs text-mint/55 mt-1">above market leader</p></div>
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="p-8 rounded-lg bg-forest-panel/30 border border-white/10 space-y-7">
              <Bar label="Agricultural biochar (general)" percent={50} color="#2d6a4f" />
              <Bar label="Global market leader" percent={70} color="#95d5b2" delay={0.15} />
              <Bar label="BIOTRON™ by OKN ✓ Verified" percent={84.5} highlight delay={0.3} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 px-6 bg-forest-base">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Eyebrow className="!justify-center">03 · The Mechanism</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">Carbon Locked. <em>Soil Healed.</em></h2></Reveal>
          <Reveal delay={0.2}>
            <p className="text-mint/75 mt-7 leading-relaxed">
              1.2 tonnes of BIOTRON™ removes ~2.4 tonnes of CO₂e — net removal of about 2.0 tonnes
              CO₂e per tonne of biochar (conservative). The carbon stays put for 1,000+ years. In the
              same field, soil biology recovers, yields rise, and fertiliser dependency drops. Where
              BIOTRON™ goes, soil-borne pathogens lose ground — the defence is biological, not chemical.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TERRA KAYA */}
      <section className="py-32 px-6 bg-forest-deep">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal><Eyebrow>04 · The Technology</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">TERRA KAYA™ — Carbon Capture <em>at the Source</em></h2></Reveal>
            <Reveal delay={0.2}>
              <p className="text-mint/75 mt-7 leading-relaxed max-w-lg">
                TERRA KAYA™ is OKN's production technology: it captures carbon from palm-biomass waste
                and converts it into BIOTRON™ through continuous pyrolysis. First facility commissioning:
                Batulicin, Kalimantan Selatan. Built on an exclusive technology partnership (details under NDA).
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img src={IMG.biocharTexture} alt="Biochar charcoal texture" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-32 px-6 bg-forest-base">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal><Eyebrow className="!justify-center">Verified · Terverifikasi</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">Answerable to <em>Evidence.</em></h2></Reveal>
          <Reveal delay={0.2}>
            <p className="text-mint/75 mt-7 leading-relaxed max-w-2xl mx-auto">
              Specification independently verified by an accredited laboratory. Environmental permit (SPPL)
              in place. RSPO & ISPO partner. Carbon-registry certification with Puro.earth and Isometric in progress.
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {["Independent Lab", "SPPL", "RSPO", "ISPO", "Puro.earth (in progress)", "Isometric (in progress)", "EBC/WBC (target)"].map((l) => (
              <span key={l} className="px-4 py-2 text-xs text-mint/70 border border-white/15 rounded-full">{l}</span>
            ))}
          </div>
        </div>
      </section>

      <Divider />
      <ClosingCTA headline={<>Want the verified specification sheet? <em>The soil is ready.</em></>} bahasa={null} />
    </div>
  );
}
