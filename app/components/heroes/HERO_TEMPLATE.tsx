// app/components/heroes/HERO_TEMPLATE.tsx
// Use this template to create new solution-specific hero components

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroTemplate({ solution }: HeroProps) {
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
              <p className="sub reveal reveal-3" >
                {solution.hero.subtitle}
              </p>
              <p className="lede reveal reveal-3" >
                {solution.hero.description}
              </p>
              <div className="hero-actions reveal reveal-4" >
                <a href="#cta" className="btn btn-primary btn-lg">
                  Primary CTA Button
                  <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#section" className="btn btn-ghost btn-lg">
                  Secondary CTA Button
                </a>
              </div>
            </>
          )}
        </div>
        {solution.hero && (
          <div className="reveal reveal-4" style={{ animationDelay: "0.55s" }}>
            {/* CUSTOMIZE THIS HERO CARD FOR EACH SOLUTION */}
            <div className="hero-card">
              <h4>— Solution-Specific Dashboard · 30-day</h4>
              <div className="denial-row">
                <span className="denial-lbl">Metric Label 1</span>
                <span className="denial-val warn">Metric Value 1</span>
              </div>
              <div className="denial-row">
                <span className="denial-lbl">Metric Label 2</span>
                <span className="denial-val good">
                  Metric Value 2 <span className="denial-pill pill-good">Badge</span>
                </span>
              </div>
              {/* Add more metrics specific to this solution */}
              <div className="gap-callout" style={{ marginTop: "20px" }}>
                <div className="gc-lbl">— Key Insight</div>
                <div className="gc-val">Solution-specific insight message.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * STEPS TO CREATE A NEW SOLUTION HERO:
 * 
 * 1. Copy this template and rename to HeroSolutionName.tsx (e.g., HeroRcmManagement.tsx)
 * 2. Customize the hero card metrics for your solution
 * 3. Update button text and href targets if needed
 * 4. Export from app/components/heroes/index.ts:
 *    export { default as HeroRcmManagement } from './HeroRcmManagement';
 * 5. Add to mapping in app/utils/getHeroComponent.ts:
 *    'rcm-management': HeroRcmManagement,
 * 6. Done! The page will automatically use the correct hero for that solution
 */
