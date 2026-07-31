

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroNeurology({ solution }: HeroProps) {
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

              <h1
                className="display reveal reveal-2"
                style={{ marginTop: "20px" }}
                dangerouslySetInnerHTML={{ __html: solution.hero.title }}
              />

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
            <div
              style={{
                background: "var(--ink)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: ".16em",
                  color: "var(--ink-mute)",
                  marginBottom: "16px",
                  fontWeight: "600",
                }}
              >
                — Neurology Billing · Authorization & Claims Dashboard
              </div>

              {/* Auth rows */}
              {[
                {
                  label: "MRI Brain — BCBS (Headache workup)",
                  status: "Approved",
                  type: "approved",
                },
                {
                  label: "IVIG Infusion — UHC (CIDP)",
                  status: "Pending — medical necessity review",
                  type: "pending",
                },
                {
                  label: "Botox for Migraine — Aetna",
                  status: "Approved · quarterly cycle",
                  type: "approved",
                },
                {
                  label: "EEG — Epilepsy Monitoring",
                  status: "Approved",
                  type: "approved",
                },
                {
                  label: "MS Disease-Modifying Therapy",
                  status: "Step therapy documentation required",
                  type: "needed",
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: idx < 4 ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "var(--paper)", flex: 1 }}>
                    {row.label}
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      fontWeight: "600",
                      color:
                        row.type === "approved"
                          ? "var(--signal-deep)"
                          : row.type === "pending"
                          ? "var(--amber-deep)"
                          : "var(--danger)",
                      background:
                        row.type === "approved"
                          ? "rgba(0,200,150,.1)"
                          : row.type === "pending"
                          ? "rgba(245,158,11,.12)"
                          : "rgba(214,69,69,.09)",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.status}
                  </span>
                </div>
              ))}

              {/* Divider */}
              <div
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  margin: "12px 0",
                }}
              />

              {/* Stats */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                {[
                  { num: "5", label: "Active Auths" },
                  { num: "2", label: "Action Needed", color: "var(--amber-deep)" },
                  { num: "0", label: "Expired Auths", color: "var(--signal-deep)" },
                ].map((stat, idx) => (
                  <div key={idx} style={{ textAlign: "center" }}>
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: stat.color || "var(--signal)",
                        lineHeight: "1",
                        marginBottom: "4px",
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "9px",
                        textTransform: "uppercase",
                        letterSpacing: ".08em",
                        color: "rgba(250, 247, 242, 0.5)",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Alert */}
              <div
                style={{
                  background: "rgba(245,158,11,.08)",
                  border: "1px solid rgba(245,158,11,.2)",
                  borderRadius: "var(--radius)",
                  padding: "12px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    color: "var(--amber-deep)",
                    marginBottom: "4px",
                  }}
                >
                  — Documentation priority
                </div>

                <div style={{ fontSize: "12px", color: "var(--paper)", lineHeight: "1.4" }}>
                  MS therapy step therapy documentation due before next infusion date.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
