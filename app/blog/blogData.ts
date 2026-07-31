export type { BlogArticle } from '@/types/blog';
export { blogArticles } from '@/data/blogs';
export {
  getAdjacentArticles,
  getAllArticles,
  getArticleBySlug,
  getCategories,
  getFeaturedArticle,
  getLatestArticles,
  getPopularArticles,
  getRelatedArticles,
  getTags,
} from '@/lib/blog';
