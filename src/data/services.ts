export * from './services-types';
import { services as fullServices } from './services-full';
import { servicesCache, getFeaturedServicesOptimized } from './services-utils';

// 🚀 Performance: Initialize cache on module load
servicesCache.initialize(fullServices);

// Re-export the full list as 'services' for backward compatibility
export const services = fullServices;

// 🔥 Memoized lookup - O(1) instead of O(n)
export const getServiceBySlug = (slug: string) => servicesCache.getBySlug(slug);

// ⭐ Optimized featured services getter (pre-computed)
export const getFeaturedServices = () => getFeaturedServicesOptimized(fullServices);

// 📊 Cached category lookup
export const getServicesByCategory = (category: string) => servicesCache.getByCategory(category);

export const getAllServices = () => 
  [...fullServices].sort((a, b) => (a.priority || 99) - (b.priority || 99));

export const getRelatedServices = (slug: string, limit: number = 3) => {
  const current = getServiceBySlug(slug);
  if (!current) return fullServices.slice(0, limit);
  
  // Get same category services first (cached)
  const sameCategory = servicesCache.getByCategory(current.category)
    .filter(s => s.slug !== slug)
    .slice(0, limit);

  if (sameCategory.length >= limit) return sameCategory;

  // Fill remaining with other services
  const others = fullServices
    .filter(s => s.slug !== slug && s.category !== current.category)
    .sort((a, b) => (a.priority || 99) - (b.priority || 99))
    .slice(0, limit - sameCategory.length);

  return [...sameCategory, ...others];
};

export { featuredServices } from './services-core';
