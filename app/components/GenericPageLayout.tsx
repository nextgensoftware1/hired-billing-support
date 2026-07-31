import React from 'react';

interface GenericPageProps {
  title: string;
  subtitle?: React.ReactNode;
  content: React.ReactNode;
  className?: string;
  isDark?: boolean;
}

export default function GenericPageLayout({
  title,
  subtitle,
  content,
  className = '',
  isDark = false,
}: GenericPageProps) {
  return (
    <section className={`block ${isDark ? 'dark' : ''} ${className}`}>
      <div className="container">
        <div className="block-head fade-in">
          <div className="eyebrow">{title.split(' ')[0]}</div>
          <h2 className="display">{title}</h2>
          {subtitle && <p style={{ fontSize: '18px', lineHeight: '1.6', color: isDark ? 'rgba(250, 247, 242, 0.7)' : 'var(--ink-mute)', marginTop: '24px' }}>{subtitle}</p>}
        </div>
        <div className="fade-in">
          {content}
        </div>
      </div>
    </section>
  );
}
