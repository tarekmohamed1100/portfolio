import { useState } from "react";
import { usePrefs } from "../hooks/usePrefs";

export default function Header() {
  const { t, theme, lang, toggleLang, toggleTheme } = usePrefs();
  const [menu, setMenu] = useState(false);
  const navKeys = Object.keys(t.nav);

  return (
    <header
      className="fixed inset-x-0 top-[2px] z-50 border-b backdrop-blur-md line"
      style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="display text-lg font-bold">
          {t.brand}
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main">
          {navKeys.map((k) => (
            <a key={k} href={"#" + k} className="nav-link">
              {t.nav[k]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="btn-icon px-3"
            aria-label={t.switchLang}
            lang={lang === "ar" ? "en" : "ar"}
          >
            {t.toggleLang}
          </button>
          <button
            onClick={toggleTheme}
            className="btn-icon w-9 px-0 text-base"
            aria-label={t.toggleTheme}
            title={t.toggleTheme}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            onClick={() => setMenu(!menu)}
            className="btn-icon md:hidden"
            aria-expanded={menu}
            aria-controls="mobile-nav"
            aria-label={t.menu}
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* closed menu is inert, so keyboard users can't tab into hidden links */}
      <div
        id="mobile-nav"
        inert={menu ? undefined : ""}
        className={`overflow-hidden px-5 transition-all duration-500 ease-out md:hidden ${menu ? "max-h-60 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-3 text-base font-medium">
          {navKeys.map((k) => (
            <a key={k} href={"#" + k} onClick={() => setMenu(false)} className="py-1">
              {t.nav[k]}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
