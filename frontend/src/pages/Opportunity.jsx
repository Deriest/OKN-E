import { Reveal, Eyebrow, SectionHeader, BarRow, ClosingCTA } from "@/components/section/Bits";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const chain = [
  { l: "1 Bag of BIOTRON™ (1.2 t)", v: "2.4 t CO₂e", n: "Twice the carbon, locked.", pct: 6 },
  { l: "1 Production Set / year", v: "28,800 t CO₂e", n: "≈ 6,261 cars off the road, forever.", pct: 18 },
  { l: "1 Facility (4 sets) / year", v: "115,000 t CO₂e", n: "≈ 25,000 cars gone for good.", pct: 38 },
  { l: "9 Facilities / year", v: "1 Mt CO₂e", n: "A net-zero milestone for a mid-sized nation.", pct: 72, highlight: true },
  { l: "Indonesia's potential", v: "43 Mt CO₂e/yr", n: "1,500+ sets supportable nationally.", pct: 100, terra: true },
];

export default function Opportunity() {
  return (
    <>
      <section className="relative pt-32 pb-16 vignette-warm">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="THE SCALE OPPORTUNITY"
            sub="Peluang Skala"
            headline="From One Bag to One Gigaton — the Math Is"
            em="Simple."
          />
        </div>
      </section>

      {/* SCALE CHAIN */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-7">
          {chain.map((c, i) => (
            <Reveal key={c.l} delay={i * 120}>
              <div className="grid lg:grid-cols-12 gap-6 items-baseline">
                <div className="lg:col-span-1 stat-num text-3xl text-okn-terracotta/70">{String(i + 1).padStart(2, "0")}</div>
                <div className="lg:col-span-11">
                  <BarRow label={c.l} pct={c.pct} value={c.v} highlight={c.highlight} terra={c.terra} />
                  <div className="text-sm text-okn-mint/65 mt-2 italic font-display">{c.n}</div>
                </div>
              </div>
            </Reveal>
          ))}
          <p className="text-xs text-okn-mint/45 mt-8 max-w-2xl">
            Projections based on current production parameters and feedstock availability. Actual deployment subject to regulatory and commercial conditions.
          </p>
        </div>
      </section>

      {/* INDONESIA'S ROLE */}
      <section className="relative py-28 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <Eyebrow sub="Peran Indonesia">INDONESIA'S ROLE</Eyebrow>
            <h2 className="h-display text-5xl sm:text-6xl text-okn-palemint mb-6">The World's <em>Other Lung.</em></h2>
            <p className="lead-body">
              Reaching the global 1-gigaton CDR target takes ~8,681 biochar facilities worldwide. Indonesia alone provides about 17% of the feedstock — more than the Amazon reference (~14%) — and it's still largely untapped. OKN is activating it.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Donut */}
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                <circle cx="100" cy="100" r="80" stroke="rgba(149,213,178,0.12)" strokeWidth="22" fill="none" />
                <circle cx="100" cy="100" r="80" stroke="#52b788" strokeWidth="22" fill="none"
                  strokeDasharray={`${(17/100) * 2 * Math.PI * 80} ${2 * Math.PI * 80}`} strokeLinecap="butt" />
                <circle cx="100" cy="100" r="80" stroke="#bc6c25" strokeWidth="22" fill="none"
                  strokeDasharray={`${(14/100) * 2 * Math.PI * 80} ${2 * Math.PI * 80}`}
                  strokeDashoffset={`-${(17/100) * 2 * Math.PI * 80}`} strokeLinecap="butt" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="stat-num text-5xl text-okn-leaf">17%</div>
                <div className="eyebrow mt-1">Indonesia (Biochar CDR Feedstock)</div>
                <div className="text-xs text-okn-terracotta mt-3">14% Amazon (ref)</div>
                <div className="text-[10px] text-okn-mint/40 mt-2">Of the 1 GT global CDR target</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY OKN WINS */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Eyebrow sub="Keunggulan OKN">WHY OKN WINS</Eyebrow>
          <h2 className="h-display text-5xl text-okn-palemint mb-6 max-w-3xl">Where BIOTRON™ <em>Pulls Ahead.</em></h2>
          <p className="lead-body max-w-3xl mb-12">
            A handful of numbers do most of the work in a carbon market. These separate BIOTRON™ from a standard biochar: 84.5% fixed carbon (vs ~70% market leader, vs ~50% general standard), 1,000+ years permanence, and a six-year zero-failure field record. Higher fixed carbon = higher permanence = higher price per tonne. The advantage isn't cosmetic — it's commercial.
          </p>
          <p className="text-xs text-okn-mint/50 max-w-3xl">
            Detailed competitive analysis and full financial projections are available under NDA to verified counterparties.
          </p>
        </div>
      </section>

      {/* AUDIENCE BLOCKS */}
      <section className="relative py-24 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-7">
          {/* Buyers */}
          <Reveal className="bg-okn-deep border border-okn-leaf/20 p-10 hover:border-okn-leaf/50 transition-colors">
            <Eyebrow sub="Untuk Pembeli Karbon">FOR CDR BUYERS</Eyebrow>
            <h3 className="h-display text-4xl text-okn-palemint mb-5">Durable Removal You Can <em>Verify.</em></h3>
            <p className="text-okn-palemint/70 leading-relaxed mb-8">
              BIOTRON™ delivers permanent, soil-locked carbon removal — 1,000+ years, lab-verified specification, and registry certification with Puro.earth and Isometric in progress. We are building our offtake pipeline with leading CDR marketplaces.
            </p>
            <Link to="/partner" className="btn-leaf text-xs uppercase tracking-eyebrow">Talk to Our Carbon Team <ArrowRight size={14} /></Link>
          </Reveal>
          {/* Investors */}
          <Reveal delay={120} className="bg-okn-deep border border-okn-terracotta/35 p-10 hover:border-okn-terracotta/70 transition-colors">
            <Eyebrow sub="Untuk Investor">FOR INVESTORS</Eyebrow>
            <h3 className="h-display text-4xl text-okn-cream mb-5">A Carbon-Negative Platform, <em>Built to Scale.</em></h3>
            <p className="text-okn-palemint/70 leading-relaxed mb-8">
              OKN pairs a specification-leading product with a vast, low-cost feedstock base and government backing. Full financial projections, investment terms and the data room are available under NDA to verified counterparties.
            </p>
            <Link to="/partner" className="btn-terra text-xs uppercase tracking-eyebrow">Request the Investor Brief <ArrowRight size={14} /></Link>
          </Reveal>
        </div>
      </section>

      <ClosingCTA headline="See the opportunity for yourself." em="Partner with us." testid="closing-partner-btn-opportunity" />
    </>
  );
}
