import React from "react";
import { Star, Handshake, TreePine, Microscope, Wheat } from "lucide-react";
import { IMG } from "@/lib/site";
import { Eyebrow, Reveal, Divider } from "@/components/primitives";
import { ClosingCTA } from "@/components/Footer";
import IndonesiaLungs from "@/components/IndonesiaLungs";

const VALUES = [
  { n: "01", icon: Star, t: "Conscience Before Commerce", id: "Integritas di Atas Segalanya", body: "Every claim is answerable to evidence. We earn trust through certified data, not marketing. When science and commerce disagree, science wins.", arm: "The arm that points skyward." },
  { n: "02", icon: Handshake, t: "Dignity in Every Handshake", id: "Martabat dalam Setiap Kesepakatan", body: "From the farmer holding our biochar to the executive signing carbon credits, every partner is met as an equal. Fair terms. Fair outcomes. No one is extracted from.", arm: "The arm that reaches for connection." },
  { n: "03", icon: TreePine, t: "Rooted to Rise", id: "Berakar untuk Berkembang", body: "Born on one island, branching across the archipelago. Our solutions are strongest when they stay connected to their origin — soil, community, climate. We grow outward, never upward without roots.", arm: "The largest arm, our widest reach." },
  { n: "04", icon: Microscope, t: "Wisdom of the Many", id: "Kearifan Bersama", body: "BIOTRON™ was not invented in isolation. It was proven across 18 sites, 16+ crops and thousands of field conversations. We build with people, not for them. The farmer's knowledge is our R&D.", arm: "The arm shaped by deliberation." },
  { n: "05", icon: Wheat, t: "Harvest That Reaches All", id: "Panen yang Berkeadilan", body: "Clean soil is not a luxury product. The gains we generate are not for shareholders alone — every benefit must flow back to the communities who tend the land, from Kalimantan to Papua.", arm: "The arm anchored to the earth." },
];

export default function Story() {
  return (
    <div data-testid="story-page">
      {/* THE OTHER LUNG */}
      <section className="pt-36 pb-24 px-6 bg-forest-base">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><Eyebrow className="!justify-center">Where We Come From · Dari Mana Kami Berasal</Eyebrow></Reveal>
          <Reveal delay={0.1}><h1 className="headline text-5xl sm:text-6xl text-white mt-6">Indonesia Is the World's <em>Other Lung.</em></h1></Reveal>
          <Reveal delay={0.2}>
            <p className="text-mint/75 mt-8 leading-relaxed">
              The Amazon breathes for the West. Indonesia breathes for the rest. 17,508 islands; the world's
              largest archipelago; an untapped carbon vault beneath the richest soil on earth. Most people know
              the Amazon. Few know Indonesia's forests and soils hold equivalent climate power — and most of that
              potential is still untouched. We are from Kalimantan Selatan, the heart of Indonesia's oil-palm country.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="mt-16">
            <IndonesiaLungs />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-serif italic text-2xl sm:text-3xl text-mint/80 text-center max-w-3xl mx-auto mt-16">
            "Indonesia does not need to import climate solutions. It is sitting on them."
          </p>
        </Reveal>
      </section>

      {/* EMERALD OF THE EQUATOR */}
      <section className="py-32 px-6 bg-forest-deep">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="rounded-lg overflow-hidden aspect-square bg-black flex items-center justify-center">
              <img src={IMG.octopusEmerald} alt="Emerald octopus" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>The Emerald of the Equator · Zamrud Khatulistiwa</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">Why the Octopus. Why <em>Emerald.</em> Why Here.</h2></Reveal>
            <Reveal delay={0.2}>
              <p className="text-mint/75 mt-7 leading-relaxed">
                Indonesia is not only a land nation — it is a sea nation: 5.8 million km² of ocean, one of the
                world's richest marine ecosystems. The colonial poets called it Zamrud Khatulistiwa, the Emerald
                of the Equator, for the colour of its sea and the richness of its soil. That's why our brand is
                emerald green — not for aesthetics, but for identity. The octopus lives where land meets sea: the
                most intelligent invertebrate on earth, a problem-solver reaching in five directions at once, every
                arm independent but joined to one centre of purpose. When we first saw BIOTRON™ pressed into dark
                soil, we saw the same shape — five arms, five connections, five roots. The biochar left the imprint
                of an octopus in the earth. That became our mark.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 font-serif italic text-lg text-terracotta/90">
                <span>From the sea.</span><span>Into the soil.</span><span>Pressing its mark permanently into the earth.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FIVE ROOTS */}
      <section className="py-32 px-6 bg-forest-base">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>Our Foundation · Fondasi Kami</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">Five Roots. One <em>Purpose.</em></h2></Reveal>
            <Reveal delay={0.2}>
              <p className="text-mint/70 mt-6">
                These are not corporate values. They are a covenant — rooted in the soul of an archipelago,
                inscribed in the five arms of our mark.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 space-y-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08}>
                <div className="grid sm:grid-cols-12 gap-6 p-7 rounded-lg bg-forest-panel/30 border border-white/10 items-start hover:border-leaf/40 transition-colors duration-500">
                  <div className="sm:col-span-1"><v.icon className="text-leaf" size={26} /></div>
                  <div className="sm:col-span-1"><p className="font-serif text-4xl text-terracotta/40">{v.n}</p></div>
                  <div className="sm:col-span-10">
                    <h3 className="text-white text-lg font-medium">{v.t} <span className="text-mint/50 font-light italic font-serif text-base">· {v.id}</span></h3>
                    <p className="text-mint/70 text-sm mt-2 leading-relaxed">{v.body}</p>
                    <p className="text-xs text-terracotta/70 mt-2 italic">{v.arm}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p className="font-serif italic text-2xl text-mint/80 text-center max-w-3xl mx-auto mt-16">
              "Five arms. Five promises. One mark. Born from the soul of an archipelago — built for the needs of a planet."
            </p>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP + TIMELINE */}
      <section className="py-32 px-6 bg-cream text-forest-base">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow className="!text-terracotta">Who We Are · Siapa Kami</Eyebrow>
            <h2 className="headline text-4xl sm:text-5xl mt-5">Built by <em className="text-terracotta">People of the Soil.</em></h2>
            <div className="mt-8 p-6 rounded-lg bg-white border border-forest-pine/10 shadow-sm">
              <p className="font-serif text-2xl">Thalia Avery Tanoe</p>
              <p className="text-sm text-terracotta">Director / Direktur</p>
            </div>
            <p className="text-forest-pine mt-6 text-sm leading-relaxed max-w-md">
              OKN's BIOTRON™ R&D is led by a core scientific and agronomy team. (Team kept private.)
            </p>
          </div>
          <div>
            <h2 className="headline text-4xl sm:text-5xl">Six Years of Science Before a Single <em className="text-terracotta">Signature.</em></h2>
            <p className="text-forest-pine mt-7 leading-relaxed max-w-md">
              Established 17 September 2024 — but the science began in 2019. More than six years of R&D,
              18 field sites and 16+ crops before we signed our first document.
            </p>
            <div className="flex gap-10 mt-8">
              <div><p className="font-serif text-5xl text-terracotta">2019</p><p className="text-xs text-forest-pine/70 mt-1">science began</p></div>
              <div><p className="font-serif text-5xl text-terracotta">2024</p><p className="text-xs text-forest-pine/70 mt-1">OKN established</p></div>
            </div>
          </div>
        </div>
      </section>

      <Divider />
      <ClosingCTA />
    </div>
  );
}
