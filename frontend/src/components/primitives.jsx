import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = (e) => setReduced(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
};

export const Eyebrow = ({ children, className = "", warm = false }) => (
  <p className={`eyebrow ${warm ? "text-terracotta" : "text-leaf"} ${className}`}>{children}</p>
);

export const Reveal = ({ children, delay = 0, className = "", y = 28 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Divider = ({ className = "" }) => (
  <div className={`gradient-divider w-full ${className}`} />
);

// Emphasis word helper: wraps in italic mint
export const Em = ({ children }) => <em>{children}</em>;

export const CTAButton = ({ label, href, to, variant = "solid", className = "", testid }) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-medium tracking-wide rounded-[3px] transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-leaf text-forest-base hover:bg-mint hover:-translate-y-0.5 shadow-[0_0_0_0_rgba(82,183,136,0.4)] hover:shadow-[0_8px_30px_-8px_rgba(82,183,136,0.6)]"
      : variant === "outline"
      ? "border border-leaf/70 text-leaf hover:bg-leaf hover:text-forest-base hover:-translate-y-0.5"
      : "border border-white/25 text-white hover:border-leaf hover:text-leaf";
  const cls = `${base} ${styles} ${className}`;
  if (to) return <Link to={to} className={cls} data-testid={testid}>{label}</Link>;
  return <a href={href} className={cls} data-testid={testid}>{label}</a>;
};

export const Counter = ({ value, prefix = "", suffix = "", decimals = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const animate = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

// Animated horizontal bar for data viz
export const Bar = ({ label, sub, percent, max = 100, color = "#52b788", highlight = false, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const width = `${(percent / max) * 100}%`;
  return (
    <div ref={ref} className="w-full">
      <div className="flex items-end justify-between mb-2">
        <span className={`text-sm ${highlight ? "text-white" : "text-mint"}`}>{label}</span>
        <span className="font-serif text-2xl" style={{ color: highlight ? "#52b788" : "#95d5b2" }}>
          {percent}%
        </span>
      </div>
      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width } : {}}
          transition={{ duration: 1.3, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: highlight ? "linear-gradient(to right,#2d6a4f,#52b788)" : color }}
        />
      </div>
      {sub && <p className="text-xs text-mint/50 mt-1.5">{sub}</p>}
    </div>
  );
};
