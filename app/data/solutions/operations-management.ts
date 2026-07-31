import { SolutionData } from '../solutionTypes';

export const operationsManagement: SolutionData = {
  title: 'Healthcare Operations Management | HBS',
  subtitle: 'Embedded remote operations team managing daily workflows, task queues, billing coordination, SOP implementation, and operational reporting so your practice runs consistently as it grows.',
  description: 'Support daily practice workflows with remote operations help for scheduling, tasks, EHR queues, reporting, and admin control.',
  hero: {
    eyebrow: ' Operations Management',
    title: 'Your team is not failing. They are doing <em>too many jobs at once.</em>',
    subtitle: 'Prior auths, eligibility checks, scheduling coordination, documentation follow-up daily administrative tasks pile up faster than any team can manage systematically without a structure behind them.',
    description: 'HBS provides daily operational support that keeps practice workflow moving without adding to your payroll.',
    card: {
      title: 'Operations Dashboard · Daily Status',
      statuses: [
        { icon: 'done', label: 'Prior Auth Queue', value: '12 managed — 0 expired' },
        { icon: 'done', label: 'Eligibility Verifications', value: 'All tomorrow\'s appts verified' },
        { icon: 'pending', label: 'Scheduling Gaps', value: '3 unfilled slots — follow-up sent' },
        { icon: 'done', label: 'Patient Callbacks', value: 'All returned same-day' },
        { icon: 'done', label: 'Claim Submission Queue', value: '0 claims pending >24hrs' },
        { icon: 'pending', label: 'Provider Task Queue', value: '2 items need provider action' },
      ],
      stats: [
        { num: '4', label: 'Green — On Track', color: 'signal' },
        { num: '2', label: 'In Progress', color: 'amber' },
        { num: '0', label: 'Critical Issues', color: 'signal' },
      ],
      callout: '3 schedule gaps — patient outreach in progress.',
    },
  },
  sections: {
    pain: {
      title: 'Growth does not automatically create operational control. <em>Growth does not automatically create operational control.EM</em>',
      description: '',
      ledgerEyebrow: 'Where the problem lives',
      ledgerHeading: 'The specific gaps <em>behind the surface.</em>',
      monologue: [
        'The practice is growing. More providers. More patients. More locations, maybe. And the administrative team — which was already stretched — is now managing more volume with the same bandwidth, the same inconsistent processes, and the same lack of visibility that existed when the practice was half its current size.',
        'Phones, scheduling, insurance verification, prior authorizations, billing questions, patient callbacks, provider EHR tasks, credentialing follow-ups, and staff coordination all compete for the same hours. Important tasks fall behind not because nobody is working, but because everyone is working on whatever is most urgent — and the important things that are not urgent get deferred until they become urgent too.',
        '"Your team is not disorganized. They are trying to manage payer rules, provider requests, patient coordination, billing questions, and daily operations all at the same time — without enough structure, visibility, or dedicated support to do any of it consistently well."',
        'Operations management is not about hiring more people. It is about building a system where the right things happen consistently, processes are documented and followed, tasks have owners and deadlines, and leadership has enough visibility to manage what is happening before problems surface in a patient complaint or a revenue report.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Important tasks consistently fall behind urgent ones',
          description: 'Prior authorizations, eligibility verifications, follow-up calls, and billing queue work keep getting deferred because today\'s crisis always takes priority. The result is a practice where the reactive work is done and the proactive work is chronically delayed.',
        },
        {
          num: '02',
          title: 'Workflows depend on individual habits instead of defined processes',
          description: 'Different staff members handle the same tasks differently. When a key person is out, the process they carried in their head is out too. Without documented, enforced SOPs, operational quality depends on who is working that day.',
        },
        {
          num: '03',
          title: 'Leadership does not have visibility into daily operational status',
          description: 'What tasks are behind? Which provider has unaddressed EHR items? Are prior authorizations expiring? Are scheduling gaps going unfilled? Without operational reporting, leadership manages by intuition and outcome — not by current status.',
        },
        {
          num: '04',
          title: 'Administrative gaps create provider frustration and delays',
          description: 'Providers arrive to find their schedule double-booked, prior authorizations not obtained, or patient insurance not verified. These are not clinical problems — they are operational problems that hurt the clinical experience and reduce provider productivity.',
        },
        {
          num: '05',
          title: 'Hiring more staff does not automatically fix broken workflows',
          description: 'More staff doing the same things the same inconsistent way produces more inconsistent output. Adding headcount to an unstructured operation scales the chaos as much as it scales the capacity. What is needed is not more people — it is better structure around the people already working.',
        },
        {
          num: '06',
          title: 'Patients experience delays before leadership knows about them',
          description: 'A scheduling backlog, a prior auth delay, a billing question that goes unanswered for three days — patients notice before the report shows it. Operational problems surface to patients first, to leadership last.',
        },
      ],
    },
    solution: {
      eyebrow: 'The solution',
      title: 'An embedded remote operations team <em>An embedded remote operations teamEM</em>',
      description: 'Hired Billing Support becomes your embedded operations department — managing daily administrative workflows, coordinating billing operations, maintaining task queues, implementing SOPs, and providing leadership with regular operational reporting so the practice runs consistently whether the day is routine or chaotic.',
      process: [
        {
          num: '01',
          title: 'Daily task queue management',
          description: 'Prior authorizations, eligibility verifications, patient callbacks, scheduling tasks, and billing queue items tracked daily — with assigned owners, defined timelines, and escalation triggers when items approach deadlines.',
        },
        {
          num: '02',
          title: 'SOP development and process standardization',
          description: 'Every administrative workflow documented as a step-by-step SOP — eligibility verification, prior authorization, scheduling, intake, billing coordination, and provider support. Consistency becomes a system, not a habit.',
        },
        {
          num: '03',
          title: 'Billing operations coordination',
          description: 'Charge entry, claim submission queue, denial work, AR follow-up, and payment posting coordination supported — so billing keeps moving even when the internal team is managing patient volume.',
        },
        {
          num: '04',
          title: 'Provider and clinical team administrative support',
          description: 'EHR task management, prior authorization coordination, documentation requests, and scheduling support — so providers spend their time on patient care, not administrative follow-up.',
        },
        {
          num: '05',
          title: 'Operational performance monitoring',
          description: 'Task completion rates, SOP adherence, queue sizes, and scheduling metrics tracked and reported — giving leadership current operational status rather than discovered problems.',
        },
        {
          num: '06',
          title: 'Scalable operations infrastructure',
          description: 'As the practice adds providers, locations, or patient volume, the operational structure scales with it — without requiring proportional increases in administrative headcount.',
        },
      ],
    },
    services: {
      eyebrow: 'Operations services included',
      title: 'Every layer of practice backend operations. <em>Every layer of practice backend operations.EM</em>',
      description: '',
      items: [
        {
          num: '01',
          title: 'Daily Task Queue Management',
          description: 'Prior authorizations, eligibility verifications, callbacks, billing queue, and provider EHR items tracked daily — every task with an owner, a deadline, and a follow-up trigger.',
        },
        {
          num: '02',
          title: 'Prior Authorization Coordination',
          description: 'Prior auth requests tracked, submitted, followed up on, and documented — with expiration monitoring and escalation when authorization decisions approach service dates.',
        },
        {
          num: '03',
          title: 'Eligibility & Insurance Verification',
          description: 'Patient insurance verified before every appointment on a systematic schedule — not at check-in when it is too late to address coverage problems.',
        },
        {
          num: '04',
          title: 'Scheduling Support',
          description: 'Schedule gap monitoring, patient recall coordination, appointment confirmation, and cancellation management — keeping the schedule full and organized.',
        },
        {
          num: '05',
          title: 'Billing Operations Coordination',
          description: 'Charge entry queue, claim submission, denial management, and AR follow-up coordinated and supported — billing keeps moving even during high-volume patient periods.',
        },
        {
          num: '06',
          title: 'EHR Workflow Support',
          description: 'Provider EHR task queue managed, documentation requests coordinated, and workflow bottlenecks identified — so the EHR supports clinical work rather than creating administrative backlog.',
        },
        {
          num: '07',
          title: 'SOP Development & Documentation',
          description: 'Every administrative workflow documented as a step-by-step SOP — ready for staff training, onboarding, and quality monitoring.',
        },
        {
          num: '08',
          title: 'SOP Adherence Monitoring',
          description: 'Actual workflow behavior compared against documented SOPs — gaps identified, staff notified, and adherence rates reported to leadership on a regular schedule.',
        },
        {
          num: '09',
          title: 'Patient Coordination Support',
          description: 'Patient callback management, referral coordination, prescription refill routing, and patient communication support — so patients get timely responses without burdening clinical staff.',
        },
        {
          num: '10',
          title: 'Operational Performance Reporting',
          description: 'Weekly operational snapshots and monthly performance reviews for leadership — task completion rates, queue sizes, scheduling metrics, and SOP adherence trends.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Daily operations support model',
      title: 'Not an occasional check-in. <em>Not an occasional check-in.EM</em>',
      description: 'Operations support only improves a practice when it is embedded in the daily workflow — not when it is available periodically or consulted reactively.',
      items: [
        { num: 'AM', label: 'Queue Review', sublabel: 'Tasks · Auth · Eligibility' },
        { num: 'Daily', label: 'Eligibility Check', sublabel: 'Next-day appointments' },
        { num: 'Daily', label: 'Prior Auth', sublabel: 'Pending · Expiring' },
        { num: 'Daily', label: 'Billing Coord.', sublabel: 'Claims · Denials · AR' },
        { num: 'Daily', label: 'Patient Tasks', sublabel: 'Callbacks · Scheduling' },
        { num: 'Daily', label: 'Provider Queue', sublabel: 'EHR items · Requests' },
        { num: 'Weekly', label: 'Ops Report', sublabel: 'Leadership summary' },
        { num: 'Monthly', label: 'Performance Review', sublabel: 'Metrics · SOP adherence' },
      ],
    },
    howWeWork: {
      eyebrow: 'How HBS works as your operations team',
      title: 'Embedded in your workflow. <em>Embedded in your workflow.EM</em>',
      description: 'Operations support only creates real change when the team is inside the workflow — using the same systems, seeing the same queues, and communicating with the same staff your practice runs on.',
      process: [
        {
          num: '01',
          title: 'We assess your current operational state',
          description: 'Before recommending anything, we understand how your practice currently operates — which workflows are documented, which are not, where tasks are falling behind, and what leadership cannot currently see about daily operations.',
        },
        {
          num: '02',
          title: 'We work inside your EHR, PM, and communication tools',
          description: 'We use your systems — not ours. Your EHR, your PM software, your communication channels. Your staff communicates with a team member, not a support ticket queue.',
        },
        {
          num: '03',
          title: 'We document SOPs for every workflow we manage',
          description: 'Every task and process we take on is documented in a format your staff can follow, train on, and use independently — so operational knowledge lives in a system, not in individual people.',
        },
        {
          num: '04',
          title: 'We report operational status to leadership regularly',
          description: 'Weekly snapshots and monthly performance reviews give leadership current status on task queues, workflow adherence, and operational metrics — so decisions are made with information, not intuition.',
        },
        {
          num: '05',
          title: 'We scale as your practice grows',
          description: 'New providers, new services, new locations — we scale the operational support to match the new scope without requiring proportional increases in administrative headcount.',
        },
      ],
    },
    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the tracking. <em>People handle the follow-through.</em>',
      description: '',
      machineLabel: 'AI-assisted workflows',
      humanLabel: 'Human specialists',
      machine: [
        'Daily task queue monitoring and priority scoring',
        'Prior authorization expiration tracking and alert generation',
        'Eligibility verification scheduling and status monitoring',
        'SOP adherence monitoring across workflow steps',
        'Operational performance metric tracking and reporting',
        'Scheduling gap detection and callback queue management',
      ],
      human: [
        'Prior authorization coordination and payer communication',
        'Patient coordination, callbacks, and scheduling management',
        'Billing operations coordination and denial follow-up',
        'SOP development and workflow documentation',
        'Provider administrative support and EHR task management',
        'Leadership communication and operational reporting',
      ],
      pullQuote: '"A practice that runs well from the backend is a practice that can grow without operational chaos. The clinical work is the product. The operations are the infrastructure that determines whether that product reaches patients reliably, consistently, and profitably."',
    },
    results: {
      eyebrow: 'What changes',
      title: 'A practice that runs consistently. <em>A practice that runs consistently.EM</em>',
      description: '',
      outcomes: [
        {
          icon: '◎',
          title: 'Leadership has real operational visibility',
          description: 'Task queues, workflow status, SOP adherence, and key operational metrics reported regularly — so management decisions are based on current information, not discovered problems.',
        },
        {
          icon: '✓',
          title: 'Workflows are consistent regardless of who is working',
          description: 'Documented SOPs mean every staff member follows the same process — not their own version of it — so operational quality does not depend on individual habits.',
        },
        {
          icon: '↓',
          title: 'Tasks that fell behind start getting done',
          description: 'Prior authorizations, eligibility verifications, billing queue work, and provider task items managed on a defined daily schedule — not when someone finds time.',
        },
        {
          icon: '⚡',
          title: 'Provider productivity improves',
          description: 'Providers see fewer administrative gaps — authorizations obtained, schedules correct, documentation support available — and spend more time on clinical work.',
        },
        {
          icon: '$',
          title: 'Revenue cycle support improves cash flow',
          description: 'Billing coordination, prior auth management, and eligibility verification — the operational foundations of a clean revenue cycle — running consistently every day.',
        },
        {
          icon: '→',
          title: 'Growth does not create proportional chaos',
          description: 'Scalable operations infrastructure means adding patients, providers, or locations adds workload to a structured system — not to an already-overwhelmed team.',
        },
      ],
    },
    compare: {
      eyebrow: 'Why growth needs operational structure',
      title: 'Practices that grow without operations infrastructure <em>Practices that grow without operations infrastructureEM</em>',
      description: 'Every practice eventually hits a point where growth creates more problems than it solves. That point arrives much later — and is much less painful — for practices that built operational structure first.',
      rows: [
        {
          label: 'Task queue management',
          hbs: 'Defined owners, daily schedule',
          other: 'Whoever has time',
        },
        {
          label: 'Workflow consistency',
          hbs: 'Documented SOPs — monitored',
          other: 'Varies by staff member',
        },
        {
          label: 'Leadership visibility',
          hbs: 'Regular operational reporting',
          other: 'Reactive — after problems surface',
        },
        {
          label: 'Prior auth management',
          hbs: 'Proactive — daily tracking',
          other: 'Reactive — when denied or expired',
        },
        {
          label: 'Scalability',
          hbs: 'Structure scales with volume',
          other: 'More volume = more chaos',
        },
        {
          label: 'Provider administrative experience',
          hbs: 'Supported and consistent',
          other: 'Frustrating and variable',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Start with an operations review',
      title: 'If your practice is growing but operations feel harder instead of easier, <em>If your practice is growing but operations feel harder instead of easier,EM</em>',
      description: 'We start with an operations review — mapping your current workflow state, identifying where tasks are falling behind, and showing you what a structured operations model would change. No commitment required.',
      buttons: [
        { text: 'Strengthen my practice operations', variant: 'primary' },
        { text: 'Talk to our operations team', variant: 'ghost' },
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required',
    },
  },
};
