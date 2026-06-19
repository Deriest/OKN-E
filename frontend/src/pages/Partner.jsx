import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Reveal, Eyebrow, SectionHeader } from "@/components/section/Bits";
import { PARTNER } from "@/constants/testIds";
import { Mail, MapPin, Building2, ArrowRight, Leaf, Banknote, Sprout } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const audiences = [
  { id: "buyer",     label: "CDR / Carbon-credit Buyer", subject: "CDR Offtake Enquiry" },
  { id: "investor",  label: "Investor",                  subject: "Investment Enquiry" },
  { id: "government",label: "Government / Agriculture",  subject: "Partnership Enquiry" },
  { id: "media",     label: "Media",                     subject: "Media Enquiry" },
  { id: "general",   label: "General",                   subject: "General Enquiry" },
];

const blocks = [
  {
    audience: "buyer", icon: Leaf, title: "Buy Durable, Verified Removal.",
    eyebrow: "CARBON-CREDIT / CDR BUYERS",
    sub: "Untuk Pembeli Karbon",
    body: "1,000+ year permanence, 84.5% fixed-carbon specification, and registry certification (Puro.earth & Isometric) in progress.",
    btn: "Enquire About Offtake", btnId: PARTNER.buyerBtn,
    mailto: "mailto:octopuskaryanusantara@gmail.com?subject=CDR%20Offtake%20Enquiry",
  },
  {
    audience: "investor", icon: Banknote, title: "Back Indonesia's Carbon-Negative Platform.",
    eyebrow: "INVESTORS",
    sub: "Untuk Investor",
    body: "Specification-leading product, vast low-cost feedstock, government backing. Data room and terms under NDA.",
    btn: "Request the Investor Brief", btnId: PARTNER.investorBtn,
    mailto: "mailto:octopuskaryanusantara@gmail.com?subject=Investment%20Enquiry",
  },
  {
    audience: "government", icon: Sprout, title: "Restore Farmland. Build Food Sovereignty.",
    eyebrow: "GOVERNMENT & AGRICULTURAL PARTNERS",
    sub: "Untuk Mitra Pemerintah & Pertanian",
    body: "Validated biochar input for national programmes — higher yields, lower fertiliser, healthier soil across the archipelago.",
    btn: "Start a Partnership", btnId: PARTNER.governmentBtn,
    mailto: "mailto:octopuskaryanusantara@gmail.com?subject=Partnership%20Enquiry",
  },
];

