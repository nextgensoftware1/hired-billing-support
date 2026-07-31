'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);

    // TOC active state tracking
    const tocLinks = document.querySelectorAll('.policy-toc-list a');
    const sections = document.querySelectorAll('.policy-section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tocLinks.forEach((l) => l.classList.remove('active'));
            const active = document.querySelector(`.policy-toc-list a[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* ===== GLOBAL CSS ===== */}
      <style jsx global>{`
        /* ================================================================
           HBS STANDARD PAGES — SHARED STYLESHEET
           Design system: Fraunces · Inter Tight · JetBrains Mono
           ================================================================ */

        :root {
          --ink:#0A1628; --ink-soft:#1B2942; --ink-mute:#475569;
          --paper:#FAF7F2; --paper-warm:#F2EDE3; --paper-line:#E8E2D5;
          --white:#FFFFFF;
          --signal:#00C896; --signal-deep:#00876B; --signal-pale:rgba(0,200,150,.08);
          --amber:#F59E0B; --amber-deep:#B45309;
          --danger:#D64545;
          --radius:4px; --radius-lg:12px;
          --max:1280px; --gutter:clamp(20px,4vw,48px);
          --serif:'Fraunces','Times New Roman',serif;
          --sans:'Inter Tight',-apple-system,sans-serif;
          --mono:'JetBrains Mono',monospace;
          --ease:cubic-bezier(.22,1,.36,1);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
        body { font-family: var(--sans); background: var(--paper); color: var(--ink); line-height: 1.5; font-size: 16px; overflow-x: hidden; }
        ::selection { background: var(--ink); color: var(--paper); }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; display: block; }

        /* Layout */
        .container { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }

        /* Typography */
        .eyebrow { font-family: var(--mono); font-size: 11px; text-transform: uppercase; letter-spacing: .18em; color: var(--ink-mute); display: inline-flex; align-items: center; gap: 10px; }
        .eyebrow::before { content: ''; width: 24px; height: 1px; background: currentColor; }
        .eyebrow--light { color: rgba(250,247,242,.5); }
        .eyebrow--light::before { background: rgba(250,247,242,.4); }

    

      

        /* Policy Hero */
        .policy-hero { background: var(--ink); padding: 120px 0 72px; margin-top: 40px; }
        .policy-hero-title { font-family: var(--serif); font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 400; letter-spacing: -.025em; color: var(--paper); margin-bottom: 16px; font-variation-settings: "opsz" 144; line-height: 1.06; }
        .policy-hero-sub { font-size: 15px; color: rgba(250,247,242,.55); margin-top: 10px; }
        .policy-date { font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: rgba(250,247,242,.35); margin-top: 16px; }

        /* Policy Layout */
        .policy-layout { max-width: var(--max); margin: 0 auto; padding: 80px var(--gutter); display: grid; grid-template-columns: 260px 1fr; gap: 64px; align-items: start; background: var(--paper); }
        .policy-toc { position: sticky; top: 100px; }
        .policy-toc-title { font-family: var(--mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--paper-line); }
        .policy-toc-list { list-style: none; display: flex; flex-direction: column; gap: 4px; }
        .policy-toc-list a { font-size: 13px; color: var(--ink-mute); padding: 5px 10px; border-radius: var(--radius); display: block; transition: all .2s; border-left: 2px solid transparent; }
        .policy-toc-list a:hover { color: var(--signal-deep); border-left-color: var(--signal); }
        .policy-toc-list a.active { color: var(--signal-deep); border-left-color: var(--signal); font-weight: 600; }
        .policy-content { min-width: 0; }
        .policy-section { margin-bottom: 64px; }
        .policy-section:last-child { margin-bottom: 0; }
        .policy-heading { font-family: var(--serif); font-size: 1.7rem; font-weight: 400; color: var(--ink); margin-bottom: 18px; padding-top: 24px; font-variation-settings: "opsz" 72; line-height: 1.15; }
        .policy-subheading { font-size: 15px; font-weight: 600; color: var(--ink); margin: 20px 0 8px; }
        .policy-text { font-size: 15px; line-height: 1.85; color: var(--ink-soft); margin-bottom: 14px; }
        .policy-text:last-child { margin-bottom: 0; }
        .policy-list { margin: 10px 0 14px 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 7px; }
        .policy-list li { font-size: 14px; color: var(--ink-soft); padding-left: 18px; position: relative; line-height: 1.7; }
        .policy-list li::before { content: ''; position: absolute; left: 0; top: 8px; width: 5px; height: 5px; border-radius: 50%; background: var(--signal); }
        .policy-divider { height: 1px; background: var(--paper-line); margin: 40px 0; }

        /* Policy Notice */
        .policy-legal-note { background: rgba(245,158,11,.08); border: 1px solid rgba(245,158,11,.2); border-radius: var(--radius); padding: 20px 24px; margin-top: 48px; }
        .policy-legal-note p { font-size: 13px; color: var(--amber-deep); line-height: 1.7; }
        .policy-notice { background: var(--signal-pale); border: 1px solid rgba(0,200,150,.2); border-radius: var(--radius-lg); padding: 24px 28px; margin: 24px 0; }
        .policy-notice-label { font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--signal-deep); margin-bottom: 10px; }
        .policy-notice p { font-size: 14px; color: var(--ink-soft); line-height: 1.75; }

        /* Contact Card */}
        .policy-contact-card { background: var(--ink); border-radius: var(--radius-lg); padding: 32px; margin-top: 48px; }
        .policy-contact-label { font-family: var(--mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: rgba(250,247,242,.4); margin-bottom: 12px; }
        .policy-contact-card h4 { font-family: var(--serif); font-size: 1.2rem; color: var(--paper); margin-bottom: 12px; font-weight: 400; }
        .policy-contact-card p, .policy-contact-card a { font-size: 14px; color: rgba(250,247,242,.6); line-height: 1.7; }
        .policy-contact-card a { color: var(--signal); font-weight: 500; }

        /* Footer */
        footer { background: var(--ink); color: rgba(250,247,242,.6); padding: 40px 0 28px; border-top: 1px solid rgba(255,255,255,.06); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; font-size: 13px; }
        .footer-inner a { color: rgba(250,247,242,.6); }
        .footer-inner a:hover { color: var(--signal); }
        .footer-legal { display: flex; gap: 24px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .policy-layout { grid-template-columns: 1fr; }
          .policy-toc { position: relative; top: 0; background: var(--paper-warm); border-radius: var(--radius-lg); padding: 20px; }
        }
        @media (max-width: 720px) {
          .nav-links { display: none; }
          .policy-layout { padding: 48px var(--gutter); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

    

      {/* ===== HERO SECTION ===== */}
      <section className="policy-hero">
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '.16em',
              color: 'var(--signal-deep)',
              background: 'rgba(0,200,150,.08)',
              border: '1px solid rgba(0,200,150,.2)',
              padding: '6px 14px',
              borderRadius: '100px',
              marginBottom: '20px'
            }}>
              Legal · Privacy Policy
            </div>
            <h1 className="policy-hero-title">Privacy Policy</h1>
            <p className="policy-hero-sub">Hired Billing Support — hiredbillingsupport.com</p>
            <p className="policy-date">Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: [Insert Date]</p>
          </div>
        </div>
      </section>

      {/* ===== MAIN LAYOUT (TOC + CONTENT) ===== */}
      <div className="policy-layout">
        {/* TABLE OF CONTENTS */}
        <aside className="policy-toc">
          <div className="policy-toc-title">Contents</div>
          <ul className="policy-toc-list">
            <li><Link href="#introduction">1. Introduction</Link></li>
            <li><Link href="#information-we-collect">2. Information We Collect</Link></li>
            <li><Link href="#how-we-use">3. How We Use Information</Link></li>
            <li><Link href="#healthcare-notice">4. Healthcare Information Notice</Link></li>
            <li><Link href="#sharing">5. How We Share Information</Link></li>
            <li><Link href="#cookies">6. Cookies & Tracking</Link></li>
            <li><Link href="#security">7. Data Security</Link></li>
            <li><Link href="#retention">8. Data Retention</Link></li>
            <li><Link href="#your-choices">9. Your Choices</Link></li>
            <li><Link href="#third-party">10. Third-Party Links</Link></li>
            <li><Link href="#childrens">11. Children's Privacy</Link></li>
            <li><Link href="#updates">12. Policy Updates</Link></li>
        
          </ul>
        </aside>

        {/* POLICY CONTENT */}
        <main className="policy-content">
          {/* Legal Notice */}
          <div className="policy-legal-note">
            <p><strong>Important:</strong> This privacy policy is provided for informational purposes. It does not constitute legal advice. Hired Billing Support recommends that legal counsel review this policy before publication to ensure it accurately reflects the company's data practices and complies with applicable law.</p>
          </div>

          {/* SECTION 1: Introduction */}
          <div className="policy-section" id="introduction">
            <h2 className="policy-heading">1. Introduction</h2>
            <p className="policy-text">
              Hired Billing Support ("HBS," "we," "our," or "us") provides healthcare operations support services to medical practices,
              healthcare organizations, and other healthcare industry stakeholders across the United States. We operate the website
              located at <a href="https://hiredbillingsupport.com" style={{ color: 'var(--signal-deep)' }}>https://hiredbillingsupport.com</a> (the "Website").
            </p>
            <p className="policy-text">
              We respect the privacy of individuals who visit our Website or submit information to us through our inquiry forms,
              consultation requests, or other contact channels. This Privacy Policy describes how we collect, use, store, and protect
              information submitted through the Website, and the choices available to you regarding that information.
            </p>
            <p className="policy-text">By using this Website or submitting information to us, you acknowledge that you have read this Privacy Policy.</p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 2: Information We Collect */}
          <div className="policy-section" id="information-we-collect">
            <h2 className="policy-heading">2. Information We Collect</h2>
            <p className="policy-text">We may collect the following categories of information when you use our Website or contact us:</p>

            <h3 className="policy-subheading">Information You Provide Directly</h3>
            <ul className="policy-list">
              <li>Name and contact information (email address, phone number)</li>
              <li>Business or practice name</li>
              <li>Job title or professional role</li>
              <li>Service interest or inquiry category</li>
              <li>Message or inquiry details submitted through contact or consultation forms</li>
              <li>Documents or files uploaded through any file-upload features on the Website</li>
              <li>Consultation scheduling preferences or communication preferences</li>
            </ul>

            <h3 className="policy-subheading">Information Collected Automatically</h3>
            <p className="policy-text">When you visit the Website, we or our service providers may automatically collect certain technical and usage information, including:</p>
            <ul className="policy-list">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited on the Website and time spent on each page</li>
              <li>Referring website or source</li>
              <li>Actions taken on the Website (clicks, form interactions)</li>
              <li>Cookie identifiers and similar tracking data (see Section 6)</li>
            </ul>

            <h3 className="policy-subheading">Information From Business Communications</h3>
            <p className="policy-text">If you contact us by email, phone, or through the Website, we may retain records of those communications, including the content of your messages and any follow-up correspondence.</p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 3: How We Use Information */}
          <div className="policy-section" id="how-we-use">
            <h2 className="policy-heading">3. How We Use Information</h2>
            <p className="policy-text">We use the information we collect for the following purposes:</p>
            <ul className="policy-list">
              <li>Responding to inquiries, consultation requests, or service interest submissions</li>
              <li>Scheduling and conducting consultations or service conversations</li>
              <li>Providing information about HBS services, capabilities, and resources</li>
              <li>Evaluating service fit and preparing service recommendations</li>
              <li>Communicating with prospective or current clients about services, updates, and relevant information</li>
              <li>Sending service-related communications and, where applicable, marketing information (subject to your preferences)</li>
              <li>Improving our Website content, structure, and user experience</li>
              <li>Conducting internal business analytics and performance reporting</li>
              <li>Protecting against fraud, unauthorized use, or security incidents</li>
              <li>Complying with applicable legal obligations</li>
            </ul>
            <p className="policy-text">
              We use information only for the purposes described in this policy or as otherwise disclosed at the time of collection.
              We do not use personal information submitted through the Website for purposes unrelated to our services without appropriate notice or consent.
            </p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 4: Healthcare Information Notice */}
          <div className="policy-section" id="healthcare-notice">
            <h2 className="policy-heading">4. Healthcare Information Notice</h2>
            <div className="policy-notice">
              <div className="policy-notice-label">Important — Healthcare Visitors</div>
              <p>
                This Website is intended for healthcare professionals, practice administrators, billing managers, operations leaders,
                and other business users in the healthcare industry — not for patients seeking care. Patients should contact their healthcare
                provider or practice directly with questions about their health, treatment, or billing.
              </p>
            </div>
            <p className="policy-text">
              Hired Billing Support provides administrative and operational support services to healthcare organizations. In the course of those
              services, we may access or process information that relates to healthcare operations on behalf of our clients. Any such access occurs
              under appropriate written agreements and within the specific scope authorized by the client organization.
            </p>
            <p className="policy-text">
              The general contact forms and inquiry channels on this Website are not intended for the submission of patient health information or
              other protected health information as defined under the Health Insurance Portability and Accountability Act (HIPAA) or applicable state law.
              Visitors and inquirers should not submit patient-specific health information through general Website contact forms.
            </p>
            <p className="policy-text">
              Where HBS enters into a service relationship with a healthcare organization that involves access to protected health information,
              appropriate written agreements — including, where required, a Business Associate Agreement — will be established prior to the
              commencement of any such services. This policy does not constitute or replace such agreements.
            </p>
            <p className="policy-text">
              Nothing in this Privacy Policy constitutes a representation that Hired Billing Support is a covered entity under HIPAA or that
              this Website is a HIPAA-compliant platform for the submission of patient health information.
            </p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 5: How We Share Information */}
          <div className="policy-section" id="sharing">
            <h2 className="policy-heading">5. How We Share Information</h2>
            <p className="policy-text">
              Hired Billing Support does not sell, rent, or trade personal information submitted through this Website to third parties for their marketing purposes.
            </p>
            <p className="policy-text">We may share information in the following circumstances:</p>

            <h3 className="policy-subheading">Internal Team Members</h3>
            <p className="policy-text">
              Information submitted through the Website may be accessed by HBS team members responsible for responding to inquiries,
              conducting consultations, or delivering services.
            </p>

            <h3 className="policy-subheading">Service Providers</h3>
            <p className="policy-text">
              We work with third-party vendors and service providers who assist us in operating the Website and running our business,
              including web hosting providers, email communication platforms, scheduling tools, customer relationship management (CRM)
              systems, and analytics services. These providers may access information as necessary to perform services on our behalf and
              are required to handle it appropriately.
            </p>

            <h3 className="policy-subheading">Legal and Regulatory Purposes</h3>
            <p className="policy-text">
              We may disclose information if we are required to do so by applicable law, court order, or legal process, or if we believe
              disclosure is necessary to protect the rights, property, or safety of HBS, our clients, or others.
            </p>

            <h3 className="policy-subheading">Business Transfers</h3>
            <p className="policy-text">
              In the event of a merger, acquisition, sale, or transfer of all or part of our business assets, information we hold may be
              transferred as part of that transaction. We will provide notice if such a transfer affects the handling of your information.
            </p>

            <h3 className="policy-subheading">With Your Direction</h3>
            <p className="policy-text">
              With your direction or within the scope of a service relationship, we may share information with parties necessary to deliver
              the services you have requested.
            </p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 6: Cookies & Tracking */}
          <div className="policy-section" id="cookies">
            <h2 className="policy-heading">6. Cookies and Tracking Technologies</h2>
            <p className="policy-text">
              Our Website may use cookies, web beacons, and similar tracking technologies to understand how visitors use the Website,
              remember preferences, and improve the overall experience.
            </p>

            <h3 className="policy-subheading">Types of Cookies We May Use</h3>
            <ul className="policy-list">
              <li><strong>Strictly necessary cookies:</strong> Required for basic Website functionality, such as form submissions and page navigation</li>
              <li><strong>Analytics cookies:</strong> Used to collect aggregate information about how visitors use the Website, including which pages are visited most frequently (for example, Google Analytics)</li>
              <li><strong>Preference cookies:</strong> Used to remember settings or preferences that improve your experience on the Website</li>
            </ul>

            <h3 className="policy-subheading">Managing Cookies</h3>
            <p className="policy-text">
              Most web browsers allow you to control cookies through browser settings. You can typically refuse cookies, delete existing
              cookies, or receive notification before cookies are placed. Note that disabling certain cookies may affect the functionality
              of some features on this Website.
            </p>
            <p className="policy-text">We do not currently respond to browser "Do Not Track" signals, as there is no industry-standard protocol for such signals at this time.</p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 7: Data Security */}
          <div className="policy-section" id="security">
            <h2 className="policy-heading">7. Data Security</h2>
            <p className="policy-text">
              We take reasonable administrative, technical, and organizational measures to protect information submitted through this Website
              from unauthorized access, disclosure, alteration, or destruction. These measures are reviewed and updated as appropriate.
            </p>
            <p className="policy-text">
              However, no method of transmitting or storing data over the internet is completely secure. While we strive to protect
              information submitted to us, we cannot guarantee absolute security. In the event of a security incident that affects
              information you have submitted, we will take appropriate steps consistent with applicable law.
            </p>
            <p className="policy-text">
              We encourage you to be mindful of the information you share through any online platform. If you have reason to believe your
              interaction with us is no longer secure, please contact us at the information provided in Section 13.
            </p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 8: Data Retention */}
          <div className="policy-section" id="retention">
            <h2 className="policy-heading">8. Data Retention</h2>
            <p className="policy-text">
              We retain information submitted through this Website for as long as reasonably necessary for the purposes described in this
              policy, including to respond to inquiries, evaluate service fit, deliver services, comply with legal obligations, resolve
              disputes, and support our internal business operations.
            </p>
            <p className="policy-text">
              When information is no longer needed for these purposes, we take reasonable steps to securely delete or de-identify it.
              Specific retention periods may vary depending on the type of information, the nature of the relationship, and applicable
              legal requirements.
            </p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 9: Your Choices */}
          <div className="policy-section" id="your-choices">
            <h2 className="policy-heading">9. Your Choices</h2>
            <p className="policy-text">
              Subject to applicable law, you may have the following choices regarding the information we hold about you:
            </p>
            <ul className="policy-list">
              <li><strong>Access:</strong> You may request information about what personal information we hold about you.</li>
              <li><strong>Correction:</strong> If you believe information we hold about you is inaccurate or incomplete, you may request correction.</li>
              <li><strong>Deletion:</strong> In certain circumstances, you may request deletion of personal information we hold about you, subject to any legal or operational requirements that require us to retain it.</li>
              <li><strong>Opt-out of marketing communications:</strong> If you receive marketing or promotional communications from us, you may opt out at any time by following the unsubscribe instructions in those communications or by contacting us directly.</li>
              <li><strong>Cookie preferences:</strong> You may manage cookie preferences through your browser settings, as described in Section 6.</li>
            </ul>
            <p className="policy-text">
              To exercise any of these choices, please contact us using the information in Section 13. We will respond to requests
              within a reasonable timeframe and in accordance with applicable legal requirements. We may need to verify your identity
              before processing certain requests.
            </p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 10: Third-Party Links */}
          <div className="policy-section" id="third-party">
            <h2 className="policy-heading">10. Third-Party Links</h2>
            <p className="policy-text">
              This Website may contain links to third-party websites, platforms, or resources. These links are provided for convenience
              and informational purposes only. Hired Billing Support does not control the content, privacy practices, or data handling of
              third-party websites and is not responsible for their policies or practices.
            </p>
            <p className="policy-text">
              We encourage you to review the privacy policies of any third-party websites you visit through links on our Website. The
              presence of a link does not constitute an endorsement by HBS.
            </p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 11: Children's Privacy */}
          <div className="policy-section" id="childrens">
            <h2 className="policy-heading">11. Children's Privacy</h2>
            <p className="policy-text">
              This Website is intended for use by business professionals in the healthcare industry and is not directed to, and does not
              knowingly collect personal information from, children under the age of 13 (or under the applicable age of digital consent
              in applicable jurisdictions).
            </p>
            <p className="policy-text">
              If we become aware that we have inadvertently received personal information from a child, we will take reasonable steps to
              delete such information from our records promptly. If you believe we may have collected information from a child, please
              contact us using the information in Section 13.
            </p>
          </div>
          <div className="policy-divider"></div>

          {/* SECTION 12: Policy Updates */}
          <div className="policy-section" id="updates">
            <h2 className="policy-heading">12. Updates to This Policy</h2>
            <p className="policy-text">
              We may update this Privacy Policy from time to time to reflect changes in our practices, the Website, or applicable law.
              When we update this policy, we will revise the "Last Updated" date at the top of this page.
            </p>
            <p className="policy-text">
              We encourage you to review this Privacy Policy periodically to stay informed about how we handle information. Your continued
              use of the Website after any update constitutes acknowledgment of the updated policy.
            </p>
            <p className="policy-text">
              For significant changes that materially affect how we handle information you have previously submitted, we will make
              reasonable efforts to provide notice through the Website or through direct communication where appropriate.
            </p>
          </div>
          <div className="policy-divider"></div>

          
        </main>
      </div>

     
    </>
  );
}