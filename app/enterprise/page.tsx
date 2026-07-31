import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Billing Staffing | Hired Billing Support',
  description: 'Support multi-location and enterprise billing teams with experienced specialists in AR, operations, and compliance.',
};

export default function enterprise() {
  return (
<section>
<div>
  {/* ════ HERO ════ */}
  <section className="ent-hero">
    <div className="ent-hero-mesh" />
    <div className="ent-hero-grid" />
    <div className="ent-hero-inner">
      <div className="ent-badge reveal reveal-1"><span className="ent-badge-dot" /> Enterprise Healthcare Operations</div>
      <h1 className="reveal reveal-2">Fourteen locations. Fourteen versions of the same workflow. <em>That is not a staffing problem. That is a systems problem.</em></h1>
      <p className="ent-hero-sub reveal reveal-3">You scaled the revenue. You never scaled the operations behind it. HBS becomes the backend execution layer your organization has been missing — billing, AR, denials, credentialing, coding, compliance, and reporting — inside your systems, across every location, at 70% less than expanding internal teams.</p>
      <div className="ent-hero-actions reveal reveal-4">
        <a href="/contact" className="btn btn-signal btn-lg">Explore enterprise support <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 5l7 7-7 7" /></svg></a>
        <a href="#capabilities" className="btn btn-ghost-enter btn-lg">See capabilities</a>
      </div>
    </div>
    {/* COMMAND CENTER */}
    <div className="cc-wrap reveal reveal-5">
      <div className="cc-frame">
        <div className="cc-bar">
          <div className="cc-bar-left"><div className="cc-dots"><i /><i /><i /></div><span className="cc-bar-title">Enterprise Operations · Live</span></div>
          <div className="cc-bar-right"><span className="cc-bar-pulse" /> HBS Active · 14 Locations</div>
        </div>
        <div className="cc-bento">
          <div className="cc-cell">
            <div className="cc-cell-label">Revenue Cycle</div>
            <div className="cc-big sig">96.4%</div>
            <div className="cc-unit">Net collection rate · all locations</div>
            <div style={{marginTop: 16}}>
              <div className="cc-row"><span className="cc-dot" style={{background: 'var(--signal)'}} /><span className="cc-rlabel">Clean claim rate</span><span className="cc-rval sig">97.8%</span></div>
              <div className="cc-row"><span className="cc-dot" style={{background: 'var(--amber)'}} /><span className="cc-rlabel">AR days (avg)</span><span className="cc-rval amb">28 days</span></div>
              <div className="cc-row"><span className="cc-dot" style={{background: 'var(--signal)'}} /><span className="cc-rlabel">Denials resolved / wk</span><span className="cc-rval sig">89</span></div>
            </div>
          </div>
          <div className="cc-cell">
            <div className="cc-cell-label">Active Queues</div>
            <div className="cc-row"><span className="cc-dot" style={{background: 'var(--signal)'}} /><span className="cc-rlabel">RCM — billing queue</span><span className="cc-rval sig">Current</span></div>
            <div className="cc-row"><span className="cc-dot" style={{background: 'var(--signal)'}} /><span className="cc-rlabel">AR follow-up — 30-60 day</span><span className="cc-rval sig">On track</span></div>
            <div className="cc-row"><span className="cc-dot" style={{background: 'var(--amber)'}} /><span className="cc-rlabel">Credentialing — re-attestation</span><span className="cc-rval amb">6 pending</span></div>
            <div className="cc-row"><span className="cc-dot" style={{background: 'var(--signal)'}} /><span className="cc-rlabel">Payer enrollment</span><span className="cc-rval sig">4 active</span></div>
            <div className="cc-row"><span className="cc-dot" style={{background: 'var(--signal)'}} /><span className="cc-rlabel">Coding audit — weekly</span><span className="cc-rval sig">Complete</span></div>
            <div className="cc-row"><span className="cc-dot" style={{background: 'var(--amber)'}} /><span className="cc-rlabel">Compliance review</span><span className="cc-rval amb">In progress</span></div>
          </div>
          <div className="cc-cell">
            <div className="cc-cell-label">Collection by Location</div>
            <div className="loc-row"><span className="loc-name">Main Campus</span><div className="loc-bar"><div className="loc-fill sig" style={{width: '97%'}} /></div><span className="loc-pct sig">97.1%</span></div>
            <div className="loc-row"><span className="loc-name">East Clinic</span><div className="loc-bar"><div className="loc-fill sig" style={{width: '96%'}} /></div><span className="loc-pct sig">96.2%</span></div>
            <div className="loc-row"><span className="loc-name">West Surgery</span><div className="loc-bar"><div className="loc-fill sig" style={{width: '95%'}} /></div><span className="loc-pct sig">95.4%</span></div>
            <div className="loc-row"><span className="loc-name">North Primary</span><div className="loc-bar"><div className="loc-fill amb" style={{width: '92%'}} /></div><span className="loc-pct amb">92.8%</span></div>
            <div className="loc-row"><span className="loc-name">South Specialty</span><div className="loc-bar"><div className="loc-fill sig" style={{width: '96%'}} /></div><span className="loc-pct sig">96.0%</span></div>
            <div className="loc-row"><span className="loc-name">Urgent Care Net</span><div className="loc-bar"><div className="loc-fill amb" style={{width: '91%'}} /></div><span className="loc-pct amb">91.3%</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* KPI TICKER BAR */}
  <div className="kpi-strip">
    <div className="kpi-track">
      <div className="kpi-stat"><div className="kpi-stat-num">97.8%</div><div className="kpi-stat-label">Clean claim rate</div></div>
      <div className="kpi-stat"><div className="kpi-stat-num">28d</div><div className="kpi-stat-label">Avg AR days</div></div>
      <div className="kpi-stat"><div className="kpi-stat-num">-40%</div><div className="kpi-stat-label">Denial recurrence</div></div>
      <div className="kpi-stat"><div className="kpi-stat-num">14d</div><div className="kpi-stat-label">Credentialing faster</div></div>
      <div className="kpi-stat"><div className="kpi-stat-num amb">70%</div><div className="kpi-stat-label">Cost reduction vs in-house</div></div>
    </div>
  </div>
  {/* ════ PRESSURE ════ */}
  <section className="ent-s ent-s--paper" id="pressure">
    <div className="container">
      <div className="sh fade-in">
        <div className="sh-eyebrow">The pressure nobody puts in the board deck</div>
        <h2 className="sh-title">Growth creates pressure long before <em>leadership sees it in the reports.</em></h2>
      </div>
      <div className="narrative fade-in">
        <p>Your organization added three locations in the last eighteen months. Revenue is up. Patient volume is up. The board is pleased.</p>
        <p>But inside operations, something different is happening. Each site runs billing slightly differently. Denial patterns repeat across locations without anyone connecting them. AR aging is growing at two sites, but the enterprise report averages it out. Credentialing for new providers is taking longer because nobody owns the full roster.</p>
        <p>You have more staff than two years ago. More software. More reporting tools. <strong>And the same problems persist — they just exist across more locations now.</strong></p>
        <div className="callout">More locations, more providers, and more payer rules do not just increase volume. They increase operational complexity.</div>
      </div>
      <div className="stat-row fade-in">
        <div className="stat-card"><div className="stat-card-num">4-8%</div><div className="stat-card-label">Revenue leakage across multi-site organizations from workflow gaps alone</div></div>
        <div className="stat-card"><div className="stat-card-num">45-120d</div><div className="stat-card-label">Credentialing delays per new provider when nobody owns the roster</div></div>
        <div className="stat-card"><div className="stat-card-num">$50-300k</div><div className="stat-card-label">AR sitting past 90 days across locations, hidden in enterprise averages</div></div>
      </div>
    </div>
  </section>
  {/* ════ WHAT BREAKS ════ */}
  <section className="ent-s ent-s--warm">
    <div className="container">
      <div className="sh fade-in">
        <div className="sh-eyebrow">What actually breaks at scale</div>
        <h2 className="sh-title">At enterprise scale, small workflow gaps become <em>expensive patterns.</em></h2>
      </div>
      <div className="narrative fade-in">
        <p>Enterprise healthcare teams do not fail from a single point of failure. They erode from dozens of small inconsistencies that compound across locations, providers, and departments.</p>
        <p><strong>Each location follows a slightly different billing process.</strong> Payer rules are interpreted differently by different teams. Denials repeat across sites but nobody connects the pattern. AR reports are reviewed but not acted on fast enough. Credentialing status becomes hard to track across the full provider roster. Leadership gets data — but not always insight.</p>
        <div className="callout">Enterprise healthcare teams do not need another disconnected vendor. They need a backend execution layer that can adapt to the way they already work.</div>
      </div>
    </div>
  </section>
  {/* ════ CAPABILITIES — BENTO ════ */}
  <section className="ent-s ent-s--paper" id="capabilities">
    <div className="container">
      <div className="sh fade-in">
        <div className="sh-eyebrow">Enterprise capabilities</div>
        <h2 className="sh-title">The full enterprise <em>operations stack.</em></h2>
        <p className="sh-sub">Activate one layer or hand us the entire backend. Every capability operates inside your existing systems.</p>
      </div>
      <div className="bento fade-in">
        <div className="bento-card bento-card--wide bento-card--dark">
          <span className="bento-tag bt-rcm">Enterprise RCM</span>
          <h4>Revenue cycle support standardized across every location and service line.</h4>
          <p>Charge capture review, CDT/CPT-coded claim submission, payment posting, and revenue reconciliation — with daily queue ownership and weekly reporting. One billing standard applied consistently.</p>
          <div className="outcome">→ Clean claim rate above 97%. Collections that match production.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-ar">AR Management</span>
          <h4>Every aging bucket worked at every location.</h4>
          <p>30, 60, 90, 120+ day AR. Location-level visibility. Payer-specific follow-up playbooks. AR days tracked per site.</p>
          <div className="outcome">→ AR days below 30. Location-level accountability.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-denial">Denial Management</span>
          <h4>Root-cause tracking across the enterprise.</h4>
          <p>Denial categorization by payer, reason, location, and provider. Standardized appeal workflows. Monthly prevention reports.</p>
          <div className="outcome">→ 40% reduction in repeated denial patterns.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-ar">Old AR Recovery</span>
          <h4>Legacy AR nobody has time to work.</h4>
          <p>90, 120, 180, 360+ day recovery campaigns. Segmented by collectibility. Most clients recover 30-50%.</p>
          <div className="outcome">→ Revenue recovered from untouched buckets.</div>
        </div>
        <div className="bento-card bento-card--tall">
          <span className="bento-tag bt-cred">Credentialing</span>
          <h4>Full provider roster credentialing lifecycle.</h4>
          <p>Initial applications, CAQH maintenance, re-attestation tracking, payer enrollment, hospital privileges. Full-roster dashboard. No credential ever lapses because someone forgot a deadline.</p>
          <div className="outcome">→ Providers billing sooner. Zero lapsed credentials.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-cred">Payer Enrollment</span>
          <h4>New payer applications tracked end-to-end.</h4>
          <p>Group and individual enrollment, NPI management, portal setup, and status tracking from submission to confirmation.</p>
          <div className="outcome">→ Faster payer activation across provider groups.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-code">Medical Coding</span>
          <h4>Coding consistency across providers.</h4>
          <p>CPT/ICD-10 review, E/M validation, modifier logic, specialty-specific coding, and documentation gap identification.</p>
          <div className="outcome">→ Cleaner claims. Fewer coding-related denials.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-code">Medical Auditing</span>
          <h4>Reduce audit risk enterprise-wide.</h4>
          <p>Prospective and retrospective chart audits. Provider education. Findings delivered in structured audit-ready reports.</p>
          <div className="outcome">→ Documented compliance posture.</div>
        </div>
        <div className="bento-card bento-card--wide">
          <span className="bento-tag bt-analytics">Analytics &amp; Reporting</span>
          <h4>Leadership sees performance variation — not just enterprise averages.</h4>
          <p>Location-level, department-level, and service-line-level KPI dashboards. Weekly operational snapshots. Monthly executive reports with root-cause analysis and strategic recommendations. Commentary — not just data.</p>
          <div className="outcome">→ Decisions based on insight, not assembled spreadsheets.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-comp">Compliance &amp; QA</span>
          <h4>Proactive monitoring, not reactive discovery.</h4>
          <p>Billing compliance, HIPAA adherence, payer rule tracking, QA scoring across all workflows, and corrective action documentation.</p>
          <div className="outcome">→ Audit-ready. Always.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-ops">Operations</span>
          <h4>Workflow ownership and daily execution.</h4>
          <p>Task queue management, cross-department coordination, escalation paths, operational cadence design, and handoff rules.</p>
          <div className="outcome">→ Structured operations. Clear accountability.</div>
        </div>
        <div className="bento-card">
          <span className="bento-tag bt-payer">Payer &amp; Backend</span>
          <h4>Faster payer resolution and follow-through.</h4>
          <p>Payer follow-up, authorization requests, benefit verification, fee schedule review, and contract compliance monitoring.</p>
          <div className="outcome">→ Average claim resolution 50% faster.</div>
        </div>
      </div>
    </div>
  </section>
  {/* ════ OPERATING MODEL — glass cards on dark ════ */}
  <section className="ent-s ent-s--dark" id="model">
    <div className="container">
      <div className="sh fade-in">
        <div className="sh-eyebrow">How we integrate</div>
        <h2 className="sh-title">Structured integration. <em>Not a disconnected handoff.</em></h2>
        <p className="sh-sub">We run a structured process that maps to how your organization operates — then we stay inside the workflow permanently.</p>
      </div>
      <div className="glass-grid fade-in">
        <div className="glass-card"><div className="gc-num">01</div><h4>Workflow discovery</h4><p>We assess current-state workflows across locations, departments, and service lines. Billing, AR, denials, credentialing, reporting — the full picture before we recommend anything.</p></div>
        <div className="glass-card"><div className="gc-num">02</div><h4>SOP alignment</h4><p>We align with your existing SOPs where they work. We recommend standardization where variation is creating performance gaps. Nothing changes without leadership approval.</p></div>
        <div className="glass-card"><div className="gc-num">03</div><h4>System integration</h4><p>We access your EHR, PM system, clearinghouse, credentialing platform, and payer portals. Role-based permissions. Audit trails. Full HIPAA compliance with BAA.</p></div>
        <div className="glass-card"><div className="gc-num">04</div><h4>Team assignment</h4><p>Named specialists assigned to your organization. Each person owns specific queues. Billing, AR, denials, credentialing, coding — every queue has a name attached.</p></div>
        <div className="glass-card"><div className="gc-num">05</div><h4>Communication rhythm</h4><p>Daily Slack or Teams updates. Weekly operational reviews. Monthly executive reporting. Escalation paths defined for every workflow. You always know what is happening.</p></div>
        <div className="glass-card"><div className="gc-num">06</div><h4>Continuous improvement</h4><p>QA scoring on every workflow. Error trends tracked. Process improvements recommended quarterly. The system gets better — it does not plateau after onboarding.</p></div>
      </div>
    </div>
  </section>
  {/* ════ AI + HUMAN ════ */}
  <section className="ent-s ent-s--dark-flat">
    <div className="container">
      <div className="sh fade-in">
        <div className="sh-eyebrow">Execution model</div>
        <h2 className="sh-title">AI supports the repetitive work. <em>Humans handle the judgment.</em></h2>
        <p className="sh-sub">At enterprise scale, you need both speed and reasoning. AI handles throughput. Humans handle every decision that matters.</p>
      </div>
      <div className="ai-panels fade-in">
        <div className="ai-panel ai-panel--machine">
          <div className="ai-panel-label">AI-assisted workflows</div>
          <div className="ai-list">
            <div className="ai-row"><div className="ai-dot" /><p>Enterprise-wide queue monitoring and priority routing</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Claim scrubbing against payer rules before submission</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Denial pattern detection by payer, reason, location, provider</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Credentialing deadline monitoring and re-attestation alerts</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>AR aging threshold alerts by location</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>KPI dashboard generation and trend calculation</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Compliance pattern detection and risk flagging</p></div>
          </div>
        </div>
        <div className="ai-panel ai-panel--human">
          <div className="ai-panel-label">Human specialists</div>
          <div className="ai-list">
            <div className="ai-row"><div className="ai-dot" /><p>Payer communication — appeals, escalations, resolution calls</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Denial root-cause analysis and prevention recommendations</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Coding and documentation judgment — E/M, modifiers, specialty</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Credentialing follow-up and enrollment coordination</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>AR recovery decisions — push, appeal, or write off</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Executive reporting with commentary and strategy</p></div>
            <div className="ai-row"><div className="ai-dot" /><p>Operational escalation and client-specific execution</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ════ OUTCOMES — horizontal scroll ════ */}
  <section className="ent-s ent-s--gradient" id="outcomes">
    <div className="container">
      <div className="sh fade-in">
        <div className="sh-eyebrow">What changes</div>
        <h2 className="sh-title">Measurable improvement across <em>enterprise operations.</em></h2>
      </div>
    </div>
    <div className="container">
      <div className="outcome-scroll fade-in">
        <div className="outcome-tile"><div className="ot-icon">↓</div><h4>Operational backlog cleared</h4><p>Billing queues, AR follow-up, credentialing, and denials processed on schedule — not when someone finds time.</p></div>
        <div className="outcome-tile"><div className="ot-icon">28d</div><h4>AR days across locations</h4><p>Enterprise average below 30 within 90 days. Location-level accountability so no single site drags the number.</p></div>
        <div className="outcome-tile"><div className="ot-icon">-40%</div><h4>Denial recurrence</h4><p>Root-cause tracking and standardized workflows reduce the same denials from repeating month after month.</p></div>
        <div className="outcome-tile"><div className="ot-icon">97%</div><h4>First-pass clean claims</h4><p>Scrubbed against payer rules. Coding validated. Attachments included. Fewer rejections. Faster payments.</p></div>
        <div className="outcome-tile"><div className="ot-icon">14d</div><h4>Credentialing faster</h4><p>Average reduction in turnaround — from application to enrollment confirmation.</p></div>
        <div className="outcome-tile"><div className="ot-icon">4-8%</div><h4>Revenue leakage recovered</h4><p>Revenue that was leaking through workflow gaps, unworked AR, and credentialing delays — recovered.</p></div>
      </div>
    </div>
  </section>
  {/* ════ USE CASES — stacked wide cards ════ */}
  <section className="ent-s ent-s--paper">
    <div className="container">
      <div className="sh fade-in">
        <div className="sh-eyebrow">Enterprise use cases</div>
        <h2 className="sh-title">How enterprise teams use <em>HBS today.</em></h2>
      </div>
      <div className="uc-stack fade-in">
        <div className="uc-card"><div className="uc-card-left"><span className="uc-card-tag">AR Recovery</span><h4>Reduce AR backlog across 12 locations</h4></div><div className="uc-card-right"><p>$240k in 90+ day AR. HBS worked every aging bucket per location. AR days dropped from 52 to 27 in 90 days. Ongoing maintenance keeps 90+ day buckets below $15k.</p></div></div>
        <div className="uc-card"><div className="uc-card-left"><span className="uc-card-tag">Denials</span><h4>Standardize denial workflows</h4></div><div className="uc-card-right"><p>A health system with five departments running different denial processes. HBS implemented unified categorization and appeal workflows. Denial recurrence dropped 38% in 120 days.</p></div></div>
        <div className="uc-card"><div className="uc-card-left"><span className="uc-card-tag">Credentialing</span><h4>Support 80+ provider roster</h4></div><div className="uc-card-right"><p>An MSO adding 15 new providers per quarter. HBS manages full lifecycle — CAQH, payer enrollment, re-attestation. Average time-to-bill reduced by 21 days per provider.</p></div></div>
        <div className="uc-card"><div className="uc-card-left"><span className="uc-card-tag">Backend</span><h4>Add processing capacity in 14 days</h4></div><div className="uc-card-right"><p>A specialty group whose billing team was 30% behind on claims. HBS onboarded a 6-person team. Queue cleared in 21 days. Clean claim rate rose to 97.4%.</p></div></div>
        <div className="uc-card"><div className="uc-card-left"><span className="uc-card-tag">Old AR</span><h4>Recover $187k from legacy AR</h4></div><div className="uc-card-right"><p>A DSO with 180+ day AR across eight practices. HBS ran structured recovery. $187k recovered in 60 days. Ongoing maintenance keeps aging below $20k per practice.</p></div></div>
      </div>
    </div>
  </section>
  {/* ════ WHO IS THIS FOR — pill cloud ════ */}
  <section className="ent-s ent-s--warm">
    <div className="container">
      <div className="sh fade-in">
        <div className="sh-eyebrow">Who this is for</div>
        <h2 className="sh-title">Built for organizations that have outgrown <em>their operational infrastructure.</em></h2>
      </div>
      <div className="audience-cloud fade-in">
        <span className="aud-pill">Health Systems</span>
        <span className="aud-pill">Enterprise Medical Groups</span>
        <span className="aud-pill">Multi-Location Practices</span>
        <span className="aud-pill">MSOs</span>
        <span className="aud-pill">DSOs</span>
        <span className="aud-pill">FQHC Networks</span>
        <span className="aud-pill">Specialty Groups</span>
        <span className="aud-pill">Healthcare Platforms</span>
        <span className="aud-pill">Payer Operations</span>
        <span className="aud-pill">Labs &amp; Imaging Networks</span>
        <span className="aud-pill">Member-Centric Care</span>
        <span className="aud-pill">50+ Provider Organizations</span>
      </div>
    </div>
  </section>
