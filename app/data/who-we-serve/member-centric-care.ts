import { SolutionData } from '@/app/data/solutionTypes';

export const memberCentricCare: SolutionData = {
  title: 'Member-Centric Care Operations Support | HBS',
  subtitle: 'It is sustained or broken in the backend.',
  description: 'Improve member care workflows with eligibility, outreach, referrals, documentation, reporting, and backend coordination support.',
  
  hero: {
    eyebrow: 'Member-Centric Care',
    title: 'Care coordination only works when the operations <em>behind it do too.</em>',
    subtitle: 'Member-focused care models depend on referral tracking, authorization management, eligibility accuracy, and billing alignment across multiple care team touchpoints  any gap affects both care and revenue.',
    description: 'HBS supports the operational layer that keeps member-centric care models running without administrative breakdown.',
  },

  sections: {
    pain: {
      eyebrow: 'The care coordination operations reality',
      title: 'Member-centered care is the vision. <em>Consistent backend execution is what makes it real.</em>',
      ledgerEyebrow: 'Where coordination breaks down',
      ledgerHeading: 'The operational gaps <em>that member experience reveals.</em>',
      monologue: [
        'A care coordinator has a caseload of 45 members. She is responsible for outreach, scheduling, referral tracking, authorization follow-up, documentation support, and post-visit follow-up — for all of them, simultaneously, with a caseload that keeps growing because the program is expanding. On any given day, some members receive excellent coordination. Others fall through — not because of neglect, but because the day ran out before the task queue did.',
        'Member-centric care models are built on the premise that consistent follow-up, proactive outreach, and coordinated administrative support improve outcomes. That premise is correct. The operational challenge is ensuring that the coordination is actually happening — systematically, for every member, every day — rather than happening for the members who happened to be at the top of the queue when time ran out.',
        '"The gap between a member who stays engaged with their care and one who falls through is often not clinical. It is operational. A missed outreach call. A referral that was tracked but never followed up. An authorization that expired before someone caught it. Member experience suffers when the backend workflow is inconsistent."',
        'Reporting compounds the challenge. Organizations operating member-centered care models need to demonstrate performance — member engagement rates, care continuity metrics, authorization turnaround times. Without organized backend operations, producing that reporting requires manual effort that takes time away from the coordination work it is supposed to measure.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Members fall through the cracks when coordinator caseloads exceed manageable volume',
          description: 'Care coordination is inherently human — it requires judgment, relationship, and consistent follow-through. When caseloads outpace the time coordinators have to manage them, the members who are least likely to self-advocate fall through first. Administrative support that handles the systematic tasks allows coordinators to focus on the members who need the human attention.',
        },
        {
          num: '02',
          title: 'Referral tracking is inconsistent — some are followed up, some are not',
          description: 'A referral submitted without systematic follow-up is not a referral — it is a piece of paperwork. Member-centered care requires that every referral has a status, a timeline, and an owner who follows through until the member receives the referred service or a documented decision is made.',
        },
        {
          num: '03',
          title: 'Prior authorization management is reactive rather than proactive',
          description: 'Authorization expiration is discovered when a claim is denied, not before the service is delivered. In member-centric care models, where care continuity is the objective, authorization gaps create clinical gaps — and the member experience reflects that immediately.',
        },
        {
          num: '04',
          title: 'Communication is scattered across too many channels without coordination',
          description: 'Phone calls, portal messages, email, and EHR notes all contain relevant member communication — often without a single person who has visibility across all of them for any given member. Important messages are missed. Follow-up is duplicated. Members experience inconsistency that contradicts the organization\'s member-centered model.',
        },
        {
          num: '05',
          title: 'Reporting requires manual effort that takes time away from care coordination',
          description: 'Performance reporting for value-based care contracts, grant requirements, or organizational dashboards requires data that lives in multiple systems. Assembling it manually is time-consuming — time that comes out of the care coordination work the reporting is supposed to measure.',
        },
      ],
    },

    solution: {
      eyebrow: 'The solution',
      title: 'Backend coordination support that keeps every member in view. <em>Every day.</em>',
      description: 'Hired Billing Support provides the administrative coordination layer that allows care teams to focus on member relationships — eligibility verification, referral tracking, authorization management, documentation support, communication coordination, and operational reporting handled systematically so no member falls through the gaps.',
      process: [
        {
          num: '01',
          title: 'Member outreach and follow-up coordination',
          description: 'Outreach queues managed systematically — every member contacted on schedule, every follow-up documented, every non-responder escalated appropriately so care coordinators maintain visibility across the full caseload.',
        },
        {
          num: '02',
          title: 'Referral tracking from submission to completion',
          description: 'Every referral tracked from initial submission through to completion or documented decision — status updated, follow-up triggered when responses are delayed, and care coordinators notified when member action is needed.',
        },
        {
          num: '03',
          title: 'Prior authorization coordination',
          description: 'Authorization requests tracked, submitted, and followed up proactively — expiration monitoring included so authorization gaps do not create clinical care gaps for the members who depend on continued coverage.',
        },
        {
          num: '04',
          title: 'Eligibility verification and benefits support',
          description: 'Member eligibility and benefits verified for upcoming services — with particular attention to coverage changes that affect care access and the authorization requirements that managed care plans impose on member-centered services.',
        },
        {
          num: '05',
          title: 'Documentation support and task coordination',
          description: 'Documentation requests, care plan updates, and provider task items coordinated — so clinical staff spend their time on clinical decisions rather than administrative follow-up that a support team can manage.',
        },
        {
          num: '06',
          title: 'Operational reporting and performance visibility',
          description: 'Member engagement metrics, referral completion rates, authorization turnaround times, and care continuity data organized and reported — so leadership can demonstrate performance and manage the program with current information.',
        },
      ],
    },

    services: {
      eyebrow: 'Services that fit member-centric organizations',
      title: 'Every backend coordination function. <em>Managed so care teams can coordinate.</em>',
      items: [
        {
          num: '01',
          title: 'Member Outreach & Follow-Up',
          description: 'Outreach queues managed systematically — every member contacted on schedule, every follow-up documented, every gap escalated before it becomes a care continuity problem.',
        },
        {
          num: '02',
          title: 'Referral Tracking & Coordination',
          description: 'Every referral tracked from submission to completion — status maintained, follow-up triggered, care coordinators notified when member action is required.',
        },
        {
          num: '03',
          title: 'Prior Authorization Management',
          description: 'Authorization requests managed proactively — submitted, tracked, followed up on, and monitored for expiration so care access is not disrupted by administrative gaps.',
        },
        {
          num: '04',
          title: 'Eligibility & Benefits Verification',
          description: 'Member eligibility verified for upcoming services — coverage changes identified and communicated before they affect care access or billing.',
        },
        {
          num: '05',
          title: 'Documentation Support',
          description: 'Care plan documentation, clinical note support, and provider task coordination — administrative documentation handled so clinical staff focus on clinical work.',
        },
        {
          num: '06',
          title: 'Patient/Member Communication Coordination',
          description: 'Phone, portal, and message coordination — consistent communication responses and documentation across all channels so no member communication falls through.',
        },
        {
          num: '07',
          title: 'Scheduling & Appointment Support',
          description: 'Appointment scheduling, reminders, and follow-up coordination — so member scheduling gaps are identified and addressed before they become care continuity gaps.',
        },
        {
          num: '08',
          title: 'Operational Reporting & Analytics',
          description: 'Member engagement metrics, referral completion rates, authorization performance, and care continuity data — organized and reported to support program management and performance demonstration.',
        },
      ],
    },

    workflow: {
      eyebrow: 'Care coordination workflow model',
      title: 'Every member in view. <em>Every coordination task managed.</em>',
      description: 'Care coordination at scale requires systematic backend support — so the human work that only coordinators can do gets the attention it deserves.',
      items: [
        { num: 'Member', label: 'Eligibility', sublabel: 'Coverage verified' },
        { num: 'Outreach', label: 'Contact Queue', sublabel: 'Systematic' },
        { num: 'Auth', label: 'Prior Auth', sublabel: 'Proactive' },
        { num: 'Referral', label: 'Tracking', sublabel: 'To completion' },
        { num: 'Visit', label: 'Coordination', sublabel: 'Scheduling · Prep' },
        { num: 'Post', label: 'Follow-Up', sublabel: 'Documentation' },
        { num: 'Report', label: 'Performance', sublabel: 'Member metrics' },
      ],
    },

    howWeWork: {
      eyebrow: 'How HBS works with care teams',
      title: 'Inside your workflow. <em>Aligned with your care model.</em>',
      description: 'Care coordination support only works when it is embedded in the actual workflow — not managed from outside as a separate administrative layer that care teams have to interact with.',
      process: [
        {
          num: '01',
          title: 'We work inside your EHR and care coordination platform',
          description: 'Your clinical and operational systems — we access them directly so the support integrates into the existing workflow rather than creating an additional system for care teams to manage.',
        },
        {
          num: '02',
          title: 'We understand the context of member-centered care',
          description: 'Value-based care models, care coordination programs, managed care relationships, and population health goals — understood and respected in every administrative decision and communication.',
        },
        {
          num: '03',
          title: 'We communicate through the channels your care team uses',
          description: 'EHR messaging, care coordination platform notifications, email — the support communicates where your team communicates, not through a separate vendor interaction.',
        },
        {
          num: '04',
          title: 'We report member and operational metrics on a regular schedule',
          description: 'Member engagement rates, referral completion, authorization performance, and care continuity data — reported to leadership in a format that supports program management and performance demonstration.',
        },
        {
          num: '05',
          title: 'We scale as caseloads and member populations grow',
          description: 'New care programs, expanded member populations, additional coordination functions — the support scales with the organization without requiring a new engagement or a separate onboarding process.',
        },
      ],
    },

    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Technology handles the repetitive. <em>People handle the judgment.</em>',
      machineLabel: 'AI-assisted coordination workflows',
      humanLabel: 'Care coordination specialists',
      machine: [
        'Member outreach queue scheduling and contact status tracking',
        'Referral status monitoring and follow-up trigger generation',
        'Authorization expiration tracking and alert generation',
        'Eligibility verification scheduling and results tracking',
        'Documentation task queue monitoring and routing',
        'Operational metric tracking and reporting generation',
      ],
      human: [
        'Member communication requiring clinical context and empathy',
        'Referral coordination with payer-specific requirements',
        'Prior authorization follow-up and escalation decisions',
        'Documentation support with clinical context awareness',
        'Care team communication and coordination decisions',
        'Leadership reporting with program performance context',
      ],
      pullQuote: '\"Member experience in care coordination is the sum of every interaction — including the ones that never reach a human. Eligibility that fails silently. A referral that was never followed up. An authorization that expired before anyone caught it. Backend execution is not separate from member experience. It determines it.\"',
    },

    results: {
      eyebrow: 'What changes',
      title: 'Care teams that coordinate. <em>Members who do not fall through.</em>',
      outcomes: [
        {
          icon: '◎',
          title: 'No member falls through the administrative cracks',
          description: 'Systematic outreach queues, referral tracking, and follow-up workflows ensure every member receives consistent coordination — not just those at the top of the queue when time runs out.',
        },
        {
          icon: '✓',
          title: 'Referrals are tracked to completion',
          description: 'Every referral has a status, a timeline, and a follow-up trigger — so care coordinators can see exactly where each member stands in their referral pathway.',
        },
        {
          icon: '→',
          title: 'Care teams focus on coordination, not administrative tasks',
          description: 'Outreach queues, documentation tasks, authorization follow-up, and scheduling support removed from coordinator responsibilities — so human time goes to human work.',
        },
        {
          icon: '↓',
          title: 'Authorization gaps stop creating clinical care gaps',
          description: 'Proactive authorization tracking means expirations are caught before they affect care access — not discovered through a denied claim after the member has already experienced a disruption.',
        },
        {
          icon: '$',
          title: 'Revenue protected through eligibility and billing coordination',
          description: 'Eligibility verified, authorizations in place, and billing coordination managed — so the financial infrastructure of the care model performs as well as the clinical model.',
        },
        {
          icon: '⚡',
          title: 'Program performance is visible and demonstrable',
          description: 'Member engagement metrics, referral completion rates, and care continuity data organized and reported — so leadership can demonstrate value and manage program performance with current information.',
        },
      ],
    },

    compare: {
      eyebrow: 'Why member experience depends on backend execution',
      title: 'The member experience is built clinically. <em>It is sustained or broken operationally.</em>',
      description: 'Clinical quality creates the foundation of member experience. Operational consistency determines whether members actually receive the care they need — or fall through gaps that nobody intended but nobody prevented.',
      rows: [
        {
          label: 'Member outreach consistency',
          hbs: 'Systematic — every member reached',
          other: 'Depends on coordinator bandwidth',
        },
        {
          label: 'Referral follow-through',
          hbs: 'Tracked to completion — every referral',
          other: 'Followed up when time allows',
        },
        {
          label: 'Authorization management',
          hbs: 'Proactive — expiration monitored',
          other: 'Discovered through claim denial',
        },
        {
          label: 'Documentation support',
          hbs: 'Coordinated — clinical staff focused',
          other: 'Falls on coordinators and providers',
        },
        {
          label: 'Program performance visibility',
          hbs: 'Reported on schedule',
          other: 'Assembled manually — time-consuming',
        },
        {
          label: 'Scale with member population growth',
          hbs: 'Adjusts without fixed overhead',
          other: 'Requires proportional coordinator hiring',
        },
      ],
    },

    finalCta: {
      eyebrow: 'Start with a coordination workflow review',
      title: 'If members are falling through administrative gaps, <em>the backend workflow needs to change.</em>',
      description: 'We start with a review of your current care coordination workflow — identifying where members fall through, what outreach and referral tracking gaps exist, and what a systematic backend support model would change. No commitment required.',
      buttons: [
        { text: 'Strengthen member-care operations', variant: 'light' },
        { text: 'Talk to our care coordination team', variant: 'ghost' },
      ],
      trustLine: 'HIPAA · BAA on every engagement · No long-term contract required',
    },
  },
};
