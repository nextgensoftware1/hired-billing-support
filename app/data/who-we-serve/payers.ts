import { SolutionData } from '@/app/data/solutionTypes';

export const payers: SolutionData = {
  title: 'Healthcare Payer Operations Support | HBS',
  subtitle: 'Scalable backend operations support for healthcare payers and health plans.',
  description: 'Scale payer backend processing with queue support, documentation tracking, provider communication, reporting, and workflow help.',

  hero: {
    eyebrow: 'Healthcare Payers',
    title: 'Payer operations break down when the queue<em> grows fasterthan the team processing it.</em>',
    subtitle: 'Claims queues, authorization backlogs, provider inquiries, enrollment documentation  payer backend operations do not fail dramatically. They slow down incrementally, and the cost compounds across every stakeholder waiting.',
    description: 'HBS acts as your backend processing engine  scalable, systematic, and adapted to your payer workflow.',
  },

  sections: {
    pain: {
      eyebrow: 'The payer operations reality',
      title: 'The queue does not wait for your team to catch up.<br><em>It keeps growing while everything else also demands attention.</em>',
      description: '',
      monologue: [
        'A payer operations team manages simultaneous queues — authorizations to review, claims to adjudicate, providers waiting on status updates, enrollment applications requiring document review, eligibility requests, and member inquiries — all on overlapping timelines, across multiple systems and portals, with staff who are already at or near capacity.',
        'When volume increases — a new plan year, a regulatory change, a system migration, a sudden increase in out-of-network claims — the queue grows faster than the team. Work ages. SLAs slip. Providers begin calling for status updates because electronic status is unclear or delayed. Those calls generate more work. The backlog grows because the team is now managing the backlog and the incoming volume simultaneously.',
        '"Healthcare operations break down when the backend queue grows faster than the team that manages it. The solution is not always more permanent staff — it is scalable processing capacity that increases when volume increases and adapts when volume changes."',
        'Most payer organizations add full-time staff when volume peaks — and then carry the overhead when volume normalizes. A scalable backend operations model solves the volume problem without creating a permanent payroll commitment that outlives the need.',
      ],
      ledgerEyebrow: 'Where operations break down',
      ledgerHeading: 'The specific gaps<br><em>behind the processing pressure.</em>',
      ledger: [
        {
          num: '01',
          title: 'Authorization queues build faster than they are cleared during peak periods',
          description: 'Prior authorization volume does not stay constant. New plan year enrollments, seasonal utilization patterns, and regulatory changes create spikes that overwhelm the same team managing normal-volume processing. When queues exceed processing capacity, providers experience delays, patients experience access problems, and internal teams carry the resulting escalations.',
        },
        {
          num: '02',
          title: 'Provider inquiries increase when status visibility is delayed or unclear',
          description: 'When providers cannot get clear status on claims, authorizations, or enrollment applications through electronic channels, they call. Those calls require staff time to research, respond, and document. When backend processing is slow, provider inquiry volume increases in direct proportion — creating a second workload on top of the already-delayed processing queue.',
        },
        {
          num: '03',
          title: 'Enrollment documentation requires indexing and review that falls behind during high-volume periods',
          description: 'Enrollment applications arrive with supporting documentation that requires review, indexing, and routing before processing can begin. When this initial documentation work falls behind, the downstream enrollment workflow is delayed — providers cannot be enrolled on schedule, members cannot access coverage, and the enrollment team spends time managing exceptions instead of processing applications.',
        },
        {
          num: '04',
          title: 'Manual processes create handoff gaps when volume increases',
          description: 'Payer backend operations often rely on manual processes at specific workflow steps — document routing, status updating, exception flagging, provider communication. When volume increases, manual processes create handoff delays that accumulate across the workflow, producing the aging items and SLA violations that leadership sees in reports without always knowing where the specific gap occurred.',
        },
        {
          num: '05',
          title: 'Leadership visibility into queue status and aging items is delayed or incomplete',
          description: 'Operations leaders need current queue visibility — what is in backlog, what is approaching SLA deadlines, which team or process is the current bottleneck. When reporting is delayed or requires manual compilation, leadership manages to historical data rather than current status — making it difficult to direct resources proactively before SLA failures occur.',
        },
        {
          num: '06',
          title: 'Scaling in-house teams adds permanent cost to solve temporary volume problems',
          description: 'Hiring additional permanent staff to manage peak-period volume creates a payroll commitment that continues after the peak passes. Training, onboarding, benefits, and management overhead compound the cost. Scalable backend support that increases with volume and adjusts when volume changes is structurally better suited to a business where processing demand fluctuates.',
        },
      ],
    },

    solution: {
      eyebrow: 'The solution',
      title: 'A scalable backend processing engine<br><em>that keeps pace with your queue — not your headcount.</em>',
      description: 'Hired Billing Support provides backend operations support that adapts to your payer organization\'s volume, systems, and workflow structure — processing work, managing queues, supporting communication, and maintaining operational throughput so your internal team focuses on decisions, not volume.',
      process: [
        {
          num: '01',
          title: 'Queue monitoring and backlog clearing',
          description: 'Authorization queues, claims review queues, enrollment documentation queues, and provider inquiry queues monitored daily — backlog items identified, prioritized by SLA proximity, and processed systematically to prevent age accumulation.',
        },
        {
          num: '02',
          title: 'Authorization support queue management',
          description: 'Authorization requests tracked, supporting documentation reviewed for completeness, missing information requested from providers, and queue status maintained so authorization decisions have the information they require without manual chasing.',
        },
        {
          num: '03',
          title: 'Provider inquiry handling and status communication',
          description: 'Provider status inquiries researched and responded to through your established communication channels — reducing the inbound inquiry volume that arrives when electronic status is delayed and giving providers the information they need without burdening your clinical or operations staff.',
        },
        {
          num: '04',
          title: 'Enrollment documentation review and indexing',
          description: 'Enrollment applications and supporting documentation reviewed for completeness, indexed, and routed into your enrollment workflow — so documentation gaps are identified at intake rather than discovered mid-process when they cause delays.',
        },
        {
          num: '05',
          title: 'Provider data maintenance support',
          description: 'Provider directory updates, network status changes, and provider data maintenance tasks processed in your systems — keeping provider data current without requiring your core team to manage routine maintenance tasks alongside higher-judgment operational work.',
        },
        {
          num: '06',
          title: 'Operational reporting and queue visibility',
          description: 'Regular queue status reports delivered to operations leadership — items in processing, items aging toward SLA thresholds, backlog trends, and throughput metrics so leadership sees current operational status, not historical summaries.',
        },
      ],
    },

    services: {
      eyebrow: 'Services that fit healthcare payer operations',
      title: 'Every backend processing function<br><em>a healthcare payer needs to manage at scale.</em>',
      description: '',
      items: [
        {
          num: '01',
          title: 'Authorization Queue Support',
          description: 'Prior authorization requests processed, documentation reviewed for completeness, missing information requested from providers, and queue status maintained on a defined schedule.',
        },
        {
          num: '02',
          title: 'Claims Processing Support',
          description: 'Claims review queue support — documentation review, information requests, routing assistance, and claims status tracking so processing queues move without manual bottlenecks.',
        },
        {
          num: '03',
          title: 'Provider Inquiry Handling',
          description: 'Provider status inquiries on claims, authorizations, and enrollment researched and responded to through your communication protocols — reducing inbound inquiry burden on core operations staff.',
        },
        {
          num: '04',
          title: 'Member Support Coordination',
          description: 'Member benefit questions, eligibility confirmations, and coordination of benefits support managed through your member service workflows.',
        },
        {
          num: '05',
          title: 'Enrollment Documentation Processing',
          description: 'Enrollment application documentation reviewed for completeness, indexed, and routed — gaps identified at intake so downstream enrollment processing is not delayed by missing documents discovered mid-workflow.',
        },
        {
          num: '06',
          title: 'Eligibility & Benefits Support',
          description: 'Eligibility verification requests, benefits explanation support, and coordination of benefits clarification managed — keeping eligibility queues current and provider/member communication accurate.',
        },
        {
          num: '07',
          title: 'Provider Data Maintenance',
          description: 'Provider directory updates, network participation changes, and provider information maintenance processed in your systems — keeping provider data current without diverting your team from higher-value work.',
        },
        {
          num: '08',
          title: 'Document Review & Indexing',
          description: 'Supporting documentation reviewed, categorized, and indexed into your document management workflow — so processing queues have the information they need in the correct location and format.',
        },
        {
          num: '09',
          title: 'Backlog Cleanup Support',
          description: 'Targeted backlog clearing for authorization, enrollment, claims, and documentation queues — rapid throughput increase during peak periods or after workflow disruptions without permanent headcount additions.',
        },
        {
          num: '10',
          title: 'Queue Monitoring & Operational Reporting',
          description: 'Daily queue status monitoring with operational reports for leadership — current volume, SLA proximity, aging items, and throughput trends delivered on a defined schedule.',
        },
      ],
    },

    workflow: {
      eyebrow: 'Backend processing workflow',
      title: 'From queue intake to processed item.<br><em>Every step tracked, every handoff clean.</em>',
      description: 'Payer backend operations require a processing model where every item has a current status, an assigned owner, and a timeline — so nothing ages silently while the team is managing other priorities.',
      items: [
        { num: '01', label: 'Item Received', sublabel: 'Queue entry' },
        { num: '02', label: 'Doc Review', sublabel: 'Complete check' },
        { num: '03', label: 'Gap Follow-Up', sublabel: 'Missing info' },
        { num: '04', label: 'Indexed & Routed', sublabel: 'Correct workflow' },
        { num: '05', label: 'SLA Monitor', sublabel: 'Aging alerts' },
        { num: '06', label: 'Provider Comms', sublabel: 'Status updates' },
        { num: '07', label: 'Processed', sublabel: 'Decision ready' },
        { num: '08', label: 'Reported', sublabel: 'Leadership view' },
      ],
    },

    howWeWork: {
      eyebrow: 'How HBS works with your payer operations team',
      title: 'Inside your systems. Aligned with your protocols.<br><em>Not alongside them as an external vendor.</em>',
      description: 'Payer operations support only works when it operates inside the same systems, portals, and communication channels your team uses — not through a separate interface that creates its own coordination overhead.',
      process: [
        {
          num: '01',
          title: 'We learn your systems, workflows, and SOPs before we process anything',
          description: 'Before managing a single queue item, we understand how your payer organization operates — which systems hold which information, which protocols govern which exceptions, and which communication standards apply to each stakeholder. We adapt to your process, not the other way around.',
        },
        {
          num: '02',
          title: 'We access your portals and systems directly',
          description: 'Your claims system, authorization portal, enrollment platform, document management system — we work inside your tools so every item processed produces a native system record rather than a separate output your team has to reconcile.',
        },
        {
          num: '03',
          title: 'We follow your communication standards with every provider and member contact',
          description: 'Every provider inquiry response and member communication follows your organization\'s communication standards — your protocols, your tone, your templates — so external stakeholders interact with a consistent organizational voice, not a vendor voice.',
        },
        {
          num: '04',
          title: 'We report to operations leadership on a defined schedule',
          description: 'Queue status, backlog volume, SLA performance, and throughput metrics delivered to leadership on a schedule that allows proactive resource direction — before SLA violations, not after.',
        },
        {
          num: '05',
          title: 'We scale with your volume — up and down',
          description: 'When volume increases — plan year, regulatory change, system migration — we scale processing capacity to match. When volume normalizes, the support adjusts. No permanent headcount commitment, no long onboarding cycle each time capacity needs to change.',
        },
      ],
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Automation handles the volume.<br><em>People handle the judgment.</em>',
      machineLabel: 'AI-assisted operations',
      humanLabel: 'Human operations specialists',
      machine: [
        'Queue volume monitoring and SLA threshold alerts',
        'Documentation completeness checking at intake',
        'Item aging tracking and escalation trigger generation',
        'Provider inquiry status tracking and response routing',
        'Enrollment documentation gap detection and follow-up scheduling',
        'Operational throughput reporting and trend analysis',
      ],
      human: [
        'Exception review and judgment-based processing decisions',
        'Provider communication requiring context and explanation',
        'Authorization documentation review with clinical context',
        'Enrollment exception handling and escalation management',
        'SLA escalation coordination with internal operations teams',
        'Leadership reporting with operational commentary and recommendations',
      ],
      pullQuote: '"Scaling healthcare payer operations is not just about adding more people. It is about building a processing model where volume increases do not automatically mean SLA violations — where the capacity to process work adjusts as work arrives, with visibility that allows leadership to manage outcomes rather than just respond to them."',
    },

    results: {
      eyebrow: 'What changes',
      title: 'Payer operations that process at pace<br><em>with volume — not behind it.</em>',
      outcomes: [
        {
          icon: '◎',
          title: 'Queue visibility before SLA violations',
          description: 'Daily operational reporting gives leadership current queue status — items aging, items at risk, and throughput metrics — before SLA failures occur rather than after.',
        },
        {
          icon: '↓',
          title: 'Provider inquiry volume decreases',
          description: 'When processing is timely and status communication is proactive, providers have fewer reasons to call for updates — reducing inbound inquiry volume that consumes operations staff time.',
        },
        {
          icon: '⚡',
          title: 'Peak-volume backlogs cleared without permanent hiring',
          description: 'Processing capacity scales with volume spikes — backlogs addressed during plan year changes, regulatory shifts, and high-volume periods without adding permanent headcount.',
        },
        {
          icon: '✓',
          title: 'Documentation gaps caught at intake',
          description: 'Enrollment and authorization documentation reviewed at intake — gaps identified before they stall downstream processing and create mid-workflow delays.',
        },
        {
          icon: '$',
          title: 'Scalable capacity without proportional payroll',
          description: 'Backend processing capacity that increases when needed and adjusts when volume normalizes — no permanent hiring commitment that outlasts the operational need.',
        },
        {
          icon: '→',
          title: 'Internal team focused on decisions, not volume',
          description: 'Your core operations team manages exceptions, decisions, and escalations — the processing volume is handled by HBS so your staff focuses on work that requires their specific expertise and authority.',
        },
      ],
    },

    compare: {
      eyebrow: 'Why payer operations need scalable backend support',
      title: 'Processing queues managed reactively<br><em>always produce SLA failures before they produce solutions.</em>',
      description: 'Reactive queue management — adding staff after backlogs develop, responding to provider inquiries after they increase, reporting on SLA failures after they occur — is structurally behind the problem. Proactive processing capacity is structurally ahead of it.',
      rows: [
        { label: 'Queue visibility', hbs: 'Daily reporting — proactive', other: 'Reactive — after SLA failures' },
        { label: 'Peak volume response', hbs: 'Scales without permanent hiring', other: 'Requires new headcount cycle' },
        { label: 'Provider inquiry management', hbs: 'Proactive status communication', other: 'Reactive — after inbound volume increases' },
        { label: 'Documentation review at intake', hbs: 'Gaps caught before processing', other: 'Discovered mid-workflow' },
        { label: 'Operations cost structure', hbs: 'Adjustable — no fixed overhead', other: 'Fixed payroll regardless of volume' },
        { label: 'Internal team focus', hbs: 'Decisions and exceptions', other: 'Volume processing + decisions' },
      ],
    },

    finalCta: {
      eyebrow: 'Start with a payer operations review',
      title: 'If your queues are aging, your SLAs are slipping, or your team is managing volume<br><em>instead of managing outcomes — the processing model needs to change.</em>',
      description: 'We start with a review of your current payer operations — queue volumes, processing timelines, backlog status, and the specific functions where capacity is the constraint. No commitment required to see the picture.',
      buttons: [
        {
          text: 'Scale payer backend operations',
          variant: 'light',
        },
        {
          text: 'Talk to our payer operations team',
          variant: 'ghost',
        },
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required',
    },
  },
};
