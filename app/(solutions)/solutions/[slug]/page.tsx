// app/(solutions)/solutions/[slug]/page.tsx

import type { Metadata } from 'next';
import { getSolution, getSolutionSlugs, getSolutionUrl } from '@/app/data/solutions';
import SolutionLayout from '@/app/layouts/SolutionLayout';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {
      title: 'Page Not Found',
      description: 'This page does not exist.',
    };
  }

  const canonicalUrl = getSolutionUrl(slug);

  return {
    title: solution.title,
    description: solution.description,
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
      title: solution.title,
      description: solution.description,
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: solution.title,
      description: solution.description,
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;

  // Get solution from data
  const solution = getSolution(slug);

  // If solution not found, show 404
  if (!solution) {
    notFound();
  }

  return <SolutionLayout solution={solution} slug={slug} />;
}

export async function generateStaticParams() {
  const slugs = getSolutionSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}