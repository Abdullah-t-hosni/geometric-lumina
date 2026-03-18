import { type PortfolioCategory, type PortfolioProject } from '@/data/portfolio';
import { type Service } from '@/data/services';

// 🚀 Professional Data Prefetcher with Loading Locks & Cache Management

export type PortfolioCache = {
  projects: PortfolioProject[];
  categories: { id: string; label: string }[];
};

export type ServicesCache = {
  services: Service[];
};

export let cachedPortfolioData: PortfolioCache | null = null;
export let cachedServicesData: ServicesCache | null = null;

let portfolioPromise: Promise<PortfolioCache> | null = null;
let servicesPromise: Promise<ServicesCache> | null = null;

/**
 * Prefetches Portfolio data with a locking mechanism to prevent duplicate imports.
 */
export const prefetchPortfolioData = async (priority: "low" | "high" = "low"): Promise<PortfolioCache> => {
  if (cachedPortfolioData) return cachedPortfolioData;
  if (portfolioPromise) return portfolioPromise;

  if (priority === "low") {
    await new Promise(r => setTimeout(r, 200));
  }

  portfolioPromise = import('@/data/portfolio').then((m) => {
    cachedPortfolioData = {
      projects: m.portfolioProjects,
      categories: m.portfolioCategories,
    };
    return cachedPortfolioData;
  });

  return portfolioPromise;
};

/**
 * Prefetches Services data with a locking mechanism.
 */
export const prefetchServicesData = async (priority: "low" | "high" = "low"): Promise<ServicesCache> => {
  if (cachedServicesData) return cachedServicesData;
  if (servicesPromise) return servicesPromise;

  if (priority === "low") {
    await new Promise(r => setTimeout(r, 200));
  }

  servicesPromise = import('@/data/services').then((m) => {
    cachedServicesData = {
      services: m.services,
    };
    return cachedServicesData;
  });

  return servicesPromise;
};

/**
 * Clears all prefetch caches and promises. Useful for testing or manual refreshes.
 */
export const clearPrefetchCache = () => {
  cachedPortfolioData = null;
  cachedServicesData = null;
  portfolioPromise = null;
  servicesPromise = null;
};

// ⚡ Smart Idle Prefetching
// Automatically start low-priority prefetching when the browser is idle.
if (typeof window !== 'undefined') {
  const idleCallback = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 1000));
  
  idleCallback(() => {
    prefetchPortfolioData("low");
    prefetchServicesData("low");
  });
}
