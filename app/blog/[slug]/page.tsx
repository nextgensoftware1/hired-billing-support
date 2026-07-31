import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticlePageClient from '@/app/components/blog/ArticlePageClient';
import { getAdjacentArticles, getArticleBySlug, getRelatedArticles } from '@/lib/blog';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    return {};
  }

  const canonicalUrl = `https://www.hiredbillingsupport.com/blog/${article.slug}`;

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      url: canonicalUrl,
      type: 'article',
      images: [{ url: article.image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      images: [article.image],
    },
    keywords: article.tags,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);
  const adjacentArticles = getAdjacentArticles(slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticlePageClient
      article={article}
      relatedArticles={relatedArticles}
      adjacentArticles={adjacentArticles}
    />
  );
}
