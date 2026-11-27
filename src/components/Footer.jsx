import { usePrefs } from "../hooks/usePrefs";

export default function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="relative z-10 border-t px-5 py-10 text-sm muted line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <span>
          © {new Date().getFullYear()} {t.name}
        </span>
        <span>{t.footer}</span>
        <a href="#top" className="chip">
          ↑ {t.top}
        </a>
      </div>
    </footer>
  );
}
