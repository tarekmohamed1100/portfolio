import { useState } from "react";
import { DATA } from "../data/data";
import { usePrefs } from "../hooks/usePrefs";
import Tilt from "./Tilt";
import Typing from "./Typing";

export default function Hero() {
  const { t, lang, pick } = usePrefs();
  // Tries your own photo first (public/me.jpg), then the GitHub avatar, then initials.
  const sources = [`${import.meta.env.BASE_URL}me.jpg`, DATA.avatar];
  const [srcIdx, setSrcIdx] = useState(0);

  return (
    <section className="px-5 pb-24 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <span
            className="rise inline-flex items-center gap-2 rounded-full border line px-3 py-1 text-sm muted"
            style={{ "--d": "0ms" }}
          >
            <span className="ping inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
            {t.badge}
          </span>

          <h1
            className="display rise mt-6 text-4xl font-bold leading-[1.12] sm:text-5xl md:text-6xl"
            style={{ "--d": "100ms" }}
          >
            {t.hello}
            <span style={{ color: "var(--accent)" }}>{t.name}</span>
          </h1>

          <p className="rise mt-5 h-8 text-lg font-semibold muted sm:text-xl" style={{ "--d": "180ms" }}>
            <Typing key={lang} words={t.roles} />
          </p>

          <p className="rise mt-6 max-w-xl text-lg leading-relaxed" style={{ "--d": "260ms" }}>
            {t.headline}
          </p>
          <p className="rise muted mt-3 max-w-xl leading-relaxed" style={{ "--d": "320ms" }}>
            {t.lead}
          </p>

          <div className="rise mt-9 flex flex-wrap gap-3" style={{ "--d": "400ms" }}>
            <a href="#work" className="btn btn-solid">
              {t.cta1}
            </a>
            <a href="#contact" className="btn btn-outline">
              {t.cta2}
            </a>
          </div>
        </div>

        <div className="rise mx-auto w-full max-w-[330px]" style={{ "--d": "300ms" }}>
          <Tilt>
            <div className="photo-frame p-1 shadow-2xl">
              <div className="photo-inner aspect-[4/5]">
                {srcIdx < sources.length ? (
                  <img
                    src={sources[srcIdx]}
                    alt={t.photoAlt}
                    width="460"
                    height="575"
                    onError={() => setSrcIdx((i) => i + 1)}
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  <div className="photo-fallback">
                    <span>ط.خ</span>
                  </div>
                )}
              </div>
            </div>
          </Tilt>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            {pick({ en: "Cairo, Egypt · Remote friendly", ar: "القاهرة، مصر · شغل عن بُعد" })}
          </div>
        </div>
      </div>
    </section>
  );
}
