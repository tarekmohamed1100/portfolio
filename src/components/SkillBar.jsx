import useInView from "../hooks/useInView";

export default function SkillBar({ name, level }) {
  const [ref, inView] = useInView(0.4);
  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="muted mono tabular-nums">{level}</span>
      </div>
      <div
        className="h-[6px] w-full overflow-hidden rounded-full"
        style={{ background: "var(--line)" }}
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
          style={{ width: inView ? level + "%" : "0%", background: "var(--accent)" }}
        />
      </div>
    </div>
  );
}
