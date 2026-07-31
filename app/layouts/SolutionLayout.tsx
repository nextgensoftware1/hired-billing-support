
import { SolutionData } from '@/app/data/solutionTypes';
import { getHeroComponent } from '@/app/utils/getHeroComponent';

interface SolutionLayoutProps {
  solution: SolutionData;
  slug: string;
}

export default function SolutionLayout({ solution, slug }: SolutionLayoutProps) {
  const HeroComponent = getHeroComponent(slug);

  return (
    <>
      <HeroComponent solution={solution} />

      {/* PAIN — MONOLOGUE */}
      {solution.sections?.pain && (
        <section className="block" id="pain">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.pain.eyebrow || "The problem"}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.pain.title }} />
            </div>
            <div className="monologue fade-in">
              {solution.sections.pain.monologue.map((paragraph, index) => (
                <p key={index} className={paragraph.startsWith('"') ? "highlight" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BEHIND THE SCENES - Two Column Pain Ledger */}
     {solution.sections?.pain && (
  <section className="block block--warm" id="pain-details">
    <div className="container">
      <div className="block-head fade-in">
      <div className="eyebrow">
           {solution.sections.pain.ledgerEyebrow || "The underlying issues"}
         </div>
         <h2 className="display"
          dangerouslySetInnerHTML={{
             __html: solution.sections.pain.ledgerHeading || 
                    "Why this problem <em>keeps repeating.</em>"
          }}
          
         />
         
       </div>
             <div className="pain-ledger fade-in">
               {solution.sections.pain.ledger.map((item) => (
                 <div className="pain-item" key={item.num}>
                   <div className="pain-num">{item.num}</div>
                   <div>
                     <h4>{item.title}</h4>
                     <p>{item.description}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
      )}

      {/* RCM LIFECYCLE TIMELINE */}
      {solution.sections?.lifecycle && (
        <section className="block ">
          <div className="container">
            <div className="eyebrow fade-in" style={{ marginBottom: 24 }}>{solution.sections.lifecycle.eyebrow}</div>
            <div className="rcm-timeline fade-in">
              {solution.sections.lifecycle.items.map((item) => (
                <div className="rcm-node" key={item.num}>
                  <div className={`rcm-dot ${item.dotClass}`}>{item.num}</div>
                  <div className="rcm-node-label">{item.label}</div>
                  <div className="rcm-node-sub">{item.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SOLUTION */}
      {solution.sections?.solution && (
        <section className="block block--ink" id="solution">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.solution.eyebrow}</div>
              <h2 className="display display--light" dangerouslySetInnerHTML={{ __html: solution.sections.solution.title }} />
              <p>{solution.sections.solution.description}</p>
            </div>
            <div className="two-col fade-in">
              <div className="process-list">
                {solution.sections.solution.process.slice(0, 3).map((item) => (
                  <div className="process-item" key={item.num}>
                    <div className="process-num">{item.num}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="process-list">
                {solution.sections.solution.process.slice(3).map((item) => (
                  <div className="process-item" key={item.num}>
                    <div className="process-num">{item.num}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SERVICES */}
      {solution.sections?.services && (
        <section className="block" id="services">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.services.eyebrow}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.services.title }} />
              <p>{solution.sections.services.description}</p>
            </div>
            <div className="services-grid fade-in">
              {solution.sections.services.items.map((item) => (
                <div className="service-item" key={item.num}>
                  <span className="service-num">{item.num}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WORKFLOW DASHBOARD */}
      {solution.sections?.workflow && (
        <section className="block ">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.workflow.eyebrow}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.workflow.title }} />
              <p>{solution.sections.workflow.description}</p>
            </div>
            <div className="workflow-dashboard fade-in">
              {solution.sections.workflow.items.map((item, index) => (
                <div className="wf-node" key={index}>
                  <div className="wf-dot wf-dot--signal">{item.num}</div>
                  <div className="wf-node-label">{item.label}</div>
                  <div className="wf-node-sub">{item.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRIORITIZATION */}
      {solution.sections?.prioritization && (
        <section className="block block--warm">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.prioritization.eyebrow}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.prioritization.title }} />
              <p>{solution.sections.prioritization.description}</p>
            </div>
            <div className="pain-ledger fade-in">
              {solution.sections.prioritization.categories.map((item) => (
                <div className="pain-item" key={item.num}>
                  <div className="pain-num">{item.num}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HOW WE WORK */}
      {solution.sections?.howWeWork && (
        <section className="block block--warm">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.howWeWork.eyebrow}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.howWeWork.title }} />
              <p>{solution.sections.howWeWork.description}</p>
            </div>
            <div className="process-list fade-in" style={{ maxWidth: 780 }}>
              {solution.sections.howWeWork.process.map((item) => (
                <div className="process-item" key={item.num}>
                  <div className="process-num">{item.num}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI + HUMAN */}
      {solution.sections?.aiHuman && (
        <section className="block">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.aiHuman.eyebrow}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.aiHuman.title }} />
              <p>{solution.sections.aiHuman.description}</p>
            </div>
            <div className="ai-split fade-in">
              <div className="ai-col ai-col--machine">
                <div className="ai-col-label">{solution.sections.aiHuman.machineLabel || 'AI-assisted RCM workflows'}</div>
                <div className="ai-items">
                  {solution.sections.aiHuman.machine.map((item, index) => (
                    <div className="ai-item" key={index}>
                      <div className="ai-item-dot"></div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ai-col ai-col--human">
                <div className="ai-col-label">{solution.sections.aiHuman.humanLabel || 'Human RCM specialists'}</div>
                <div className="ai-items">
                  {solution.sections.aiHuman.human.map((item, index) => (
                    <div className="ai-item" key={index}>
                      <div className="ai-item-dot"></div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {solution.sections.aiHuman.pullQuote && (
              <div className="pull-quote fade-in">
                {solution.sections.aiHuman.pullQuote}
              </div>
            )}
          </div>
        </section>
      )}

      {/* RESULTS */}
      {solution.sections?.results && (
        <section className="block block--warm" id="results">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.results.eyebrow}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.results.title }} />
              <p>{solution.sections.results.description}</p>
            </div>
            <div className="outcomes-grid fade-in">
              {solution.sections.results.outcomes.map((item, index) => (
                <div className="outcome-card" key={index}>
                  <div className="outcome-num">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMPARE */}
    {solution.sections?.compare && (
  <section className="block block--ink-soft">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">
          {solution.sections.compare.eyebrow}
        </div>

        <h2
          className="display display--light"
          dangerouslySetInnerHTML={{
            __html: solution.sections.compare.title
          }}
        />

        <p>{solution.sections.compare.description}</p>
      </div>

      <div className="solution-compare-wrap fade-in">
        <div className="solution-compare-header">
          <span> Time Since Service</span>
          <span className="solution-compare-hbs-col">
            Hired Billing Support
          </span>
          <span>In-House Hire</span>
        </div>

        {solution.sections.compare.rows.map((row, index) => (
          <div className="solution-compare-row" key={index}>
            <span className="solution-compare-label">
              {row.label}
            </span>

            <span className="solution-compare-hbs">
              {row.hbs}
            </span>

            <span className="solution-compare-other">
              {row.other}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)}

      {/* WHO THIS IS FOR */}
      {solution.sections?.targetAudience && (
        <section className="block">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.targetAudience.eyebrow}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.targetAudience.title }} />
              <p>{solution.sections.targetAudience.description}</p>
            </div>
            <div className="who-grid fade-in">
              {solution.sections.targetAudience.practiceTypes.map((item, index) => (
                <div className="who-item" key={index}>
                  <span className="who-tag">Practice type</span>
                  <h4>{item.type}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      {solution.sections?.finalCta && (
        <section className="final-cta" id="cta">
          <div className="final-cta-glow"></div>
          <div className="cta-inner">
            <div className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              {solution.sections.finalCta.eyebrow}
            </div>
            <h2 className="display display--light" dangerouslySetInnerHTML={{ __html: solution.sections.finalCta.title }} />
            <p>{solution.sections.finalCta.description}</p>
            <div className="actions">
              {solution.sections.finalCta.buttons.map((btn, index) => (
                <a
                  key={index}
                  href="/contact"
                  className={`btn btn-${btn.variant} btn-lg`}
                  style={btn.variant === 'ghost' ? { color: 'var(--paper)', borderColor: 'rgba(250,247,242,.25)' } : {}}
                >
                  {btn.text}
                  {btn.variant === 'light' && (
                    <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
            <div className="trust-line">{solution.sections.finalCta.trustLine}</div>
          </div>
        </section>
      )}
    </>
  );
}