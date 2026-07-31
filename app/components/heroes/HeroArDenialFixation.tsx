// app/components/heroes/HeroArDenialFixation.tsx

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroArDenialFixation({ solution }: HeroProps) {
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
            <div className="hero-card">
              <h4>— Denial Trend Dashboard · 30-day</h4>
              <div className="denial-row">
                <span className="denial-lbl">Total denials received</span>
                <span className="denial-val warn">47 claims</span>
              </div>
              <div className="denial-row">
                <span className="denial-lbl">Worked and resolved</span>
                <span className="denial-val good">
                  39 <span className="denial-pill pill-good">83%</span>
                </span>
              </div>
              <div className="denial-row">
                <span className="denial-lbl">In appeal</span>
                <span className="denial-val">
                  6 <span className="denial-pill pill-warn">Active</span>
                </span>
              </div>
              <div className="denial-row">
                <span className="denial-lbl">Unworked denials</span>
                <span className="denial-val good">0</span>
              </div>
              <div className="denial-row">
                <span className="denial-lbl">Top cause — Missing auth</span>
                <span className="denial-val warn">18 claims</span>
              </div>
              <div className="denial-row">
                <span className="denial-lbl">Denial rate vs. last month</span>
                <span className="denial-val good">↓ 2.1%</span>
              </div>
              <div className="denial-row">
                <span className="denial-lbl">Appeal reversal rate</span>
                <span className="denial-val good">
                  76% <span className="denial-pill pill-good">Strong</span>
                </span>
              </div>
              <div className="gap-callout" style={{ marginTop: "20px" }}>
                <div className="gc-lbl">— Root cause addressed this month</div>
                <div className="gc-val">Auth workflow updated — same denial won't repeat.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
