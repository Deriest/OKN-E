import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/constants/testIds";

const links = [
  { to: "/", label: "Home", id: "home", sub: "Beranda" },
  { to: "/solution", label: "The Solution", id: "solution", sub: "Solusi" },
  { to: "/proof", label: "The Proof", id: "proof", sub: "Bukti" },
  { to: "/opportunity", label: "The Opportunity", id: "opportunity", sub: "Peluang" },
  { to: "/story", label: "Our Story", id: "story", sub: "Kisah Kami" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid={NAV.root}
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-okn-deep/85 backdrop-blur-xl border-b border-okn-leaf/10"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" data-testid={NAV.logoLink} className="flex items-center gap-3 group">
          <img src="/assets/mark-light.png" alt="OKN mark" className="h-9 w-9 sm:h-10 sm:w-10 object-contain group-hover:opacity-90 transition-opacity" />
          <div className="leading-tight">
            <div className="font-display text-okn-palemint text-lg sm:text-xl tracking-wide">OKN</div>
            <div className="text-[9px] uppercase tracking-eyebrow text-okn-mint/60">Karya Nusantara</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <NavLink
              key={l.id}
              to={l.to}
              data-testid={NAV.link(l.id)}
              className={({ isActive }) =>
                [
                  "text-[12px] uppercase tracking-eyebrow transition-colors",
                  isActive ? "text-okn-leaf" : "text-okn-palemint/70 hover:text-okn-mint",
                ].join(" ")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/partner"
            data-testid={NAV.partnerBtn}
            className="hidden sm:inline-flex btn-ghost-leaf !py-2 !px-4 text-xs uppercase tracking-eyebrow"
          >
            Partner With Us
          </NavLink>
          <button
            data-testid={NAV.mobileToggle}
            className="lg:hidden text-okn-palemint p-2"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid={NAV.mobilePanel} className="lg:hidden bg-okn-deeper border-t border-okn-leaf/10">
          <div className="px-5 py-5 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.id}
                to={l.to}
                onClick={() => setOpen(false)}
                data-testid={`${NAV.link(l.id)}-mobile`}
                className={({ isActive }) =>
                  [
                    "py-2 text-sm uppercase tracking-eyebrow flex items-baseline gap-3",
                    isActive ? "text-okn-leaf" : "text-okn-palemint/80",
                  ].join(" ")
                }
              >
                <span>{l.label}</span>
                <span className="text-[10px] text-okn-mint/40 normal-case font-display italic">· {l.sub}</span>
              </NavLink>
            ))}
            <NavLink to="/partner" onClick={() => setOpen(false)} className="btn-leaf mt-2 justify-center">
              Partner With Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
