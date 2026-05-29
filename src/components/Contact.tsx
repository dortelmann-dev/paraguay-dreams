import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const IgIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const FbIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[color:var(--brand-ink)] py-24 text-white lg:py-32">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 15% 30%, var(--brand-blue) 0%, transparent 45%), radial-gradient(circle at 85% 70%, var(--brand-red) 0%, transparent 45%)"
      }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-orange)]">
              {t("contact.eyebrow")}
            </span>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{t("contact.title")}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{t("contact.subtitle")}</p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-5 w-5 text-[color:var(--brand-orange)]" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-white/60">Ubicación</div>
                  <div className="text-base text-white">{t("contact.address")}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-5 w-5 text-[color:var(--brand-orange)]" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-white/60">Email</div>
                  <a href="mailto:contacto@eligeparaguay.com" className="text-base text-white hover:underline">
                    contacto@eligeparaguay.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Clock className="h-5 w-5 text-[color:var(--brand-orange)]" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wider text-white/60">Horario</div>
                  <div className="text-base text-white">{t("contact.hours")}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a href="https://wa.me/595000000000" target="_blank" rel="noopener" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                <IgIcon className="h-5 w-5" />
              </a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                <FbIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md sm:p-9">
            <div className="space-y-4">
              <Field label={t("contact.name")} name="name" type="text" required maxLength={100} />
              <Field label={t("contact.email")} name="email" type="email" required maxLength={120} />
              <Field label={t("contact.phone")} name="phone" type="tel" maxLength={30} />
              <div>
                <label className="mb-1.5 block text-sm text-white/80">{t("contact.message")}</label>
                <textarea name="message" rows={4} maxLength={1000} required
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-[color:var(--brand-orange)]" />
              </div>
              <button type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-warm px-6 py-3.5 font-semibold text-white shadow-warm transition hover:translate-y-[-1px]">
                <Send className="h-4 w-4" /> {t("contact.submit")}
              </button>
              {sent && (
                <div className="rounded-xl border border-[color:var(--brand-orange)]/40 bg-[color:var(--brand-orange)]/10 px-4 py-3 text-sm text-[color:var(--brand-orange)]">
                  {t("contact.sent")}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-white/80">{label}</label>
      <input {...rest}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-[color:var(--brand-orange)]" />
    </div>
  );
}
