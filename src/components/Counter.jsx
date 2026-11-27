import { useEffect, useState } from "react";
import useInView from "../hooks/useInView";
import { prefersReducedMotion } from "../lib/motion";

export default function Counter({ to, suffix = "" }) {
  const [ref, inView] = useInView(0.5);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setN(to);
      return;
    }
    let start = null;
    let raf;
    const dur = 1400;
    const step = (t) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} dir="ltr" className="inline-block tabular-nums">
      {n}
      {suffix}
    </span>
  );
}
