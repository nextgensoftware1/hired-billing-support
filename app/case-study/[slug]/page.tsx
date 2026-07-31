'use client';

import { redirect } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';

const redirectSlugs: Record<string, string> = {
  'genesis-internal-medicine': 'dr-layla-hassan',
};

const caseStudies = [
  {
    slug: 'dr-ruth-parkin-edwin',
    id: 1,
    quote: "Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever.",
    name: "Dr Ruth Parkin-Edwin",
    title: "DMD/MS",
    credential: "Diplomate of American Board of Periodontology",
    practice: "Edwin Dental Specialists",
    specialty: "Periodontology",
    details: {
      challenge: "As the practice expanded, manual billing processes led to increased claim denials and delayed cash flow. Administrative work was diverting focus from patient care.",
      solution: "HBS addressed these challenges by standardizing workflows and enhancing coding accuracy, resulting in cleaner claims and more predictable reimbursements.",
      results: [
        "70% Reduction in Staffing Costs: Outsourcing billing and front-desk tasks to trained remote team",
        "Increased Patient Appointments: With improved call handling and real-time scheduling support",
        "Strong Revenue Cycle Management: Claims submitted accurately and on time",
        "Denials reduced through proper coding and verification",
        "Faster reimbursements and improved cash flow"
      ],
      impact: "These improvements reduced administrative bottlenecks and recaptured revenue that was previously lost to errors or slow processes."
    }
  },
  {
    slug: 'thompson-mental-health',
    id: 2,
    quote: "Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our billing operations seamlessly.",
    name: "Herma Thompson",
    title: "PMHNP-BC",
    credential: "Nurse Practitioner - Psych/Mental Health",
    practice: "Thompson Mental Health",
    specialty: "Mental Health / Psychiatry",
    details: {
      challenge: "Mental health billing is complex and unforgiving. Before HBS, I struggled with billing errors, claim rejections, and endless admin tasks that took time away from patients.",
      solution: "HBS didn't just process claims—they became a true partner. Their remote staff is responsive, knowledgeable, and always available. They learned the practice and handled everything with accuracy and care.",
      results: [
        "Billing became accurate and claims were processed faster",
        "Reimbursements became more predictable and faster",
        "Administrative burden significantly reduced",
        "Time reclaimed to focus on patient care",
        "Peace of mind returned to practice operations"
      ],
      impact: "With HBS support, I can finally focus on what matters most—my patients. My practice runs smoother and collections improved significantly."
    }
  },
  {
    slug: 'sheikh-internal-medicine',
    id: 3,
    quote: "Remote staffing solution by HBS has freed the resources of the practice, enabling us to spend more time at the bedside and enhance the efficiency of the whole process.",
    name: "Dr Afreen Sheikh",
    title: "MD",
    credential: "Internal Medicine",
    practice: "Sheikh Internal Medicine",
    specialty: "Internal Medicine",
    details: {
      challenge: "Before HBS, my staff and I were drowning in paperwork and billing mistakes. The backlog was growing, and it was affecting patient care. With patient numbers rising, I struggled to keep up with administrative work and billing errors.",
      solution: "HBS stepped in with remote staffing that immediately made a difference. Their remote team was efficient, responsive, and truly felt like an extension of my own staff. They understood my practice's needs and tailored their remote support.",
      results: [
        "Administrative workload significantly reduced, allowing focus on patient care",
        "Billing accuracy improved dramatically",
        "Collections improved and reimbursements became faster",
        "Staff morale and team satisfaction improved",
        "Operations run smoother with better workflow"
      ],
      impact: "My team can finally focus on patient care. Our collections improved, and the stress is gone. My operations are smoother, and I feel supported every step of the way."
    }
  },
  {
    slug: 'dr-layla-hassan',
    id: 4,
    quote: "With the help of HBS their support and expertise we have achieved a lot more in practice.",
    name: "Dr. Layla Hassan",
    title: "MD",
    credential: "Genesis Internal Medicine",
    practice: "Genesis Internal Medicine",
    specialty: "Internal Medicine",
    details: {
      challenge: "As the lead physician at Genesis Internal Medicine, I was overwhelmed by the challenges of scaling our multi-provider practice. When our patient numbers increased, so did the paperwork and billing complexity. Managing billing and admin for multiple providers was a nightmare.",
      solution: "HBS stepped in with remote support and centralized workflows, making everything consistent and stress-free. Their remote team is always available, accurate, and proactive. They understood our practice and worked with us to meet our goals.",
      results: [
        "Efficiency increased significantly across all departments",
        "Costs reduced through streamlined operations",
        "Team satisfaction and morale improved",
        "Billing accuracy and claim processing times improved",
        "Scaling achieved without extra administrative costs"
      ],
      impact: "With HBS support, we scaled up without extra admin costs. Their remote team is truly part of our success. Choosing HBS made it possible to grow without sacrificing quality or adding administrative headaches."
    }
  }
];

