import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Fixed lerp for consistent, buttery smooth feel
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 2.2, // Balanced sensitivity for mobile
      wheelMultiplier: 1.0,
    });

    lenisInstance = lenis;
    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
      (window as any).lenis = null;
    };
  }, []);
}

export function getLenis() {
  return lenisInstance;
}
