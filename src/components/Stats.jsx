import { DATA } from "../data/data";
import { usePrefs } from "../hooks/usePrefs";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Stats() {
  const { pick } = usePrefs();
  return (
    <section className="px-5 pb-24">
      <div
        className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-2xl border line sm:grid-cols-3"
        style={{ background: "var(--line)" }}
      >
        {DATA.stats.map((s, i) => (
          <Reveal key={i} delay={i * 120}>
            <div className="h-full p-8 text-center" style={{ background: "var(--bg)" }}>
              <div className="display text-5xl font-bold" style={{ color: "var(--accent)" }}>
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="muted mt-2">{pick(s)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
