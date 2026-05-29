import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { es } from "./locales/es";
import { pt } from "./locales/pt";
import { en } from "./locales/en";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: { es: { translation: es }, pt: { translation: pt }, en: { translation: en } },
      fallbackLng: "es",
      supportedLngs: ["es", "pt", "en"],
      interpolation: { escapeValue: false },
      detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
    });
}

export default i18n;
