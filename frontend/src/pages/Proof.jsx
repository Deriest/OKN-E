import { Reveal, Eyebrow, SectionHeader, StatCounter, ClosingCTA } from "@/components/section/Bits";
import { Award, ShieldCheck } from "lucide-react";

const yieldCards = [
  { pct: 97, p: "+", title: "Max Rice Yield", site: "BBPP Binuang", note: "15–30% less fertiliser" },
  { pct: 62, p: "+", title: "Shallots", site: "8.5 → 14.9 t/ha", note: "5+ replicated seasons" },
  { pct: 60, p: "+", title: "Chili", site: "1.7 → 4.8 kg/plant", note: "20–25% less fertiliser" },
  { pct: 29, p: "+", title: "Oil Palm", site: "Tanah Laut · 220 → 285 kg/tree", note: "Ganoderma reduced" },
];

const crops = ["Padi", "Jagung Manis", "Jagung BISI", "Kelapa Sawit", "Kacang Tanah", "Kacang Hijau", "Bawang Merah", "Cabe", "Wortel", "Sayuran"];
const regions = ["Tabalong", "Tapin", "Barito Kuala", "Tanah Bumbu", "Kapuas", "DIY Yogyakarta", "Malang", "Java Sea / KalSel"];

export default function Proof() {
  return (
    <>
      {/* HEADER */}
      <section className="relative pt-32 pb-20 vignette-warm">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="FIELD VALIDATION"
            sub="Validasi Lapangan"
            headline="Six Years. Eighteen Sites."
            em="Zero Failures."
            lead="The most extensive independent biochar field programme in Indonesia. Across 8 regions, 16+ crops, over 6 uninterrupted years — with not a single disease outbreak or trial failure recorded."
          />
        </div>
      </section>

      {/* YIELD RESULTS */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Eyebrow sub="Hasil">RESULTS</Eyebrow>
          <h2 className="h-display text-5xl text-okn-palemint mb-12">Yields That <em>Speak Clearly</em></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {yieldCards.map((y, i) => (
              <Reveal key={y.title} delay={i * 100} className="bg-okn-deeper border border-okn-leaf/20 p-7 hover:border-okn-leaf/45 transition-colors">
                <div className="stat-num text-6xl text-okn-leaf">
                  {y.p}<StatCounter to={y.pct} suffix="%" />
                </div>
                <div className="font-display text-2xl text-okn-palemint mt-4">{y.title}</div>
                <div className="text-sm text-okn-mint/70 mt-2">{y.site}</div>
                <div className="text-xs text-okn-palemint/50 mt-1">{y.note}</div>
              </Reveal>
            ))}
          </div>
          <p className="text-xs text-okn-mint/45 mt-10 max-w-2xl">
            Results based on current field studies. Actual outcomes may vary by location, soil composition and land history.
          </p>
        </div>
      </section>

      {/* ZERO FAILURES */}
      <section className="relative py-28 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-6">
            <Eyebrow sub="Rekam Jejak">THE RECORD</Eyebrow>
            <h2 className="h-display text-5xl text-okn-palemint mb-6">Zero Failures. <em>Zero.</em></h2>
            <p className="lead-body">
              Six continuous years, 18 sites, 16+ crops — and not one disease outbreak on record. Where BIOTRON™ goes, Ganoderma, root rot and soil-borne pathogens lose ground. The mechanism isn't chemical suppression; it's soil biology healthy enough to defend itself.
            </p>
          </Reveal>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {[
              { k: "0", l: "Disease outbreaks (all sites)" },
              { k: "1,000+", l: "Years permanence" },
              { k: "18", l: "Active sites" },
              { k: "16+", l: "Crop types" },
              { k: "6+", l: "Years validated" },
              { k: "8", l: "Regions" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 60} className="bg-okn-deep border border-okn-leaf/15 p-6">
                <div className="stat-num text-4xl text-okn-leaf">{s.k}</div>
                <div className="text-sm text-okn-palemint/65 mt-2">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CROPS */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Eyebrow sub="Keluasan">THE BREADTH</Eyebrow>
          <h2 className="h-display text-5xl text-okn-palemint mb-10">Proven Across <em>16+ Crops</em></h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {crops.map((c) => (
              <span key={c} className="px-4 py-2 border border-okn-leaf/25 rounded-full text-sm text-okn-palemint/80 hover:border-okn-leaf hover:text-okn-leaf transition-colors">
                {c}
              </span>
            ))}
          </div>
          <div className="text-sm text-okn-mint/65 mb-3">8 regions — from Kalimantan Selatan to Java, Sumatera and across the archipelago:</div>
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <span key={r} className="px-3 py-1 text-xs uppercase tracking-eyebrow text-okn-mint/70 border-b border-okn-terracotta/30">{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNMENT ENDORSEMENT */}
      <section className="relative py-28 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-7">
            <Eyebrow sub="Dukungan Pemerintah">GOVERNMENT ENDORSEMENT</Eyebrow>
            <h2 className="h-display text-5xl text-okn-palemint mb-6">Validated by the <em>Ministry of Agriculture.</em></h2>
            <p className="lead-body mb-8">
              Indonesia's Ministry of Agriculture (BPPSDMP) signed a formal Letter of Cooperation with OKN — naming BIOTRON™ the validated biochar input for the national food-sovereignty programme (Swasembada Pangan). Programme scope: 243,000 ha (Brigade Pangan). Signed May 2025.
            </p>
            <div className="flex items-start gap-4 p-6 bg-okn-deep border border-okn-terracotta/40">
              <Award size={28} className="text-okn-terracotta shrink-0 mt-1" />
              <div>
                <div className="font-display text-xl text-okn-cream">TOP INOVASI PELAYANAN PUBLIK 2023</div>
                <div className="eyebrow text-okn-sand mt-1">Kategori Terpuji · Kementerian PAN-RB</div>
                <div className="text-sm text-okn-palemint/65 mt-3">National recognition of BIOTRON™ as a certified Indonesian agricultural innovation.</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="aspect-[3/4] bg-gradient-to-br from-okn-pine/30 via-okn-deeper to-okn-deep border border-okn-leaf/20 rounded-sm flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 noise" />
              <ShieldCheck size={40} className="text-okn-leaf mb-6" />
              <div className="eyebrow mb-3">Kementerian Pertanian RI</div>
              <div className="font-display text-2xl text-okn-palemint">Letter of Cooperation</div>
              <div className="text-okn-mint/65 text-sm mt-4">BPPSDMP × OKN</div>
              <div className="text-xs text-okn-mint/40 mt-1">Signed May 2025 · 243,000 ha scope</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT THIS MEANS IN PRACTICE */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="h-display text-5xl sm:text-6xl text-okn-palemint mb-8">One Bag. A <em>Thousand</em> Years.</h2>
          <p className="lead-body">
            Plant one bag of BIOTRON™ in your field today: your soil becomes richer, your yields rise by up to 97%, your fertiliser bill drops by up to 30% — and the carbon locked in that field will still be there in the year 3026, verified and credited on a global carbon registry.
          </p>
        </div>
      </section>

      <ClosingCTA headline="Want the full field data?" em="Let's talk." testid="closing-partner-btn-proof" />
    </>
  );
}
