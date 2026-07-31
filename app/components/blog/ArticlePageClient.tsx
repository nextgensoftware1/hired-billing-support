'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { BlogArticle } from '@/types/blog';

type ArticlePageClientProps = {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
  adjacentArticles: { previous: BlogArticle | null; next: BlogArticle | null };
};

type SectionLink = {
  id: string;
  label: string;
};

type ContentGroup = {
  id: string;
  label: string;
  level: 2 | 3 | 4;
  paragraphs: string[];
  kind: 'section' | 'callout' | 'quote' | 'list';
};

function isHeadingLikeCandidate(text: string): boolean {
  const trimmed = text.trim();

  if (!trimmed) {
    return false;
  }

  const normalized = trimmed.replace(/\s+/g, ' ');
  const wordCount = normalized.split(/\s+/).filter(Boolean).length;
  const hasEndingPunctuation = /[.!?]$/.test(normalized);
  const hasColon = /:$/.test(normalized);
  const isVeryShort = wordCount <= 5;
  const isShort = wordCount <= 10;
  const titleCaseLike = /^[A-Z][A-Za-z0-9'’&/()\-]+(?:\s+(?:[A-Z][A-Za-z0-9'’&/()\-]+|of|the|and|to|for|in|on|with|a|an|is|are|be|as|from|into|by|your|our|their|that|this|it|can|will|more|than|not|but|why|what|how|who|where|when))*$/.test(normalized);
  const headingCue = /\b(overview|introduction|conclusion|benefits|importance|guidance|process|services|support|management|strategy|planning|value|technology|future|challenges|challenge|revenue|billing|coding|verification|registration|submission|posting|denials|denial|claims|payment|reimbursements|costs|visibility|compliance|efficiency|operations|outsourcing|partnership|regulations|reporting|collections|growth|follow|up)\b/i.test(normalized);
  const hasQuestionMark = /\?$/.test(normalized);

  let score = 0;

  if (isVeryShort) score += 2;
  if (wordCount <= 8) score += 1;
  if (!hasEndingPunctuation || hasColon) score += 2;
  if (titleCaseLike) score += 2;
  if (headingCue) score += 2;
  if (hasQuestionMark) score += 1;
  if (/^[A-Z]/.test(normalized)) score += 1;
  if (wordCount > 12) score -= 3;
  if (/[.,;!?]/.test(normalized) && !hasColon && !hasQuestionMark) score -= 2;
  if (!isShort && !hasColon && !headingCue && !titleCaseLike) score -= 2;

  return score >= 4 && (wordCount <= 12 || headingCue || titleCaseLike || hasColon || hasQuestionMark);
}

function getSections(article: BlogArticle): SectionLink[] {
  const sections: SectionLink[] = [{ id: 'overview', label: 'Overview' }];

  if (article.takeaways.length) {
    sections.push({ id: 'takeaways', label: 'Key takeaways' });
  }

  if (article.faq.length) {
    sections.push({ id: 'faq', label: 'FAQ' });
  }

  sections.push({ id: 'next-step', label: 'Next step' });
  return sections;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 64);
}

function detectContentKind(text: string): ContentGroup['kind'] {
  const trimmed = text.trim();

  if (!trimmed) {
    return 'section';
  }

  if (/^(important|note|key point|tip|warning|recommendation|did you know|best practice)\b/i.test(trimmed)) {
    return 'callout';
  }

  if (/^"|“|”$/.test(trimmed) || /['"]/.test(trimmed)) {
    return 'quote';
  }

  if (/\b(benefits|advantages|steps|requirements|features|best practices|checklist|recommendations|workflow|process|why|how|what|when|where)\b/i.test(trimmed)) {
    return 'list';
  }

  return 'section';
}

