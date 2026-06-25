import React from "react";
import { IMG } from "@/lib/site";
import { Eyebrow, Reveal, Counter, Divider } from "@/components/primitives";
import { ClosingCTA } from "@/components/Footer";

const YIELDS = [
  { v: 97, t: "Max rice yield", sub: "BBPP Binuang · 15–30% less fertiliser" },
  { v: 62, t: "Shallots", sub: "8.5 → 14.9 t/ha · 5+ replicated seasons" },
  { v: 60, t: "Chili", sub: "1.7 → 4.8 kg/plant · 20–25% less fertiliser" },
  { v: 29, t: "Oil palm", sub: "Tanah Laut · 220 → 285 kg/tree · Ganoderma reduced" },
];

const RECORD = [
  { v: 0, s: "", l: "disease outbreaks (all sites)" },
  { v: 1000, s: "+", l: "years permanence" },
  { v: 18, s: "", l: "active sites" },
  { v: 16, s: "+", l: "crop types" },
  { v: 6, s: "+", l: "years validated" },
];

const CROPS = ["Padi", "Jagung Manis", "Jagung BISI", "Kelapa Sawit", "Kacang Tanah", "Kacang Hijau", "Bawang Merah", "Cabe", "Wortel", "Sayuran"];

export default function Proof() {
  return (
    <div data-testid="proof-page">
      {/* HEADER */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-forest-base">
        <div className="absolute inset-0">
          <img src={IMG.ricePaddy} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-base/70 to-forest-base" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Reveal><Eyebrow className="!justify-center">Field Validation · Validasi Lapangan</Eyebrow></Reveal>
          <Reveal delay={0.1}><h1 className="headline text-5xl sm:text-6xl text-white mt-6">Six Years. Eighteen Sites. <em>Zero</em> Failures.</h1></Reveal>
          <Reveal delay={0.2}>
            <p className="text-mint/75 mt-8 leading-relaxed">
              The most extensive independent biochar field programme in Indonesia. Across 8 regions,
              16+ crops, over 6 uninterrupted years — with not a single disease outbreak or trial failure recorded.
            </p>
          </Reveal>
        </div>
      </section>

      {/* YIELD RESULTS */}
      <section className="py-28 px-6 bg-forest-deep">
        <div className="max-w-6xl mx-auto">
          <Reveal><Eyebrow>Results · Hasil</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">Yields That <em>Speak Clearly</em></h2></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {YIELDS.map((y, i) => (
              <Reveal key={y.t} delay={i * 0.1}>
                <div className="p-7 rounded-lg bg-forest-panel/40 border border-white/10 h-full">
                  <p className="font-serif text-6xl text-leaf">+<Counter value={y.v} suffix="%" /></p>
                  <p className="text-white font-medium mt-3">{y.t}</p>
                  <p className="text-xs text-mint/55 mt-2">{y.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="text-xs text-mint/40 mt-8 max-w-2xl">
              Results based on current field studies. Actual outcomes may vary by location, soil composition and land history.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ZERO FAILURES */}
      <section className="py-32 px-6 bg-forest-base">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal><Eyebrow className="!justify-center">The Record · Rekam Jejak</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="headline text-5xl sm:text-6xl text-white mt-5">Zero Failures. <em>Zero.</em></h2></Reveal>
          <Reveal delay={0.2}>
            <p className="text-mint/75 mt-7 leading-relaxed max-w-2xl mx-auto">
              Six continuous years, 18 sites, 16+ crops — and not one disease outbreak on record.
              Where BIOTRON™ goes, Ganoderma, root rot and soil-borne pathogens lose ground. The mechanism
              isn't chemical suppression; it's soil biology healthy enough to defend itself.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-14">
            {RECORD.map((r, i) => (
              <Reveal key={r.l} delay={i * 0.08}>
                <p className="font-serif text-4xl text-leaf"><Counter value={r.v} suffix={r.s} /></p>
                <p className="text-xs text-mint/55 mt-2">{r.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CROPS */}
      <section className="py-28 px-6 bg-cream text-forest-base">
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow className="!justify-center !text-terracotta">The Breadth · Keluasan</Eyebrow>
          <h2 className="headline text-4xl sm:text-5xl mt-5">Proven Across <em className="text-terracotta">16+ Crops</em></h2>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {CROPS.map((c) => (
              <span key={c} className="px-5 py-2.5 text-sm bg-white border border-forest-pine/15 rounded-full text-forest-pine shadow-sm">{c}</span>
            ))}
          </div>
          <p className="text-sm text-forest-pine/70 mt-8">8 regions — from Kalimantan Selatan to Java, Sumatera and across the archipelago.</p>
        </div>
      </section>

      {/* GOVERNMENT ENDORSEMENT */}
      <section className="py-32 px-6 bg-forest-deep">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal><Eyebrow>Government Endorsement · Dukungan Pemerintah</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">Accredited by the <em>Ministry of Agriculture.</em></h2></Reveal>
            <Reveal delay={0.2}>
              <p className="text-mint/75 mt-7 leading-relaxed max-w-lg">
                Accredited by the Ministry of Agriculture of Indonesia (BPPSDMP). BIOTRON™ is recognised as a
                validated biochar input for Indonesia's national food-sovereignty programme (Swasembada Pangan),
                within a 243,000 ha programme scope. Formal cooperation established May 2025.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 p-6 rounded-lg bg-forest-panel/40 border border-terracotta/30">
                <p className="text-terracotta text-sm font-medium">🏆 TOP INOVASI PELAYANAN PUBLIK 2023 · Kategori Terpuji</p>
                <p className="text-xs text-mint/60 mt-2">Kementerian PAN-RB. National recognition of BIOTRON™ as Indonesia's certified agricultural innovation.</p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="rounded-lg overflow-hidden aspect-[4/3]">
              <img src={IMG.farmers} alt="Indonesian farmers who use BIOTRON" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT THIS MEANS */}
      <section className="py-32 px-6 bg-forest-base">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal><h2 className="headline text-4xl sm:text-5xl text-white">One Bag. A <em>Thousand</em> Years.</h2></Reveal>
          <Reveal delay={0.1}>
            <p className="text-mint/75 mt-7 leading-relaxed">
              Plant one bag of BIOTRON™ in your field today: your soil becomes richer, your yields rise by up
              to 97%, your fertiliser bill drops by up to 30% — and the carbon locked in that field will still
              be there in the year 3026, verified and credited on a global carbon registry.
            </p>
          </Reveal>
        </div>
      </section>

      <Divider />
      <ClosingCTA headline={<>Want the full field record? <em>The soil is ready.</em></>} bahasa={null} />
    </div>
  );
}
