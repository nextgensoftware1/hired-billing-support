
import { SolutionData } from '../solutionTypes';

export const rcmManagement: SolutionData = {
  title: 'RCM Management Services for Healthcare | HBS',
  subtitle: 'Your revenue cycle has more leaks than your billing team can see.',
  description: 'Manage eligibility, claims, denials, AR, payments, and reporting with an embedded RCM team that keeps revenue moving.',

  hero: {
    eyebrow: 'RCM Management',
    title: 'Your RCM is only as strong as the team  <em> behind it.</em>',
    subtitle: 'Most practices have billing. Few have a revenue cycle that is actually managed  with consistent follow-up, denial control, and AR visibility across every payer and every claim.',
    description: 'HBS operates as your dedicated RCM team, inside your systems, on a daily cadence that keeps revenue moving.',
    card: {
      title: '— Revenue Cycle Health · 30-day view',
      stats: [
        { label: 'MTD Billed Charges', value: '$212,400', class: 'green' },
        { label: 'Clean Claim Rate', value: '341 claims &nbsp;<span class="dash-pill pill-green">98.2%</span>' },
        { label: 'Pending Adjudication', value: '$44,820', class: 'amber' },
        { label: 'Denial Rate (30-day)', value: '<span class="dash-pill pill-green">3.1% ↓</span>' },
        { label: 'AR Over 90 Days', value: '$11,340', class: 'red' },
        { label: 'Unworked Denials', value: '0', class: 'green' }
      ],
      dividerStats: [
        { num: '22', label: 'Days in AR' },
        { num: '94%', label: 'Collection Rate' },
        { num: '$0', label: 'Missed Tasks' }
      ]
    }
  },

  sections: {
    pain: {
      eyebrow: 'The reality every practice already knows',
      title: 'You can see the production number. <em>You cannot figure out where the money is going.</em>',
      ledgerEyebrow: 'Where revenue actually disappears',
      ledgerHeading: 'Revenue does not disappear all at once. <em>It leaks through daily workflow gaps.</em>',
      
      monologue: [
        'The work is happening. Patients are being seen. Charges are being entered. Claims are going out. And yet every month, the collections report shows a number that does not match the work you know you produced.',
        'You pull the AR report. There are claims from 90 days ago that nobody has touched. There are denials sitting in a queue because new claims kept coming in. There are payments posted at amounts nobody compared to the contract. And somewhere in your system there are authorization gaps, eligibility errors, and coding mismatches that nobody had uninterrupted time to find.',
        '"You already know the feeling of seeing production on paper but not seeing cash in the bank. That gap does not close on its own — and it does not close when your billing team is already managing too many things at once."',
        'The problem is not your team. The problem is that revenue cycle management done well requires full ownership of every step — and that is not something a team divided between clinical support, phone calls, and daily billing can consistently deliver without dedicated structure.'
      ],
      ledger: [
        { num: '01', title: 'Eligibility errors that start before the visit', description: 'Coverage verified too early, skipped under schedule pressure, or never updated when a patient changes plans. The claim goes out against inactive or wrong insurance — denied before anyone realizes the problem started at check-in.' },
        { num: '02', title: 'Prior authorizations tracked in too many places', description: 'Auth status lives in a spreadsheet, a sticky note, an EHR task, and someone\'s memory simultaneously. When any one breaks down, the visit happens without a valid authorization. The claim gets denied. The appeal eats hours.' },
        { num: '03', title: 'Charge entry delayed or inconsistent', description: 'Charges entered days after the visit — with rushed coding, missing modifiers, or incorrect diagnosis linkage — add unnecessary days to the payment cycle and create denial triggers that were entirely preventable.' },
        { num: '04', title: 'Denials not worked within a workable window', description: 'When a denial sits for three weeks before anyone reviews it, the appeal window is already shrinking. Denials that should be reversed become write-offs — not because they were wrong, but because follow-up was too slow.' },
        { num: '05', title: 'AR follow-up with no assigned ownership', description: 'Nobody assigned to specific aging buckets. Nobody measured on AR resolution. New claims always feel more urgent than old ones. Old claims keep aging until payers close the window — quietly, one claim at a time.' },
        { num: '06', title: 'Underpayments applied without a second look', description: 'A payer sends less than the contracted rate. Someone posts it and moves on. Nobody checks it. Over a year, those small underpayments become a five-figure write-off the practice never agreed to give.' },
        { num: '07', title: 'Payer-specific rules not consistently followed', description: 'Every payer has its own billing requirements. When those rules are missed on correct claims, the result is a denial that should never have happened — and it takes time the team does not have to reverse.' },
        { num: '08', title: 'No single person owns the full claim arc', description: 'Eligibility, coding, submission, follow-up, and payment posting handled by different people with different priorities. Revenue falls in the handoffs. Nobody sees the complete picture of what is being lost.' }
      ]
    },

    // NEW: Behind the Scenes Section
    behindTheScenes: {
      eyebrow: 'Where revenue actually disappears',
      title: 'Revenue does not disappear all at once. <em>It leaks through daily workflow gaps.</em>',
      description: 'Most practices know they have an RCM problem. Very few can pinpoint exactly where it lives. Here is where it almost always is.'
    },

    // NEW: RCM Lifecycle Timeline
    lifecycle: {
      eyebrow: 'Complete RCM lifecycle — managed end to end',
      items: [
        { num: '01', label: 'Eligibility', sublabel: 'Pre-visit', dotClass: 'rcm-dot--signal' },
        { num: '02', label: 'Prior Auth', sublabel: 'Pre-service', dotClass: 'rcm-dot--amber' },
        { num: '03', label: 'Charge Entry', sublabel: 'Same-day', dotClass: 'rcm-dot--signal' },
        { num: '04', label: 'Claim Scrub', sublabel: 'Pre-submit', dotClass: 'rcm-dot--signal' },
        { num: '05', label: 'Submission', sublabel: 'Electronic', dotClass: 'rcm-dot--signal' },
        { num: '06', label: 'Denial Mgmt', sublabel: '24–48 hrs', dotClass: 'rcm-dot--amber' },
        { num: '07', label: 'AR Follow-Up', sublabel: 'Daily', dotClass: 'rcm-dot--amber' },
        { num: '08', label: 'Payment Post', sublabel: 'ERA + manual', dotClass: 'rcm-dot--signal' },
        { num: '09', label: 'Reporting', sublabel: 'Visibility', dotClass: 'rcm-dot--ink' }
      ]
    },

    solution: {
      eyebrow: 'The solution',
      title: 'We do not just submit your claims. <em>We own the entire revenue cycle.</em>',
      description: 'Hired Billing Support steps in as your embedded RCM team — not as a vendor you send files to, but as a team that operates inside your system, follows your workflow, and takes responsibility for your revenue from eligibility to final payment.',
      process: [
        { num: '01', title: 'We start with a complete operational review', description: 'Before touching a single claim, we understand your EHR setup, payer mix, team structure, and what your current AR and denial picture looks like. We diagnose first, then act.' },
        { num: '02', title: 'We work directly inside your EHR and PM system', description: 'We log in to your system. We work your queues. We post payments in your PM. No file exports, no third-party portals — just your existing environment with our team inside it.' },
        { num: '03', title: 'We follow your SOPs — and improve them over time', description: 'We adapt to your existing workflows. Where we find gaps, we flag them, document the fix, and help formalize a stronger process so your billing operation becomes more consistent month over month.' },
        { num: '04', title: 'We communicate inside your team\'s channels daily', description: 'Slack, Teams, EHR messaging, email — wherever your team communicates, we show up there. Your staff communicates with a teammate, not a vendor with a ticket system.' },
        { num: '05', title: 'We scale without a new hiring cycle', description: 'New providers, new locations, seasonal volume — we scale immediately. No four-week job posting, no benefits overhead, no onboarding gaps that cost practices revenue while they wait.' },
        { num: '06', title: 'We report, review, and improve on a regular schedule', description: 'Performance reviews, denial trends, AR aging reports — delivered to your leadership on schedule. Not reactive reports after something goes wrong. Proactive visibility before problems compound.' }
      ]
    },

    services: {
      eyebrow: 'Complete RCM services',
      title: 'Every step of the revenue cycle. <em>Managed, not just monitored.</em>',
      description: 'We do not specialize in one piece of the billing puzzle. We own the full workflow so nothing falls in the gap between departments, systems, or responsibilities.',
      items: [
        { num: '01', title: 'Eligibility & Benefits Verification', description: 'Confirmed before every visit. Active coverage, deductibles, copays, and network status — verified against the actual payer, not a record from months ago.' },
        { num: '02', title: 'Prior Authorization Support', description: 'We track, request, follow up on, and document every authorization so a missing auth is never the reason a claim is denied.' },
        { num: '03', title: 'Charge Entry & Capture', description: 'Accurate, same-day or next-day charge entry with attention to modifiers, units, and diagnosis linkage. No delays, no shortcuts.' },
        { num: '04', title: 'Claim Scrubbing & Review', description: 'Every claim reviewed for errors, payer-specific rules, and missing data before submission — not after the denial arrives.' },
        { num: '05', title: 'Electronic Claims Submission', description: 'Formatted correctly for each payer, submitted promptly, and tracked from the moment it goes out to adjudication.' },
        { num: '06', title: 'Denial Management', description: 'Every denial reviewed, categorized, and worked within a defined window. No denial sits idle while the timely filing clock runs down.' },
        { num: '07', title: 'Appeals & Reconsiderations', description: 'When a denial is wrong, we build and submit the appeal — with clinical support, documentation, and payer-specific language that gives it the best chance of reversal.' },
        { num: '08', title: 'AR Follow-Up', description: 'Aging buckets assigned and worked daily. Not just the easy claims — 90-day and 120-day accounts get the same attention as new submissions.' },
        { num: '09', title: 'Payment Posting', description: 'ERA and manual EOB posting reconciled to the correct encounter with accuracy verification and adjustment review every time.' },
        { num: '10', title: 'Underpayment Identification', description: 'Every payment checked against contracted rates. When a payer underpays, we identify it, document it, and pursue the balance.' },
        { num: '11', title: 'Patient Balance Support', description: 'Patient responsibility balances reviewed and statements coordinated — so your front desk is not fielding billing calls all day.' },
        { num: '12', title: 'Payer Communication', description: 'We call payers. We escalate. We document every interaction. Your team should not be spending its day on hold with insurance companies.' },
        { num: '13', title: 'Reporting & Performance Tracking', description: 'Regular reports on collection rates, denial trends, AR aging, and clean claim rates — with commentary and context, not just raw numbers.' },
        { num: '14', title: 'Revenue Leakage Analysis', description: 'A structured review of where your revenue is being lost — missed charges, expired authorizations, unworked claims, underpayments, and write-off patterns.' }
      ]
    },

    // NEW: How We Work Section
    howWeWork: {
      eyebrow: 'How we work',
      title: 'Not a service you send work to. <em>A team already inside your operation.</em>',
      description: 'The reason most billing relationships fail is not the billing itself — it is the gap between what a vendor does and how a practice actually operates. We close that gap from day one.',
      process: [
        { num: '01', title: 'Operational review before anything else', description: 'We spend time understanding how your practice bills today — your systems, your team structure, your payer mix, and your current revenue gaps. We are diagnosing your operation, not onboarding into a standard template.' },
        { num: '02', title: 'We log in to your EHR — not our own system', description: 'Your EHR, your PM, your clearinghouse. We work the same queues your in-house team works, with the same access, the same visibility, and the same tools. No data exports, no workarounds.' },
        { num: '03', title: 'We adapt to your payer mix and existing rules', description: 'Different payers. Different fee schedules. Different authorization requirements. We learn your specific payer environment and apply the right rules for each one — so your claims go out correctly the first time.' },
        { num: '04', title: 'We communicate where your team already communicates', description: 'Slack, email, EHR messaging — we are in the same channels as your staff. Your team does not file tickets or send emails to a billing vendor. They talk to a teammate who works remotely.' },
        { num: '05', title: 'Regular reporting — proactive, not reactive', description: 'Monthly performance reviews with denial trends, AR aging movement, clean claim rates, and collection analysis — delivered on schedule with commentary. Not a dashboard that sits unread. A conversation about what the numbers mean.' }
      ]
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles what should never require a human. <em>Humans handle what technology cannot.</em>',
      description: 'AI does not replace billing judgment. It makes billing specialists measurably more effective by handling every repetitive task that should never have required a person in the first place.',
      machine: [
        'Eligibility verification queue management and real-time status tracking',
        'Prior auth status monitoring and automated reminder routing',
        'Claim scrubbing against payer-specific rule libraries before submission',
        'ERA auto-matching and payment reconciliation',
        'Denial pattern recognition, reason-code categorization, and trending',
        'AR aging alerts and follow-up task prioritization by bucket',
        'Underpayment flagging against contracted fee schedules',
        'Performance reporting, collection rate tracking, and trend analysis'
      ],
      human: [
        'Denial review, root cause identification, and appeal writing',
        'Payer calls, escalations, and dispute navigation',
        'Complex authorization decisions and peer-to-peer coordination',
        'Underpayment pursuit and contract analysis',
        'Appeal construction with clinical documentation and payer-specific language',
        'Write-off review and adjustment judgment calls',
        'Communication with providers, coders, and front desk staff',
        'AR prioritization based on payer history, claim age, and dollar value'
      ],
      pullQuote: '"Claims are not always denied because the care was wrong. Sometimes they are denied because one small administrative detail was missed before the visit even happened — and that is exactly what the human side of our team is built to prevent."'
    },

    results: {
      eyebrow: 'What changes',
      title: 'Practical outcomes for practices that take <em>RCM seriously.</em>',
      description: 'We do not sell promises. We deliver operational changes that show up in your collections, your cash flow, and your team\'s daily workload.',
      outcomes: [
        { icon: '↑', title: 'Cleaner first-submission claims', description: 'Fewer rejections, fewer preventable denials, faster adjudication from payers who receive complete claims the first time.' },
        { icon: '↓', title: 'Denial rates that trend downward', description: 'Root cause analysis on every denial category so the same mistakes stop repeating every single month.' },
        { icon: '✓', title: 'AR aging that actually gets worked', description: 'Aging buckets assigned, prioritized, and touched regularly — before payers close the follow-up window.' },
        { icon: '$', title: 'Payments that match contracted rates', description: 'Underpayments identified, documented, and pursued. Payers cannot quietly underpay indefinitely without being challenged.' },
        { icon: '⚡', title: 'Faster, more predictable cash flow', description: 'Cleaner submissions plus faster follow-up equals shorter days in AR and less variation in monthly collections.' },
        { icon: '◎', title: 'Visibility leadership can actually act on', description: 'Regular reporting with commentary — not just data exports. Leadership understands what is happening, not just what was billed.' },
        { icon: '→', title: 'A front desk that is not drowning in billing work', description: 'When RCM is properly managed at the back end, the interruptions and error corrections that burden your front desk start to shrink.' },
        { icon: '✗', title: 'No revenue hiding inside your own system', description: 'Unworked claims, missed charges, expired auths, unposted payments — found, worked, and closed. Nothing sits idle because nobody is watching it.' }
      ]
    },

    compare: {
      eyebrow: 'Why not just hire more RCM staff?',
      title: 'Hiring solves headcount. <em>It does not always solve workflow.</em>',
      description: 'The instinct when revenue is slipping is to add more people. But often the problem is not the number of people — it is the structure, the oversight, and the operational system around them.',
      rows: [
        { label: 'Time to start working', hbs: 'Days, not months', other: '4–8 weeks to onboard' },
        { label: 'Payroll, benefits, taxes', hbs: 'None', other: '$60K–$90K+ per year' },
        { label: 'Coverage during absence', hbs: 'Always covered by the team', other: 'Gaps when staff is out' },
        { label: 'Scales with practice volume', hbs: 'Flexible and immediate', other: 'Requires new hiring cycle' },
        { label: 'Reporting and visibility', hbs: 'Built-in, regular, reviewed', other: 'Depends on staff initiative' },
        { label: 'Multi-payer expertise', hbs: 'Across payer types', other: 'Limited to individual experience' },
        { label: 'Works inside your EHR', hbs: 'From day one', other: 'Requires dedicated training time' }
      ]
    },

    // NEW: Who This Is For Section
    targetAudience: {
      eyebrow: 'Who this is for',
      title: 'Built for practices that are serious <em>about their revenue cycle.</em>',
      description: 'We work best with organizations that have real billing volume, complex payer mixes, and a clear need for structured RCM oversight — not just basic claim submission.',
      practiceTypes: [
        { type: 'Medical Practices', description: 'Primary care, internal medicine, and specialty practices with active payer contracts and ongoing billing volume.' },
        { type: 'Dental Practices', description: 'General dentistry and specialty practices managing insurance billing, pre-authorizations, and treatment plan collections.' },
        { type: 'Behavioral Health Clinics', description: 'Mental health, therapy, and substance use practices navigating the specific complexity of behavioral health payer requirements.' },
        { type: 'Urgent Care Centers', description: 'High-volume practices that need fast eligibility, clean claims, and reliable daily billing operations without manual gaps.' },
        { type: 'Specialty Clinics', description: 'Orthopedics, cardiology, oncology, dermatology, and other specialty practices with complex coding and payer requirements.' },
        { type: 'Multi-Location Practices', description: 'Groups managing billing across multiple sites, providers, and tax IDs who need consistent, centralized RCM support.' },
        { type: 'MSOs & Billing Groups', description: 'Management services organizations and billing companies needing embedded RCM support across a portfolio of practices.' },
        { type: 'Healthcare Administrators', description: 'Operations leads who need a reliable RCM partner they can trust — and do not want to manage billing staff directly.' }
      ]
    },

    // NEW: Final CTA Section
    finalCta: {
      eyebrow: "Let's look at your numbers",
      title: "You already know something in your revenue cycle is not working. <em>Let's find it together.</em>",
      description: "A short conversation is enough to identify where your collection gaps are, what is sitting unworked in your AR, and whether we are the right team to help you fix it. No commitment required.",
      buttons: [
        { text: 'Book a revenue cycle review', variant: 'light' },
        { text: 'Talk to our team first', variant: 'ghost' }
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required'
    }
  }
};