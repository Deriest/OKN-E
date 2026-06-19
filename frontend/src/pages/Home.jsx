import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Cloud, Flame, ChevronDown } from "lucide-react";
import { Eyebrow, Reveal, StatCounter, ClosingCTA, SectionHeader, BarRow } from "@/components/section/Bits";
import { HERO, HOME, CLOSING } from "@/constants/testIds";

export default function Home() {
  return (
    <>
      {/* 1.1 HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden vignette-warm">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(82,183,136,0.10),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <Eyebrow sub="Carbon-Negative · Soil-Positive · Future-Ready">CARBON-NEGATIVE · SOIL-POSITIVE · FUTURE-READY</Eyebrow>
            <h1 className="h-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-okn-palemint">
              We Don't Offset Carbon.
              <br />
              We Lock It. <em>Permanently.</em>
            </h1>
            <p className="lead-body max-w-xl">
              Six years of field validation behind a single idea: turn palm-biomass waste into permanent carbon removal and soil health a farmer can see — proven across 16+ crops in 8 regions of Indonesia.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/partner" data-testid={HERO.partnerBtn} className="btn-leaf text-sm uppercase tracking-eyebrow">
                Partner With Us <ArrowRight size={16} />
              </Link>
              <Link to="/proof" data-testid={HERO.proofBtn} className="btn-ghost-leaf text-sm uppercase tracking-eyebrow">
                See the Proof
              </Link>
            </div>
            <div className="pt-8 flex flex-wrap gap-x-6 gap-y-3 text-[11px] uppercase tracking-eyebrow text-okn-mint/55">
              <span>BIOTRON™</span>
              <span className="text-okn-mint/30">·</span>
              <span>84.5% Fixed Carbon (lab-verified)</span>
              <span className="text-okn-mint/30">·</span>
              <span>6+ Years</span>
              <span className="text-okn-mint/30">·</span>
              <span>18 Sites</span>
              <span className="text-okn-mint/30">·</span>
              <span>Zero Failures</span>
              <span className="text-okn-mint/30">·</span>
              <span>Kementerian Pertanian RI</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(82,183,136,0.18),transparent_60%)] animate-breathe" />
              <img
                src="/assets/mark-light.png"
                alt="OKN octopus mark"
                className="relative w-full h-full object-contain animate-imprint"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-eyebrow text-okn-mint/40">
                Karya Nusantara · Imprint of the Soil
              </div>
            </div>
          </div>
        </div>
        <div data-testid={HERO.scrollCue} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-eyebrow text-okn-mint/40 animate-bounce">
          Scroll to Explore
          <ChevronDown size={14} />
        </div>
      </section>

      {/* 1.2 THE OTHER LUNG */}
      <section className="relative py-28 sm:py-36 border-t border-okn-leaf/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              eyebrow="WHERE WE COME FROM"
              sub="Dari Mana Kami Berasal"
              headline="Indonesia Is the World's"
              em="Other Lung."
              lead="The Amazon breathes for the West. Indonesia breathes for the rest. 17,508 islands — the world's largest archipelago, and an untapped carbon vault sitting beneath the richest soil on earth. We are not from a lab. We are from Kalimantan Selatan, the heart of Indonesia's oil-palm country."
            />
            <Link to="/story" data-testid={HOME.storyLink} className="inline-flex items-center gap-2 text-okn-leaf text-sm uppercase tracking-eyebrow hover:gap-3 transition-all">
              Read Our Story <ArrowRight size={14} />
            </Link>
          </Reveal>
          <div className="lg:col-span-5 grid gap-6 content-center">
            <Reveal delay={120} className="bg-okn-deeper/60 border border-okn-leaf/15 p-8 rounded-sm">
              <div className="stat-num text-6xl"><StatCounter to={43.2} decimals={1} suffix="M" /></div>
              <p className="text-sm text-okn-palemint/65 mt-2">tonnes CO₂e removable each year from Indonesia's palm biomass alone — without planting a single new tree.</p>
            </Reveal>
            <Reveal delay={240} className="bg-okn-forest/30 border border-okn-terracotta/25 p-8 rounded-sm">
              <div className="stat-num text-6xl text-okn-terracotta"><StatCounter to={17} suffix="%" /></div>
              <p className="text-sm text-okn-palemint/65 mt-2">of the world's entire 1-gigaton biochar CDR potential sits within Indonesia's existing farmland.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 1.3 THREE CRISES TEASER */}
      <section className="relative py-28 sm:py-36 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="THE PROBLEM WE SOLVE"
            sub="Masalah yang Kami Selesaikan"
            headline="Three Crises. One"
            em="Root Cause."
            lead="And one answer that addresses all three at once."
          />
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {[
              { icon: Cloud, eyebrow: "01 · Climate", title: "The air is filling up.", body: "Most solutions slow the tap. We're the drain — locking carbon into soil for 1,000+ years." },
              { icon: Sprout, eyebrow: "02 · Soil", title: "Soil is a battery running empty.", body: "Over 60% of Indonesia's farmland is losing productivity. BIOTRON™ recharges it permanently." },
              { icon: Flame, eyebrow: "03 · Waste", title: "We're burning our climate fortune.", body: "Billions of tonnes of biomass burned each year. We turn that waste into the cure." },
            ].map((c, i) => (
              <Reveal key={c.eyebrow} delay={i * 120} className="group bg-okn-deep border border-okn-leaf/15 p-8 hover:border-okn-leaf/40 transition-colors">
                <c.icon size={28} className="text-okn-leaf mb-6" />
                <div className="eyebrow mb-3">{c.eyebrow}</div>
                <h3 className="font-display text-2xl text-okn-palemint mb-3">{c.title}</h3>
                <p className="text-sm text-okn-palemint/65 leading-relaxed">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/solution" data-testid={HOME.solutionLink} className="inline-flex items-center gap-2 text-okn-leaf text-sm uppercase tracking-eyebrow hover:gap-3 transition-all">
              See How BIOTRON™ Works <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 1.4 MEET BIOTRON */}
      <section className="relative py-28 sm:py-36 border-t border-okn-leaf/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-6">
            <SectionHeader
              eyebrow="THE SOLUTION"
              sub="Solusi"
              headline="One Product."
              em="Two Certified Streams."
              lead="BIOTRON™ is a biochar built for permanence that also happens to grow better crops. That dual nature is the whole point — carbon removal you can verify, and yields a farmer can measure."
            />
            <Link to="/solution" data-testid={HOME.solutionLink + '-2'} className="inline-flex items-center gap-2 text-okn-leaf text-sm uppercase tracking-eyebrow hover:gap-3 transition-all">
              Explore the Technology <ArrowRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 grid grid-cols-3 gap-4 content-center">
            {[
              { k: "84.5%", l: "Fixed Carbon (db)" },
              { k: "+14pt", l: "Above market leader" },
              { k: "1,000+", l: "Years permanence" },
            ].map((s) => (
              <div key={s.k} className="bg-okn-deeper/60 border border-okn-leaf/15 p-6 text-center">
                <div className="stat-num text-3xl sm:text-4xl text-okn-leaf">{s.k}</div>
                <div className="text-[10px] uppercase tracking-eyebrow text-okn-mint/55 mt-2">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 1.5 PROOF TEASER */}
      <section className="relative py-28 sm:py-36 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="THE PROOF"
            sub="Bukti"
            headline="Six Years. Eighteen Sites."
            em="Zero Failures."
            lead="The most extensive independent biochar field programme in Indonesia — and not one disease outbreak or trial failure on record."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              { k: 97, suf: "%", p: "+", l: "Max rice yield" },
              { k: 62, suf: "%", p: "+", l: "Shallots" },
              { k: 60, suf: "%", p: "+", l: "Chili" },
              { k: 29, suf: "%", p: "+", l: "Oil palm" },
              { k: 30, suf: "%", p: "−", l: "Fertiliser" },
              { k: 0, suf: "", p: "", l: "Disease outbreaks" },
            ].map((s) => (
              <Reveal key={s.l} className="bg-okn-deep border border-okn-leaf/15 p-6">
                <div className="stat-num text-5xl text-okn-leaf">
                  {s.p}
                  <StatCounter to={s.k} suffix={s.suf} />
                </div>
                <div className="text-sm text-okn-palemint/65 mt-2">{s.l}</div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/proof" data-testid={HOME.proofLink} className="inline-flex items-center gap-2 text-okn-leaf text-sm uppercase tracking-eyebrow hover:gap-3 transition-all">
              See the Field Record <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 1.6 OPPORTUNITY TEASER */}
      <section className="relative py-28 sm:py-36 border-t border-okn-leaf/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="THE SCALE OPPORTUNITY"
            sub="Peluang Skala"
            headline="From One Bag to"
            em="One Gigaton."
            lead="The opportunity scales along a simple chain — each step multiplying the one before it, from a single bag of biochar to a billion tonnes of carbon removed."
          />
          <div className="space-y-5 max-w-4xl mt-10">
            <BarRow label="One bag (1.2 t BIOTRON™)" pct={6}  value="2.4 t CO₂e" />
            <BarRow label="One production set / year" pct={20} value="28,800 t CO₂e" />
            <BarRow label="One facility (4 sets) / year" pct={45} value="115,000 t CO₂e" highlight />
            <BarRow label="Nine facilities" pct={75} value="1 Mt CO₂e/yr" highlight />
            <BarRow label="Indonesia's potential" pct={100} value="43 Mt CO₂e/yr" terra />
          </div>
          <div className="mt-10">
            <Link to="/opportunity" data-testid={HOME.opportunityLink} className="inline-flex items-center gap-2 text-okn-leaf text-sm uppercase tracking-eyebrow hover:gap-3 transition-all">
              See the Math <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 1.7 CLOSING CTA */}
      <ClosingCTA headline="The Soil Is Ready." em="Are You?" sub="Tanahnya Siap. Apakah Anda Siap?" testid={CLOSING.partnerBtn} />
    </>
  );
}
