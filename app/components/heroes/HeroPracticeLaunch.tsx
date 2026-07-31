'use client';

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

const HeroPracticeLaunch = ({ solution }: HeroProps) => {
  const styles = `
    .practice-launch-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .practice-launch-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .checklist-card {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .checklist-card:last-of-type {
      border-bottom: none;
    }

    .check-icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
      font-size: 8px;
      font-weight: 600;
    }

    .check-done {
      background: #00C896;
      color: #fff;
    }

    .check-pending {
      background: rgba(212, 165, 116, 0.12);
      border: 1px solid rgba(212, 165, 116, 0.3);
      color: #D4A574;
    }

    .check-open {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: transparent;
    }

    .checklist-text {
      font-size: 11px;
      color: rgba(250, 247, 242, 0.75);
      line-height: 1.4;
    }

    .checklist-text.done {
      color: rgba(250, 247, 242, 0.65);
      text-decoration: line-through;
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
      line-height: 1.4;
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
          <div className="practice-launch-hero-card">
            <h4>— Practice Launch Readiness · Pre-Open Checklist</h4>
            
            <div className="checklist-card">
              <div className="check-icon check-done">✓</div>
              <span className="checklist-text done">Entity formation & tax ID obtained</span>
            </div>
            
            <div className="checklist-card">
              <div className="check-icon check-done">✓</div>
              <span className="checklist-text done">NPI — Individual & Group registered</span>
            </div>
            
            <div className="checklist-card">
              <div className="check-icon check-done">✓</div>
              <span className="checklist-text done">CAQH profile built and attested</span>
            </div>
            
            <div className="checklist-card">
              <div className="check-icon check-pending">!</div>
              <span className="checklist-text">Medicare PECOS submitted — Day 28</span>
            </div>
            
            <div className="checklist-card">
              <div className="check-icon check-pending">!</div>
              <span className="checklist-text">Commercial payer apps — 3 submitted, 2 pending</span>
            </div>
            
            <div className="checklist-card">
              <div className="check-icon check-open"></div>
              <span className="checklist-text">EHR billing module configured</span>
            </div>
            
            <div className="checklist-card">
              <div className="check-icon check-open"></div>
              <span className="checklist-text">Eligibility verification workflow set up</span>
            </div>
            
            <div className="checklist-card">
              <div className="check-icon check-open"></div>
              <span className="checklist-text">Patient intake forms finalized</span>
            </div>
            
            {/* <div className="dash-divider"></div> */}
            
            <div className="dash-stats">
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: '#00876B' }}>3</span>
                <span className="dash-stat-label">Complete</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: '#D4A574' }}>2</span>
                <span className="dash-stat-label">In Progress</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: '#475569' }}>3</span>
                <span className="dash-stat-label">Not Started</span>
              </div>
            </div>
            
            <div className="gap-callout">
              <div className="gc-lbl">— Estimated to billing-ready</div>
              <div className="gc-val">6–8 weeks if started today. 4+ months if delayed.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroPracticeLaunch;
