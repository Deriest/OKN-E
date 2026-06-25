import React from "react";
import { Link } from "react-router-dom";
import { CTA, NAV, EMAIL_ADDRESS } from "@/lib/site";
import { CTAButton, Divider } from "@/components/primitives";
import OctopusMark from "@/components/OctopusMark";

export const ClosingCTA = ({
  headline = (
    <>The Soil Is Ready. <em>Are You?</em></>
  ),
  bahasa = "Tanahnya Siap. Apakah Anda Siap?",
}) => (
  <section data-testid="closing-cta" className="relative overflow-hidden bg-forest-deep py-32 px-6">
    <div className="absolute inset-0 grid-texture opacity-40" />
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
      <OctopusMark size={420} color="#52b788" />
    </div>
    <div className="relative max-w-4xl mx-auto text-center">
      <h2 className="headline text-4xl sm:text-5xl lg:text-6xl text-white text-balance">{headline}</h2>
      {bahasa && <p className="font-serif italic text-xl text-mint/70 mt-4">{bahasa}</p>}
      <div className="mt-10 flex justify-center">
        <CTAButton label={CTA.primary.label} to="/partner" variant="solid" testid="closing-cta-button" />
      </div>
    </div>
  </section>
);

export const Footer = () => (
  <footer data-testid="footer" className="relative bg-forest-base border-t border-white/10 overflow-hidden">
    <div className="absolute -left-24 -bottom-24 opacity-[0.05] pointer-events-none">
      <OctopusMark size={360} color="#52b788" />
    </div>
    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <OctopusMark size={40} color="#52b788" />
            <span className="font-serif text-2xl text-white">PT Octopus Karya Nusantara</span>
          </div>
          <p className="font-serif italic text-2xl text-mint/80 max-w-md leading-snug">
            Carbon-Negative. Soil-Positive. Future-Ready.
          </p>
          <p className="text-sm text-mint/50 mt-3">Enchanting Soil Health. A Sustainable Future.</p>
          <div className="flex gap-3 mt-6 text-xs text-white/50">
            <span className="px-3 py-1 border border-white/15 rounded-full">BIOTRON™</span>
            <span className="px-3 py-1 border border-white/15 rounded-full">TERRA KAYA™</span>
          </div>
        </div>

        <div>
          <p className="eyebrow text-leaf mb-5">Navigate</p>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-white/70 hover:text-leaf transition-colors">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/partner" className="text-sm text-leaf hover:text-mint transition-colors">Partner With Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-leaf mb-5">Contact</p>
          <a href={`mailto:${EMAIL_ADDRESS}`} className="text-sm text-white/70 hover:text-leaf break-all transition-colors">{EMAIL_ADDRESS}</a>
          <p className="text-sm text-white/50 mt-4 leading-relaxed">Batulicin,<br />Kalimantan Selatan,<br />Indonesia</p>
          <div className="mt-6">
            <CTAButton label={CTA.primary.label} to="/partner" variant="outline" testid="footer-cta" />
          </div>
        </div>
      </div>

      <Divider className="my-12" />

      <div className="flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
        <p>© 2026 PT Octopus Karya Nusantara · Est. 17 Sep 2024</p>
        <p>Company Profile 2026 · For Public Distribution</p>
      </div>
    </div>
  </footer>
);
