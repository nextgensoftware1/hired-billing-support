
import { SolutionData } from '../solutionTypes';

export const arDenialFixation: SolutionData = {
  title: 'Denial Management Services for Medical Claims | HBS',
  subtitle: 'For medical practices & specialty clinics',
  description: 'Fix claim denials at the root with payer follow-up, appeals, correction workflows, and denial pattern tracking.',

  hero: {
    eyebrow: 'Denial Management',
    title: 'Denials are not random. They leave a pattern and <em>that pattern is fixable.</em>',
    subtitle: 'Most practices work denials one at a time. HBS traces them upstream, identifies the workflow gap creating the pattern, fixes the root cause, and appeals what is recoverable now.',
    description: 'The same denial stopping recurring is worth more than winning a single appeal.',
    card: {
      title: '— Denial Trend Dashboard · 30-day',
      denialRows: [
        { label: 'Total denials received', value: '47 claims', class: 'warn' },
        { label: 'Worked and resolved', value: '39 <span class="denial-pill pill-good">83%</span>', class: 'good' },
        { label: 'In appeal', value: '6 <span class="denial-pill pill-warn">Active</span>' },
        { label: 'Unworked denials', value: '0', class: 'good' },
        { label: 'Top cause — Missing auth', value: '18 claims', class: 'warn' },
        { label: 'Denial rate vs. last month', value: '↓ 2.1%', class: 'good' },
        { label: 'Appeal reversal rate', value: '76% <span class="denial-pill pill-good">Strong</span>', class: 'good' }
      ],
      gapCallout: {
        label: '— Root cause addressed this month',
        value: 'Auth workflow updated — same denial won\'t repeat.'
      }
    }
  },

  sections: {
    pain: {
      eyebrow: 'The denial cycle that never ends',
      title: 'You are not fixing denials. <em>You are clearing them.</em>',
      description: 'You are not fixing denials. <em>You are clearing them.</em>',
      monologue: [
        'A denial comes in. Someone on the billing team reviews it, makes a correction, and resubmits. The claim pays. The team moves on.',
        'Next month, the exact same denial shows up. Same reason code. Same payer. Different patient, different date — same problem. Because the correction was a patch, not a fix. The claim was cleared from the queue, but the workflow gap that caused it was never addressed.',
        '"Your team is not doing denial management. They are doing denial recovery — putting out the same fire, in the same room, every single month. Until someone traces why the fire keeps starting."',
        'That is denial fixation. Not just working the denial — finding the upstream cause, correcting the claim, building the right appeal, and closing the workflow gap so the same problem does not repeat. It is the difference between managing your denial rate and actually reducing it.'
      ],
      ledgerEyebrow: 'Why denials keep repeating',
      ledgerHeading: 'Denials are symptoms. The root cause is always <em>somewhere upstream.</em>',
      ledger: [
        { num: '01', title: 'Eligibility was wrong before the visit', description: 'A patient\'s insurance changed. The front desk did not catch it. The claim went out against inactive or incorrect coverage. Working the denial does not prevent the next one. Fixing the eligibility verification process does.' },
        { num: '02', title: 'Authorization was missing or expired at time of service', description: 'The visit happened. The claim was submitted. The payer denied it for no valid authorization. This is a pre-service workflow gap — and fixing the denial after the fact does not close that gap for next month.' },
        { num: '03', title: 'Coding contained a preventable error', description: 'A missing modifier, an incorrect diagnosis link, a procedure requiring documentation that was not attached. These errors are not random — they are usually the result of a recurring knowledge gap or a workflow step being skipped under pressure.' },
        { num: '04', title: 'Payer-specific billing rules were not followed', description: 'Every payer has its own requirements. When those rules are not reflected in the team\'s daily practice, claims keep failing for the same reason until someone tracks the pattern and corrects it at the source — not claim by claim.' },
        { num: '05', title: 'Documentation did not support the billed procedure', description: 'The provider documented the visit. The coder billed based on what was written. The payer denied it because the documentation did not meet their specific criteria for that code level. This is a clinical-billing communication gap that repeats until someone brings both sides together.' },
        { num: '06', title: 'Appeals are filed without strong supporting documentation', description: 'An appeal is submitted with a one-line explanation and no clinical notes or payer-specific reasoning. The payer upholds the denial. The practice accepts the outcome. But a properly constructed appeal would have reversed it.' },
        { num: '07', title: 'Denial trends are never analyzed across the payer mix', description: 'Each denial is treated as an individual event. Nobody pulls back to ask whether a specific payer is denying a specific procedure at a higher-than-expected rate — which would indicate either a payer error, a contract issue, or a systemic billing problem.' }
      ]
    },

    solution: {
      eyebrow: 'Denial fixation — what we do',
      title: 'We do not just work the denial. <em>We find out why it happened and make sure it stops.</em>',
      description: 'Most denial management services work claims. We do too — but we also document the pattern, trace the root cause, and address the upstream workflow gap. That is what we mean by fixation: the problem is identified and fixed, not just cleared from the queue.',
      process: [
        { num: '01', title: 'Denial received and categorized within 24–48 hours', description: 'Every denial reviewed, assigned a root cause category, and entered into the tracking system. No denial sits in a queue without a category and an owner assigned to it.' },
        { num: '02', title: 'Root cause traced to the upstream origin', description: 'We trace every denial back to where the problem started — eligibility, authorization, charge entry, coding, documentation, or submission error. The claim is not corrected until the actual cause is identified.' },
        { num: '03', title: 'Claim corrected at the source of the error', description: 'The correction addresses the actual cause, not just the denial code. If the denial reason is "authorization required," the correction includes documenting why authorization was or was not obtained — not just adding a modifier.' },
        { num: '04', title: 'Appeal submitted with the right documentation', description: 'Appeals constructed with clinical notes, policy citations, and payer-specific supporting language — reviewed before submission, not templated and sent. Each appeal is built to give the reversal request the best possible foundation.' },
        { num: '05', title: 'Upstream workflow updated to prevent recurrence', description: 'The denial reason, the correction, and the upstream gap are documented in the trend report. If the same root cause is creating repeated denials, the relevant workflow step is flagged for process improvement.' },
        { num: '06', title: 'Monthly trend report shows what is improving', description: 'Denial volume by reason code, payer source, and trend direction — with analysis and specific upstream recommendations. Not just a count of denials worked. A roadmap for reducing them.' }
      ]
    },

    services: {
      eyebrow: 'Denial fixation services',
      title: 'Every stage of the denial cycle. <em>Addressed and documented.</em>',
      items: [
        { num: '01', title: 'Denial Intake & Categorization', description: 'Every denial reviewed and categorized by reason code, payer, and date — feeding into the trend tracking system from day one.' },
        { num: '02', title: 'Root Cause Analysis', description: 'Every denial traced to its upstream origin — eligibility, auth, coding, documentation, or submission — so correction targets the source, not the symptom.' },
        { num: '03', title: 'Claim Correction', description: 'Claims corrected at the point of error with payer-specific formatting, modifier review, and documentation attachment when required.' },
        { num: '04', title: 'Corrected Claim Resubmission', description: 'Corrected claims submitted with status tracking through to adjudication. If the resubmission also fails, escalation begins immediately.' },
        { num: '05', title: 'Appeal Writing & Submission', description: 'Appeals constructed with clinical notes, relevant policy citations, and the payer-specific reasoning that gives the reversal the best possible foundation.' },
        { num: '06', title: 'Peer-to-Peer Coordination', description: 'When clinical review is needed, we coordinate the peer-to-peer request with the provider and prepare the clinical summary.' },
        { num: '07', title: 'Eligibility Denial Prevention', description: 'Eligibility-driven denials traced back to the check-in process — with specific flags sent to the front desk workflow so the same error stops repeating.' },
        { num: '08', title: 'Auth Denial Prevention', description: 'Authorization-driven denials traced to the pre-service workflow — with specific process updates recommended to prevent the same auth gap next month.' },
        { num: '09', title: 'Coding & Documentation Feedback', description: 'Coding-related denials fed back to the team with specific notes on what each payer requires to support the billed procedure.' },
        { num: '10', title: 'Timely Filing Protection', description: 'Claims approaching timely filing thresholds flagged and prioritized. No revenue lost because follow-up was delayed past the deadline.' },
        { num: '11', title: 'Payer Rule Tracking', description: 'Payer billing requirement updates tracked and reflected in the submission workflow — so rule changes do not create denial waves that catch the team off guard.' },
        { num: '12', title: 'Denial Trend Reporting', description: 'Monthly reports showing denial volume by reason, payer, and trend direction — with analysis and upstream recommendations for the following month.' }
      ]
    },

    aiHuman: {
      eyebrow: 'AI + human advantage',
      title: 'Pattern detection by machine. <em>Appeals and reasoning by people.</em>',
      machine: [
        'Denial intake and automatic reason code categorization',
        'Trend pattern detection across denial categories',
        'Payer-specific denial rate monitoring and alerting',
        'Timely filing threshold tracking and priority flagging',
        'Appeal deadline monitoring and escalation triggers',
        'Denial rate trend reporting and month-over-month tracking'
      ],
      human: [
        'Root cause analysis on every individual denial',
        'Claim correction with accurate clinical and coding review',
        'Appeal writing with documentation and payer-specific reasoning',
        'Peer-to-peer request coordination with clinical staff',
        'Payer portal escalations and dispute communications',
        'Process improvement recommendations based on denial patterns'
      ]
    },

    results: {
      eyebrow: 'What changes',
      title: 'The same denial stops showing up <em>next month.</em>',
      outcomes: [
        { icon: '↓', title: 'Denial rates decline month over month', description: 'Because root causes are identified and upstream workflows adjusted — not just claims corrected one at a time.' },
        { icon: '↑', title: 'Appeals have a higher reversal rate', description: 'Because they are constructed properly, with the documentation and payer-specific reasoning that actually moves the outcome.' },
        { icon: '✓', title: 'No denial ages out without being worked', description: 'Timely filing deadlines tracked for every denial. Nothing lost because follow-up ran out of time.' },
        { icon: '◎', title: 'Denial trends become visible', description: 'Monthly analysis showing which reasons are increasing, which payers are the source, and what upstream fixes would reduce future volume.' },
        { icon: '→', title: 'Upstream teams get actionable feedback', description: 'Front desk, coders, and providers receive specific information about what is causing downstream denials — so the source gets addressed.' },
        { icon: '$', title: 'Revenue stops being abandoned', description: 'Every denial worked within window, every appeal filed correctly, every root cause addressed. Less revenue abandoned to expired windows and unchallenged payer decisions.' }
      ]
    },

    compare: {
      eyebrow: 'Why denials cannot be ignored',
      title: 'Every unworked denial is revenue that was earned <em>and then abandoned.</em>',
      description: 'A denial is not a loss until it ages past the follow-up window. But without a system that ensures every denial is worked, the percentage that become permanent losses grows quietly every month.',
      rows: [
        { label: 'Denial work turnaround', hbs: '24–48 hours', other: 'Days to weeks' },
        { label: 'Root cause identification', hbs: 'Every denial tracked', other: 'Rarely documented' },
        { label: 'Appeal quality', hbs: 'Constructed and reviewed', other: 'Template-based or not filed' },
        { label: 'Denial trend visibility', hbs: 'Monthly analysis and reporting', other: 'No trend tracking' },
        { label: 'Timely filing protection', hbs: 'Every deadline tracked', other: 'Depends on team awareness' },
        { label: 'Upstream process feedback', hbs: 'Specific and actionable', other: 'Rarely communicated' }
      ]
    },

    finalCta: {
      eyebrow: 'Start with a denial analysis',
      title: 'If the same denial reasons keep showing up, that is a pattern. <em>And we can break it.</em>',
      description: 'We start with a review of your last 60 to 90 days of denials — showing you which reasons are repeating, which payers are the source, and what upstream fix would stop the pattern. No commitment required to see what we find.',
      buttons: [
        { text: 'Review my denials', variant: 'light' },
        { text: 'Talk to our denial team', variant: 'ghost' }
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required'
    }
  }
};