export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const canonicalSlug = redirectSlugs[slug] ?? slug;

  if (canonicalSlug !== slug) {
    redirect(`/case-study/${canonicalSlug}`);
  }

  const study = caseStudies.find((s) => s.slug === canonicalSlug);

  if (!study) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'Inter Tight, sans-serif', color: '#0A1628' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '16px' }}>Case Study Not Found</h1>
        <p style={{ fontSize: '16px', color: '#475569', marginBottom: '32px' }}>Sorry, we couldn't find this case study.</p>
        <Link href="/case-study" style={{ display: 'inline-block', padding: '12px 24px', background: '#0A1628', color: '#FAF7F2', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}>
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Inter Tight, sans-serif', background: '#FAF7F2', color: '#0A1628', minHeight: '100vh' }}>
      <style jsx>{`
        :root {
          --ink: #0A1628;
          --ink-soft: #1B2942;
          --ink-mute: #475569;
          --paper: #FAF7F2;
          --paper-warm: #F2EDE3;
          --paper-line: #E8E2D5;
          --white: #FFFFFF;
          --signal: #00C896;
          --signal-deep: #00876B;
          --accent: #D4A574;
          --danger: #D64545;
          --radius: 4px;
          --radius-lg: 12px;
          --max: 1280px;
          --gutter: clamp(20px, 4vw, 48px);
          --serif: 'Fraunces', 'Times New Roman', serif;
          --sans: 'Inter Tight', -apple-system, sans-serif;
          --mono: 'JetBrains Mono', monospace;
          --ease: cubic-bezier(0.22, 1, 0.36, 1);
        }

        .detail-hero {
          background: var(--paper);
          padding: 80px var(--gutter) 60px;
          position: relative;
          overflow: hidden;
        }

        .detail-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .detail-hero-inner {
          position: relative;
          z-index: 1;
          max-width: var(--max);
          margin: 0 auto;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 0;
          color: var(--signal);
          text-decoration: none;
          font-family: var(--mono);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 32px;
          transition: color 0.25s var(--ease);
        }

        .back-link:hover {
          color: var(--signal-deep);
        }

        .detail-title {
          font-family: var(--serif);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .detail-subtitle {
          font-size: 17px;
          line-height: 1.7;
          color: var(--ink-mute);
          max-width: 600px;
        }

        .provider-info {
          background: var(--white);
          border: 1px solid var(--paper-line);
          border-radius: var(--radius-lg);
          padding: 32px;
          margin-top: 48px;
        }

        .provider-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        @media (max-width: 768px) {
          .provider-header {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        .provider-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .provider-name {
          font-family: var(--serif);
          font-size: 28px;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
        }

        .provider-title {
          font-size: 14px;
          color: var(--ink-mute);
          font-weight: 500;
        }

        .provider-credential {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--signal-deep);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .provider-practice {
          font-size: 15px;
          color: var(--ink-soft);
          font-weight: 500;
        }

        .provider-quote {
          font-family: var(--serif);
          font-size: 18px;
          font-style: italic;
          line-height: 1.6;
          color: var(--ink);
          padding: 20px;
          border-left: 3px solid var(--signal);
          background: rgba(0, 200, 150, 0.05);
        }

        .content-section {
          max-width: var(--max);
          margin: 60px auto;
          padding: 0 var(--gutter);
        }

        .section-title {
          font-family: var(--serif);
          font-size: 32px;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-title::before {
          content: '—';
          color: var(--signal);
          font-size: 28px;
        }

        .content-box {
          background: var(--white);
          border: 1px solid var(--paper-line);
          border-radius: var(--radius-lg);
          padding: 32px;
          margin-bottom: 32px;
        }

        .content-box p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--ink-mute);
          margin: 0;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .results-grid {
            grid-template-columns: 1fr;
          }
        }

        .result-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px;
          background: rgba(0, 200, 150, 0.08);
          border-radius: var(--radius);
        }

        .result-check {
          color: var(--signal);
          font-weight: bold;
          flex-shrink: 0;
          font-size: 18px;
        }

        .result-text {
          font-size: 14px;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        .impact-box {
          background: var(--signal-pale, rgba(0, 200, 150, 0.08));
          border-left: 4px solid var(--signal);
          padding: 24px;
          border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
          margin-top: 20px;
        }

        .impact-label {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--signal-deep);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
          display: block;
        }

        .impact-text {
          font-size: 16px;
          line-height: 1.7;
          color: var(--ink-soft);
          font-style: italic;
        }

        .cta-section {
          background: var(--ink);
          color: var(--white);
          padding: 80px var(--gutter);
          text-align: center;
          margin-top: 80px;
        }

        .cta-title {
          font-family: var(--serif);
          font-size: 42px;
          font-weight: 400;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          color: var(--paper);
        }

        .cta-text {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(250, 247, 242, 0.7);
          max-width: 560px;
          margin: 0 auto 32px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: var(--signal);
          color: var(--ink);
          border: none;
          border-radius: var(--radius);
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s var(--ease);
        }

        .cta-btn:hover {
          background: var(--signal-deep);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Hero Section */}
      <section className="detail-hero">
        <div className="detail-hero-inner">
          <a href="/case-study" className="back-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Case Studies
          </a>
          <h1 className="detail-title">{study.practice}</h1>
          <p className="detail-subtitle">{study.quote}</p>
        </div>
      </section>

      {/* Provider Info */}
      <div className="content-section">
        <div className="provider-info">
          <div className="provider-header">
            <div className="provider-details">
              <h2 className="provider-name">{study.name}</h2>
              <p className="provider-title">{study.title}</p>
              <p className="provider-credential">{study.credential}</p>
              <p className="provider-practice">{study.practice}</p>
              <p className="provider-credential" style={{ marginTop: '12px' }}>Specialty: {study.specialty}</p>
            </div>
            <div className="provider-quote">{study.quote}</div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <section className="content-section">
        <h2 className="section-title">Challenge</h2>
        <div className="content-box">
          <p>{study.details.challenge}</p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="content-section">
        <h2 className="section-title">Solution</h2>
        <div className="content-box">
          <p>{study.details.solution}</p>
        </div>
      </section>

      {/* Results Section */}
      <section className="content-section">
        <h2 className="section-title">Results</h2>
        <div className="results-grid">
          {study.details.results.map((result, idx) => (
            <div key={idx} className="result-item">
              <span className="result-check">✓</span>
              <span className="result-text">{result}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="content-section">
        <div className="impact-box">
          <span className="impact-label">Impact</span>
          <p className="impact-text">{study.details.impact}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Achieve Similar Results?</h2>
        <p className="cta-text">
          Let us show you how HBS can transform your practice's billing and operations.
        </p>
        <a href="/contact" className="cta-btn">
          Schedule a Consultation
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </section>
    </div>
  );
}
