'use client';
import Link from 'next/link';
export default function CaseStudyPage() {
  const testimonials = [
    {
      id: 1,
      slug: 'dr-ruth-parkin-edwin',
      quote: "Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever.",
      avatar: 'RE',
      name: "Dr Ruth Parkin-Edwin",
      title: "DMD/MS",
      credential: "Diplomate of American Board of Periodontology",
      practice: "Edwin Dental Specialists",
    },
    {
      id: 2,
      slug: 'thompson-mental-health',
      quote: "Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our billing operations seamlessly.",
      avatar: 'HM',
      name: "Herma Thompson",
      title: "PMHNP-BC",
      credential: "Nurse Practitioner - Psych/Mental Health",
      practice: "Thompson Mental Health",
    },
    {
      id: 3,
      slug: 'sheikh-internal-medicine',
      quote: "Remote staffing solution by HBS has freed the resources of the practice, enabling us to spend more time at the bedside and enhance the efficiency of the whole process.",
      avatar: 'AS',
      name: "Dr Afreen Sheikh",
      title: "MD",
      credential: "Internal Medicine",
      practice: "Sheikh Internal Medicine",
    },
    {
      id: 4,
      slug: 'dr-layla-hassan',
      quote: "With the help of HBS their support and expertise we have achieved a lot more in practice.",
      avatar: 'LH',
      name: "Dr. Layla Hassan",
      title: "MD",
      credential: "Genesis Internal Medicine",
      practice: "Genesis Internal Medicine",
    }
  ];

  return (
    <>
      <style jsx>{`
        /* =========================================
           DESIGN TOKENS (EXACT MATCH TO YOUR SYSTEM)
           ========================================= */
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
          --font-fraunces: 'Fraunces', 'Times New Roman', serif;
          --font-inter-tight: 'Inter Tight', -apple-system, sans-serif;
          --font-jetbrains-mono: 'JetBrains Mono', monospace;
          --serif: var(--font-fraunces);
          --sans: var(--font-inter-tight);
          --mono: var(--font-jetbrains-mono);
          --ease: cubic-bezier(0.22, 1, 0.36, 1);
          --shadow-sm: 0 1px 3px rgba(10,22,40,0.07);
          --shadow-md: 0 4px 16px rgba(10,22,40,0.08);
          --shadow-lg: 0 8px 32px rgba(10,22,40,0.10);
        }

        /* =========================================
           RESET + BASE (DARK THEME)
           ========================================= */
        .case-study-page {
          font-family: var(--sans);
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
        }

        /* =========================================
           ANIMATIONS
           ========================================= */
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { opacity: 0; transform: translateY(20px); }
        .reveal-1 { animation: reveal 0.9s var(--ease) 0.05s forwards; }
        .reveal-2 { animation: reveal 0.9s var(--ease) 0.15s forwards; }
        .reveal-3 { animation: reveal 0.9s var(--ease) 0.3s forwards; }
        .reveal-4 { animation: reveal 0.9s var(--ease) 0.45s forwards; }

        /* =========================================
           HERO SECTION (DARK - MATCHES YOUR SITE)
           ========================================= */
        .case-study-hero {
          position: relative;
          overflow: hidden;
          background: var(--paper);
          color: var(--ink);
          padding: 100px var(--gutter) 80px;
          text-align: center;
        }

        .case-study-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .case-study-hero-bg svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .case-study-hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.35;
        }

        .case-study-hero-inner {
          position: relative;
          z-index: 2;
          max-width: var(--max);
          margin: 0 auto;
        }

        /* Eyebrow */
        .eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--signal);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow::before {
          content: '';
          width: 24px;
          height: 1px;
          background: currentColor;
        }

        /* Display Heading */
        .display {
          font-family: var(--serif);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 0.98;
          font-variation-settings: "opsz" 144;
          font-size: clamp(48px, 7.5vw, 96px);
        }
        .display em {
          font-style: italic;
          font-weight: 300;
          color: var(--signal);
        }

        /* Subtext */
        .sub {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.55;
          color: var(--ink-mute);
          max-width: 540px;
          margin: 28px auto 40px;
        }

        /* =========================================
           TAGLINE SECTION (DARK)
           ========================================= */
        .tagline-section {
          background: var(--paper);
          color: var(--ink);
          padding: 60px var(--gutter);
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .tagline {
          font-family: var(--serif);
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .tagline em {
          font-style: italic;
          color: var(--signal);
        }

        /* =========================================
           TESTIMONIALS SECTION (DARK)
           ========================================= */
        .testimonials-section {
          background: var(--paper);
          color: var(--ink);
          padding: 80px var(--gutter);
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .testimonials-title {
          font-family: var(--serif);
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 400;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin-bottom: 16px;
        }

        /* Testimonials Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: var(--max);
          margin: 0 auto;
        }

        @media (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Testimonial Card (LIGHT ON DARK) */
        .testimonial-card {
          background: var(--paper);
          color: var(--ink);
          border: 1px solid var(--paper-line);
          border-radius: var(--radius-lg);
          padding: 48px;
          transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s var(--ease);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(10, 22, 40, 0.1);
          border-color: var(--signal);
        }

        .testimonial-quote {
          font-family: var(--serif);
          font-size: clamp(20px, 1.8vw, 24px);
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin-bottom: 32px;
          
          position: relative;
          z-index: 1;
        }

        .testimonial-quote::before {
          content: '"';
          font-family: var(--serif);
          font-size: 120px;
          line-height: 0.02;
          color: var(--signal);
          opacity: 0.6;
          position: absolute;
         
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--paper);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--serif);
          font-size: 16px;
          font-weight: 500;
          flex-shrink: 0;
        }

        .author-name {
          font-family: var(--serif);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0;
        }

        .author-title {
          font-size: 13px;
          color: var(--ink-mute);
          margin-top: 2px;
          margin: 0;
        }

        .author-credential {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--ink-mute);
          letter-spacing: 0.05em;
          display: none;
        }

        .read-more-btn {
          display: none;
        }

        /* =========================================
           CTA SECTION (DARK)
           ========================================= */
        .case-study-cta {
          background: var(--paper-warm);
          color: var(--ink);
          padding: 80px var(--gutter);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .case-study-cta::before {
          content: '';
          position: absolute;
          bottom: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0, 200, 150, 0.25), transparent 70%);
          pointer-events: none;
        }

        .cta-title {
          font-family: var(--serif);
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 400;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .cta-text {
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink-mute);
          max-width: 560px;
          margin: 0 auto 32px;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Buttons in CTA */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: var(--radius);
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.25s var(--ease);
          white-space: nowrap;
        }

        .btn-primary {
          background: var(--signal);
          color: var(--ink);
        }
        .btn-primary:hover {
          background: var(--signal-deep);
          transform: translateY(-1px);
        }

        .btn-ghost {
          background: transparent;
          color: var(--ink);
          border: 1px solid var(--ink);
        }
        .btn-ghost:hover {
          background: var(--paper);
          color: var(--ink);
        }

        /* =========================================
           TRUST STRIP (DARK)
           ========================================= */
        .trust-strip {
          background: var(--ink);
          color: var(--paper);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 32px var(--gutter);
        }

        .trust-strip-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(250, 247, 242, 0.5);
        }

        .trust-item svg {
          color: var(--signal);
          flex-shrink: 0;
        }

        /* Hyperlink Effect */
        .text-link {
          color: var(--ink);
          font-weight: bold;
          cursor: pointer;
          transition: color 0.3s var(--ease);
          position: relative;
        }

        .text-link:hover {
          color: var(--signal);
        }

        /* Link wrapper for testimonial cards */
        .testimonial-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
      `}</style>

      <div className="case-study-page">
        {/* HERO SECTION */}
        <section className="case-study-hero">
          <div className="case-study-hero-bg">
            <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--ink)" strokeWidth="0.5" opacity="0.08" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="case-study-hero-grain" />
          </div>
          <div className="case-study-hero-inner">
            <span className="eyebrow reveal reveal-1"> Case Studies</span>
            <h1 className="display reveal reveal-2">
              Success Stories That <em>Inspire</em>
            </h1>
            <p className="sub reveal reveal-3">
  Discover how healthcare practices achieve excellence with {" "}
  <span
    onClick={() => window.location.href = '/'}
    className="text-link"
  >
    Hiredbillingsupport
  </span>.
</p>
          </div>
        </section>

        {/* TAGLINE SECTION */}
        <section className="tagline-section">
          <h2 className="tagline reveal reveal-2">
            HBS — Driving <em>Growth</em>, <em>Efficiency</em>, and <em>Client Success</em> in Healthcare Billing
          </h2>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="testimonials-section">
          <div className="testimonials-header">
            <h2 className="testimonials-title reveal reveal-1">What Our Customers Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <Link key={testimonial.id} href={`/case-study/${testimonial.slug}`} className="testimonial-link">
                <div className={`testimonial-card reveal reveal-${(index % 4) + 2}`}>
                  <p className="testimonial-quote">{testimonial.quote}</p>

                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.avatar}</div>
                    <div>
                      <div className="author-name">{testimonial.name}</div>
                      <div className="author-title">{testimonial.title}</div>
                    </div>
                  </div>

                  <button className="read-more-btn">
                    Read More
                    <svg
                      className="arrow"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="case-study-cta">
          <div className="reveal reveal-1">
            <h2 className="cta-title">Ready to Transform Your Practice?</h2>
            <p className="cta-text">
              Join the hundreds of healthcare providers who have streamlined their billing and staffing with HBS.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-primary">
                Get a Free Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/find-service" className="btn btn-ghost">
                Explore Our Services
              </a>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="trust-strip">
          <div className="trust-strip-inner">
            {[
              { label: '500+ Practices Served', path: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /> },
              { label: '98% Satisfaction Rate', path: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
              { label: 'HIPAA Compliant', path: <polyline points="20 6 9 17 4 12" /> },
              { label: '24/7 Support', path: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
            ].map((t, i) => (
              <div className="trust-item" key={i}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {t.path}
                </svg>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}