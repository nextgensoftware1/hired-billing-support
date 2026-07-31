'use client';

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

const HeroVirtualHealthcareSolutions = ({ solution }: HeroProps) => {
  const styles = `
    .virtual-healthcare-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .virtual-healthcare-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .journey-card {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .journey-card:last-of-type {
      border-bottom: none;
    }

    .journey-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 4px;
    }

    .jdot-done {
      background: #00C896;
    }

    .jdot-active {
      background: #F59E0B;
    }

    .jdot-pending {
      background: #E8E2D5;
      border: 1px solid #475569;
    }

    .journey-text {
      font-size: 11px;
      color: rgba(250, 247, 242, 0.85);
      line-height: 1.45;
      flex: 1;
    }

    .journey-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      flex-shrink: 0;
    }

    .jtag-done {
      color: #00876B;
    }

    .jtag-active {
      color: #B45309;
    }

    .jtag-pending {
      color: #475569;
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
          <div className="virtual-healthcare-hero-card">
            <h4>— Virtual Care Operations · Daily Queue</h4>
            
            <div className="journey-card">
              <div className="journey-dot jdot-done"></div>
              <span className="journey-text">Tomorrow's telehealth patients — eligibility verified</span>
              <span className="journey-tag jtag-done">Complete</span>
            </div>
            
            <div className="journey-card">
              <div className="journey-dot jdot-done"></div>
              <span className="journey-text">Visit links sent — 24hr and 1hr reminders scheduled</span>
              <span className="journey-tag jtag-done">Complete</span>
            </div>
            
            <div className="journey-card">
              <div className="journey-dot jdot-done"></div>
              <span className="journey-text">Intake forms completed — 8 of 9 patients</span>
              <span className="journey-tag jtag-done">Complete</span>
            </div>
            
            <div className="journey-card">
              <div className="journey-dot jdot-active"></div>
              <span className="journey-text">Prior auth — 2 visits requiring review before noon</span>
              <span className="journey-tag jtag-active">In progress</span>
            </div>
            
            <div className="journey-card">
              <div className="journey-dot jdot-active"></div>
              <span className="journey-text">Provider EHR tasks — 3 items pending review</span>
              <span className="journey-tag jtag-active">In progress</span>
            </div>
            
            <div className="journey-card">
              <div className="journey-dot jdot-pending"></div>
              <span className="journey-text">Post-visit follow-up — yesterday's patients queued</span>
              <span className="journey-tag jtag-pending">Queued</span>
            </div>
            
            {/* <div className="dash-divider"></div> */}
            
            <div className="dash-stats">
              <div className="dash-stat">
                <span className="dash-stat-num">9</span>
                <span className="dash-stat-label">Visits Prepped</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: '#00876B' }}>0</span>
                <span className="dash-stat-label">Missing Eligibility</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: '#B45309' }}>2</span>
                <span className="dash-stat-label">Auth Actions Needed</span>
              </div>
            </div>
            
            <div className="gap-callout">
              <div className="gc-lbl">— Provider time saved daily</div>
              <div className="gc-val">Estimated 2.4 hrs of admin tasks handled before first visit.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroVirtualHealthcareSolutions;
