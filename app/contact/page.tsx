'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: '',
    companyName: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [honeypot, setHoneypot] = useState('');
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const [attribution, setAttribution] = useState<Record<string, string>>({});

  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((entry) => entry.startsWith('hbs_attribution='));
    if (!cookie) return;
    try {
      setAttribution(JSON.parse(decodeURIComponent(cookie.slice('hbs_attribution='.length))));
    } catch {
      setAttribution({});
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    firstErrorRef.current = null;
    const nextErrors: Record<string, string> = {};
    if (!formData.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email address is required.';
    if (!formData.message.trim()) nextErrors.message = 'Please tell us how we can help.';
    if (Object.keys(nextErrors).length) {
      setFieldErrors(nextErrors);
      setError('Please correct the highlighted fields.');
      window.requestAnimationFrame(() => firstErrorRef.current?.focus());
      return;
    }
    setLoading(true);
    setError('');
    setFieldErrors({});

    try {
      const submissionId =
        sessionStorage.getItem('hbs_contact_submission') || crypto.randomUUID();
      sessionStorage.setItem('hbs_contact_submission', submissionId);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          website: honeypot,
          submissionId,
          ...attribution,
          landing_page: attribution.landing_page || `${window.location.pathname}${window.location.search}`,
          referrer: attribution.referrer || document.referrer || '',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || 'Unable to send your message.');
      }

      setFormData({ name: '', email: '', phone: '', practiceName: '', companyName: '', message: '' });
      setSubmitted(true);
      try {
        const fired = sessionStorage.getItem(`hbs_lead_fired_${submissionId}`);
        if (!fired) {
          (window as typeof window & { dataLayer?: unknown[] }).dataLayer?.push({
            event: 'generate_lead',
            form_id: 'contact',
            page_path: window.location.pathname,
          });
          sessionStorage.setItem(`hbs_lead_fired_${submissionId}`, 'true');
        }
      } catch {
        // Form submission and lead capture remain functional without analytics.
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send your message.');
    } finally {
      setLoading(false);
    }
  };

  const isValid = formData.name && formData.email && formData.message;

  return (
    <>
      <style jsx>{`
        /* =========================================
           DESIGN TOKENS (EXACT MATCH TO YOUR SYSTEM)
           ========================================= */
        :root {
          --ink: #0A1628;
          --ink-soft: #1B2942;
          --ink-mute: #475569;
          --paper: #FAF7F2;
          --paper-warm: #F2EDE3;
          --paper-line: #E8E2D5;
          --white: #FFFFFF;
          --signal: #00C896;
          --signal-deep: #00876B;
          --accent: #D4A574;
          --danger: #D64545;
          --radius: 4px;
          --radius-lg: 12px;
          --max: 1280px;
          --gutter: clamp(20px, 4vw, 48px);
          --serif: var(--font-fraunces);
          --sans: var(--font-inter-tight);
          --mono: var(--font-jetbrains-mono);
          --ease: cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* =========================================
           RESET + BASE
           ========================================= */
        .contact-page {
          font-family: var(--sans);
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
        }

        /* =========================================
           ANIMATIONS (MATCH YOUR SCROLL REVEALS)
           ========================================= */
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { opacity: 0; transform: translateY(20px); }
        .reveal-1 { animation: reveal 0.9s var(--ease) 0.05s forwards; }
        .reveal-2 { animation: reveal 0.9s var(--ease) 0.15s forwards; }
        .reveal-3 { animation: reveal 0.9s var(--ease) 0.3s forwards; }
        .reveal-4 { animation: reveal 0.9s var(--ease) 0.45s forwards; }
        .reveal-5 { animation: reveal 0.9s var(--ease) 0.6s forwards; }

        /* =========================================
           HERO (MATCH YOUR DARK HERO STYLE)
           ========================================= */
        .contact-hero {
          position: relative;
          overflow: hidden;
          background: var(--ink);
          color: var(--paper);
          padding: 100px var(--gutter) 80px;
          text-align: center;
          margin-top: 60px;
        }
        .contact-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .contact-hero-bg svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .contact-hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.35;
        }
        .contact-hero-inner {
          position: relative;
          z-index: 2;
          max-width: var(--max);
          margin: 0 auto;
        }

        /* Eyebrow (MATCH YOUR .eyebrow CLASS) */
        .eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--ink-mute);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow::before {
          content: '';
          width: 24px;
          height: 1px;
          background: currentColor;
        }
        .eyebrow-light { color: rgba(250, 247, 242, 0.82); }

        /* Display Heading (MATCH YOUR .display CLASS) */
        .display {
          font-family: var(--serif);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 0.98;
          font-variation-settings: "opsz" 144;
          font-size: clamp(48px, 7.5vw, 96px);
        }
        .display-light { color: var(--paper); }
        .display-light em { color: var(--signal); }
        .display em {
          font-style: italic;
          font-weight: 300;
        }

        /* Subtext */
        .sub {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 540px;
          margin: 28px auto 40px;
        }
        .sub-light { color: rgba(250, 247, 242, 0.75); }

        /* Hero Actions */
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* =========================================
           BUTTONS (EXACT MATCH TO YOUR .btn SYSTEM)
           ========================================= */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: var(--radius);
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.25s var(--ease);
          white-space: nowrap;
        }
        .btn-primary {
          background: var(--ink);
          color: var(--paper);
        }
        .btn-primary:hover {
          background: var(--ink-soft);
          transform: translateY(-1px);
          box-shadow: 0 12px 28px -12px rgba(10, 22, 40, 0.4);
        }
        .btn-primary .arrow { transition: transform 0.25s var(--ease); }
        .btn-primary:hover .arrow { transform: translateX(3px); }

        .btn-ghost {
          background: transparent;
          color: var(--paper);
          border: 1px solid var(--paper);
        }
        .btn-ghost:hover {
          background: var(--paper);
          color: var(--ink);
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .btn-lg { font-size: 15px; padding: 14px 26px; }

        /* =========================================
           BODY LAYOUT
           ========================================= */
        .contact-body {
          max-width: var(--max);
          margin: 0 auto;
          padding: 80px var(--gutter);
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-body {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* =========================================
           LIGHT CARD (MATCH YOUR .service-cell STYLE)
           ========================================= */
        .light-card {
          background: var(--white);
          border: 1px solid var(--paper-line);
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: 0 4px 20px rgba(10, 22, 40, 0.05);
        }
        @media (max-width: 600px) {
          .light-card { padding: 24px; }
        }

        /* Card Labels */
        .card-mono-label {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--ink-mute);
          margin-bottom: 16px;
        }
        .card-title {
          font-family: var(--serif);
          font-size: 28px;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .card-sub {
          font-size: 15px;
          line-height: 1.55;
          color: var(--ink-mute);
          margin-bottom: 28px;
        }

        /* =========================================
           FORM STYLES
           ========================================= */
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 600px) {
          .form-grid-2 { grid-template-columns: 1fr; }
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-soft);
          margin-bottom: 8px;
          display: block;
        }
        .form-group label em {
          color: var(--danger);
          font-style: normal;
        }
        .form-group input,
        .form-group textarea {
          font-family: var(--sans);
          font-size: 14px;
          color: var(--ink);
          background: var(--paper);
          border: 1px solid var(--paper-line);
          border-radius: var(--radius);
          padding: 12px 14px;
          width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--ink-mute);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--ink);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(10, 22, 40, 0.05);
          outline: none;
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
        }
        .form-note {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--ink-mute);
          letter-spacing: 0.08em;
        }
        .form-error {
          color: var(--danger);
          font-size: 13px;
          margin-top: 8px;
        }

        /* Spinner */
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(250, 247, 242, 0.3);
          border-top-color: var(--paper);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* =========================================
           SUCCESS STATE
           ========================================= */
        .success-state {
          text-align: center;
          padding: 40px 16px;
        }
        .success-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(0, 200, 150, 0.1);
          border: 1px solid rgba(0, 200, 150, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .success-state h3 {
          font-family: var(--serif);
          font-size: 28px;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .success-state p {
          font-size: 15px;
          color: var(--ink-mute);
          line-height: 1.6;
          max-width: 320px;
          margin: 0 auto;
        }

        /* =========================================
           INFO SIDE (MATCH YOUR .service-cell STYLE)
           ========================================= */
        .info-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid var(--paper-line);
        }
        .info-row:last-child { border-bottom: none; padding-bottom: 0; }
        .info-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius);
          background: rgba(0, 200, 150, 0.08);
          border: 1px solid rgba(0, 200, 150, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-icon svg { color: var(--signal); }
        .info-text strong {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-mute);
          margin-bottom: 4px;
          display: block;
        }
        .info-text span,
        .info-text a,
        .info-text address {
          font-size: 14px;
          color: var(--ink);
          line-height: 1.55;
          text-decoration: none;
        }
        .info-text address {
          display: block;
          font-style: normal;
        }
        .info-text a:hover { color: var(--signal); }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--paper-line);
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-family: var(--serif);
          font-size: 24px;
          font-weight: 400;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-family: var(--mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ink-mute);
        }

        /* Alert Callout */
        .alert-callout {
          background: rgba(0, 200, 150, 0.05);
          border: 1px solid rgba(0, 200, 150, 0.2);
          border-radius: var(--radius);
          padding: 14px 16px;
          margin-top: 16px;
        }
        .alert-callout-label {
          font-family: var(--mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--signal);
          margin-bottom: 6px;
          font-weight: 600;
        }
        .alert-callout-text {
          font-size: 13px;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        /* Hours */
        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid var(--paper-line);
          font-size: 13px;
        }
        .hours-row:last-child { border-bottom: none; padding-bottom: 0; }
        .hours-row .day { color: var(--ink-mute); }
        .hours-row .time { font-weight: 500; color: var(--ink); }
        .hours-row .time.closed { color: var(--danger); }

        /* =========================================
           MAP SECTION
           ========================================= */
        .map-section {
          background: var(--paper);
          border-top: 1px solid var(--paper-line);
          padding: 80px var(--gutter);
        }
        .map-inner {
          max-width: var(--max);
          margin: 0 auto;
        }
        .map-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .map-header h2 {
          font-family: var(--serif);
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-top: 12px;
        }
        .map-address {
          margin: 14px 0 0;
          color: var(--ink-mute);
          font-size: 15px;
          line-height: 1.6;
        }
        .map-frame {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--paper-line);
          box-shadow: 0 20px 40px -20px rgba(10, 22, 40, 0.1);
          height: 400px;
        }
        .map-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* Section Divider */
        .section-divider {
          height: 1px;
          background: var(--paper-line);
          margin: 0;
        }

        /* =========================================
           TRUST STRIP
           ========================================= */
        .trust-strip {
          background: var(--white);
          border-top: 1px solid var(--paper-line);
          padding: 32px var(--gutter);
        }
        .trust-strip-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-mute);
        }
        .trust-item svg { color: var(--signal); }
      `}</style>

      <div className="contact-page">
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-hero-bg">
            <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--ink)" strokeWidth="0.5" opacity="0.08" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="contact-hero-grain" />
          </div>
          <div className="contact-hero-inner">
            <span className="eyebrow eyebrow-light reveal reveal-1">— Contact Us</span>
            <h1 className="display display-light reveal reveal-2">
              Let's Talk About Your <em>Billing Needs</em>
            </h1>
            <p className="sub sub-light reveal reveal-3">
              Whether you're a solo practice or a large medical group, our billing specialists respond within 1 business day.
            </p>
            <div className="hero-actions reveal reveal-4">
              <a href="#contact-form" className="btn btn-primary btn-lg">
                Send a Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <span className="btn btn-ghost btn-lg">
                Business Inquiries
              </span>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* BODY */}
        <div className="contact-body" id="contact-form">
          {/* FORM CARD */}
          <div className="light-card reveal reveal-2">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Message Received</h3>
                <p>Thanks — we received your request and will reply within 1 business day.</p>
              </div>
            ) : (
              <>
                <div className="card-mono-label">— Free Consultation Request</div>
                <h2 className="card-title">Get in Touch</h2>
                <p className="card-sub">Fill out the form and we'll get back to you within 1 business day.</p>

                <form onSubmit={handleSubmit} noValidate>
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-10000px' }}
                  />
                    {[
                      'gclid',
                      'gbraid',
                      'wbraid',
                      'utm_source',
                      'utm_medium',
                      'utm_campaign',
                      'utm_term',
                      'utm_content',
                      'landing_page',
                      'referrer',
                    ].map((key) => (
                      <input
                        key={key}
                        type="hidden"
                        name={key}
                        value={
                          key === 'landing_page'
                            ? (attribution[key] || `${typeof window !== 'undefined' ? window.location.pathname : ''}`)
                            : (attribution[key] || '')
                        }
                      />
                    ))}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name<em>*</em></label>
                    <input ref={(node) => { if (!firstErrorRef.current && fieldErrors.name) firstErrorRef.current = node; }} id="contact-name" type="text" name="name" placeholder="e.g. HBS" value={formData.name} onChange={handleChange} aria-invalid={Boolean(fieldErrors.name)} aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined} required />
                    {fieldErrors.name ? <span id="contact-name-error" className="form-error">{fieldErrors.name}</span> : null}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address<em>*</em></label>
                    <input ref={(node) => { if (!firstErrorRef.current && fieldErrors.email) firstErrorRef.current = node; }} id="contact-email" type="email" name="email" placeholder="e.g. hello@hiredbillingsupport.com" value={formData.email} onChange={handleChange} aria-invalid={Boolean(fieldErrors.email)} aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined} required />
                    {fieldErrors.email ? <span id="contact-email-error" className="form-error">{fieldErrors.email}</span> : null}
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input id="contact-phone" type="tel" name="phone" placeholder="e.g. +1 (607) 260-1528" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-practice">I'm Interested In</label>
                    <input id="contact-practice" type="text" name="practiceName" placeholder="e.g. Medicine/Dental/Enterprise/MSO" value={formData.practiceName} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" name="companyName" placeholder="e.g. Hire Billing Support" value={formData.companyName} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">How can we help?<em>*</em></label>
                  <textarea
                    ref={(node) => { if (!firstErrorRef.current && fieldErrors.message) firstErrorRef.current = node; }}
                    id="contact-message"
                    name="message"
                    placeholder=" Type your message here"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                    required
                  />
                  {fieldErrors.message ? <span id="contact-message-error" className="form-error">{fieldErrors.message}</span> : null}
                </div>

                  <p className="form-note">
                    For business inquiries only. Please don't include patient names, claim numbers or medical records.
                    {' '}<Link href="/privacy-policy">Privacy policy</Link>
                  </p>
                  <div className="form-actions">
                    <button className="btn btn-primary btn-lg" type="submit" disabled={loading || !isValid}>
                      {loading ? (
                        <>
                          <div className="spinner" /> Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                  {error ? <div className="form-error">{error}</div> : null}
                </form>
              </>
            )}
          </div>

          {/* INFO SIDE */}
          <div className="info-stack">
            <div className="light-card reveal reveal-3">
              <div className="card-mono-label">— Contact Information</div>

              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="info-text">
                  <strong>Phone</strong>
                  <a href="tel:+16072601528">+1 (607) 260-1528</a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="info-text">
                  <strong>Email</strong>
                  <a href="mailto:hello@hiredbillingsupport.com">hello@hiredbillingsupport.com</a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-text">
                  <strong>Mailing Address</strong>
                  <address>30 Bridge Road, Nanuet, NY 10954, United States</address>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-num" style={{ color: 'var(--accent)' }}>1</div>
                  <div className="stat-label">Business day response</div>
                </div>
              </div>
            </div>

            <div className="light-card reveal reveal-4">
              <div className="card-mono-label">— Business Hours</div>
              <div className="hours-row">
                <span className="day">Monday – Friday</span>
                <span className="time">9:00 AM – 5:00 PM EST</span>
              </div>
              <div className="hours-row">
                <span className="day">Saturday</span>
                <span className="time closed">Closed</span>
              </div>
              <div className="hours-row">
                <span className="day">Sunday</span>
                <span className="time closed">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* MAP */}
        <section className="map-section" id="map-section" style={{ display: 'none' }} aria-hidden="true">
          <div className="map-inner">
            <div className="map-header reveal reveal-2">
              <span className="eyebrow eyebrow-dark">— Our Location</span>
              <h2>Find Us on the Map</h2>
              <p className="map-address">30 Bridge Road, Nanuet, NY 10954, United States</p>
            </div>
            <div className="map-frame reveal reveal-3">
              <iframe
                src="https://www.google.com/maps?q=30%20Bridge%20Road%2C%20Nanuet%2C%20NY%2010954%2C%20United%20States&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="trust-strip">
          <div className="trust-strip-inner">
            {[
              { label: 'HIPAA Compliant', path: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> },
              { label: '1 Business Day Response', path: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
              { label: 'Free Consultation', path: <polyline points="20 6 9 17 4 12" /> },
            ].map((t, i) => (
              <div className="trust-item" key={i}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {t.path}
                </svg>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}