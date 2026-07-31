// app/data/solutions/compliance-reporting.ts

import { SolutionData } from '../solutionTypes';

export const complianceReporting: SolutionData = {
  title: "Healthcare Compliance Reporting Services | HBS",
  subtitle: "Your billing generates data every day. Your leadership team deserves to understand what it means.",
  description:
    "Turn billing, coding, AR, and denial activity into clear compliance reporting, KPI visibility, and operational insight.",
  hero: {
    eyebrow: "Compliance & Reporting",
    title: "Billing compliance is not a checklist. It is an ongoing<em> operational discipline.</em>",
    subtitle:
      "Regulations change. Payer rules shift. Documentation standards evolve. Practices that manage compliance reactively are always one audit away from a problem they did not see coming.",
    description:
      "HBS supports ongoing compliance monitoring, billing accuracy review, and reporting that keeps your operation ahead of risk.",
    card: {
      title: '— RCM Performance Dashboard · Monthly',
      stats: [
        { label: 'COLLECTION RATE', value: '94.2% ↑ 2.1%', class: 'production' },
        { label: 'CLEAN CLAIM RATE', value: '97.8%', class: 'collection-before' },
        { label: 'DENIAL RATE', value: '3.4% Target <3%', class: 'collection-after' },
        { label: 'DAYS IN AR', value: '24 days ↓ 4', class: 'collection-after' },
        { label: 'AR OVER 90 DAYS', value: '8.2% Monitor', class: 'collection-after' },
        { label: 'COMPLIANCE FLAGS', value: '0 this month', class: 'collection-after' }
      ],
      tags: [
        { text: 'Monthly', class: 'before' },
        { text: 'Report Cadence', class: 'after' },
        { text: '6 KPIs Tracked', class: 'after' },
        { text: '✓ Leadership Ready', class: 'after' }
      ],
      actionLabel: '— This month\'s priority',
      actionValue: 'Denial rate above target — root cause in progress.'
    }
  },
  sections: {
    pain: {
      eyebrow: "The visibility problem in healthcare operations",
      title: "Leadership is making decisions with <em>incomplete information</em> about their own revenue cycle.",
      ledgerEyebrow: 'Where the problem lives',
      ledgerHeading: 'The specific gaps <em>beneath the surface.</em>',
      monologue: [
        "The billing team is working. Claims are going out. Payments are coming in. And at the leadership level, the most current view of the revenue cycle is a monthly summary report — numbers without context, trends without explanation, and issues without root causes.",
        "Leadership knows the collection rate. They do not know which payer is driving 40 percent of denials, why AR over 90 days grew last quarter, whether coding accuracy improved after the last feedback session, or whether the practice has any growing compliance exposure they should be aware of.",
        `"The practices that manage their revenue cycle well are not the ones with the most data. They are the ones who understand what their data is telling them — and who have someone translating the numbers into decisions."`,
        "Compliance is the same. Billing compliance risk does not announce itself. It accumulates through coding patterns, documentation habits, and billing practices that nobody is systematically reviewing. By the time it surfaces — in a payer audit, a recoupment demand, or a corrective action plan — the damage is already done.",
      ],
      ledger: [
        {
          num: "01",
          title: "Reports show numbers — not what to do about them",
          description:
            "A denial rate report that shows 4.2 percent does not tell you whether that is trending up, which payers are driving it, what coding issue is behind it, or what would bring it down. Numbers without context produce decisions without foundation.",
        },
        {
          num: "02",
          title: "Compliance issues are found too late to prevent damage",
          description:
            "Billing compliance risk builds through patterns — coding habits, documentation practices, billing process gaps. Those patterns are only visible if someone is specifically monitoring for them. Without systematic compliance review, risk accumulates until it becomes a problem.",
        },
        {
          num: "03",
          title: "Different team members follow different processes",
          description:
            "When there is no standardized process monitoring, different coders, billers, and AR specialists develop their own habits. Inconsistency is invisible until it creates an error, a denial pattern, or a compliance flag — and by then it has been happening for months.",
        },
        {
          num: "04",
          title: "AR reports are reviewed too late to act on",
          description:
            "When leadership sees an AR aging report showing 90-day balances growing, the optimal follow-up window on many of those claims has already started closing. Reporting cadence needs to match decision timelines, not administrative schedules.",
        },
        {
          num: "05",
          title: "Denial trends are tracked but not analyzed",
          description:
            "Denial rates appear in monthly reports. But without a breakdown by reason code, payer, provider, and trend direction — with root cause analysis and upstream recommendations — the denial rate is just a number that fluctuates without explanation.",
        },
        {
          num: "06",
          title: "No one owns follow-up on reported findings",
          description:
            "A report identifies an issue. Someone acknowledges it. Nothing changes. Without a defined owner, a follow-up date, and a verification step, reported findings become recurring line items — not resolved problems.",
        },
      ],
    },
    solution: {
      eyebrow: 'The solution',
      title: "Reporting that gives leadership clarity. <em>Compliance monitoring that catches risk early.</em>",
      description:
        "Hired Billing Support builds and maintains structured reporting across your billing, coding, AR, and denial activity — and monitors for compliance risk so your leadership team always knows where performance stands and where attention is needed.",
      process: [
        {
          num: "01",
          title: "We define the KPIs that matter for your practice",
          description:
            "Collection rate, denial rate, days in AR, clean claim rate, coding accuracy, AR aging distribution — we align the reporting framework to your practice size, payer mix, and leadership priorities.",
        },
        {
          num: "02",
          title: "We build reports your leadership can actually read",
          description:
            "Not data exports with hundreds of rows. Structured reports with context, trend lines, and plain-language commentary explaining what the numbers mean and what actions they suggest.",
        },
        {
          num: "03",
          title: "We monitor for compliance flags in real time",
          description:
            "Coding patterns, billing process deviations, documentation gaps, and payer-specific compliance risks monitored on an ongoing basis — flagged before they accumulate into audit exposure.",
        },
        {
          num: "04",
          title: "We deliver reports on a defined cadence",
          description:
            "Weekly operational snapshots for billing managers. Monthly performance reviews for leadership. Quarterly compliance summaries with risk assessment. Reports arrive on schedule — not when someone gets to them.",
        },
        {
          num: "05",
          title: "We track follow-up on reported findings",
          description:
            "Every finding in a report has an owner, a recommended action, and a follow-up verification step. Reports do not just document issues — they generate accountable action.",
        },
        {
          num: "06",
          title: "We adjust reporting as your practice evolves",
          description:
            "New payers, new providers, new locations, new compliance requirements — we update the reporting framework as your operation changes so visibility stays current.",
        },
      ],
    },
    services: {
      eyebrow: 'Reporting and compliance services',
      title: "Every layer of operational visibility. <em>Reported, monitored, and followed through.</em>",
      description:
        "We do not specialize in one piece of the reporting puzzle. We own the full workflow so nothing falls in the gap between departments or responsibilities.",
      items: [
        {
          num: "01",
          title: "RCM KPI Reporting",
          description:
            "Collection rate, denial rate, days in AR, clean claim rate, AR aging distribution — reported on a defined cadence with trend analysis and commentary.",
        },
        {
          num: "02",
          title: "Denial Trend Reporting",
          description:
            "Denials broken down by reason code, payer, provider, and trend direction — with root cause analysis and specific upstream recommendations each month.",
        },
        {
          num: "03",
          title: "AR Aging Reporting",
          description:
            "AR aging distribution tracked by bucket, payer, and trend — with follow-up status on high-priority accounts and escalation flags for accounts approaching filing thresholds.",
        },
        {
          num: "04",
          title: "Coding Accuracy Reporting",
          description:
            "Coding accuracy rates by provider, code type, and denial reason — with trend analysis and specific feedback for coding team improvement.",
        },
        {
          num: "05",
          title: "Billing Compliance Monitoring",
          description:
            "Ongoing monitoring of coding patterns, documentation practices, and billing process compliance — with flags and alerts when risk indicators appear.",
        },
        {
          num: "06",
          title: "Compliance Risk Reporting",
          description:
            "Quarterly compliance risk summary with identified exposure areas, severity ratings, and recommended corrective actions — delivered before payers find issues externally.",
        },
        {
          num: "07",
          title: "Payer Performance Reporting",
          description:
            "Payer-by-payer performance analysis — denial rates, payment timeliness, underpayment frequency, and follow-up response patterns — so payer relationships can be managed with data.",
        },
        {
          num: "08",
          title: "Provider Performance Reporting",
          description:
            "Collection rates, coding accuracy, and documentation quality by provider — giving leadership visibility into performance variation and specific improvement opportunities.",
        },
        {
          num: "09",
          title: "Leadership Dashboard",
          description:
            "A high-level monthly summary for practice leadership — key metrics, trend indicators, open issues, and follow-up status in a format that supports strategic decisions, not just operational awareness.",
        },
        {
          num: "10",
          title: "Audit Documentation Support",
          description:
            "Compliance reporting documentation maintained to support payer audit requests, internal reviews, and regulatory inquiries — organized and accessible when needed.",
        },
      ],
    },
    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: "Technology handles the repetitive. <em>People handle the judgment.</em>",
      description: "Reporting is not purely manual work. But it is also not something that can be handed entirely to automation. The practices that win are the ones that use both correctly.",
      machine: [
        "KPI data collection, aggregation, and trend calculation",
        "Denial reason code categorization and frequency tracking",
        "AR aging movement monitoring and threshold alerting",
        "Compliance pattern detection and risk flag generation",
        "Payer performance benchmarking and variance tracking",
        "Report generation, scheduling, and delivery automation",
      ],
      human: [
        "Report commentary — translating numbers into decisions",
        "Compliance risk assessment and severity judgment",
        "Root cause analysis on denial trends and AR anomalies",
        "Leadership communication and findings presentation",
        "Corrective action recommendations and follow-up tracking",
        "Reporting framework updates as practice needs evolve",
      ],
      pullQuote: '"The goal of compliance reporting is not to produce documents. It is to give the people making decisions about your practice a clear, accurate, and timely picture of what is happening in your revenue cycle — and what needs to change."'
    },
    results: {
      eyebrow: 'What changes',
      title: "Leadership that understands what is happening. <em>Not just what was billed.</em>",
      description: '',
      outcomes: [
        {
          icon: "◎",
          title: "Operational visibility across the revenue cycle",
          description:
            "Every major performance indicator tracked, trended, and explained — so leadership always knows where the practice stands and where attention is needed.",
        },
        {
          icon: "↓",
          title: "Compliance risk identified before it escalates",
          description:
            "Coding patterns, billing process deviations, and documentation gaps flagged before they accumulate into audit exposure.",
        },
        {
          icon: "→",
          title: "Denial trends that turn into workflow improvements",
          description:
            "Not just denial rates — root causes, trend direction, and specific upstream changes that bring the rate down over time.",
        },
        {
          icon: "✓",
          title: "Findings that get resolved, not just reported",
          description:
            "Every identified issue tracked through to a verified resolution — so reports produce change, not just documentation.",
        },
        {
          icon: "$",
          title: "Revenue cycle decisions made with accurate data",
          description:
            "Leadership has the information needed to make staffing, payer, process, and investment decisions with confidence.",
        },
        {
          icon: "⚡",
          title: "Audit-ready documentation maintained on schedule",
          description:
            "Compliance documentation organized, current, and accessible — so a payer audit or regulatory review does not create a documentation emergency.",
        },
      ],
    },
    compare: {
      eyebrow: 'Why visibility matters in healthcare operations',
      title: "Practices that monitor their performance <em>manage it better</em> than those that react to it.",
      description: "The difference between a practice that consistently improves and one that repeatedly addresses the same problems is systematic visibility — knowing what is happening before it becomes a crisis.",
      rows: [
        { label: "Performance visibility", hbs: "Tracked with trends and context", other: "Reactive after problems surface" },
        { label: "Compliance monitoring", hbs: "Ongoing — flags caught early", other: "Found during external audit" },
        { label: "Denial trend analysis", hbs: "Root cause + upstream fix", other: "Rate reported, cause unknown" },
        { label: "Leadership reporting", hbs: "Structured, scheduled, explained", other: "Ad hoc or not delivered" },
        { label: "Issue follow-through", hbs: "Tracked to verified resolution", other: "Reported and not followed up" },
        { label: "Audit documentation", hbs: "Current and organized", other: "Assembled under pressure" },
      ],
    },
    finalCta: {
      eyebrow: 'Start with a reporting review',
      title: 'If your leadership does not have clear visibility into your revenue cycle, <em>decisions are being made with incomplete information.</em>',
      description: 'We start with a review of your current reporting — showing you what is tracked, what is missing, and what your leadership team should be seeing on a regular basis. No commitment required.',
      buttons: [
        { text: 'Improve my RCM visibility', variant: 'light' },
        { text: 'Talk to our compliance team', variant: 'ghost' }
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required'
    }
  }
};
