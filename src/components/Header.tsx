import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "@tanstack/react-router";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const solid = scrolled || !isHome;

  const sectionLinks = [
    { id: "about", label: t("nav.about") },
    { id: "invest", label: t("nav.invest") },
    { id: "services", label: t("nav.services") },
    { id: "properties", label: t("nav.properties") },
  ];
  const pageLinks = [
    { to: "/quem-somos", label: t("nav.aboutUs") },
    { to: "/blog", label: t("nav.blog") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        solid ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-warm font-display text-base font-bold text-white shadow-warm">
            EP
          </span>
          <span className={`font-display text-lg leading-tight ${solid ? "text-foreground" : "text-white"}`}>
            Elige Paraguay
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {sectionLinks.map(n => (
            <a
              key={n.id}
              href={isHome ? `#${n.id}` : `/#${n.id}`}
              className={`text-sm font-medium transition hover:opacity-70 ${
                solid ? "text-foreground" : "text-white/90"
              }`}
            >
              {n.label}
            </a>
          ))}
          {pageLinks.map(p => (
            <Link
              key={p.to}
              to={p.to}
              className={`text-sm font-medium transition hover:opacity-70 ${
                solid ? "text-foreground" : "text-white/90"
              }`}
              activeProps={{ className: "text-sm font-semibold text-[color:var(--brand-orange)]" }}
            >
              {p.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher variant={solid ? "light" : "dark"} />
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="hidden rounded-full bg-gradient-warm px-4 py-2 text-sm font-semibold text-white shadow-warm transition hover:opacity-95 md:inline-flex"
          >
            {t("nav.cta")}
          </a>
          <button
            onClick={() => setOpen(o => !o)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              solid ? "text-foreground" : "text-white"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {sectionLinks.map(n => (
              <a
                key={n.id}
                href={isHome ? `#${n.id}` : `/#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
              >
                {n.label}
              </a>
            ))}
            {pageLinks.map(p => (
              <Link
                key={p.to}
                to={p.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground"
              >
                {p.label}
              </Link>
            ))}
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-warm px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {t("nav.cta")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
