import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { FOOTER } from "@/constants/testIds";

export default function Footer() {
  return (
    <footer data-testid={FOOTER.root} className="relative bg-okn-deeper border-t border-okn-leaf/10 mt-20">
      <div className="absolute inset-x-0 top-0 divider-warm opacity-60" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <img src="/assets/mark-light.png" alt="" className="h-10 w-10 object-contain" />
            <div>
              <div className="font-display text-okn-palemint text-xl">PT Octopus Karya Nusantara</div>
              <div className="text-[10px] uppercase tracking-eyebrow text-okn-mint/60">Est. 17 Sep 2024 · Batulicin, KalSel</div>
            </div>
          </div>
          <p className="font-display italic text-okn-mint/80 text-lg max-w-md">
            "Carbon-Negative. Soil-Positive. Future-Ready."
          </p>
          <p className="text-sm text-okn-palemint/55 max-w-md leading-relaxed">
            BIOTRON™ activated biochar · TERRA KAYA™ production technology. Permanent carbon removal and visible soil restoration — proven across 16+ crops in 8 regions of Indonesia.
          </p>
        </div>

        <div className="space-y-3">
          <div className="eyebrow">Explore · Jelajahi</div>
          <ul className="space-y-2 text-sm text-okn-palemint/75">
            <li><Link to="/" className="hover:text-okn-leaf">Home</Link></li>
            <li><Link to="/solution" className="hover:text-okn-leaf">The Solution</Link></li>
            <li><Link to="/proof" className="hover:text-okn-leaf">The Proof</Link></li>
            <li><Link to="/opportunity" className="hover:text-okn-leaf">The Opportunity</Link></li>
            <li><Link to="/story" className="hover:text-okn-leaf">Our Story</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="eyebrow">Contact · Kontak</div>
          <a href="mailto:octopuskaryanusantara@gmail.com" className="flex items-center gap-2 text-sm text-okn-palemint/75 hover:text-okn-leaf">
            <Mail size={14} /> octopuskaryanusantara@gmail.com
          </a>
          <div className="flex items-center gap-2 text-sm text-okn-palemint/60">
            <MapPin size={14} /> Batulicin, Kalimantan Selatan, Indonesia
          </div>
          <Link to="/partner" data-testid={FOOTER.partnerBtn} className="btn-leaf mt-2 text-xs uppercase tracking-eyebrow">
            Partner With Us
          </Link>
        </div>
      </div>
      <div className="border-t border-okn-leaf/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-[11px] uppercase tracking-eyebrow text-okn-mint/40">
          <div>© 2026 PT Octopus Karya Nusantara · Est. 17 Sep 2024</div>
          <div>Company Profile 2026 · For Public Distribution</div>
        </div>
      </div>
    </footer>
  );
}
