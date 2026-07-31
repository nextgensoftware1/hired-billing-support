import type { ReactNode } from 'react';

const redirectSlugs: Record<string, string> = {
  'genesis-internal-medicine': 'dr-layla-hassan',
};

const caseStudyMeta = [
  {
    slug: 'dr-ruth-parkin-edwin',
    title: 'Dr. Ruth Parkin-Edwin Case Study | Hired Billing Support',
    description: 'See how Hired Billing Support helped a periodontal practice improve billing accuracy, reduce admin burden, and strengthen collections.',
  },
  {
    slug: 'thompson-mental-health',
    title: 'Thompson Mental Health Case Study | Hired Billing Support',
    description: 'Explore how Hired Billing Support helped a mental health practice streamline billing and reclaim time for patient care.',
  },
  {
    slug: 'sheikh-internal-medicine',
    title: 'Sheikh Internal Medicine Case Study | Hired Billing Support',
    description: 'Learn how Hired Billing Support helped an internal medicine practice reduce operational strain and improve revenue flow.',
  },
  {
    slug: 'dr-layla-hassan',
    title: 'Genesis Internal Medicine Case Study | Hired Billing Support',
    description: 'Read how Hired Billing Support helped a growing internal medicine practice scale operations without adding administrative overhead.',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const canonicalSlug = redirectSlugs[slug] ?? slug;
  const study = caseStudyMeta.find((item) => item.slug === canonicalSlug);

  if (!study) {
    return {
      title: 'Case Study Not Found | Hired Billing Support',
      description: 'The requested case study could not be found.',
    };
  }

  return {
    title: study.title,
    description: study.description,
  };
}

export default function CaseStudyDetailLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