export default function Partner() {
  const [form, setForm] = useState({
    name: "", email: "", organization: "", audience: "general", subject: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSuccess(true);
      setForm({ name: "", email: "", organization: "", audience: "general", subject: "", message: "" });
      toast.success("Thank you — we'll be in touch.");
    } catch (err) {
      toast.error("Could not send. Please email octopuskaryanusantara@gmail.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <section className="relative pt-32 pb-16 vignette-warm">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="PARTNER WITH US"
            sub="Bermitra"
            headline="The Soil Is Ready."
            em="Are You?"
            lead="Whether you buy carbon, invest in climate, or lead agricultural policy — there's a path here for you. Choose yours below and email us directly, or send a message through the form."
          />
          <div className="font-display italic text-okn-mint/60 text-xl">Tanahnya Siap. Apakah Anda Siap?</div>
        </div>
      </section>

      {/* AUDIENCE BLOCKS */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <Reveal key={b.audience} delay={i * 120} className="bg-okn-deeper border border-okn-leaf/20 p-8 hover:border-okn-leaf/50 transition-colors flex flex-col">
              <b.icon size={28} className="text-okn-leaf mb-6" />
              <Eyebrow sub={b.sub}>{b.eyebrow}</Eyebrow>
              <h3 className="font-display text-2xl text-okn-palemint mb-4 leading-snug">{b.title}</h3>
              <p className="text-sm text-okn-palemint/65 leading-relaxed mb-7 flex-1">{b.body}</p>
              <a href={b.mailto} data-testid={b.btnId} className="btn-leaf text-xs uppercase tracking-eyebrow self-start">
                {b.btn} <ArrowRight size={14} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT FORM + DIRECT CONTACT */}
      <section className="relative py-24 bg-okn-deeper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5 space-y-8">
            <div>
              <Eyebrow sub="Talk to Us">DIRECT CONTACT</Eyebrow>
              <h2 className="h-display text-4xl text-okn-palemint mt-3">Talk to Us <em>Directly.</em></h2>
            </div>
            <div className="space-y-5 text-okn-palemint/80">
              <div className="flex items-start gap-4">
                <Building2 size={18} className="text-okn-leaf mt-1" />
                <div>
                  <div className="font-display text-xl text-okn-cream">Thalia Avery Tanoe</div>
                  <div className="eyebrow text-okn-mint/60 mt-1">Director · Direktur</div>
                </div>
              </div>
              <a href="mailto:octopuskaryanusantara@gmail.com" data-testid={PARTNER.generalBtn} className="flex items-start gap-4 hover:text-okn-leaf transition-colors">
                <Mail size={18} className="text-okn-leaf mt-1" />
                <div>
                  <div className="text-sm">octopuskaryanusantara@gmail.com</div>
                  <div className="eyebrow text-okn-mint/60 mt-1">Email Us</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-okn-leaf mt-1" />
                <div>
                  <div className="text-sm">Batulicin, Kalimantan Selatan, Indonesia</div>
                  <div className="eyebrow text-okn-mint/60 mt-1">Est. 17 September 2024</div>
                </div>
              </div>
            </div>
            <div className="divider-warm" />
            <div className="space-y-2 font-display italic text-okn-mint/80 text-lg">
              <p>"Carbon-Negative. Soil-Positive. Future-Ready."</p>
              <p className="text-okn-mint/50 text-base">"Enchanting Soil Health. A Sustainable Future."</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <form onSubmit={submit} data-testid={PARTNER.form} className="bg-okn-deep border border-okn-leaf/20 p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name">
                  <input data-testid={PARTNER.formName} required value={form.name} onChange={onChange("name")}
                    className="input" placeholder="Your name" />
                </Field>
                <Field label="Email">
                  <input data-testid={PARTNER.formEmail} required type="email" value={form.email} onChange={onChange("email")}
                    className="input" placeholder="you@company.com" />
                </Field>
              </div>
              <Field label="Organisation (optional)">
                <input data-testid={PARTNER.formOrg} value={form.organization} onChange={onChange("organization")}
                  className="input" placeholder="Company or institution" />
              </Field>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="I am a ...">
                  <select data-testid={PARTNER.formAudience} value={form.audience}
                    onChange={(e) => {
                      const a = audiences.find((x) => x.id === e.target.value);
                      setForm((f) => ({ ...f, audience: e.target.value, subject: f.subject || a?.subject || "" }));
                    }}
                    className="input">
                    {audiences.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}
                  </select>
                </Field>
                <Field label="Subject">
                  <input data-testid={PARTNER.formSubject} value={form.subject} onChange={onChange("subject")}
                    className="input" placeholder="Brief subject" />
                </Field>
              </div>
              <Field label="Message">
                <textarea data-testid={PARTNER.formMessage} required rows={5} value={form.message} onChange={onChange("message")}
                  className="input resize-none" placeholder="Tell us what you'd like to explore." />
              </Field>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button type="submit" disabled={submitting} data-testid={PARTNER.formSubmit}
                  className="btn-leaf text-xs uppercase tracking-eyebrow disabled:opacity-60 disabled:cursor-not-allowed">
                  {submitting ? "Sending..." : "Send Message"} <ArrowRight size={14} />
                </button>
                <span className="text-xs text-okn-mint/45">
                  Or email <a href="mailto:octopuskaryanusantara@gmail.com" className="text-okn-leaf underline-offset-4 hover:underline">octopuskaryanusantara@gmail.com</a> directly.
                </span>
              </div>

              {success && (
                <div data-testid={PARTNER.formSuccess} className="text-okn-leaf text-sm border border-okn-leaf/30 p-3 rounded-sm bg-okn-leaf/5">
                  Thank you — your message has been received. We'll respond shortly.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* FUTURE OBJECTIVES */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="FUTURE OBJECTIVES"
            sub="Tujuan ke Depan"
            headline="Where We're"
            em="Headed."
          />
          <ul className="grid lg:grid-cols-2 gap-4 max-w-5xl">
            {[
              "Full Puro.Earth + Isometric + EBC/WBC carbon certification.",
              "Commission the TERRA KAYA™ facility in Batulicin, Kalimantan Selatan.",
              "Deploy the 243,000 ha Brigade Pangan government programme.",
              "Scale to 9+ facilities — 1 megatonne CO₂e CDR per year.",
              "Establish OKN as Indonesia's premier carbon-negative agriculture platform.",
              "Expand validation to new provinces and additional crops.",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 80} className="flex gap-4 items-start bg-okn-deeper/60 border border-okn-leaf/15 p-5">
                <div className="stat-num text-2xl text-okn-terracotta">{String(i + 1).padStart(2, "0")}</div>
                <p className="text-okn-palemint/80 text-sm leading-relaxed">{t}</p>
              </Reveal>
            ))}
          </ul>
          <p className="text-xs text-okn-mint/45 mt-8 max-w-3xl">
            Full financial projections, investment terms and competitive intelligence are available under NDA to verified counterparties.
          </p>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="eyebrow">{label}</span>
      {children}
    </label>
  );
}
