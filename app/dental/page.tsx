import Link from 'next/link';
import TestimonialCarousel from './TestimonialCarousel';

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

export const metadata = {
  title: 'Dental Staffing Services | Hired Billing Support',
  description: 'Explore dental staffing support for assistants, coordinators, front office teams, and practice operations.',
};

export default function dental() {
  return (
 <section>
 <div>
 <section className="hero">
  <div className="hero-bg">
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width={48} height={48} patternUnits="userSpaceOnUse">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="#0A1628"
            strokeWidth="0.5"
            opacity="0.08"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    <div className="hero-grain" />
  </div>

  <div className="hero-inner">

    {/* LEFT SIDE */}

    <div className="reveal reveal-2">

      {/* <span className="tag">
        Style B — Pull Stat
      </span> */}

      <div className="eyebrow">
        For dental practices, DSOs &amp; cosmetic dentists
      </div>

      <h1 className="hero-title">
        Production looks strong on paper.
        <em> Collections never tell the same story.</em>
      </h1>

      <p className="hero-description">
        Missed calls, unverified insurance, aging claims, and treatment
        follow-up gaps cost dental practices thousands every month.
      </p>

      <div className="stat-section">

        <div className="stat-box">
          <div className="stat-number">70%</div>
          <div className="stat-label">LESS COST</div>
        </div>

        <div className="stat-content">

          <p className="stat-description">
            HBS gives you an embedded operations team—calls, billing,
            insurance verification, RCM, and admin support—at
            70% less than hiring in-house staff.
          </p>

          <p className="stat-subtext">
            Insurance verification, claims, AR follow-up,
            write-off recovery, front desk relief—all inside your PMS,
            working like your in-house team.
          </p>

        </div>

      </div>

      <div className="cta-wrapper">
        <a href="/contact" className="cta">
          Contact Us

          <svg
            className="arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>

        </a>
      </div>

    </div>

    {/* RIGHT SIDE (UNCHANGED) */}

    <div
      className="industry-hero-visual reveal reveal-4"
      style={{ animationDelay: ".55s" }}
    >

      <div className="industry-dashboard">

        <div className="dash-header">
          <div className="dash-header-label">
            — Dental Operations · Live Dashboard
          </div>

          <div className="dash-main-row">
            <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
              <span className="dash-big">94.8%</span>
              <span className="dash-unit">collection rate</span>
            </div>

            <span className="dash-trend">
              <span className="dash-trend-dot" />
              ↑ 2.3% this month
            </span>
          </div>

          <div className="dash-header-sub">
            Updated today · Multi-Location DSO Dashboard
          </div>
        </div>

        <div className="dash-body">

          <div className="dash-grid">

            <div className="dash-metric">
              <div className="dash-m-label">Calls Answered</div>
              <div className="dash-m-value sig">97.2%</div>

              <div className="dash-spark">
                <div
                  className="dash-spark-fill spark-sig"
                  style={{ width: "97%" }}
                />
              </div>
            </div>

            <div className="dash-metric">
              <div className="dash-m-label">Insurance Verified</div>
              <div className="dash-m-value sig">48hr ahead</div>

              <div className="dash-spark">
                <div
                  className="dash-spark-fill spark-sig"
                  style={{ width: "92%" }}
                />
              </div>
            </div>

            <div className="dash-metric">
              <div className="dash-m-label">Clean Claim Rate</div>
              <div className="dash-m-value sig">98.1%</div>

              <div className="dash-spark">
                <div
                  className="dash-spark-fill spark-sig"
                  style={{ width: "98%" }}
                />
              </div>
            </div>

            <div className="dash-metric">
              <div className="dash-m-label">AR Days</div>
              <div className="dash-m-value amb">24 days</div>

              <div className="dash-spark">
                <div
                  className="dash-spark-fill spark-amb"
                  style={{ width: "65%" }}
                />
              </div>
            </div>

          </div>

        </div>

        <div className="dash-queue">

          <div className="dash-queue-title">
            — Active Dental Queues
          </div>

          <div className="dash-queue-row">
            <div
              className="dash-q-dot"
              style={{ background: "var(--signal)" }}
            />
            <div className="dash-q-label">Inbound call queue</div>
            <div className="dash-q-badge badge-ok">
              Live · 0 waiting
            </div>
          </div>

          <div className="dash-queue-row">
            <div
              className="dash-q-dot"
              style={{ background: "var(--signal)" }}
            />
            <div className="dash-q-label">
              Insurance verification — tomorrow's patients
            </div>
            <div className="dash-q-badge badge-ok">
              18/18 done
            </div>
          </div>

          <div className="dash-queue-row">
            <div
              className="dash-q-dot"
              style={{ background: "var(--amber)" }}
            />
            <div className="dash-q-label">
              Outbound recall — hygiene reactivation
            </div>
            <div className="dash-q-badge badge-warn">
              12 remaining
            </div>
          </div>

          <div className="dash-queue-row">
            <div
              className="dash-q-dot"
              style={{ background: "var(--signal)" }}
            />
            <div className="dash-q-label">
              Claims submitted today
            </div>
            <div className="dash-q-badge badge-ok">
              34 clean
            </div>
          </div>

          <div className="dash-queue-row">
            <div
              className="dash-q-dot"
              style={{ background: "var(--amber)" }}
            />
            <div className="dash-q-label">
              AR follow-up — 30-60 day bucket
            </div>
            <div className="dash-q-badge badge-warn">
              8 in progress
            </div>
          </div>

        </div>

        <div className="dash-footer">

          <div className="dash-footer-pill">
            <span className="dash-footer-pulse" />
            HBS team active
          </div>

          <div className="dash-footer-right">
            Open Dental · 3 providers
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
  <div className="trust-strip">
  {/* DENTAL PRACTICE CLIENT LOGO SLIDER */}
  <div className="logo-strip reveal reveal-4" style={{animationDelay: '.7s'}}>

    <div className="logo-track">
      {/* Set 1 */}
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C8.5 0 5 3.5 5 7c0 2.5 1 4.5 2.5 6C5.5 15 4 18 4 22c0 6 4 10 10 10s10-4 10-10c0-4-1.5-7-3.5-9C22 11.5 23 9.5 23 7c0-3.5-3.5-7-9-7zm-2 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" /></svg></div>
        <div className="l-name"><span className="l-primary--spaced">Parkview</span><span className="l-sub">Dental Group</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><polygon points="15,2 28,10 28,22 15,28 2,22 2,10" /></svg></div>
        <div className="l-name"><span className="l-primary">Midtown Smile</span><span className="l-sub">Studio NYC</span></div>
      </div>
      <div className="logo-item">
        <div className="l-name"><span className="l-primary--serif">CoastalDentist</span><span className="l-sub">.com</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg"><path d="M14 2c-4 0-7 2.8-7 6.2 0 2 .8 3.8 2.2 5.2-1.6 1.8-2.8 4.4-2.8 7.6 0 5.2 3.4 9 7.6 9s7.6-3.8 7.6-9c0-3.2-1.2-5.8-2.8-7.6C20.2 12 21 10.2 21 8.2 21 4.8 18 2 14 2z" /></svg></div>
        <div className="l-name"><span className="l-primary">Summit Dental</span><span className="l-sub">Partners</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg"><path d="M16 4L4 14l4 10h16l4-10L16 4zm0 6a3 3 0 110 6 3 3 0 010-6z" /></svg></div>
        <div className="l-name"><span className="l-primary--spaced">Brightside</span><span className="l-sub">Orthodontics</span></div>
      </div>
      <div className="logo-item">
        <div className="l-name"><span className="l-primary--serif">Heritage Dental</span><span className="l-sub">Care</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><polygon points="15,2 28,10 28,22 15,28 2,22 2,10" /></svg></div>
        <div className="l-name"><span className="l-primary">Lakewood Dental</span><span className="l-sub">Associates</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C8.5 0 5 3.5 5 7c0 2.5 1 4.5 2.5 6C5.5 15 4 18 4 22c0 6 4 10 10 10s10-4 10-10c0-4-1.5-7-3.5-9C22 11.5 23 9.5 23 7c0-3.5-3.5-7-9-7zm-2 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" /></svg></div>
        <div className="l-name"><span className="l-primary--serif">Metro Dental</span><span className="l-sub">NYC</span></div>
      </div>
      <div className="logo-item">
        <div className="l-name"><span className="l-primary--spaced">Canyon Creek</span><span className="l-sub">Dentistry</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg"><path d="M16 4L4 14l4 10h16l4-10L16 4zm0 6a3 3 0 110 6 3 3 0 010-6z" /></svg></div>
        <div className="l-name"><span className="l-primary">Pacific Smile</span><span className="l-sub">Group</span></div>
      </div>
      <div className="logo-item">
        <div className="l-name"><span className="l-primary--serif">Riverside Dental</span><span className="l-sub">Co.</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><polygon points="15,2 28,10 28,22 15,28 2,22 2,10" /></svg></div>
        <div className="l-name"><span className="l-primary">Pinnacle Dental</span><span className="l-sub">DSO</span></div>
      </div>
      {/* Set 2 (duplicate for seamless loop) */}
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C8.5 0 5 3.5 5 7c0 2.5 1 4.5 2.5 6C5.5 15 4 18 4 22c0 6 4 10 10 10s10-4 10-10c0-4-1.5-7-3.5-9C22 11.5 23 9.5 23 7c0-3.5-3.5-7-9-7zm-2 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" /></svg></div>
        <div className="l-name"><span className="l-primary--spaced">Parkview</span><span className="l-sub">Dental Group</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><polygon points="15,2 28,10 28,22 15,28 2,22 2,10" /></svg></div>
        <div className="l-name"><span className="l-primary">Midtown Smile</span><span className="l-sub">Studio NYC</span></div>
      </div>
      <div className="logo-item">
        <div className="l-name"><span className="l-primary--serif">CoastalDentist</span><span className="l-sub">.com</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg"><path d="M14 2c-4 0-7 2.8-7 6.2 0 2 .8 3.8 2.2 5.2-1.6 1.8-2.8 4.4-2.8 7.6 0 5.2 3.4 9 7.6 9s7.6-3.8 7.6-9c0-3.2-1.2-5.8-2.8-7.6C20.2 12 21 10.2 21 8.2 21 4.8 18 2 14 2z" /></svg></div>
        <div className="l-name"><span className="l-primary">Summit Dental</span><span className="l-sub">Partners</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg"><path d="M16 4L4 14l4 10h16l4-10L16 4zm0 6a3 3 0 110 6 3 3 0 010-6z" /></svg></div>
        <div className="l-name"><span className="l-primary--spaced">Brightside</span><span className="l-sub">Orthodontics</span></div>
      </div>
      <div className="logo-item">
        <div className="l-name"><span className="l-primary--serif">Heritage Dental</span><span className="l-sub">Care</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><polygon points="15,2 28,10 28,22 15,28 2,22 2,10" /></svg></div>
        <div className="l-name"><span className="l-primary">Lakewood Dental</span><span className="l-sub">Associates</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 28 32" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C8.5 0 5 3.5 5 7c0 2.5 1 4.5 2.5 6C5.5 15 4 18 4 22c0 6 4 10 10 10s10-4 10-10c0-4-1.5-7-3.5-9C22 11.5 23 9.5 23 7c0-3.5-3.5-7-9-7zm-2 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" /></svg></div>
        <div className="l-name"><span className="l-primary--serif">Metro Dental</span><span className="l-sub">NYC</span></div>
      </div>
      <div className="logo-item">
        <div className="l-name"><span className="l-primary--spaced">Canyon Creek</span><span className="l-sub">Dentistry</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg"><path d="M16 4L4 14l4 10h16l4-10L16 4zm0 6a3 3 0 110 6 3 3 0 010-6z" /></svg></div>
        <div className="l-name"><span className="l-primary">Pacific Smile</span><span className="l-sub">Group</span></div>
      </div>
      <div className="logo-item">
        <div className="l-name"><span className="l-primary--serif">Riverside Dental</span><span className="l-sub">Co.</span></div>
      </div>
      <div className="logo-item">
        <div className="l-icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><polygon points="15,2 28,10 28,22 15,28 2,22 2,10" /></svg></div>
        <div className="l-name"><span className="l-primary">Pinnacle Dental</span><span className="l-sub">DSO</span></div>
      </div>
    </div>
  </div>
</div>




  {/* MONOLOGUE / PAIN */}
  <section className="block" id="pain">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The morning every dental office knows</div>
        <h2 className="display">You already know how this <em>goes.</em></h2>
      </div>
      <div className="monologue fade-in">
        <p>It's Tuesday. The schedule is full. You are three minutes behind on every patient.</p>
        <p>
          Your <strong >front desk</strong> is on hold with Delta Dental — again — trying to verify benefits for a patient who walked in
          fifteen minutes ago. A <strong >new patient </strong> call is ringing. Nobody can answer it. The hygiene patient is sitting in
          the <strong > waiting room</strong> with a clipboard nobody has time to review.
        </p>
        <p>
          Meanwhile, last month's claims are still sitting. The <strong >PPO</strong> write-offs from January are confusing. The aging report
          has 90+ day buckets that nobody has touched since the office manager went on maternity leave. Your last hygiene
          block had two openings that did not get filled because nobody had time to work the recall list.
        </p>
        <p>You produced great numbers last month. You know you did.</p>
        <p className="emphasis"><em>So why does the bank account not reflect it?</em></p>
      </div>
      <div className="pain-ledger fade-in">
        <div className="pain-row">
          <div className="pn">01</div>
          <div className="ptitle">Missed calls are costing you new patients.</div>
          <div className="pdesc">The phone rings during check-in, during a benefits call, during the lunch rush. Every
            missed call is a potential new patient who called the next practice on the list instead.</div>
          <div className="pstat">35% unanswered</div>
        </div>
        <div className="pain-row">
          <div className="pn">02</div>
          <div className="ptitle">Insurance verification is killing your front desk.</div>
          <div className="pdesc">Average call to a payer is 12-18 minutes. Multiply by 30 patients a day. Your front desk
            spends more time on hold than with patients.</div>
          <div className="pstat">~6 hrs/day lost</div>
        </div>
        <div className="pain-row">
          <div className="pn">03</div>
          <div className="ptitle">Production looks strong. Collections do not.</div>
          <div className="pdesc">You are producing well but collecting 70-80% of it. The industry benchmark is 98%. That gap
            is somebody's salary — maybe two.</div>
          <div className="pstat">20pt gap = $$$</div>
        </div>
        <div className="pain-row">
          <div className="pn">04</div>
          <div className="ptitle">Claims are submitted but not tracked.</div>
          <div className="pdesc">Claims go out. Some come back denied. Most just sit. Nobody has the bandwidth to follow
            up on every one past 30 days, and 90+ day buckets keep growing.</div>
          <div className="pstat">30% recovery loss</div>
        </div>
        <div className="pain-row">
          <div className="pn">05</div>
          <div className="ptitle">Treatment plans are not getting followed up.</div>
          <div className="pdesc">Patients leave with a treatment plan and never hear back. Unscheduled treatment sits on a
            report nobody reviews. Revenue that was already accepted does not make it onto the schedule.</div>
          <div className="pstat">-12% acceptance</div>
        </div>
        <div className="pain-row">
          <div className="pn">06</div>
          <div className="ptitle">Outbound calls get skipped every day.</div>
          <div className="pdesc">Recall calls, appointment reminders, patient balance follow-up, no-show follow-up,
            reactivation campaigns. They are all on the list. They all get pushed to tomorrow.</div>
          <div className="pstat">~$3-5k/mo lost</div>
        </div>
        <div className="pain-row">
          <div className="pn">07</div>
          <div className="ptitle">PPO write-offs are quietly bleeding you.</div>
          <div className="pdesc">You are writing off contracted amounts you should be appealing. Nobody has the bandwidth to
            dig into fee schedule discrepancies, underpayments, or payer adjustments.</div>
          <div className="pstat">$4-11k/month</div>
        </div>
        <div className="pain-row">
          <div className="pn">08</div>
          <div className="ptitle">Admin tasks pile up and patient care suffers.</div>
          <div className="pdesc">Data entry, form follow-up, documentation, appointment coordination, referral management.
            Small tasks add up until the important follow-ups fall through the cracks.</div>
          <div className="pstat">Staff burnout</div>
        </div>
      </div>
    </div>
  </section>
  {/* BEHIND THE SCENES */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What is actually happening behind the scenes</div>
        <h2 className="display">You do not have a marketing problem. <em>You have an operational problem.</em>
        </h2>
      </div>
      <div className="bts-data fade-in">
        <div className="lhs">
          <p>Dental growth does not only depend on more marketing. It depends on what happens after the patient calls.</p>
          <p>Your practice is producing more than your back office can clean up. <strong>The more you grow, the wider the gap gets.</strong></p>
          <p>Calls come in while patients are being checked in. Insurance verification is delayed. Treatment plans are
            not followed up consistently. Claims are submitted but not tracked. AR is reviewed too late. Outbound calls
            get skipped. Admin tasks pile up.</p>
          <p>Revenue leaks through small daily gaps that individually seem manageable but collectively cost thousands every month.</p>
        </div>
        <ul className="bts-list">
          <li><span>Calls missed during peak hours</span><span className="stat">30-40%</span></li>
          <li><span>Front desk time spent on verification calls</span><span className="stat">15-25 hrs/wk</span></li>
          <li><span>Claims submitted with at least one error</span><span className="stat">25-30%</span></li>
          <li><span>Recoverable AR sitting past 90 days</span><span className="stat">$8-15k</span></li>
          <li><span>Monthly production lost to unfilled hygiene</span><span className="stat">$3-5k</span></li>
          <li><span>Treatment plans lost to follow-up gaps</span><span className="stat">12-18%</span></li>
          <li><span>Patient inquiries that never convert</span><span className="stat">20-30%</span></li>
        </ul>
      </div>
      <div className="pull-quote fade-in"  style={{background: 'rgba(0,200,150,.06)', borderLeftColor: 'var(--signal)', }}>
        That is not a staffing problem you fix by posting on Indeed. That is an operational layer your practice is
        missing — and HBS is built to be that layer.
      </div>
    </div>
  </section>
  {/* SOLUTION */}
  <section className="block" id="solution">
    <div className="container">
      <div className="solution-card fade-in">
        <div className="solution-glow" />
        <div className="eyebrow" style={{color: 'var(--signal)'}}>— Our model</div>
        <h2 className="display" style={{marginTop: 20}}>We do not replace your team. <em>We are the operational layer your team has been waiting for.</em></h2>
        <p>Hired Billing Support gives you a dental-trained remote operations team that lives inside your practice management software.
          Same logins. Same workflows. Same SOPs. We answer your calls, verify your insurance, submit your claims, follow up on AR,
          work your recall list, manage your admin tasks, and support your patient communication — and we do not take PTO during
          your busiest week.</p>
        <p>You will have specific people assigned to your practice. They will learn your codes, your PPO contracts, your providers,
          your patients' names. They will feel like staff — because operationally, they are.</p>
        <p>We adapt to your process, not the other way around. Your front desk should not have to change how they work just because
          you added support.</p>
      </div>
    </div>
  </section>



{/* ═══ 5. CORE DENTAL SUPPORT SERVICES ═══ */}
<section className="industry-section warm" id="services">
  <div className="container">
    <div className="section-header fade-in">
      <div className="eyebrow">What we run for your practice</div>
      <h2 className="section-title">The full dental operations <em>stack.</em></h2>
      <p className="section-subtitle">Pick the layers you need. Run one service, or hand us the entire back office. Every service runs inside your existing software and workflow.</p>
    </div>
    <div className="service-grid fade-in">
      <div className="service-card">
        <div className="service-card-tag tag-calls">Inbound</div>
        <h4>Inbound Call Support</h4>
        <div className="pain">Pain: Missed calls, patients on hold, front desk overwhelmed</div>
        <p>New patient inquiries, scheduling requests, insurance questions, billing questions, treatment questions, and follow-up calls — answered, documented, and routed without overwhelming your in-office team. No more missed calls during check-in or lunch rush.</p>
        <div className="outcome">→ More calls answered. More patients scheduled.</div>
      </div>
      <div className="service-card">
        <div className="service-card-tag tag-calls">Outbound</div>
        <h4>Outbound Call Support</h4>
        <div className="pain">Pain: Recall gaps, no-shows, unscheduled treatment</div>
        <p>Appointment reminders, recall calls, treatment plan follow-up, no-show follow-up, patient balance follow-up, hygiene reactivation, and new patient inquiry callbacks — consistent outbound communication that turns missed opportunities into scheduled care.</p>
        <div className="outcome">→ Fuller schedules. Fewer gaps. Better recall rates.</div>
      </div>
      <div className="service-card">
        <div className="service-card-tag tag-rcm">RCM</div>
        <h4>Dental RCM Support</h4>
        <div className="pain">Pain: Claims sitting, AR growing, collections lagging</div>
        <p>Dental billing, CDT-coded claim submission, claim follow-up, payment posting, denial management, PPO write-off review, underpayment appeals, insurance aging review, and production-to-collection visibility. Clean-claim rate above 98%.</p>
        <div className="outcome">→ Revenue moves through the cycle. Collections match production.</div>
      </div>
      <div className="service-card">
        <div className="service-card-tag tag-insurance">Insurance</div>
        <h4>Insurance Verification</h4>
        <div className="pain">Pain: Patients arrive unverified, cost surprises, claim delays</div>
        <p>Eligibility checks, benefits breakdown, PPO plan verification, deductibles, co-pays, annual maximums, frequency limitations, waiting periods, pre-authorization support — all documented inside your chart 48 hours before the appointment.</p>
        <div className="outcome">→ Cleaner treatment planning. Fewer surprised patients.</div>
      </div>
      <div className="service-card">
        <div className="service-card-tag tag-ar">AR &amp; Claims</div>
        <h4>AR &amp; Claim Follow-Up</h4>
        <div className="pain">Pain: Aging AR, untouched 90+ buckets, slow recovery</div>
        <p>Every aging bucket worked — 30, 60, 90, 120+. Payer calls, re-submissions, narrative appeals, denial categorization, and payment resolution. Most dental clients see AR days drop below 25 within 90 days.</p>
        <div className="outcome">→ Faster payments. Smaller aging buckets. Recovered revenue.</div>
      </div>
      <div className="service-card">
        <div className="service-card-tag tag-patient">Patient Comm</div>
        <h4>Treatment Plan Follow-Up</h4>
        <div className="pain">Pain: Accepted treatment never scheduled, revenue left on table</div>
        <p>Patients who said yes to treatment but never scheduled get consistent, professional follow-up. Unscheduled treatment reports reviewed daily. Warm outreach converts treatment acceptance into completed care and collected revenue.</p>
        <div className="outcome">→ Treatment acceptance that actually becomes treatment completion.</div>
      </div>
      <div className="service-card">
        <div className="service-card-tag tag-admin">Admin</div>
        <h4>Administrative Support</h4>
        <div className="pain">Pain: Tasks pile up, follow-ups missed, data entry delayed</div>
        <p>Patient data entry, appointment coordination, form follow-up, documentation organization, insurance document collection, daily task queue support, provider schedule support, referral management, and reporting support — the remote admin layer that keeps operations moving.</p>
        <div className="outcome">→ Less admin burden. More focus on patient care.</div>
      </div>
      <div className="service-card">
        <div className="service-card-tag tag-patient">Communication</div>
        <h4>Patient Communication Support</h4>
        <div className="pain">Pain: Patient questions unanswered, statements unclear, frustration</div>
        <p>Patient billing questions answered with clarity and empathy. Statements sent on schedule. Balance follow-up without making patients feel hounded. Insurance explanation support. Post-treatment communication that builds loyalty, not friction.</p>
        <div className="outcome">→ Stronger patient experience. Better retention.</div>
      </div>
    </div>
  </div>
</section>






{/* ═══ 6. INBOUND + OUTBOUND CALL WORKFLOW ═══ */}
<section className="industry-section">
  <div className="container">
    <div className="section-header fade-in">
      <div className="eyebrow">Patient communication workflow</div>
      <h2 className="section-title">Every patient call answered. Every follow-up <em>tracked.</em></h2>
      <p className="section-subtitle">HBS supports the full patient communication cycle — from the moment a phone rings to the follow-up that closes the loop. Your front desk handles patients in the chair. We handle the phones and the outreach.</p>
    </div>
    <div className="workflow-dashboard fade-in">
      <div className="wf-node"><div className="wf-dot wf-dot--signal">01</div><div className="wf-node-label">Call Received</div><div className="wf-node-sub">Inbound answered</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--signal">02</div><div className="wf-node-label">Need Identified</div><div className="wf-node-sub">Schedule · insurance · billing</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--signal">03</div><div className="wf-node-label">Documented</div><div className="wf-node-sub">Notes in PMS</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--amber">04</div><div className="wf-node-label">Task Routed</div><div className="wf-node-sub">Or completed live</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--signal">05</div><div className="wf-node-label">Follow-Up Set</div><div className="wf-node-sub">Tracked · scheduled</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--signal">06</div><div className="wf-node-label">Outbound Call</div><div className="wf-node-sub">Recall · reminder · TX</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--ink">07</div><div className="wf-node-label">Loop Closed</div><div className="wf-node-sub">Patient scheduled</div></div>
    </div>
    {/* <div className="pull-quote fade-in">Your front desk does not need to choose between the patient standing in front of them and the patient calling on the phone. HBS makes sure both are taken care of.</div> */}
      {/* TESTIMONIALS SECTION */}
      <TestimonialCarousel testimonials={testimonials} />
  </div>
</section>















<section className="industry-section industry-section--warm">
  <div className="container">
    <div className="section-header fade-in">
      <div className="eyebrow">Insurance verification process</div>
      <h2 className="section-title">Benefits verified before the patient <em>sits down.</em></h2>
      <p className="section-subtitle">Insurance confusion delays treatment, frustrates patients, and creates claim errors. HBS verifies coverage 48 hours before the appointment — so your team presents treatment with confidence, not guesswork.</p>
    </div>
    <div className="process-timeline fade-in">
      <div className="process-step">
        <div className="process-step-num">01</div>
        <div><h4>Collect patient and insurance details</h4><p>Patient demographics, insurance ID, group number, subscriber information, and secondary coverage details pulled from the schedule and patient record.</p></div>
      </div>
      <div className="process-step">
        <div className="process-step-num">02</div>
        <div><h4>Check eligibility and active coverage</h4><p>Eligibility confirmed with the payer — plan active, patient covered, effective dates validated, network status confirmed for the rendering provider.</p></div>
      </div>
      <div className="process-step">
        <div className="process-step-num">03</div>
        <div><h4>Break down benefits and limitations</h4><p>Deductibles, co-pays, co-insurance, annual maximums, remaining benefits, frequency limitations, waiting periods, age limitations, and downgrades — all documented clearly.</p></div>
      </div>
      <div className="process-step">
        <div className="process-step-num">04</div>
        <div><h4>Review treatment-specific coverage</h4><p>Coverage confirmed for the specific procedures scheduled — including missing tooth clauses, PPO fee schedule confirmation, and pre-authorization requirements flagged if applicable.</p></div>
      </div>
      <div className="process-step">
        <div className="process-step-num">05</div>
        <div><h4>Document verification notes in your system</h4><p>All verification details entered directly into the patient chart inside your practice management software. Front desk sees everything before the patient arrives. No separate reports to check.</p></div>
      </div>
      <div className="process-step">
        <div className="process-step-num">06</div>
        <div><h4>Flag unclear coverage for review</h4><p>If coverage is unclear, limitations are unusual, or plan details do not match expected benefits, the issue is flagged for the office before the appointment — not discovered at the chair.</p></div>
      </div>
    </div>
  </div>
</section>


{/* ═══ 8. DENTAL RCM WORKFLOW ═══ */}
<section className="industry-section industry-section--ink">
  <div className="container">
    <div className="section-header fade-in">
      <div className="eyebrow eyebrow--light">Dental revenue cycle workflow</div>
      <h2 className="section-title">From claim readiness to collected <em>revenue.</em></h2>
      <p className="section-subtitle">Production does not automatically become collections. Claims need to be clean, submitted fast, tracked actively, and followed up aggressively. HBS manages every step of the dental revenue cycle.</p>
    </div>
    <div className="workflow-dashboard fade-in">
      <div className="wf-node"><div className="wf-dot wf-dot--signal">01</div><div className="wf-node-label">Claim Ready</div><div className="wf-node-sub">Verified · coded</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--signal">02</div><div className="wf-node-label">Submission</div><div className="wf-node-sub">Same-day · clean</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--signal">03</div><div className="wf-node-label">Tracking</div><div className="wf-node-sub">Status monitored</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--amber">04</div><div className="wf-node-label">Follow-Up</div><div className="wf-node-sub">Payer · resubmit</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--signal">05</div><div className="wf-node-label">Payment Posted</div><div className="wf-node-sub">Reconciled daily</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--amber">06</div><div className="wf-node-label">Denial/Appeal</div><div className="wf-node-sub">Categorized · worked</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--signal">07</div><div className="wf-node-label">AR Review</div><div className="wf-node-sub">30 · 60 · 90 · 120+</div></div>
      <div className="wf-node"><div className="wf-dot wf-dot--ink">08</div><div className="wf-node-label">Collected</div><div className="wf-node-sub">Revenue secured</div></div>
    </div>
    <div className="pull-quote fade-in" style={{background: 'rgba(0,200,150,.06)', borderLeftColor: 'var(--signal)', color: 'var(--paper)'}}>PPO adjustments, underpayments, downgrades, and frequency denials are not just accepted. They are reviewed, appealed when appropriate, and tracked to close the gap between production and collection.</div>
  </div>
</section>




 <div>
  {/* ═══ 9. HOW HBS WORKS WITH YOUR DENTAL TEAM ═══ */}
  <section className="industry-section">
    <div className="container">
      <div className="section-header fade-in">
        <div className="eyebrow">How we work</div>
        <h2 className="section-title">We do not sit outside your practice. <em>We sit inside it.</em></h2>
        <p className="section-subtitle">HBS works inside your existing dental software, follows your SOPs, and communicates through your channels. You do not need to change how you run. We adapt to you.</p>
      </div>
      <div className="how-grid fade-in">
        <div className="how-card">
          <span className="num">— 01</span>
          <h4>We log into your software.</h4>
          <p>Open Dental. Dentrix. Eaglesoft. Curve. Denticon. CareStack. We work where you work. No exports, no portals, no "email us the file."</p>
        </div>
        <div className="how-card">
          <span className="num">— 02</span>
          <h4>We follow your workflow.</h4>
          <p>We learn your SOPs, fee schedules, appointment types, provider notes, write-off rules, payer mix, and office processes. We plug into how you already run.</p>
        </div>
        <div className="how-card">
          <span className="num">— 03</span>
          <h4>We report to your team.</h4>
          <p>Daily Slack, Teams, or email updates. Weekly KPI review. Monthly working sessions. We function as a department inside your practice, not a vendor on the outside.</p>
        </div>
        <div className="how-card">
          <span className="num">— 04</span>
          <h4>We use your communication tools.</h4>
          <p>Our team is on your channels. They answer patient calls from your number. They email from your domain. To everyone outside — they are your practice.</p>
        </div>
      </div>
    </div>
  </section>
  {/* ═══ 10. AI + HUMAN ADVANTAGE ═══ */}
  <section className="industry-section industry-section--warm">
    <div className="container">
      <div className="section-header fade-in">
        <div className="eyebrow">The AI + human advantage</div>
        <h2 className="section-title">AI supports the repetitive work. <em>Humans handle the conversations and decisions.</em></h2>
        <p className="section-subtitle">You do not want a chatbot calling Delta Dental. You do not want AI explaining a $1,200 balance to a confused patient. Neither do we. AI handles the tracking. Humans handle the judgment.</p>
      </div>
      <div className="ai-split fade-in">
        <div className="ai-col ai-col--machine">
          <div className="ai-col-label">AI-assisted workflows</div>
          <div className="ai-items">
            <div className="ai-item"><div className="ai-item-dot" /><p>Automated eligibility checks — coverage pulled in under 30 seconds</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>Claim scrubbing against payer rules before submission</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>Call queue monitoring and routing with priority detection</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>Denial categorization and pattern tracking by payer and reason</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>Follow-up reminders, task queue management, and deadline tracking</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>Reporting dashboards — production, collection, AR aging, call volume</p></div>
          </div>
        </div>
        <div className="ai-col ai-col--human">
          <div className="ai-col-label">Human dental specialists</div>
          <div className="ai-items">
            <div className="ai-item"><div className="ai-item-dot" /><p>Patient phone conversations — scheduling, questions, billing support</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>Insurance verification calls that require live payer interaction</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>Treatment plan follow-up with empathy and clinical context</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>Claim appeal narratives and payer escalation calls</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>PPO write-off review and underpayment appeal decisions</p></div>
            <div className="ai-item"><div className="ai-item-dot" /><p>AR judgment calls — which claims to push, which to write off, when to escalate</p></div>
          </div>
        </div>
      </div>
      <div className="pull-quote fade-in" style={{background: 'rgba(0,200,150,.06)', borderLeftColor: 'var(--signal)', }} >Insurance verification calls that used to take 18 minutes? Automated eligibility checks pull most of it in under 30 seconds. The 20% that needs a real human voice on the line — we make that call.</div>
    </div>
  </section>
</div>










<section className="industry-section" id="results">
  <div className="container">
    <div className="section-header fade-in">
      <div className="eyebrow">What changes</div>
      <h2 className="section-title">Measurable improvement across every part of <em>dental operations.</em></h2>
      <p className="section-subtitle">Pulled from active dental clients across general, cosmetic, ortho, perio, pediatric, and multi-location practices.</p>
    </div>
    <div className="outcome-grid fade-in">
      <div className="outcome-card">
        <div className="outcome-card-icon">97%</div>
        <h4>Patient calls answered</h4>
        <p>Fewer missed calls, fewer lost new patients, fewer voicemails that never get returned.</p>
      </div>
      <div className="outcome-card">
        <div className="outcome-card-icon">48hr</div>
        <h4>Insurance verified ahead</h4>
        <p>Benefits documented in the chart before the patient sits down. No more chair-side scrambling.</p>
      </div>
      <div className="outcome-card">
        <div className="outcome-card-icon">98%</div>
        <h4>First-pass clean claim rate</h4>
        <p>CDT-coded, attachment-included, payer-validated claims submitted within 24 hours of the procedure.</p>
      </div>
      <div className="outcome-card">
        <div className="outcome-card-icon">25d</div>
        <h4>AR days from 47-day baseline</h4>
        <p>Every aging bucket worked. Payer calls made. Re-submissions filed. AR days drop within 90 days.</p>
      </div>
      <div className="outcome-card">
        <div className="outcome-card-icon">+24%</div>
        <h4>Monthly collections lift</h4>
        <p>Average collections increase across active dental clients — same production, more money in the bank.</p>
      </div>
      <div className="outcome-card">
        <div className="outcome-card-icon">$7.5k</div>
        <h4>PPO write-off recovery</h4>
        <p>Average recovery in the first 60 days from write-offs that should not have been written off.</p>
      </div>
    </div>
  </div>
</section>


<div>
  {/* ═══ 12. WHY NOT HIRE MORE STAFF ═══ */}
  <section className="industry-section industry-section--warm">
    <div className="container">
      <div className="section-header fade-in">
        <div className="eyebrow">The honest comparison</div>
        <h2 className="section-title">Why not just hire another <em>front desk person?</em></h2>
        <p className="section-subtitle">You already tried. That is why you are reading this. More staff does not automatically fix broken workflows. Let us do the comparison honestly.</p>
      </div>
      <div className="compare-wrap fade-in">
        <div className="compare-header"><span /><span className="hbs-col">Embedded HBS team</span><span>Hire in-house</span></div>
        <div className="compare-row"><span className="c-label">Cost structure</span><span className="c-hbs">Flexible — scales with need</span><span className="c-other">$42,000-$65,000 salary + benefits</span></div>
        <div className="compare-row"><span className="c-label">Ramp time</span><span className="c-hbs">Live in 10-14 business days</span><span className="c-other">3-6 month learning curve</span></div>
        <div className="compare-row"><span className="c-label">Sick days / PTO</span><span className="c-hbs">Cross-covered every day</span><span className="c-other">Work stops when they are out</span></div>
        <div className="compare-row"><span className="c-label">Skills covered</span><span className="c-hbs">Calls, billing, insurance, AR, admin, recalls</span><span className="c-other">One person, one or two skills</span></div>
        <div className="compare-row"><span className="c-label">Turnover risk</span><span className="c-hbs">Embedded long-term, documented SOPs</span><span className="c-other">14-month average dental staff tenure</span></div>
        <div className="compare-row"><span className="c-label">Management load</span><span className="c-hbs">We manage the team. They report to you.</span><span className="c-other">You manage, train, review, replace</span></div>
        <div className="compare-row"><span className="c-label">Call volume handling</span><span className="c-hbs">Scales with demand — marketing, seasons</span><span className="c-other">One person handles what they can</span></div>
      </div>
      <div className="pull-quote fade-in"  style={{background: 'rgba(0,200,150,.06)', borderLeftColor: 'var(--signal)', }}>When your one in-house person leaves, all the institutional knowledge leaves with them. With an embedded team, the SOPs are documented, the system runs, and the work continues regardless.</div>
    </div>
  </section>
  {/* ═══ 13. WHO THIS IS FOR ═══ */}
  <section className="industry-section">
    <div className="container">
      <div className="section-header fade-in">
        <div className="eyebrow">Who this is for</div>
        <h2 className="section-title">We support dental practices of every size <em>and specialty.</em></h2>
        <p className="section-subtitle">Whether you are a solo practice managing everything yourself or a DSO standardizing operations across locations, HBS adapts to how you work.</p>
      </div>
      <div className="audience-grid fade-in">
        <div className="audience-card">
          <h4>Solo Dental Practices</h4>
          <p>One doctor, small team, wearing every hat</p>
        </div>
        <div className="audience-card">
          <h4>General Dental Clinics</h4>
          <p>Multi-provider practices with growing volume</p>
        </div>
        <div className="audience-card">
          <h4>Cosmetic Dentists</h4>
          <p>High-value cases, complex treatment plans</p>
        </div>
        <div className="audience-card">
          <h4>Dental Service Organizations</h4>
          <p>Multi-location groups needing standardization</p>
        </div>
        <div className="audience-card">
          <h4>Orthodontic Practices</h4>
          <p>Long treatment cycles, insurance phase tracking</p>
        </div>
        <div className="audience-card">
          <h4>Pediatric Dental Practices</h4>
          <p>High patient volume, parent communication</p>
        </div>
        <div className="audience-card">
          <h4>Oral Surgery Practices</h4>
          <p>Pre-authorization, medical cross-coding</p>
        </div>
        <div className="audience-card">
          <h4>Periodontics &amp; Specialty</h4>
          <p>Frequency limitations, complex payer rules</p>
        </div>
        <div className="audience-card">
          <h4>Multi-Location Groups</h4>
          <p>Centralized billing, distributed operations</p>
        </div>
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
      <div className="eyebrow">Frequently asked questions</div>
      <h2 className="display">
        Common questions from dental practices <em>considering HBS.</em>
      </h2>
    </div>

    <div className="faq-list fade-in">
      {[
        {
          summary: "How does HBS handle inbound calls for my dental practice?",
          body:
            "HBS agents answer calls on behalf of your practice using your phone systems and scripts. Calls are documented inside your practice management software. Scheduling requests, insurance questions, billing inquiries, and treatment questions are handled live or routed to the appropriate team member — so patients never hear 'we'll call you back' unless it is genuinely needed.",
        },
        {
          summary: "What dental software does HBS work with?",
          body:
            "We work inside Open Dental, Dentrix, Eaglesoft, Curve, Denticon, CareStack, and most cloud-based and server-based dental practice management systems. We use your existing software — we do not ask you to switch or export data into a separate portal.",
        },
        {
          summary: "How does dental insurance verification work with HBS?",
          body:
            "We verify insurance 48 hours before each scheduled appointment. Benefits, deductibles, maximums, frequency limitations, waiting periods, and coverage details are documented inside the patient chart. If there is unclear coverage or a plan issue, we flag it before the patient arrives — not at the chair.",
        },
        {
          summary:
            "Can HBS handle outbound calls like recall and treatment follow-up?",
          body:
            "Yes. We manage recall campaigns, hygiene reactivation, treatment plan follow-up, appointment reminders, no-show callbacks, patient balance follow-up, and new patient inquiry callbacks. All outbound activity is documented inside your system so your team has full visibility.",
        },
        {
          summary: "How does HBS manage dental AR and claim follow-up?",
          body:
            "We work every aging bucket — 30, 60, 90, and 120+ days. Claims are tracked from submission through resolution. Payer follow-up calls are made on pending claims. Denials are categorized and appealed. Payment posting is reconciled. Most dental clients see AR days drop below 25 within 90 days of onboarding.",
        },
        {
          summary:
            "Does HBS provide remote administrative support for dental offices?",
          body:
            "Yes. We support patient data entry, appointment coordination, form follow-up, documentation management, insurance document collection, referral tracking, daily task queues, and reporting. We become the remote admin layer that handles the operational work your in-office team cannot get to.",
        },
        {
          summary:
            "How quickly can HBS get started with my dental practice?",
          body:
            "Most dental practices are fully onboarded within 10–14 business days. We complete a workflow audit, learn your SOPs and fee schedules, set up system access, align on communication channels, and begin supporting your daily operations with a named team assigned to your practice.",
        },
        {
          summary: "Is HBS HIPAA compliant?",
          body:
            "Yes. HBS operates under full HIPAA compliance with a Business Associate Agreement (BAA) executed on every engagement. All team members are HIPAA-trained. Data handling follows healthcare security standards. No patient data is stored outside your systems.",
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
      <div className="eyebrow" style={{justifyContent: 'center', color: 'rgba(250,247,242,0.55)'}}>Build your dental support team
      </div>
      <h2 className="display">Send us your production report and aging summary. <em>We will show you where the gap is.</em></h2>
      <p>Within 5 business days, we will come back with a free audit showing exactly where revenue is leaking — missed calls, unverified insurance, unworked AR, treatment follow-up gaps — and what we would do about it. No pitch. No pressure. If the audit shows you do not need us, we will tell you.</p>
      <div className="actions">
        <a href="/contact" className="btn btn-light">Book a discovery call
          <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <a href="/contact" className="btn btn-ghost" style={{color: 'var(--paper)', borderColor: 'rgba(250,247,242,0.3)'}} id="audit">Request a free dental audit</a>
      </div>
      <div className="trust-line">HIPAA · BAA on every engagement · No long-term contract required</div>
    </div>
  </section>
</div>

</section>

  );
}
