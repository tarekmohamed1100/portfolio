import { usePrefs } from "../hooks/usePrefs";
import Reveal from "./Reveal";

export default function About() {
  const { t } = usePrefs();
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display text-3xl font-bold md:text-4xl">{t.aboutTitle}</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.aboutCards.map((c, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="card h-full p-7">
                <div className="mb-5 h-[2px] w-8" style={{ background: "var(--accent)" }} />
                <h3 className="display text-lg font-bold">{c.t}</h3>
                <p className="muted mt-2 leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
