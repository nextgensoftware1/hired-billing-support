'use client';

import { useEffect } from 'react';
import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroStartupPractices({ solution }: HeroProps) {
  useEffect(() => {
    // Set staggered animation delays for check rows
    const rows = document.querySelectorAll('[data-animated="check-row"]');
    rows.forEach((row, index) => {
      (row as HTMLElement).style.setProperty('--reveal-delay', `${0.1 + index * 0.14}s`);
    });
  }, []);

  const styles = `
    /* Practice Launch Dashboard Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

    .organization-dashboard {
      background: #0A1628;
      border: 1px solid #E8E2D5;
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, .08), 0 1px 4px rgba(10, 22, 40, .05);
    }

    .org-dash-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .18em;
      color: #FAF7F2;
      margin-bottom: 20px;
    }

    .check-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: rv 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .check-row:last-of-type {
      border-bottom: none;
    }

    .ck {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .ck-done {
      background: #00C896;
      color: #fff;
    }

    .ck-pend {
      background: rgba(245, 158, 11, 0.08);
      border: 1px solid #F59E0B;
      color: #B45309;
    }

    .ck-open {
      background: #F2EDE3;
      border: 1px solid #E8E2D5;
      color: transparent;
    }

    .ck-label {
      font-size: 11px;
      color: #FAF7F2;
      line-height: 1.4;
    }

    .ck-label.done {
      color: #FAF7F2;
      text-decoration: line-through;
    }

    .check-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="hero">
        <div className="hero-bg">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="hero-grain"></div>
        </div>

        <div className="hero-inner">
          <div>
            {solution.hero && (
              <>
                <div className="eyebrow reveal reveal-1">{solution.hero.eyebrow}</div>
                <h1 className="display reveal reveal-2" dangerouslySetInnerHTML={{ __html: solution.hero.title }} />
                 <p className="sub reveal reveal-3" >{solution.hero.subtitle}</p>
              <p className="lede reveal reveal-3" >{solution.hero.description}</p>
                    <div className="hero-actions reveal reveal-4" >
                <a href="/contact" className="btn btn-primary btn-lg">
                  Contact us
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
                </a>
                <a href="#services" className="btn btn-ghost btn-lg">
                  Services
                </a>
              </div>
              </>
            )}
          </div>

          {solution.hero && (
          <div className="hero-visual">
            <div className="organization-dashboard">
              <div className="org-dash-title">— Practice Launch Readiness · Pre-Open</div>
              
              <div className="check-row" data-animated="check-row">
                <div className="ck ck-done">✓</div>
                <span className="ck-label done">Entity formed · EIN obtained · NPI registered</span>
              </div>

              <div className="check-row" data-animated="check-row">
                <div className="ck ck-done">✓</div>
                <span className="ck-label done">CAQH profile built and attested</span>
              </div>

              <div className="check-row" data-animated="check-row">
                <div className="ck ck-pend">!</div>
                <span className="ck-label">Medicare PECOS submitted — Day 26 of ~45</span>
              </div>

              <div className="check-row" data-animated="check-row">
                <div className="ck ck-pend">!</div>
                <span className="ck-label">Commercial payer apps — 4 submitted, 2 pending</span>
              </div>

              <div className="check-row" data-animated="check-row">
                <div className="ck ck-open"></div>
                <span className="ck-label">EHR billing module configuration</span>
              </div>

              <div className="check-row" data-animated="check-row">
                <div className="ck ck-open"></div>
                <span className="ck-label">Eligibility verification workflow setup</span>
              </div>

              <div className="check-row" data-animated="check-row">
                <div className="ck ck-open"></div>
                <span className="ck-label">Patient intake and scheduling SOPs</span>
              </div>

              {/* <div className="dash-divider"></div> */}

              <div className="dash-stats">
                <div className="dash-stat">
                  <span className="dash-stat-num" style={{ color: '#00876B' }}>2</span>
                  <span className="dash-stat-label">Complete</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-num" style={{ color: '#B45309' }}>2</span>
                  <span className="dash-stat-label">In Progress</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-num" style={{ color: '#475569' }}>3</span>
                  <span className="dash-stat-label">Not Started</span>
                </div>
              </div>

              <div className="gap-callout">
                <div className="gc-lbl">— Time to billing-ready</div>
                <div className="gc-val">6–8 weeks with structure. 4+ months without.</div>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>
    </>
  );
}
