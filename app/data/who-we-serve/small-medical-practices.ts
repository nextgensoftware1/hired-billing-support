import { SolutionData } from '@/app/data/solutionTypes';

export const smallMedicalPractices: SolutionData = {
  title: 'Small Medical Practice Billing Support | HBS',
  subtitle: 'Give your small team the operational depth of a larger organization.',
  description: 'Relieve overloaded teams with billing, AR, denials, credentialing, authorizations, and admin support built for small practices.',

  hero: {
    eyebrow: 'Small Medical Practices',
    title: 'A small practice deserves the same billing <em>depth as a large one.</em>',
    subtitle: 'Solo providers and small groups often carry the full billing burden on one or two staff members. When that team is stretched, revenue leaks  and it leaks quietly. HBS gives small practices full-cycle RCM support without the overhead of a full-time billing department.',
    description: '',
  },

  sections: {
    pain: {
      eyebrow: 'The small practice reality',
      title: 'Your team is not failing. <em>They are doing too many things at once to do any of them properly.</em>',
      ledgerEyebrow: 'Where the pressure lives',
      ledgerHeading: 'The specific gaps <em>behind the daily grind.</em>',
      monologue: [
        'On any given morning in a small practice, your front desk is managing check-in, answering phones, handling scheduling questions, verifying insurance, responding to patient portal messages, and processing prior authorization requests. Your biller — if you have one — is entering charges, submitting claims, and managing the denial queue, all while responding to questions from the provider about why a specific claim has not paid.',
        'By afternoon, the prior authorization that needed to be submitted today has been pushed to tomorrow. The denial from three weeks ago is still sitting in the work queue because new claims keep coming in. The AR aging report was reviewed last month, but nothing systematic happened after that.',
        '"Revenue leaks quietly in a small practice — not through any single catastrophic failure, but through the accumulation of small delays, missed follow-ups, and deferred tasks that each cost a small amount until they collectively cost a significant one."',
        'The problem is not capability. It is bandwidth. The same team handling patient care logistics simply does not have enough uninterrupted hours to also manage billing, AR, denials, authorizations, and payer follow-up at the level those functions require.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Denials sit unworked while new claims come in',
          description: 'There is never a clean moment to work the denial queue. New visits generate new claims. New claims always feel more urgent than last week\'s denials. So the denials keep aging until some are past appeal deadline — and the revenue is gone.',
        },
        {
          num: '02',
          title: 'AR follow-up only happens when cash flow gets tight',
          description: 'The AR aging report exists. Someone looks at it occasionally. But systematic follow-up on aged claims — calling payers, checking portals, escalating stuck accounts — requires time that never becomes available during normal operations.',
        },
        {
          num: '03',
          title: 'One staff absence disrupts the entire workflow',
          description: 'When a single person is out, the tasks they carry disappear with them. Billing queues build. Authorizations go unsubmitted. Phones go unanswered longer. A small practice has no operational redundancy — every person is also a single point of failure.',
        },
        {
          num: '04',
          title: 'Prior authorizations expire or get missed under schedule pressure',
          description: 'Authorization tracking requires daily attention. In a small practice where every staff member is managing multiple competing priorities, the authorization that needed follow-up gets missed — and the resulting denial arrives after the patient has already been seen.',
        },
        {
          num: '05',
          title: 'Hiring another person is expensive and does not always solve the problem',
          description: 'Adding an in-house staff member means recruitment, onboarding, training, benefits, and management — costs that begin immediately and deliver full value only after months. And if the underlying workflows are not organized, more staff produces more of the same inconsistency at higher cost.',
        },
      ],
    },

    solution: {
      eyebrow: 'The solution',
      title: 'The operational depth of a larger team. <em>Without the payroll of one.</em>',
      description: 'Hired Billing Support takes ownership of the billing and administrative functions that are currently being managed around the edges of a busy small practice — and manages them consistently, systematically, and with the attention they deserve.',
      process: [
        {
          num: '01',
          title: 'Billing and claims management with daily attention',
          description: 'Charge entry, claim scrubbing, submission, and status tracking handled daily — not when someone finds time between clinical tasks.',
        },
        {
          num: '02',
          title: 'AR follow-up on a defined schedule',
          description: 'Every aging bucket assigned, every claim touched on schedule — 30, 60, 90, and 120-day accounts followed up systematically instead of reactively.',
        },
        {
          num: '03',
          title: 'Denial management with root cause tracking',
          description: 'Every denial worked within a defined window, every root cause documented, every pattern identified — so the same denial stops happening every month.',
        },
        {
          num: '04',
          title: 'Prior authorization coordination',
          description: 'Authorization requests tracked, submitted, followed up on, and documented — so expired or missing auths stop creating denials that were entirely preventable.',
        },
        {
          num: '05',
          title: 'Eligibility verification before every visit',
          description: 'Insurance verified against the actual payer before every appointment — not at check-in when it is too late to address coverage problems before the visit.',
        },
        {
          num: '06',
          title: 'Regular reporting to the practice owner',
          description: 'Collection rates, denial trends, AR aging — reported regularly with plain-language commentary so the practice owner understands what is happening without needing to interpret raw data.',
        },
      ],
    },

    services: {
      eyebrow: 'Services that fit small practices',
      title: 'Operational support sized for how small practices actually work. <em>Not enterprise software. Not a call center.</em>',
      items: [
        {
          num: '01',
          title: 'Medical Billing & Claims',
          description: 'Daily charge entry, claim scrubbing, electronic submission, and status tracking — consistent revenue cycle execution without depending on bandwidth that does not exist.',
        },
        {
          num: '02',
          title: 'AR Management',
          description: 'Aging buckets assigned and worked on a defined schedule — payer calls, portal follow-up, and escalation when accounts stall.',
        },
        {
          num: '03',
          title: 'Denial Management',
          description: 'Every denial reviewed, corrected, appealed when appropriate, and root cause documented — so denial rates decline over time rather than staying constant.',
        },
        {
          num: '04',
          title: 'Prior Authorization Support',
          description: 'Authorization requests tracked, submitted, and followed up on — expiration monitoring included so missed auths stop creating avoidable claim failures.',
        },
        {
          num: '05',
          title: 'Eligibility Verification',
          description: 'Insurance verified before every appointment through systematic daily checks — not the morning of the visit when problems cannot be resolved in time.',
        },
        {
          num: '06',
          title: 'Coding Support',
          description: 'ICD-10, CPT, and modifier accuracy reviewed before claims submit — coding errors caught pre-submission rather than discovered through denials.',
        },
        {
          num: '07',
          title: 'Patient Communication Support',
          description: 'Inquiry response, appointment follow-up, patient balance questions, and insurance communication — so front desk staff focus on the patients in front of them.',
        },
        {
          num: '08',
          title: 'Credentialing Maintenance',
          description: 'License expirations, malpractice renewals, and payer recredentialing cycles tracked and managed — so nothing lapses while the team is focused on daily operations.',
        },
      ],
    },

    workflow: {
      eyebrow: 'How we fit into your daily workflow',
      title: 'We work inside your existing systems. <em>Not alongside them as another thing to manage.</em>',
      description: 'Support that requires your team to use a separate platform, file uploads, or a new process creates more work, not less. We operate inside the tools you already run.',
      items: [
        { num: 'AM', label: 'Eligibility Check', sublabel: 'Next-day patients' },
        { num: 'Daily', label: 'Charge Entry', sublabel: 'Same-day or next' },
        { num: 'Daily', label: 'Claims Submit', sublabel: 'Scrubbed first' },
        { num: 'Daily', label: 'Auth Queue', sublabel: 'Pending tracked' },
        { num: 'Daily', label: 'Denial Review', sublabel: '24–48hr response' },
        { num: 'Weekly', label: 'AR Follow-Up', sublabel: 'All buckets worked' },
        { num: 'Monthly', label: 'Owner Report', sublabel: 'Collections · Trends' },
      ],
    },

    howWeWork: {
      eyebrow: 'How HBS works as your extended team',
      title: 'Not a vendor you report to. <em>A teammate who works in your system.</em>',
      description: 'The distinction between a vendor relationship and a team extension is not just language — it is how work gets done, how communication happens, and whether the practice feels the difference.',
      process: [
        {
          num: '01',
          title: 'We access your EHR and billing system directly',
          description: 'We log in to your system. We work your queues. No file exports, no external portals, no additional steps for your staff.',
        },
        {
          num: '02',
          title: 'We follow your workflow — and help improve it',
          description: 'We adapt to how your practice operates, not the other way around. Where we find gaps, we flag them and document the fix.',
        },
        {
          num: '03',
          title: 'We communicate where your team communicates',
          description: 'EHR messaging, email, phone — we are reachable through the channels your staff already uses. No support tickets, no waiting for a queue.',
        },
        {
          num: '04',
          title: 'We report to you on a regular schedule',
          description: 'Monthly performance reports with plain-language commentary — what the numbers mean, what changed, and what you should consider doing next.',
        },
        {
          num: '05',
          title: 'We scale as your practice grows',
          description: 'New providers, new payers, new service lines — the support scales with you without a new hiring cycle or an onboarding delay.',
        },
      ],
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the repetitive. <em>People handle the judgment.</em>',
      machineLabel: 'AI-assisted workflows',
      humanLabel: 'Human specialists',
      machine: [
        'Eligibility verification scheduling and results tracking',
        'Claim submission status monitoring and denial alerts',
        'AR aging bucket prioritization and follow-up scheduling',
        'Prior authorization expiration tracking and reminders',
        'Denial pattern categorization and trend reporting',
        'Monthly performance reporting and KPI tracking',
      ],
      human: [
        'Payer calls, portal follow-up, and claim escalation',
        'Denial review, correction, and appeal writing',
        'Prior authorization coordination and correction responses',
        'Coding review and documentation alignment',
        'Patient communication and billing question responses',
        'Practice owner reporting and operational recommendations',
      ],
      pullQuote: '"A small practice does not need less operational support than a large one. In many ways, it needs more — because there is no margin for the errors that a larger organization can absorb. What changes with size is the cost structure of the support, not the need for it."',
    },

    results: {
      eyebrow: 'What changes',
      title: 'Your team does their work. <em>We do the billing and AR work.</em>',
      outcomes: [
        {
          icon: '↓',
          title: 'Denial rates decline systematically',
          description: 'Root causes identified and addressed — not just individual claims corrected and the same error repeated next month.',
        },
        {
          icon: '✓',
          title: 'AR aging is worked consistently',
          description: 'Every bucket assigned, every claim followed up on schedule — the pile that was growing starts shrinking.',
        },
        {
          icon: '$',
          title: 'Revenue leakage stops compounding',
          description: 'Missed authorizations, unworked denials, and aging AR addressed systematically — the small amounts that add up to large losses start being recovered instead.',
        },
        {
          icon: '→',
          title: 'Front desk focus returns to patients',
          description: 'Billing questions, denial follow-up, and payer calls removed from front desk responsibilities — staff manage what is in front of them without divided attention.',
        },
        {
          icon: '◎',
          title: 'Practice owner has reporting, not just intuition',
          description: 'Monthly performance review with actual numbers, trend direction, and commentary — so decisions about the practice are based on data, not guesswork.',
        },
        {
          icon: '⚡',
          title: 'Growth becomes possible without hiring first',
          description: 'Operational depth added without in-house payroll — the practice can serve more patients before adding headcount.',
        },
      ],
    },

    compare: {
      eyebrow: 'Why hiring more staff is not always the answer',
      title: 'Adding people to a broken workflow <em>produces more broken output.</em>',
      description: 'The solution to operational overload in a small practice is not always more headcount. Often it is better structure around the people already there — and scalable support for the tasks that consistently fall behind.',
      rows: [
        {
          label: 'Denial follow-up',
          hbs: 'Systematic — every denial worked',
          other: 'When someone finds time',
        },
        {
          label: 'AR aging attention',
          hbs: 'Defined schedule — all buckets',
          other: 'When cash flow creates urgency',
        },
        {
          label: 'Staff absence coverage',
          hbs: 'HBS team covers the workflow',
          other: 'Tasks disappear with the person',
        },
        {
          label: 'Prior authorization tracking',
          hbs: 'Proactive — daily monitoring',
          other: 'Reactive — discovered after denial',
        },
        {
          label: 'Cost to add capacity',
          hbs: 'No payroll, no benefits, no onboarding',
          other: '$50K–$70K+ annually per hire',
        },
        {
          label: 'Practice owner visibility',
          hbs: 'Monthly reporting with commentary',
          other: 'Intuition and occasional reports',
        },
      ],
    },

    finalCta: {
      eyebrow: 'Start with a practice review',
      title: 'If your small team is already at capacity, <em>the answer is not asking them to do more.</em>',
      description: 'We start with a review of your current billing and operations — showing you where revenue is leaking, what is falling behind, and what a dedicated support model would change. No commitment required.',
      buttons: [
        { text: 'Relieve my practice team', variant: 'light' },
        { text: 'Talk to our small practice team', variant: 'ghost' },
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required',
    },
  },
};
