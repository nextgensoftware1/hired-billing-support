'use client';

import { useEffect } from 'react';
import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroEnterprisemedicaloperation({ solution }: HeroProps) {
  useEffect(() => {
    // Set staggered animation delays for KPI rows
    const rows = document.querySelectorAll('[data-animated="kpi-row"]');
    rows.forEach((row, index) => {
      (row as HTMLElement).style.setProperty('--reveal-delay', `${0.1 + index * 0.14}s`);
    });
  }, []);

  const styles = `
    /* Organization Dashboard Card */
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

    .kpi-row {
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

    .kpi-row:last-of-type {
      border-bottom: none;
    }

    .kpi-lbl {
      font-size: 11px;
      color: #FAF7F2;
      min-width: 110px;
    }

    .kpi-bar {
      flex: 1;
      height: 6px;
      background: #E8E2D5;
      border-radius: 3px;
      overflow: hidden;
    }

    .kpi-fill {
      height: 100%;
      border-radius: 3px;
    }

    .kpi-fill.hi {
      background: #00C896;
    }

    .kpi-fill.mi {
      background: #F59E0B;
    }

    .kpi-fill.lo {
      background: #D64545;
    }

    .kpi-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
      min-width: 44px;
      text-align: right;
    }

    .kpi-val.hi {
      color: #00876B;
    }

    .kpi-val.mi {
      color: #B45309;
    }

    .kpi-val.lo {
      color: #D64545;
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
            <div className="hero-visual reveal reveal-4" style={{ animationDelay: "0.55s" }}>
              <div className="organization-dashboard">
                <div className="org-dash-title">— Enterprise Operations · Executive Dashboard</div>

                <div className="kpi-row" data-animated="kpi-row">
                  <span className="kpi-lbl">Enterprise Collection Rate</span>
                  <div className="kpi-bar">
                    <div className="kpi-fill hi" style={{ width: '91%' }}></div>
                  </div>
                  <span className="kpi-val hi">91.8%</span>
                </div>

                <div className="kpi-row" data-animated="kpi-row">
                  <span className="kpi-lbl">Group Denial Rate</span>
                  <div className="kpi-bar">
                    <div className="kpi-fill mi" style={{ width: '42%' }}></div>
                  </div>
                  <span className="kpi-val mi">4.2%</span>
                </div>

                <div className="kpi-row" data-animated="kpi-row">
                  <span className="kpi-lbl">AR Over 120 Days</span>
                  <div className="kpi-bar">
                    <div className="kpi-fill mi" style={{ width: '29%' }}></div>
                  </div>
                  <span className="kpi-val mi">7.8%</span>
                </div>

                <div className="kpi-row" data-animated="kpi-row">
                  <span className="kpi-lbl">Credentialing Active</span>
                  <div className="kpi-bar">
                    <div className="kpi-fill hi" style={{ width: '89%' }}></div>
                  </div>
                  <span className="kpi-val hi">89% of roster</span>
                </div>

                <div className="kpi-row" data-animated="kpi-row">
                  <span className="kpi-lbl">Clean Claim Rate</span>
                  <div className="kpi-bar">
                    <div className="kpi-fill hi" style={{ width: '95%' }}></div>
                  </div>
                  <span className="kpi-val hi">95.3%</span>
                </div>

                <div className="kpi-row" data-animated="kpi-row">
                  <span className="kpi-lbl">Revenue vs. Budget</span>
                  <div className="kpi-bar">
                    <div className="kpi-fill mi" style={{ width: '52%' }}></div>
                  </div>
                  <span className="kpi-val mi">-1.4%</span>
                </div>

                {/* <div className="dash-divider"></div> */}

                <div className="dash-stats">
                  <div className="dash-stat">
                    <span className="dash-stat-num">24+</span>
                    <span className="dash-stat-label">Locations</span>
                  </div>
                  <div className="dash-stat">
                    <span className="dash-stat-num" style={{ color: '#B45309' }}>3</span>
                    <span className="dash-stat-label">Priority Flags</span>
                  </div>
                  <div className="dash-stat">
                    <span className="dash-stat-num" style={{ color: '#00876B' }}>Weekly</span>
                    <span className="dash-stat-label">Exec Reporting</span>
                  </div>
                </div>

                <div className="gap-callout">
                  <div className="gc-lbl">— This quarter's priority</div>
                  <div className="gc-val">Denial rate 1.2% above benchmark — root cause analysis in progress.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
