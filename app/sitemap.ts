import { MetadataRoute } from 'next';
import { getSolutionSlugs, getSolutionUrl } from './data/solutions';
import { getSolutionSlugs as getWhoWeServeSlugs, getWhoWeServeUrl } from './data/who-we-serve';
import { getAllArticles } from '@/lib/blog';

const baseUrl = 'https://hiredbillingsupport.com';

/**
 * Date the site content was last meaningfully updated.
 * Change this when you publish real content changes. Do NOT use `new Date()`:
 * that marks every page as "changed today" on every build, and Google then
 * learns to ignore the date.
 */
const SITE_LAST_UPDATED = new Date('2026-10-28');

type SitemapRoute = {
  url: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastModified?: Date;
};

const staticRoutes: SitemapRoute[] = [
  { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1.0 },

  // Main service hubs (were missing)
  { url: `${baseUrl}/dental`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${baseUrl}/medical`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${baseUrl}/enterprise`, changeFrequency: 'monthly', priority: 0.9 },

  { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/find-service`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/explore-partnership`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/article-28-facilities`, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${baseUrl}/CostROIcalculator`, changeFrequency: 'monthly', priority: 0.7 },

  // MSO page is its own route, not part of the who-we-serve data (was missing)
  { url: `${baseUrl}/who-we-serve/mso`, changeFrequency: 'monthly', priority: 0.8 },

  // Blog and case-study index pages (blog was missing)
  { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/case-study`, changeFrequency: 'monthly', priority: 0.7 },

  { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
];

const solutionRoutes: SitemapRoute[] = getSolutionSlugs().map((slug) => ({
  url: getSolutionUrl(slug),
  changeFrequency: 'monthly',
  priority: 0.8,
}));

const audienceRoutes: SitemapRoute[] = getWhoWeServeSlugs().map((slug) => ({
  url: getWhoWeServeUrl(slug),
  changeFrequency: 'monthly',
  priority: 0.8,
}));

// Blog posts (were missing). Uses each article's own updated/publish date.
// The article list contains one slug twice, so URLs are de-duplicated below.
const blogRoutes: SitemapRoute[] = getAllArticles().map((article) => {
  const date = new Date(article.updatedDate || article.publishDate);
  return {
    url: `${baseUrl}/blog/${article.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
    lastModified: Number.isNaN(date.getTime()) ? undefined : date,
  };
});

// Case-study detail pages (were missing). Keep in sync with
// app/case-study/[slug]/page.tsx when you add a new case study.
const caseStudyRoutes: SitemapRoute[] = [
  'dr-ruth-parkin-edwin',
  'thompson-mental-health',
  'sheikh-internal-medicine',
  'dr-layla-hassan',
].map((slug) => ({
  url: `${baseUrl}/case-study/${slug}`,
  changeFrequency: 'yearly',
  priority: 0.6,
}));

// Removed: /hire/medical, /hire/dental, /hire/enterprise, /hire/mso.
// Those pages do not exist (404) and caused errors in Google Search Console.

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [
    ...staticRoutes,
    ...solutionRoutes,
    ...audienceRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
  ];

  const seen = new Set<string>();
  return all
    .filter((route) => {
      if (seen.has(route.url)) return false;
      seen.add(route.url);
      return true;
    })
    .map((route) => ({
      url: route.url,
      lastModified: route.lastModified ?? SITE_LAST_UPDATED,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
}