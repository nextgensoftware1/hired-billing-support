import { SolutionData } from '../solutionTypes';

export const providerCredential: SolutionData = {
  title: 'Provider Credentialing Services | HBS',
  subtitle: 'Manage provider credentialing from document collection to payer activation',
  description: 'Get providers billing-ready with credentialing support, CAQH updates, document tracking, payer follow-up, and status visibility.',
  hero: {
    eyebrow: 'Provider Credentialing',
    title: 'Every day a provider is not credentialed is a day, <em>you are not getting paid.</em>',
    subtitle: 'Credentialing delays do not just delay paperwork. They delay revenue  and every week a provider cannot bill their full payer panel is revenue that cannot be recovered later.',
    description: 'HBS manages the full credentialing workflow so providers reach billing-active status as fast as the payer allows.',
    card: {
      title: '— Credentialing Status Board · Active Providers',
      statusCards: [
        { dot: 'green', label: 'Dr. Reyes — Primary Care', status: 'Active · All payers', statusClass: 'done' },
        { dot: 'amber', label: 'Dr. Okafor — Cardiology', status: 'In progress', pill: '3 payers pending', pillClass: 'amber', statusClass: 'pending' },
        { dot: 'amber', label: 'Dr. Kim — Behavioral Health', status: 'CAQH submitted', pill: 'Awaiting review', pillClass: 'amber', statusClass: 'pending' },
        { dot: 'red', label: 'Dr. Patel — Orthopedics', status: 'Blocked', pill: 'Missing DEA', pillClass: 'red', statusClass: 'blocked' },
        { dot: 'grey', label: 'NP Torres — Urgent Care', status: 'Not started · Onboarding Q3', statusClass: 'waiting' }
      ],
      stats: [
        { num: '5', label: 'Providers Tracked' },
        { num: '1', label: 'Blocked — Action', color: 'amber' },
        { num: '0', label: 'Expired Docs', color: 'signal' }
      ],
      actionLabel: '— Next milestone',
      actionValue: 'Dr. Okafor — Aetna approval expected within 18 days.'
    }
  },
  sections: {
    pain: {
      eyebrow: 'The credentialing reality every practice knows',
      title: 'Credentialing looks like an administrative task. <em>It behaves like a revenue bottleneck.</em>',
      ledgerEyebrow: 'Where the problem lives',
      ledgerHeading: 'The specific gaps <em>behind the surface.</em>',
      monologue: [
        'You hired a new provider. They start seeing patients next month. You assumed credentialing was being handled. But three months later, claims are still being denied, the provider is still out of network with half your payers, and your billing team is spending more time explaining the situation than fixing it.',
        'Nobody made a single serious mistake. Documents were collected — mostly. Applications were submitted — eventually. Follow-up happened — sometimes. But credentialing without a systematic, dedicated process almost always produces the same outcome: delays that cost more than anyone budgeted for.',
        '"Credentialing delays do not just slow paperwork. They delay revenue, limit patient access, reduce provider productivity, and force billing teams to work around problems that should have been prevented before the provider\'s first appointment."',
        'The credentialing process has too many moving parts — provider documents, payer-specific requirements, CAQH maintenance, license verifications, malpractice tracking, application follow-up — to be managed casually alongside everything else a busy practice is running.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Provider cannot bill because credentialing is incomplete',
          description: 'The provider is seeing patients. The documentation is there — mostly. But one payer application is stalled, two others have not been started, and the billing team is holding claims because the provider is not yet active in those networks.',
        },
        {
          num: '02',
          title: 'Documents are scattered, missing, or expired',
          description: 'Provider documents — medical school diploma, DEA certificate, malpractice policy, state licenses, board certifications — live in different folders, email threads, and personal devices. When a payer requests something specific, finding it takes longer than it should.',
        },
        {
          num: '03',
          title: 'CAQH profile is outdated or incomplete',
          description: 'CAQH is the foundation most payer applications build on. When it is incomplete, inconsistent, or not updated after a license renewal or address change, applications stall or come back with corrections required.',
        },
        {
          num: '04',
          title: 'Applications are submitted but not tracked',
          description: 'Someone submits a credentialing application. There is no follow-up system, no status tracking, no escalation trigger when a payer goes silent. Weeks pass. The application sits in a queue nobody is checking.',
        },
        {
          num: '05',
          title: 'Recredentialing dates are missed',
          description: 'Most payer contracts require recredentialing every two to three years. Without a systematic tracking system, those dates slip past — sometimes quietly, sometimes with a billing disruption that takes weeks to recover from.',
        },
        {
          num: '06',
          title: 'Nobody has a clear view of credentialing status',
          description: 'The practice owner does not know which providers are fully credentialed, which are pending, which have expiring documents, and which have applications stalled at a specific payer. Without a centralized status view, credentialing management is reactive rather than systematic.',
        },
      ],
    },
    solution: {
      eyebrow: 'The solution',
      title: 'An embedded credentialing team <em>that treats provider readiness as a revenue priority.</em>',
      description: 'Hired Billing Support manages the full credentialing workflow — from initial document collection and CAQH setup through payer application submission, follow-up, status tracking, and ongoing maintenance — so your providers become billing-ready faster and stay that way.',
      process: [
        {
          num: '01',
          title: 'Provider document collection and organization',
          description: 'We collect, organize, and maintain a complete credentialing file for every provider — licenses, DEA, malpractice, board certifications, NPI, CV, and payer-specific requirements — in one accessible, structured location.',
        },
        {
          num: '02',
          title: 'CAQH setup and ongoing maintenance',
          description: 'We build or update CAQH profiles completely and accurately — and maintain them after license renewals, address changes, or practice updates so payer applications have a clean foundation to build on.',
        },
        {
          num: '03',
          title: 'Payer application preparation and submission',
          description: 'Applications prepared and submitted to each target payer with the correct documentation, payer-specific supplemental forms, and accurate provider information — reducing completion errors that cause delays.',
        },
        {
          num: '04',
          title: 'Application status tracking and follow-up',
          description: 'Every application tracked from submission to approval. Payers contacted for status updates on a defined schedule. Escalations made when responses go beyond normal processing timelines.',
        },
        {
          num: '05',
          title: 'Credentialing status reporting to leadership',
          description: 'Clear, current credentialing status for every provider — active, pending, blocked, and upcoming expirations — reported to practice leadership on a regular schedule so nothing is a surprise.',
        },
        {
          num: '06',
          title: 'Recredentialing and expiration management',
          description: 'License expirations, malpractice renewals, and payer recredentialing cycles tracked proactively — renewals initiated before deadlines, not after something lapses and creates a billing gap.',
        },
      ],
    },
    services: {
      eyebrow: 'Credentialing services included',
      title: 'Every step of provider credentialing. <em>Managed and tracked.</em>',
      description: '',
      items: [
        {
          num: '01',
          title: 'Provider Document Collection',
          description: 'Medical degree, state licenses, DEA certificate, malpractice insurance, board certifications, NPI and taxonomy — collected, verified, and organized for every provider.',
        },
        {
          num: '02',
          title: 'CAQH Profile Setup & Maintenance',
          description: 'CAQH built completely and accurately from initial setup through ongoing updates — kept current after every renewal, address change, and practice modification.',
        },
        {
          num: '03',
          title: 'NPI & Taxonomy Review',
          description: 'NPI registration verified, taxonomy codes confirmed to match payer and specialty requirements, and NPPES profile reviewed for accuracy before application submission.',
        },
        {
          num: '04',
          title: 'Commercial Payer Applications',
          description: 'Applications prepared and submitted to commercial payers with payer-specific documentation, supplemental forms, and accurate provider information.',
        },
        {
          num: '05',
          title: 'Medicare & Medicaid Enrollment',
          description: 'Medicare Part B and Medicaid enrollment applications managed through PECOS and state-specific portals — with complete documentation and tracking through approval.',
        },
        {
          num: '06',
          title: 'Hospital & Facility Credentialing Support',
          description: 'Facility and hospital credentialing file preparation supported — privilege applications, medical staff documentation, and peer reference coordination.',
        },
        {
          num: '07',
          title: 'Application Status Follow-Up',
          description: 'Every application tracked with defined follow-up intervals. Payers contacted for status updates. Escalations made when applications stall without explanation.',
        },
        {
          num: '08',
          title: 'License & Certificate Expiration Tracking',
          description: 'State licenses, DEA certificates, malpractice policies, and board certifications tracked for expiration — renewals initiated proactively before gaps create billing disruptions.',
        },
        {
          num: '09',
          title: 'Recredentialing Support',
          description: 'Payer recredentialing cycles managed proactively — applications prepared, submitted, and followed up before the contract renewal window closes.',
        },
        {
          num: '10',
          title: 'Credentialing Status Reporting',
          description: 'Clear, current credentialing status report for all providers — active, pending, blocked, and upcoming expirations — delivered to leadership on a regular schedule.',
        },
      ],
    },    workflow: {
      eyebrow: 'Credentialing workflow overview',
      title: 'From document collection to active billing status. <em>Every step tracked.</em>',
      description: 'Credentialing is a multi-step process with parallel tracks running simultaneously. This is why it requires a dedicated process — not a checklist someone manages between other tasks.',
      items: [
        { num: '01', label: 'Document Collection', sublabel: 'Licenses · DEA · Malpractice' },
        { num: '02', label: 'CAQH Setup', sublabel: 'Profile built & attested' },
        { num: '03', label: 'NPI Verified', sublabel: 'Taxonomy confirmed' },
        { num: '04', label: 'Applications', sublabel: 'Submitted per payer' },
        { num: '05', label: 'Follow-Up', sublabel: 'Status tracked weekly' },
        { num: '06', label: 'Corrections', sublabel: 'Responded promptly' },
        { num: '07', label: 'Approval', sublabel: 'Effective date confirmed' },
        { num: '08', label: 'Billing Active', sublabel: 'Revenue starts' }
      ]
    },
    howWeWork: {
      eyebrow: 'How HBS manages credentialing',
      title: 'Not a checklist. A dedicated process <em>with an assigned team and defined timelines.</em>',
      description: 'Credentialing only stays on track when someone owns every step — not when it is shared responsibility between a billing team that has other priorities.',
      process: [
        {
          num: '01',
          title: 'We review every provider\'s current credentialing status',
          description: 'Before anything else, we assess where each provider stands — what is complete, what is missing, what is expiring, and which payers they need to be active with. We build from an honest current state, not assumptions.'
        },
        {
          num: '02',
          title: 'We collect and organize the full credentialing file',
          description: 'We reach out to providers for missing documents, verify what exists, and organize everything in a structured, accessible credentialing file — so nothing is lost in an email thread or personal folder again.'
        },
        {
          num: '03',
          title: 'We submit applications and set follow-up schedules',
          description: 'Applications submitted to target payers with payer-specific documentation. Follow-up scheduled immediately after submission — not when someone remembers to check.'
        },
        {
          num: '04',
          title: 'We report status to leadership on a regular schedule',
          description: 'Clear, current credentialing status delivered to practice leadership — no surprises, no chasing down updates, no guessing about which provider is active with which payer.'
        },
        {
          num: '05',
          title: 'We manage ongoing maintenance — not just initial applications',
          description: 'License renewals, malpractice updates, CAQH re-attestations, and payer recredentialing cycles tracked and managed on an ongoing basis — not as a fire drill when something lapses.'
        }
      ]
    },    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the tracking. <em>People handle the follow-through.</em>',
      description: '',
      machine: [
        'Provider document expiration tracking and renewal alerts',
        'CAQH profile completeness checking and update reminders',
        'Application submission status tracking and follow-up scheduling',
        'Payer response monitoring and escalation trigger generation',
        'Recredentialing cycle tracking by payer and provider',
        'Credentialing status dashboard maintenance and reporting',
      ],
      human: [
        'Provider document review and completeness verification',
        'CAQH profile building, accuracy review, and attestation coordination',
        'Payer application preparation with payer-specific requirements',
        'Payer portal follow-up calls and correction responses',
        'Escalation decisions when applications stall beyond normal timelines',
        'Leadership communication on credentialing status and decisions',
      ],
      pullQuote: '"Credentialing is not a one-time task. It is an ongoing operational function — and when it is treated as anything less, the practice pays for it in delayed revenue, billing gaps, and provider frustration."'
    },
    results: {
      eyebrow: 'What changes',
      title: 'Providers who are billing-ready. <em>Not billing-delayed.</em>',
      description: '',
      outcomes: [
        {
          icon: '⚡',
          title: 'Faster time to first billable claim',
          description: 'Organized documents, complete CAQH, and submitted applications from day one mean providers reach active status weeks faster than unmanaged processes allow.',
        },
        {
          icon: '◎',
          title: 'Credentialing status always visible',
          description: 'Practice leadership always knows which providers are active, pending, blocked, and approaching renewal — without chasing anyone for an update.',
        },
        {
          icon: '✓',
          title: 'No expiration surprises',
          description: 'Licenses, malpractice policies, DEA certificates, and payer recredentialing cycles tracked proactively — renewals managed before anything lapses.',
        },
        {
          icon: '→',
          title: 'Applications that do not stall',
          description: 'Follow-up happens on a defined schedule. Payer requests responded to promptly. Nothing sits in an inbox waiting for someone to notice it.',
        },
        {
          icon: '$',
          title: 'Revenue that starts when it should',
          description: 'Every credentialing delay is a revenue delay. When credentialing is managed properly, providers start generating billable claims on schedule.',
        },
        {
          icon: '↓',
          title: 'Administrative burden on internal staff reduced',
          description: 'Credentialing coordination removed from the daily responsibilities of billing managers, administrators, and front desk staff who have other priorities.',
        },
      ],
    },
    compare: {
      eyebrow: 'Why credentialing cannot be handled casually',
      title: 'Managed credentialing prevents delays <em>that unmanaged credentialing makes inevitable.</em>',
      description: 'Every credentialing delay has a revenue cost. The difference between a 60-day credentialing process and a 120-day process is six weeks of billable claims that should have been submitted.',
      rows: [
        {
          label: 'Time to billing-active status',
          hbs: 'Faster — structured process',
          other: 'Longer — inconsistent follow-up',
        },
        {
          label: 'Document organization',
          hbs: 'Centralized and current',
          other: 'Scattered across folders and email',
        },
        {
          label: 'CAQH accuracy',
          hbs: 'Maintained and attested',
          other: 'Outdated until someone checks',
        },
        {
          label: 'Application follow-up',
          hbs: 'Defined schedule — proactive',
          other: 'When someone remembers',
        },
        {
          label: 'Expiration management',
          hbs: 'Tracked and renewed early',
          other: 'Discovered after it lapses',
        },
        {
          label: 'Status visibility',
          hbs: 'Clear and current always',
          other: 'Unclear until a problem surfaces',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Start with a credentialing review',
      title: 'If your providers are not fully credentialed with every relevant payer, <em>revenue is being left on the table right now.</em>',
      description: 'We start with a credentialing status review — showing you exactly where each provider stands, what is missing, what is expiring, and what is stalled. You see the full picture before we discuss anything else.',
      buttons: [
        { text: 'Start credentialing review', variant: 'light' },
        { text: 'Talk to our credentialing team', variant: 'ghost' }
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required'
    }
  }
};
