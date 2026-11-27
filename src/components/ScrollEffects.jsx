import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../lib/motion";

/** Background parallax, scroll-progress bar and the cursor spotlight.
 *  Everything is updated through refs so scrolling never re-renders React. */
export default function ScrollEffects() {
  const barRef = useRef(null);
  const bgRef = useRef(null);
  const spotRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const progress = h > 0 ? window.scrollY / h : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`;
      if (bgRef.current && !prefersReducedMotion()) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches && !prefersReducedMotion();
    if (!fine) return;
    const onMove = (e) => {
      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="parallax-bg" ref={bgRef} aria-hidden="true" />
      <div ref={spotRef} className="spot" aria-hidden="true" />
      <div
        ref={barRef}
        className="progress fixed inset-x-0 top-0 z-[60] h-[2px]"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />
    </>
  );
}
