import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    // Check if it's a mobile device/touch device or small screen
    const isMobile = window.matchMedia("(max-width: 1024px)").matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);

    // If mobile, don't initialize Lenis for natural native scrolling
    if (isMobile) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1, // Fixed lerp for consistent, buttery smooth feel
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false, // Ensure touch is never hijacked
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
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
