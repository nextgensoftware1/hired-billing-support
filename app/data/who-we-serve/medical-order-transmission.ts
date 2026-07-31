import { SolutionData } from '@/app/data/solutionTypes';

export const medicalOrderTransmission: SolutionData = {
  title: 'Medical Order Transmission Support | HBS',
  subtitle: 'Medical order intake, authorization, eligibility, and workflow management for diagnostic services.',
  description: 'Control lab and imaging order workflows with referral intake, authorization tracking, scheduling support, and billing handoffs.',

  hero: {
    eyebrow: 'Labs & Imaging Centers',
    title: 'Every order gap is a revenue and <em> access risk.</em>',
    subtitle: 'Incomplete orders, missing authorizations, unverified eligibility  billing problems in labs and imaging almost always start at intake, not at the billing stage where they get discovered.',
    description: 'HBS manages the order-to-service workflow so every completed service has a clean billing handoff.',
  },

  sections: {
    pain: {
      eyebrow: 'The lab and imaging operations reality',
      title: 'The order is the beginning, not the end.<br><em>Everything that happens between the order and the result determines whether the service gets paid.</em>',
      description: '',
      monologue: [
        'An order arrives by fax, portal, or phone. It may have all the required information. It may not. The referring provider\'s office may have included the diagnosis code, the ICD-10 that supports medical necessity, the patient\'s current insurance, and the authorization number. Or it may have included the patient\'s name and a handwritten note. What happens next — how completely and systematically the order is processed — determines whether that patient gets scheduled, whether the service gets authorized, and whether the claim that follows gets paid.',
        'Labs and imaging centers often operate with intake processes that work adequately under normal volume but start producing errors under higher volume or staffing pressure. Incomplete orders accumulate. Authorization requests sit waiting for documentation that nobody followed up to collect. Patients arrive for scheduled services without confirmed coverage. Billing teams receive handoff records that are missing the authorization number or the diagnosis code that supports the claim.',
        '"Every delayed order creates a second problem — a follow-up call to the referring office, a patient who cannot be scheduled, a service that was delivered without confirmed authorization, or a claim that arrives at billing with a documentation gap that was created three steps earlier."',
        'The revenue impact of poor order intake is not visible in the intake function. It appears in denial rates, in authorization failures, and in billing exceptions — weeks after the gap that created them. By then, the order that started the problem is long finished and the connection is no longer obvious.',
      ],
      ledgerEyebrow: 'Where the workflow breaks',
      ledgerHeading: 'The specific gaps<br><em>between order received and service delivered.</em>',
      ledger: [
        {
          num: '01',
          title: 'Orders arrive incomplete and the follow-up process is inconsistent',
          description: 'Referring providers submit orders with missing diagnosis codes, outdated insurance information, or insufficient clinical documentation for authorization. Without a systematic follow-up process, these incomplete orders sit — sometimes scheduled without the required information, sometimes delayed without the provider\'s office being informed — creating problems at every downstream step.',
        },
        {
          num: '02',
          title: 'Authorization delays prevent scheduling and create patient access problems',
          description: 'Many imaging and diagnostic services require prior authorization before the patient can be scheduled. When authorization management is reactive — submitted after the order arrives rather than tracked proactively — authorization delays build a backlog of unscheduled orders while the patient waits and the referring provider\'s office begins calling for updates.',
        },
        {
          num: '03',
          title: 'Eligibility is not confirmed before the appointment',
          description: 'A patient who arrives for a diagnostic service without confirmed insurance coverage creates a problem that cannot be resolved in the moment. When eligibility verification happens at check-in rather than at scheduling, the service is already in progress before the coverage gap is discovered — and the billing impact follows regardless of what happens clinically.',
        },
        {
          num: '04',
          title: 'Provider offices call repeatedly for order status and results updates',
          description: 'Referring provider offices contact the lab or imaging center for order status, authorization updates, scheduling confirmations, and results availability. When this communication is not managed proactively — with status updates sent before offices call — the inbound volume consumes staff time that should be managing the order workflow.',
        },
        {
          num: '05',
          title: 'Documentation gaps at intake create billing denials weeks later',
          description: 'An order processed without confirmed authorization, a claim submitted without the medical necessity documentation, or a service billed without the correct diagnosis code — each originates in an intake or authorization step that was not completed correctly. The billing team discovers the gap when the denial arrives, not when the order was received.',
        },
        {
          num: '06',
          title: 'Front desk and intake teams manage too many simultaneous workflow demands',
          description: 'Labs and imaging intake teams handle phones, walk-in scheduling, order review, insurance verification, authorization requests, provider communication, and patient coordination simultaneously — with the same staff, across the same working hours. When volume increases, the tasks with the most immediate urgency get attention, and the systematic documentation work gets deferred.',
        },
      ],
    },

    solution: {
      eyebrow: 'The solution',
      title: 'Order-to-service workflow management<br><em>that protects patient access and downstream revenue simultaneously.</em>',
      description: 'Hired Billing Support manages the full order intake and coordination workflow — reviewing orders at receipt, following up on missing documentation, managing authorization requests, confirming eligibility before scheduling, coordinating provider communication, and handing off complete billing records — so every service that is delivered has the documentation it needs to be paid.',
      process: [
        {
          num: '01',
          title: 'Order intake review at receipt',
          description: 'Every incoming order reviewed for completeness at receipt — diagnosis codes, insurance information, clinical documentation, and ordering provider information checked against the requirements for authorization and billing before the order moves forward in the workflow.',
        },
        {
          num: '02',
          title: 'Missing documentation follow-up with referring providers',
          description: 'Incomplete orders followed up with the referring provider\'s office on a defined schedule — specific documentation requirements communicated, follow-up tracked, and order held for scheduling until the required information is received rather than proceeding with gaps that will create problems downstream.',
        },
        {
          num: '03',
          title: 'Prior authorization management',
          description: 'Authorization requests submitted to payers immediately after order completeness is confirmed — tracking, payer follow-up, and status communication managed so authorizations are obtained before scheduling rather than after the patient has already been seen.',
        },
        {
          num: '04',
          title: 'Eligibility verification before scheduling',
          description: 'Patient insurance verified against the specific service type before the appointment is confirmed — coverage limitations, cost-sharing amounts, and authorization requirements checked so the scheduling process produces appointments with confirmed coverage.',
        },
        {
          num: '05',
          title: 'Proactive provider office communication',
          description: 'Authorization approvals, scheduling confirmations, and results availability communicated to referring provider offices proactively — before they call for updates — reducing inbound inquiry volume and maintaining the provider relationship quality that drives referral volume.',
        },
        {
          num: '06',
          title: 'Clean billing handoff',
          description: 'Completed service records handed off to billing with all required documentation — authorization number, confirmed eligibility, correct diagnosis codes, and medical necessity documentation — so billing processes the claim without the documentation gaps that produce denials.',
        },
      ],
    },

    services: {
      eyebrow: 'Services that fit labs and imaging centers',
      title: 'Every step between order receipt<br><em>and clean billing handoff.</em>',
      description: '',
      items: [
        {
          num: '01',
          title: 'Medical Order Intake Review',
          description: 'Every incoming order reviewed for completeness at receipt — diagnosis codes, insurance, clinical documentation, and ordering provider information checked before the order advances in the workflow.',
        },
        {
          num: '02',
          title: 'Order Transmission Coordination',
          description: 'Orders transmitted to the correct internal workflow with complete information — routing, status tracking, and queue management so orders do not age without a current status.',
        },
        {
          num: '03',
          title: 'Referral Documentation Follow-Up',
          description: 'Incomplete referrals followed up with referring offices on a defined schedule — specific requirements communicated and tracked until complete documentation is received.',
        },
        {
          num: '04',
          title: 'Eligibility & Benefits Verification',
          description: 'Patient coverage verified before scheduling — service-specific benefits, cost-sharing, authorization requirements, and coverage limitations confirmed before the appointment is confirmed.',
        },
        {
          num: '05',
          title: 'Prior Authorization Support',
          description: 'Authorization requests submitted promptly, tracked through payer processing, and followed up so authorizations are confirmed before service dates rather than retroactively requested after.',
        },
        {
          num: '06',
          title: 'Patient Scheduling Coordination',
          description: 'Scheduling supported once authorization and eligibility are confirmed — appointment coordination with confirmed coverage and complete order documentation.',
        },
        {
          num: '07',
          title: 'Provider Office Communication',
          description: 'Proactive status communication to referring offices — authorization approvals, scheduling confirmations, and results availability communicated before offices call for updates.',
        },
        {
          num: '08',
          title: 'Status Tracking & Reporting',
          description: 'Order pipeline tracked from receipt through completion — order volume, authorization status, scheduling confirmation, and incomplete order counts reported to management on a defined schedule.',
        },
        {
          num: '09',
          title: 'Billing Handoff Support',
          description: 'Completed service records assembled with all required billing documentation — authorization number, eligibility confirmation, diagnosis codes, and medical necessity documentation — before billing handoff.',
        },
        {
          num: '10',
          title: 'Denial & AR Coordination Support',
          description: 'Denial and AR issues traced back to the intake or authorization step that created them — workflow corrections implemented so the same documentation gaps stop producing the same billing failures.',
        },
      ],
    },

    workflow: {
      eyebrow: 'Order-to-service workflow',
      title: 'From order received to clean billing handoff.<br><em>Every step documented, every gap addressed before it compounds.</em>',
      description: 'The order intake process is where most lab and imaging billing failures begin. Managing it well — systematically, with documentation requirements enforced at each step — protects both patient access and downstream revenue.',
      items: [
        { num: '01', label: 'Order Received', sublabel: 'Fax · portal · phone' },
        { num: '02', label: 'Intake Review', sublabel: 'Completeness check' },
        { num: '03', label: 'Doc Follow-Up', sublabel: 'Provider office' },
        { num: '04', label: 'Eligibility', sublabel: 'Before scheduling' },
        { num: '05', label: 'Auth Submitted', sublabel: 'Payer-specific' },
        { num: '06', label: 'Auth Confirmed', sublabel: 'Before appt.' },
        { num: '07', label: 'Scheduled', sublabel: 'Complete record' },
        { num: '08', label: 'Billing Handoff', sublabel: 'Clean record' },
      ],
    },

    howWeWork: {
      eyebrow: 'How HBS works with your intake and billing teams',
      title: 'Inside your workflow.<br><em>Not creating a parallel process your team also has to manage.</em>',
      description: 'Order coordination support that requires your intake team to interact with a separate system, process, or communication channel creates its own overhead. We work in your tools, follow your protocols, and coordinate directly with the teams and provider offices your workflow already involves.',
      process: [
        {
          num: '01',
          title: 'We learn your intake workflow and documentation requirements',
          description: 'Before processing a single order, we understand how your facility receives orders, what documentation each service type requires, which payers have specific authorization rules, and how your scheduling and billing teams receive handoffs from intake. We build on your process, not over it.',
        },
        {
          num: '02',
          title: 'We access your order management, scheduling, and eligibility systems directly',
          description: 'Your systems, your portals, your documentation management — we work inside them so every action produces a native record that your team can see, audit, and build on.',
        },
        {
          num: '03',
          title: 'We communicate with referring provider offices in your voice',
          description: 'Every provider office follow-up — missing documentation requests, scheduling confirmations, status updates — follows your communication standards so provider relationships experience a consistent, professional interaction with your facility rather than a vendor interaction.',
        },
        {
          num: '04',
          title: 'We hand off clean records to your billing team',
          description: 'Completed service records assembled with all required billing documentation before handoff — so your billing team processes the claim rather than chasing documentation that should have been collected during intake.',
        },
        {
          num: '05',
          title: 'We report order pipeline status to management',
          description: 'Order volume, authorization status, incomplete order counts, and billing handoff quality reported regularly — giving management current operational visibility without requiring manual compilation from multiple systems.',
        },
      ],
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Automation handles the volume.<br><em>People handle the judgment.</em>',
      machineLabel: 'AI-assisted workflows',
      humanLabel: 'Human operations specialists',
      machine: [
        'Order completeness checking against documentation requirements',
        'Authorization request tracking and payer follow-up scheduling',
        'Eligibility verification scheduling before appointment dates',
        'Incomplete order queue monitoring and follow-up trigger generation',
        'Order pipeline status tracking and management reporting',
        'Billing handoff completeness verification before record transfer',
      ],
      human: [
        'Missing documentation follow-up with referring provider offices',
        'Authorization requests with medical necessity documentation',
        'Payer escalations when authorization decisions are delayed',
        'Provider office communication for status, scheduling, and results',
        'Denial root cause tracing to intake or authorization workflow steps',
        'Management reporting with operational commentary and recommendations',
      ],
      pullQuote: '"Every lab and imaging denial that arrives from billing can be traced to a step in intake or authorization where required information was missing, not followed up on, or not confirmed before the service proceeded. The billing team sees the problem last. The intake team created the opportunity to prevent it first."',
    },

    results: {
      eyebrow: 'What changes',
      title: 'Orders that arrive complete.<br><em>Services that are authorized. Claims that are paid.</em>',
      outcomes: [
        {
          icon: '◎',
          title: 'Incomplete orders caught at intake — not at billing',
          description: 'Documentation gaps identified at order receipt and followed up systematically — so billing receives complete records rather than discovering intake failures weeks later through denials.',
        },
        {
          icon: '✓',
          title: 'Authorizations confirmed before scheduling',
          description: 'Authorization management starts at order receipt — so services are scheduled with confirmed coverage rather than retroactively discovering that authorization was never obtained.',
        },
        {
          icon: '$',
          title: 'Denial rates on auth and documentation denials decline',
          description: 'Authorization failures and documentation denials traced back to intake gaps — and intake workflow corrections produce measurable billing improvement over time.',
        },
        {
          icon: '↓',
          title: 'Provider office inbound inquiry volume decreases',
          description: 'Proactive status communication to referring offices — before they call — reduces the inbound inquiry volume that consumes intake staff time.',
        },
        {
          icon: '→',
          title: 'Billing team receives clean handoff records',
          description: 'Every completed service record includes authorization number, eligibility confirmation, diagnosis codes, and medical necessity documentation — billing processes the claim rather than managing the documentation gap.',
        },
        {
          icon: '⚡',
          title: 'Management has current order pipeline visibility',
          description: 'Order volume, authorization status, incomplete orders, and billing handoff quality reported regularly — operational management based on current data rather than discovered problems.',
        },
      ],
    },

    compare: {
      eyebrow: 'Why order accuracy affects revenue',
      title: 'The billing failure begins at intake.<br><em>The billing team just discovers it last.</em>',
      description: 'Authorization denials, medical necessity failures, and missing documentation denials in labs and imaging centers almost always originate in the order intake or authorization workflow. Managing intake correctly is not an administrative function — it is a revenue protection function.',
      rows: [
        { label: 'Order completeness check', hbs: 'At intake — before workflow advances', other: 'Discovered at billing through denial' },
        { label: 'Authorization management', hbs: 'Proactive — before scheduling', other: 'Reactive — after service delivery' },
        { label: 'Eligibility verification timing', hbs: 'Before appointment confirmation', other: 'At check-in — too late to resolve' },
        { label: 'Provider office communication', hbs: 'Proactive — before they call', other: 'Reactive — in response to inbound calls' },
        { label: 'Billing handoff record quality', hbs: 'Complete documentation included', other: 'Gaps discovered during billing' },
        { label: 'Denial root cause management', hbs: 'Traced to intake — workflow corrected', other: 'Managed at the billing level only' },
      ],
    },

    finalCta: {
      eyebrow: 'Start with an order workflow review',
      title: 'If your facility is seeing authorization denials, billing documentation gaps, or provider inquiry overload,<br><em>the root cause is almost always in the order intake process.</em>',
      description: 'We start with a review of your current order workflow — intake documentation requirements, authorization process, eligibility timing, and billing handoff quality — and show you where gaps are creating downstream revenue impact. No commitment required.',
      buttons: [
        {
          text: 'Strengthen order workflow',
          variant: 'light',
        },
        {
          text: 'Talk to our lab & imaging team',
          variant: 'ghost',
        },
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required',
    },
  },
};
