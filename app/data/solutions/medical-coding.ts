// app/data/solutions/medical-coding.ts

import { SolutionData } from '../solutionTypes';

export const medicalCoding: SolutionData = {
  title: 'Medical Coding Services for Healthcare | HBS',
  subtitle: 'A clean claim starts with accurate coding. Yours may be leaving the door before anyone has checked.',
  description:
    'Strengthen claim accuracy with ICD-10, CPT, HCPCS, documentation review, and coding support that reduces avoidable denials.',
  hero: {
    eyebrow: 'Medical Coding',
    title: 'A wrong code does not just get denied.<em> It gets underpaid  or flagged.</em>',
    subtitle: ' Coding errors cost practices revenue in two directions: undercoding leaves money on the table, overcoding creates compliance exposure. Most practices never see either problem clearly until it is expensive.',
    description:
      'HBS provides specialty-aware coding review that catches errors before claims submit and before auditors do.',
    card: {
      title: '— Coding Accuracy · 30-day view',
      stats: [
        { label: 'ICD-10 Accuracy', value: '96%', class: 'green' },
        { label: 'CPT Accuracy', value: '94%', class: 'green' },
        { label: 'Modifier Accuracy', value: '88%', class: 'amber' },
        { label: 'Doc–Code Alignment', value: '97%', class: 'green' },
        { label: 'Coding Denial Rate', value: '<span class="dash-pill pill-green">2.1% ↓</span>' },
        { label: 'Errors Caught Pre-Submit', value: '14', class: 'green' }
      ],
      dividerStats: [
        { num: '341', label: 'Claims Reviewed' },
        { num: '0', label: 'Unbilled Visits' },
        { num: '$18.4K', label: 'Revenue Protected', color: 'var(--signal-deep)' }
      ]
    }
  },
  sections: {
    pain: {
      eyebrow: 'The coding reality every practice knows',
      title: 'Coding happens under pressure. <em>Accurate coding requires something pressure never allows.</em>',
      monologue: [
        'The provider finishes a complex visit, documents quickly between the next patient, and the coder assigns a code based on what the chart says. Or what the chart implies. Or what it usually says for this type of visit.',
        'Nobody is being careless. The coder is experienced. The provider documented. But the documentation was rushed, the modifier was not specified, and the diagnosis did not quite align with the procedure as the payer reads it. The claim goes out. Three weeks later, it comes back denied.',
        '"You already know the pressure of submitting claims while hoping the documentation is strong enough to support them. That hope is not a revenue strategy."',
        'Coding accuracy is not just a billing problem. It is a documentation problem, a workflow problem, and a communication problem between the clinical side and the billing side of your practice. When those two sides are not aligned — the codes that go out do not always match the care that was delivered.',
      ],
      ledgerEyebrow: 'Where the problem lives',
      ledgerHeading: 'The specific gaps <em>behind the surface.</em>',
      ledger: [
        {
          num: '01',
          title: 'Codes are selected under schedule pressure',
          description:
            'Coders work at the pace the schedule demands. When there is no time to verify that the documentation fully supports the selected code level, the code gets assigned and the claim moves forward — with whatever risk that creates.',
        },
        {
          num: '02',
          title: 'Documentation does not always support the billed service',
          description:
            'The provider performed the service. But the chart entry does not document it completely enough to satisfy the payer\'s review criteria. The code is technically correct. The documentation just does not prove it — and payers make decisions based on what they can see, not what the provider intended.',
        },
        {
          num: '03',
          title: 'Modifier errors create silent revenue loss',
          description:
            'One missing modifier. One incorrect modifier. One modifier that was required for this specific payer but not flagged in the workflow. The claim gets reduced, denied, or bundled — and without a systematic review, the error repeats on every similar claim going forward.',
        },
        {
          num: '04',
          title: 'Payer coding rules change and nobody tracks them',
          description:
            'Payers update their coding requirements regularly. LCD updates, CPT revisions, NCCI edits, payer-specific bundling rules. When those changes are not captured and reflected in the billing workflow, claims start failing for reasons the team did not see coming.',
        },
        {
          num: '05',
          title: 'Coding errors repeat across providers and over time',
          description:
            'When a coder makes a systematic error — the same wrong code for the same procedure type — that error multiplies across every similar claim until someone catches it. Without a regular coding review, those patterns go unnoticed for months.',
        },
        {
          num: '06',
          title: 'Incorrect coding creates compliance exposure',
          description:
            'Upcoding, undercoding, and unbundling are not just billing errors. They are compliance risks. Without a layer of review that catches these patterns before they become habits, the practice accumulates exposure it does not know is building.',
        },
      ],
    },
    solution: {
       eyebrow: 'The solution',
      title: 'Accurate coding before the claim goes out. <em>Not a correction after it comes back denied.</em>',
      description:
        'Hired Billing Support embeds coding support directly into your billing workflow — reviewing codes, verifying documentation alignment, flagging modifier issues, and ensuring that what goes out matches both the care delivered and the payer\'s requirements.',
      process: [
        {
          num: '01',
          title: 'Coding review before submission',
          description:
            'We review codes against documentation before claims go out — not after denials arrive. ICD-10 accuracy, CPT selection, modifier application, and diagnosis-procedure linkage reviewed on every claim in scope.',
        },
        {
          num: '02',
          title: 'Documentation-to-code alignment',
          description:
            'We review whether the clinical documentation supports the billed service level. When it does not, we flag the gap before submission — not after a payer rejects the claim for insufficient documentation.',
        },
        {
          num: '03',
          title: 'Payer-specific rule application',
          description:
            'Different payers have different coding requirements. We apply those rules at the claim level so your coding reflects what each payer actually requires, not just what is generally correct.',
        },
        {
          num: '04',
          title: 'Error pattern identification and feedback',
          description:
            'When a coding error repeats across claims or providers, we document the pattern, identify the root cause, and communicate the finding to your coding team or billing manager so it stops recurring.',
        },
        {
          num: '05',
          title: 'Specialty-specific coding support',
          description:
            'Coding for surgical procedures, E/M visits, mental health services, and specialty care requires specific knowledge. We provide coding support aligned to your specialty and payer mix.',
        },
        {
          num: '06',
          title: 'Denial root cause — coding category',
          description:
            'When a claim is denied for a coding reason, we trace the exact error, correct the claim, and document the root cause so the same denial does not repeat.',
        },
      ],
    },
    services: {
       eyebrow: 'Coding services included',
      title: 'Every layer of coding accuracy. <em>Reviewed before the claim leaves your system.</em>',
      description:
        'We do not specialize in one piece of the coding puzzle. We own the full workflow so nothing falls in the gap between departments or responsibilities.',
      items: [
        {
          num: '01',
          title: 'ICD-10-CM Coding Review',
          description:
            'Diagnosis code accuracy, specificity, and linkage reviewed against clinical documentation before submission.',
        },
        {
          num: '02',
          title: 'CPT / HCPCS Coding Review',
          description:
            'Procedure code accuracy, bundling checks, and payer-specific code applicability reviewed at the claim level.',
        },
        {
          num: '03',
          title: 'Modifier Review',
          description:
            'Modifier necessity, accuracy, and payer-specific modifier requirements reviewed on every applicable claim.',
        },
        {
          num: '04',
          title: 'E/M Level Review',
          description:
            'Evaluation and management code level supported by documentation — MDM, time, or both — verified before submission.',
        },
        {
          num: '05',
          title: 'Documentation Alignment Review',
          description:
            'Clinical documentation reviewed against billed service to verify the chart supports the code level selected.',
        },
        {
          num: '06',
          title: 'Specialty-Specific Coding',
          description:
            'Coding support tailored to your specialty — surgical, behavioral health, primary care, or specialty services — and your active payer mix.',
        },
        {
          num: '07',
          title: 'NCCI / Bundling Review',
          description:
            'National Correct Coding Initiative edits and payer bundling rules checked before submission to prevent avoidable bundling denials.',
        },
        {
          num: '08',
          title: 'Coding Denial Analysis',
          description:
            'Denied claims reviewed for coding root cause — error identified, claim corrected, pattern documented to prevent recurrence.',
        },
        {
          num: '09',
          title: 'Coding Accuracy Reporting',
          description:
            'Regular coding accuracy reports by provider, code type, and denial reason — with trend analysis and specific recommendations.',
        },
        {
          num: '10',
          title: 'Coder Feedback Support',
          description:
            'Coding error patterns communicated to your billing or coding team with specific, actionable feedback — not just a list of corrections.',
        },
      ],
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the repetitive. <em>People handle the judgment.</em>',
      description:
        'Coding is not purely manual work. But it is also not something that can be handed entirely to automation. The practices that win are the ones that use both correctly.',
      machine: [
        'Code-to-documentation alignment checking across claim queues',
        'NCCI edit and bundling rule application before submission',
        'Payer-specific coding rule library maintenance and flagging',
        'Modifier requirement detection and alert generation',
        'Coding error pattern tracking across providers and code types',
        'Coding denial categorization and trend reporting',
      ],
      human: [
        'Clinical documentation interpretation and code level judgment',
        'E/M level determination based on MDM or time criteria',
        'Specialty-specific coding decisions requiring clinical context',
        'Documentation gap communication to providers and coders',
        'Denial root cause analysis and corrected claim submission',
        'Coding feedback delivery with specific, actionable guidance',
      ],
      pullQuote: '"One small coding mismatch can delay payment, trigger a denial, or create a compliance concern weeks after the visit. AI catches the pattern. People make the judgment call about what to do next."'
    },
    results: {
      eyebrow: 'What changes',
      title: 'Coding done right before the claim goes out. <em>Not fixed after it comes back.</em>',
      description: '',
      outcomes: [
        {
          icon: '↑',
          title: 'Higher clean claim rate on first submission',
          description:
            'Fewer coding errors reaching the payer means fewer rejections, faster adjudication, and a cleaner AR from the start.',
        },
        {
          icon: '↓',
          title: 'Coding-related denials decline month over month',
          description:
            'When coding errors are caught pre-submission and root causes are addressed, the same denial reasons stop repeating.',
        },
        {
          icon: '$',
          title: 'Revenue protected before it is lost',
          description:
            'Undercoding, missed charges, and documentation gaps identified before submission — so revenue is captured rather than abandoned.',
        },
        {
          icon: '◎',
          title: 'Compliance exposure reduced',
          description:
            'Systematic coding errors — upcoding patterns, unbundling habits, documentation misalignments — identified and corrected before they accumulate into audit risk.',
        },
        {
          icon: '→',
          title: 'Coders and billers get clear feedback',
          description:
            'Error patterns communicated with specific, actionable guidance — so your team learns from what is found, not just corrects it.',
        },
        {
          icon: '✓',
          title: 'Documentation and coding stay aligned',
          description:
            'The clinical record and the billed claim tell the same story — which is what every payer audit and medical necessity review requires.',
        },
      ],
    },
    compare: {
      eyebrow: 'Why coding cannot be a last-minute task',
      title: 'Coding reviewed after a denial costs more <em>than coding reviewed before submission.</em>',
      description:
        'Every coding error that reaches the payer adds denial management time, appeal writing, resubmission overhead, and AR aging. The cost of catching it early is a fraction of the cost of recovering from it late.',
      rows: [
        {
          label: 'Coding error detection point',
          hbs: 'Pre-submission review',
          other: 'After denial arrives',
        },
        {
          label: 'Time to resolution',
          hbs: 'Same-day correction',
          other: '2–4 weeks to recover',
        },
        {
          label: 'Revenue impact',
          hbs: 'Protected before loss',
          other: 'Delayed or lost',
        },
        {
          label: 'Compliance exposure',
          hbs: 'Caught and documented',
          other: 'Accumulates undetected',
        },
        {
          label: 'Error pattern visibility',
          hbs: 'Tracked monthly with trends',
          other: 'Addressed claim by claim',
        },
        {
          label: 'Provider documentation feedback',
          hbs: 'Specific and timely',
          other: 'Rarely communicated',
        },
      ],
    },
    howWeWork: {
      eyebrow: 'How HBS works in your coding workflow',
      title: 'We work inside your billing system. <em>Not in a separate coding portal you have to manage.</em>',
      description: 'Coding support only works if it is embedded in the workflow — not layered on top as an extra step that creates delays.',
      process: [
        { num: '01', title: 'We access your EHR documentation and PM queues', description: 'We review clinical documentation and billing queues in the same systems your team uses. No additional exports or upload steps required.' },
        { num: '02', title: 'We review codes before they move to submission', description: 'Our coding review happens in the pre-submission stage — catching errors before they become denials rather than correcting them after.' },
        { num: '03', title: 'We flag documentation gaps to the right person', description: 'When documentation does not support the billed code, we flag it — to the coder, the biller, or the provider depending on your workflow and SOP.' },
        { num: '04', title: 'We track error patterns and report monthly', description: 'Coding errors are documented by type, frequency, and provider — reported monthly with root cause analysis and specific improvement recommendations.' },
        { num: '05', title: 'We adapt to your payer mix and specialty', description: 'Coding requirements vary by payer and specialty. We apply the right rules for your specific environment — not a generic coding checklist.' }
      ]
    },
    finalCta: {
      eyebrow: 'Start with a coding review',
      title: 'If your coding has not been reviewed recently, <em>revenue is leaving your practice that does not have to.</em>',
      description: 'We start with a review of your current coding accuracy — identifying error patterns, documentation gaps, and denial risks before we discuss anything else. No commitment required to see what we find.',
      buttons: [
        { text: 'Review my coding workflow', variant: 'light' },
        { text: 'Talk to our coding team', variant: 'ghost' }
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required'
    }
  }
};
