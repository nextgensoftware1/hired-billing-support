// app/components/heroes/HeroArManagement.tsx

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroArManagement({ solution }: HeroProps) {
  return (
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
  <div className="hero-card">
    <h4>— AR Aging Snapshot · Current</h4>

    <div className="ar-card-row ar-green">
      <span className="ar-lbl">0–30 days</span>

      <div className="ar-bar">
        <span style={{ width: '80%' }}></span>
      </div>

      <span className="ar-val">$68,400</span>
    </div>

    <div className="ar-card-row ar-amber">
      <span className="ar-lbl">31–60 days</span>

      <div className="ar-bar">
        <span style={{ width: '55%' }}></span>
      </div>

      <span className="ar-val">$34,120</span>
    </div>

    <div className="ar-card-row ar-orange">
      <span className="ar-lbl">61–90 days</span>

      <div className="ar-bar">
        <span style={{ width: '35%' }}></span>
      </div>

      <span className="ar-val">$21,880</span>
    </div>

    <div className="ar-card-row ar-red">
      <span className="ar-lbl">91–120 days</span>

      <div className="ar-bar">
        <span style={{ width: '20%' }}></span>
      </div>

      <span className="ar-val">$13,340</span>
    </div>

    <div className="ar-card-row ar-red">
      <span className="ar-lbl">120+ days</span>

      <div className="ar-bar">
        <span style={{ width: '12%' }}></span>
      </div>

      <span className="ar-val">$8,700</span>
    </div>

    <div
      className="gap-callout"
      style={{
        marginTop: '20px',
      }}
    >
      <div className="gc-lbl">
        — Recoverable (60+ days)
      </div>

      <div className="gc-val">
        $43,920 · actively being worked by HBS team
      </div>
    </div>

    <div
      style={{
        marginTop: '14px',
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
      }}
    >
      <span className="card-tag before">
        $43,920 RECOVERABLE
      </span>

      <span className="card-tag after">
        ACTIVE FOLLOW-UP
      </span>
    </div>
  </div>
)}
      </div>
    </section>
  );
}
