import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV, CTA, IMG } from "@/lib/site";
import { CTAButton } from "@/components/primitives";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      data-testid="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-forest-base/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 group">
          <img src={IMG.logo} alt="OKN" className="h-9 w-auto object-contain transition-transform duration-500 group-hover:scale-105" style={{ filter: "brightness(0) invert(1)" }} />
          <span className="hidden sm:block font-serif text-lg tracking-wide text-white leading-none">
            Octopus Karya Nusantara
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              data-testid={`nav-link-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`eyebrow transition-colors ${
                loc.pathname === n.to ? "text-leaf" : "text-white/70 hover:text-white"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton label={CTA.primary.label} to="/partner" variant="outline" testid="nav-cta" />
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          data-testid="mobile-menu-toggle"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-forest-base/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="font-serif text-2xl text-white" data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}>
              {n.label}
            </Link>
          ))}
          <CTAButton label={CTA.primary.label} to="/partner" variant="solid" className="mt-2 w-full" testid="mobile-nav-cta" />
        </div>
      )}
    </header>
  );
};

export default Nav;
