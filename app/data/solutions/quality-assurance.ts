import { SolutionData } from '../solutionTypes';

export const qualityAssurance: SolutionData = {
  title: 'Medical Billing Quality Assurance | HBS',
  subtitle: 'Mistakes in billing are not discovered when they are made. They are discovered when they cost you something.',
  description: 'Add a stronger QA layer across billing, coding, AR, and denials to catch errors early and protect revenue consistency.',
  hero: {
    eyebrow: 'Billing Quality Assurance',
    title: 'Consistent billing quality does not happen<em> by accident.</em>',
    subtitle: ' Without a structured QA process, billing errors accumulate quietly  claim by claim, week by week  until the financial impact becomes impossible to ignore.',
    description: 'HBS provides ongoing billing quality assurance that catches errors at the source before they reach the payer.',
    card: {
      title: '— QA Performance Scorecard · Monthly',
      stats: [
        { label: 'CLAIM ACCURACY', value: '97%', class: 'production' },
        { label: 'CODING QA PASS RATE', value: '95%', class: 'collection-before' },
        { label: 'AR FOLLOW-UP COMPLIANCE', value: '98%', class: 'collection-after' },
        { label: 'DENIAL WORK RATE', value: '100%', class: 'collection-after' },
        { label: 'PROCESS SOP ADHERENCE', value: '91%', class: 'collection-after' }
      ],
      tags: [
        { text: '12 Errors Caught Pre-Submit', class: 'before' },
        { text: '3 Process Gaps Found', class: 'after' },
        { text: '$0 Unreviewed Denials', class: 'after' }
      ],
      actionLabel: '— This month\'s finding',
      actionValue: 'SOP adherence gap in denial follow-up notes — corrected.'
    }
  },
  sections: {
    pain: {
      eyebrow: 'What quality gaps actually look like',
      title: 'Quality problems in billing are quiet <em>until they are suddenly very loud.</em>',
      ledgerEyebrow: 'Where the problem lives',
      ledgerHeading: 'The specific gaps <em>beneath the surface.</em>',
      monologue: [
        'Two billers are following slightly different processes for working denials. Neither is wrong, exactly — but the inconsistency means some denials get thorough notes and some get vague ones, some get escalated and some get marked as closed when they are not, some get resubmitted correctly and some get resubmitted with the same error.',
        'Nobody designed this inconsistency. It emerged because nobody has the time to standardize and verify every step of every workflow, every month. And so the quality of your billing operation depends on who is working on a given day — not on a reliable process that produces consistent outcomes regardless of who is doing the work.',
        'Your team is not doing poor work. They are doing their best work in an environment that lacks the quality infrastructure to catch errors, standardize processes, and verify that the right steps are being taken consistently.',
        'Compliance is the same. Billing compliance risk does not announce itself. It accumulates through coding patterns, documentation habits, and billing practices that nobody is systematically reviewing. By the time it surfaces — in a payer audit, a recoupment demand, or a corrective action plan — the damage is already done.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Errors are found after denials — not before submission',
          description: 'When the first quality check on a claim is the payer\'s adjudication system, every error that exists in your workflow reaches the payer before anyone on your team sees it. The denial is the quality check — and it costs time, delay, and rework every time.'
        },
        {
          num: '02',
          title: 'Different team members follow different processes',
          description: 'Without documented, enforced workflows, each team member develops their own interpretation of the right way to work a denial, follow up on a claim, post a payment, or document an interaction. Inconsistency at scale becomes unpredictable quality.'
        },
        {
          num: '03',
          title: 'Follow-up notes are incomplete or inconsistent',
          description: 'When a biller leaves vague notes on a claim — "called, waiting" — the next person to pick it up cannot build on what was done. They have to start over, duplicate effort, or make assumptions. Incomplete documentation creates rework and gaps.'
        },
        {
          num: '04',
          title: 'Small errors repeat until they become revenue loss',
          description: 'A systematic error — a modifier that is always missing, a code pair that is always bundled incorrectly, a documentation step that is always skipped — repeats across every similar claim until someone runs a QA check and catches the pattern. Without QA, it runs for months.'
        },
        {
          num: '05',
          title: 'Leadership cannot see where the process is breaking',
          description: 'Without QA data — error rates by team member, SOP adherence by workflow step, claim accuracy by provider — leadership is managing by intuition and outcome metrics rather than process data. They know when something went wrong, not where in the workflow it broke.'
        },
        {
          num: '06',
          title: 'Growth makes quality control harder, not easier',
          description: 'Adding providers, locations, or billing volume multiplies every existing inconsistency. A quality gap that was manageable at $500K in annual revenue becomes a significant operational risk at $2M. Growth without quality infrastructure creates proportionally larger problems.'
        }
      ]
    },
    solution: {
      eyebrow: 'The solution',
      title: 'A quality layer that catches problems early <em>and keeps processes consistent as you grow.</em>',
      description: 'Hired Billing Support builds and maintains a systematic QA function across your billing, coding, AR, and denial workflows — reviewing claim accuracy before submission, monitoring process adherence, and delivering performance data that helps leadership manage with confidence.',
      process: [
        {
          num: '01',
          title: 'QA review before claims reach the payer',
          description: 'Claim accuracy reviewed in the pre-submission stage — codes, modifiers, documentation alignment, payer-specific rules — so errors are caught and corrected before they become denials.'
        },
        {
          num: '02',
          title: 'Process standardization and SOP documentation',
          description: 'We document the right process for every billing, coding, and AR workflow — and review adherence to those processes on a regular basis. Inconsistency becomes visible and addressable.'
        },
        {
          num: '03',
          title: 'Performance monitoring by team member and workflow',
          description: 'Error rates, SOP adherence, denial rates, and follow-up quality tracked by team member and workflow step — giving leadership the data to manage performance at the process level, not just the outcome level.'
        },
        {
          num: '04',
          title: 'Error pattern identification and root cause analysis',
          description: 'When errors repeat — same code, same modifier, same documentation gap — we identify the pattern, trace the root cause, and communicate the finding with a specific fix rather than just a correction list.'
        },
        {
          num: '05',
          title: 'QA feedback delivered to the right people',
          description: 'Coders receive coding QA feedback. Billers receive billing process feedback. AR specialists receive follow-up quality feedback. Feedback is specific, actionable, and tied to actual work samples — not generic guidance.'
        },
        {
          num: '06',
          title: 'QA reporting to leadership on a regular schedule',
          description: 'Monthly QA performance report delivered to leadership — error rates, process adherence, identified gaps, corrective actions taken, and trend direction over time. Quality becomes measurable and manageable.'
        }
      ]
    },
    services: {
      eyebrow: 'QA services included',
      title: 'Every layer of billing and coding quality. <em>Reviewed, documented, and improved.</em>',
      description: 'We do not specialize in one piece of the QA puzzle. We own the full workflow so nothing falls in the gap between departments or responsibilities.',
      items: [
        {
          num: '01',
          title: 'Pre-Submission Claim QA',
          description: 'Claims reviewed for accuracy, coding compliance, and payer-specific rules before submission — errors caught and corrected before they reach the payer.'
        },
        {
          num: '02',
          title: 'Coding QA Review',
          description: 'Coding accuracy checked against documentation and payer rules — modifier accuracy, diagnosis-procedure linkage, E/M level support — with error rate tracking by provider and code type.'
        },
        {
          num: '03',
          title: 'AR Follow-Up QA',
          description: 'AR follow-up notes, payer interactions, and escalation decisions reviewed for completeness and process adherence — so claims are worked properly, not just touched.'
        },
        {
          num: '04',
          title: 'Denial Work QA',
          description: 'Denial reviews, corrections, and appeal submissions checked for accuracy and completeness — verifying that every denial is worked correctly, not just cleared from the queue.'
        },
        {
          num: '05',
          title: 'Payment Posting QA',
          description: 'Payment postings reviewed for accuracy — ERA matching, manual EOB application, adjustment codes, and underpayment identification — before balances are finalized.'
        },
        {
          num: '06',
          title: 'SOP Development and Documentation',
          description: 'Billing, coding, AR, and denial workflows documented as standard operating procedures — giving every team member a consistent reference for the right way to do each task.'
        },
        {
          num: '07',
          title: 'SOP Adherence Monitoring',
          description: 'Actual workflow behavior compared against documented SOPs on a regular basis — gaps identified, team members notified, and adherence rates reported to leadership.'
        },
        {
          num: '08',
          title: 'Team Performance Monitoring',
          description: 'Error rates, productivity metrics, and quality scores tracked by team member — giving leadership the data to manage performance, identify training needs, and recognize consistency.'
        },
        {
          num: '09',
          title: 'Error Pattern Analysis and Feedback',
          description: 'Repeated errors documented by type, frequency, and root cause — with specific feedback delivered to the relevant team member and recommended process change identified.'
        },
        {
          num: '10',
          title: 'QA Performance Reporting',
          description: 'Monthly QA report delivered to leadership — quality scores, error rates, process adherence, corrective actions, and trend direction — so quality becomes measurable and manageable over time.'
        }
      ]
    },
    howWeWork: {
      eyebrow: 'How HBS builds your QA layer',
      title: 'Embedded in your workflow. <em>Not layered on top of it.</em>',
      description: 'QA only works when it is part of the daily operation — not a separate review step that adds delays or creates additional administrative overhead for your team.',
      process: [
        {
          num: '01',
          title: 'We map your existing workflows and identify QA insertion points',
          description: 'Before building a QA layer, we understand how your billing, coding, and AR workflows currently operate — and identify the specific points where quality checks add the most value.'
        },
        {
          num: '02',
          title: 'We document SOPs where they are missing',
          description: 'For any workflow step without a documented standard process, we work with your team to define the right process and document it in a format that is practical for daily use.'
        },
        {
          num: '03',
          title: 'We build the QA review into the existing workflow',
          description: 'QA review happens within your existing system and workflow — not as a separate task that requires additional steps, tools, or time from your team.'
        },
        {
          num: '04',
          title: 'We deliver feedback directly to the relevant team members',
          description: 'QA findings go to the people who can act on them — coders, billers, AR specialists — with specific, work-sample-based feedback rather than general guidelines.'
        },
        {
          num: '05',
          title: 'We report QA performance to leadership monthly',
          description: 'Monthly QA report delivered to leadership with quality scores, identified gaps, corrective actions, and trend data — making quality visible and manageable at the leadership level.'
        }
      ]
    },
    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the repetitive. <em>People handle the judgment.</em>',
      description: 'Quality assurance is not purely manual work. But it is also not something that can be handed entirely to automation. The practices that win are the ones that use both correctly.',
      machine: [
        'Pre-submission claim accuracy checks against payer rule libraries',
        'SOP adherence monitoring across workflow steps',
        'Error pattern detection by team member, code type, and workflow step',
        'AR follow-up completeness and note quality flagging',
        'Performance metric tracking and QA scorecard generation',
        'QA report compilation and trend analysis'
      ],
      human: [
        'Clinical documentation and coding accuracy review requiring judgment',
        'Root cause analysis on error patterns and process gaps',
        'SOP development and workflow documentation',
        'Specific, actionable QA feedback delivery to team members',
        'Leadership communication and QA performance discussion',
        'Corrective action planning and implementation support'
      ],
      pullQuote: '"Quality assurance is not about catching people making mistakes. It is about building a system that makes mistakes visible before they become expensive — and makes the right process easier to follow than the wrong one."'
    },
    results: {
      eyebrow: 'What changes',
      title: 'Billing that is consistently accurate. <em>Not accurate when everything goes right.</em>',
      description: '',
      outcomes: [
        {
          icon: '↑',
          title: 'Claim accuracy improves and stays high',
          description: 'When errors are caught pre-submission and root causes are addressed, accuracy improves systematically — not just on the claims that were reviewed.'
        },
        {
          icon: '◎',
          title: 'Processes are consistent across your team',
          description: 'Documented SOPs and adherence monitoring mean every team member is following the same process — not their own version of it.'
        },
        {
          icon: '↓',
          title: 'Error patterns are caught before they compound',
          description: 'Systematic errors identified when they appear — not after months of recurring denials and revenue loss.'
        },
        {
          icon: '$',
          title: 'Revenue is protected at the process level',
          description: 'Quality control that prevents errors from reaching the payer is faster and less expensive than recovering revenue after denials.'
        },
        {
          icon: '→',
          title: 'Team members get specific, useful feedback',
          description: 'QA findings communicated with work-sample-based, actionable guidance — so the team improves through feedback, not just through experience.'
        },
        {
          icon: '⚡',
          title: 'Growth does not multiply quality problems',
          description: 'A systematic QA layer scales with your practice — so adding providers, locations, or volume does not proportionally increase error rates and risk.'
        }
      ]
    },
    compare: {
      eyebrow: 'Why QA is necessary for growth',
      title: 'A billing operation without quality control <em>gets harder to manage as it scales.</em>',
      description: 'Every error that is not caught by a QA layer gets caught by a payer — or does not get caught at all, and becomes revenue that was never collected.',
      rows: [
        {
          label: 'Error detection point',
          hbs: 'Pre-submission QA review',
          other: 'After payer denial'
        },
        {
          label: 'Process consistency',
          hbs: 'Documented and monitored',
          other: 'Varies by team member'
        },
        {
          label: 'Error pattern visibility',
          hbs: 'Tracked monthly with trends',
          other: 'Noticed only when severe'
        },
        {
          label: 'Team performance data',
          hbs: 'Quality scores and trends',
          other: 'Not systematically tracked'
        },
        {
          label: 'Scalability',
          hbs: 'Quality scales with volume',
          other: 'More volume = more errors'
        },
        {
          label: 'Leadership visibility',
          hbs: 'Monthly QA report with trends',
          other: 'Known only after problems surface'
        }
      ]
    },
    finalCta: {
      eyebrow: 'Start with a QA review',
      title: 'If your billing operation does not have a systematic quality layer, <em>errors are reaching payers that should not be.</em>',
      description: 'We start with a review of your current billing quality — identifying the gaps in your QA process, the highest-frequency error types, and what a systematic QA layer would catch. No commitment required.',
      buttons: [
        { text: 'Build a stronger QA layer', variant: 'light' },
        { text: 'Talk to our QA team', variant: 'ghost' }
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required'
    }
  }
};
