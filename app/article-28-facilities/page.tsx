'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Article28Page() {
  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ===== GLOBAL CSS (Matches Privacy Policy Design System) ===== */}
      <style jsx global>{`
        :root {
          --ink:#0A1628; --ink-soft:#1B2942; --ink-mute:#475569;
          --paper:#FAF7F2; --paper-warm:#F2EDE3; --paper-line:#E8E2D5;
          --white:#FFFFFF;
          --signal:#00C896; --signal-deep:#00876B; --signal-pale:rgba(0,200,150,.08);
          --amber:#F59E0B; --amber-deep:#B45309;
          --danger:#D64545;
          --radius:4px; --radius-lg:12px;
          --max:1280px; --gutter:clamp(20px,4vw,48px);
          --serif:'Fraunces','Times New Roman',serif;
          --sans:'Inter Tight',-apple-system,sans-serif;
          --mono:'JetBrains Mono',monospace;
          --ease:cubic-bezier(.22,1,.36,1);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
        body { font-family: var(--sans); background: var(--paper); color: var(--ink); line-height: 1.5; font-size: 16px; overflow-x: hidden; }
        ::selection { background: var(--ink); color: var(--paper); }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; display: block; }

        .container { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }

       
        /* Article Hero */
        .article-hero { background: var(--ink); padding: 120px 0 80px; margin-top: 40px; }
        .article-badge { display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: .16em; color: var(--signal-deep); background: rgba(0,200,150,.08); border: 1px solid rgba(0,200,150,.2); padding: 6px 14px; border-radius: 100px; margin-bottom: 24px; }
        .article-title { font-family: var(--serif); font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 400; letter-spacing: -.025em; color: var(--paper); margin-bottom: 20px; font-variation-settings: "opsz" 144; line-height: 1.05; }
        .article-subtitle { font-size: 17px; line-height: 1.7; color: rgba(250,247,242,.6); max-width: 700px; }

        /* Article Layout */
        .article-layout { max-width: var(--max); margin: 0 auto; padding: 60px var(--gutter); display: grid; grid-template-columns: 260px 1fr; gap: 64px; align-items: start; background: var(--paper); }
        .article-toc { position: sticky; top: 100px; }
        .article-toc-title { font-family: var(--mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--paper-line); }
        .article-toc-list { list-style: none; display: flex; flex-direction: column; gap: 4px; }
        .article-toc-list a { font-size: 13px; color: var(--ink-mute); padding: 5px 10px; border-radius: var(--radius); display: block; transition: all .2s; border-left: 2px solid transparent; }
        .article-toc-list a:hover { color: var(--signal-deep); border-left-color: var(--signal); }
        .article-content { min-width: 0; }
        .article-section { margin-bottom: 56px; }
        .article-section:last-child { margin-bottom: 0; }
        .article-heading { font-family: var(--serif); font-size: 1.8rem; font-weight: 400; color: var(--ink); margin-bottom: 20px; padding-top: 24px; font-variation-settings: "opsz" 72; line-height: 1.15; }
        .article-subheading { font-size: 15px; font-weight: 600; color: var(--ink); margin: 22px 0 12px; }
        .article-text { font-size: 15px; line-height: 1.85; color: var(--ink-soft); margin-bottom: 16px; }
        .article-text:last-child { margin-bottom: 0; }

        /* Info Cards */
        .info-card { background: var(--signal-pale); border: 1px solid rgba(0,200,150,.2); border-radius: var(--radius-lg); padding: 24px 28px; margin: 24px 0; }
        .info-card-label { font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--signal-deep); margin-bottom: 12px; }
        .info-card p { font-size: 14px; color: var(--ink-soft); line-height: 1.75; }
        .info-card p:last-child { margin-bottom: 0; }

        /* Denial Reasons Grid */
        .denial-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 32px 0; }
        .denial-card { background: var(--white); border: 1px solid var(--paper-line); border-radius: var(--radius-lg); padding: 24px; transition: transform .2s var(--ease), border-color .2s; }
        .denial-card:hover { transform: translateY(-2px); border-color: rgba(0,200,150,.3); }
        .denial-card-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--signal-pale); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .denial-card-icon svg { width: 18px; height: 18px; stroke: var(--signal-deep); fill: none; stroke-width: 2; }
        .denial-card h4 { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 8px; line-height: 1.35; }
        .denial-card p { font-size: 13px; color: var(--ink-mute); line-height: 1.68; }

        /* Highlight Box */}
        .highlight-box { background: rgba(245,158,11,.08); border: 1px solid rgba(245,158,11,.2); border-radius: var(--radius); padding: 20px 24px; margin: 24px 0; }
        .highlight-box p { font-size: 14px; color: var(--amber-deep); line-height: 1.7; }

        /* Divider */
        .article-divider { height: 1px; background: var(--paper-line); margin: 40px 0; }

        /* CTA Section */
        .article-cta { background: var(--ink); border-radius: var(--radius-lg); padding: 48px; margin: 48px 0 0; position: relative; overflow: hidden; }
        .article-cta::before { content: ''; position: absolute; bottom: -60px; right: -60px; width: 240px; height: 240px; background: radial-gradient(circle, rgba(0,200,150,.15), transparent 70%); pointer-events: none; }
        .article-cta-title { font-family: var(--serif); font-size: 1.8rem; font-weight: 400; color: var(--paper); margin-bottom: 12px; font-variation-settings: "opsz" 72; }
        .article-cta-text { font-size: 15px; line-height: 1.8; color: rgba(250,247,242,.6); max-width: 600px; margin-bottom: 24px; }
        .article-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }

        /* Footer */
        footer { background: var(--ink); color: rgba(250,247,242,.6); padding: 40px 0 28px; border-top: 1px solid rgba(255,255,255,.06); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; font-size: 13px; }
        .footer-inner a { color: rgba(250,247,242,.6); }
        .footer-inner a:hover { color: var(--signal); }
        .footer-legal { display: flex; gap: 24px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr; }
          .article-toc { position: relative; top: 0; background: var(--paper-warm); border-radius: var(--radius-lg); padding: 20px; }
        }
        @media (max-width: 720px) {
          .nav-links { display: none; }
          .article-layout { padding: 40px var(--gutter); }
          .article-hero { padding: 100px 0 60px; }
          .denial-grid { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      

      {/* ===== HERO SECTION ===== */}
      <section className="article-hero">
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="article-badge">Article · Article 28 Facilities</div>
            <h1 className="article-title">Article 28 Facilities</h1>
            <p className="article-subtitle">
              Learn how Article 28 accredited healthcare facilities in New York achieve compliance,
              operational excellence, and maximize reimbursements with expert support from HBS.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN LAYOUT ===== */}
      <div className="article-layout">
        {/* TABLE OF CONTENTS */}
        <aside className="article-toc">
          <div className="article-toc-title">Contents</div>
          <ul className="article-toc-list">
            <li><Link href="#what-is-article-28">What is Article 28?</Link></li>
            <li><Link href="#high-standards">High Standards of Care</Link></li>
            <li><Link href="#hbs-expertise">HBS Expertise</Link></li>
            <li><Link href="#no-fault-law">Understanding No-Fault Law</Link></li>
            <li><Link href="#denials">Common Reimbursement Denials</Link></li>
          </ul>
        </aside>

        {/* ARTICLE CONTENT */}
        <main className="article-content">
          {/* Section 1: What is Article 28? */}
          <div className="article-section" id="what-is-article-28">
            <h2 className="article-heading">Article 28 Facilities No-Fault Collection Provider</h2>
            <p className="article-text">
              Article 28 is a public health law for regulating and recognizing accreditation of public health care facilities
              so that the facilities are legally licensed and run. Article 28 provides that certain facilities are licensed to
              perform particular types of procedures which for other reasons might not lawfully be performed.
            </p>
            <p className="article-text">
              Article 28 does not only relate to hospitals, however; it also covers surgical centres and nursing homes.
            </p>
          </div>

          {/* Section 2: High Standards */}
          <div className="article-section" id="high-standards">
            <h2 className="article-heading">High Standards of Healthcare Services</h2>
            <p className="article-text">
              High standards of health care services for the state of New York is embodied in Article 28. It helps to
              establish that public healthcare facilities are operative and actual. Thus, accreditation with regards to
              the Article 28 process implies that a facility works in accordance with the tightest of standards.
            </p>
            <div className="info-card">
              <div className="info-card-label">Key Insight</div>
              <p>
                Coding and billing under Article 28 can be more complicated than even for a medical facility that has
                not yet met the designation. The regulatory requirements and documentation standards are significantly
                more stringent.
              </p>
            </div>
          </div>

          {/* Section 3: HBS Expertise */}
          <div className="article-section" id="hbs-expertise">
            <h2 className="article-heading">Expert Support from HBS</h2>
            <p className="article-text">
              The team from Hired Billing Support has years of experience handling cases with such significant claims
              behind a healthcare provider, so they have the required knowledge and experience to take on these claims
              when they are filed on behalf of the healthcare facility.
            </p>
            <div className="highlight-box">
              <p>
                <strong>Why Choose HBS?</strong> Our specialists understand the unique challenges of Article 28 facilities and
                have successfully navigated the complex reimbursement landscape for numerous New York healthcare providers.
              </p>
            </div>
          </div>
          <div className="article-divider"></div>

          {/* Section 4: No-Fault Law */}
          <div className="article-section" id="no-fault-law">
            <h2 className="article-heading">Understanding the No-Fault Insurance Law</h2>
            <p className="article-text">
              However, because the services healthcare professionals who are accredited under Article 28 provide are more
              expensive, to some degree, this is because they have to be willing to pay the bills to ensure that high
              standards of care are met.
            </p>
            <p className="article-text">
              As Article 28 facilities provide a higher cost of care, the carriers are very interested in controlling those
              costs, so more scrutiny is put on them.
            </p>
          </div>

          {/* Section 5: Common Denials */}
          <div className="article-section" id="denials">
            <h2 className="article-heading">Common Reimbursement Denials Under New York's No-Fault Laws</h2>
            <p className="article-text">
              However, in some cases the insurance companies are reluctant to pay out these bills. However, there can be
              many reasons why they will deny your No-Fault claim and the most common reasons are as follows:
            </p>

            <div className="denial-grid">
              <div className="denial-card">
                <div className="denial-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </div>
                <h4>Lack of Medical Necessity</h4>
                <p>
                  The most common denial is that the insurer simply says the treatment provided by your facility was not
                  "reasonable and necessary" and therefore, it is not covered under the No-Fault law. The insurers will
                  collaborate with an independent physician to generate a peer review-based medical denial claiming the
                  care was unnecessary.
                </p>
              </div>

              <div className="denial-card">
                <div className="denial-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4>Independent Medical Exam Findings</h4>
                <p>
                  An IME (Independent Medical Exam) is another way insurance companies "verify" a patient's condition
                  before paying your claims. The examining physician might rule that the patient's recovery is complete or
                  minimize injuries. Insurance companies will deny claims referring to that opinion.
                </p>
              </div>

              <div className="denial-card">
                <div className="denial-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4>Missing Documentation</h4>
                <p>
                  To get reimbursed, you must supply the insurance company with detailed documentation of care.
                  Ignoring verification requests, even unjustified ones, can result in permanent claim denial. Always
                  ensure every facility claim includes full supporting documentation.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="article-cta">
            <h3 className="article-cta-title">Need Expert Help with Article 28 Claims?</h3>
            <p className="article-cta-text">
              Our team has the specialized knowledge to navigate New York's complex No-Fault reimbursement landscape.
              Let us help you maximize your reimbursements and reduce denials.
            </p>
            <div className="article-cta-actions">
              <Link href="/contact" className="btn btn-primary">
                Get a Consultation
                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/find-service" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </main>
      </div>

  
    </>
  );
}