</div>
<section className="block" id="faq">
  <div className="container">
    <div
      className="block-head fade-in"
      style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="eyebrow">Common questions</div>
      <h2 className="display">
        Questions enterprise teams <em>ask us.</em>
      </h2>
    </div>

    <div className="faq-list fade-in">
      {[
        {
          summary:
            "How does HBS integrate with our existing EHR and billing systems?",
          body:
            "We work inside your existing systems — EHR, practice management, clearinghouse, credentialing tools, and payer portals. Role-based access. Audit trails. No new portals, no exports, no separate platforms.",
        },
        {
          summary:
            "Can HBS support operations across multiple locations simultaneously?",
          body:
            "Yes. Our model is built for multi-location, multi-department enterprises. We standardize workflows across sites while maintaining location-level visibility. Current clients range from 5 to 40+ locations.",
        },
        {
          summary: "How does denial management work at enterprise scale?",
          body:
            "Denials categorized by payer, reason, location, and provider. Root-cause patterns tracked enterprise-wide. Appeals standardized. Monthly reports show trends and upstream prevention recommendations.",
        },
        {
          summary:
            "Does HBS handle credentialing for large provider rosters?",
          body:
            "Full lifecycle — initial applications, CAQH maintenance, payer enrollment, re-attestation, hospital privileges. Current clients include organizations with 80+ providers under active management.",
        },
        {
          summary: "How does the AI + human model work in practice?",
          body:
            "AI handles queue monitoring, claim scrubbing, denial detection, deadline tracking, and reporting automation. Humans handle payer calls, appeal narratives, coding judgment, credentialing follow-up, and every operational decision that requires reasoning.",
        },
        {
          summary: "What reporting does leadership receive?",
          body:
            "Weekly operational snapshots. Monthly executive reports with location-level KPIs, denial trends, credentialing status, compliance posture, and strategic recommendations. Commentary included — not just data.",
        },
        {
          summary:
            "How quickly can HBS onboard an enterprise engagement?",
          body:
            "14–21 business days. Workflow discovery, SOP alignment, system access, team assignment, and initial queue ownership. Phased onboarding available for very large organizations.",
        },
        {
          summary: "Is HBS HIPAA compliant at enterprise level?",
          body:
            "Full HIPAA compliance. BAA on every engagement. Role-based access. Audit trails. HIPAA-trained team. No patient data stored outside client systems. Enterprise security review available.",
        },
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
    <div className="final-cta-glow" />
    <div className="cta-inner">
      <div className="eyebrow" style={{justifyContent: 'center', color: 'rgba(250,247,242,0.55)'}}>Start with an operations review
      </div>
      <h2 className="display">Send us your AR aging and denial summary.  <em>We will show you where the gaps are.</em></h2>
      <p>Within 10 business days, we deliver a free enterprise operations assessment — where revenue is leaking, which workflows need standardization, and what a scalable support model looks like for your organization.</p>
      <div className="actions">
        <a href="/contact" className="btn btn-light">Book a discovery call
          <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <a href="/contact" className="btn btn-ghost" style={{color: 'var(--paper)', borderColor: 'rgba(250,247,242,0.3)'}} id="audit">Request a free dental audit</a>
      </div>
      <div className="trust-line">HIPAA · BAA · SOC 2 · No long-term contract required</div>
    </div>
  </section>

</section>


  );
}
