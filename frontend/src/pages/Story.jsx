import { Reveal, Eyebrow, SectionHeader, PullQuote, ClosingCTA } from "@/components/section/Bits";
import { Star, Handshake, Trees, FlaskConical, Wheat } from "lucide-react";

const roots = [
  { i: Star, n: "01", en: "Conscience Before Commerce", id: "Integritas di Atas Segalanya", body: "Every claim is answerable to evidence. We earn trust through certified data, not marketing. When science and commerce disagree, science wins.", note: "The arm that points skyward." },
  { i: Handshake, n: "02", en: "Dignity in Every Handshake", id: "Martabat dalam Setiap Kesepakatan", body: "From the farmer holding our biochar to the executive signing carbon credits — every partner is met as an equal. Fair terms. Fair outcomes. No one is extracted from.", note: "The arm that reaches for connection." },
  { i: Trees, n: "03", en: "Rooted to Rise", id: "Berakar untuk Berkembang", body: "Born on one island, branching across the archipelago. Our solutions are strongest when they stay connected to their origin — soil, community, climate. We grow outward, never upward without roots.", note: "The largest arm, our widest reach." },
  { i: FlaskConical, n: "04", en: "Wisdom of the Many", id: "Kearifan Bersama", body: "BIOTRON™ was not invented in isolation. It was proven across 18 sites, 16+ crops and thousands of field conversations. We build with people, not for them. The farmer's knowledge is our R&D.", note: "The arm shaped by deliberation." },
  { i: Wheat, n: "05", en: "Harvest That Reaches All", id: "Panen yang Berkeadilan", body: "Clean soil is not a luxury product. The gains we generate are not for shareholders alone — every benefit must flow back to the communities who tend the land, from Kalimantan to Papua.", note: "The arm anchored to the earth." },
];

const islands = [
  { n: "Sumatra", note: "Palm · Petroleum · Minerals" },
  { n: "Java", note: "Rice · Industry" },
  { n: "Kalimantan ★", note: "FIRST PROJECT: 243,000 ha palm oil · KalSel" },
  { n: "Sulawesi", note: "Nickel · Cocoa" },
  { n: "Nusa Tenggara · Bali", note: "Tourism · Marine" },
  { n: "Maluku", note: "Spices · Marine" },
  { n: "Papua", note: "Gold · Copper · Biodiversity" },
];

