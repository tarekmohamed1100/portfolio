import { useEffect, useMemo, useRef, useState } from "react";
import { TECH } from "../data/tech";
import { prefersReducedMotion } from "../lib/motion";

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;

/** Floating tech chips that drift around, then gather into the slot grid on scroll. */
export default function TechField({ gridRef, sectionRef }) {
  const chipRefs = useRef([]);
  const slotRefs = useRef([]);
  const [landed, setLanded] = useState(false);
  const landedRef = useRef(false);
  const pRef = useRef(0);

  const seed = useMemo(
    () =>
      TECH.map((_, i) => ({
        fx: 0.06 + ((i * 0.6180339887) % 1) * 0.88,
        fy: 0.08 + ((i * 0.7548776662) % 1) * 0.78,
        ph: (i * 1.7) % (Math.PI * 2),
        sp: 0.22 + ((i * 0.37) % 1) * 0.45,
        am: 14 + ((i * 0.53) % 1) * 22,
      })),
    [],
  );

  useEffect(() => {
    const sec = sectionRef.current;
    const grid = gridRef.current;
    if (!sec || !grid) return;

    // p = 0 -> chips float freely, p = 1 -> chips sit in their slots
    const place = (p, time) => {
      const sr = sec.getBoundingClientRect();
      TECH.forEach((_, i) => {
        const chip = chipRefs.current[i];
        const slot = slotRefs.current[i];
        if (!chip || !slot) return;
        const sl = slot.getBoundingClientRect();
        const cx = sl.left - sr.left + sl.width / 2 - chip.offsetWidth / 2;
        const cy = sl.top - sr.top + sl.height / 2 - chip.offsetHeight / 2;
        const s = seed[i];
        const dx = s.fx * sr.width + Math.sin(time * s.sp + s.ph) * s.am;
        const dy = s.fy * sr.height + Math.cos(time * s.sp * 0.8 + s.ph) * s.am * 0.8;
        chip.style.transform = `translate3d(${lerp(dx, cx, p)}px, ${lerp(dy, cy, p)}px, 0) scale(${lerp(1, 0.9, p).toFixed(3)})`;
        chip.style.opacity = (0.32 + p * 0.68).toFixed(3);
      });
    };

    // Reduced motion: no drifting, just put every chip in its slot (and keep it there).
    if (prefersReducedMotion()) {
      setLanded(true);
      const settle = () => place(1, 0);
      settle();
      document.fonts?.ready.then(settle);
      window.addEventListener("resize", settle);
      return () => window.removeEventListener("resize", settle);
    }

    const t0 = performance.now();
    let raf = 0;
    const tick = (now) => {
      const gr = grid.getBoundingClientRect();
      const vh = window.innerHeight;
      const d = gr.top + gr.height / 2 - vh * 0.55;
      // 1.25x widens the "fully landed" zone so chips settle exactly into their slots
      const raw = clamp((1 - clamp(Math.abs(d) / (vh * 0.6), 0, 1)) * 1.25, 0, 1);
      const target = raw * raw * (3 - 2 * raw);
      pRef.current = lerp(pRef.current, target, 0.1);

      const isLanded = pRef.current > 0.95;
      if (isLanded !== landedRef.current) {
        landedRef.current = isLanded;
        setLanded(isLanded);
      }
      place(pRef.current, (now - t0) / 1000);
      raf = requestAnimationFrame(tick);
    };

    // Only animate while the section is on (or near) the screen.
    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
      rootMargin: "200px 0px",
    });
    io.observe(sec);
    return () => {
      io.disconnect();
      stop();
    };
  }, [seed, gridRef, sectionRef]);

  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        {TECH.map((tech, i) => (
          <div
            key={tech.n}
            ref={(el) => {
              chipRefs.current[i] = el;
            }}
            className={`tech-chip ${landed ? "landed" : ""}`}
            style={{ color: tech.c, opacity: 0 }}
          >
            <span className="tiny">{tech.n}</span>
          </div>
        ))}
      </div>

      <div className="relative z-[3] mx-auto max-w-6xl px-5">
        <div ref={gridRef} className="slot-grid">
          {TECH.map((tech, i) => (
            <div
              key={tech.n}
              ref={(el) => {
                slotRefs.current[i] = el;
              }}
              className={`slot ${landed ? "done" : ""}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
