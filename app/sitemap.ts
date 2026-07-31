import { MetadataRoute } from 'next';
import { getSolutionSlugs, getSolutionUrl } from './data/solutions';
import { getSolutionSlugs as getWhoWeServeSlugs, getWhoWeServeUrl } from './data/who-we-serve';

const baseUrl = 'https://www.hiredbillingsupport.com';

type SitemapRoute = {
  url: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
};

const staticRoutes: SitemapRoute[] = [
  { url: `${baseUrl}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
  { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: `${baseUrl}/find-service`, changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: `${baseUrl}/explore-partnership`, changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.6 },
  { url: `${baseUrl}/article-28-facilities`, changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: `${baseUrl}/case-study`, changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: `${baseUrl}/CostROIcalculator`, changeFrequency: 'monthly' as const, priority: 0.8 },
];

const solutionRoutes: SitemapRoute[] = getSolutionSlugs().map((slug) => ({
  url: getSolutionUrl(slug),
  changeFrequency: 'weekly' as const,
  priority: 0.9,
}));

const audienceRoutes: SitemapRoute[] = getWhoWeServeSlugs().map((slug) => ({
  url: getWhoWeServeUrl(slug),
  changeFrequency: 'weekly' as const,
  priority: 0.9,
}));

const hireRoutes: SitemapRoute[] = ['medical', 'dental', 'enterprise', 'mso'].map((slug) => ({
  url: `${baseUrl}/hire/${slug}`,
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...solutionRoutes, ...audienceRoutes, ...hireRoutes].map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
