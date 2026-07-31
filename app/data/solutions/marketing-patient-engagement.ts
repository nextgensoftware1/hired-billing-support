import { SolutionData } from '../solutionTypes';

export const marketingPatientEngagement: SolutionData = {
  title: 'Healthcare Marketing & Patient Engagement | HBS',
  subtitle: 'Converts patient inquiry into appointments, appointments into visits, and visits into long-term relationships by connecting marketing efforts with operational follow-through.',
  description: 'Connect growth with operations through patient follow-up, inquiry handling, recall workflows, reviews, and engagement support.',
  hero: {
    eyebrow: 'Patient Engagement',
    title: 'Your schedule has gaps your front desk does not<em> have time to fill.</em>',
    subtitle: 'Inquiry follow-up, appointment conversion, recall campaigns, and patient communication require consistency that a busy front desk rarely has capacity to maintain.',
    description: 'HBS manages patient engagement workflows so more inquiries convert, more appointments stick, and more patients return.',
    card: {
      title: 'Patient Engagement Snapshot · 30-day',
      journeys: [
        { icon: 'done', text: 'Website inquiry received — same-day response', tag: 'Done' },
        { icon: 'done', text: 'Follow-up call — appointment offered same call', tag: 'Done' },
        { icon: 'done', text: 'Appointment confirmation + intake forms sent', tag: 'Done' },
        { icon: 'done', text: 'Insurance verified pre-visit — no surprises', tag: 'Done' },
        { icon: 'active', text: 'Post-visit recall — 6-week follow-up scheduled', tag: 'In progress' },
        { icon: 'pending', text: 'Review request — post-visit satisfaction follow-up', tag: 'Queued' },
      ],
      stats: [
        { num: '94%', label: 'Inquiry Response Rate' },
        { num: '78%', label: 'Inquiry-to-Apt Rate' },
        { num: '4.8★', label: 'Avg Review Score' },
      ],
      callout: 'Avg response time: 4 hrs → 38 min. Conversion up 22%.',
    },
  },
  sections: {
    pain: {
      eyebrow: 'The patient engagement gap every practice knows',
      title: 'The marketing is working. <em>The follow-up is where growth stops.</em>',
      ledgerEyebrow: 'Where the engagement breaks down',
      ledgerHeading: 'The specific gaps <em>between interest and appointment.</em>',
      monologue: [
        'Someone searches for a specialist in your area. They find your practice. They fill out the contact form or call during a busy period and leave a voicemail. Your front desk team sees it — but they are already managing check-in, phones, prior authorizations, and the provider\'s schedule simultaneously. The callback happens four hours later, or the next morning, or sometimes not at all.',
        'That patient did not wait. They submitted an inquiry to two other practices at the same time. One of them responded in 20 minutes. That is where they booked.',
        '"You already know that growth is not just about getting more calls. It is about having the operational structure to answer, follow up, schedule, verify, and retain patients before the opportunity disappears — and right now, that structure may not be keeping pace with your marketing."',
        'Patient engagement is not a marketing problem. It is an operations problem dressed in marketing clothing. The inquiry comes from marketing. What happens after the inquiry — the speed, the consistency, the follow-through — is entirely determined by how well your operations are structured to handle it.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Inquiries sit too long before someone responds',
          description: 'Response time is the single biggest driver of inquiry-to-appointment conversion. Patients who receive a response within 30 minutes are dramatically more likely to book than those who wait hours. But most practices respond when staff finds time — which is rarely within 30 minutes.',
        },
        {
          num: '02',
          title: 'Front desk staff are too busy to manage follow-up systematically',
          description: 'Your front desk team is excellent at managing the patients in front of them. They are not structured to simultaneously manage an inquiry queue, follow up with patients who did not schedule, and re-engage patients who missed appointments — all while running daily operations.',
        },
        {
          num: '03',
          title: 'Patients fall through between inquiry and scheduled appointment',
          description: 'Someone calls, asks about availability, says they will call back to schedule. Nobody follows up. They move to the next practice on their search results. The patient was interested — the practice just did not have a system to convert that interest into a confirmed appointment.',
        },
        {
          num: '04',
          title: 'Reputation and reviews are not managed consistently',
          description: 'Happy patients need a prompt and simple path to leave a review. Dissatisfied patients need a fast internal response before their frustration goes public. Without a systematic reputation workflow, reviews are random — skewing toward negative because unhappy patients are more motivated to write unsolicited reviews than satisfied ones.',
        },
        {
          num: '05',
          title: 'Patient recall and retention are not happening',
          description: 'Patients who have not been seen in 12 months, patients due for follow-up visits, patients who cancelled and never rescheduled — these represent significant revenue that already-acquired patients could generate. Without a systematic recall process, that revenue stays dormant.',
        },
        {
          num: '06',
          title: 'Communication is scattered and inconsistent',
          description: 'Patients contact the practice through phone, email, website forms, patient portals, and text messages. Without a coordinated response system, messages fall through, response times vary, and patients experience a communication quality that does not match the quality of clinical care.',
        },
      ],
    },
    solution: {
      eyebrow: 'The solution',
      title: 'We connect your marketing to your operations. <em>So interest becomes revenue.</em>',
      description: 'Hired Billing Support supports patient inquiry response, appointment conversion, scheduling coordination, reputation management, and patient retention workflows — filling the operational gap between marketing and revenue.',
      process: [
        {
          num: '01',
          title: 'Inquiry response and appointment conversion',
          description: 'Patient inquiries through phone, form, email, and portal monitored and responded to on a defined schedule — so patients receive a prompt, professional response that moves them toward booking, not waiting.',
        },
        {
          num: '02',
          title: 'Appointment confirmation and intake coordination',
          description: 'Confirmed appointments followed with intake form delivery, insurance information requests, and pre-visit reminders — so patients arrive prepared and front desk staff spend less time on day-of paperwork.',
        },
        {
          num: '03',
          title: 'Patient recall and retention campaigns',
          description: 'Patients overdue for follow-up visits, preventive care, or recall appointments identified and contacted through appropriate channels — generating appointments from the patient base the practice already has.',
        },
        {
          num: '04',
          title: 'Reputation monitoring and review coordination',
          description: 'Post-visit review requests sent to satisfied patients. Negative feedback identified early and escalated internally for resolution before it reaches a public review platform.',
        },
        {
          num: '05',
          title: 'Referral follow-up coordination',
          description: 'Incoming referrals tracked, followed up on, and scheduled with the urgency appropriate to the clinical context — so referral relationships produce appointments, not just paperwork.',
        },
        {
          num: '06',
          title: 'Practice presence and content coordination',
          description: 'Google Business Profile maintenance, website inquiry management, and patient-facing content coordination supported — so the practice\'s online presence reflects the quality of its clinical care.',
        },
      ],
    },
    services: {
      eyebrow: 'Patient engagement services',
      title: 'Every touchpoint in the patient journey. <em>Managed and followed through.</em>',
      description: '',
      items: [
        {
          num: '01',
          title: 'Patient Inquiry Response',
          description: 'Phone, form, email, and portal inquiries responded to on a defined schedule — fast, professional, and conversion-focused.',
        },
        {
          num: '02',
          title: 'Appointment Conversion Support',
          description: 'Interested patients guided from initial inquiry through confirmed appointment — with follow-up for those who did not book on first contact.',
        },
        {
          num: '03',
          title: 'Scheduling Coordination',
          description: 'Scheduling support for new patient appointments, referrals, and recall visits — coordinated with your existing scheduling system and provider availability.',
        },
        {
          num: '04',
          title: 'Appointment Reminders & Confirmation',
          description: 'Reminders sent at defined intervals before appointments — reducing no-shows, late cancellations, and same-day scrambles to fill schedule gaps.',
        },
        {
          num: '05',
          title: 'Pre-Visit Intake Coordination',
          description: 'Intake forms, insurance information, and pre-visit instructions sent to patients ahead of their appointment — so the day-of experience is cleaner for staff and patients.',
        },
        {
          num: '06',
          title: 'Patient Recall Campaigns',
          description: 'Patients overdue for recall visits, preventive care, or follow-up care identified and contacted through coordinated outreach — generating appointments from existing patients.',
        },
        {
          num: '07',
          title: 'Post-Visit Follow-Up',
          description: 'Post-visit satisfaction check-ins, review requests, and follow-up care reminders sent after appointments — supporting retention and reputation simultaneously.',
        },
        {
          num: '08',
          title: 'Reputation Management Support',
          description: 'Review request workflow for satisfied patients. Negative feedback escalated internally. Google Business Profile and directory listings monitored and maintained.',
        },
        {
          num: '09',
          title: 'Referral Coordination',
          description: 'Incoming referrals tracked, followed up on, and scheduled — so referral relationships produce appointments rather than just documentation volume.',
        },
        {
          num: '10',
          title: 'Patient Communication Workflow',
          description: 'Coordinated patient communication across phone, email, text, and portal — consistent voice, consistent response time, consistent patient experience.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Patient engagement workflow',
      title: 'From first inquiry to long-term patient. <em>Every step supported.</em>',
      description: 'Patient engagement is not a single touchpoint. It is a series of interactions that compound — each one building the relationship that makes patients stay.',
      items: [
        { num: '01', label: 'Inquiry Received', sublabel: 'Phone · Form · Portal' },
        { num: '02', label: 'Rapid Response', sublabel: '<30 min target' },
        { num: '03', label: 'Appointment Set', sublabel: 'Confirmed + intake sent' },
        { num: '04', label: 'Pre-Visit Prep', sublabel: 'Forms · Insurance · Reminder' },
        { num: '05', label: 'Visit Complete', sublabel: 'Clinical care delivered' },
        { num: '06', label: 'Post-Visit Follow-Up', sublabel: 'Satisfaction · Review request' },
        { num: '07', label: 'Recall Workflow', sublabel: 'Next appt coordinated' },
        { num: '08', label: 'Long-Term Patient', sublabel: 'Retained · Referring' },
      ],
    },
    howWeWork: {
      eyebrow: 'How HBS supports patient engagement',
      title: 'Inside your workflow. <em>Not managing it from the outside.</em>',
      description: 'Patient engagement support only works when it is embedded in the practice\'s actual communication systems \u2014 not layered on top as a separate process your team has to manage.',
      process: [
        {
          num: '01',
          title: 'We work inside your scheduling system and communication tools',
          description: 'Your EHR, your scheduling platform, your phone system, your patient portal \u2014 we operate inside the tools your practice already uses so patients receive a seamless experience, not a disconnected third-party interaction.',
        },
        {
          num: '02',
          title: 'We coordinate with your front desk team, not around it',
          description: 'Patient engagement support does not replace your front desk. It removes the tasks that pull your front desk away from the patients in front of them \u2014 inquiry follow-up, recall outreach, review coordination \u2014 so your staff can focus on the experience that matters most.',
        },
        {
          num: '03',
          title: 'We communicate in the practice\'s voice',
          description: 'Every patient interaction follows your communication standards \u2014 your tone, your language, your brand. Patients experience consistency, not a vendor they do not recognize.',
        },
        {
          num: '04',
          title: 'We track engagement metrics and report to leadership',
          description: 'Inquiry response rates, appointment conversion rates, no-show rates, review scores, and patient recall results \u2014 reported regularly so leadership can see the direct connection between engagement activity and growth outcomes.',
        },
        {
          num: '05',
          title: 'We adjust as your practice and patient population evolve',
          description: 'New services, new providers, new patient populations \u2014 we update the engagement workflow to reflect what your practice is offering and who it is trying to reach at any given time.',
        },
      ],
    },
    aiHuman: {
      eyebrow: 'The AI + human advantage',
      title: 'Automated where speed matters. <em>Human where judgment matters.</em>',
      description: '',
      machineLabel: 'AI-assisted patient engagement',
      humanLabel: 'Human engagement specialists',
      machine: [
        'Inquiry queue monitoring and response-time tracking',
        'Appointment reminder scheduling and delivery',
        'Recall patient identification and outreach scheduling',
        'Review request workflow automation after visits',
        'No-show and cancellation re-engagement routing',
        'Engagement performance reporting and trend tracking',
      ],
      human: [
        'Patient inquiry responses that feel personal, not automated',
        'Scheduling conversations that account for patient needs and concerns',
        'Negative feedback de-escalation before it reaches a public review',
        'Referral coordination with clinical context and urgency sensitivity',
        'Engagement strategy adjustments based on patient behavior patterns',
        'Leadership communication on growth outcomes and engagement results',
      ],
      pullQuote: '"Patients do not always leave because of clinical care. Sometimes they leave because the communication felt slow, inconsistent, or disconnected from the care they received. The operational layer between clinical and patient is where the relationship is actually built."',
    },
    results: {
      eyebrow: 'What changes',
      title: 'More of your marketing investment <em>becomes actual patients.</em>',
      description: '',
      outcomes: [
        {
          icon: '↑',
          title: 'Inquiry-to-appointment conversion improves',
          description: 'Faster responses and consistent follow-up convert a higher percentage of inquiries into scheduled appointments — without additional marketing spend.',
        },
        {
          icon: '↓',
          title: 'No-shows and late cancellations decline',
          description: 'Systematic reminders and pre-visit coordination reduce no-shows — protecting schedule capacity and daily revenue.',
        },
        {
          icon: '◎',
          title: 'Reputation reflects the quality of your clinical care',
          description: 'Review requests sent to satisfied patients, negative feedback resolved internally — online reputation managed proactively rather than reactively.',
        },
        {
          icon: '$',
          title: 'Recall appointments generate revenue from existing patients',
          description: 'Patients already in your system, already trusting your practice, already due for follow-up — contacted and re-scheduled without requiring new patient acquisition.',
        },
        {
          icon: '→',
          title: 'Front desk focus returns to patient experience',
          description: 'Inquiry follow-up, recall outreach, and review coordination removed from daily front desk responsibilities — so staff focus on the patients in front of them.',
        },
        {
          icon: '✓',
          title: 'Growth becomes measurable and manageable',
          description: 'Inquiry rates, conversion rates, engagement outcomes, and retention metrics tracked and reported — so growth decisions are made with data, not intuition.',
        },
      ],
    },
    compare: {
      eyebrow: 'Why marketing alone does not create growth',
      title: 'Marketing creates interest. <em>Operations converts it.</em>',
      description: 'The practices that grow consistently are not necessarily the ones with the best marketing. They are the ones with the best operational follow-through on every patient interaction.',
      rows: [
        {
          label: 'Inquiry response time',
          hbs: 'Under 30 minutes target',
          other: 'Hours — or missed entirely',
        },
        {
          label: 'Inquiry-to-appointment rate',
          hbs: 'Systematically improved',
          other: 'Depends on front desk bandwidth',
        },
        {
          label: 'Recall and retention',
          hbs: 'Systematic — monthly outreach',
          other: 'Ad hoc or not happening',
        },
        {
          label: 'Reputation management',
          hbs: 'Proactive workflow maintained',
          other: 'Reactive — after damage is done',
        },
        {
          label: 'No-show rate',
          hbs: 'Reduced through reminders',
          other: 'Unpredictable',
        },
        {
          label: 'Growth visibility',
          hbs: 'Tracked and reported regularly',
          other: 'Intuition-based',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Start with an engagement review',
      title: 'If patients are reaching out but not always converting, <em>the gap is in the follow-through.</em>',
      description: 'We start with a review of your current patient engagement workflow \u2014 response times, conversion rates, recall activity, and reputation status \u2014 and show you exactly where the operational gaps are. No commitment required.',
      buttons: [
        { text: 'Improve patient engagement', variant: 'primary' },
        { text: 'Talk to our team first', variant: 'ghost' },
      ],
      trustLine: 'HIPAA \u00b7 BAA on every engagement \u00b7 No long-term contract required',
    },
  },
};