export default function Story() {
  return (
    <>
      {/* THE OTHER LUNG */}
      <section className="relative pt-32 pb-24 vignette-warm">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
          <Reveal className="lg:col-span-7">
            <SectionHeader
              eyebrow="WHERE WE COME FROM"
              sub="Dari Mana Kami Berasal"
              headline="Indonesia Is the World's"
              em="Other Lung."
              lead="The Amazon breathes for the West. Indonesia breathes for the rest. 17,508 islands; the world's largest archipelago; an untapped carbon vault beneath the richest soil on earth. Most people know the Amazon. Few know Indonesia's forests and soils hold equivalent climate power — and most of that potential is still untouched. We are from Kalimantan Selatan, the heart of Indonesia's oil-palm country."
            />
            <PullQuote>Indonesia does not need to import climate solutions. It is sitting on them.</PullQuote>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="relative aspect-square bg-gradient-to-br from-okn-deeper to-okn-forest/40 border border-okn-leaf/15 rounded-sm p-8 overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 noise" />
              <div className="relative h-full flex flex-col">
                <Eyebrow sub="17,508 Islands · 5.8M km² Sea">INDONESIA</Eyebrow>
                {/* Stylised breathing lungs */}
                <div className="flex-1 relative flex items-center justify-center my-4">
                  <div className="absolute w-44 h-44 rounded-full bg-okn-leaf/20 blur-2xl animate-breathe" />
                  <svg viewBox="0 0 200 200" className="w-48 h-48 animate-breathe">
                    <path d="M70 40 C30 60, 30 140, 80 170 C90 175, 95 165, 95 150 L95 50 C95 35, 80 30, 70 40 Z" fill="#52b788" fillOpacity="0.35" stroke="#95d5b2" strokeWidth="1" />
                    <path d="M130 40 C170 60, 170 140, 120 170 C110 175, 105 165, 105 150 L105 50 C105 35, 120 30, 130 40 Z" fill="#52b788" fillOpacity="0.35" stroke="#95d5b2" strokeWidth="1" />
                    <line x1="100" y1="20" x2="100" y2="50" stroke="#95d5b2" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  {islands.map((i, idx) => (
                    <div key={i.n} className={`flex justify-between gap-3 ${idx === 2 ? "text-okn-terracotta" : "text-okn-mint/70"}`}>
                      <span className="font-medium">{i.n}</span>
                      <span className="text-okn-mint/45 text-right">{i.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EMERALD OF THE EQUATOR */}
      <section className="relative py-28 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="THE EMERALD OF THE EQUATOR"
            sub="Zamrud Khatulistiwa"
            headline="Why the Octopus. Why"
            em="Emerald. Why Here."
            lead="Indonesia is not only a land nation — it is a sea nation: 5.8 million km² of ocean, one of the world's richest marine ecosystems. The colonial poets called it Zamrud Khatulistiwa, the Emerald of the Equator, for the colour of its sea and the richness of its soil. That's why our brand is emerald green — not for aesthetics, but for identity."
          />
          <div className="mt-10 max-w-3xl">
            <p className="lead-body">
              The octopus lives where land meets sea: the most intelligent invertebrate on earth, a problem-solver reaching in five directions at once, every arm independent but joined to one centre of purpose. When we first saw BIOTRON™ pressed into dark soil, we saw the same shape — five arms, five connections, five roots. The biochar left the imprint of an octopus in the earth. That became our mark.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-6 text-okn-mint/65 font-display italic text-xl">
            <span>From the sea.</span>
            <span className="text-okn-leaf">→</span>
            <span>Into the soil.</span>
            <span className="text-okn-leaf">→</span>
            <span>Pressing its mark permanently into the earth.</span>
          </div>
        </div>
      </section>

      {/* FIVE ROOTS */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="OUR FOUNDATION"
            sub="Fondasi Kami"
            headline="Five Roots. One"
            em="Purpose."
            lead="These are not corporate values. They are a covenant — rooted in the soul of an archipelago, inscribed in the five arms of our mark."
          />
          <div className="grid lg:grid-cols-2 gap-6 mt-12">
            {roots.map((r, i) => (
              <Reveal key={r.n} delay={i * 90} className="bg-okn-deeper border border-okn-leaf/20 p-8 hover:border-okn-leaf/45 transition-colors">
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-sm bg-okn-leaf/10 border border-okn-leaf/30 flex items-center justify-center">
                      <r.i size={20} className="text-okn-leaf" />
                    </div>
                    <div className="stat-num text-okn-terracotta text-2xl text-center mt-3">{r.n}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-okn-palemint">{r.en}</h3>
                    <div className="eyebrow-sub mt-1 mb-4">{r.id}</div>
                    <p className="text-sm text-okn-palemint/65 leading-relaxed">{r.body}</p>
                    <div className="mt-4 text-xs italic text-okn-mint/45">— {r.note}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 max-w-3xl">
            <PullQuote>Five arms. Five promises. One mark. Born from the soul of an archipelago — built for the needs of a planet.</PullQuote>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative py-28 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <Eyebrow sub="Siapa Kami">WHO WE ARE</Eyebrow>
            <h2 className="h-display text-5xl text-okn-palemint mb-6">Built by <em>People of the Soil.</em></h2>
            <p className="lead-body">
              OKN's BIOTRON™ R&D is led by a core scientific and agronomy team. Six years of science, eighteen field sites, and thousands of field conversations behind every signature.
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="bg-okn-deep border border-okn-leaf/20 p-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-okn-leaf/40 to-okn-terracotta/30 border border-okn-leaf/30 flex items-center justify-center font-display text-3xl text-okn-cream">T</div>
              <div className="font-display text-3xl text-okn-palemint mt-5">Thalia Avery Tanoe</div>
              <div className="eyebrow mt-2">Director · Direktur</div>
              <div className="divider-warm mt-5 opacity-70" />
              <div className="text-sm text-okn-mint/60 italic font-display mt-4">"Conscience before commerce."</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="h-display text-5xl sm:text-6xl text-okn-palemint mb-8">Six Years of Science Before a Single <em>Signature.</em></h2>
          <p className="lead-body">
            Established 17 September 2024 — but the science began in 2019. More than six years of R&D, 18 field sites and 16+ crops before we signed our first document.
          </p>
        </div>
      </section>

      <ClosingCTA headline="The Soil Is Ready." em="Are You?" sub="Tanahnya Siap. Apakah Anda Siap?" testid="closing-partner-btn-story" />
    </>
  );
}
