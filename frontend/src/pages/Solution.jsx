import { Reveal, Eyebrow, SectionHeader, ClosingCTA, BarRow, PullQuote } from "@/components/section/Bits";
import { CheckCircle2, FlaskConical, Factory, Layers } from "lucide-react";

const crises = [
  {
    n: "01",
    id: "Krisis Iklim",
    title: 'The Air Is',
    em: "Filling Up",
    body: "Every second, 1,400 tonnes of CO₂ enter the atmosphere. Carbon \"offsetting\" plants trees that grow for decades, then burn down. We remove carbon permanently — locking it into soil for 1,000+ years. Not slowing the fill. Reversing it.",
    quote: "Imagine filling a bathtub with the tap running. Most climate solutions just slow the tap. We're the drain.",
  },
  {
    n: "02",
    id: "Degradasi Tanah",
    title: 'Soil Is a Battery',
    em: "Running Empty",
    body: "Over 60% of Indonesia's agricultural land is losing productivity. Chemical fertilisers are a patch — masking the problem while accelerating depletion. BIOTRON™ repairs the battery permanently, restoring the soil biology that lets crops grow without chemical dependency.",
    quote: "A smartphone with a broken battery looks fine — until it shuts off. That's Indonesia's farmland.",
  },
  {
    n: "03",
    id: "Limbah Biomassa",
    title: "We Are Burning Our",
    em: "Climate Fortune",
    body: "Indonesia's 16.2M+ hectares of palm oil generate vast biomass that is burned or left to decompose — releasing carbon back into the air. TERRA KAYA™ captures that carbon at the source and locks it into BIOTRON™. Waste becomes the solution.",
    quote: "It's like having gold in your backyard and using it as firewood.",
  },
];

