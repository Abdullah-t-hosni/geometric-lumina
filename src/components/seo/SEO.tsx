import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonical?: string;
  noIndex?: boolean;
  schema?: object | object[];
  twitterCard?: 'summary' | 'summary_large_image';
}

const SITE_NAME = 'Geometric Studio';
const SITE_URL = 'https://geometric-studios.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/og-image.png`;
const TWITTER_HANDLE = '@geometric_stud';


export function SEO({
  title,
  description,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  canonical,
  noIndex = false,
  schema,
  twitterCard = 'summary_large_image',
}: SEOProps) {
  const location = useLocation();
  const canonicalUrl = canonical ?? `${SITE_URL}${location.pathname}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Precision in Imagination`;

  useEffect(() => {
    // ─── Title ────────────────────────────────────────
    document.title = fullTitle;

    // ─── Helper: set or create meta tag ───────────────
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.startsWith('meta[name')
          ? 'name'
          : selector.startsWith('meta[property')
          ? 'property'
          : 'name';
        const val = selector.match(/["']([^"']+)["']/)?.[1] ?? '';
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    const removeIfExists = (selector: string) => {
      document.querySelector(selector)?.remove();
    };

    // ─── Basic Meta ───────────────────────────────────
    if (description) setMeta('meta[name="description"]', description);
    if (keywords)    setMeta('meta[name="keywords"]', keywords);
    setMeta('meta[name="author"]', SITE_NAME);

    // ─── Robots ──────────────────────────────────────
    setMeta('meta[name="robots"]', noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // ─── Canonical ───────────────────────────────────
    setLink('canonical', canonicalUrl);

    // ─── Open Graph ──────────────────────────────────
    setMeta('meta[property="og:title"]',       fullTitle);
    setMeta('meta[property="og:description"]', description ?? '');
    setMeta('meta[property="og:type"]',        ogType);
    setMeta('meta[property="og:url"]',         canonicalUrl);
    setMeta('meta[property="og:image"]',       ogImage);
    setMeta('meta[property="og:image:width"]', '1200');
    setMeta('meta[property="og:image:height"]','630');
    setMeta('meta[property="og:image:alt"]',   fullTitle);
    setMeta('meta[property="og:site_name"]',   SITE_NAME);
    setMeta('meta[property="og:locale"]',      'en_US');

    // ─── Twitter Card ────────────────────────────────
    setMeta('meta[name="twitter:card"]',        twitterCard);
    setMeta('meta[name="twitter:site"]',        TWITTER_HANDLE);
    setMeta('meta[name="twitter:title"]',       fullTitle);
    setMeta('meta[name="twitter:description"]', description ?? '');
    setMeta('meta[name="twitter:image"]',       ogImage);

    // ─── JSON-LD Schema ──────────────────────────────
    removeIfExists('script[data-seo="true"]');
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      const scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-seo', 'true');
      scriptEl.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
      document.head.appendChild(scriptEl);
    }
  }, [fullTitle, description, keywords, ogImage, ogType, canonicalUrl, noIndex, schema, twitterCard]);

  return null;
}

// ─── Pre-built Schema Factories ────────────────────────────

export const Schemas = {
  /** Organization schema — used on homepage & about */
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Geometric Studio',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/Logo-5.png`,
    sameAs: [
      'https://instagram.com/geometric_studios',
      'https://www.tiktok.com/@geometric_studios',
      'https://pinterest.com/geometric_studios',
      'https://x.com/geometric_stud',
      'https://linkedin.com/company/geometric-studios',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+20-106-356-5635',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressRegion: 'Cairo',
    },
    description:
      'Geometric Studio is a Cairo-based creative powerhouse specializing in cinematic 3D visualization, motion graphics, and immersive visual experiences.',
  }),

  /** Website schema */
  website: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Geometric Studio',
    url: SITE_URL,
    description: 'Cinematic 3D visualization, motion graphics, and immersive visual experiences.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }),

  /** Service schema */
  service: (name: string, desc: string, url: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description: desc,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'Geometric Studio',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 30.0444, longitude: 31.2357 },
      geoRadius: '5000',
    },
  }),

  /** BreadcrumbList schema */
  breadcrumb: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }),

  /** FAQ schema */
  faq: (items: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }),

  /** CreativeWork / Portfolio item */
  creativeWork: (title: string, desc: string, url: string, image: string) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: desc,
    url: `${SITE_URL}${url}`,
    image,
    creator: {
      '@type': 'Organization',
      name: 'Geometric Studio',
    },
  }),

  /** ContactPage schema */
  contactPage: () => ({
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Geometric Studio',
    url: `${SITE_URL}/contact`,
    description: 'Get in touch with Geometric Studio to start your cinematic 3D project.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Geometric Studio',
      email: 'geometric3dadv@gmail.com',
      telephone: '+201063565635',
    },
  }),
};
