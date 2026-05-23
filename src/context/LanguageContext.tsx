"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { t, Lang } from "@/lib/translations";

type LanguageContextType = {
  lang: Lang;
  toggleLang: () => void;
  tr: (typeof t)["en"];
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  tr: t.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => setLang((l) => (l === "en" ? "as" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, tr: t[lang] as (typeof t)["en"] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
