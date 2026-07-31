'use client';

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

const HeroAnalyticsReporting = ({ solution }: HeroProps) => {
  const styles = `
    .analytics-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .analytics-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .kpi-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .kpi-row:last-of-type {
      border-bottom: none;
    }

    .kpi-lbl {
      font-size: 11px;
      color: rgba(250, 247, 242, 0.7);
      min-width: 110px;
      flex-shrink: 0;
    }

    .kpi-bar {
      flex: 1;
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 3px;
      overflow: hidden;
    }

    .kpi-fill {
      height: 100%;
      border-radius: 3px;
    }

    .kpi-fill-high {
      background: #00C896;
    }

    .kpi-fill-mid {
      background: #F59E0B;
    }

    .kpi-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
      min-width: 50px;
      text-align: right;
      flex-shrink: 0;
    }

    .kpi-val-high {
      color: #00C896;
    }

    .kpi-val-mid {
      color: #F59E0B;
    }

    .dash-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: rgba(255, 255, 255, 0.05);
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
      color: rgba(250, 247, 242, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      border-radius: 8px;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: #00C896;
      margin-bottom: 6px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--paper);
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
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
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
                <h1 className="display reveal reveal-2" style={{ marginTop: "20px" }} dangerouslySetInnerHTML={{ __html: solution.hero.title }} />
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
            <div className="analytics-hero-card">
            <h4>— Practice Analytics Dashboard · Monthly</h4>
            
            <div className="kpi-row">
              <span className="kpi-lbl">Collection Rate</span>
              <div className="kpi-bar">
                <div className="kpi-fill kpi-fill-high" style={{ width: '94%' }}></div>
              </div>
              <span className="kpi-val kpi-val-high">94.2%</span>
            </div>
            
            <div className="kpi-row">
              <span className="kpi-lbl">Clean Claim Rate</span>
              <div className="kpi-bar">
                <div className="kpi-fill kpi-fill-high" style={{ width: '98%' }}></div>
              </div>
              <span className="kpi-val kpi-val-high">97.8%</span>
            </div>
            
            <div className="kpi-row">
              <span className="kpi-lbl">Denial Rate</span>
              <div className="kpi-bar">
                <div className="kpi-fill kpi-fill-mid" style={{ width: '34%' }}></div>
              </div>
              <span className="kpi-val kpi-val-mid">3.4%</span>
            </div>
            
            <div className="kpi-row">
              <span className="kpi-lbl">Days in AR</span>
              <div className="kpi-bar">
                <div className="kpi-fill kpi-fill-high" style={{ width: '76%' }}></div>
              </div>
              <span className="kpi-val kpi-val-high">24 days</span>
            </div>
            
            <div className="kpi-row">
              <span className="kpi-lbl">AR &gt; 90 Days</span>
              <div className="kpi-bar">
                <div className="kpi-fill kpi-fill-mid" style={{ width: '28%' }}></div>
              </div>
              <span className="kpi-val kpi-val-mid">8.2%</span>
            </div>
            
            <div className="kpi-row">
              <span className="kpi-lbl">Revenue vs. Budget</span>
              <div className="kpi-bar">
                <div className="kpi-fill kpi-fill-high" style={{ width: '91%' }}></div>
              </div>
              <span className="kpi-val kpi-val-high">+2.1%</span>
            </div>
            
            {/* <div className="dash-divider"></div> */}
            
            <div className="dash-stats">
              <div className="dash-stat">
                <span className="dash-stat-num">Monthly</span>
                <span className="dash-stat-label">Report Cadence</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num">8</span>
                <span className="dash-stat-label">KPIs Tracked</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: '#00876B' }}>3</span>
                <span className="dash-stat-label">Actions Generated</span>
              </div>
            </div>
            
            <div className="gap-callout">
              <div className="gc-lbl">— This month's finding</div>
              <div className="gc-val">Denial rate above target — Cigna auth-related. Fix in progress.</div>
            </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HeroAnalyticsReporting;
