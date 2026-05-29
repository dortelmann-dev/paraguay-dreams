import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-warm font-display font-bold text-white shadow-warm">
            EP
          </span>
          <div>
            <div className="font-display text-lg text-foreground">Elige Paraguay</div>
            <div className="text-xs text-muted-foreground">{t("footer.tag")}</div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Elige Paraguay. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
