
import { SolutionData } from '../solutionTypes';

export const arManagement: SolutionData = {
  title: 'AR Management for Healthcare Practices | HBS',
  subtitle: 'For medical practices & specialty clinics',
  description: 'Turn unpaid claims into cleaner cash flow with payer follow-up, AR tracking, underpayment review, and revenue visibility.',

  hero: {
    eyebrow: 'AR Management',
    title: 'The money is in your AR.<em>The problem is nobody has time to go get it.</em>',
    subtitle: 'Unpaid claims do not resolve themselves. Without systematic follow-up at every aging bucket, payers deprioritize your accounts  and cash flow tightens while your team manages everything else.',
    description: 'HBS works your AR daily, follows up with every payer, and keeps collections moving on a schedule that does not depend on your team having extra hours.',
    card: {
      title: '— AR Aging Snapshot · Current',
      arRows: [
        { label: '0–30 days', value: '$68,400', class: 'ar-green', width: '80%' },
        { label: '31–60 days', value: '$34,120', class: 'ar-amber', width: '55%' },
        { label: '61–90 days', value: '$21,880', class: 'ar-orange', width: '35%' },
        { label: '91–120 days', value: '$13,340', class: 'ar-red', width: '20%' },
        { label: '120+ days', value: '$8,700', class: 'ar-red', width: '12%' }
      ],
      gapCallout: {
        label: '— Recoverable (60+ days)',
        value: '$43,920 · actively being worked by HBS team'
      }
    }
  },

  sections: {
    pain: {
      eyebrow: 'What AR neglect actually looks like',
      title: 'You already know the feeling of seeing <em>production on paper but not cash in the bank.</em>',
   
      
      monologue: [
        'It is the end of the month. The production number looks reasonable. The schedule was full. Your providers worked hard. And yet the deposit does not match what should have come in.',
        'You pull the AR report. There is a 90-day bucket that has been growing for three months. There are claims from payers your team has been meaning to follow up with. There are payments that came in at the wrong amount that nobody has had time to dispute.',
        '"Uncollected AR is not a sign your team is doing nothing. It is a sign your team is doing everything — and AR follow-up is always the task that loses to the more urgent thing in front of it."',
        'Every week that passes without active follow-up, the claims in your aging buckets become harder to collect. Some will cross a timely filing threshold. Some will go to voicemail indefinitely. And some will quietly become write-offs nobody consciously chose to make.'
      ],
      ledgerEyebrow: 'Why AR stays uncollected',
      ledgerHeading: 'Seven reasons claims age <em>instead of getting paid.</em>',
      ledger: [
        { num: '01', title: 'No one is assigned to specific aging buckets', description: 'When every claim is everyone\'s responsibility, every claim is also nobody\'s priority. Without assigned ownership, follow-up happens when time allows — which is never systematic enough to move the needle on aging accounts.' },
        { num: '02', title: 'Payer portals are not checked on a consistent schedule', description: 'Checking claim status across five different payer portals takes more time than the team has on any given day. So status checks happen when someone gets to it — not on a schedule that keeps claims from aging.' },
        { num: '03', title: 'Follow-up notes are vague and impossible to act on', description: 'Someone calls a payer and writes "called — waiting." Three weeks later, nobody knows what was discussed, what was promised, or whether the next step ever happened. Vague notes produce vague follow-up.' },
        { num: '04', title: 'Underpayments are posted and silently accepted', description: 'A payer posts $184 on a claim with a contracted rate of $248. Someone applies it and moves on. Nobody flags the difference. Over months, those small underpayments add up to a significant sum the practice never consciously agreed to write off.' },
        { num: '05', title: 'Difficult payers are deprioritized in favor of easier ones', description: 'Certain payers are harder to reach, slower to respond, and more complicated to escalate with. Without deliberate prioritization, claims from those payers naturally drift to the back of the queue — and stay there.' },
        { num: '06', title: 'Write-offs are applied based on age, not actual collectibility', description: 'When a claim reaches 150 or 180 days, the default is to write it off. But age alone is not a collectibility indicator. Many old claims are still fully recoverable. Without a review, those write-offs are premature.' },
        { num: '07', title: 'Cash flow visibility comes too late to act', description: 'By the time leadership sees an AR aging report that shows 90-day balances growing, the ideal follow-up window on many of those claims has already started closing. Reactive visibility produces reactive decisions — usually too late.' }
      ]
    },

    solution: {
      eyebrow: 'The solution',
      title: 'We treat your AR as the revenue it already is. <em>And then we go get it.</em>',
      description: 'Hired Billing Support becomes your dedicated AR management team — assigned to your claims, working in your system, communicating with payers every day, and turning outstanding receivables into actual deposits.',
      process: [
        { num: '01', title: 'We assign ownership to every aging bucket', description: 'Every claim is assigned to a specific team member with defined follow-up intervals and escalation triggers. Nothing ages without someone watching it and taking the next action.' },
        { num: '02', title: 'We work payers proactively — before claims get old', description: 'Status is checked on a systematic schedule. Payers are called before the silence becomes a delay. Every interaction is documented with the rep\'s name, date, and what was committed to.' },
        { num: '03', title: 'We escalate when standard follow-up is not moving the claim', description: 'Stuck claims do not just sit. We follow payer-specific escalation paths — supervisor requests, formal reconsiderations, and state-level dispute processes when the situation warrants it.' },
        { num: '04', title: 'We flag underpayments before they become write-offs', description: 'Every payment reviewed against contracted rates. Underpayments identified, documented, and pursued through the correct payer process — not silently applied and forgotten.' },
        { num: '05', title: 'We review write-off eligibility — every time', description: 'No balance written off without a documented collectibility review. We evaluate whether the claim is recoverable, attempt recovery, and document the rationale before a write-off is ever applied.' },
        { num: '06', title: 'We report on movement, not just balances', description: 'Your leadership sees what changed — which claims moved, which were collected, which were escalated. Not just a snapshot. A story of what happened to your revenue this month.' }
      ]
    },

    services: {
      eyebrow: 'AR management services',
      title: 'Every piece of the AR workflow. <em>Assigned, tracked, and worked.</em>',
      items: [
        { num: '01', title: 'Claim Status Tracking', description: 'Regular status checks across payer portals and clearinghouses — on a defined schedule, not when someone finds a spare moment.' },
        { num: '02', title: 'Aging Bucket Management', description: 'Claims organized by age, payer, and dollar value — with assigned ownership and defined follow-up intervals for each bucket.' },
        { num: '03', title: 'Payer Follow-Up Calls', description: 'We call payers. We document every conversation with the rep name, date, and stated outcome. We escalate when responses are slow or vague.' },
        { num: '04', title: 'Escalation Management', description: 'Stuck claims escalated through payer-specific channels — supervisor requests, complaint filings, or state insurance contacts when warranted.' },
        { num: '05', title: 'Underpayment Identification', description: 'Every payment reviewed against contracted fee schedules. Underpayments flagged, documented, and disputed through the correct payer process.' },
        { num: '06', title: 'Corrected Claim Resubmission', description: 'When a claim needs correction to resolve an AR issue, we correct it, resubmit, and track the resubmission through to final adjudication.' },
        { num: '07', title: 'Write-Off Review & Documentation', description: 'No balance written off without a documented collectibility review. Write-off logs maintained with specific rationale for every account closed.' },
        { num: '08', title: 'Cash Flow Reporting', description: 'Regular reports on AR aging movement, collection rates by payer, days in AR, and outstanding balance trends — reviewed with leadership on schedule.' }
      ]
    },

    aiHuman: {
      eyebrow: 'AI + human execution',
      title: 'Systematic tracking by machine. <em>Judgment and communication by people.</em>',
      machine: [
        'Claim status monitoring and aging alert generation',
        'Follow-up task scheduling and queue prioritization',
        'Underpayment flagging against contracted rate tables',
        'ERA auto-matching and payment reconciliation',
        'Payer response pattern tracking by claim type',
        'AR trend reporting and collection rate tracking'
      ],
      human: [
        'Payer calls, portal follow-up, and escalation conversations',
        'Underpayment dispute resolution and payer negotiation',
        'Write-off eligibility review and documentation',
        'Complex claim histories with multiple adjustments',
        'Documentation of every follow-up interaction',
        'Prioritization decisions for limited-window claims'
      ]
    },

    results: {
      eyebrow: 'What changes',
      title: 'When AR is actively managed, <em>cash flow becomes predictable.</em>',
      outcomes: [
        { icon: '✓', title: 'Claims stop aging without action', description: 'Every bucket assigned, every claim touched on schedule. Nothing ages quietly into write-off territory.' },
        { icon: '$', title: 'Collections become consistent', description: 'Systematic follow-up produces predictable monthly collections — less dependent on payer timing, more dependent on your team\'s follow-through.' },
        { icon: '↑', title: 'Underpayments stop disappearing', description: 'Payments are checked against contracts. Differences are pursued. Payers are held to what they owe.' },
        { icon: '◎', title: 'Write-offs have documented rationale', description: 'No balance written off without a specific reason — not based on age alone. The bar for write-off gets higher.' },
        { icon: '⚡', title: 'Payer communication has a paper trail', description: 'Every call, portal check, and escalation documented with the detail needed if a dispute goes further.' },
        { icon: '↓', title: 'Leadership sees what is actually happening', description: 'AR reporting with movement context — not just a balance sheet. Your team understands the story, not just the numbers.' }
      ]
    },

    compare: {
      eyebrow: 'Why internal teams fall behind on AR',
      title: 'It is not a capacity problem. <em>It is a structure problem.</em>',
      description: 'Most billing teams are capable of managing AR well. What they lack is uninterrupted time, assigned ownership, and freedom from the competing priorities that push AR follow-up to last.',
      rows: [
        { label: 'AR follow-up frequency', hbs: 'Defined daily schedule', other: 'When time allows' },
        { label: 'Aging bucket ownership', hbs: 'Assigned per specialist', other: 'Shared, often unclear' },
        { label: 'Underpayment review', hbs: 'Every payment checked', other: 'Skipped under volume' },
        { label: 'Payer escalations', hbs: 'Systematic and documented', other: 'Irregular and inconsistent' },
        { label: 'Write-off review', hbs: 'Structured review required', other: 'Based on age alone' },
        { label: 'Cash flow visibility', hbs: 'Regular reporting with trends', other: 'Reactive and after-the-fact' }
      ]
    },

    finalCta: {
      eyebrow: 'Start with your AR',
      title: 'There is revenue in your system right now that has not been collected. <em>Let\'s go get it.</em>',
      description: 'We can start with a review of your current AR aging — showing you what is collectible, what needs escalation, and where the most recoverable revenue is sitting right now. No commitment required to see what we find.',
      buttons: [
        { text: 'Start an AR review', variant: 'light' },
        { text: 'Talk to our AR team', variant: 'ghost' }
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required'
    }
  }
};