function buildContentGroups(paragraphs: string[]): ContentGroup[] {
  const groups: ContentGroup[] = [];
  let currentGroup: ContentGroup | null = null;
  let headingCount = 0;

  paragraphs.forEach((paragraph) => {
    const trimmed = paragraph.trim();

    if (!trimmed) {
      return;
    }

    const isHeading = isHeadingLikeCandidate(trimmed);
    const kind = detectContentKind(trimmed);

    if (isHeading) {
      const level: ContentGroup['level'] = groups.length === 0 ? 2 : headingCount % 2 === 0 ? 2 : 3;
      headingCount += 1;
      const baseId = slugifyHeading(trimmed) || 'section';
      currentGroup = {
        id: `${baseId}-${groups.length + 1}`,
        label: trimmed,
        level,
        paragraphs: [],
        kind: 'section',
      };
      groups.push(currentGroup);
      return;
    }

    if (!currentGroup) {
      currentGroup = {
        id: 'overview',
        label: 'Overview',
        level: 2,
        paragraphs: [],
        kind: 'section',
      };
      groups.push(currentGroup);
    }

    if (kind === 'callout' || kind === 'quote' || kind === 'list') {
      currentGroup.paragraphs.push(trimmed);
      return;
    }

    currentGroup.paragraphs.push(trimmed);
  });

  if (!groups.length) {
    groups.push({
      id: 'overview',
      label: 'Overview',
      level: 2,
      paragraphs: paragraphs.map((paragraph) => paragraph.trim()).filter(Boolean),
      kind: 'section',
    });
  }

  return groups;
}

function injectLinksIntoText(text: string, replacements: Array<{ phrase: string; href: string }>): ReactNode {
  if (!replacements.length) {
    return text;
  }

  const [firstReplacement, ...rest] = replacements;

  if (!firstReplacement?.phrase) {
    return injectLinksIntoText(text, rest);
  }

  const escaped = escapeRegExp(firstReplacement.phrase);
  const regex = new RegExp(`(${escaped})`, 'i');
  const match = text.match(regex);

  if (!match || match.index === undefined) {
    return injectLinksIntoText(text, rest);
  }

  const start = match.index;
  const end = start + match[0].length;
  const before = text.slice(0, start);
  const matchedText = text.slice(start, end);
  const after = text.slice(end);

  return (
    <>
      {before}
      <Link href={firstReplacement.href}>{matchedText}</Link>
      {injectLinksIntoText(after, rest)}
    </>
  );
}

type JsonLdNode = {
  '@context': string;
  '@type': string;
  '@id'?: string;
  headline?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': string;
    name: string;
    jobTitle?: string;
  };
  publisher?: {
    '@type': string;
    name: string;
    url: string;
  };
  mainEntityOfPage?: string;
  keywords?: string;
  name?: string;
  url?: string;
  sameAs?: string[];
  mainEntity?: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
  itemListElement?: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
};

