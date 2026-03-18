import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { getLenis } from '@/shared/hooks/useLenis';

const positions = new Map<string, number>();

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;

    const key = location.pathname;
    const lenis = getLenis();
    const saved = positions.get(key);

    if (saved !== undefined && lenis) {
      lenis.scrollTo(saved, { immediate: true });
    } else if (lenis) {
      lenis.scrollTo(0, { 
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      positions.set(key, window.scrollY);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-dvh bg-background flex flex-col font-ibm selection:bg-neon-yellow selection:text-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}