export default function Solution() {
  return (
    <>
      {/* INTRO / 3 CRISES */}
      <section className="relative pt-32 pb-24 vignette-warm">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="THE PROBLEM WE SOLVE"
            sub="Masalah yang Kami Selesaikan"
            headline="Three Crises. One"
            em="Root Cause."
            lead="Imagine a battery that took millions of years to charge — and humanity has been draining it for 200. That battery is the soil. We're here to recharge it permanently, and lock the damage in reverse."
          />
          <div className="space-y-20 mt-20">
            {crises.map((c, i) => (
              <Reveal key={c.n} delay={i * 80}>
                <div className="grid lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-1 stat-num text-6xl text-okn-terracotta/70">{c.n}</div>
                  <div className="lg:col-span-11">
                    <Eyebrow sub={c.id}>{`CRISIS ${c.n}`}</Eyebrow>
                    <h3 className="h-display text-4xl sm:text-5xl text-okn-palemint mb-6">{c.title} <em>{c.em}</em></h3>
                    <p className="lead-body max-w-3xl">{c.body}</p>
                    <PullQuote>{c.quote}</PullQuote>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEET BIOTRON */}
      <section className="relative py-28 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <Eyebrow sub="The Product">01 · THE PRODUCT</Eyebrow>
            <h2 className="h-display text-5xl sm:text-6xl text-okn-palemint mb-6">Meet <em>BIOTRON™</em></h2>
            <p className="lead-body">
              A biochar built for permanence that also happens to grow better crops. One product, two certified revenue streams: verifiable carbon removal, and measurable yield. Product established Sep 2024; the science behind it began in 2019.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-okn-forest to-okn-deep border border-okn-leaf/20 rounded-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 noise" />
              <div className="text-center px-8">
                <div className="font-display text-7xl text-okn-palemint italic">BIOTRON™</div>
                <div className="eyebrow mt-3">Biochar Three-in-One</div>
                <div className="text-okn-mint/50 text-xs mt-6 max-w-sm mx-auto">Activated biochar pressed from palm-biomass waste. Carbon-Negative · Soil-Positive · Future-Ready.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE BENCHMARK */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Eyebrow sub="Specification">02 · SPECIFICATION</Eyebrow>
          <h2 className="h-display text-5xl sm:text-6xl text-okn-palemint mb-6 max-w-3xl">The Global Benchmark. <em>Set.</em></h2>
          <p className="lead-body max-w-3xl mb-12">
            BIOTRON™ achieves 84.5% Fixed Carbon (db) — independently verified by PT. Carsurin, February 2026. The current global market leader in biochar carbon-removal credits reaches 70%. We surpass it by more than 14 percentage points. In carbon-credit markets, specification is price.
          </p>

          <div className="space-y-6 max-w-4xl mb-12">
            <BarRow label="Agricultural biochar (general)" pct={50} value="50%" />
            <BarRow label="Global market leader" pct={70} value="70%" />
            <BarRow label="BIOTRON™ by OKN  ✓ Verified" pct={84.5} value="84.5%" highlight />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="bg-okn-deeper border border-okn-leaf/20 p-8">
              <div className="stat-num text-6xl text-okn-leaf">84.5%</div>
              <div className="eyebrow mt-3">Fixed Carbon (db)</div>
              <div className="text-sm text-okn-palemint/60 mt-2">Lab-verified — PT. Carsurin · Feb 2026</div>
            </div>
            <div className="bg-okn-deeper border border-okn-terracotta/30 p-8">
              <div className="stat-num text-6xl text-okn-terracotta">+14pt</div>
              <div className="eyebrow mt-3">Above market leader</div>
              <div className="text-sm text-okn-palemint/60 mt-2">In carbon-credit markets, specification is price.</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative py-28 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-5">
            <Eyebrow sub="The Mechanism">03 · THE MECHANISM</Eyebrow>
            <h2 className="h-display text-5xl text-okn-palemint mb-6">Carbon Locked. <em>Soil Healed.</em></h2>
            <p className="lead-body">
              1.2 tonnes of BIOTRON™ removes ~2.4 tonnes of CO₂e — net removal of about 2.0 tonnes CO₂e per tonne of biochar (conservative). The carbon stays put for 1,000+ years. In the same field, soil biology recovers, yields rise, and fertiliser dependency drops. Where BIOTRON™ goes, soil-borne pathogens lose ground — the defence is biological, not chemical.
            </p>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {[
              { i: Layers, k: "1.2 t", l: "BIOTRON™ applied" },
              { i: CheckCircle2, k: "2.4 t", l: "CO₂e removed (gross)" },
              { i: FlaskConical, k: "~2.0 t", l: "Net CDR per tonne biochar" },
              { i: Factory, k: "1,000+ yr", l: "Permanence in soil" },
            ].map((b, i) => (
              <Reveal key={b.l} delay={i * 100} className="bg-okn-deep border border-okn-leaf/20 p-6">
                <b.i size={22} className="text-okn-leaf mb-4" />
                <div className="stat-num text-4xl text-okn-palemint">{b.k}</div>
                <div className="text-sm text-okn-palemint/60 mt-2">{b.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TERRA KAYA */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-okn-deeper via-okn-forest/40 to-okn-deep border border-okn-terracotta/25 rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 noise" />
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="relative h-full flex flex-col items-center justify-center text-center px-10">
                <div className="font-display text-6xl text-okn-cream italic">TERRA KAYA™</div>
                <div className="eyebrow mt-3 text-okn-terracotta">Carbon Capture · Continuous Pyrolysis</div>
                <div className="text-okn-mint/55 text-xs mt-6 max-w-sm">First commissioning · Batulicin, Kalimantan Selatan</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <Eyebrow sub="The Technology">04 · THE TECHNOLOGY</Eyebrow>
            <h2 className="h-display text-5xl text-okn-palemint mb-6">TERRA KAYA™ — Carbon Capture <em>at the Source</em></h2>
            <p className="lead-body">
              TERRA KAYA™ is OKN's production technology: it captures carbon from palm-biomass waste and converts it into BIOTRON™ biochar through continuous pyrolysis. First facility commissioning: Batulicin, Kalimantan Selatan.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="relative py-28 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="VERIFIED"
            sub="Terverifikasi"
            headline="Answerable to"
            em="Evidence."
            lead="Independently lab-verified by PT. Carsurin. Environmental permit (SPPL) in place. RSPO & ISPO partner. Carbon-registry certification with Puro.earth and Isometric in progress."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mt-10">
            {[
              { n: "PT Carsurin", v: "Lab Verified" },
              { n: "SPPL", v: "Permit Active" },
              { n: "RSPO", v: "Partner" },
              { n: "ISPO", v: "Partner" },
              { n: "Puro.earth", v: "In progress" },
              { n: "Isometric", v: "In progress" },
              { n: "EBC / WBC", v: "Target" },
            ].map((c) => (
              <div key={c.n} className="bg-okn-deep border border-okn-leaf/15 p-5 text-center hover:border-okn-leaf/40 transition-colors">
                <div className="font-display text-okn-palemint text-lg">{c.n}</div>
                <div className="eyebrow text-okn-mint/55 mt-2">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA headline="Want the verified specification sheet?" em="Talk to us." testid="closing-partner-btn-solution" />
    </>
  );
}