function buildSchema(article: BlogArticle, canonicalUrl: string) {
  const publishDate = article.publishDate;
  const updatedDate = article.updatedDate || article.publishDate;
  const faqSchema = article.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  const graph: JsonLdNode[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: article.title,
      description: article.seoDescription || article.excerpt,
      image: article.image,
      datePublished: publishDate,
      dateModified: updatedDate,
      author: {
        '@type': 'Person',
        name: article.author,
        jobTitle: article.authorTitle,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Hired Billing Support',
        url: 'https://www.hiredbillingsupport.com',
      },
      mainEntityOfPage: canonicalUrl,
      keywords: article.tags.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hiredbillingsupport.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.hiredbillingsupport.com/blog' },
        { '@type': 'ListItem', position: 3, name: article.title, item: canonicalUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Hired Billing Support',
      url: 'https://www.hiredbillingsupport.com',
      sameAs: ['https://www.facebook.com', 'https://www.linkedin.com'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Hired Billing Support',
      url: 'https://www.hiredbillingsupport.com',
    },
  ];

  if (faqSchema) {
    graph.push(faqSchema);
  }

  return graph;
}

export default function ArticlePageClient({ article, relatedArticles, adjacentArticles }: ArticlePageClientProps) {
  const [activeSection, setActiveSection] = useState('overview');
  const contentGroups = useMemo(() => buildContentGroups(article.paragraphs), [article.paragraphs]);
  const sections = useMemo(() => {
    const dynamicSections = contentGroups.map((group) => ({ id: group.id, label: group.label }));

    return [
      ...dynamicSections,
      ...(article.takeaways.length ? [{ id: 'takeaways', label: 'Key takeaways' }] : []),
      ...(article.faq.length ? [{ id: 'faq', label: 'Frequently asked questions' }] : []),
      { id: 'next-step', label: 'What this means for your team' },
    ];
  }, [article.faq.length, article.takeaways.length, contentGroups]);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 8);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.5, 0.8] },
    );

    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((target): target is HTMLElement => Boolean(target));

    targets.forEach((target) => observer.observe(target));

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.hiredbillingsupport.com'}/blog/${article.slug}`;
  const schema = buildSchema(article, canonicalUrl);
  const brandLink = '/about';
  const keywordLink = '/services/medical-billing';
  const introWithLinks = injectLinksIntoText(article.intro, [
    { phrase: article.tags[0] ?? article.category, href: keywordLink },
    { phrase: article.author, href: brandLink },
  ]);

  return (
    <main id="main-content" className="article-page">
      <article className="article-shell" itemScope itemType="https://schema.org/Article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }) }} />

        <div className="container article-layout">
          <header className="article-header">
            <nav className="article-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <span>{article.title}</span>
            </nav>

            <div className="hero-label">{article.heroLabel}</div>
            <h1 className="article-title">{article.title}</h1>

            <p className="article-intro">{introWithLinks}</p>

            <ul className="article-meta" aria-label="Article metadata">
              <li>
                <span className="meta-label">Author</span>
                <span>{article.author}</span>
              </li>
              <li>
                <span className="meta-label">Published</span>
                <time dateTime={article.publishDate}>{article.publishDate}</time>
              </li>
              <li>
                <span className="meta-label">Updated</span>
                <time dateTime={article.updatedDate || article.publishDate}>{article.updatedDate || article.publishDate}</time>
              </li>
              <li>
                <span className="meta-label">Read time</span>
                <span>{article.readTime}</span>
              </li>
              <li>
                <span className="meta-label">Category</span>
                <span>{article.category}</span>
              </li>
            </ul>

            <figure className="article-image-card">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="article-image"
                sizes="(max-width: 960px) 100vw, 75vw"
                priority
                loading="eager"
                decoding="async"
              />
            </figure>
          </header>

          <div className="article-body-grid">

            <div className="article-content">
              {contentGroups.map((group) => {
                const HeadingTag = group.level === 3 ? 'h3' : 'h2';

                return (
                  <section key={group.id} className="content-section" id={group.id} aria-labelledby={`${group.id}-title`}>
                    <HeadingTag id={`${group.id}-title`} className={group.level === 3 ? 'content-subheading' : undefined}>
                      {group.label}
                    </HeadingTag>
                    <div className="prose-stack">
                      {group.paragraphs.map((paragraph, index) => {
                        if (group.kind === 'callout') {
                          return (
                            <div className="callout-card" key={`${group.id}-${index}`}>
                              <strong>{paragraph}</strong>
                            </div>
                          );
                        }

                        if (group.kind === 'quote') {
                          return (
                            <blockquote className="quote-card" key={`${group.id}-${index}`}>
                              {paragraph}
                            </blockquote>
                          );
                        }

                        if (group.kind === 'list') {
                          return (
                            <ul className="content-list" key={`${group.id}-${index}`}>
                              <li>{paragraph}</li>
                            </ul>
                          );
                        }

                        return <p key={`${group.id}-${index}`}>{paragraph}</p>;
                      })}
                    </div>
                  </section>
                );
              })}

              {article.takeaways.length > 0 ? (
                <section className="content-section" id="takeaways" aria-labelledby="takeaways-title">
                  <h2 id="takeaways-title">Key takeaways</h2>
                  <ul className="content-list">
                    {article.takeaways.map((takeaway) => (
                      <li key={takeaway}>{takeaway}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {article.faq.length > 0 ? (
                <section className="content-section" id="faq" aria-labelledby="faq-title">
                  <h2 id="faq-title">Frequently asked questions</h2>
                  <div className="faq-list">
                    {article.faq.map((item) => (
                      <details key={item.question} className="faq-item">
                        <summary>{item.question}</summary>
                        <p>{item.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="content-section" id="next-step" aria-labelledby="next-step-title">
                <h2 id="next-step-title">What this means for your team</h2>
                <div className="cta-card">
                  <h3>{article.ctaTitle}</h3>
                  <p>{article.ctaText}</p>
                  <Link href="/contact" className="cta-link">
                    Schedule a conversation
                  </Link>
                </div>
              </section>
            </div>
          </div>

          <section className="content-section" aria-labelledby="meta-title">
            <div className="section-heading">
              <h2 id="meta-title">Article details</h2>
              <p>Everything needed to understand the context, timing, and topic area of this article.</p>
            </div>
            <div className="meta-grid">
              <div className="meta-card">
                <h3>Author</h3>
                <p>{article.author}</p>
                <p className="meta-subtle">{article.authorTitle}</p>
              </div>
              <div className="meta-card">
                <h3>Tags</h3>
                <div className="tag-list">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="content-section" aria-labelledby="share-title">
            <div className="section-heading">
              <h2 id="share-title">Share this article</h2>
              <p>Send it to a colleague or keep it handy for your next planning conversation.</p>
            </div>
            <div className="share-links" aria-label="Social share links">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`} target="_blank" rel="noreferrer">Facebook</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}`} target="_blank" rel="noreferrer">X</a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`https://wa.me/?text=${encodeURIComponent(canonicalUrl)}`} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(canonicalUrl)}`}>Email</a>
            </div>
          </section>

          <section className="related-section" aria-labelledby="related-title">
            <div className="section-heading">
              <h2 id="related-title">Related reading</h2>
              <p>Explore more practical articles for revenue leaders and healthcare operations teams.</p>
            </div>
            <div className="related-grid">
              {relatedArticles.map((item) => (
                <Link href={`/blog/${item.slug}`} key={item.slug} className="related-card">
                  <div className="related-image-wrap">
                    <Image src={item.image} alt={item.title} fill className="related-image" sizes="(max-width: 720px) 100vw, 33vw" />
                  </div>
                  <div className="related-card-body">
                    <span>{item.category}</span>
                    <strong>{item.title}</strong>
                    <p>{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <nav className="adjacent-nav" aria-label="Previous and next article">
            {adjacentArticles.previous ? (
              <Link href={`/blog/${adjacentArticles.previous.slug}`} className="adjacent-card previous">
                <span>← Previous article</span>
                <strong>{adjacentArticles.previous.title}</strong>
              </Link>
            ) : (
              <div className="adjacent-card disabled">
                <span>← Previous article</span>
                <strong>No earlier article</strong>
              </div>
            )}

            {adjacentArticles.next ? (
              <Link href={`/blog/${adjacentArticles.next.slug}`} className="adjacent-card next">
                <span>Next article →</span>
                <strong>{adjacentArticles.next.title}</strong>
              </Link>
            ) : (
              <div className="adjacent-card disabled">
                <span>Next article →</span>
                <strong>No later article</strong>
              </div>
            )}
          </nav>
        </div>
      </article>

      <style jsx global>{`
        .article-page {
          padding: 112px 0 104px;
          background: var(--paper);
        }

        .article-shell {
          animation: articleFadeUp 700ms var(--ease) both;
        }

        .article-layout {
          display: grid;
          gap: 32px;
          max-width: 1180px;
          margin: 0 auto;
          padding-inline: clamp(20px, 3vw, 32px);
        }

        .article-header {
          display: grid;
          gap: 24px;
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
        }

        .article-breadcrumb {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        .article-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }

        .hero-label {
          display: inline-flex;
          width: fit-content;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(0, 200, 150, 0.14);
          color: var(--signal-deep);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .article-title {
          font-family: var(--serif);
          font-size: clamp(2.25rem, 3.1vw, 3.5rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--ink);
          max-width: 820px;
          font-weight: 700;
          margin: 0;
        }

        .article-intro {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--ink-soft);
          max-width: 720px;
          font-weight: 500;
          margin: 0;
        }

        .article-meta {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 14px;
          padding: 0;
          margin: 0;
          list-style: none;
          width: 100%;
        }

        .article-meta li {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-height: 96px;
          padding: 16px 18px;
          border: 1px solid var(--paper-line);
          border-radius: 16px;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 12px 30px rgba(10,22,40,0.04);
        }

        .meta-label {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        .article-image-card {
          position: relative;
          width: min(100%, 860px);
          margin: 0 auto;
          min-height: clamp(280px, 42vw, 430px);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(10,22,40,0.08);
          box-shadow: 0 24px 70px rgba(10,22,40,0.09);
          transition: transform 250ms var(--ease), box-shadow 250ms var(--ease);
        }

        .article-image-card:hover {
          transform: scale(1.01);
          box-shadow: 0 28px 80px rgba(10,22,40,0.12);
        }

        .article-image {
          object-fit: cover;
          object-position: center;
        }

        .article-body-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: start;
        }

        .toc-card {
          display: none;
        }

        .article-content {
          display: grid;
          gap: 0;
          max-width: 760px;
          width: 100%;
          margin: 0 auto;
        }

        .content-section {
          width: 100%;
          margin: 0 0 88px;
          padding: 0;
          border: none;
          border-radius: 0;
          background: transparent;
          box-shadow: none;
        }

        .content-section:last-of-type {
          margin-bottom: 0;
        }

        .content-section h2 {
          font-family: var(--serif);
          font-size: clamp(1.45rem, 1.8vw, 1.9rem);
          line-height: 1.2;
          color: var(--ink);
          font-weight: 700;
          margin: 0 0 28px;
          padding: 0;
          border: 0;
        }

        .prose-stack {
          display: grid;
          gap: 24px;
        }

        .prose-stack p {
          font-size: 18px;
          line-height: 1.8;
          color: var(--ink-soft);
          max-width: 72ch;
          margin: 0;
        }

        .content-section h3 {
          font-size: 1.15rem;
          line-height: 1.35;
          color: var(--ink);
          font-weight: 700;
          margin: 32px 0 14px;
        }

        .content-list {
          display: grid;
          gap: 12px;
          padding-left: 1.25rem;
          margin: 0;
          color: var(--ink-soft);
          line-height: 1.8;
        }

        .content-list li {
          padding-left: 6px;
        }

        .faq-list {
          display: grid;
          gap: 12px;
        }

        .faq-item {
          border: 1px solid var(--paper-line);
          border-radius: 16px;
          padding: 16px 18px;
          background: rgba(255,255,255,0.96);
          box-shadow: 0 10px 24px rgba(10,22,40,0.03);
        }

        .faq-item summary {
          cursor: pointer;
          font-weight: 600;
          color: var(--ink);
        }

        .faq-item p {
          margin-top: 12px;
          color: var(--ink-soft);
          line-height: 1.75;
        }

        .cta-card {
          border-radius: 20px;
          padding: 24px;
          background: linear-gradient(135deg, rgba(0, 200, 150, 0.14), rgba(255,255,255,0.95));
          border: 1px solid rgba(0, 200, 150, 0.16);
          box-shadow: 0 12px 30px rgba(10,22,40,0.04);
        }

        .cta-card h3 {
          margin-bottom: 10px;
          font-size: 1.15rem;
          color: var(--ink);
        }

        .cta-card p {
          margin-bottom: 16px;
          color: var(--ink-soft);
          line-height: 1.75;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          color: var(--signal-deep);
          text-decoration: none;
          transition: transform 250ms var(--ease);
        }

        .cta-link:hover {
          transform: translateX(2px);
        }

        .section-heading {
          display: flex;
          flex-wrap: wrap;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
          max-width: 860px;
          margin-inline: auto;
        }

        .section-heading h2 {
          font-family: var(--serif);
          font-size: clamp(1.45rem, 1.8vw, 1.9rem);
          color: var(--ink);
          margin: 0;
        }

        .section-heading p {
          color: var(--ink-mute);
          max-width: 560px;
          line-height: 1.7;
          margin: 0;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          max-width: 860px;
          margin: 0 auto;
        }

        .meta-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 24px;
          border: 1px solid var(--paper-line);
          border-radius: 18px;
          background: rgba(255,255,255,0.96);
          box-shadow: 0 12px 30px rgba(10,22,40,0.04);
          min-height: 100%;
        }

        .meta-card h3 {
          margin: 0;
          font-size: 1rem;
          color: var(--ink);
        }

        .meta-card p {
          margin: 0;
          color: var(--ink-soft);
          line-height: 1.7;
        }

        .meta-subtle {
          color: var(--ink-mute) !important;
          font-size: 0.95rem;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag-pill {
          display: inline-flex;
          align-items: center;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(0, 200, 150, 0.12);
          color: var(--signal-deep);
          font-size: 0.9rem;
        }

        .share-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 12px;
          max-width: 860px;
          margin: 0 auto;
        }

        .share-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 12px 16px;
          border: 1px solid var(--paper-line);
          border-radius: 999px;
          text-decoration: none;
          color: var(--ink);
          background: rgba(255,255,255,0.96);
          transition: transform 250ms var(--ease), box-shadow 250ms var(--ease), background-color 250ms var(--ease);
        }

        .share-links a:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(10,22,40,0.06);
          background: rgba(255,255,255,1);
        }

        .share-links a:focus-visible {
          outline: 2px solid var(--signal-deep);
          outline-offset: 2px;
        }

        .related-section {
          display: grid;
          gap: 20px;
          max-width: 1180px;
          width: 100%;
          margin: 0 auto;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .related-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 14px;
          border: 1px solid var(--paper-line);
          border-radius: 18px;
          background: rgba(255,255,255,0.96);
          text-decoration: none;
          color: var(--ink);
          box-shadow: 0 10px 24px rgba(10,22,40,0.04);
          transition: transform 250ms var(--ease), box-shadow 250ms var(--ease);
        }

        .related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 45px rgba(10,22,40,0.08);
        }

        .related-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 14px;
          overflow: hidden;
          background: var(--paper-warm);
          margin-bottom: 12px;
        }

        .related-image {
          object-fit: cover;
          object-position: center;
        }

        .related-card-body {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }

        .related-card-body span {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        .related-card-body strong {
          font-size: 0.95rem;
          line-height: 1.28;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .related-card-body p {
          color: var(--ink-soft);
          line-height: 1.5;
          font-size: 0.9rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin: 0;
        }

        .adjacent-nav {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          max-width: 860px;
          width: 100%;
          margin: 0 auto;
        }

        .adjacent-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          padding: 16px 18px;
          min-height: 104px;
          border: 1px solid var(--paper-line);
          border-radius: 16px;
          background: rgba(255,255,255,0.96);
          color: var(--ink);
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(10,22,40,0.04);
          transition: transform 250ms var(--ease), box-shadow 250ms var(--ease);
        }

        .adjacent-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(10,22,40,0.08);
        }

        .adjacent-card span {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-mute);
        }

        .adjacent-card strong {
          font-size: 0.95rem;
          line-height: 1.35;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .adjacent-card.disabled {
          opacity: 0.7;
          pointer-events: none;
        }

        @keyframes articleFadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 980px) {
          .article-page {
            padding-top: 100px;
            padding-bottom: 96px;
          }

          .article-header,
          .section-heading,
          .adjacent-nav,
          .related-section {
            max-width: 100%;
          }

          .article-body-grid {
            grid-template-columns: 1fr;
          }

          .prose-stack p {
            font-size: 17px;
          }

          .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .meta-grid {
            grid-template-columns: 1fr;
          }

          .share-links {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .article-page {
            padding-top: 84px;
            padding-bottom: 72px;
          }

          .article-layout {
            gap: 24px;
            padding-inline: 20px;
          }

          .article-header {
            gap: 18px;
          }

          .article-title {
            font-size: clamp(1.9rem, 6vw, 2.5rem);
          }

          .article-intro {
            font-size: 1rem;
          }

          .article-meta {
            grid-template-columns: 1fr;
          }

          .article-image-card {
            min-height: 240px;
            border-radius: 16px;
          }

          .content-section {
            margin-bottom: 64px;
          }

          .content-section h2 {
            margin-bottom: 20px;
          }

          .prose-stack {
            gap: 18px;
          }

          .prose-stack p {
            font-size: 16px;
            line-height: 1.75;
          }

          .section-heading {
            align-items: flex-start;
          }

          .cta-card {
            padding: 20px;
          }

          .share-links,
          .adjacent-nav,
          .related-grid {
            grid-template-columns: 1fr;
          }

          .related-card {
            padding: 12px;
          }

          .adjacent-card {
            min-height: auto;
          }
        }
      `}</style>
    </main>
  );
}
