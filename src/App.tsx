import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from './components/layout/RootLayout';

const queryClient = new QueryClient();

// Lazy-loaded pages
const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const PortfolioProject = lazy(() => import('./pages/PortfolioProject'));
const Process = lazy(() => import('./pages/Process'));
const Technology = lazy(() => import('./pages/Technology'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-12 h-12 flex justify-center items-center">
          <div className="absolute inset-0 bg-neon-yellow/20 rounded-full blur-[20px] mix-blend-screen animate-pulse" />
          <svg className="animate-spin w-8 h-8 text-neon-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <p className="text-creamy-white/40 font-ibm text-[10px] tracking-[0.3em] uppercase font-light">Initiating</p>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceName" element={<ServiceDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:projectId" element={<PortfolioProject />} />
              <Route path="/process" element={<Process />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
