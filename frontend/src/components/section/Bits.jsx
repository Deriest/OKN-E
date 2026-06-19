import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      options
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [ref, inView];
}

export function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, sub }) {
  return (
    <div className="flex items-baseline gap-3 mb-5">
      <span className="eyebrow">{children}</span>
      {sub && <span className="eyebrow-sub">· {sub}</span>}
    </div>
  );
}

export function StatCounter({ to, suffix = "", prefix = "", decimals = 0, duration = 1600, className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const animate = (t) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * to);
      if (p < 1) requestAnimationFrame(animate);
      else setVal(to);
    };
    requestAnimationFrame(animate);
  }, [inView, to, duration]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}

export function BarRow({ label, pct, value, highlight = false, terra = false }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className={`text-sm ${highlight ? "text-okn-leaf" : "text-okn-palemint/70"}`}>{label}</span>
        <span className={`font-display text-2xl ${highlight ? "text-okn-leaf" : "text-okn-palemint/80"}`}>{value}</span>
      </div>
      <div className="bar-track">
        <div
          className={`bar-fill ${terra ? "terra" : ""}`}
          style={{ "--pct": inView ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function ClosingCTA({ headline, em, sub, testid = "closing-partner-btn" }) {
  return (
    <section className="relative py-28 sm:py-36 bg-okn-deeper overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute -right-32 -top-32 w-[480px] h-[480px] rounded-full bg-okn-pine/15 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-[420px] h-[420px] rounded-full bg-okn-terracotta/10 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <img src="/assets/mark-light.png" alt="" className="h-14 w-14 mx-auto mb-8 opacity-60" />
        <h2 className="h-display text-5xl sm:text-6xl lg:text-7xl text-okn-palemint mb-3">
          {headline} <em>{em}</em>
        </h2>
        {sub && <p className="font-display italic text-okn-mint/60 text-xl mb-10">{sub}</p>}
        <a href="/partner" data-testid={testid} className="btn-leaf text-sm uppercase tracking-eyebrow">
          Partner With Us
        </a>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, sub, headline, em, lead, align = "left" }) {
  const ta = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${ta} mb-12`}>
      <Eyebrow sub={sub}>{eyebrow}</Eyebrow>
      <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl text-okn-palemint mb-5">
        {headline} {em && <em>{em}</em>}
      </h2>
      {lead && <p className="lead-body">{lead}</p>}
    </div>
  );
}

export function PullQuote({ children }) {
  return (
    <blockquote className="relative my-10 max-w-2xl">
      <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-okn-terracotta via-okn-leaf to-transparent" />
      <p className="font-display italic text-2xl text-okn-mint/90 leading-snug pl-6">
        "{children}"
      </p>
    </blockquote>
  );
}
