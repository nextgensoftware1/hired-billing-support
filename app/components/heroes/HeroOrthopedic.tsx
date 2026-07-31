// app/components/heroes/HeroOrthopedic.tsx

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroOrthopedic({ solution }: HeroProps) {
  const kpis = [
    { label: 'Surgical Claim Rate', value: '96.2%', width: 96, type: 'hi' },
    { label: 'Auth Approval Rate', value: '94.8%', width: 94, type: 'hi' },
    { label: 'Denial Rate (High-Value)', value: '2.8%', width: 28, type: 'mi' },
    { label: 'AR Over 60 Days', value: '8.4%', width: 33, type: 'mi' },
    { label: 'Collection Rate', value: '95.1%', width: 95, type: 'hi' },
  ];

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
            <div style={{
              background: "var(--ink)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",
              padding: "20px",
            }}>
              <div style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: ".16em",
                color: "rgba(250, 247, 242, 0.5)",
                marginBottom: "16px",
                fontWeight: "600",
              }}>
                — Orthopedic Revenue · High-Value Claims Tracker
              </div>

              {/* KPI Rows */}
              {kpis.map((kpi, idx) => (
                <div key={idx} style={{ marginBottom: "12px" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "4px",
                  }}>
                    <span style={{
                      fontSize: "12px",
                      color: "var(--paper)",
                      fontWeight: "500",
                    }}>
                      {kpi.label}
                    </span>
                    <span style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: kpi.type === "hi" ? "var(--signal-deep)" : "var(--amber-deep)",
                    }}>
                      {kpi.value}
                    </span>
                  </div>
                  <div style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    height: "6px",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      background: kpi.type === "hi" ? "var(--signal)" : "var(--amber)",
                      height: "100%",
                      width: `${kpi.width}%`,
                      transition: "width 0.3s ease",
                    }} />
                  </div>
                </div>
              ))}

              {/* Divider */}
              <div style={{
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                margin: "12px 0",
              }} />

              {/* Stats */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "12px",
                marginBottom: "12px",
              }}>
                {[
                  { num: "3", label: "Auths Expiring", color: "var(--amber-deep)" },
                  { num: "$42K", label: "AR 60+ Days", color: "var(--danger)" },
                  { num: "0", label: "Missed Auths", color: "var(--signal-deep)" },
                ].map((stat, idx) => (
                  <div key={idx} style={{ textAlign: "center" }}>
                    <div style={{
                      fontFamily: "var(--serif)",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: stat.color,
                      lineHeight: "1",
                      marginBottom: "4px",
                    }}>
                      {stat.num}
                    </div>
                    <div style={{
                      fontFamily: "var(--mono)",
                      fontSize: "9px",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      color: "var(--paper)",
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Alert callout */}
              <div style={{
                background: "rgba(245,158,11,.08)",
                border: "1px solid rgba(245,158,11,.2)",
                borderRadius: "var(--radius)",
                padding: "12px",
              }}>
                <div style={{
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: ".1em",
                  color: "var(--amber-deep)",
                  marginBottom: "4px",
                }}>
                  — Revenue at stake
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "var(--paper)",
                  lineHeight: "1.4",
                }}>
                  3 surgical auths expiring this week — renewals initiated.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
