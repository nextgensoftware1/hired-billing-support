import { SolutionData } from '../solutionTypes';

export const analyticsReporting: SolutionData = {
  title: 'Healthcare Analytics & Reporting Services | HBS',
  subtitle: 'Turn your healthcare operations data into structured reporting and analytics that give leadership the visibility to make better decisions.',
  description: 'Turn RCM, AR, denial, payer, and workflow data into clear dashboards, KPI tracking, and decisions your team can use.',
  
  hero: {
    eyebrow: 'Analytics & Reporting',
    title: 'Your data exists. The decisions <em>it should drive do not.</em>',
    subtitle: 'Billing reports, AR aging summaries, and denial logs are only useful if they produce action. Most practices generate data but lack the structured analytics layer that turns numbers into operational decisions.',
    description: 'HBS delivers reporting that shows you what is happening, why it is happening, and what to do next.',
    card: {
      title: '— Practice Analytics Dashboard · Monthly',
      kpis: [
        { label: 'Collection Rate', value: '94.2%', trend: 'high', width: 94 },
        { label: 'Clean Claim Rate', value: '97.8%', trend: 'high', width: 98 },
        { label: 'Denial Rate', value: '3.4%', trend: 'mid', width: 34 },
        { label: 'Days in AR', value: '24 days', trend: 'high', width: 76 },
        { label: 'AR > 90 Days', value: '8.2%', trend: 'mid', width: 28 },
        { label: 'Revenue vs. Budget', value: '+2.1%', trend: 'high', width: 91 },
      ],
      stats: [
        { num: 'Monthly', label: 'Report Cadence' },
        { num: '8', label: 'KPIs Tracked' },
        { num: '3', label: 'Actions Generated' },
      ],
      callout: 'Denial rate above target — Cigna auth-related. Fix in progress.',
    },
  },

  sections: {
    pain: {
      eyebrow: 'The analytics reality in most healthcare practices',
      title: 'The data exists. <em>The insight does not.</em>',
      monologue: [
        'Your practice runs reports every month. Collection rates, AR aging, denial summaries. The numbers are there. But when leadership asks why collections were lower in March, whether the AR situation is improving or getting worse, or which payer is creating the most operational problems — the answer requires someone to manually pull data from three systems, build a comparison, and interpret what it means in the context of everything else that happened that month.',
        'That work almost never happens on schedule. The reports get reviewed. The numbers get noted. And then the meeting moves on to something more urgent, because turning data into decisions requires time that nobody can find between billing queues, patient volume, and operational fires.',
        '"Your team is not ignoring the data. They are buried in daily work and do not have the time, the tools, or the structure to turn scattered reports into clear decisions — and so the data sits unused while problems that the data could identify continue to compound."',
        'Analytics is not a technology problem. Most practices already have the data. The gap is in the interpretation layer — someone who synthesizes data from multiple sources, identifies what it means, connects it to operational root causes, and delivers clear findings with specific recommended actions on a schedule that allows leadership to act before problems get worse.',
      ],
      ledgerEyebrow: 'Where data fails to become decisions',
      ledgerHeading: 'Six reasons your data <em>is not improving your performance.</em>',
      ledger: [
        {
          num: '01',
          title: 'Data is scattered across disconnected systems',
          description: 'Billing data is in the billing software. Clinical data is in the EHR. AR data is in the PM. Denial data is in the clearinghouse. Patient engagement data is in a separate platform. No single view of operational performance exists — so leadership always has an incomplete picture.',
        },
        {
          num: '02',
          title: 'Reports show numbers but not what to do about them',
          description: 'A denial rate of 4.2 percent does not tell you whether it is trending up, which payers are driving it, what coding issue is behind it, or what the practice should change this month. Numbers without interpretation produce awareness without direction.',
        },
        {
          num: '03',
          title: 'Revenue leakage is invisible until it is significant',
          description: 'Undercoding, missed charges, underpayments, write-offs that should not have happened — these leakage sources are only visible in detailed analysis. In summary reports, they are hidden inside aggregate numbers that look acceptable.',
        },
        {
          num: '04',
          title: 'Payer problems are buried in portal data nobody has time to analyze',
          description: 'A specific payer is denying a specific procedure at twice the expected rate. Nobody has identified it because nobody has run the analysis. The practice is losing revenue on those claims every week while the pattern goes unnoticed.',
        },
        {
          num: '05',
          title: 'Cash flow feels unpredictable because the data that predicts it is not being used',
          description: 'AR aging, claims in process, denial work in queue, and expected payment timelines together create a reasonably predictable cash flow picture. But synthesizing those inputs requires someone doing the analysis — and that rarely happens consistently enough to be useful.',
        },
        {
          num: '06',
          title: 'Decisions are made reactively because reporting is delayed',
          description: 'When the AR aging report comes out three weeks after the period ends, the optimal window to act on the findings in that report has already passed. Reporting cadence that does not match decision timelines produces insight that is always about the past, never about the present.',
        },
      ],
    },

    solution: {
      eyebrow: 'The solution',
      title: 'Reporting that gives leadership clarity. <em>Analytics that produce action.</em>',
      description: 'Hired Billing Support pulls data from your billing, AR, denial, operational, and patient engagement systems — synthesizes it into structured reports with clear interpretation and specific recommended actions — and delivers it to leadership on a schedule that allows real decisions, not retrospective observations.',
      process: [
        {
          num: '01',
          title: 'Multi-source data synthesis',
          description: 'Billing software, EHR, clearinghouse, AR reports, denial queues, and operational metrics pulled together and synthesized into a single coherent view of practice performance — so leadership sees the full picture, not disconnected fragments.',
        },
        {
          num: '02',
          title: 'KPI tracking and trend analysis',
          description: 'Collection rate, denial rate, days in AR, clean claim rate, AR aging distribution, and revenue-versus-budget tracked with trend lines and period-over-period comparison — so changes are visible before they become problems.',
        },
        {
          num: '03',
          title: 'Root cause analysis on performance gaps',
          description: 'When a metric is off target, we do not just report the number — we identify the cause. Which payer is driving the denial rate? Which code type is creating AR aging? What workflow change would move the collection rate? Leadership gets the diagnosis, not just the symptom.',
        },
        {
          num: '04',
          title: 'Revenue leakage identification',
          description: 'Undercoding, missed charges, underpayments, premature write-offs, and billing errors identified in the data and quantified — so the practice knows what is being lost and where the recovery opportunity is.',
        },
        {
          num: '05',
          title: 'Payer-specific analytics',
          description: 'Denial rates, payment timeliness, underpayment frequency, and claim rejection patterns analyzed by payer — revealing which payer relationships are performing and which need attention or escalation.',
        },
        {
          num: '06',
          title: 'Executive reporting delivered on schedule',
          description: 'Weekly operational snapshots. Monthly performance reviews with root cause analysis. Quarterly strategic summaries with trend direction and forward-looking risk assessment — delivered before leadership needs to ask for them.',
        },
      ],
    },

    services: {
      eyebrow: 'Analytics and reporting services',
      title: 'Every operational metric. <em>Reported, interpreted, and acted on.</em>',
      reportCards: [
        {
          eyebrow: 'Revenue Cycle',
          num: '94.2%',
          title: 'Collection Rate Tracking',
          description: 'Monthly collection rate with trend analysis, period comparison, and root cause annotation when the rate falls below target.',
          trend: 'up',
        },
        {
          eyebrow: 'Claims',
          num: '97.8%',
          title: 'Clean Claim Rate',
          description: 'First-submission clean claim percentage tracked by payer, code type, and provider — with error pattern identification.',
          trend: 'up',
        },
        {
          eyebrow: 'Denials',
          num: '3.4%',
          title: 'Denial Rate & Trend',
          description: 'Denial rate by reason code, payer, and provider — with root cause analysis and upstream workflow recommendations each month.',
          trend: 'warn',
        },
        {
          eyebrow: 'Cash Flow',
          num: '24',
          title: 'Days in AR',
          description: 'Average days in AR tracked with aging distribution and movement analysis — showing whether AR is improving or building risk.',
          trend: 'up',
        },
        {
          eyebrow: 'AR Aging',
          num: '8.2%',
          title: 'AR Over 90 Days',
          description: '90-day-plus AR percentage tracked by payer and amount — with collectibility assessment and recovery priority sequencing.',
          trend: 'warn',
        },
        {
          eyebrow: 'Revenue',
          num: '+2.1%',
          title: 'Revenue vs. Budget',
          description: 'Actual collections compared to budget and prior period — with contributing factor analysis when variance exists in either direction.',
          trend: 'up',
        },
      ],
      items: [
        {
          num: '01',
          title: 'RCM Performance Reporting',
          description: 'Full revenue cycle performance — collection rate, clean claim rate, days in AR, denial rate — with trend lines and root cause analysis.',
        },
        {
          num: '02',
          title: 'AR Aging Analytics',
          description: 'AR aging distribution by bucket, payer, and provider — with movement analysis, recovery targets, and collectibility assessment.',
        },
        {
          num: '03',
          title: 'Denial Trend Analysis',
          description: 'Denial volume by reason code, payer, and provider — with root cause identification and specific upstream workflow recommendations.',
        },
        {
          num: '04',
          title: 'Payer Performance Analytics',
          description: 'Denial rates, payment timeliness, underpayment frequency, and claim pattern analysis by payer — identifying which relationships need attention.',
        },
        {
          num: '05',
          title: 'Revenue Leakage Analysis',
          description: 'Undercoding, missed charges, underpayments, and write-off patterns identified and quantified — with specific recovery opportunities documented.',
        },
        {
          num: '06',
          title: 'Cash Flow Visibility Reporting',
          description: 'AR in process, expected payments, and collections trend synthesized into a forward-looking cash flow picture — so surprises are rare rather than monthly.',
        },
        {
          num: '07',
          title: 'Provider Productivity Reporting',
          description: 'Collection rates, coding accuracy, and billing performance by provider — giving leadership visibility into performance variation and improvement opportunities.',
        },
        {
          num: '08',
          title: 'Operational Performance Reporting',
          description: 'Task queue metrics, workflow adherence, scheduling performance, and prior authorization tracking — operational data translated into management-ready insights.',
        },
        {
          num: '09',
          title: 'Patient Engagement Analytics',
          description: 'Inquiry conversion rates, appointment no-show rates, recall success rates, and review scores — patient engagement data connected to revenue and growth outcomes.',
        },
        {
          num: '10',
          title: 'Executive Dashboard & Summary',
          description: 'Monthly leadership report synthesizing all operational, financial, and clinical performance data — with clear findings, trends, and specific recommended actions.',
        },
      ],
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Data processing by machine. <em>Interpretation and judgment by people.</em>',
      machineLabel: 'AI-assisted analytics workflows',
      humanLabel: 'Healthcare analytics specialists',
      machine: [
        'KPI data collection, aggregation, and trend calculation across systems',
        'Denial reason code categorization and frequency tracking',
        'AR aging movement monitoring and threshold alerting',
        'Payer performance benchmarking and variance flagging',
        'Revenue leakage pattern detection and quantification',
        'Report generation, scheduling, and delivery',
      ],
      human: [
        'Report commentary — translating numbers into decisions',
        'Root cause analysis connecting metrics to operational causes',
        'Revenue leakage assessment and recovery prioritization',
        'Payer trend interpretation and escalation recommendations',
        'Leadership communication and findings presentation',
        'Reporting framework updates as practice needs evolve',
      ],
      pullQuote: '"The practices that manage their revenue cycle well are not the ones with the most data. They are the ones who understand what their data is telling them — and who have someone translating the numbers into decisions before the problems those numbers represent become too large to ignore."',
    },

    results: {
      eyebrow: 'What changes',
      title: 'Leadership that makes decisions with data. <em>Not intuition about data.</em>',
      outcomes: [
        {
          icon: '◎',
          title: 'Full performance visibility across the revenue cycle',
          description: 'Every major operational and financial metric tracked, trended, and explained — so leadership always knows where the practice stands and where attention is needed.',
        },
        {
          icon: '$',
          title: 'Revenue leakage identified and quantified',
          description: 'Undercoding, underpayments, missed charges, and premature write-offs found in the data — with specific recovery opportunities and dollar estimates attached.',
        },
        {
          icon: '↓',
          title: 'Denial trends traced to root causes',
          description: 'Not just denial rates — the specific reasons, payers, and workflow gaps driving them, with targeted upstream changes that reduce the rate over time.',
        },
        {
          icon: '⚡',
          title: 'Cash flow becomes more predictable',
          description: 'AR in process, expected collections, and trend data synthesized into a forward-looking cash flow picture — fewer monthly surprises, more confident planning.',
        },
        {
          icon: '→',
          title: 'Findings lead to action, not just documentation',
          description: 'Every identified issue tracked through to a verified resolution — so reports produce change, not recurring documentation of the same problems.',
        },
        {
          icon: '✓',
          title: 'Payer problems are visible before they become significant',
          description: 'Payer performance tracked by denial rate, payment timing, and underpayment frequency — problems surfaced when they are addressable, not after months of silent revenue loss.',
        },
      ],
    },

    compare: {
      eyebrow: 'Why reporting must lead to action',
      title: 'Reporting that does not produce decisions <em>is documentation, not analytics.</em>',
      description: 'The goal is not to have better reports. The goal is to make better decisions. Reports are only valuable if they consistently connect data to action — and that requires interpretation, root cause analysis, and specific recommendations, not just data presentation.',
      rows: [
        {
          label: 'Performance visibility',
          hbs: 'Multi-source synthesis with trends',
          other: 'Single-system snapshots',
        },
        {
          label: 'Report commentary',
          hbs: 'Plain-language context and meaning',
          other: 'Numbers without interpretation',
        },
        {
          label: 'Root cause analysis',
          hbs: 'Included — every gap traced upstream',
          other: 'Not provided',
        },
        {
          label: 'Revenue leakage identification',
          hbs: 'Systematic — quantified with recovery targets',
          other: 'Visible only if someone looks',
        },
        {
          label: 'Reporting cadence',
          hbs: 'Defined schedule — weekly and monthly',
          other: 'When someone pulls a report',
        },
        {
          label: 'Finding follow-through',
          hbs: 'Tracked to verified resolution',
          other: 'Noted and not followed up',
        },
      ],
    },

    workflow: {
      eyebrow: 'How reporting becomes action',
      title: 'Data collected. Synthesized. Interpreted. <em>Delivered with recommended next steps.</em>',
      description: 'Most reporting stops at the data. The value is in what comes after — the interpretation, the root cause, and the specific action that changes the outcome.',
      items: [
        { num: '01', label: 'Data Pull', sublabel: 'All sources synced' },
        { num: '02', label: 'KPI Calculation', sublabel: 'Metrics computed' },
        { num: '03', label: 'Trend Analysis', sublabel: 'vs. prior period' },
        { num: '04', label: 'Root Cause', sublabel: 'Why it changed' },
        { num: '05', label: 'Leakage ID', sublabel: 'Revenue gaps found' },
        { num: '06', label: 'Report Built', sublabel: 'Commentary added' },
        { num: '07', label: 'Leadership Review', sublabel: 'Findings delivered' },
        { num: '08', label: 'Action Taken', sublabel: 'Decisions made' },
      ],
    },

    howWeWork: {
      eyebrow: 'How HBS delivers analytics',
      title: 'Reports your leadership team can read. <em>Insights they can act on.</em>',
      description: 'Reporting only creates value when it is timely, clear, and connected to specific actions. We build every report with those three criteria as the standard.',
      process: [
        {
          num: '01',
          title: 'We align the reporting framework to your leadership priorities',
          description: 'What does your leadership team need to see, and how often? We build the reporting structure around the specific decisions your practice needs to make — not a generic template that reports everything but answers nothing.',
        },
        {
          num: '02',
          title: 'We pull data from your existing systems',
          description: 'Billing software, EHR, clearinghouse, PM — we work in your systems. No new platforms, no data migration, no third-party integration projects required. Reports are built from the data sources your practice already uses.',
        },
        {
          num: '03',
          title: 'We write reports with commentary, not just data',
          description: 'Every report includes plain-language commentary explaining what the numbers mean, what changed from last period, and what the practice should consider doing in response. Numbers are presented in context, not isolation.',
        },
        {
          num: '04',
          title: 'We identify root causes — not just symptoms',
          description: 'When a metric is trending the wrong direction, we go upstream. Which payer is driving the denial rate? What coding issue is behind the AR aging? What process change would improve the collection rate? Leadership receives diagnosis, not just observations.',
        },
        {
          num: '05',
          title: 'We track findings through to resolution',
          description: 'Every actionable finding in a report has an owner, a recommended action, and a verification step at the next reporting cycle. Reports generate change — not recurring documentation of the same unresolved problems.',
        },
      ],
    },

    finalCta: {
      eyebrow: 'Start with an analytics review',
      title: 'If your leadership does not have a clear, current picture of your revenue cycle, <em>decisions are being made without the information they need.</em>',
      description: 'We start with a review of your current reporting — showing you what is tracked, what is missing, and what your leadership team should be seeing on a regular basis. You see the gap before we discuss anything else.',
      buttons: [
        { text: 'Improve reporting visibility', variant: 'primary' },
        { text: 'Talk to our analytics team', variant: 'ghost' },
      ],
      trustLine: 'HIPAA · BAA on every engagement · Existing systems only · No long-term contract required',
    },
  },
};
