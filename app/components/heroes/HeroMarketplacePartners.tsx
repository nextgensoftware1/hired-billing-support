'use client';

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroMarketplacePartners({ solution }: HeroProps) {

  const styles = `
    /* Command Panel Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

    .cp-card {
      background: #FFF;
      border: 1px solid #E8E2D5;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 32px rgba(10, 22, 40, .10), 0 1px 4px rgba(10, 22, 40, .05);
    }

    .cp-header {
      background: #0A1628;
      padding: 22px 24px 18px;
    }

    .cp-header-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: rgba(250, 247, 242, .38);
      margin-bottom: 12px;
    }

    .cp-main-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .cp-big {
      font-family: 'Fraunces', serif;
      font-size: 2.6rem;
      color: #00C896;
      line-height: 1;
      font-variation-settings: "opsz" 144;
    }

    .cp-unit {
      font-size: 11px;
      color: rgba(250, 247, 242, .45);
      padding-bottom: 4px;
      margin-left: 4px;
    }

    .cp-trend {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
      background: rgba(0, 200, 150, .12);
      border: 1px solid rgba(0, 200, 150, .2);
      padding: 3px 10px;
      border-radius: 100px;
    }

    .cp-trend-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-header-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .35);
      letter-spacing: .08em;
      margin-top: 6px;
    }

    .cp-body {
      background: #111f35;
      padding: 16px 20px;
    }

    .cp-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }

    .cp-metric {
      padding: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, .06);
      border-right: 1px solid rgba(255, 255, 255, .06);
    }

    .cp-metric:nth-child(2n) {
      border-right: none;
    }

    .cp-metric:nth-last-child(-n+2) {
      border-bottom: none;
    }

    .cp-m-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .12em;
      color: rgba(250, 247, 242, .32);
      margin-bottom: 5px;
    }

    .cp-m-value {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
      color: rgba(250, 247, 242, .8);
    }

    .cp-m-value.sig {
      color: #00C896;
    }

    .cp-m-value.amb {
      color: #F59E0B;
    }

    .cp-m-value.lite {
      color: rgba(250, 247, 242, .8);
    }

    .cp-spark {
      height: 3px;
      border-radius: 2px;
      background: rgba(255, 255, 255, .08);
      overflow: hidden;
    }

    .cp-spark-fill {
      height: 100%;
      border-radius: 2px;
    }

    .spark-sig {
      background: #00C896;
    }

    .spark-amb {
      background: #F59E0B;
    }

    .spark-lite {
      background: rgba(250, 247, 242, .35);
    }

    .cp-queue {
      background: #FFF;
      padding: 16px 20px;
    }

    .cp-queue-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .14em;
      color: #475569;
      margin-bottom: 10px;
    }

    .cp-queue-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
    }

    .cp-queue-row:last-of-type {
      border-bottom: none;
    }

    .cp-q-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .cp-q-lbl {
      font-size: 11px;
      color: #1B2942;
      flex: 1;
      line-height: 1.3;
    }

    .cp-q-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      letter-spacing: .08em;
      padding: 2px 9px;
      border-radius: 100px;
      white-space: nowrap;
    }

    .badge-ok {
      background: rgba(0, 200, 150, .1);
      color: #00876B;
    }

    .badge-warn {
      background: rgba(245, 158, 11, .12);
      color: #B45309;
    }

    .cp-footer {
      background: #0A1628;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cp-footer-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
    }

    .cp-footer-pulse {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-footer-right {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .3);
      letter-spacing: .08em;
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
            <div className="cp-card">
              <div className="cp-header">
                <div className="cp-header-label">— Partner Delivery Dashboard · Active Clients</div>
                <div className="cp-main-row">
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                    <span className="cp-big">12</span>
                    <span className="cp-unit">partner clients supported</span>
                  </div>
                  <span className="cp-trend">
                    <span className="cp-trend-dot"></span>
                    ↑ 4 new this quarter
                  </span>
                </div>
                <div className="cp-header-sub">Updated today · Marketplace Partner View</div>
              </div>

              <div className="cp-body">
                <div className="cp-grid">
                  <div className="cp-metric">
                    <div className="cp-m-label">Client Retention</div>
                    <div className="cp-m-value sig">97.3%</div>
                    <div className="cp-spark">
                      <div className="cp-spark-fill spark-sig" style={{ width: '97%' }}></div>
                    </div>
                  </div>
                  <div className="cp-metric">
                    <div className="cp-m-label">Avg Collection Rate</div>
                    <div className="cp-m-value sig">94.1%</div>
                    <div className="cp-spark">
                      <div className="cp-spark-fill spark-sig" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div className="cp-metric">
                    <div className="cp-m-label">Onboarding Time</div>
                    <div className="cp-m-value amb">~14 days</div>
                    <div className="cp-spark">
                      <div className="cp-spark-fill spark-amb" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="cp-metric">
                    <div className="cp-m-label">Clients in Ramp</div>
                    <div className="cp-m-value lite">3 active</div>
                    <div className="cp-spark">
                      <div className="cp-spark-fill spark-lite" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cp-queue">
                <div className="cp-queue-title">Partner Client Service Coverage</div>
                <div className="cp-queue-row">
                  <div className="cp-q-dot" style={{ background: '#00C896' }}></div>
                  <span className="cp-q-lbl">Billing & RCM — all partner clients</span>
                  <span className="cp-q-badge badge-ok">Active</span>
                </div>
                <div className="cp-queue-row">
                  <div className="cp-q-dot" style={{ background: '#00C896' }}></div>
                  <span className="cp-q-lbl">Credentialing — 8 providers in process</span>
                  <span className="cp-q-badge badge-ok">On track</span>
                </div>
                <div className="cp-queue-row">
                  <div className="cp-q-dot" style={{ background: '#F59E0B' }}></div>
                  <span className="cp-q-lbl">3 new client onboardings in progress</span>
                  <span className="cp-q-badge badge-warn">Week 2 of 3</span>
                </div>
                <div className="cp-queue-row">
                  <div className="cp-q-dot" style={{ background: '#00C896' }}></div>
                  <span className="cp-q-lbl">Monthly partner reporting — delivered</span>
                  <span className="cp-q-badge badge-ok">Current</span>
                </div>
              </div>

              <div className="cp-footer">
                <span className="cp-footer-pill">
                  <span className="cp-footer-pulse"></span>
                  All 12 partner clients actively supported
                </span>
                <span className="cp-footer-right">White-label available</span>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>
    </>
  );
}
