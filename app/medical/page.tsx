import Link from 'next/link';

export const metadata = {
  title: 'Medical Staffing Services | Hired Billing Support',
  description: 'Find medical staffing support for assistants, scribes, reception, and patient coordination roles.',
};

export default function medical() {
  return (
 <section>
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
    <div className="hero-inner">
      <div>
        <div className="eyebrow reveal reveal-1">For primary care, urgent care &amp; specialty practices</div>
        <h1 className="display reveal reveal-2">It's 9:47 PM and you're still in the EHR. <em><span className="ul">Again</span>.</em></h1>
        <p className="sub reveal reveal-3" >The clinic closed five hours ago. The kids are asleep. You're not catching up on
          charts because you love medicine. You're catching up because there was no other time today  and there won't
          be tomorrow either.</p>
        <p className="lede reveal reveal-3 " >Hired Billing Support is the remote team that takes back the operational layer
          of your practice. RCM, prior auths, AR follow-up, charting support, message triage, insurance verification 
          all inside your EHR, working like your in-house team.</p>
        <div className="hero-actions reveal reveal-4">
          <a href="/contact" className="btn btn-primary">Contact Us <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg></a>
          {/* <a href="#cta" className="btn btn-text">Get a free RCM audit →</a> */}
        </div>
      </div>
      <div className="reveal reveal-4" style={{animationDelay: '.55s'}}>
        <div className="hero-card">
          <h4>— Provider inbox · Monday 9:47 PM</h4>
          <div className="inbox-row"><span>Unread patient messages</span><span className="cnt red">127</span></div>
          <div className="inbox-row"><span>Refill requests pending</span><span className="cnt amber">34</span></div>
          <div className="inbox-row"><span>Prior auths in draft</span><span className="cnt amber">11</span></div>
          <div className="inbox-row"><span>Lab results to review</span><span className="cnt amber">22</span></div>
          <div className="inbox-row"><span>Denied claims unfiled</span><span className="cnt red">18</span></div>
          <div className="inbox-row"><span>Charts to close from today</span><span className="cnt red">9</span></div>
          <div className="card-divider" />
          <div className="inbox-row"><span>Tomorrow's schedule verified</span><span className="cnt green">0 of 24</span></div>
          <div className="time-pill"><span className="live-dot-pill" /> You've been in the EHR for 1 hr 23 min</div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ MONOLOGUE / PAIN ═══ */}
  <section className="block" id="pain">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The evening every physician knows</div>
        <h2 className="display">You already know how this <em>goes.</em></h2>
      </div>
      <div className="monologue fade-in">
        <p>You opened the laptop at 9 PM thinking it'd take 30 minutes. It's been an hour.</p>
        <p>You still haven't responded to the patient asking about her labs. The prior auth for Mrs. Johnson's MRI is
          sitting in a draft, half-finished — you needed five more minutes with her chart and you didn't have it. There
          are seven medication refills in your inbox. Three messages from the front desk. Two from your MA. One from a
          payer about a denied claim you didn't even know was denied.</p>
        <p>You'll get to it tomorrow. Except tomorrow has 24 patients on the schedule, three new starts, and a
          peer-to-peer at lunch.</p>
        <p><em>You went to medical school. You didn't go to admin school.</em></p>
      </div>
      <div className="pain-ledger fade-in">
        <div className="pain-row">
          <div className="pn">01</div>
          <div className="ptitle">You're charting after hours.</div>
          <div className="pdesc">The average PCP spends nearly 2 hours on the EHR for every hour of patient care. Your
            evenings aren't yours anymore.</div>
          <div className="pstat">2 hrs/day lost</div>
        </div>
        <div className="pain-row">
          <div className="pn">02</div>
          <div className="ptitle">Prior auths are eating your day.</div>
          <div className="pdesc">Each prior auth takes 16-23 minutes of staff time. You do 30+ a week. That's a full-time
            person buried in hold music.</div>
          <div className="pstat">~10 hrs/week</div>
        </div>
        <div className="pain-row">
          <div className="pn">03</div>
          <div className="ptitle">Claim denials keep climbing.</div>
          <div className="pdesc">The national denial rate is creeping toward 17%. Most of yours are recoverable — if someone
            actually worked them.</div>
          <div className="pstat">~17% denied</div>
        </div>
        <div className="pain-row">
          <div className="pn">04</div>
          <div className="ptitle">Your MA is doing too much.</div>
          <div className="pdesc">She's rooming patients, calling pharmacies, triaging messages, scrubbing claims, and
            verifying insurance. She's about to quit. You know it.</div>
          <div className="pstat">burnout risk</div>
        </div>
        <div className="pain-row">
          <div className="pn">05</div>
          <div className="ptitle">Coding errors are quietly costing you.</div>
          <div className="pdesc">Wrong modifier. Wrong place-of-service. Wrong level. Each error is $40-$200 in lost revenue
            — multiplied by every un-audited claim.</div>
          <div className="pstat">$40-200/claim</div>
        </div>
        <div className="pain-row">
          <div className="pn">06</div>
          <div className="ptitle">Hiring is broken.</div>
          <div className="pdesc">You posted for a biller in March. Filled it in June. Trained until November. They left in
            February. You're hiring again.</div>
          <div className="pstat">14-mo tenure</div>
        </div>
        <div className="pain-row">
          <div className="pn">07</div>
          <div className="ptitle">You're not "burned out." You're always behind.</div>
          <div className="pdesc">You don't need yoga. You don't need a wellness app. You need 20 hours of administrative
            time off your plate every week.</div>
          <div className="pstat">20 hrs/week</div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ BEHIND THE SCENES ═══ */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What's actually happening behind the scenes</div>
        <h2 className="display">You don't need a better EHR. <em>You need an operational layer.</em></h2>
      </div>
      <div className="bts-data fade-in">
        <div className="lhs">
          <p>You think you have a scheduling problem. You think you need to see fewer patients. You think you need a
            better EHR.</p>
          <p>You don't. <strong>You have an operational layer that hasn't kept up with the practice you've
              built.</strong> Every system is running at 110% of capacity. When something slips, everything slips.</p>
          <p>Here's what it looks like inside a typical 3-provider practice:</p>
        </div>
        <ul className="bts-list">
          <li><span>Provider time lost to EHR and admin per day</span><span className="stat">~2 hours</span></li>
          <li><span>Claims denied on first pass</span><span className="stat">8-12%</span></li>
          <li><span>Recoverable AR sitting past 90 days</span><span className="stat">$80-140k</span></li>
          <li><span>Prior auths per week × avg minutes each</span><span className="stat">40+ × 14 min</span></li>
          <li><span>Staff time consumed by verification &amp; calls</span><span className="stat">22-32%</span></li>
          <li><span>Annual admin-role turnover</span><span className="stat">~30%</span></li>
        </ul>
      </div>
      <div className="insight fade-in" style={{marginTop: 48}}>That's not a staffing budget problem. <em>That's an
          operational design problem.</em></div>
    </div>
  </section>
  {/* ═══ SOLUTION ═══ */}
  <section className="block" id="solution">
    <div className="container">
      <div className="solution-card fade-in">
        <div className="solution-glow" />
        <div className="eyebrow" style={{color: 'var(--signal)'}}>— Our model</div>
        <h2 className="display" style={{marginTop: 20}}>We're the operational layer <em>your practice has been
            missing.</em></h2>
        <p>Hired Billing Support gives you a healthcare-trained remote team that lives inside your EHR — Athena, eCW,
          Kareo, AdvancedMD, NextGen, DrChrono, Epic, Cerner — and runs the work that's drowning your in-house staff.
        </p>
        <p>You'll have named team members. They'll learn your providers, your payers, your specialty workflows, your
          patients. They'll feel like staff. Because in every operational sense — they are.</p>
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--paper)', marginTop: 32, maxWidth: 680}}>
          The difference: you didn't have to hire them, train them for six months, or replace them when they leave for a
          $5 raise across town.</p>
      </div>
    </div>
  </section>
  {/* ═══ SERVICES ═══ */}
  <section className="block warm" >
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What we run for your practice</div>
        <h2 className="display">The full operational <em>stack.</em></h2>
        <p>Pick the layers you need. Run one service, or hand us the entire back office. Every engagement shaped around
          your specialty, EHR, and growth stage.</p>
      </div>
      <div className="svc-grid fade-in">
        <div className="svc-card">
          <h4>Revenue Cycle Management</h4>
          <p>End-to-end ownership — coding, claim submission, AR, denials, appeals, payment posting, patient billing.
            One team, one scorecard.</p>
        </div>
        <div className="svc-card">
          <h4>Prior Authorization</h4>
          <p>Pre-cert submission, payer follow-up, peer-to-peer prep, status tracking. We shorten time-to-approval and
            stop auths from delaying care.</p>
        </div>
        <div className="svc-card">
          <h4>AR Follow-Up</h4>
          <p>Every aging bucket worked. Payer calls, status checks, re-submissions, appeals. Most clients see AR days
            drop below 30 in the first quarter.</p>
        </div>
        <div className="svc-card">
          <h4>Denial Management</h4>
          <p>Every denial categorized, prioritized, and appealed by a specialist who knows the payer rules. Higher
            overturn rates. Less staff time.</p>
        </div>
        <div className="svc-card">
          <h4>Insurance Verification</h4>
          <p>Real-time benefits checks before the patient walks in. Co-pays, deductibles, coverage limits — documented
            in the chart before rooming.</p>
        </div>
        <div className="svc-card">
          <h4>Virtual Medical Assistant</h4>
          <p>Charting support, message triage, refill management, referrals, lab follow-up. A clinical extension that's
            quiet, accurate, always there.</p>
        </div>
        <div className="svc-card">
          <h4>Front Desk Support</h4>
          <p>Phones answered. Scheduling managed. Recall worked. New patients onboarded. Virtual coverage or full
            takeover — your call.</p>
        </div>
        <div className="svc-card">
          <h4>Coding Audit &amp; Review</h4>
          <p>Quarterly accuracy review. We catch under-coding, missed modifiers, level mismatches quietly leaving money
            on the table.</p>
        </div>
        <div className="svc-card">
          <h4>Healthcare Ops Management</h4>
          <p>For larger practices: an operations lead embedded in your team. Workflows, dashboards, vendor management.
            The COO-layer you don't have yet.</p>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ HOW WE WORK ═══ */}
  <section className="block">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">How we work</div>
        <h2 className="display">We adapt to your process. <em>Not the other way around.</em></h2>
      </div>
      <div className="steps fade-in">
        <div className="step"><span className="num">— 01</span>
          <h4>We log into your EHR.</h4>
          <p>Athena, eCW, Kareo, AdvancedMD, DrChrono, NextGen, Epic, Cerner. Whatever you use, that's where we work. No
            exports. No portals.</p>
        </div>
        <div className="step"><span className="num">— 02</span>
          <h4>We follow your SOPs.</h4>
          <p>Your protocols, payer contracts, specialty quirks. We plug into how your practice actually runs — not the
            other way around.</p>
        </div>
        <div className="step"><span className="num">— 03</span>
          <h4>We report to you.</h4>
          <p>Daily communication on your channel — Slack, Teams, email, phone. Weekly KPIs. Monthly working session.</p>
        </div>
        <div className="step"><span className="num">— 04</span>
          <h4>We use your tools.</h4>
          <p>Your phone system, secure messaging, patient communication platform. To your patients, we are your
            practice.</p>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ AI + HUMAN ═══ */}
  <section className="block dark">
    <div className="container">
      <div className="aihum fade-in">
        <div>
          <div className="eyebrow">The AI + human advantage</div>
          <h2 className="display" style={{marginTop: 20}}>AI handles the repetition. <em>Humans handle the judgment.</em>
          </h2>
          <p>Eligibility checks, claim scrubbing, denial categorization, appointment reminders — automated. Fast,
            accurate, never tired.</p>
          <p>Payer escalations, complex appeals, peer-to-peer prep, patient conversations about balances — those go to a
            trained human every time.</p>
          <p>You don't want an AI agent calling United about a $4,200 denied claim. You don't want a chatbot explaining
            a balance to a worried patient. You want speed where speed wins, and a real person where it actually
            matters.</p>
          <p style={{color: 'var(--paper)', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: 20, marginTop: 24}}>
            That's the model. Boring to describe. Powerful to run.</p>
        </div>
        <div className="ledger">
          <div className="ledger-row head">
            <div className="ai">— AI handles</div>
            <div className="hu">— Humans handle</div>
          </div>
          <div className="ledger-row">
            <div className="item ai">Eligibility checks <span>automated in seconds</span></div>
            <div className="item hu">Payer escalations <span>specialist-led calls</span></div>
          </div>
          <div className="ledger-row">
            <div className="item ai">Claim scrubbing <span>payer-rule validated</span></div>
            <div className="item hu">Complex appeals <span>narrative, evidence-based</span></div>
          </div>
          <div className="ledger-row">
            <div className="item ai">Denial categorization <span>auto-triaged, routed</span></div>
            <div className="item hu">Peer-to-peer prep <span>chart review, talking points</span></div>
          </div>
          <div className="ledger-row">
            <div className="item ai">Appointment reminders <span>automated cadence</span></div>
            <div className="item hu">Patient balance calls <span>empathy, clarity, tone</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ RESULTS ═══ */}
  <section className="block" id="results">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">By the numbers</div>
        <h2 className="display">What changes in the <em>first 90 days.</em></h2>
        <p>Drawn from active clients across primary care, urgent care, behavioral health, cardiology, ortho, and
          multi-specialty groups.</p>
      </div>
      <div className="results-row fade-in">
        <div className="result-block">
          <div className="v">+27<span className="unit">%</span></div>
          <div className="d">Average monthly collections lift across medical clients.</div>
        </div>
        <div className="result-block">
          <div className="v">22<span className="unit">d</span></div>
          <div className="d">AR days — down from a 47-day average baseline.</div>
        </div>
        <div className="result-block">
          <div className="v">98<span className="unit">%</span></div>
          <div className="d">First-pass clean-claim rate across all specialties.</div>
        </div>
        <div className="result-block">
          <div className="v">2<span className="unit">+hrs</span></div>
          <div className="d">Returned to the provider — per day. Charts done before dinner.</div>
        </div>
      </div>
      <div className="testi fade-in">
        <div className="testi-quote">
          Remote staffing solution by HBS has freed the resources of the HBS, enabling us to spend more time at the
          bedside and enhance the efficiency of the whole process.
        </div>
        <div className="testi-attr">
          <div className="testi-avatar">AF</div>
          <div>
            <div className="testi-name">Dr Afreen Sheikh</div>
            <div className="testi-role">Internal Medicine</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ COMPARE ═══ */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The honest comparison</div>
        <h2 className="display">Why not just hire another biller, MA, <em>or office manager?</em></h2>
        <p>You've done the math before. Let's do it again with the actual numbers.</p>
      </div>
      <div className="compare fade-in">
        <div className="compare-row-old head">
          <div className="col left">In-house hire (biller / MA)</div>
          <div className="col right">Embedded HBS team</div>
        </div>
        <div className="compare-row-old">
          <div className="col left">$52,000–$78,000 salary</div>
          <div className="col right">Percentage of collections OR per-seat monthly</div>
        </div>
        <div className="compare-row-old">
          <div className="col left">+ benefits, PTO, payroll tax, training</div>
          <div className="col right">No benefits, no PTO gaps, no taxes</div>
        </div>
        <div className="compare-row-old">
          <div className="col left">4–9 months to fill the seat</div>
          <div className="col right">Live in 10–14 business days</div>
        </div>
        <div className="compare-row-old">
          <div className="col left">6 months to actually train</div>
          <div className="col right">Pre-trained in your EHR and specialty</div>
        </div>
        <div className="compare-row-old">
          <div className="col left">Single point of failure</div>
          <div className="col right">Cross-covered — billing, AR, prior auth, VA</div>
        </div>
        <div className="compare-row-old">
          <div className="col left">14-month average tenure in admin roles</div>
          <div className="col right">No turnover risk to your practice</div>
        </div>
        <div className="compare-row-old">
          <div className="col left">You bear the management burden</div>
          <div className="col right">They report to you. We manage them.</div>
        </div>
      </div>
      <div className="insight fade-in">And the cost nobody adds to the spreadsheet: <em>your time recruiting, interviewing,
          onboarding, and re-hiring.</em> That's the most expensive line item — because it comes out of your evenings.
      </div>
    </div>
  </section>
  {/* ═══ FINAL CTA ═══ */}
  <section className="final-cta" id="cta">
    <div className="final-cta-glow" />
    <div className="cta-inner">
      <div className="eyebrow" style={{justifyContent: 'center', color: 'rgba(250,247,242,.55)'}}>Let's look at the actual numbers
      </div>
      <h2 className="display">Send us a denial report. <em>We'll show you what's recoverable.</em></h2>
      <p>Send us a recent AR aging summary and a denial report. Within 5 business days, we'll come back with a free RCM
        audit showing exactly where revenue is leaking — and what we'd do about it. If the audit shows you're already
        running clean, we'll say so.</p>
      <div className="actions">
        <a href="/contact" className="btn btn-light">Book a discovery call <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></a>
        <a href="/contact" className="btn btn-ghost" style={{color: 'var(--paper)', borderColor: 'rgba(250,247,242,.3)'}}>Request a free
          RCM audit</a>
      </div>
      <div className="trust-line">HIPAA compliant · BAA on every engagement · No long-term contract</div>
    </div>
  </section>
</section>

  );
}
