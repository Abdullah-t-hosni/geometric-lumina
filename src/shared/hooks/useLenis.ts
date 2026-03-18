import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      lerp: 0.1,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}

export function getLenis() {
  return lenisInstance;
}
