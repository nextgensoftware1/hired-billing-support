import { SolutionData } from '../solutionTypes';

export const practiceLaunch: SolutionData = {
  title: 'Medical Practice Launch Support | HBS',
  subtitle: 'Operational infrastructure coordinated before your practice opens — credentialing, payer enrollment, billing setup, intake workflow, and RCM launch planning so the backend is ready when patient volume arrives.',
  description: 'Launch with a stronger backend through credentialing, payer enrollment, billing setup, workflows, intake, and RCM readiness.',
  hero: {
    eyebrow: ' Practice Launch',
    title: 'Your practice opens once. The billing foundation needs to be right<em> from day one.</em>',
    subtitle: 'Credentialing, payer enrollment, EHR setup, and billing workflows take 90–120 days to establish properly. Practices that start late spend their first six months recovering instead of collecting.',
    description: 'HBS builds your billing and operations foundation before you see your first patient.',
    card: {
      title: 'Practice Launch Readiness · Pre-Open Checklist',
      checklist: [
        { icon: 'done', text: 'Entity formation & tax ID obtained' },
        { icon: 'done', text: 'NPI — Individual & Group registered' },
        { icon: 'done', text: 'CAQH profile built and attested' },
        { icon: 'pending', text: 'Medicare PECOS submitted — Day 28' },
        { icon: 'pending', text: 'Commercial payer apps — 3 submitted, 2 pending' },
        { icon: 'open', text: 'EHR billing module configured' },
        { icon: 'open', text: 'Eligibility verification workflow set up' },
        { icon: 'open', text: 'Patient intake forms finalized' },
      ],
      stats: [
        { num: '3', label: 'Complete', color: 'signal' },
        { num: '2', label: 'In Progress', color: 'amber' },
        { num: '3', label: 'Not Started', color: 'mute' },
      ],
      callout: '6–8 weeks if started today. 4+ months if delayed.',
    },
  },
  sections: {
    pain: {
      eyebrow: 'The launch reality most providers discover too late',
      title: 'Opening the doors is the easy part. <em>Opening the doors is the easy part.</em>',
      description: '',
      ledgerEyebrow: 'Where the problem lives',
      ledgerHeading: 'The specific gaps <em>behind the surface.</em>',
      monologue: [
        'The lease is signed. The equipment is ordered. The provider\'s schedule is filling. And then — two weeks before opening — someone asks whether credentialing is done. Whether payer applications have been submitted. Whether the billing system is configured. Whether staff know how to verify insurance before a patient arrives.',
        'You already know how quickly a practice launch can turn into a stack of forms, portal deadlines, payer follow-ups, missing documents, and unanswered status requests — all competing for attention during the most operationally demanding period a new practice ever faces.',
        `"A practice cannot scale on clinical skill alone. It needs a backend operation that is credentialing-ready, payer-enrolled, billing-configured, and administratively structured before the first patient walks in — not months afterward."`,
        'Most practices open with clinical confidence and operational uncertainty. The clinical work starts immediately. The operational infrastructure catches up slowly, in real time, at the expense of revenue, staff stress, and patient experience. HBS helps practices close that gap before it opens.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Credentialing and enrollment timelines are underestimated',
          description: 'New providers typically expect credentialing and payer enrollment to take four to six weeks. The reality — especially for Medicare, Medicaid, and multiple commercial payers simultaneously — is often three to five months. Starting this process after other launch preparations are complete is a costly sequence error.',
        },
        {
          num: '02',
          title: 'Billing workflow is configured too late',
          description: 'EHR billing module setup, clearinghouse enrollment, charge capture workflow, and claim submission testing require structured configuration time. When billing setup is treated as a task for the week before opening, errors appear in the first week of claims — and take additional weeks to correct.',
        },
        {
          num: '03',
          title: 'Front desk workflow is undefined',
          description: 'How does the front desk verify insurance? What happens when eligibility fails? Who handles prior authorization requests? How are co-pays collected? These questions need documented answers before the first patient — not answers improvised during it.',
        },
        {
          num: '04',
          title: 'The practice opens but claims cannot be submitted',
          description: 'Patients are seen. Charges are entered. And then billing discovers that two major payers have not yet approved enrollment, the clearinghouse is not connected, and the claim submission queue is backed up from the first day. The practice is operating. It is just not getting paid.',
        },
        {
          num: '05',
          title: 'Staffing needs increase before revenue starts',
          description: 'Staff are hired to manage patient volume. But credentialing is not done, payer enrollment is pending, and billing is not generating revenue yet. The practice is carrying operating costs before it can bill for the work being done — a gap that grows the longer operational setup takes.',
        },
        {
          num: '06',
          title: 'No one is managing the launch timeline end to end',
          description: 'Credentialing is being handled by someone. Billing setup is being handled by someone else. Payer enrollment is whoever had time this week. Without a single team coordinating the full launch timeline across all operational tracks simultaneously, timelines diverge and gaps appear.',
        },
      ],
    },
    solution: {
      eyebrow: 'The solution',
      title: 'A coordinated launch infrastructure <em>A coordinated launch infrastructureEM</em>',
      description: 'Hired Billing Support coordinates all operational launch tracks simultaneously — credentialing, payer enrollment, billing setup, intake workflow, and admin structure — so the practice opens on a backend foundation that is ready to generate revenue from day one.',
      process: [
        {
          num: '01',
          title: 'Launch timeline assessment and planning',
          description: 'We review your target opening date, current operational status, and identify every task that needs to be completed — and when it needs to start — to have the practice billing-ready on schedule.',
        },
        {
          num: '02',
          title: 'Credentialing and payer enrollment initiated early',
          description: 'We start credentialing and payer enrollment immediately — not after other tasks are complete. These processes have the longest timelines and must run in parallel with everything else.',
        },
        {
          num: '03',
          title: 'Billing workflow setup and EHR coordination',
          description: 'Charge capture workflow, clearinghouse enrollment, claim submission configuration, and billing module setup coordinated with your EHR team or vendor to ensure the system is ready to submit claims on opening day.',
        },
        {
          num: '04',
          title: 'Front desk and intake workflow documentation',
          description: 'Eligibility verification process, prior authorization workflow, patient intake forms, co-pay collection, and insurance information capture — documented as step-by-step SOPs your staff can follow from day one.',
        },
        {
          num: '05',
          title: 'Launch readiness review before opening',
          description: 'Before the first patient, we review every operational track — what is complete, what is pending, and what contingencies exist for the items still in progress — so leadership opens with a clear-eyed picture of operational status.',
        },
        {
          num: '06',
          title: 'Post-launch support as operations stabilize',
          description: 'We stay engaged in the weeks after opening — supporting billing operations, completing pending enrollments, refining workflows, and ensuring revenue starts flowing before transitioning to an ongoing operations model.',
        },
      ],
    },
    services: {
      eyebrow: 'Practice launch services',
      title: 'Every operational track. <em>Every operational track.EM</em>',
      description: '',
      items: [
        {
          num: '01',
          title: 'Launch Timeline Planning',
          description: 'Complete launch roadmap built around your opening date — every operational task sequenced, assigned, and tracked against the timeline that allows billing to start on schedule.',
        },
        {
          num: '02',
          title: 'Entity & Tax ID Setup Coordination',
          description: 'Business entity formation, EIN setup, and legal structure coordination — ensuring the administrative foundation is in place for payer applications and billing operations.',
        },
        {
          num: '03',
          title: 'NPI Registration',
          description: 'Individual and Group NPI registration through NPPES, taxonomy code selection, and profile verification for accurate payer application submission.',
        },
        {
          num: '04',
          title: 'Provider Credentialing',
          description: 'Document collection, CAQH setup, and payer credentialing applications initiated at launch start — not left until the practice is nearly open.',
        },
        {
          num: '05',
          title: 'Payer Enrollment',
          description: 'Commercial, Medicare, and Medicaid enrollment applications submitted in parallel with credentialing — with follow-up, portal management, and EFT/ERA setup at approval.',
        },
        {
          num: '06',
          title: 'Billing System Setup',
          description: 'EHR billing module configuration, clearinghouse enrollment, claim submission testing, and charge capture workflow setup — ready to submit before the first appointment.',
        },
        {
          num: '07',
          title: 'Front Desk Workflow Documentation',
          description: 'Eligibility verification, prior authorization, intake forms, co-pay collection, and scheduling workflow documented as SOPs your staff can follow from day one.',
        },
        {
          num: '08',
          title: 'Insurance Verification Process Setup',
          description: 'Eligibility verification workflow built — which payers to check, when to check them, how to handle failures, and how to communicate coverage to patients before their visit.',
        },
        {
          num: '09',
          title: 'RCM Launch Planning',
          description: 'Revenue cycle management workflow designed for the practice\'s payer mix, specialty, and volume projection — with reporting structure and billing team responsibilities defined before launch.',
        },
        {
          num: '10',
          title: 'Post-Launch Operations Support',
          description: 'Ongoing operational and billing support in the weeks after opening — completing pending enrollments, resolving early billing issues, and ensuring revenue flows before transitioning to steady-state operations.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Practice launch roadmap',
      title: 'A sequenced operational timeline. <em>A sequenced operational timeline.EM</em>',
      description: 'Every operational track runs on a different timeline. The ones with the longest lead times need to start first — and that means starting before you think you need to.',
      items: [
        { num: ' M-5', label: 'Entity & NPI', sublabel: 'Tax ID · NPPES' },
        { num: 'M-4', label: 'Credentialing', sublabel: 'CAQH · Docs' },
        { num: 'M-3', label: 'Payer Apps', sublabel: 'All payers submitted' },
        { num: 'M-2', label: 'Billing Setup', sublabel: 'EHR · Clearinghouse' },
        { num: 'M-2', label: 'Workflows', sublabel: 'Front desk · Intake' },
        { num: 'M-1', label: 'Readiness Check', sublabel: 'All tracks reviewed' },
        { num: 'Open', label: 'First Patients', sublabel: 'Claims submit Day 1' },
        { num: 'Post', label: 'Revenue Active', sublabel: 'Full billing operational' },
      ],
    },
    howWeWork: {
      eyebrow: 'How HBS supports your launch',
      title: 'One team coordinating all operational tracks. <em>One team coordinating all operational tracks.EM</em>',
      description: 'Launch fails operationally when different tasks are owned by different people with different timelines and no one coordinating the full picture. We provide that coordination.',
      process: [
        {
          num: '01',
          title: 'We map your full launch timeline in week one',
          description: 'Every task identified, sequenced, and assigned a start date based on your opening target — with the long-lead tasks (credentialing, payer enrollment) identified as immediate priorities regardless of what else is happening.',
        },
        {
          num: '02',
          title: 'We run credentialing and enrollment in parallel from the start',
          description: 'These processes take months. We start them immediately — before the EHR is configured, before staff is hired, before the physical space is ready. The timeline does not wait for other things to be done first.',
        },
        {
          num: '03',
          title: 'We configure billing operations ahead of opening',
          description: 'EHR billing setup, clearinghouse connection, claim submission testing, and charge entry workflow — configured and tested before the first patient, not after the first denial.',
        },
        {
          num: '04',
          title: 'We document workflows your staff can use from day one',
          description: 'Eligibility verification, prior authorization, patient intake, insurance collection — step-by-step SOPs for every administrative function, ready for staff training before opening.',
        },
        {
          num: '05',
          title: 'We stay through stabilization, not just opening',
          description: 'The first four to eight weeks after opening are when operational gaps surface. We stay engaged through stabilization — completing pending enrollments, resolving early billing issues, and refining workflows under real conditions.',
        },
      ],
    },
    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the tracking. <em>People handle the follow-through.</em>',
      description: '',
      machine: [
        'Launch timeline tracking and milestone monitoring',
        'Credentialing and enrollment status tracking across all providers',
        'Document collection checklist monitoring and reminder generation',
        'Billing configuration checklist tracking and readiness alerts',
        'Payer application follow-up scheduling and deadline monitoring',
        'Launch readiness dashboard and leadership reporting',
      ],
      human: [
        'Launch timeline planning and task sequencing',
        'Credentialing and payer enrollment management',
        'EHR billing configuration coordination with vendor',
        'Front desk and intake workflow documentation',
        'Post-launch billing support and operational troubleshooting',
        'Leadership guidance on operational decisions and priorities',
      ],
      pullQuote: '"The practices that launch well are not the ones that move fastest. They are the ones that started the right things first — and managed all the tracks simultaneously instead of sequentially."',
    },
    results: {
      eyebrow: 'What changes',
      title: 'A practice that opens billing-ready. <em>A practice that opens billing-ready.EM</em>',
      description: '',
      outcomes: [
        {
          icon: '⚡',
          title: 'Claims submitting from the first week',
          description: 'Credentialing complete, payer enrollment active, billing configured — the practice generates revenue from opening day rather than weeks or months into operations.',
        },
        {
          icon: '◎',
          title: 'Full operational visibility at launch',
          description: 'Leadership knows what is complete, what is pending, and what the contingency is for every operational item — no surprises in the first week of patient care.',
        },
        {
          icon: '✓',
          title: 'Staff have documented workflows to follow',
          description: 'Eligibility verification, prior authorization, intake, and billing processes documented before training — so staff start with clarity, not improvisation.',
        },
        {
          icon: '$',
          title: 'Revenue gap between opening and billing is minimized',
          description: 'The period when the practice is operating but not yet collecting is shorter — reducing the financial pressure that delays cost a new practice in its first months.',
        },
        {
          icon: '→',
          title: 'A backend structure that supports growth',
          description: 'Not just a launch — an operational foundation that scales as providers, locations, and patient volume increase.',
        },
        {
          icon: '↓',
          title: 'Early operational chaos avoided',
          description: 'The first months of a new practice are intense enough clinically. Starting with a structured operational backend means administrative problems do not add to that pressure.',
        },
      ],
    },
    compare: {
      eyebrow: 'Why launch planning affects revenue',
      title: 'Practices that plan operationally <em>Practices that plan operationallyEM</em>',
      description: 'The difference between a well-planned launch and an unplanned one is not just stress — it is months of revenue delay, credentialing gaps, billing errors, and operational inefficiency that compound through the practice\'s first year.',
      rows: [
        {
          label: 'Credentialing start date',
          hbs: '4+ months before opening',
          other: '1–2 months before — too late',
        },
        {
          label: 'First billable claim',
          hbs: 'Opening week',
          other: 'Weeks to months after open',
        },
        {
          label: 'Billing system configuration',
          hbs: 'Complete before first appointment',
          other: 'Configured under patient pressure',
        },
        {
          label: 'Staff workflow documentation',
          hbs: 'Ready for training before open',
          other: 'Built reactively after opening',
        },
        {
          label: 'Revenue gap (open to first payment)',
          hbs: 'Minimized',
          other: 'Extended — months in some cases',
        },
        {
          label: 'Post-launch operational issues',
          hbs: 'Anticipated and managed',
          other: 'Discovered and improvised',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Start with a launch readiness assessment',
      title: 'If you are planning to open a practice in the next six months, <em>If you are planning to open a practice in the next six months,EM</em>',
      description: 'We start with a launch readiness assessment — mapping your timeline, identifying what needs to start immediately, and showing you where the gaps are between your current status and billing-ready. No commitment required to see the picture.',
      buttons: [
        { text: 'Plan my practice launch', variant: 'primary' },
        { text: 'Talk to our launch team', variant: 'ghost' },
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required',
    },
  },
};
