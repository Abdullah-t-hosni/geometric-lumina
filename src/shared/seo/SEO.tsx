import { Helmet } from "react-helmet-async";
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
  const canonicalUrl = canonical ?? `${SITE_URL}${location.pathname}${location.search}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Precision in Imagination`;

  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>

      {/* Basic */}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE_NAME} />

      {/* Robots */}
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* OG */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description ?? ""} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />

      {/* Schema */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

// ─── Pre-built Schema Factories ────────────────────────────

export const Schemas = {
  /** Organization schema — used on homepage & about */
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Geometric Studio',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/Logo-3.webp`,
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
    description:
      'Geometric Studio is a creative powerhouse specializing in cinematic 3D visualization, motion graphics, and immersive visual experiences.',
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
      email: 'contact@geometric-studios.com',
      telephone: '+201063565635',
    },
  }),

  /**
   * LocalBusiness schema — the single most impactful schema for
   * ranking on geo-targeted queries like "3D Studio Cairo" or
   * "Motion Graphics Egypt". Includes aggregate rating, opening
   * hours, price range, and coordinates.
   */
  localBusiness: () => ({
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: 'Geometric Studio',
    alternateName: 'Geometric Studios',
    description:
      '3D visualization, motion graphics, product animation, anamorphic screens, VR environments, and AI content production studio serving brands globally.',
    url: SITE_URL,
    logo: `${SITE_URL}/assets/images/Logo-3.webp`,
    image: `${SITE_URL}/assets/og-image.png`,
    telephone: ['+201063565635', '+201025247955', '+201032843037'],
    email: 'contact@geometric-studios.com',
    priceRange: '$$$',
    currenciesAccepted: 'EGP, USD',
    paymentAccepted: 'Cash, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
        opens: '09:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '80',
      bestRating: '5',
      worstRating: '1',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.0444',
      longitude: '31.2357'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Creative Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Motion Graphics' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Visualization' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Product Animation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anamorphic Screens' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VR Environments' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CGI Compositing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Content Production' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Booth Exhibition Design' } },
      ],
    },
    sameAs: [
      'https://instagram.com/geometric_studios',
      'https://www.tiktok.com/@geometric_studios',
      'https://pinterest.com/geometric_studios',
      'https://x.com/geometric_stud',
      'https://linkedin.com/company/geometric-studios',
    ],
    areaServed: [
      { '@type': 'Country', name: 'MENA Region' },
      { '@type': 'Country', name: 'Global' },
    ],
    knowsLanguage: ['en', 'ar'],
    foundingDate: '2019',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
    slogan: 'Precision in Imagination',
    keywords: 'motion graphics, 3D studio, product visualization, anamorphic screens, CGI, VR environments, cinematic 3D, motion graphics studio',
  }),

  /** VideoObject schema — for portfolio / reel pages */
  videoObject: (opts: { name: string; description: string; thumbnailUrl: string; uploadDate: string; duration?: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    uploadDate: opts.uploadDate,
    duration: opts.duration ?? 'PT3M',
    publisher: {
      '@type': 'Organization',
      name: 'Geometric Studio',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/images/Logo-5.webp` },
    },
    contentUrl: SITE_URL,
  }),

  /** Article schema */
  article: (title: string, desc: string, url: string, image: string, author: string, publishedAt: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: desc,
    url: `${SITE_URL}${url}`,
    image,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Geometric Studio',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/images/Logo-3.webp`,
      },
    },
    datePublished: publishedAt,
  }),

  /** WebPage schema */
  webPage: (name: string, desc: string, url: string) => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description: desc,
    url: `${SITE_URL}${url}`,
    publisher: {
      '@type': 'Organization',
      name: 'Geometric Studio',
    },
  }),
};

export const createSEO = (data: { title?: string; description?: string; breadcrumb?: { name: string; url: string }[] }) => ({
  title: data.title,
  description: data.description,
  schema: [
    Schemas.organization(),
    ...(data.breadcrumb ? [Schemas.breadcrumb(data.breadcrumb)] : [])
  ]
});
