'use client';

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroPayers({ solution }: HeroProps) {

  const styles = `
    .who-hero {
      background: #FAF7F2;
       padding: 110px 0 72px;
      position: relative;
      overflow: hidden;
    }

    .who-hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .who-hero-bg svg {
      width: 100%;
      height: 100%;
    }

    .who-hero-grain {
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: .4;
    }

    .who-hero-inner {
      position: relative;
      z-index: 1;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 clamp(20px, 4vw, 48px);
      display: grid;
      grid-template-columns: 1fr 440px;
      gap: 64px;
      align-items: center;
    }

    .who-hero-content {
      flex: 1;
    }

    .who-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .16em;
      color: #00876B;
      background: rgba(0, 200, 150, .08);
      border: 1px solid rgba(0, 200, 150, .2);
      padding: 6px 14px;
      border-radius: 100px;
      margin-bottom: 24px;
    }

    .who-hero-title {
      font-family: 'Fraunces', serif;
      font-size: clamp(2.6rem, 5.5vw, 4.2rem);
      font-weight: 400;
      letter-spacing: -.025em;
      line-height: 1.02;
      color: #0A1628;
      margin-bottom: 24px;
      font-variation-settings: "opsz" 144;
    }

    .who-hero-title em {
      font-style: italic;
      font-weight: 300;
      color: #475569;
    }

    .who-hero-subtitle {
      font-size: 17px;
      line-height: 1.7;
      color: #1B2942;
      margin-bottom: 14px;
      max-width: 560px;
    }

    .who-hero-lede {
      font-size: 15px;
      line-height: 1.75;
      color: #475569;
      max-width: 540px;
      margin-bottom: 40px;
    }

    .who-hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 22px;
      border-radius: 4px;
      font-family: 'Inter Tight', sans-serif;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background .2s, color .2s, transform .15s;
      white-space: nowrap;
      text-decoration: none;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

    .btn .arrow {
      transition: transform .2s;
      flex-shrink: 0;
    }

    .btn:hover .arrow {
      transform: translateX(3px);
    }

    .btn-primary {
      background: #0A1628;
      color: #FAF7F2;
    }

    .btn-primary:hover {
      background: #1B2942;
    }

    .btn-ghost {
      background: transparent;
      color: #0A1628;
      border-color: #E8E2D5;
    }

    .btn-ghost:hover {
      background: #F2EDE3;
      border-color: #475569;
    }

    .btn-lg {
      padding: 14px 28px;
      font-size: 15px;
    }

    /* [HeroPayers] Dashboard Card */
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

    .badge-risk {
      background: rgba(214, 69, 69, .09);
      color: #D64545;
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

    .reveal {
      opacity: 0;
      transform: translateY(20px);
    }

    .reveal-1 {
      animation: reveal 0.9s var(--ease) .05s forwards;
    }

    .reveal-2 {
      animation: reveal 0.9s var(--ease) .15s forwards;
    }

    .reveal-3 {
      animation: reveal 0.9s var(--ease) .30s forwards;
    }

    .reveal-4 {
      animation: reveal 0.9s var(--ease) .45s forwards;
    }

    @media(max-width:1024px) {
      .hero-inner {
        grid-template-columns: 1fr;
      }

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

          <div className="hero-visual reveal reveal-4" style={{ animationDelay: '0.55s' }}>
            <div className="cp-card">
              <div className="cp-header">
                <div className="cp-header-label">— Payer Operations Center · Daily Queue</div>
                <div className="cp-main-row">
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                    <span className="cp-big">94.7%</span>
                    <span className="cp-unit">same-day processing rate</span>
                  </div>
                  <span className="cp-trend">
                    <span className="cp-trend-dot"></span>
                    ↑ 3.2% vs last week
                  </span>
                </div>
                <div className="cp-header-sub">Updated today · Operational Dashboard</div>
              </div>

              <div className="cp-body">
                <div className="cp-grid">
                  <div className="cp-metric">
                    <div className="cp-m-label">Auth Queue</div>
                    <div className="cp-m-value sig">312 items</div>
                    <div className="cp-spark">
                      <div className="cp-spark-fill spark-sig" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  <div className="cp-metric">
                    <div className="cp-m-label">Avg Resolution</div>
                    <div className="cp-m-value sig">4.2 hrs</div>
                    <div className="cp-spark">
                      <div className="cp-spark-fill spark-sig" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div className="cp-metric">
                    <div className="cp-m-label">Backlog Items</div>
                    <div className="cp-m-value amb">47 items</div>
                    <div className="cp-spark">
                      <div className="cp-spark-fill spark-amb" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  <div className="cp-metric">
                    <div className="cp-m-label">Provider Inquiries</div>
                    <div className="cp-m-value lite">28 open</div>
                    <div className="cp-spark">
                      <div className="cp-spark-fill spark-lite" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cp-queue">
                <div className="cp-queue-title">Queue Priority View · Active</div>
                <div className="cp-queue-row">
                  <div className="cp-q-dot" style={{ background: '#00C896' }}></div>
                  <span className="cp-q-lbl">Claims review — standard processing</span>
                  <span className="cp-q-badge badge-ok">On track</span>
                </div>
                <div className="cp-queue-row">
                  <div className="cp-q-dot" style={{ background: '#F59E0B' }}></div>
                  <span className="cp-q-lbl">Authorization exceptions — escalated</span>
                  <span className="cp-q-badge badge-warn">18 pending</span>
                </div>
                <div className="cp-queue-row">
                  <div className="cp-q-dot" style={{ background: '#00C896' }}></div>
                  <span className="cp-q-lbl">Enrollment documentation — indexed</span>
                  <span className="cp-q-badge badge-ok">Current</span>
                </div>
                <div className="cp-queue-row">
                  <div className="cp-q-dot" style={{ background: '#D64545' }}></div>
                  <span className="cp-q-lbl">Provider data — aged items flagged</span>
                  <span className="cp-q-badge badge-risk">6 over SLA</span>
                </div>
              </div>

              <div className="cp-footer">
                <span className="cp-footer-pill">
                  <span className="cp-footer-pulse"></span>
                  6 items exceed SLA — priority escalation active
                </span>
                <span className="cp-footer-right">Live · Secured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
