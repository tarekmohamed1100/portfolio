import { useRef } from "react";
import { DATA } from "../data/data";
import { usePrefs } from "../hooks/usePrefs";
import Reveal from "./Reveal";
import SkillBar from "./SkillBar";
import TechField from "./TechField";

function SkillGroup({ title, items, className = "" }) {
  return (
    <>
      <h3 className={`display mb-6 text-xl font-bold ${className}`}>{title}</h3>
      <div className="space-y-5">
        {items.map((s) => (
          <SkillBar key={s.n} name={s.n} level={s.l} />
        ))}
      </div>
    </>
  );
}

export default function Stack() {
  const { t } = usePrefs();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  return (
    <section id="stack" ref={sectionRef} className="relative scroll-mt-24 overflow-hidden py-24">
      <TechField gridRef={gridRef} sectionRef={sectionRef} />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <Reveal>
          <h2 className="display text-3xl font-bold md:text-4xl">{t.stackTitle}</h2>
          <p className="muted mt-2">{t.stackSub}</p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <Reveal delay={100}>
            <SkillGroup title={`${t.skillsTitle} · ${t.frontLabel}`} items={DATA.skills.front} />
            <SkillGroup
              title={`${t.skillsTitle} · ${t.backLabel}`}
              items={DATA.skills.back}
              className="mt-12"
            />
          </Reveal>
          <Reveal delay={200}>
            <SkillGroup title={`${t.skillsTitle} · ${t.aiLabel}`} items={DATA.skills.ai} />
            <div className="mt-8">
              <p className="muted mb-3 text-sm">{t.toolsLabel}</p>
              <div className="flex flex-wrap gap-2">
                {DATA.tools.map((tool) => (
                  <span key={tool} className="chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
