import { SolutionData } from '../solutionTypes';

export const payerInsurerEnrollment: SolutionData = {
  title: 'Payer Enrollment Services for Providers | HBS',
  subtitle: 'Manage payer and insurer enrollment from application to active billing status',
  description: 'Expand payer access with enrollment support, application tracking, payer follow-up, EFT/ERA setup, and approval visibility.',
  hero: {
    eyebrow: 'Payer Enrollment',
    title: 'If you are not enrolled, you cannot get paid no matter<em> how well you bill.</em>',
    subtitle: 'Payer enrollment gaps block revenue before a single claim is submitted. Most practices do not know which payers their providers are missing until a claim comes back unprocessable.',
    description: 'HBS manages enrollment from application to approval and flags every gap before it costs a billing cycle.',
    card: {
      title: 'Payer Enrollment Tracker · Active Applications',
      rows: [
        { dot: 'green', label: 'Blue Cross Blue Shield', value: 'Active — EFT confirmed' },
        { dot: 'green', label: 'Aetna Commercial', value: 'Active — ERA set up' },
        { dot: 'amber', label: 'UnitedHealthcare', value: 'Pending — Day 34 of ~45' },
        { dot: 'amber', label: 'Medicare Part B', value: 'PECOS submitted — Under review' },
        { dot: 'red', label: 'Medicaid — State', value: 'Blocked — Missing W-9' },
        { dot: 'grey', label: 'Cigna Behavioral Health', value: 'Application prep in progress' },
      ],
      stats: [
        { num: '6', label: 'Payers Tracked' },
        { num: '2', label: 'Active & Billing' },
        { num: '1', label: 'Needs Action' },
      ],
      callout: 'UHC approval adds ~$14K/month in billable access.',
    },
  },
  sections: {
    pain: {
      eyebrow: 'The enrollment problem every growing practice faces',
      title: 'Payer enrollment looks like a one-time task. <em>It is actually an ongoing operational function.</em>',
      ledgerEyebrow: 'Where the problem lives',
      ledgerHeading: 'The specific gaps <em>behind the surface.</em>',
      monologue: [
        'A new provider joins. A new service line is added. The practice wants to accept a payer it previously avoided. In every case, the answer is the same: someone needs to navigate payer portals, prepare documentation, submit applications, follow up, respond to requests, and track status across multiple payers simultaneously — for weeks or months.',
        'Most practices try to manage this inside their existing administrative bandwidth. And most of the time, it works — eventually. Applications get submitted late, follow-up is inconsistent, and the timeline stretches from 60 days to 120 days because nobody owns the process with the attention it needs.',
        `"Every week a provider is not enrolled with a payer is a week patients on that plan cannot be seen in-network, claims cannot be submitted, and revenue that should be flowing is not. Enrollment delays are not administrative inconveniences — they are revenue delays."`,
        'The practical challenge is that payer enrollment requires familiarity with each payer\'s specific portal, documentation requirements, processing timelines, and escalation paths. That knowledge is only useful if someone has time to apply it consistently — and that is rarely the case inside a busy administrative team.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Applications take longer than they need to',
          description: 'Payer enrollment timelines are long by nature. But incomplete applications, missing documents, missed portal deadlines, and inconsistent follow-up make them significantly longer than necessary. The difference between a 45-day and a 90-day process is often process quality, not payer speed.',
        },
        {
          num: '02',
          title: 'The practice does not know which payer is holding up approval',
          description: 'Multiple payer applications submitted simultaneously, tracked informally. Someone checks status occasionally. A specific payer has been waiting on a correction request for three weeks — but nobody saw it because the portal was not checked on schedule.',
        },
        {
          num: '03',
          title: 'Providers cannot bill certain plans despite being credentialed',
          description: 'Credentialing and enrollment are separate processes. A provider can be credentialed with a payer but not yet enrolled to bill. Without both processes tracked and completed in parallel, billing-ready status is delayed even when credentialing is complete.',
        },
        {
          num: '04',
          title: 'EFT and ERA setup is not done at enrollment time',
          description: 'Electronic Funds Transfer and Electronic Remittance Advice setup is often left until after enrollment — creating a gap where claims pay but EOBs arrive by paper or direct deposits are not configured correctly. This adds weeks to the practice\'s fully-operational timeline.',
        },
        {
          num: '05',
          title: 'Contract terms and fee schedules are not tracked clearly',
          description: 'Once enrolled, the practice has a payer contract with specific reimbursement rates. Without tracking those rates, the practice cannot identify underpayments — and cannot negotiate from an informed position at renewal.',
        },
        {
          num: '06',
          title: 'No one owns the full enrollment timeline',
          description: 'Enrollment falls between billing, credentialing, and administration — with each team assuming someone else is tracking progress. Without a single owner accountable for the full enrollment timeline, nothing moves at the pace it should.',
        },
      ],
    },
    solution: {
      eyebrow: 'The solution',
      title: 'From application to approval, <em>every payer enrollment step owned and tracked.</em>',
      description: 'Hired Billing Support manages your complete payer enrollment process — preparing applications, managing portals, following up with payers, setting up EFT/ERA, and tracking every application from submission to active billing status.',
      process: [
        {
          num: '01',
          title: 'Payer network assessment and target list',
          description: 'We start by reviewing which payers your practice needs to be enrolled with based on patient demographics, service area, and specialty — and identify gaps between current enrollment and target network participation.',
        },
        {
          num: '02',
          title: 'Application preparation with payer-specific requirements',
          description: 'Applications prepared for each target payer with the correct documentation, W-9, NPI, CAQH reference, and payer-specific supplemental forms — reducing the completion errors that cause applications to come back with corrections.',
        },
        {
          num: '03',
          title: 'Portal submission and submission confirmation',
          description: 'Applications submitted through each payer\'s portal or paper process, with submission confirmation documented and follow-up scheduled from submission date — not when someone remembers to check.',
        },
        {
          num: '04',
          title: 'Payer follow-up on a defined schedule',
          description: 'Status checked with each payer on a scheduled cadence. Correction requests responded to promptly. Escalations made when processing timelines exceed expected windows without explanation.',
        },
        {
          num: '05',
          title: 'EFT and ERA setup at approval',
          description: 'EFT and ERA configuration initiated at the time of approval — not left for a later step — so the practice is fully operational from the first billable claim, not weeks after enrollment completes.',
        },
        {
          num: '06',
          title: 'Enrollment status reporting to leadership',
          description: 'Current enrollment status for every active application reported to practice leadership on a regular schedule — payer, status, estimated timeline, and any action required.',
        },
      ],
    },
    services: {
      eyebrow: 'Enrollment services included',
      title: 'Every layer of payer access. <em>Applied and tracked.</em>',
      description: '',
      items: [
        {
          num: '01',
          title: 'Commercial Payer Enrollment',
          description: 'Applications prepared and submitted to commercial insurers with payer-specific documentation and tracking through network participation approval.',
        },
        {
          num: '02',
          title: 'Medicare Part B Enrollment',
          description: 'PECOS application management, documentation preparation, and follow-up through CMS and Medicare Administrative Contractors.',
        },
        {
          num: '03',
          title: 'Medicaid Enrollment',
          description: 'State Medicaid provider enrollment applications managed with state-specific portal requirements, documentation, and follow-up.',
        },
        {
          num: '04',
          title: 'Managed Care & Specialty Plan Enrollment',
          description: 'HMO, PPO, managed care, and specialty plan enrollment applications managed — including behavioral health, dental networks, and vision plans.',
        },
        {
          num: '05',
          title: 'Group & Facility Enrollment',
          description: 'Group NPI enrollment and facility-level payer participation applications managed alongside individual provider enrollment.',
        },
        {
          num: '06',
          title: 'EFT Setup',
          description: 'Electronic Funds Transfer enrollment initiated at approval so payments route directly to the practice bank account from first claim.',
        },
        {
          num: '07',
          title: 'ERA / EDI Setup',
          description: 'Electronic Remittance Advice and EDI enrollment coordinated with each payer and clearinghouse so claims and payment information flow electronically from day one.',
        },
        {
          num: '08',
          title: 'Re-enrollment & Panel Reopening',
          description: 'Closed panel requests, re-enrollment after gaps, and panel reopening applications managed for payers where the practice previously participated.',
        },
        {
          num: '09',
          title: 'Contracting Coordination Support',
          description: 'Payer contract documentation organized, fee schedule tracking supported, and contract renewal timelines monitored so the practice always knows what it is paid and when to renegotiate.',
        },
        {
          num: '10',
          title: 'Enrollment Status Reporting',
          description: 'Current status, expected approval timelines, and action items for all active enrollment applications reported to leadership on a regular schedule.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Payer enrollment process',
      title: 'From application to active billing. <em>Every step documented.</em>',
      description: 'Enrollment spans weeks to months. Every step in that process needs an owner, a timeline, and a follow-up trigger — or the timeline extends silently.',
      items: [
        { num: '01', label: 'Network Assessment', sublabel: 'Target payers identified' },
        { num: '02', label: 'Docs Prepared', sublabel: 'W-9 · NPI · CAQH' },
        { num: '03', label: 'Application Submitted', sublabel: 'Portal or paper' },
        { num: '04', label: 'Follow-Up', sublabel: 'Weekly status checks' },
        { num: '05', label: 'Corrections', sublabel: 'Responded promptly' },
        { num: '06', label: 'Approval', sublabel: 'Effective date noted' },
        { num: '07', label: 'EFT + ERA Setup', sublabel: 'Electronic configured' },
        { num: '08', label: 'Billing Active', sublabel: 'First claim submitted' },
      ],
    },
    howWeWork: {
      eyebrow: 'How HBS manages enrollment',
      title: 'One team. Full ownership. <em>Every payer. Every step.</em>',
      description: 'Enrollment works when one team owns the full process for every payer simultaneously — not when different people handle different payers with different levels of attention.',
      process: [
        {
          num: '01',
          title: 'We assess your current enrollment and target network',
          description: 'We review which payers you are currently enrolled with, which you need but lack, and which have pending applications that may be stalled or incomplete. We start from an honest current state.',
        },
        {
          num: '02',
          title: 'We prepare and submit applications with payer-specific requirements',
          description: 'Each application prepared with the documentation that specific payer requires — no generic forms, no missing attachments, no incomplete fields that come back as correction requests.',
        },
        {
          num: '03',
          title: 'We check status on a defined schedule — not when we remember',
          description: 'Every application has a follow-up calendar built from submission date. Payer portals checked on schedule. Correction requests responded to within 48 hours.',
        },
        {
          num: '04',
          title: 'We configure EFT and ERA at approval — not later',
          description: 'As soon as enrollment is approved, we initiate EFT and ERA setup so the practice starts receiving payments electronically from the first claim — not after an additional setup delay.',
        },
        {
          num: '05',
          title: 'We report enrollment status to your leadership team',
          description: 'Current status, expected timelines, and action items for every active application reported regularly — so leadership always knows which payers are active, which are pending, and which need attention.',
        },
      ],
    },
    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the tracking. <em>People handle the follow-through.</em>',
      description: '',
      machine: [
        'Application status tracking across multiple payer portals',
        'Follow-up schedule generation and deadline monitoring',
        'Document completeness checking before application submission',
        'Payer correction request detection and alert generation',
        'EFT/ERA setup checklist tracking after approval',
        'Enrollment status dashboard and leadership reporting',
      ],
      human: [
        'Payer-specific application preparation and documentation review',
        'Portal submissions and correction response management',
        'Payer network follow-up calls and escalations',
        'Contracting questions, fee schedule review, and renewal coordination',
        'EFT/ERA setup coordination with payer and clearinghouse',
        'Leadership communication on enrollment progress and decisions',
      ],
      pullQuote: '"Payer enrollment is one of the highest-leverage administrative functions in a practice — because every payer you can bill is a patient population you can serve. Managing it properly is not optional. It is infrastructure."',
    },
    results: {
      eyebrow: 'What changes',
      title: 'Broader payer access. <em>Faster. Without the administrative chaos.</em>',
      description: '',
      outcomes: [
        {
          icon: '⚡',
          title: 'Faster approval timelines',
          description: 'Complete applications, prompt correction responses, and scheduled follow-up shorten enrollment timelines significantly compared to unmanaged processes.',
        },
        {
          icon: '$',
          title: 'Revenue access that opens on schedule',
          description: 'Every enrollment delay is a revenue delay. When enrollment is managed properly, new payer billing access opens when it should — not weeks or months late.',
        },
        {
          icon: '◎',
          title: 'Complete enrollment status visibility',
          description: 'Leadership always knows which payers are active, which are pending approval, and which need action — without chasing anyone for an update.',
        },
        {
          icon: '✓',
          title: 'EFT and ERA configured from day one',
          description: 'Electronic payment and remittance setup completed at approval — so the practice is fully operational from the first billable claim, not weeks later.',
        },
        {
          icon: '→',
          title: 'Expanded patient access',
          description: 'More payer networks mean more patients the practice can serve in-network — improving access, reducing self-pay volume, and supporting growth.',
        },
        {
          icon: '↓',
          title: 'Internal enrollment burden eliminated',
          description: 'Payer portal management, application preparation, and follow-up removed from internal administrative bandwidth — freeing your team for patient-facing work.',
        },
      ],
    },
    compare: {
      eyebrow: 'Why payer enrollment affects growth',
      title: 'Practices with complete payer networks <em>grow faster than practices with enrollment gaps.</em>',
      description: 'Every payer network gap limits patient access, reduces billable volume, and constrains growth. Managed enrollment is not administrative overhead — it is a growth function.',
      rows: [
        {
          label: 'Application timeline',
          hbs: 'Optimized with structured process',
          other: 'Extended by gaps and delays',
        },
        {
          label: 'Correction response time',
          hbs: 'Within 48 hours',
          other: 'Days to weeks — if caught',
        },
        {
          label: 'EFT / ERA setup',
          hbs: 'At approval — same process',
          other: 'Separate step — often delayed',
        },
        {
          label: 'Enrollment status visibility',
          hbs: 'Current and reported regularly',
          other: 'Unclear until a problem surfaces',
        },
        {
          label: 'Internal admin burden',
          hbs: 'Managed by HBS team',
          other: 'Falls on billing / admin staff',
        },
        {
          label: 'Payer network coverage',
          hbs: 'Proactively expanded',
          other: 'Gaps remain until they create problems',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Start with an enrollment review',
      title: 'If your practice has payer enrollment gaps, <em>revenue and patient access are being limited right now.</em>',
      description: 'We start with a review of your current payer enrollment status — identifying gaps, pending applications, and the estimated revenue impact of completing your target network. You see the picture before we discuss anything else.',
      buttons: [
        { text: 'Review payer enrollment', variant: 'primary' },
        { text: 'Talk to our enrollment team', variant: 'ghost' },
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required',
    },
  },
};
