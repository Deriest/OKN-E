import React from "react";
import { motion, useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { CTA } from "@/lib/site";
import { Eyebrow, Reveal, CTAButton, Counter, Divider } from "@/components/primitives";
import { ClosingCTA } from "@/components/Footer";

const CHAIN = [
  { label: "1 Bag of BIOTRON™ (1.2 t)", val: "removes 2.4 t CO₂e", note: "twice the carbon." },
  { label: "1 Production Set / year", val: "28,800 t CO₂e", note: "like 6,261 cars off the road, forever." },
  { label: "1 Facility (4 sets) / year", val: "115,000 t CO₂e", note: "~25,000 cars gone for good." },
  { label: "9 Facilities", val: "1 megatonne CDR / year", note: "a net-zero milestone for a mid-sized nation." },
  { label: "Indonesia's potential", val: "43M t CO₂e / year", note: "from palm biomass; 1,500+ sets supportable nationally." },
];

export default function Opportunity() {
  return (
    <div data-testid="opportunity-page">
      {/* SCALE CHAIN */}
      <section className="pt-36 pb-28 px-6 bg-forest-base">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>The Scale Opportunity · Peluang Skala</Eyebrow></Reveal>
            <Reveal delay={0.1}><h1 className="headline text-5xl sm:text-6xl text-white mt-6">From One Bag to One Gigaton — the Math Is <em>Simple.</em></h1></Reveal>
          </div>
          <div className="mt-16 space-y-4">
            {CHAIN.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.12}>
                <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 p-7 rounded-lg bg-forest-panel/40 border border-white/10"
                  style={{ marginLeft: `${i * 6}%` }}>
                  <div className="sm:w-1/3">
                    <p className="text-white font-medium">{c.label}</p>
                  </div>
                  <div className="sm:flex-1">
                    <p className="font-serif text-3xl text-leaf">{c.val}</p>
                    <p className="text-sm text-mint/55 mt-1">{c.note}</p>
                  </div>
                </div>
                {i < CHAIN.length - 1 && (
                  <div className="flex justify-center my-1" style={{ marginLeft: `${i * 6}%` }}>
                    <ArrowDown className="text-terracotta/60" size={18} />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="text-xs text-mint/40 mt-8 max-w-2xl">
              Projections based on current production parameters and feedstock availability. Actual deployment
              subject to regulatory and commercial conditions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INDONESIA'S ROLE */}
      <section className="py-32 px-6 bg-forest-deep">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal><Eyebrow>Indonesia's Role · Peran Indonesia</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">The World's <em>Other Lung.</em></h2></Reveal>
            <Reveal delay={0.2}>
              <p className="text-mint/75 mt-7 leading-relaxed max-w-lg">
                Reaching the global 1-gigaton CDR target takes ~8,681 biochar facilities worldwide.
                Indonesia alone provides about 17% of the feedstock — more than the Amazon reference (~14%) —
                and it's still largely untapped. OKN is activating it.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Donut />
          </Reveal>
        </div>
      </section>

      {/* WHY OKN WINS */}
      <section className="py-32 px-6 bg-forest-base">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Eyebrow className="!justify-center">Why OKN Wins · Keunggulan OKN</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">Where BIOTRON™ <em>Pulls Ahead.</em></h2></Reveal>
          <Reveal delay={0.2}>
            <p className="text-mint/75 mt-7 leading-relaxed">
              A handful of numbers do most of the work in a carbon market. These separate BIOTRON™ from a
              standard biochar: 84.5% fixed carbon (vs ~70% market leader, vs ~50% general standard), 1,000+ years
              permanence, and a six-year zero-failure field record. Higher fixed carbon = higher permanence =
              higher price per tonne. The advantage isn't cosmetic — it's commercial.
            </p>
          </Reveal>
          <Reveal delay={0.3}><p className="text-xs text-mint/45 mt-8">Detailed competitive analysis is available under NDA to verified counterparties.</p></Reveal>
        </div>
      </section>

      {/* AUDIENCE BLOCKS */}
      <section className="py-24 px-6 bg-forest-deep">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="p-9 rounded-lg bg-forest-panel/40 border border-white/10 h-full">
              <Eyebrow>For CDR Buyers · Untuk Pembeli Karbon</Eyebrow>
              <h3 className="headline text-3xl text-white mt-4">Durable Removal You Can <em>Verify.</em></h3>
              <p className="text-mint/70 mt-5 text-sm leading-relaxed">
                BIOTRON™ delivers permanent, soil-locked carbon removal — 1,000+ years, lab-verified
                specification, and registry certification (Puro.earth, Isometric) in progress. We are building
                our offtake pipeline with leading CDR marketplaces.
              </p>
              <div className="mt-7"><CTAButton label={CTA.cdr.label} href={CTA.cdr.href} variant="outline" testid="opp-cdr-cta" /></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-9 rounded-lg bg-forest-panel/40 border border-white/10 h-full">
              <Eyebrow>For Investors · Untuk Investor</Eyebrow>
              <h3 className="headline text-3xl text-white mt-4">A Carbon-Negative Platform, <em>Built to Scale.</em></h3>
              <p className="text-mint/70 mt-5 text-sm leading-relaxed">
                OKN pairs a specification-leading product with a vast, low-cost feedstock base and government
                accreditation. Full financials, terms and the data room are available under NDA to verified counterparties.
              </p>
              <div className="mt-7"><CTAButton label={CTA.investor.label} href={CTA.investor.href} variant="outline" testid="opp-investor-cta" /></div>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />
      <ClosingCTA headline={<>See the opportunity for yourself. <em>The soil is ready.</em></>} bahasa={null} />
    </div>
  );
}

function Donut() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const r = 80, c = 2 * Math.PI * r;
  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg viewBox="0 0 200 200" className="w-64 h-64">
        <circle cx="100" cy="100" r={r} fill="none" stroke="#1a3c2b" strokeWidth="22" />
        <motion.circle
          cx="100" cy="100" r={r} fill="none" stroke="#52b788" strokeWidth="22" strokeLinecap="round"
          strokeDasharray={c} transform="rotate(-90 100 100)"
          initial={{ strokeDashoffset: c }}
          animate={inView ? { strokeDashoffset: c * (1 - 0.17) } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <text x="100" y="94" textAnchor="middle" className="fill-white" style={{ fontFamily: "Cormorant Garamond", fontSize: 40 }}>17%</text>
        <text x="100" y="116" textAnchor="middle" className="fill-mint" style={{ fontSize: 9, letterSpacing: 2 }}>OF GLOBAL FEEDSTOCK</text>
      </svg>
      <div className="flex gap-6 mt-6 text-xs">
        <span className="flex items-center gap-2 text-mint/70"><span className="w-3 h-3 rounded-full bg-leaf" /> Indonesia 17%</span>
        <span className="flex items-center gap-2 text-mint/70"><span className="w-3 h-3 rounded-full bg-forest-pine" /> Amazon (ref) ~14%</span>
      </div>
      <p className="text-xs text-mint/45 mt-3">1 GT global target · 8,681 facilities worldwide</p>
    </div>
  );
}
