import { SolutionData } from '../solutionTypes';

export const psychiatry: SolutionData = {
  title: 'Psychiatry Billing Services | HBS',
  subtitle: 'Specialty-aware behavioral health billing with session limit tracking, telehealth support, and parity compliance',
  description: 'Support behavioral health revenue with eligibility, session limits, telehealth billing, denials, AR follow-up, and RCM workflows.',
  hero: {
    eyebrow: 'Psychiatry & Behavioral Health',
    title: 'Behavioral health billing has specific rules   <em> most billing vendors get wrong.</em>',
    subtitle: ' Session limits, parity compliance, telehealth modifiers, prior authorization tracking  psychiatry and behavioral health billing requires specialty knowledge that a generic billing team rarely has.',
    description: 'HBS provides behavioral health billing support that understands how your payers actually process your claims.',
  },
  sections: {
    pain: {
      eyebrow: 'The psychiatry billing reality',
      title: 'Mental health parity is the law. <em>Payers enforce it inconsistently — and billing errors let them.</em>',
      ledgerEyebrow: 'Where the revenue pressure builds',
      ledgerHeading: 'The specific billing gaps <em>behind the specialty workflow.</em>',
      monologue: [
        'Mental health parity requires that behavioral health benefits be comparable to medical benefits. In practice, payers apply inconsistent eligibility rules, session limits that are not always clearly disclosed, and telehealth coverage variations that change by state and plan year. A psychiatry practice that is not verifying mental health benefits specifically — not just general medical coverage — is billing into gaps it cannot see.',
        'Your providers document carefully. Your team submits claims. And then a denial arrives because the session was the 61st when the plan limits 60, or because the telehealth code was submitted with the wrong modifier for that specific payer, or because the authorization expired three days before the visit and nobody caught the renewal window.',
        '"Behavioral health billing requires the same level of payer-specific attention that any complex specialty does — and in some ways more, because the administrative failures in mental health care have a direct impact on patient access to ongoing treatment."',
        'The consequences are not just financial. When a billing gap disrupts coverage, the patient\'s care continuity is at risk. Psychiatry billing done well protects both the revenue and the relationship.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Mental health eligibility requires a different verification than medical coverage',
          description: 'Verifying that a patient has insurance is not the same as verifying their behavioral health benefits. Session limits, outpatient mental health deductibles, telehealth parity application, and separate mental health authorizations all require a specific eligibility check — not a general one.',
        },
        {
          num: '02',
          title: 'Session limits expire without warning unless someone is tracking them',
          description: 'A patient with a 60-session annual limit hits visit 60. No one flagged that a request for additional sessions needed to be submitted at visit 50. The practice continues treating. The claims deny. Revenue disappears for visits that were clinically necessary and delivered.',
        },
        {
          num: '03',
          title: 'Telehealth billing adds a layer of payer-specific complexity',
          description: 'Psychiatry and telepsychiatry claims require payer-specific place of service codes, modifiers, and documentation — and payer rules for telehealth reimbursement have changed repeatedly. A single incorrect modifier produces a denial that takes weeks to resolve.',
        },
        {
          num: '04',
          title: 'Documentation gaps trigger medical necessity denials',
          description: 'Psychiatry documentation must support the session type, duration, diagnosis, and clinical necessity. When documentation is incomplete or does not match the billed code, payers deny on medical necessity grounds — producing denials that require clinical documentation review before they can be appealed.',
        },
        {
          num: '05',
          title: 'AR grows quietly in small psychiatry practices',
          description: 'A solo or small group psychiatry practice does not always have dedicated billing staff. Claims sit, payer follow-up falls behind, and AR ages past appeal windows before anyone has time to address it. The revenue was earned — it is just not being collected.',
        },
      ],
    },
    solution: {
      eyebrow: 'The solution',
      title: 'Behavioral health billing that understands <em>parity rules, session limits, and telehealth complexity.</em>',
      description: 'Hired Billing Support manages psychiatry and behavioral health billing with the payer-specific knowledge the specialty requires — verifying mental health benefits specifically, tracking session limits proactively, handling telehealth claims correctly, and following up on AR before it ages past recovery.',
      process: [
        {
          num: '01',
          title: 'Mental health eligibility verification',
          description: 'Benefits verified against mental health coverage specifically — session limits, telehealth parity, outpatient mental health deductibles, and prior authorization requirements — before the first claim is submitted.',
        },
        {
          num: '02',
          title: 'Session limit tracking and renewal management',
          description: 'Authorization and session limit expiration tracked per patient and payer — renewal requests initiated before limits are reached so treatment continuity is not disrupted by an administrative gap.',
        },
        {
          num: '03',
          title: 'Telehealth claim handling with payer-specific codes',
          description: 'Telepsychiatry claims submitted with the correct place of service codes, modifiers, and documentation for each payer — payer-specific telehealth requirements applied consistently rather than assumed.',
        },
        {
          num: '04',
          title: 'Documentation-aware billing review',
          description: 'Claims reviewed against documentation before submission — session type, duration, diagnosis code, and billed code aligned so medical necessity denials are caught pre-submission rather than discovered through a denial.',
        },
        {
          num: '05',
          title: 'Denial management with behavioral health context',
          description: 'Denials reviewed with knowledge of behavioral health payer rules — parity law violations identified, medical necessity denials appealed with appropriate clinical documentation support, and patterns flagged for upstream correction.',
        },
        {
          num: '06',
          title: 'AR follow-up on a defined schedule',
          description: 'Aged claims worked systematically — payer portals checked, parity compliance issues escalated, and appeals submitted before window deadlines — so revenue does not age past recovery.',
        },
      ],
    },
    services: {
      eyebrow: 'Services that fit psychiatry practices',
      title: 'Specialty-aware billing for behavioral health. <em>Not general billing applied to a complex specialty.</em>',
      items: [
        {
          num: '01',
          title: 'Behavioral Health Eligibility Verification',
          description: 'Mental health benefits checked specifically — session limits, telehealth parity, outpatient mental health deductibles, and authorization requirements before each visit.',
        },
        {
          num: '02',
          title: 'Session Limit & Authorization Tracking',
          description: 'Per-patient, per-payer session tracking with renewal alerts — so authorization gaps never disrupt ongoing treatment or produce avoidable denials.',
        },
        {
          num: '03',
          title: 'Telepsychiatry Billing Support',
          description: 'Telehealth claims submitted with payer-specific codes, modifiers, and documentation requirements applied correctly for each plan and state.',
        },
        {
          num: '04',
          title: 'Psychiatry Claim Submission',
          description: 'E&M, therapy session, medication management, and psychiatric evaluation claims submitted with correct CPT codes, modifiers, and documentation alignment.',
        },
        {
          num: '05',
          title: 'Denial Management',
          description: 'Behavioral health denials reviewed with parity law awareness — parity violations flagged, medical necessity appeals supported, and denial patterns addressed at the root.',
        },
        {
          num: '06',
          title: 'AR Follow-Up & Recovery',
          description: 'Aged AR worked on a defined schedule — payer portals, follow-up calls, and appeals submitted before window deadlines so revenue does not age into loss.',
        },
        {
          num: '07',
          title: 'Credentialing & Panel Maintenance',
          description: 'Credentialing applications, payer panel additions, and recredentialing cycles managed — keeping providers active with the payers their patients use.',
        },
        {
          num: '08',
          title: 'Patient Scheduling & Communication Support',
          description: 'Appointment follow-up, recall outreach, and patient balance communication — so the clinical relationship is supported by consistent administrative follow-through.',
        },
      ],
    },

    workflow: {
      eyebrow: 'Behavioral health billing workflow',
      title: 'From eligibility to payment. <em>Every step specialty-aware.</em>',
      description: 'Behavioral health billing has more payer-specific variation than most specialties. Every step in the workflow requires mental health-specific knowledge — not general billing applied to a different code set.',
      items: [
        { num: '01', label: 'MH Eligibility', sublabel: 'Benefits · Parity' },
        { num: '02', label: 'Auth / Session', sublabel: 'Limits tracked' },
        { num: '03', label: 'Visit Documented', sublabel: 'Code alignment' },
        { num: '04', label: 'Claim Submitted', sublabel: 'Correct modifier' },
        { num: '05', label: 'Payer Review', sublabel: 'Follow-up scheduled' },
        { num: '06', label: 'Denial Response', sublabel: 'Parity-aware' },
        { num: '07', label: 'Payment', sublabel: 'Revenue collected' },
      ],
    },

    denialPatterns: {
      eyebrow: 'Common psychiatry denial patterns',
      title: 'The denials behavioral health practices <em>see most often — and how we address them.</em>',
      description: 'Psychiatry denials cluster around a small number of predictable causes. Identifying the pattern is the first step to preventing it.',
      patterns: [
        {
          tag: 'Authorization',
          tagClass: 'tag-auth',
          title: 'Session Limit Exceeded',
          description: 'Plan benefit exhausted without a renewal request in place. Prevented through proactive session tracking and timely extension submissions.',
        },
        {
          tag: 'Eligibility',
          tagClass: 'tag-elig',
          title: 'Mental Health Benefit Verification Failure',
          description: 'General coverage confirmed but MH-specific benefits not checked. Prevented through specialty-specific eligibility verification.',
        },
        {
          tag: 'Documentation',
          tagClass: 'tag-doc',
          title: 'Medical Necessity — Insufficient Documentation',
          description: 'Session documentation does not clearly support clinical necessity for billed service type. Prevented through pre-submission documentation alignment review.',
        },
        {
          tag: 'Coding',
          tagClass: 'tag-coding',
          title: 'Telehealth Modifier / POS Error',
          description: 'Incorrect place of service or modifier for payer-specific telehealth rules. Prevented through payer-specific telehealth billing standards applied at submission.',
        },
        {
          tag: 'Payer Rule',
          tagClass: 'tag-payer',
          title: 'Parity Violation — Benefit Applied Differently',
          description: 'Payer applying mental health deductible or cost-sharing differently than medical benefits. Addressed through parity compliance escalation with supporting documentation.',
        },
        {
          tag: 'Authorization',
          tagClass: 'tag-auth',
          title: 'Service Not Covered Under Plan Auth',
          description: 'Visit type differs from what was authorized. Prevented through authorization matching at claim submission.',
        },
      ],
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Automation where speed matters. <em>Specialists where judgment does.</em>',
      machineLabel: 'AI-assisted specialty workflows',
      humanLabel: 'Human billing specialists',
      machine: [
        'Session limit tracking per patient and payer with renewal alerts',
        'Mental health eligibility verification scheduling and results tracking',
        'Claim submission status monitoring and payer response tracking',
        'Denial categorization by reason code and payer pattern',
        'AR aging alerts and follow-up scheduling by payer',
        'Telehealth modifier requirement tracking by payer and state',
      ],
      human: [
        'Mental health parity compliance assessment and escalation',
        'Session limit renewal requests and authorization negotiations',
        'Medical necessity appeal construction with clinical documentation',
        'Telehealth claim review with payer-specific rule application',
        'Payer portal follow-up and AR escalation decisions',
        'Denial root cause identification and upstream process corrections',
      ],
      pullQuote: '\"Behavioral health billing requires specialty-specific knowledge at every step — from eligibility verification that actually checks mental health benefits to denial appeals that invoke parity law correctly. Generic billing does not produce consistently different results than billing done without specialty knowledge.\"',
    },
    results: {
      eyebrow: 'What changes',
      title: 'Psychiatry revenue that reflects <em>the clinical work being delivered.</em>',
      outcomes: [
        {
          icon: '◎',
          title: 'Session limits tracked proactively',
          description: 'No more surprise denials when a patient hits their annual limit — renewal requests submitted in advance so treatment continuity is protected.',
        },
        {
          icon: '✓',
          title: 'Telehealth claims submitted correctly the first time',
          description: 'Payer-specific codes, modifiers, and documentation applied at submission — telehealth denials become preventable rather than expected.',
        },
        {
          icon: '$',
          title: 'AR worked before it ages past recovery',
          description: 'Payer follow-up on a defined schedule — aged claims addressed, appeals submitted on time, and revenue recovered that would otherwise be written off.',
        },
        {
          icon: '↓',
          title: 'Denial rates decline across payers',
          description: 'Root cause patterns identified and addressed upstream — the same authorization and documentation denials stop repeating every month.',
        },
        {
          icon: '→',
          title: 'Providers focus on patients, not paperwork',
          description: 'Billing, authorization, eligibility, and AR work managed by HBS — providers spend their clinical hours on mental healthcare, not administrative follow-up.',
        },
        {
          icon: '⚡',
          title: 'Parity violations identified and escalated',
          description: 'Mental health benefits applied incorrectly by payers identified and challenged — ensuring coverage actually reflects the parity rights patients are entitled to.',
        },
      ],
    },
    compare: {
      eyebrow: 'Why psychiatry billing needs specialty-aware support',
      title: 'Generic billing applied to behavioral health <em>misses the complexity that creates the denials.</em>',
      description: 'The denial patterns in psychiatry are predictable and preventable — but only when the billing team understands mental health parity rules, session limit mechanics, telehealth coverage variation, and the documentation standards specific to behavioral health.',
      rows: [
        {
          label: 'MH eligibility verification',
          hbs: 'Mental health benefits checked specifically',
          other: 'General coverage only',
        },
        {
          label: 'Session limit management',
          hbs: 'Proactive — renewals before limits hit',
          other: 'Discovered through denial',
        },
        {
          label: 'Telehealth claim accuracy',
          hbs: 'Payer-specific codes and modifiers',
          other: 'Standard submission — frequent errors',
        },
        {
          label: 'Denial appeals',
          hbs: 'Parity-aware — regulatory basis included',
          other: 'Generic appeal letters',
        },
        {
          label: 'AR follow-up cadence',
          hbs: 'Defined schedule — all buckets',
          other: 'When someone finds time',
        },
        {
          label: 'Billing team specialty knowledge',
          hbs: 'Behavioral health trained',
          other: 'General medical billing',
        },
      ],
    },

    finalCta: {
      eyebrow: 'Start with a psychiatry billing review',
      title: 'If your behavioral health practice is seeing denials, aging AR, or telehealth billing errors, <em>specialty-aware support changes the outcome.</em>',
      description: 'We start with a review of your current billing performance — identifying denial patterns, eligibility gaps, session limit exposures, and AR aging issues. No commitment required.',
      buttons: [
        { text: 'Strengthen psychiatry billing', variant: 'light' },
        { text: 'Talk to our behavioral health team', variant: 'ghost' },
      ],
      trustLine: 'HIPAA · BAA on every engagement · Specialty-trained billing team · No long-term contract required',
    },
  },
};
