import { blogArticles } from '@/data/blogs';

export function getAllArticles() {
  return [...blogArticles];
}

export function getFeaturedArticle() {
  return blogArticles.find((article) => article.featured) ?? blogArticles[0];
}

export function getLatestArticles(limit = 6) {
  return [...blogArticles].sort((a, b) => (a.publishDate > b.publishDate ? -1 : 1)).slice(0, limit);
}

export function getPopularArticles(limit = 5) {
  return blogArticles.filter((article) => article.trending).slice(0, limit);
}

export function getCategories() {
  return Array.from(new Set(blogArticles.map((article) => article.category))).sort();
}

export function getTags() {
  return Array.from(new Set(blogArticles.flatMap((article) => article.tags))).sort();
}

export function getArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, limit = 3) {
  const current = getArticleBySlug(currentSlug);
  if (!current) return [];

  const sameCategory = blogArticles.filter((article) => article.category === current.category && article.slug !== currentSlug);
  const sameTags = blogArticles.filter((article) => article.tags.some((tag) => current.tags.includes(tag)) && article.slug !== currentSlug);
  const combined = [...sameCategory, ...sameTags].filter((article, index, arr) => arr.findIndex((item) => item.slug === article.slug) === index);
  return combined.slice(0, limit);
}

export function getAdjacentArticles(currentSlug: string) {
  const index = blogArticles.findIndex((article) => article.slug === currentSlug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: blogArticles[index - 1] ?? null,
    next: blogArticles[index + 1] ?? null,
  };
}
