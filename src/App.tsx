import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { Toaster } from "@/shared/ui/toaster";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RootLayout from '@/shared/layout/RootLayout';
import { InitialLoader } from '@/shared/ui/InitialLoader';
import { useLenis, getLenis } from "@/shared/hooks/useLenis";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const Home = lazy(() => import('@/features/home'));
const About = lazy(() => import('@/features/about'));
const Services = lazy(() => import('@/features/services').then(m => ({ default: m.Services })));
const ServiceDetail = lazy(() => import('@/features/services').then(m => ({ default: m.ServiceDetail })));
const Portfolio = lazy(() => import('@/features/portfolio').then(m => ({ default: m.Portfolio })));
const PortfolioProject = lazy(() => import('@/features/portfolio').then(m => ({ default: m.PortfolioProject })));
const Process = lazy(() => import('@/features/process'));
const Contact = lazy(() => import('@/features/contact'));
const NotFound = lazy(() => import('@/features/error'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

export function PageLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999] overflow-hidden bg-background/50 backdrop-blur-sm">
      <div className="h-full w-full loader-bar bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="/services" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
          <Route path="/services/:serviceName" element={<Suspense fallback={<PageLoader />}><ServiceDetail /></Suspense>} />
          <Route path="/portfolio" element={<Suspense fallback={<PageLoader />}><Portfolio /></Suspense>} />
          <Route path="/portfolio/:projectId" element={<Suspense fallback={<PageLoader />}><PortfolioProject /></Suspense>} />
          <Route path="/process" element={<Suspense fallback={<PageLoader />}><Process /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}



const App = () => {
  useLenis();

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <LazyMotion features={domAnimation} strict>
                <InitialLoader />
                <ScrollToTop />
                <Toaster />
                <AnimatedRoutes />
              </LazyMotion>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
