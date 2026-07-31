// app/components/heroes/HeroMedicalCoding.tsx

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroMedicalCoding({ solution }: HeroProps) {
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
          <div className="reveal reveal-4" style={{ animationDelay: "0.55s" }}>
         <div className="reveal reveal-4" style={{ animationDelay: "0.55s" }}>
  <div className="hero-card">
    <h4>— Coding Accuracy · 30-day view</h4>

    <div className="dash-row">
      <span className="dash-label">ICD-10 Accuracy</span>
      <span className="dash-value green">96%</span>
    </div>

    <div className="dash-row">
      <span className="dash-label">CPT Accuracy</span>
      <span className="dash-value green">94%</span>
    </div>

    <div className="dash-row">
      <span className="dash-label">Modifier Accuracy</span>
      <span className="dash-value amber">88%</span>
    </div>

    <div className="dash-row">
      <span className="dash-label">Doc–Code Alignment</span>
      <span className="dash-value green">97%</span>
    </div>

    <div className="dash-row">
      <span className="dash-label">Coding Denial Rate</span>
      <span className="dash-value">
        <span className="dash-pill pill-green">2.1% ↓</span>
      </span>
    </div>

    <div className="dash-row">
      <span className="dash-label">Errors Caught Pre-Submit</span>
      <span className="dash-value green">14</span>
    </div>

    {/* <div className="dash-divider"></div> */}

    <div className="dash-stats">
      <div className="dash-stat">
        <span className="dash-stat-num">341</span>
        <span className="dash-stat-label">Claims Reviewed</span>
      </div>

      <div className="dash-stat">
        <span className="dash-stat-num">0</span>
        <span className="dash-stat-label">Unbilled Visits</span>
      </div>

      <div className="dash-stat">
        <span className="dash-stat-num green">$18.4K</span>
        <span className="dash-stat-label">Revenue Protected</span>
      </div>
    </div>
  </div>
</div>
          </div>
        )}
      </div>
    </section>
  );
}
