// app/components/heroes/HeroObgyn.tsx

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroObgyn({ solution }: HeroProps) {
  const queueItems = [
    { dot: 'g', label: 'Prenatal Global Package — Patient A (32 wks)', status: 'Tracking correctly', type: 'ok' },
    { dot: 'a', label: 'Eligibility Change — Patient B (insurance switched)', status: 'Verification needed', type: 'warn' },
    { dot: 'g', label: 'GYN Procedure Auth — Hysteroscopy', status: 'Approved', type: 'pill' },
    { dot: 'a', label: 'Ultrasound Series — Insurance Review', status: '2 claims pending', type: 'warn' },
    { dot: 'r', label: 'Global Period — Delivery Claim', status: 'Denied — coding review', type: 'risk' },
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
                color: "var(--paper)",
                marginBottom: "16px",
                fontWeight: "600",
              }}>
                — OBGYN Billing Queue · Active Patients
              </div>

              {/* Queue rows with colored dots */}
              {queueItems.map((item, idx) => {
                const dotColor = item.dot === 'g' ? 'var(--signal)' : item.dot === 'a' ? 'var(--amber)' : 'var(--danger)';
                return (
                  <div key={idx} style={{ marginBottom: "12px" }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      paddingBottom: "8px",
                    }}>
                      <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: dotColor,
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: "13px",
                        color: "var(--paper)",
                        flex: 1,
                      }}>
                        {item.label}
                      </span>
                      {item.type === 'pill' ? (
                        <span style={{
                          fontFamily: "var(--mono)",
                          fontSize: "9px",
                          fontWeight: "600",
                          color: "var(--signal-deep)",
                          background: "rgba(0,200,150,.1)",
                          padding: "3px 8px",
                          borderRadius: "100px",
                          whiteSpace: "nowrap",
                        }}>
                          {item.status}
                        </span>
                      ) : (
                        <span style={{
                          fontSize: "11px",
                          color: item.type === 'ok' ? "var(--signal-deep)" : item.type === 'warn' ? "var(--amber-deep)" : "var(--danger)",
                          fontWeight: "500",
                        }}>
                          {item.status}
                        </span>
                      )}
                    </div>
                    {idx < queueItems.length - 1 && (
                      <div style={{
                        height: "1px",
                        background: "rgba(255, 255, 255, 0.08)",
                      }} />
                    )}
                  </div>
                );
              })}

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
                  { num: "8", label: "Active Globals" },
                  { num: "3", label: "Eligibility Flags", color: "var(--amber-deep)" },
                  { num: "1", label: "Delivery Denial", color: "var(--danger)" },
                ].map((stat, idx) => (
                  <div key={idx} style={{ textAlign: "center" }}>
                    <div style={{
                      fontFamily: "var(--serif)",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: stat.color || "var(--signal)",
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
                      color: "rgba(250, 247, 242, 0.5)",
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
                  — Global billing note
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "var(--paper)",
                  lineHeight: "1.4",
                }}>
                  Patient B insurance change may affect global package — review before next prenatal visit.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
