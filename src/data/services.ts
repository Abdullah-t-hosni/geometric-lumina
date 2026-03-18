export * from './services-types';
import { services as fullServices } from './services-full';

// Re-export the full list as 'services' for backward compatibility
export const services = fullServices;

// Create optimized lookup map
const servicesMap = new Map(fullServices.map(s => [s.slug, s]));

// Data helpers
export const getServiceBySlug = (slug: string) => servicesMap.get(slug);

export const getFeaturedServices = () => 
  [...fullServices]
    .filter(s => s.featured)
    .sort((a, b) => (a.priority || 99) - (b.priority || 99));

export const getAllServices = () => 
  [...fullServices].sort((a, b) => (a.priority || 99) - (b.priority || 99));

export const getServicesByCategory = (category: string) => 
  fullServices.filter(s => s.category === category);

export const getRelatedServices = (slug: string, limit: number = 3) => {
  const current = getServiceBySlug(slug);
  if (!current) return fullServices.slice(0, limit);
  
  return fullServices
    .filter(s => s.slug !== slug)
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === current.category && b.category !== current.category) return -1;
      if (a.category !== current.category && b.category === current.category) return 1;
      // Then by priority
      return (a.priority || 99) - (b.priority || 99);
    })
    .slice(0, limit);
};

export { featuredServices } from './services-core';
