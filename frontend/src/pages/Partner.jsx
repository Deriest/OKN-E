import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, MapPin, Building2 } from "lucide-react";
import { CTA, EMAIL_ADDRESS } from "@/lib/site";
import { Eyebrow, Reveal, CTAButton, Divider } from "@/components/primitives";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const BLOCKS = [
  { key: "A", eyebrow: "CDR / Carbon Buyers", title: "Buy Durable, Verified Removal.", body: "1,000+ year permanence, 84.5% fixed-carbon specification, and registry certification (Puro.earth & Isometric) in progress.", cta: CTA.cdr, audience: "cdr" },
  { key: "B", eyebrow: "Investors", title: "Back Indonesia's Carbon-Negative Platform.", body: "Specification-leading product, vast low-cost feedstock, government accreditation. Data room and terms under NDA.", cta: CTA.investor, audience: "investor" },
  { key: "C", eyebrow: "Government & Agricultural Partners", title: "Restore Farmland. Build Food Sovereignty.", body: "A validated biochar input for national programmes — higher yields, lower fertiliser, healthier soil across the archipelago.", cta: CTA.government, audience: "government" },
];

const OBJECTIVES = [
  "Full Puro.Earth + Isometric + EBC/WBC carbon certification.",
  "Commission the TERRA KAYA™ facility in Batulicin, Kalimantan Selatan.",
  "Deploy the 243,000 ha Brigade Pangan government programme.",
  "Scale to 9+ facilities — 1 megatonne CO₂e CDR per year.",
  "Establish OKN as Indonesia's premier carbon-negative agriculture platform.",
  "Expand validation to new provinces and additional crops.",
];

export default function Partner() {
  const [form, setForm] = useState({ name: "", email: "", organisation: "", audience: "general", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thank you. Your message has reached us — we'll be in touch.");
      setForm({ name: "", email: "", organisation: "", audience: "general", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full bg-forest-panel/30 border border-white/15 rounded-[3px] px-4 py-3 text-white text-sm placeholder:text-mint/35 focus:outline-none focus:border-leaf transition-colors";

  return (
    <div data-testid="partner-page">
      {/* HEADER */}
      <section className="pt-36 pb-20 px-6 bg-forest-base text-center">
        <Reveal><Eyebrow className="!justify-center">Partner With Us · Bermitra</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h1 className="headline text-5xl sm:text-6xl text-white mt-6 max-w-3xl mx-auto">The Soil Is Ready. <em>Are You?</em></h1>
          <p className="font-serif italic text-xl text-mint/70 mt-3">Tanahnya Siap. Apakah Anda Siap?</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-mint/75 mt-7 max-w-2xl mx-auto leading-relaxed">
            Whether you buy carbon, invest in climate, or lead agricultural policy — there's a path here for you.
            Choose yours below and reach out directly.
          </p>
        </Reveal>
      </section>

      {/* AUDIENCE BLOCKS */}
      <section className="pb-24 px-6 bg-forest-base">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {BLOCKS.map((b, i) => (
            <Reveal key={b.key} delay={i * 0.1}>
              <div className="p-8 rounded-lg bg-forest-panel/40 border border-white/10 h-full flex flex-col hover:border-terracotta/50 hover:-translate-y-1 transition-all duration-500">
                <Eyebrow>{b.eyebrow}</Eyebrow>
                <h3 className="headline text-2xl text-white mt-4">{b.title}</h3>
                <p className="text-mint/70 text-sm mt-4 leading-relaxed flex-1">{b.body}</p>
                <div className="mt-7"><CTAButton label={b.cta.label} href={b.cta.href} variant="outline" testid={`partner-block-${b.audience}`} /></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT FORM + DIRECT */}
      <section className="py-24 px-6 bg-forest-deep">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <Reveal>
            <Eyebrow>Send a Message</Eyebrow>
            <h2 className="headline text-4xl text-white mt-4">Tell Us Where You <em>Fit.</em></h2>
            <form onSubmit={submit} className="mt-8 space-y-4" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <input data-testid="contact-name" className={inputCls} placeholder="Your name" value={form.name} onChange={update("name")} />
                <input data-testid="contact-email" type="email" className={inputCls} placeholder="Email address" value={form.email} onChange={update("email")} />
              </div>
              <input data-testid="contact-org" className={inputCls} placeholder="Organisation (optional)" value={form.organisation} onChange={update("organisation")} />
              <select data-testid="contact-audience" className={inputCls} value={form.audience} onChange={update("audience")}>
                <option value="cdr">CDR / Carbon Buyer</option>
                <option value="investor">Investor</option>
                <option value="government">Government / Agricultural Partner</option>
                <option value="media">Media</option>
                <option value="general">General Enquiry</option>
              </select>
              <textarea data-testid="contact-message" rows={5} className={inputCls} placeholder="Your message" value={form.message} onChange={update("message")} />
              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium rounded-[3px] bg-leaf text-forest-base hover:bg-mint transition-all disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Lock It With Us"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:pl-8 lg:border-l border-white/10 h-full">
              <Eyebrow>Talk to Us Directly</Eyebrow>
              <h2 className="headline text-4xl text-white mt-4">Direct Contact.</h2>
              <div className="mt-8 space-y-5 text-sm">
                <div><p className="font-serif text-2xl text-white">Thalia Avery Tanoe</p><p className="text-terracotta">Director / Direktur</p></div>
                <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-3 text-mint/80 hover:text-leaf transition-colors" data-testid="direct-email">
                  <Mail size={16} className="text-leaf" /> {EMAIL_ADDRESS}
                </a>
                <p className="flex items-center gap-3 text-mint/80"><MapPin size={16} className="text-leaf" /> Batulicin, Kalimantan Selatan, Indonesia</p>
                <p className="flex items-center gap-3 text-mint/80"><Building2 size={16} className="text-leaf" /> Est. 17 September 2024</p>
              </div>
              <div className="mt-8 space-y-1">
                <p className="font-serif italic text-lg text-mint/80">"Carbon-Negative. Soil-Positive. Future-Ready."</p>
                <p className="font-serif italic text-lg text-mint/60">"Enchanting Soil Health. A Sustainable Future."</p>
              </div>
              <div className="mt-8"><CTAButton label={CTA.media.label} href={CTA.media.href} variant="solid" testid="partner-reach-us" /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FUTURE OBJECTIVES */}
      <section className="py-32 px-6 bg-forest-base">
        <div className="max-w-5xl mx-auto">
          <Reveal><Eyebrow>Future Objectives · Tujuan Ke Depan</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="headline text-4xl sm:text-5xl text-white mt-5">Where We're Headed.</h2></Reveal>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 mt-12">
            {OBJECTIVES.map((o, i) => (
              <Reveal key={o} delay={i * 0.06}>
                <div className="flex gap-4 border-t border-white/10 pt-5">
                  <span className="font-serif text-2xl text-leaf">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-mint/75 text-sm leading-relaxed">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="text-xs text-mint/45 mt-10">Full financials, terms and competitive intelligence are available under NDA to verified counterparties.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
