'use client';

import { useEffect } from 'react';
import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroSmallMedicalPractices({ solution }: HeroProps) {
  useEffect(() => {
    // Set staggered animation delays for status rows
    const rows = document.querySelectorAll('[data-animated="status-row"]');
    rows.forEach((row, index) => {
      (row as HTMLElement).style.setProperty('--reveal-delay', `${0.1 + index * 0.14}s`);
    });
  }, []);

  const styles = `
    /* Small Practice Dashboard Card */
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

    .status-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid #E8E2D5;
    }

    .status-row:last-of-type {
      border-bottom: none;
    }

    .s-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dot-g {
      background: #00C896;
    }

    .dot-a {
      background: #F59E0B;
    }

    .s-label {
      font-size: 12px;
      color: #FAF7F2;
      flex: 1;
    }

    .s-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
    }

    .s-val.done {
      color: #00876B;
    }

    .s-val.pend {
      color: #B45309;
    }

    .s-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      padding: 2px 8px;
      border-radius: 100px;
      display: inline-block;
      margin-left: 8px;
    }

    .pill-g {
      background: rgba(0, 200, 150, .12);
      color: #00876B;
    }

    .dash-divider {
      height: 1px;
      background: #E8E2D5;
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: #F2EDE3;
      border-radius: 4px;
      padding: 10px 8px;
      text-align: center;
    }

    .dash-stat-num {
      font-family: 'Fraunces', serif;
      font-size: 1.25rem;
      color: #00876B;
      display: block;
      line-height: 1;
      margin-bottom: 4px;
    }

    .dash-stat-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #475569;
      text-transform: uppercase;
      letter-spacing: .1em;
    }

    .gap-callout {
      margin-top: 16px;
      padding: 12px 14px;
      background: rgba(0, 200, 150, 0.08);
      border-left: 2px solid #00C896;
      border-radius: 0 4px 4px 0;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .15em;
      text-transform: uppercase;
      color: #FAF7F2;
      margin-bottom: 4px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 14px;
      color: #FAF7F2;
    }

    .status-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
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
              <div className="org-dash-title">— Small Practice Operations · Daily Status</div>

              <div className="status-row" data-animated="status-row">
                <div className="s-dot dot-a"></div>
                <span className="s-label">Prior Auth Queue</span>
                <span className="s-val pend">4 pending — 2 expiring soon</span>
              </div>

              <div className="status-row" data-animated="status-row">
                <div className="s-dot dot-g"></div>
                <span className="s-label">Tomorrow's Eligibility Checks</span>
                <span className="s-val done">All verified</span>
              </div>

              <div className="status-row" data-animated="status-row">
                <div className="s-dot dot-a"></div>
                <span className="s-label">Unworked Denials</span>
                <span className="s-val pend">7 claims — 3 over 20 days</span>
              </div>

              <div className="status-row" data-animated="status-row">
                <div className="s-dot dot-a"></div>
                <span className="s-label">AR Over 90 Days</span>
                <span className="s-val pend">$14,200 — needs follow-up</span>
              </div>

              <div className="status-row" data-animated="status-row">
                <div className="s-dot dot-g"></div>
                <span className="s-label">Claim Submission Queue</span>
                <span className="s-val done">Clear — submitted same day</span>
              </div>

              {/* <div className="dash-divider"></div> */}

              <div className="dash-stats">
                <div className="dash-stat">
                  <span className="dash-stat-num">7</span>
                  <span className="dash-stat-label">Unworked Denials</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-num">4</span>
                  <span className="dash-stat-label">Auth Pending</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-num">$0</span>
                  <span className="dash-stat-label">Missed Submissions</span>
                </div>
              </div>

              <div className="gap-callout">
                <div className="gc-lbl">— Revenue at risk</div>
                <div className="gc-val">7 unworked denials + $14.2K aging AR = $21K+ at risk.</div>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>
    </>
  );
}
