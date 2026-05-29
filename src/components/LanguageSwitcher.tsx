import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const langs = [
  { code: "es", label: "ES", name: "Español" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
];

export function LanguageSwitcher({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const current = langs.find(l => l.code === i18n.language.slice(0, 2)) ?? langs[0];
  const isDark = variant === "dark";

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition ${
          isDark
            ? "border-white/20 bg-white/10 text-white hover:bg-white/15 backdrop-blur"
            : "border-border bg-background text-foreground hover:bg-secondary"
        }`}
        aria-label="Language"
      >
        <Globe className="h-4 w-4" />
        <span className="tracking-wider">{current.label}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-card shadow-deep z-50">
          {langs.map(l => (
            <button
              key={l.code}
              onClick={() => { i18n.changeLanguage(l.code); setOpen(false); }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-sm text-card-foreground transition hover:bg-secondary ${
                current.code === l.code ? "font-semibold" : ""
              }`}
            >
              <span>{l.name}</span>
              <span className="text-xs text-muted-foreground">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
