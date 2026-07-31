import Link from 'next/link';

export const metadata = {
  title: 'MSO and Payer Partner Staffing | Hired Billing Support',
  description: 'Scale healthcare operations with staffing support tailored for MSOs, payer partners, and medical groups.',
};

export default function enterprise() {
  return (
<div>
  {/* HERO */}
  <section className="hero">
    <div className="hero-bg"><svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width={48} height={48} patternUnits="userSpaceOnUse"><path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" /></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg><div className="hero-grain" /></div>
    <div className="hero-inner">
      <div>
        <div className="eyebrow reveal reveal-1">For MSOs, billing aggregators &amp; payer organizations</div>
        <h1 className="display reveal reveal-2">Your backlog isn't going to clear itself. <em>And hiring won't get you there <span className="ul">fast enough</span>.</em></h1>
        <p className="sub reveal reveal-3" >
          You're processing thousands of claims a week. Your queues are growing faster than your team. Every new client adds volume your back office wasn't sized to absorb. The board wants margin. Operations wants headcount. Neither is going to win.</p>
        <p className="lede reveal reveal-3" >
          Hired Billing Support is the backend processing engine for healthcare operations at scale. Embedded in your systems, accountable to your SLAs, elastic enough to double when your volume does.</p>
        <div className="hero-actions reveal reveal-4">
          <a href="/contact" className="btn btn-primary">Contact Us  <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 5l7 7-7 7" /></svg></a>
          {/* <a href="#cta" className="btn btn-text">Request a scalability assessment →</a> */}
        </div>
      </div>
      <div className="reveal reveal-4" style={{animationDelay: '.55s'}}>
        <div className="hero-card">
          <h4>— Operations dashboard · Queue status</h4>
          <div className="queue-row queue-head"><div>Queue</div><div style={{textAlign: 'right'}}>Depth</div><div style={{textAlign: 'right'}}>AHT</div></div>
          <div className="queue-row"><div>Claims processing</div><div className="qn red">2,847</div><div className="qn amber">14m</div></div>
          <div className="queue-row"><div>Eligibility verification</div><div className="qn amber">1,204</div><div className="qn green">4m</div></div>
          <div className="queue-row"><div>Prior authorization</div><div className="qn red">892</div><div className="qn red">22m</div></div>
          <div className="queue-row"><div>Denial management</div><div className="qn red">634</div><div className="qn amber">18m</div></div>
          <div className="queue-row"><div>Payment posting</div><div className="qn amber">1,560</div><div className="qn green">3m</div></div>
          <div className="sla-bar"><span className="lbl">SLA breach risk this week</span><span className="val">3 of 5 queues at risk</span></div>
        </div>
      </div>
    </div>
  </section>
  {/* PAIN */}
  <section className="block" id="pain">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The capacity problem</div>
        <h2 className="display">You know exactly where the bottleneck is. <em>You can't hire your way out fast enough.</em></h2>
      </div>
      <div className="monologue fade-in">
        <p>The pipeline is full. Your sales team is closing new accounts. Operations is the constraint.</p>
        <p>Team leads are working evenings. Average handle time is creeping up. SLA breach reports are landing on someone's desk every week. Two of your best processors gave notice last month, and replacements are two months out.</p>
        <p>You can hire — but training a new processor to full productivity is 90-120 days. You can buy software — but software doesn't work the queues.</p>
        <p><em>What you actually need is throughput. Today. Not next quarter.</em></p>
      </div>
      <div className="pain-ledger fade-in">
        <div className="pain-row"><div className="pn">01</div><div className="ptitle">Volume scaling faster than headcount.</div><div className="pdesc">Every signed client adds queue depth your back office didn't budget for. Queue depth costs SLA performance.</div></div>
        <div className="pain-row"><div className="pn">02</div><div className="ptitle">AHT is creeping up.</div><div className="pdesc">When processors are stretched, accuracy drops. When accuracy drops, rework spikes. Rework destroys margin faster than anything else.</div></div>
        <div className="pain-row"><div className="pn">03</div><div className="ptitle">Hiring cycles are 90-180 days.</div><div className="pdesc">Recruit, screen, hire, train, ramp. Client launches don't wait that long. Neither does existing volume.</div></div>
        <div className="pain-row"><div className="pn">04</div><div className="ptitle">Unit economics are compressing.</div><div className="pdesc">Operational cost per claim goes up. Reimbursement per claim goes down. Margin is the meat in the middle — getting thin.</div></div>
        <div className="pain-row"><div className="pn">05</div><div className="ptitle">Standardization breaks at scale.</div><div className="pdesc">What worked at 2,000 claims/week stops working at 8,000. SOPs drift. Quality varies. Reporting gaps appear.</div></div>
        <div className="pain-row"><div className="pn">06</div><div className="ptitle">Your best people are doing the wrong work.</div><div className="pdesc">Senior staff fill in on routine processing because junior processors aren't keeping up. Judgment work goes unattended.</div></div>
      </div>
    </div>
  </section>
  {/* BEHIND THE SCENES */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What's actually happening behind the scenes</div>
        <h2 className="display">You don't have a hiring problem. <em>You have a capacity elasticity problem.</em></h2>
      </div>
      <div className="monologue fade-in" style={{maxWidth: 820}}>
        <p style={{fontFamily: 'var(--sans)', fontSize: 17, lineHeight: '1.65', color: 'var(--ink-mute)'}}>Traditional operations scale the way furniture is built — slow, fixed, expensive. You commit to headcount, real estate, training infrastructure, and management overhead, and you bear the cost whether volume is at peak or trough.</p>
        <p style={{fontFamily: 'var(--sans)', fontSize: 17, lineHeight: '1.65', color: 'var(--ink-mute)'}}>But healthcare volume isn't smooth. It spikes on new client launches. It surges at the start of every benefit year. It dips, then bursts. Your fixed cost structure can't move with it.</p>
      </div>
      <div className="insight fade-in" style={{marginTop: 40}}>What you actually need is operations that flex — capacity that comes online in days, scales up or down without termination cost, and slots into your existing systems. <em>That's not BPO. That's an operational layer.</em></div>
    </div>
  </section>
  {/* SOLUTION */}
  <section className="block" id="solution">
    <div className="container">
      <div className="solution-card fade-in">
        <div className="solution-glow" />
        <div className="eyebrow" style={{color: 'var(--signal)'}}>— Our model</div>
        <h2 className="display" style={{marginTop: 20}}>We act as your backend processing engine. <em>Embedded. Elastic. Accountable.</em></h2>
        <p>We don't replace your leadership, your systems, or your client relationships. We provide the throughput layer underneath them — staffed by trained healthcare specialists, supported by AI-assisted workflows, and accountable to your SLAs.</p>
        <p>You'll have a dedicated team lead from our side who interfaces with your operations manager. You set the SOPs. We execute them. Queue depth, AHT, accuracy, and SLA performance — visible in a shared dashboard, updated in real time.</p>
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--paper)', marginTop: 32, maxWidth: 680}}>When your volume doubles next quarter, we scale with you in days. When it drops, we scale back without severance cost.</p>
      </div>
    </div>
  </section>
  {/* SERVICES */}
  <section className="block warm" >
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What we run</div>
        <h2 className="display">Backend processing. <em>Complete coverage.</em></h2>
        <p>All deliverable under a white-label arrangement if your client relationships require it.</p>
      </div>
      <div className="svc-list fade-in">
        <div className="svc-item"><h4>Claims processing at volume</h4><p>Submission, adjudication support, payer follow-up, exception handling.</p></div>
        <div className="svc-item"><h4>Eligibility &amp; benefits verification</h4><p>Real-time and batch processing across all major payers.</p></div>
        <div className="svc-item"><h4>Prior authorization processing</h4><p>Pre-cert submission, payer follow-up, status tracking at scale.</p></div>
        <div className="svc-item"><h4>AR resolution</h4><p>Aging bucket clearance, payer escalation, root-cause analysis.</p></div>
        <div className="svc-item"><h4>Denial management &amp; appeals</h4><p>Categorization, routing, appeal authoring, overturn tracking.</p></div>
        <div className="svc-item"><h4>Payment posting &amp; reconciliation</h4><p>ERA/EOB posting, exception research, daily reconciliation.</p></div>
        <div className="svc-item"><h4>Credentialing support</h4><p>Application processing, follow-up, maintenance cycles.</p></div>
        <div className="svc-item"><h4>Data entry &amp; document processing</h4><p>Demographics, charge entry, document indexing at throughput volume.</p></div>
        <div className="svc-item"><h4>Quality assurance &amp; audit</h4><p>Sample-based QA on all processed work. Accuracy tracking.</p></div>
        <div className="svc-item"><h4>Reporting &amp; analytics</h4><p>Queue reporting, SLA dashboards, root-cause analysis.</p></div>
      </div>
    </div>
  </section>
  {/* HOW WE WORK */}
  <section className="block">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">How we integrate</div>
        <h2 className="display">We slot into your operation. <em>Not the other way around.</em></h2>
      </div>
      <div className="steps fade-in">
        <div className="step"><span className="num">— 01</span><h4>We work in your systems.</h4><p>Your platform. Your ticketing. Your reporting tools. No migration. No duplication.</p></div>
        <div className="step"><span className="num">— 02</span><h4>We follow your SOPs.</h4><p>Your QA standards. Your escalation rules. Your client-specific protocols. Documented and executed against.</p></div>
        <div className="step"><span className="num">— 03</span><h4>We report into your ops leadership.</h4><p>Dedicated team lead. Daily syncs. Weekly SLA review. Monthly capacity planning.</p></div>
        <div className="step"><span className="num">— 04</span><h4>We flex with your volume.</h4><p>Scale up in days. Scale back without cost. Operations becomes a variable cost, not fixed.</p></div>
      </div>
    </div>
  </section>
  {/* AI + HUMAN */}
  <section className="block dark">
    <div className="container">
      <div className="aihum fade-in">
        <div>
          <div className="eyebrow">AI + human at scale</div>
          <h2 className="display" style={{marginTop: 20}}>AI compresses the volume. <em>Humans handle the exceptions.</em></h2>
          <p>At MSO and aggregator scale, AI matters more — not less. We use AI-assisted workflows for claim scrubbing, eligibility batching, denial categorization, and document classification. Throughput per processor goes up 2-4x on routine work.</p>
          <p>The exceptions — denied claims needing root-cause analysis, payer escalations, complex appeals, edge-case eligibility — get a trained human every time. Because automated decisions on exceptions are how aggregators lose clients.</p>
          <p style={{color: 'var(--paper)', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: 20, marginTop: 24}}>The ratio matters. AI does the volume work. Human time is preserved for the work that decides whether your client renews.</p>
        </div>
        <div className="metrics-grid">
          <div className="metric-card"><div className="v">2-4<span className="unit">x</span></div><div className="k">Throughput per processor on routine work via AI</div></div>
          <div className="metric-card"><div className="v">98<span className="unit">%</span></div><div className="k">SLA compliance across processing categories</div></div>
          <div className="metric-card"><div className="v">7-14<span className="unit">d</span></div><div className="k">Capacity scaling for new client launches</div></div>
          <div className="metric-card"><div className="v">95<span className="unit">%+</span></div><div className="k">Quality scores on sampled work</div></div>
        </div>
      </div>
    </div>
  </section>
  {/* RESULTS */}
  <section className="block" id="results">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">By the numbers</div>
        <h2 className="display">What scaling with us <em>looks like.</em></h2>
      </div>
      <div className="results-row-three fade-in">
        <div className="result-block"><div className="v">40-60<span className="unit">%</span></div><div className="d">Lower operational cost per claim versus equivalent in-house operations.</div></div>
        <div className="result-block"><div className="v">-28<span className="unit">%</span></div><div className="d">AHT reduction via AI-assisted workflows on routine processing.</div></div>
        <div className="result-block"><div className="v">14<span className="unit">d</span></div><div className="d">Average time to scale capacity for a new client launch.</div></div>
      </div>
    </div>
  </section>
  {/* COMPARE */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The honest comparison</div>
        <h2 className="display">Why not just build it <em>in-house?</em></h2>
        <p>You can. Here's what it looks like.</p>
      </div>
      <div className="compare fade-in">
        <div className="compare-row-old head"><div className="col left">Build in-house</div><div className="col right">Embed HBS</div></div>
        <div className="compare-row-old"><div className="col left">6–12 months to stand up</div><div className="col right">14–30 days to live</div></div>
        <div className="compare-row-old"><div className="col left">Fixed cost: salaries, real estate, infrastructure</div><div className="col right">Variable cost — scales with volume</div></div>
        <div className="compare-row-old"><div className="col left">Hiring risk, training cost, attrition risk</div><div className="col right">We absorb those</div></div>
        <div className="compare-row-old"><div className="col left">Capped at your local labor market</div><div className="col right">Global trained healthcare specialist pool</div></div>
        <div className="compare-row-old"><div className="col left">You manage the operation</div><div className="col right">You manage the relationship. We manage execution.</div></div>
        <div className="compare-row-old"><div className="col left">New client launch waits for hiring</div><div className="col right">New client launch starts day one</div></div>
      </div>
      <div className="insight fade-in">The question isn't whether to build operations — it's <em>which part to own vs which part to lease.</em> Most leadership we work with chooses to own client relationships and strategy. They lease the throughput layer. That's the math that wins.</div>
    </div>
  </section>
  {/* CTA */}
  <section className="final-cta" id="cta">
    <div className="final-cta-glow" />
    <div className="cta-inner">
      <div className="eyebrow" style={{justifyContent: 'center', color: 'rgba(250,247,242,.55)'}}>Let's plan capacity</div>
      <h2 className="display">Tell us the volume. <em>We'll show you the model.</em></h2>
      <p>Current volume, projected growth, top three bottlenecks. We'll come back with a capacity model and integration plan — typically within 7 business days.</p>
      <div className="actions">
        <a href="/contact" className="btn btn-light">Book a capacity-planning call <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M5 12h14M13 5l7 7-7 7" /></svg></a>
        <a href="/contact" className="btn btn-ghost" style={{color: 'var(--paper)', borderColor: 'rgba(250,247,242,.3)'}}>Request a scalability assessment</a>
      </div>
      <div className="trust-line">Mutual NDA · BAA on every engagement · SOC 2 aligned</div>
    </div>
  </section>
</div>




  );
}
