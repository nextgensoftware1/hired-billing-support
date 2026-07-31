import { SolutionData } from '../solutionTypes';

export const oldAgingAr: SolutionData = {
  title: 'Old AR Recovery for Healthcare Practices | HBS',
  subtitle: 'Recover revenue sitting in 60, 90, 120, and 180+ day accounts receivable',
  description: 'Recover collectible old AR with aging claim review, payer follow-up, appeal support, and focused revenue recovery workflows.',
  hero: {
    eyebrow: 'Old AR Recovery',
    title: 'Before you write it off, find out how much is <em> still collectible.</em>',
    subtitle: ' Old AR is not always dead AR. Most practices leave 15–40% of their aged accounts on the table  not because recovery is impossible, but because nobody has had time to work it systematically.',
    description: 'HBS audits your aging AR, identifies what is still recoverable, and pursues it with a structured recovery process.',
    card: {
      title: '— Aging AR Recovery Snapshot',
      arRows: [
        { label: '0–60 days', value: '$82,400', class: 'ar-green', width: '85%' },
        { label: '61–90 days', value: '$48,200', class: 'ar-amber', width: '58%' },
        { label: '91–120 days', value: '$32,700', class: 'ar-orange', width: '38%' },
        { label: '121–180 days', value: '$21,350', class: 'ar-red', width: '24%' },
        { label: '180+ days', value: '$14,800', class: 'ar-red', width: '14%' }
      ],
      gapCallout: {
        label: '— Estimated collectible (90+ days)',
        value: '$47,200 · recoverable with systematic follow-up'
      },
      tags: [
        { text: '$68,850 OVER 90 DAYS', class: 'before' },
        { text: '68% COLLECTIBLE EST.', class: 'after' }
      ]
    }
  },
  sections: {
    pain: {
      eyebrow: 'Why aging AR stays aging',
      title: 'Old claims do not stay old because <em>they are uncollectible.</em>',
      ledgerEyebrow: 'Why old AR keeps growing',
      ledgerHeading: 'Eight reasons your 90-day bucket <em>is bigger this month than last.</em>',
      monologue: [
        'They stay old because nobody has the uninterrupted time, the prioritized ownership, and the structured process to work through them systematically. New claims always feel more urgent. Old ones get pushed back week after week until they become a backlog that feels too large to start.',
        'And then the write-offs begin. Not because someone decided these accounts were uncollectible — but because they aged past the point where anyone had the bandwidth to dispute them properly.',
        `"The hardest thing about aging AR is that it already feels like a loss before anyone has actually tried to recover it. Most of those claims are not gone. They are just waiting for someone with the time and the structure to go after them."`,
        'That is what an old AR recovery engagement delivers. Not a magic write-off reversal — a systematic, prioritized working of your backlog by a team that has nothing else competing for its attention. Just your aging claims, worked in the right order, through the right channels, before the windows close.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Old claims require more effort per claim than new ones',
          description: 'A 120-day claim requires a full history review, payer contact, follow-up documentation, and often an escalation conversation. A new claim requires a submission. Teams managing both with the same bandwidth will always prioritize the faster work.',
        },
        {
          num: '02',
          title: 'Collectibility is never assessed — so everything looks equally hard',
          description: 'Without a structured review of which aging claims are actually recoverable, old AR looks like one undifferentiated pile of complicated work. A collectibility analysis separates high-priority claims from those needing a different approach — and makes the workload manageable.',
        },
        {
          num: '03',
          title: 'Follow-up history is sparse or missing entirely',
          description: 'When notes from the last follow-up say "called — no answer" or nothing at all, whoever picks up an old claim has to start from scratch. That overhead makes recovery feel slower than it needs to be.',
        },
        {
          num: '04',
          title: 'Timely filing exceptions are never pursued',
          description: 'When a claim has passed the standard timely filing deadline, most teams assume it is lost. But payers often accept exceptions when the delay was caused by a documented reason — payer error, system issue, coverage coordination problem. Those exceptions are rarely pursued.',
        },
        {
          num: '05',
          title: 'Payer-side errors on old claims go unidentified',
          description: 'Some old claims are sitting because the payer made an error — applied a payment to the wrong account, denied a covered service incorrectly, or failed to process a resubmission. Without someone working through the claim history, those errors become permanent.',
        },
        {
          num: '06',
          title: 'Coordination of benefits issues are left unresolved',
          description: 'Claims involving multiple payers often stall when primary payment was not applied correctly before the secondary claim was submitted. These coordination failures compound when nobody has the time to untangle them one by one.',
        },
        {
          num: '07',
          title: 'Write-off decisions are made based on age, not collectibility',
          description: 'When a claim hits 150 days, the default assumption is write-off candidate. But age alone is not a collectibility indicator. Some 180-day claims are fully recoverable. Without a review, those write-offs are premature losses the practice never consciously chose to accept.',
        },
        {
          num: '08',
          title: 'The backlog size itself becomes a psychological barrier',
          description: 'When aging AR totals $80,000 or $200,000, the size of the problem creates a barrier. It is easier to focus on today\'s claims than to face a backlog that feels like it would take weeks. So it keeps growing until someone separates it into a prioritized, workable recovery plan.',
        },
      ],
    },
    solution: {
      title: 'The recovery solution',
      description: 'We turn your aging AR backlog into a prioritized recovery plan. Then we execute it.',
      eyebrow: 'The recovery solution',
      process: [
        {
          num: '01',
          title: 'Complete aging AR audit',
          description: 'A full review of your outstanding AR — every claim categorized by age, payer, value, and last activity. The foundation of a recovery plan that is actually workable, not just a list of old balances.',
        },
        {
          num: '02',
          title: 'Collectibility assessment claim by claim',
          description: 'High-value claims get individual review. Volume buckets get categorical assessment. Output is a prioritized recovery list — each claim categorized as high-priority, standard follow-up, escalation needed, or write-off review required.',
        },
        {
          num: '03',
          title: 'Recovery sequenced by return potential',
          description: 'High-value, high-probability claims worked first. Early cash recovery makes the overall effort visible and valuable quickly — instead of spending weeks on low-probability accounts with marginal returns.',
        },
        {
          num: '04',
          title: 'Each claim worked through the right recovery channel',
          description: 'Payer portal follow-up, phone calls, corrected resubmission, appeal filing, timely filing exceptions, coordination of benefits resolution — each claim gets the approach its specific situation requires.',
        },
        {
          num: '05',
          title: 'Write-offs reviewed and documented',
          description: 'No claim written off without a documented collectibility review and a real attempt at recovery. Every write-off applied with a specific reason — not based on age alone.',
        },
        {
          num: '06',
          title: 'Prevention summary delivered at the end',
          description: 'After the backlog is worked down, we deliver a documented summary of the upstream process gaps that allowed it to age — so your leadership has specific, actionable information to prevent the same pattern from rebuilding.',
        },
      ],
    },
    services: {
      title: 'From audit to recovery. <em>Every step managed.</em>',
      // description: 'From audit to recovery. Every step managed.',
      eyebrow: 'Recovery services',
      items: [
        {
          num: '01',
          title: 'Aging AR Audit',
          description: 'Full review of outstanding AR — every claim by age, payer, value, and last activity. The foundation of a recovery plan that works.',
        },
        {
          num: '02',
          title: 'Collectibility Assessment',
          description: 'Each claim evaluated for recovery probability — based on payer, age, filing deadline status, and claim history. High-probability claims separated and prioritized first.',
        },
        {
          num: '03',
          title: 'Priority Sequencing',
          description: 'Recovery effort sequenced by value and probability. Highest-return claims first so recovery generates momentum from week one.',
        },
        {
          num: '04',
          title: 'Payer Follow-Up & Portal Review',
          description: 'Every prioritized claim followed up through portal and phone — with documented status, next steps, and escalation triggers for unresponsive payers.',
        },
        {
          num: '05',
          title: 'Corrected Claim Resubmission',
          description: 'Old claims that failed due to correctable errors — coding, auth, eligibility, documentation — corrected and resubmitted with full tracking through to adjudication.',
        },
        {
          num: '06',
          title: 'Appeal & Reconsideration Filing',
          description: 'Wrongly denied old claims appealed with clinical notes, policy citations, and payer-specific reasoning. Not template submissions — built to reverse.',
        },
        {
          num: '07',
          title: 'Timely Filing Exception Requests',
          description: 'Claims past standard windows reviewed for exception eligibility. Documented exceptions submitted when payer error, system failure, or COB issues provide valid grounds.',
        },
        {
          num: '08',
          title: 'Coordination of Benefits Resolution',
          description: 'Multi-payer issues identified and resolved — primary payment applied correctly, secondary claim submitted with the right supporting documentation.',
        },
        {
          num: '09',
          title: 'Underpayment Recovery',
          description: 'Payments on old claims reviewed against contracted rates. Underpayments identified and disputed even on claims that already received partial payment.',
        },
        {
          num: '10',
          title: 'Write-Off Review & Documentation',
          description: 'Every write-off applied with documented rationale — not age alone. Write-off logs maintained for audit purposes with specific reasoning for every account closed.',
        },
        {
          num: '11',
          title: 'Recovery Progress Reporting',
          description: 'Regular reports showing which claims were recovered, how much was collected, which are in progress, and which were properly closed — with documented outcome for each.',
        },
        {
          num: '12',
          title: 'Prevention Recommendations',
          description: 'After the old AR is worked down, a documented summary of the upstream gaps that allowed it to build — with specific recommendations so the same backlog does not rebuild.',
        },
      ],
    },
    prioritization: {
      eyebrow: 'How we prioritize collectible claims',
      title: 'Not all aging AR is the same. <em>Knowing the difference is what makes recovery efficient.</em>',
      description: 'The difference between a productive recovery engagement and an exhausting one is prioritization. We work the claims that have the highest return first — and categorize the rest clearly so nothing valuable gets missed.',
      categories: [
        {
          num: 'HIGH',
          title: 'High-priority recovery claims',
          description: 'High dollar value above practice threshold · Claims with documented follow-up history indicating payer delay · Claims approaching timely filing deadlines · Claims with payer-side error indicators · Claims with underpayment flags on prior partial payment.',
        },
        {
          num: 'MID',
          title: 'Standard recovery claims',
          description: 'Claims with partial payment and remaining balance · Claims denied for correctable reasons · Claims requiring coordination of benefits resolution · Claims awaiting payer response to prior outreach · Claims with documentation correction needed.',
        },
        {
          num: 'ESC',
          title: 'Escalation or review required',
          description: 'Claims past standard timely filing (exception review needed) · Complex denial history requiring formal appeal · Claims involving multiple payers and COB conflicts · Payer has not responded to multiple contacts · Claims where write-off eligibility needs formal review before closing.',
        },
      ],
    },
    aiHuman: {
      title: 'Technology finds what is collectible. <em>People do the work of collecting it.</em>',
      // description: 'Technology finds what is collectible. People do the work of collecting it.',
      eyebrow: 'AI + human recovery model ',
      machine: [
        'Aging AR report analysis and collectibility scoring',
        'Timely filing deadline tracking and alert generation',
        'Priority sequencing based on value and probability',
        'Follow-up schedule generation for each recovery tier',
        'Underpayment flagging against contracted rate tables',
        'Recovery progress reporting and milestone tracking',
      ],
      human: [
        'Individual claim collectibility review and judgment',
        'Payer portal research and phone follow-up',
        'Appeal construction with clinical documentation',
        'Timely filing exception request writing and submission',
        'COB dispute resolution and multi-payer coordination',
        'Escalation conversations with payer supervisors and dispute departments',
      ],
      pullQuote: '"The revenue in aging AR is not imaginary. It was earned through actual patient care. Most of it is still collectible. The only thing standing between you and that cash is time — and a structured plan to work through the backlog before the windows close."',
    },
    results: {
      title: 'Cash from revenue you already earned. <em>Clarity on what you have been sitting on.</em>',
      description: 'Cash from revenue you already earned. Clarity on what you have been sitting on.',
      eyebrow: 'What the recovery delivers',
      outcomes: [
        {
          icon: '$',
          title: 'Cash from claims your team did not have time for',
          description: 'Revenue in aging buckets, worked through a prioritized plan, collected and posted — not written off because nobody got to it in time.',
        },
        {
          icon: '◎',
          title: 'A clear collectibility picture of your AR',
          description: 'Not just a balance. A reviewed assessment of what is recoverable, what needs escalation, and what has genuinely reached the write-off threshold.',
        },
        {
          icon: '✓',
          title: 'Write-offs with documented rationale',
          description: 'Every write-off applied with a specific reason — payer deadline exceeded, genuinely uncollectible after exhausting options, or coverage issue. Not based on age alone.',
        },
        {
          icon: '↓',
          title: 'A clean AR your billing team can maintain',
          description: 'Once the backlog is worked to a manageable level, your team — or ongoing HBS support — can maintain it instead of constantly trying to catch up.',
        },
        {
          icon: '→',
          title: 'Prevention roadmap at the end',
          description: 'A documented summary of the upstream gaps that allowed the aging AR to build — with specific recommendations so the same backlog does not rebuild over the next 12 months.',
        },
        {
          icon: '⚡',
          title: 'An engagement with measurable early results',
          description: 'Old AR recovery is a defined project with a clear start point, a structured process, and measurable outcomes visible within the first few weeks of work.',
        },
      ],
    },
    compare: {
      title: 'Every month you wait, more of it <em>becomes uncollectible.</em>',
      description: 'Aging AR does not hold its value. Every month without follow-up, the percentage of recoverable claims in your aging buckets decreases. Once a timely filing deadline passes without a valid exception, the claim is permanently lost.',
      eyebrow: 'Why old AR should not be ignored',
      rows: [
        {
          label: '0–60 days',
          hbs: 'High collectibility — standard follow-up',
          other: 'Begins aging unnoticed',
        },
        {
          label: '61–90 days',
          hbs: 'Active follow-up and escalation',
          other: 'Overlooked for newer claims',
        },
        {
          label: '91–120 days',
          hbs: 'Priority recovery — appeals filed',
          other: 'Write-off risk increasing',
        },
        {
          label: '121–180 days',
          hbs: 'Escalated recovery — exceptions pursued',
          other: 'Most payers approaching deadline',
        },
        {
          label: '180+ days',
          hbs: 'Exception-based — viable for some payers',
          other: 'Written off without review',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Start with an aging AR audit',
      title: 'Let us show you what is still sitting in your AR <em>before we discuss anything else.</em>',
      description: 'The first step is an aging AR audit — we review your outstanding balances, assess collectibility, and show you exactly how much is likely recoverable and where the highest-priority targets are. No commitment required to see the results.',
      buttons: [
        { text: 'Start my AR audit', variant: 'light' },
        { text: 'Talk to our recovery team', variant: 'ghost' }
      ],
      trustLine: 'We audit your AR first · You see what is recoverable before we begin any work · HIPAA · BAA included'
    },
  },
};
