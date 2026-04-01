import { Service } from './services-types';

/**
 * 🚀 Performance: Memoized lookups for fast service retrieval
 */
class ServicesCache {
  private bySlugMap: Map<string, Service> | null = null;
  private byCategoryMap: Map<string, Service[]> | null = null;
  private readyPromise: Promise<void> | null = null;

  initialize(services: Service[]) {
    if (this.readyPromise) return this.readyPromise;

    this.readyPromise = Promise.resolve().then(() => {
      // Create immutable Map structures for O(1) lookups
      this.bySlugMap = new Map(
        services.map(s => [s.slug, s] as const)
      );
      this.byCategoryMap = new Map();
      
      services.forEach(service => {
        const category = service.category;
        if (!this.byCategoryMap!.has(category)) {
          this.byCategoryMap!.set(category, []);
        }
        const catServices = this.byCategoryMap!.get(category);
        if (catServices) {
          catServices.push(service);
        }
      });
    });

    return this.readyPromise;
  }

  getBySlug(slug: string): Service | undefined {
    return this.bySlugMap?.get(slug);
  }

  getByCategory(category: string): Service[] {
    return this.byCategoryMap?.get(category) || [];
  }

  getAllSlugs(): string[] {
    return Array.from(this.bySlugMap?.keys() || []);
  }
}

export const servicesCache = new ServicesCache();

/**
 * 🖼️ Performance: Lazy load gallery images only when needed
 */
export const lazyLoadGallery = (gallery: string[] | undefined): Promise<string[]> => {
  return new Promise((resolve) => {
    if (!gallery || gallery.length === 0) {
      resolve([]);
      return;
    }
    // Use requestIdleCallback for non-critical image loading
    if ('requestIdleCallback' in window) {
      const idleCallback = 'requestIdleCallback' as const;
      window[idleCallback]?.(() => resolve(gallery));
    } else {
      setTimeout(() => resolve(gallery), 300);
    }
  });
};

/**
 * 📊 Performance: Batch process services for pagination
 */
export const batchServices = (services: Service[], batchSize: number = 3) => {
  const batches: Service[][] = [];
  for (let i = 0; i < services.length; i += batchSize) {
    batches.push(services.slice(i, i + batchSize));
  }
  return batches;
};

/**
 * ⭐ Performance: Get featured services with pre-computed ordering
 */
export const getFeaturedServicesOptimized = (services: Service[]): Service[] => {
  return services
    .filter(s => s.featured)
    .sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999));
};

/**
 * 🔄 Performance: Deduplicate gallery images
 */
export const deduplicateGallery = (galleries: (string[] | undefined)[]): Set<string> => {
  const uniqueImages = new Set<string>();
  galleries.forEach(gallery => {
    gallery?.forEach(img => uniqueImages.add(img));
  });
  return uniqueImages;
};
