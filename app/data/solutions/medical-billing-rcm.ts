// app/data/medicalBillingRcm.ts
import { SolutionData } from '../solutionTypes';

export const medicalBillingRcm: SolutionData = {
  title: 'Medical Billing & RCM Services | HBS',
  subtitle: 'For medical practices & specialty clinics',
  description: 'Reduce claim delays, denials, and AR pressure with embedded medical billing and RCM support built around your workflow.',

  hero: {
    eyebrow: 'For medical practices & specialty clinics',
    title: 'Your production looks fine on paper.<em>Your collections tell a different story.</em>',
    subtitle: 'You are seeing patients. Charges are being entered. Claims are going out. And yet the money in the bank never quite matches the work you did this month. That gap is not accidental  and it is not unfixable.',
    description: 'Hired Billing Support becomes your embedded medical billing and RCM team  working inside your EHR, following your workflow, and taking ownership of every step between eligibility and final payment.',
    card: {
      title: '— Practice Revenue Snapshot · 30-day',
      bars: [
        { label: 'BILLED', value: '$198k', class: 'production' },
        { label: 'BEFORE HBS', value: '$141k', class: 'collection-before' },
        { label: 'WITH HBS', value: '$189k', class: 'collection-after' }
      ],
      tags: [
        { text: '71% COLLECTION RATE', class: 'before' },
        { text: '95% COLLECTION RATE', class: 'after' }
      ],
      gapCallout: {
        label: '— Revenue recovered monthly',
        value: '$48,000 — the production-to-collection gap, closed.'
      }
    }
  },

  sections: {
    pain: {
      eyebrow: 'The billing reality every practice already knows',
      title: 'You already know how this <em>feels.</em>',
      monologue: [
        'It is Wednesday afternoon. The schedule ran long. Two providers are still finishing charts. Three prior auth requests came back incomplete. And your biller — who has been with you for four years — just told you she is overwhelmed.',
        'You are not surprised. You watch it every week. New claims keep coming in. Old denials keep sitting in a queue nobody has uninterrupted time to work. The 90-day AR bucket keeps growing. And the collections report keeps showing a number that does not match the work you know you did.',
        '"Your billing team is not failing. They are overloaded, constantly interrupted, and being asked to manage too many revenue tasks at once — with too few uninterrupted hours to do any of them properly."',
        'The problem is not your team. The problem is the structure. Revenue cycle management done well requires dedicated, uninterrupted follow-through across every stage of the claim — and that is not something a team divided between clinical work, phone calls, scheduling, and billing can consistently deliver.'
      ],
      ledgerEyebrow: 'Where the revenue actually goes',
      ledgerHeading: 'Eight places your billing is <em>leaking right now.</em>',
      ledger: [
        { num: '01', title: 'Eligibility errors that start at check-in', description: 'Coverage is verified too early, skipped under pressure, or never updated when a patient changes plans. The claim goes out against wrong or inactive insurance — and the denial arrives weeks later, long after anyone remembers what happened at registration.' },
        { num: '02', title: 'Prior authorizations tracked in too many places', description: 'Auth status lives in a spreadsheet, a sticky note, an EHR task, and someone\'s memory — simultaneously. When any one of those breaks down, the visit happens without a valid authorization. The claim gets denied. The appeal eats hours that should have gone somewhere else.' },
        { num: '03', title: 'Charge entry delayed after the visit', description: 'Charges entered two or three days after the appointment — with rushed coding, missing modifiers, or incorrectly linked diagnoses — add days to your payment cycle and create denial triggers that were entirely preventable.' },
        { num: '04', title: 'Denials not worked within a workable window', description: 'When a denial sits for three weeks before anyone reviews it, the appeal window is already shrinking. Many denials that should be reversed become permanent write-offs — not because they were wrong, but because follow-up was too slow.' },
        { num: '05', title: 'AR follow-up with no assigned ownership', description: 'Nobody is assigned to specific aging buckets. Nobody is measured on AR resolution. New claims always feel more urgent than old ones. So old claims keep aging until payers close the window — quietly, one claim at a time.' },
        { num: '06', title: 'Underpayments posted and never challenged', description: 'A payer sends $184 on a claim where the contracted rate is $248. Someone applies the payment and moves to the next item. Nobody checks the difference. Over a year, those small underpayments become a five-figure write-off the practice never agreed to.' },
        { num: '07', title: 'Payer-specific rules not followed consistently', description: 'Every payer has its own billing requirements — modifier policies, unit limits, documentation standards. When those rules are not reflected in the team\'s daily practice, correct claims keep failing for preventable reasons nobody has time to trace.' },
        { num: '08', title: 'No one owns the full arc of a single claim', description: 'Eligibility, coding, submission, follow-up, and payment posting are handled by different people with different priorities. Revenue falls in the handoffs. And since nobody has the complete picture, nobody can see the full scope of what is being lost.' }
      ]
    },

    solution: {
      eyebrow: 'The solution',
      title: 'We do not just submit your claims. <em>We own the entire revenue cycle.</em>',
      description: 'Hired Billing Support steps in as your embedded medical billing and RCM team — not as a vendor you send files to, but as a team that operates inside your system, follows your process, and takes responsibility for your revenue from eligibility to final payment.',
      process: [
        { num: '01', title: 'We start with a complete operational review', description: 'Before touching a single claim, we understand how your practice bills today — your EHR, your payer mix, your team structure, and what your current AR and denial picture looks like. We diagnose first, then act.' },
        { num: '02', title: 'We work directly inside your EHR and PM system', description: 'We log in to your system. We work your queues. We post payments in your PM software. No file exports, no third-party portals, no workarounds — just your existing environment with our team working inside it.' },
        { num: '03', title: 'We follow your SOPs — and help improve them', description: 'We adapt to your existing workflows. Where we find gaps, we flag them, document the fix, and help you formalize a stronger process. Your billing operation becomes better documented and more consistent over time.' },
        { num: '04', title: 'We communicate inside your team\'s channels', description: 'Slack, Teams, EHR messaging, email — wherever your team already communicates, we show up there. Your staff does not reach out to a vendor. They communicate with a teammate who happens to work remotely.' },
        { num: '05', title: 'We scale without a new hiring cycle', description: 'New providers, new locations, seasonal volume changes — we scale immediately without a four-week job posting, without benefits overhead, and without the onboarding gaps that cost practices revenue every time they grow.' },
        { num: '06', title: 'We report, review, and improve on schedule', description: 'Performance reviews, denial trend analysis, AR aging reports — delivered to your leadership on a consistent schedule. Not reactive reports after something goes wrong. Proactive visibility so decisions get made before problems compound.' }
      ]
    },

    services: {
      eyebrow: 'Complete services',
      title: 'Every part of the billing cycle. <em>Managed, not just monitored.</em>',
      description: 'We do not specialize in one piece of the billing puzzle. We own the full workflow so nothing falls in the gap between departments or responsibilities.',
      items: [
        { num: '01', title: 'Eligibility & Benefits Verification', description: 'Confirmed before every visit. Active coverage, deductibles, copays, and network status — verified against the actual payer, not a saved record from months ago.' },
        { num: '02', title: 'Prior Authorization Support', description: 'We track, request, follow up on, and document authorizations so a missing auth is never the reason a claim is denied.' },
        { num: '03', title: 'Charge Entry & Capture', description: 'Accurate, same-day or next-day charge entry with attention to modifiers, units, and diagnosis linkage. No delays, no shortcuts.' },
        { num: '04', title: 'Claim Scrubbing & Review', description: 'Every claim reviewed for errors, payer-specific rules, and missing data before submission — not after the denial comes back.' },
        { num: '05', title: 'Electronic Claims Submission', description: 'Formatted correctly for each payer, submitted promptly, and tracked from the moment it goes out.' },
        { num: '06', title: 'Denial Management', description: 'Every denial reviewed, categorized, and worked within a defined window. No denial sits idle while the timely filing clock runs.' },
        { num: '07', title: 'Appeals & Reconsiderations', description: 'When a denial is wrong, we build and submit the appeal — with clinical support, documentation, and payer-specific language that gives it the best chance of reversal.' },
        { num: '08', title: 'AR Follow-Up', description: 'Aging buckets assigned and worked daily. Not just the easy claims — 90-day and 120-day accounts get the same attention as new submissions.' },
        { num: '09', title: 'Payment Posting', description: 'ERA and manual EOB posting, reconciled to the correct encounter with accuracy verification and adjustment review every time.' },
        { num: '10', title: 'Underpayment Identification', description: 'Every payment checked against contracted rates. When a payer underpays, we identify it, document it, and pursue the balance.' },
        { num: '11', title: 'Payer Communication', description: 'We call payers. We escalate. We document every interaction. Your team should not be spending its day on hold with insurance companies.' },
        { num: '12', title: 'Reporting & Visibility', description: 'Regular reports on collection rates, denial trends, AR aging, and clean claim rates — with commentary and context, not just numbers.' }
      ]
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the repetitive. <em>People handle the judgment.</em>',
      description: 'Billing is not purely manual work. But it is also not something that can be handed entirely to automation. The practices that win are the ones that use both correctly.',
      machine: [
        'Eligibility verification queue management and tracking',
        'Prior auth status monitoring and reminder routing',
        'Claim scrubbing against payer-specific rule libraries',
        'ERA matching and automated payment application',
        'Denial pattern recognition and categorization',
        'AR aging alerts and follow-up task prioritization',
        'Performance reporting and trend tracking'
      ],
      human: [
        'Denial review, reasoning, and appeal writing',
        'Payer calls, escalations, and dispute navigation',
        'Complex authorization decisions and peer-to-peer support',
        'Underpayment identification and contract analysis',
        'Appeals with clinical documentation and payer-specific language',
        'Write-off and adjustment judgment calls',
        'AR prioritization based on payer history and claim age'
      ],
      pullQuote: '"Claims are not always denied because the care was wrong. Sometimes they are denied because one small administrative detail was missed before the visit even happened — and that is exactly what the human side of our team is built to prevent."'
    },
    results: {
      eyebrow: 'What changes',
      title: 'Practical outcomes for practices that take <em>billing seriously.</em>',
      outcomes: [
        { icon: '↑', title: 'Cleaner first-submission claims', description: 'Fewer rejections, fewer preventable denials, faster adjudication from payers who receive complete claims every time.' },
        { icon: '↓', title: 'Denial rates that trend downward', description: 'Root cause analysis on every denial category so the same mistakes stop repeating each month.' },
        { icon: '✓', title: 'AR aging that actually gets worked', description: 'Aging buckets assigned, prioritized, and touched regularly — before payers close the collection window.' },
        { icon: '$', title: 'Payments that match contracted rates', description: 'Underpayments identified, documented, and pursued. Payers cannot quietly underpay indefinitely without being challenged.' },
        { icon: '⚡', title: 'Faster payment cycles', description: 'Cleaner submissions plus faster follow-up equals shorter days in AR and more predictable monthly cash flow.' },
        { icon: '◎', title: 'Visibility leadership can act on', description: 'Regular reporting with commentary — not just data exports. Leadership understands what is happening, not just what was billed.' }
      ]
    },

    compare: {
      eyebrow: 'Why not just hire more billing staff?',
      title: 'Hiring solves headcount. <em>It does not always solve workflow.</em>',
      description: 'The instinct when revenue is slipping is to add more people. But often the problem is not the number of people — it is the structure, oversight, and operational system around them.',
      rows: [
        { label: 'Time to start working', hbs: 'Days, not months', other: '4–8 weeks to onboard' },
        { label: 'Payroll, benefits, taxes', hbs: 'None', other: '$60K–$90K+ per year' },
        { label: 'Coverage during absence', hbs: 'Always covered by team', other: 'Gaps when staff is out' },
        { label: 'Scales with volume', hbs: 'Flexible and immediate', other: 'Requires new hiring cycle' },
        { label: 'Reporting and visibility', hbs: 'Built-in and reviewed regularly', other: 'Depends on staff initiative' },
        { label: 'Multi-payer expertise', hbs: 'Across payer types', other: 'Limited to one person\'s experience' }
      ]
    },

    finalCta: {
      eyebrow: "Let's look at your numbers",
      title: "You already know something in your billing is not working. <em>Let's find it together.</em>",
      description: "A short conversation is enough to identify where your collection gaps are, what is sitting unworked in your AR, and whether we are the right team to help you fix it. No commitment required.",
      buttons: [
        { text: 'Book a billing review', variant: 'light' },
        { text: 'Talk to our team first', variant: 'ghost' }
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required'
    }
  }
};