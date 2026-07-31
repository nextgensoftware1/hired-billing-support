// app/page.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: 'Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever.',
    avatar: 'RE',
    name: 'Dr Ruth - Edwin DMD/MS',
    role: 'Diplomate of American Board of Periodontology',
  },
  {
    quote: 'Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our billing operations seamlessly.',
    avatar: 'HM',
    name: 'Herma Thompson PMHNP-BC',
    role: 'Nurse Practitioner - Psych/Mental Health',
  },
  {
    quote: 'HBS identified three payers underpaying our E&M claims for over a year. Recovered $40,000 in one quarter.',
    avatar: 'JW',
    name: 'James Whitfield MBA, CMPE',
    role: 'Certified Medical Practice Executive',
  },
  {
    quote: 'Prior auth denials dropped from 11% to under 3% in 60 days. HBS tracks every authorization before it expires.',
    avatar: 'RM',
    name: 'Dr. Rehan Malik MD, FACC',
    role: 'Interventional Cardiologist',
  },
  {
    quote: 'Partnering with Hired Billing Support gave us peace of mind. Our billing is cleaner, our staff works on patient care instead of paperwork, and we are now capturing more appointments than ever.',
    avatar: 'RE',
    name: 'Dr Ruth - Edwin DMD/MS',
    role: 'Diplomate of American Board of Periodontology',
  },
  {
    quote: 'Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our billing operations seamlessly.',
    avatar: 'HM',
    name: 'Herma Thompson PMHNP-BC',
    role: 'Nurse Practitioner - Psych/Mental Health',
  },
  {
    quote: 'HBS identified three payers underpaying our E&M claims for over a year. Recovered $40,000 in one quarter.',
    avatar: 'JW',
    name: 'James Whitfield MBA, CMPE',
    role: 'Certified Medical Practice Executive',
  },
  {
    quote: 'Prior auth denials dropped from 11% to under 3% in 60 days. HBS tracks every authorization before it expires.',
    avatar: 'RM',
    name: 'Dr. Rehan Malik MD, FACC',
    role: 'Interventional Cardiologist',
  },
];

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length === 0) return;

    let visibleSlides = 1;
    let cardWidth = 0;

    const updateTransform = () => {
      const firstCard = cards[0];
      const trackStyle = window.getComputedStyle(track);
      const gapValue = Number.parseFloat(trackStyle.columnGap || trackStyle.gap || '40') || 40;
      const cardWidthNoGap = firstCard.getBoundingClientRect().width;
      const containerWidth = track.parentElement?.getBoundingClientRect().width || track.getBoundingClientRect().width;

      visibleSlides = Math.max(1, Math.floor((containerWidth + gapValue) / (cardWidthNoGap + gapValue)));
      const maxIndex = Math.max(0, testimonials.length - visibleSlides);
      const index = Math.min(activeIndex, maxIndex);

      if (index !== activeIndex) {
        setActiveIndex(index);
      }

      track.style.transition = 'transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
      track.style.transform = `translateX(-${index * (cardWidthNoGap + gapValue)}px)`;
    };

    const normalizeIndex = (index: number) => {
      const maxIndex = Math.max(0, testimonials.length - visibleSlides);
      return index > maxIndex ? 0 : index;
    };

    const handleResize = () => {
      window.requestAnimationFrame(updateTransform);
    };

    const handleVisibility = () => {
      if (document.hidden) return;
      window.requestAnimationFrame(updateTransform);
    };

    const resizeObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(handleResize)
      : null;

    if (resizeObserver) {
      resizeObserver.observe(track);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = current + 1;
        const maxIndex = Math.max(0, testimonials.length - visibleSlides);
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 5000);

    window.requestAnimationFrame(updateTransform);
    window.setTimeout(updateTransform, 150);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      resizeObserver?.disconnect();
    };
  }, [activeIndex]);

  return (
    <main>
      {/* HERO */}

      <div>
        <section className="hero">
          <div className="hero-bg">
            <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width={48} height={48} patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="hero-grain" />
          </div>
          <div className="ticker-line top">
            <span className="ticker-track">
              RCM · AR RECOVERY · CREDENTIALING · PRIOR AUTHORIZATION · ELIGIBILITY · DENIAL MANAGEMENT · VIRTUAL ASSISTANTS · FRONT DESK · SCHEDULING · CHARGE ENTRY · PAYMENT POSTING · PATIENT COORDINATION · RCM · AR RECOVERY · CREDENTIALING · PRIOR AUTHORIZATION · ELIGIBILITY · DENIAL MANAGEMENT · VIRTUAL ASSISTANTS · FRONT DESK · SCHEDULING · CHARGE ENTRY · PAYMENT POSTING · PATIENT COORDINATION ·
            </span>
          </div>
          <div className="hero-inner">
            <div>
              <div className="eyebrow reveal reveal-1">Operational infrastructure for healthcare</div>
              <h1 className="display reveal reveal-2" style={{ fontSize: "clamp(38px, 5vw, 64px)" }}>
                Your practice should grow <em>without the</em>  <span className="underline-word">operational chaos</span>.
              </h1>
              <p className="lede reveal reveal-3">
                Hired Billing Support is the remote team behind growing practices — RCM specialists, billers, AR experts, and virtual medical assistants embedded into your workflow. So you can stop firefighting and start practicing.
              </p>
              <div className="hero-actions reveal reveal-4">
                <a href="/CostROIcalculator" className="btn btn-primary">COST & ROI CALCULATOR
                  <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </a>
                <a href="/contact" className="btn btn-text">CONTACT →</a>
              </div>
              <div className="hero-meta reveal reveal-5">
                <div className="hero-meta-item">
                  <span className="num">98<span style={{ color: 'var(--signal)' }}>%</span></span>
                  <span className="lbl">Clean-claim rate</span>
                </div>
                <div className="hero-meta-item">
                  <span className="num">22<span style={{ color: 'var(--signal)' }}>d</span></span>
                  <span className="lbl">Avg. days in AR</span>
                </div>
                <div className="hero-meta-item">
                  <span className="num">$1.2<span style={{ color: 'var(--signal)' }}>M+</span></span>
                  <span className="lbl">Recovered for clients in '25</span>
                </div>
              </div>
            </div>
            {/* Operational dashboard card */}
            <div className="reveal reveal-4" style={{ animationDelay: '0.5s' }}>
              <div className="hero-card">
                <div className="hero-card-header">
                  <span className="label"><span className="live-dot" />LIVE · CLIENT WORKSPACE</span>
                  <span className="label" style={{ fontVariantNumeric: 'tabular-nums' }}>14 MAY · 09:42</span>
                </div>
                <div className="stat-grid">
                  <div className="stat-cell">
                    <div className="v">$47,820 <span className="delta">▲</span></div>
                    <div className="k">Collections this week</div>
                  </div>
                  <div className="stat-cell">
                    <div className="v">186</div>
                    <div className="k">Claims submitted</div>
                  </div>
                  <div className="stat-cell">
                    <div className="v">12 <span className="delta" style={{ color: '#D64545' }}>⚠</span></div>
                    <div className="k">Denials flagged for appeal</div>
                  </div>
                  <div className="stat-cell">
                    <div className="v">98.2%</div>
                    <div className="k">First-pass clean rate</div>
                  </div>
                </div>
                <div className="activity-feed">
                  <div className="activity-feed-title">— Team activity</div>
                  <div className="feed-row"><span>Maya · Posted 34 payments (Aetna ERA)</span><span className="feed-tag">+ $8,420</span></div>
                  <div className="feed-row"><span>Jordan · Resolved 6 denied claims</span><span className="feed-tag">+ $2,180</span></div>
                  <div className="feed-row"><span>Sara · Verified eligibility for tomorrow's schedule</span><span className="feed-tag">28 patients</span></div>
                  <div className="feed-row"><span>Ali · Obtained 4 prior auths (orthopedic)</span><span className="feed-tag">approved</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticker-line bot">
            <span className="ticker-track">
              HIPAA COMPLIANT · SOC 2 ALIGNED · US TIME-ZONE COVERAGE · EHR-AGNOSTIC · ATHENA · ECW · KAREO · DRCHRONO · ADVANCEDMD · NEXTGEN · EPIC · CERNER · HIPAA COMPLIANT · SOC 2 ALIGNED · US TIME-ZONE COVERAGE · EHR-AGNOSTIC · ATHENA · ECW · KAREO · DRCHRONO · ADVANCEDMD · NEXTGEN · EPIC · CERNER ·
            </span>
          </div>
        </section>
        <div className="trust-strip">
          <div className="container trust-inner">
            <div className="trust-label">Trusted by physicians, clinic owners, and practice managers across</div>
            <div className="trust-logos">
              <span>Primary Care</span>
              <span>Behavioral Health</span>
              <span>Urgent Care</span>
              <span>Dental</span>
              <span>Orthopedics</span>
              <span>Cardiology</span>
            </div>
          </div>
        </div>
      </div>


      {/* PROBLEM SECTION */}
      <section className="block">
        <div className="container">
          <div className="block-head fade-in">
            <div className="eyebrow">The state of practice operations</div>
            <h2 className="display">Your doctors are charting after hours. <em>Again.</em></h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--ink-mute)', marginTop: '24px', maxWidth: '640px' }}>
              Even in the age of AI, providers are drowning. The cost of running a practice has never been higher — and the people you've hired to fix it are burning out too.
            </p>
          </div>
          <div className="pain-ledger fade-in">
            {[
              { num: '01', title: 'Front desk is overwhelmed', desc: 'Phones don\'t stop. Verifications pile up. No-shows go uncalled. Schedules leak revenue.', stat: '+34% call volume' },
              { num: '02', title: 'Claims are aging', desc: 'Claims sit in 60+ buckets. AR keeps growing. Cash flow is unpredictable.', stat: '$1 in $4 lost' },
              { num: '03', title: 'Denials are increasing', desc: 'Payer rules shift weekly. Coding errors slip through. Appeals never get filed.', stat: '~18% denial rate' },
              { num: '04', title: 'Staff costs are rising', desc: 'W-2s, benefits, turnover, training, PTO. Salaries outpacing reimbursement, every year.', stat: '+11% YoY overhead' },
              { num: '05', title: 'Doctors are doing admin', desc: 'Charting after hours. Chasing prior auths. Doing the work two people should be doing.', stat: '2 hrs / day lost' },
              { num: '06', title: 'Hiring is broken', desc: '90 days to fill a billing seat. 6 months to train. 14 months to lose them.', stat: '$22k cost / hire' }
            ].map((pain, idx) => (
              <div key={idx} className="pain-row">
                <div className="pn">{pain.num}</div>
                <div className="ptitle">{pain.title}</div>
                <div className="pdesc">{pain.desc}</div>
                <div className="pstat">{pain.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="block warm" id="approach">
        <div className="container">
          <div className="block-head fade-in">
            <div className="eyebrow">A different model</div>
            <h2 className="display">Not outsourcing. <em>Operational infrastructure.</em></h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--ink-mute)', marginTop: '24px', maxWidth: '640px' }}>
              We don't sell hours. We embed trained healthcare specialists directly into your workflow — operating inside your EHR, your communication tools, and your standards. You get the throughput of a 12-person back office without hiring one.
            </p>
          </div>
          <div className="approach-grid fade-in">
            <div className="approach-card feature">
              <span className="approach-num">— 01 / EMBEDDED TEAMS</span>
              <h3 className="display">A back office that <em>shows up</em> on Monday morning.</h3>
              <p>Pre-vetted billers, AR specialists, virtual assistants, and front desk talent — onboarded into your EHR, your SOPs, and your standards. They report to you. They feel like yours. Because operationally, they are.</p>
              <div className="approach-illust">
                <svg width="100%" height="100%" viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.9 }}>
                  <g fill="none" stroke="#00C896" strokeWidth="1">
                    <circle cx="80" cy="70" r="22" />
                    <circle cx="160" cy="70" r="22" />
                    <circle cx="240" cy="70" r="22" />
                    <circle cx="320" cy="70" r="22" />
                    <line x1="102" y1="70" x2="138" y2="70" strokeDasharray="3 3" />
                    <line x1="182" y1="70" x2="218" y2="70" strokeDasharray="3 3" />
                    <line x1="262" y1="70" x2="298" y2="70" strokeDasharray="3 3" />
                  </g>
                  <g fontFamily="JetBrains Mono" fontSize="9" fill="#FAF7F2" opacity="0.7" textAnchor="middle">
                    <text x="80" y="108">RCM</text>
                    <text x="160" y="108">AR</text>
                    <text x="240" y="108">VA</text>
                    <text x="320" y="108">FRONT</text>
                  </g>
                  <g fontFamily="Fraunces" fontSize="12" fill="#FAF7F2" textAnchor="middle">
                    <text x="80" y="74">M</text>
                    <text x="160" y="74">J</text>
                    <text x="240" y="74">S</text>
                    <text x="320" y="74">A</text>
                  </g>
                </svg>
              </div>
            </div>
            <div className="approach-card">
              <span className="approach-num">— 02 / AI + HUMAN</span>
              <h3 className="display">AI does the lifting. <em>Humans do the judgment.</em></h3>
              <p>Eligibility checks, claim scrubbing, denial categorization — automated. The complex appeals, payer calls, and patient conversations — handled by trained specialists.</p>
            </div>
            <div className="approach-card">
              <span className="approach-num">— 03 / RCM, NOT HOURS</span>
              <h3 className="display">A percentage model. <em>Aligned incentives.</em></h3>
              <p>For full RCM engagements, we charge a percentage of collections. We only win when you do — and we don't get paid for claims that don't.</p>
            </div>
            <div className="approach-card">
              <span className="approach-num">— 04 / SCALES WITH YOU</span>
              <h3 className="display">Add capacity in <em>days</em>, not quarters.</h3>
              <p>Open a new location? Doubled patient volume? We scale your team within a week — without W-2s, benefits, recruiting cycles, or hiring risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="block">
        <div className="container">
          <div className="block-head fade-in">
            <div className="eyebrow">What we operate</div>
            <h2 className="display">The full operational <em>stack</em>.</h2>
            <p style={{ fontSize: 18, lineHeight: '1.6', color: 'var(--ink-mute)', marginTop: 24, maxWidth: 640 }}>
              Pick the layers you need. Run one service, or hand us the entire back office. Every engagement is shaped around your specialty, EHR, and growth stage.
            </p>
          </div>
          <div className="services-grid home-services-grid fade-in">
            <Link href="/solutions/rcm-management" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-5" /></svg>
              <h4>Revenue Cycle Management</h4>
              <p>End-to-end ownership of your collections — coding, claim submission, AR follow-up, denials, payment posting, patient billing. One team, one accountable scorecard.</p>
              <span className="arrow-link">Explore RCM <span className="arrow">→</span></span>
            </Link>
            <Link href="/solutions/ar-management" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx={12} cy={12} r={9} /><path d="M12 7v5l3 3" /></svg>
              <h4>AR Recovery &amp; Follow-Up</h4>
              <p>We hunt aging claims — 30, 60, 90, 120+ days. Payer calls, status checks, resubmissions, appeals. Most clients see AR days drop below 30 within 90 days.</p>
              <span className="arrow-link">AR services <span className="arrow">→</span></span>
            </Link>
            <Link href="/solutions/medical-billing-rcm" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 11l3 3 7-7" /><path d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h9" /></svg>
              <h4>Medical Billing</h4>
              <p>Specialty-trained coders and billers. CPT, ICD-10, HCPCS, modifier accuracy. Clean-claim submission as a discipline, not an afterthought.</p>
              <span className="arrow-link">Billing services <span className="arrow">→</span></span>
            </Link>
            <Link href="/solutions/provider-credential" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
              <h4>Prior Authorization</h4>
              <p>Pre-cert submission, payer follow-up, peer-to-peer prep. We shorten time-to-approval and stop the auth bottleneck from holding up patient care.</p>
              <span className="arrow-link">Prior auth <span className="arrow">→</span></span>
            </Link>
            <Link href="/solutions/payer-insurer-enrollment" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x={3} y={4} width={18} height={16} rx={2} /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
              <h4>Insurance Verification</h4>
              <p>Real-time eligibility and benefits checks before the patient walks in. Co-pays, deductibles, coverage limits — clarified, documented, in the chart.</p>
              <span className="arrow-link">Verification <span className="arrow">→</span></span>
            </Link>
            <Link href="/medical" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 7l-8 8-4-4" /><path d="M14 3h7v7" /><path d="M21 14v5a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h5" /></svg>
              <h4>Virtual Medical Assistants</h4>
              <p>Charting support, message triage, refill management, referrals, lab follow-up. A clinical extension of the provider — quiet, accurate, always there.</p>
              <span className="arrow-link">Virtual MAs <span className="arrow">→</span></span>
            </Link>
            <Link href="/dental" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" /></svg>
              <h4>Front Desk Support</h4>
              <p>Phones answered. Patients greeted (virtually). Schedules managed. We absorb the noise so your in-clinic team can focus on the patient in front of them.</p>
              <span className="arrow-link">Front desk <span className="arrow">→</span></span>
            </Link>
            <Link href="/solutions/operations-management" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x={3} y={4} width={18} height={18} rx={2} /><path d="M3 10h18M8 2v4M16 2v4M8 14h2M14 14h2M8 18h2M14 18h2" /></svg>
              <h4>Scheduling &amp; Coordination</h4>
              <p>Appointment scheduling, reminders, recall, no-show recovery. We protect the calendar — the single most expensive asset in your practice.</p>
              <span className="arrow-link">Scheduling <span className="arrow">→</span></span>
            </Link>
            <Link href="/solutions/operations-management" className="service-cell">
              <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
              <h4>Healthcare Operations Mgmt</h4>
              <p>For larger practices: an operations lead embedded in your team. Workflows, dashboards, KPIs, vendor management. The COO-layer you don't have yet.</p>
              <span className="arrow-link">Operations <span className="arrow">→</span></span>
            </Link>
          </div>
        </div>
      </section>


      {/* WORKFLOW SECTION */}
      <section className="block dark" id="workflow">
        <div className="container">
          <div className="workflow fade-in">
            <div>
              <div className="eyebrow">The AI + human advantage</div>
              <h2 className="display" style={{ marginTop: '20px' }}>
                <span>AI does the lifting. </span><em><span>People do the thinking.</span></em>
              </h2>
              <p className="lede">
                <span>We pair trained healthcare specialists with AI-assisted workflows. </span>
                <span>Eligibility checks, claim scrubs, and denial categorization happen in seconds. </span>
                <span>Specialists focus on the work that actually requires a human — </span>
                <span>payer escalations, complex appeals, and patient relationships.</span>
              </p>
              <ul className="workflow-points">
                {[
                  {
                    num: '01',
                    title: 'Automated eligibility & scrubbing',
                    desc: 'Every claim is validated against payer rules before submission. First-pass rate above 98%.'
                  },
                  {
                    num: '02',
                    title: 'AI-triaged denials',
                    desc: 'Denials are categorized, prioritized, and routed to the right specialist queue within minutes — not weeks.'
                  },
                  {
                    num: '03',
                    title: 'Human-led appeals',
                    desc: 'Trained appeals specialists write payer-specific responses. Higher overturn rates, less staff time.'
                  },
                  {
                    num: '04',
                    title: 'Real-time visibility',
                    desc: 'You see everything we see — KPIs, queues, payments, denials — in a shared dashboard.'
                  }
                ].map((point, idx) => (
                  <li key={idx}>
                    <span className="num">{point.num}</span>
                    <div className="txt">
                      <strong>{point.title}</strong>
                      <span>{point.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="workflow-diagram">
              <div className="wd-layer l1">
                <div className="wl-tag">— LAYER 01 / INTAKE</div>
                <div className="wl-name">Eligibility · Auth · Demographics</div>
              </div>
              <div className="wd-connector c1"></div>
              <div className="wd-layer l2">
                <div className="wl-tag">— LAYER 02 / AI SCRUB</div>
                <div className="wl-name">Claim validation · Payer rules</div>
              </div>
              <div className="wd-connector c2"></div>
              <div className="wd-layer l3">
                <div className="wl-tag">— LAYER 03 / SPECIALIST QUEUE</div>
                <div className="wl-name">Triaged · Routed · Tracked</div>
              </div>
              <div className="wd-connector c3"></div>
              <div className="wd-layer l4">
                <div className="wl-tag">— LAYER 04 / HUMAN JUDGMENT</div>
                <div className="wl-name">Appeals · Calls · Resolution</div>
              </div>
              <div className="wd-output">
                <div className="ot">— OUTCOME</div>
                <div className="on">Faster reimbursement. Cleaner books.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="block">
        <div className="container">
          <div className="block-head fade-in">
            <div className="eyebrow">By the numbers</div>
            <h2 className="display">What it looks like <em>after 90 days.</em></h2>
          </div>
          <div className="stats-row fade-in">
            {[
              { figure: '+27', unit: '%', desc: 'Average collections lift within the first quarter of full RCM engagement.' },
              { figure: '22', unit: 'd', desc: 'Average days in AR for active clients — down from a 47-day baseline.' },
              { figure: '98', unit: '%', desc: 'First-pass clean-claim rate across all submitted claims, all specialties.' },
              { figure: '60', unit: '%', desc: 'Lower operating cost versus building the equivalent in-house team.' }
            ].map((stat, idx) => (
              <div key={idx} className="stat-block">
                <div className="figure">{stat.figure}<span className="unit">{stat.unit}</span></div>
                <div className="desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="block warm" id="cases">
        <div className="container">
          <div className="block-head fade-in">
            <div className="eyebrow">Case study</div>
            <h2 className="display">A 4-physician primary care group, <em>after 6 months.</em></h2>
          </div>
          <div className="case-card fade-in">
            <div className="case-body">
              <div className="eyebrow">Primary care · 4 providers · Texas</div>
              <h3>From 47 days in AR and burnout, to a calmer practice and 31% more revenue.</h3>
              <p>
                The practice was running on two in-house billers, a stretched-thin front desk, and a $180k AR backlog. We embedded a 3-person remote team: one biller, one AR specialist, one verification VA. We took over the AR aging report on day one.
              </p>
              <p>By month six: AR days under 25, denials cut in half, the in-house team redeployed to patient experience, and the lead physician home for dinner.</p>
              <Link href="/case-study" className="btn btn-light">Read the full case →</Link>
            </div>
            <div className="case-metrics">
              {[
                { v: '+31', unit: '%', k: 'Monthly collections lift' },
                { v: '-47', unit: '%', k: 'Denial rate reduction' },
                { v: '22', unit: 'd', k: 'Days in AR (from 47)' },
                { v: '$112', unit: 'k', k: 'AR recovered in 90 days' }
              ].map((metric, idx) => (
                <div key={idx} className="case-metric">
                  <div className="v">{metric.v}<span className="unit">{metric.unit}</span></div>
                  <div className="k">{metric.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="block">
        <div className="container">
          <div className="block-head fade-in" >
            <div className="eyebrow">In their own words</div>
            <h2 className="display">From physicians who got their <em>evenings back.</em></h2>
          </div>
          <div className="testimonial-slider fade-in">
            <div className="testi-track" ref={trackRef}>
              {testimonials.map((testi, idx) => (
                <div key={`${testi.name}-${idx}`} className="testi">
                  <div className="testi-quote">{testi.quote}</div>
                  <div className="testi-attr">
                    <div className="testi-avatar">{testi.avatar}</div>
                    <div>
                      <div className="testi-name">{testi.name}</div>
                      <div className="testi-role">{testi.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-dots" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '999px',
                    border: '0',
                    background: idx === activeIndex ? 'var(--signal)' : 'rgba(10, 22, 40, 0.2)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section className="block warm">
        <div className="container">
          <div className="compliance fade-in">
            <div>
              <div className="eyebrow">Security & compliance</div>
              <h2 className="display" style={{ marginTop: '20px' }}>Built for healthcare. <em>Auditable by design.</em></h2>
              <p style={{ fontSize: '17px', lineHeight: '1.65', color: 'var(--ink-mute)', marginTop: '24px', maxWidth: '560px' }}>
                We operate to HIPAA standards across our entire stack — workstations, networks, communications, and access controls. Every team member is BAA-bound, background-checked, and trained on PHI handling before they touch your data.
              </p>
              <Link href="/contact" className="btn btn-ghost" style={{ marginTop: '32px' }}>Read the security overview →</Link>
            </div>
            <div className="compliance-badges">
              {[
                {
                  icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
                  title: 'HIPAA Compliant',
                  desc: 'Full administrative, physical, technical safeguards.'
                },
                {
                  icon: 'M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM9 12l2 2 4-4',
                  title: 'SOC 2 Aligned',
                  desc: 'Trust service criteria mapped across operations.'
                },
                {
                  icon: 'M12 1v6m0 6v6M7 12h10M3 12a9 9 0 1118 0 9 9 0 01-18 0z',
                  title: 'Encrypted End-to-End',
                  desc: 'At rest, in transit, in storage. AES-256.'
                },
                {
                  icon: 'M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M20 8v6M23 11h-6M8.5 7a4 4 0 100-8 4 4 0 000 8z',
                  title: 'Vetted Personnel',
                  desc: 'Background-checked. BAA-bound. Continuously audited.'
                }
              ].map((badge, idx) => (
                <div key={idx} className="badge">
                  <div className="badge-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d={badge.icon} />
                    </svg>
                  </div>
                  <div>
                    <h5>{badge.title}</h5>
                    <p>{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="block" id="faq">
        <div className="container">
          <div className="block-head fade-in" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="eyebrow">Frequently asked</div>
            <h2 className="display">Questions <em>we hear often.</em></h2>
          </div>
          <div className="faq-list fade-in">
            {[
              {
                summary: 'How is this different from a typical VA or outsourcing company?',
                body: 'VAs sell hours. We deliver outcomes. Our team is healthcare-trained — not generalist — and embedded directly into your EHR and SOPs. For RCM, we work on a percentage-of-collections model, meaning we only get paid when you do. You\'re hiring an operational system, not a contractor.'
              },
              {
                summary: 'Which EHRs and PM systems do you work in?',
                body: 'We\'re EHR-agnostic. Active client work spans Athenahealth, eClinicalWorks, Kareo, AdvancedMD, DrChrono, NextGen, Practice Fusion, Epic, and Cerner. If you\'re on something newer or niche, we\'ll learn it during onboarding.'
              },
              {
                summary: 'How fast can a team be live?',
                body: 'Most engagements go live within 10–14 business days. That includes vetting, EHR access provisioning, SOP intake, BAA execution, and a phased takeover so nothing falls through the cracks during transition.'
              },
              {
                summary: 'How are you HIPAA compliant?',
                body: 'Every team member operates from a controlled workstation with enforced access policies, end-to-end encryption, no local storage of PHI, and continuous monitoring. We sign a BAA, complete role-based training quarterly, and align our administrative, physical, and technical safeguards to HIPAA and SOC 2 trust criteria.'
              },
              {
                summary: 'What does pricing look like?',
                body: 'For full Revenue Cycle Management: percentage of net collections (typically 3–7% depending on specialty and volume). For dedicated remote staff (VA, front desk, AR-only): flat monthly per seat. No long-term contracts — we earn renewals month over month.'
              },
              {
                summary: 'Can we start with just one service?',
                body: 'Yes. Most clients start with one bottleneck — usually AR recovery or insurance verification — and expand once they see the throughput. You\'re never locked into the full stack.'
              },
              {
                summary: 'Will the team really feel like ours?',
                body: 'Yes. Your team uses your email domain, joins your standups, follows your SOPs, and reports to your practice manager. To your patients, they\'re staff. To us, they\'re accountable to outcomes you define.'
              }
            ].map((item, idx) => (
              <details key={idx} className="faq" open={idx === 0}>
                <summary>
                  {item.summary}
                  <span className="toggle">+</span>
                </summary>
                <div className="faq-body">{item.body}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="cta">
        <div className="final-cta-glow"></div>
        <div className="cta-inner">
          <div className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(250,247,242,0.55)' }}>Let's talk</div>
          <h2 className="display">More patient care. <em>Less administrative burden.</em></h2>
          <p>Book a 30-minute discovery call. We'll audit your current operations and show you exactly where time and revenue are leaking — no pitch, no obligation.</p>
          <div className="actions">
            <Link href="/contact" className="btn btn-light">
              Book a discovery call
              <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-ghost" style={{ color: 'var(--paper)', borderColor: 'rgba(250,247,242,0.3)' }}>Request an RCM audit</Link>
          </div>
        </div>
      </section>
    </main>
  );
}