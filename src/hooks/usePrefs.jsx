import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { COPY } from "../data/copy";
import { readPref, writePref } from "../lib/storage";

const PrefsContext = createContext(null);

export function PrefsProvider({ children }) {
  const [theme, setTheme] = useState(() => readPref("pf-theme", ["dark", "light"], "dark"));
  const [lang, setLang] = useState(() => readPref("pf-lang", ["ar", "en"], "ar"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    writePref("pf-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = COPY[lang].dir;
    writePref("pf-lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      theme,
      lang,
      t: COPY[lang],
      pick: (o) => o[lang],
      toggleTheme: () => setTheme((v) => (v === "dark" ? "light" : "dark")),
      toggleLang: () => setLang((v) => (v === "ar" ? "en" : "ar")),
    }),
    [theme, lang],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export const usePrefs = () => useContext(PrefsContext);
