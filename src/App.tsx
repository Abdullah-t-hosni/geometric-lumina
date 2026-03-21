import { lazy, Suspense } from 'react';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
import { Toaster } from "@/shared/ui/toaster";
import { TooltipProvider } from "@/shared/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RootLayout from '@/shared/layout/RootLayout';
import { InitialLoader } from '@/shared/ui/InitialLoader';
import { useLenis, getLenis } from "@/shared/hooks/useLenis";
import { HelmetProvider } from 'react-helmet-async';

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

export function PageLoader() {
  return (
    <m.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      <div className="w-full max-w-[200px] space-y-4">
        <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
          <m.div 
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.2, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-0 h-full w-full bg-neon-yellow shadow-[0_0_15px_rgba(204,255,0,0.8)]" 
          />
        </div>
        <div className="text-center">
            <span className="text-[8px] font-ibm text-neon-yellow/40 tracking-[0.5em] uppercase animate-pulse">Synchronizing Node</span>
        </div>
      </div>
    </m.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence 
        mode="wait"
        onExitComplete={() => {
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(0, { immediate: true });
            setTimeout(() => {
              lenis.resize();
            }, 60);
          } else {
            window.scrollTo(0, 0);
          }
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceName" element={<ServiceDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioProject />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
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
                <Toaster />
                <RootLayout>
                  <AnimatedRoutes />
                </RootLayout>
              </LazyMotion>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
