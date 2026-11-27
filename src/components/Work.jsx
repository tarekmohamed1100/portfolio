import { DATA } from "../data/data";
import { usePrefs } from "../hooks/usePrefs";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;

function ProjectVisual({ project, title }) {
  if (project.image) {
    return (
      <div className="project-visual mb-5">
        <img src={asset(project.image)} alt={title} loading="lazy" className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div className="project-visual mb-5" aria-hidden="true">
      <div className="rule" />
      <div
        className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-3 px-6 pb-[22px]"
        style={{ top: 0 }}
      >
        {project.bars.map((h, j) => (
          <div key={j} className="bar" style={{ height: h + "%" }} />
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  const { t, pick } = usePrefs();
  return (
    <section id="work" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display text-3xl font-bold md:text-4xl">{t.workTitle}</h2>
          <p className="muted mt-2">{t.workSub}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DATA.projects.map((p, i) => (
            <Reveal key={p.repo || i} delay={i * 120}>
              <Tilt className="h-full">
                <article className="card flex h-full flex-col p-5">
                  <ProjectVisual project={p} title={pick(p.title)} />
                  <h3 className="display text-xl font-bold">{pick(p.title)}</h3>
                  <p className="muted mt-2 flex-1 leading-relaxed">{pick(p.desc)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[var(--accent)]"
                      >
                        {t.viewDemo} ↗
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[var(--accent)]"
                      >
                        {t.viewCode} ↗
                      </a>
                    )}
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
