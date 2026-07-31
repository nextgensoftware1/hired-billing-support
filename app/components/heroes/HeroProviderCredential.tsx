'use client';

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

const HeroProviderCredential = ({ solution }: HeroProps) => {
  const styles = `
    .provider-cred-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .provider-cred-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .status-card {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .status-card:last-of-type {
      border-bottom: none;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dot-green {
      background: #00C896;
    }

    .dot-amber {
      background: #D4A574;
    }

    .dot-red {
      background: #FF8585;
    }

    .dot-grey {
      background: #E8E2D5;
      border: 1px solid #475569;
    }

    .status-label {
      font-size: 12px;
      color: var(--paper);
      flex: 1;
    }

    .status-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .status-value.done {
      color: #00C896;
    }

    .status-value.pending {
      color: #D4A574;
    }

    .status-value.blocked {
      color: #FF8585;
    }

    .status-value.waiting {
      color: #475569;
    }

    .status-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      padding: 2px 8px;
      border-radius: 100px;
    }

    .pill-green {
      background: rgba(0, 200, 150, 0.12);
      color: #00876B;
    }

    .pill-amber {
      background: rgba(212, 165, 116, 0.12);
      color: #D4A574;
    }

    .pill-red {
      background: rgba(255, 133, 133, 0.1);
      color: #FF8585;
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
                <div className="eyebrow">{solution.hero.eyebrow}</div>
                <h1 className="display" dangerouslySetInnerHTML={{ __html: solution.hero.title }} />
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
          <div className="provider-cred-hero-card">
            <h4>— Credentialing Status Board · Active Providers</h4>
            
            <div className="status-card">
              <div className="status-dot dot-green"></div>
              <span className="status-label">Dr. Reyes — Primary Care</span>
              <span className="status-value done">Active · All payers</span>
            </div>
            
            <div className="status-card">
              <div className="status-dot dot-amber"></div>
              <span className="status-label">Dr. Okafor — Cardiology</span>
              <span className="status-value pending">
                In progress <span className="status-pill pill-amber">3 payers pending</span>
              </span>
            </div>
            
            <div className="status-card">
              <div className="status-dot dot-amber"></div>
              <span className="status-label">Dr. Kim — Behavioral Health</span>
              <span className="status-value pending">
                CAQH submitted <span className="status-pill pill-amber">Awaiting review</span>
              </span>
            </div>
            
            <div className="status-card">
              <div className="status-dot dot-red"></div>
              <span className="status-label">Dr. Patel — Orthopedics</span>
              <span className="status-value blocked">
                Blocked <span className="status-pill pill-red">Missing DEA</span>
              </span>
            </div>
            
            <div className="status-card">
              <div className="status-dot dot-grey"></div>
              <span className="status-label">NP Torres — Urgent Care</span>
              <span className="status-value waiting">Not started · Onboarding Q3</span>
            </div>
            
            {/* <div className="dash-divider"></div> */}
            
            <div className="dash-stats">
              <div className="dash-stat">
                <span className="dash-stat-num">5</span>
                <span className="dash-stat-label">Providers Tracked</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: '#D4A574' }}>1</span>
                <span className="dash-stat-label">Blocked — Action</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: '#00876B' }}>0</span>
                <span className="dash-stat-label">Expired Docs</span>
              </div>
            </div>
            
            <div className="gap-callout">
              <div className="gc-lbl">— Next milestone</div>
              <div className="gc-val">Dr. Okafor — Aetna approval expected within 18 days.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroProviderCredential;
