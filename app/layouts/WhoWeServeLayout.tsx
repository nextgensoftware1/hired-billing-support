'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { SolutionData } from '@/app/data/solutionTypes';
import HeroStartupPractices from '@/app/components/heroes/HeroStartupPractices';
import HeroSmallMedicalPractices from '@/app/components/heroes/HeroSmallMedicalPractices';
import HeroMemberCentricCare from '@/app/components/heroes/HeroMemberCentricCare';
import HeroMediumLargeMedicalPractices from '@/app/components/heroes/HeroMediumLargeMedicalPractices';
import HeroEnterprisemedicaloperation from '@/app/components/heroes/HeroEnterprisemedicaloperation';
import HeroFqhc from '@/app/components/heroes/HeroFqhc';
import HeroPayers from '@/app/components/heroes/HeroPayers';
import HeroMedicalOrderTransmission from '@/app/components/heroes/HeroMedicalOrderTransmission';
import HeroMarketplacePartners from '@/app/components/heroes/HeroMarketplacePartners';
import HeroDeveloperPortal from '@/app/components/heroes/HeroDeveloperPortal';
import HeroPsychiatry from '@/app/components/heroes/HeroPsychiatry';
import HeroOrthopedic from '@/app/components/heroes/HeroOrthopedic';
import HeroCardiology from '@/app/components/heroes/HeroCardiology';
import HeroObgyn from '@/app/components/heroes/HeroObgyn';
import HeroEndocrinology from '@/app/components/heroes/HeroEndocrinology';
import HeroNeurology from '@/app/components/heroes/HeroNeurology';

interface WhoWeServeLayoutProps {
  solution: SolutionData;
  slug?: string;
}

// Map slugs to hero components
const heroComponentMap: { [key: string]: React.FC<any> } = {
  'start-ups': HeroStartupPractices,
  'small-medical-practices': HeroSmallMedicalPractices,
  'member-centric-care': HeroMemberCentricCare,
  'medium-large-medical-practices': HeroMediumLargeMedicalPractices,
  'enterprise-medical-operation': HeroEnterprisemedicaloperation,
  'fqhc': HeroFqhc,
  'payers': HeroPayers,
  'medical-order-transmission': HeroMedicalOrderTransmission,
  'hbs-marketing': HeroMarketplacePartners,
  'developer-portal': HeroDeveloperPortal,
  'psychiatry': HeroPsychiatry,
  'orthopedic': HeroOrthopedic,
  'cardiology': HeroCardiology,
  'obgyn': HeroObgyn,
  'endocrinology': HeroEndocrinology,
  'neurology': HeroNeurology,
};

const WhoWeServeLayout = ({ solution, slug }: WhoWeServeLayoutProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceOptions = useMemo(
    () => solution.sections?.services?.items?.map((item) => item.title) ?? [],
    [solution.sections]
  );

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);
  };

  const isFormValid =
    formData.name && formData.email && formData.phone && formData.service && formData.message;

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => io.observe(el));

    // Navbar scroll effect
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 8);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Animate hero dashboard items
    const elements = document.querySelectorAll('[data-animated]');
    elements.forEach((el, index) => {
      (el as HTMLElement).style.setProperty('--reveal-delay', `${index * 80}ms`);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
    };
  }, []);

  const styles = `
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
      --signal-pale: rgba(0, 200, 150, 0.08);
      --amber: #F59E0B;
      --amber-deep: #B45309;
      --amber-pale: rgba(245, 158, 11, 0.08);
      --danger: #D64545;
      --danger-pale: rgba(214, 69, 69, 0.07);
      --radius: 4px;
      --radius-lg: 12px;
      --max: 1280px;
      --gutter: clamp(20px, 4vw, 48px);
      --serif: 'Fraunces', 'Times New Roman', serif;
      --sans: 'Inter Tight', -apple-system, sans-serif;
      --mono: 'JetBrains Mono', monospace;
      --ease: cubic-bezier(0.22, 1, 0.36, 1);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--sans);
      background: var(--paper);
      color: var(--ink);
      line-height: 1.5;
      font-size: 16px;
      overflow-x: hidden;
    }

    .container {
      max-width: var(--max);
      margin: 0 auto;
      padding: 0 var(--gutter);
    }

    .eyebrow {
      font-family: var(--mono);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--ink-mute);
      display: inline-flex;
      align-items: left;
      gap: 10px;
    }

    .eyebrow::before {
      content: '';
      width: 24px;
      height: 1px;
      background: currentColor;
    }

    .eyebrow--light {
      color: rgba(250, 247, 242, 0.5);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 22px;
      border-radius: var(--radius);
      font-family: var(--sans);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background 0.2s var(--ease), color 0.2s, transform 0.15s;
      white-space: nowrap;
      text-decoration: none;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

    .btn .arrow {
      transition: transform 0.2s;
      flex-shrink: 0;
    }

    .btn:hover .arrow {
      transform: translateX(3px);
    }

    .btn-primary {
      background: var(--ink);
      color: var(--paper);
      border-color: var(--ink);
    }

    .btn-primary:hover {
      background: var(--ink-soft);
    }

    .btn-ghost {
      background: transparent;
      color: var(--ink);
      border-color: var(--paper-line);
    }

    .btn-ghost:hover {
      background: var(--paper-warm);
      border-color: var(--ink-mute);
    }

    .btn-light {
      background: var(--paper);
      color: var(--ink);
      border-color: var(--paper);
    }

    .btn-light:hover {
      background: var(--paper-warm);
    }

    .btn-lg {
      padding: 14px 28px;
      font-size: 15px;
    }

    /* Hero Section */
  

    .who-hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .who-hero-grain {
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.4;
    }

    .who-hero-inner {
      position: relative;
      z-index: 1;
      max-width: var(--max);
      margin: 0 auto;
      padding: 0 var(--gutter);
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 64px;
      align-items: center;
    }

    .who-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--mono);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--signal-deep);
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      padding: 6px 14px;
      border-radius: 100px;
      margin-bottom: 24px;
    }

    .who-hero-title {
      font-family: var(--serif);
      font-size: clamp(2.6rem, 5.5vw, 4.2rem);
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.02;
      color: var(--ink);
      margin-bottom: 24px;
      font-variation-settings: "opsz" 144;
    }

    .who-hero-title em {
      font-style: italic;
      font-weight: 300;
      color: var(--ink-mute);
    }

    .who-hero-subtitle {
      font-size: 17px;
      line-height: 1.7;
      color: var(--ink-soft);
      margin-bottom: 14px;
      max-width: 560px;
    }

    .who-hero-lede {
      font-size: 15px;
      line-height: 1.75;
      color: var(--ink-mute);
      max-width: 540px;
      margin-bottom: 40px;
    }

    .who-hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .who-hero-visual {
      animation-delay: 0.55s;
    }

    .organization-dashboard {
      background: var(--ink);
      border: 1px solid var(--paper-line);
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .dash-title {
      font-family: var(--mono);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--paper);
      margin-bottom: 20px;
    }

    .check-rows {
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-bottom: 0;
    }

    .check-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid var(--paper-line);
      opacity: 0;
      transform: translateY(12px);
      animation: reveal-row 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: var(--reveal-delay, 0ms);
    }

    .check-row:last-child {
      border-bottom: none;
    }

    .ck {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .ck-done {
      background: var(--signal);
      color: #fff;
    }

    .ck-pend {
      background: var(--amber-pale);
      border: 1px solid var(--amber);
      color: var(--amber-deep);
    }

    .ck-open {
      background: var(--paper-warm);
      border: 1px solid var(--paper-line);
      color: transparent;
    }

    .check-label {
      font-size: 11px;
      color: var(--paper);
      line-height: 1.4;
    }

    .check-label.done {
      color: var(--paper);
      text-decoration: line-through;
    }

    @keyframes reveal-row {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin: 14px 0;
    }

    .stat {
      background: var(--paper-warm);
      border-radius: 4px;
      padding: 10px 8px;
      text-align: center;
    }

    .stat-num {
      font-family: var(--serif);
      font-size: 1.25rem;
      color: var(--signal-deep);
      display: block;
      line-height: 1;
      margin-bottom: 4px;
    }

    .stat-label {
      font-family: var(--mono);
      font-size: 8px;
      color: var(--ink-mute);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 16px;
      padding: 12px 14px;
      background: var(--signal-pale);
      border-left: 2px solid var(--signal);
      border-radius: 0 4px 4px 0;
    }

    .gap-callout strong {
      font-weight: 600;
      color: var(--signal-deep);
    }

    .gap-callout-label {
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--signal-deep);
      margin-bottom: 4px;
      display: block;
    }

    .gap-callout-value {
      font-family: var(--serif);
      font-size: 14px;
      color: var(--signal-deep);
    }

    /* Reveal animations */
    .reveal {
      opacity: 0;
      transform: translateY(20px);
    }

    .reveal-1 {
      animation: rv 0.8s var(--ease) 0.1s forwards;
    }

    .reveal-2 {
      animation: rv 0.8s var(--ease) 0.22s forwards;
    }

    .reveal-3 {
      animation: rv 0.8s var(--ease) 0.36s forwards;
    }

    .reveal-4 {
      animation: rv 0.8s var(--ease) 0.5s forwards;
    }

    @keyframes rv {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Fade-in sections */
    .fade-in {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
    }

    .fade-in.in {
      opacity: 1;
      transform: translateY(0);
    }

    /* Section base */
    .who-section {
      padding: 100px 0;
      position: relative;
    }

    .who-section--warm {
      background: var(--paper-warm);
    }

    .who-section--ink {
      background: var(--ink);
      color: var(--paper);
    }

    .who-section--ink-soft {
      background: var(--ink-soft);
      color: var(--paper);
    }

    .who-section--ink .display,
    .who-section--ink-soft .display {
      color: var(--paper);
    }

    .who-section--ink .display em,
    .who-section--ink-soft .display em {
      color: rgba(250, 247, 242, 0.5);
    }

    .who-section--ink .eyebrow,
    .who-section--ink-soft .eyebrow {
      color: rgba(250, 247, 242, 0.5);
    }

    .who-section--ink .eyebrow::before,
    .who-section--ink-soft .eyebrow::before {
      background: rgba(250, 247, 242, 0.4);
    }

    .who-section--ink p,
    .who-section--ink-soft p {
      color: rgba(250, 247, 242, 0.65);
    }

    /* Section header */
    .section-header {
      margin-bottom: 64px;
    }

    .section-title {
      font-family: var(--serif);
      font-size: clamp(2rem, 3.8vw, 3rem);
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.06;
      margin-top: 16px;
      max-width: 780px;
      font-variation-settings: "opsz" 144;
    }

    .section-title em {
      font-style: italic;
      font-weight: 300;
      color: var(--ink-mute);
    }

    .section-subtitle {
      margin-top: 18px;
      font-size: 16px;
      line-height: 1.75;
      color: var(--ink-mute);
      max-width: 560px;
    }

    .who-section--ink .section-title,
    .who-section--ink-soft .section-title {
      color: var(--paper);
    }

    .who-section--ink .section-title em,
    .who-section--ink-soft .section-title em {
      color: rgba(250, 247, 242, 0.5);
    }

    .who-section--ink .section-subtitle,
    .who-section--ink-soft .section-subtitle {
      color: rgba(250, 247, 242, 0.6);
    }

    /* Monologue */
    .monologue {
      max-width: 780px;
      border-left: 2px solid var(--paper-line);
      padding-left: 32px;
    }

    .monologue p {
      font-size: 16px;
      line-height: 1.85;
      color: var(--ink-soft);
      margin-bottom: 20px;
    }

    .monologue p:last-child {
      margin-bottom: 0;
    }

    .monologue .highlight {
      font-family: var(--serif);
      font-size: 19px;
      font-style: italic;
      color: var(--ink);
      line-height: 1.5;
    }

    /* Pain grid */
    .pain-grid {
      display: flex;
      flex-direction: column;
      margin-top: 48px;
    }

    .pain-card {
      display: grid;
      grid-template-columns: 48px 1fr;
      gap: 0 24px;
      padding: 28px 0;
      border-bottom: 1px solid var(--paper-line);
      align-items: start;
    }

    .pain-card:last-child {
      border-bottom: none;
    }

    .pain-card-num {
      font-family: var(--serif);
      font-size: 13px;
      color: var(--ink-mute);
      padding-top: 3px;
    }

    .pain-card h4 {
      font-size: 15px;
      font-weight: 600;
      color: var(--ink);
      margin-bottom: 6px;
      line-height: 1.35;
    }

    .pain-card p {
      font-size: 14px;
      color: var(--ink-mute);
      line-height: 1.72;
    }

    /* Service grid */
    .service-fit-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1px;
      background: var(--paper-line);
      border: 1px solid var(--paper-line);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .service-fit-card {
      background: var(--white);
      padding: 28px;
      transition: background 0.2s;
    }

    .service-fit-card:hover {
      background: var(--paper-warm);
    }

    .service-fit-card-num {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.12em;
      color: var(--signal-deep);
      margin-bottom: 12px;
      display: block;
    }

    .service-fit-card h4 {
      font-size: 14px;
      font-weight: 600;
      color: var(--ink);
      margin-bottom: 8px;
    }

    .service-fit-card p {
      font-size: 13px;
      color: var(--ink-mute);
      line-height: 1.65;
    }

    .marketplace-form {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid var(--paper-line);
      border-radius: 16px;
      padding: 38px;
      max-width: 980px;
      margin: 0 auto;
      box-shadow: 0 24px 80px rgba(10, 22, 40, 0.08);
    }

    .marketplace-form form {
      display: grid;
      gap: 22px;
    }

    .marketplace-form label {
      display: block;
      font-size: 13px;
      color: var(--ink-soft);
      line-height: 1.4;
      font-weight: 600;
    }

    .field-row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .field-full {
      grid-column: 1 / -1;
    }

    .marketplace-form input,
    .marketplace-form select,
    .marketplace-form textarea {
      width: 100%;
      margin-top: 8px;
      padding: 14px 16px;
      border: 1px solid var(--paper-line);
      border-radius: 12px;
      background: var(--paper);
      color: var(--ink);
      font-family: var(--sans);
      font-size: 15px;
      line-height: 1.4;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .marketplace-form input:focus,
    .marketplace-form select:focus,
    .marketplace-form textarea:focus {
      border-color: var(--signal);
      box-shadow: 0 0 0 4px rgba(0, 200, 150, 0.12);
    }

    .marketplace-form textarea {
      min-height: 160px;
      resize: vertical;
    }

    .marketplace-form .form-success {
      text-align: center;
    }

    .marketplace-form .form-success h3 {
      font-family: var(--serif);
      font-size: 1.9rem;
      margin-bottom: 14px;
      color: var(--ink);
    }

    .marketplace-form .form-success p {
      color: var(--ink-soft);
      font-size: 15px;
      line-height: 1.7;
    }

    @media (max-width: 860px) {
      .field-row {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 640px) {
      .marketplace-form {
        padding: 28px;
      }
    }

    /* Process timeline */
    .process-timeline {
      display: flex;
      flex-direction: column;
    }

    .process-step {
      display: grid;
      grid-template-columns: 48px 1fr;
      gap: 0 24px;
      padding: 28px 0;
      border-bottom: 1px solid var(--paper-line);
      align-items: start;
    }

    .process-step:last-child {
      border-bottom: none;
    }

    .process-step-num {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--signal-deep);
      letter-spacing: 0.1em;
      padding-top: 4px;
    }

    .process-step h4 {
      font-size: 15px;
      font-weight: 600;
      color: var(--ink);
      margin-bottom: 6px;
    }

    .process-step p {
      font-size: 14px;
      color: var(--ink-mute);
      line-height: 1.72;
    }

    .who-section--ink .process-step {
      border-color: rgba(250, 247, 242, 0.1);
    }

    .who-section--ink .process-step h4 {
      color: var(--paper);
    }

    .who-section--ink .process-step p {
      color: rgba(250, 247, 242, 0.6);
    }

    .who-section--ink .process-step-num {
      color: var(--signal);
    }

    /* Two column layout */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: start;
    }

    /* Workflow dashboard */
    .workflow-dashboard {
      display: flex;
      align-items: flex-start;
      gap: 0;
      margin-top: 48px;
      position: relative;
      overflow-x: auto;
      padding-bottom: 8px;
    }

    .workflow-dashboard::before {
      content: '';
      position: absolute;
      top: 18px;
      left: 24px;
      right: 24px;
      height: 1px;
      background: var(--paper-line);
      z-index: 0;
    }

    .wf-node {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      min-width: 110px;
      position: relative;
      z-index: 1;
      padding: 0 6px;
    }

    .wf-dot {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 500;
      margin-bottom: 10px;
      border: 1px solid var(--paper-line);
      flex-shrink: 0;
      background: var(--white);
    }

    .wf-dot--signal {
      background: rgba(0, 200, 150, 0.1);
      color: var(--signal-deep);
      border-color: rgba(0, 200, 150, 0.25);
    }

    .wf-dot--amber {
      background: rgba(245, 158, 11, 0.1);
      color: var(--amber-deep);
      border-color: rgba(245, 158, 11, 0.25);
    }

    .wf-dot--ink {
      background: var(--ink);
      color: var(--paper);
      border-color: var(--ink);
    }

    .wf-node-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--ink);
      text-align: center;
      line-height: 1.3;
      margin-bottom: 3px;
    }

    .wf-node-sub {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--ink);
      text-align: center;
      letter-spacing: 0.06em;
    }

    /* AI + Human split */
    .ai-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
      background: var(--paper-line);
      border-radius: var(--radius-lg);
      overflow: hidden;
      margin-top: 48px;
    }

    .ai-col {
      padding: 36px;
    }

    .ai-col--machine {
      background: var(--paper-warm);
    }

    .ai-col--human {
      background: var(--white);
    }

    .ai-col-label {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--paper-line);
    }

    .ai-col--machine .ai-col-label {
      color: var(--signal-deep);
    }

    .ai-col--human .ai-col-label {
      color: var(--ink-mute);
    }

    .ai-items {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .ai-item {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .ai-item-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 6px;
    }

    .ai-col--machine .ai-item-dot {
      background: var(--signal);
    }

    .ai-col--human .ai-item-dot {
      background: var(--ink);
    }

    .ai-item p {
      font-size: 13px;
      color: var(--ink-mute);
      line-height: 1.6;
    }

    /* Pull quote */
    .pull-quote {
      font-family: var(--serif);
      font-size: clamp(1.1rem, 2.2vw, 1.45rem);
      font-style: italic;
      color: var(--ink);
      line-height: 1.65;
      padding: 28px 32px;
      border-left: 3px solid var(--signal);
      background: var(--signal-pale);
      border-radius: 0 var(--radius) var(--radius) 0;
      margin: 40px 0;
      max-width: 860px;
    }

    /* Outcome grid */
    .outcome-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 48px;
}

@media (max-width: 900px) {
  .outcome-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .outcome-grid {
    grid-template-columns: 1fr;
  }
}
    /* Compare table */
    .compare-wrap {
      background: var(--ink);
      border-radius: var(--radius-lg);
      overflow: hidden;
      margin-top: 48px;
    }

    .compare-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      padding: 14px 28px;
      background: rgba(255, 255, 255, 0.04);
    }

    .compare-header span {
      font-family: var(--mono);
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--paper);
    }

    .compare-header span.hbs-col {
      color: var(--signal);
    }

    .compare-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      padding: 14px 28px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .compare-row span {
      font-size: 13px;
    }

    .c-label {
      color: var(--paper);
    }

    .c-hbs {
      color: var(--signal);
      font-weight: 500;
    }

    .c-other {
      color: var(--paper);
    }

    /* CTA Section */
    .cta-section {
      background: var(--ink);
      padding: 120px var(--gutter);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta-glow {
      position: absolute;
      bottom: -80px;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 400px;
      background: radial-gradient(ellipse at center, rgba(0, 200, 150, 0.2), transparent 70%);
      pointer-events: none;
    }

    .cta-inner {
      position: relative;
      z-index: 1;
      max-width: 680px;
      margin: 0 auto;
    }

    .cta-title {
      font-family: var(--serif);
      font-size: clamp(2.2rem, 2.5vw, 3.4rem);
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.06;
      color: var(--paper);
      margin: 16px 0 24px;
      font-variation-settings: "opsz" 144;
    }

    .cta-title em {
      font-style: italic;
      font-weight: 300;
      color: rgba(250, 247, 242, 0.5);
    }

    .cta-text {
      font-size: 16px;
      line-height: 1.75;
      color: rgba(250, 247, 242, 0.6);
      margin-bottom: 40px;
    }

    .cta-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .trust-line {
      margin-top: 28px;
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(250, 247, 242, 0.35);
    }

    /* Footer */
    footer {
      background: var(--ink);
      color: rgba(250, 247, 242, 0.6);
      padding: 60px 0 32px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 13px;
    }

    .footer-inner a {
      color: rgba(250, 247, 242, 0.6);
    }

    .footer-inner a:hover {
      color: var(--signal);
    }

    .footer-legal {
      display: flex;
      gap: 24px;
    }

    @media (max-width: 1024px) {
      .who-hero-inner {
        grid-template-columns: 1fr;
      }

      .who-hero-visual {
        display: none;
      }

      .two-col {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .ai-split {
        grid-template-columns: 1fr;
      }

      .workflow-dashboard::before {
        display: none;
      }
    }

    @media (max-width: 720px) {
      .who-section {
        padding: 64px 0;
      }

    
      .cta-section {
        padding: 80px var(--gutter);
      }

      .section-header {
        margin-bottom: 40px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>

      {/* Hero Section */}
      {slug && heroComponentMap[slug] ? (
        React.createElement(heroComponentMap[slug], { solution })
      ) : (
        <section className="who-hero">
          <div className="who-hero-inner">
            <div>
              {solution.hero?.eyebrow && (
                <div className="eyebrow reveal reveal-1">{solution.hero.eyebrow}</div>
              )}
              {solution.hero?.title && (
                <h1 className="who-hero-title reveal reveal-2">
                  {solution.hero.title}
                  {solution.hero.subtitle && (
                    <>
                      <br />
                      <em>{solution.hero.subtitle}</em>
                    </>
                  )}
                </h1>
              )}
              {solution.hero?.description && (
                <>
                  <p className="who-hero-lede reveal reveal-3">{solution.hero.description}</p>
                  <div className="who-hero-actions reveal reveal-4">
                    <a href="#cta" className="btn btn-primary btn-lg">
                      Learn More
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Pain Section */}
      {solution.sections?.pain && (
        <>
          <section className="who-section" id="pain">
            <div className="container">
              <div className="section-header fade-in">
                <div className="eyebrow">{solution.sections.pain.eyebrow}</div>
                <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.pain.title }}></h2>
              </div>
              <div className="monologue fade-in">
                {solution.sections.pain.monologue.map((para, i) => (
                  <p key={i}>{para.startsWith('"') ? <span className="highlight">{para}</span> : para}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="who-section who-section--warm">
            <div className="container">
              <div className="section-header fade-in">
                <div className="eyebrow">{solution.sections.pain.ledgerEyebrow || 'Where the pressure lives'}</div>
                <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.pain.ledgerHeading || 'The specific gaps <em>behind the daily grind.</em>' }}></h2>
              </div>
              <div className="pain-grid fade-in">
                {solution.sections.pain.ledger.map((item) => (
                  <div key={item.num} className="pain-card">
                    <div className="pain-card-num">{item.num}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Solution Section */}
      {solution.sections?.solution && (
        <section className="who-section who-section--ink" id="solution">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">{solution.sections.solution.eyebrow}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.solution.title }}></h2>
              <p className="section-subtitle">{solution.sections.solution.description}</p>
            </div>

            <div className="two-col fade-in">
              <div className="process-timeline">
                {solution.sections.solution.process.slice(0, 3).map((step) => (
                  <div key={step.num} className="process-step">
                    <div className="process-step-num">{step.num}</div>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="process-timeline">
                {solution.sections.solution.process.slice(3).map((step) => (
                  <div key={step.num} className="process-step">
                    <div className="process-step-num">{step.num}</div>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {solution.sections?.services && (
        <section className="who-section" id="services">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">{solution.sections.services.eyebrow}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.services.title }}></h2>
            </div>
            <div className="service-fit-grid fade-in">
              {solution.sections.services.items.map((service) => {
                const categoryColorMap: { [key: string]: string } = {
                  'WORKFLOW': '#00C896',
                  'TECHNICAL': '#0A1628',
                  'IMPLEMENTATION': '#F59E0B',
                  'DATA': '#D4A574',
                  'PROCESS': '#D64545',
                  'INTELLIGENCE': '#F59E0B',
                  'FEEDBACK': '#D64545',
                  'QA': '#858B93',
                };
                const categoryColor = service.category ? categoryColorMap[service.category] || '#0A1628' : '#0A1628';
                return (
                  <div key={service.num} className="service-fit-card">
                    {service.category && (
                      <span className="service-category" style={{ color: categoryColor, fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '12px', display: 'inline-block', fontWeight: 500 }}>
                        {service.category}
                      </span>
                    )}
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Workflow Section - Startup Practices (Practice Launch Roadmap) */}
      {!solution.sections?.workflow && (
        <section className="who-section who-section--warm">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">Practice launch roadmap</div>
              <h2 className="section-title">
                The right things started at the right time. <em>Not in the order that feels most urgent.</em>
              </h2>
              <p className="section-subtitle">
                Credentialing takes months. Billing setup takes weeks. Front desk workflows take days. Every track has a
                different timeline — and the ones with the longest lead time need to start first.
              </p>
            </div>
          <div className="workflow-dashboard fade-in">
            {[
              { time: 'M-4', label: 'Entity & NPI', sub: 'Tax ID · NPPES', dotClass: 'wf-dot--signal' },
              { time: 'M-4', label: 'CAQH & Docs', sub: 'Provider file built', dotClass: 'wf-dot--signal' },
              { time: 'M-4', label: 'Payer Apps', sub: 'All submitted', dotClass: 'wf-dot--signal' },
              { time: 'M-2', label: 'Billing Setup', sub: 'EHR · Clearinghouse', dotClass: 'wf-dot--amber' },
              { time: 'M-2', label: 'Workflows', sub: 'SOPs documented', dotClass: 'wf-dot--amber' },
              { time: 'M-1', label: 'Readiness Check', sub: 'All tracks reviewed', dotClass: 'wf-dot--amber' },
              { time: 'Open', label: 'First Patients', sub: 'Claims submit Day 1', dotClass: 'wf-dot--ink' },
              { time: 'Post', label: 'Revenue Active', sub: 'Billing stabilized', dotClass: 'wf-dot--signal' },
            ].map((node, index) => (
              <div key={index} className="wf-node">
                <div className={`wf-dot ${node.dotClass}`}>{node.time}</div>
                <div className="wf-node-label">{node.label}</div>
                <div className="wf-node-sub">{node.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* How We Work Section - Startup Practices */}
      {!solution.sections?.howWeWork && slug === 'start-ups' && (
        <section className="who-section">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">How HBS works with your startup team</div>
            <h2 className="section-title">
              We take ownership of the backend <em>so you can take ownership of clinical care.</em>
            </h2>
            <p className="section-subtitle">
              A founder should not have to choose between seeing patients and building billing infrastructure. We manage
              the operational build so clinical focus remains where it belongs.
            </p>
          </div>
          <div className="process-timeline fade-in" style={{ maxWidth: '780px' }}>
            {[
              {
                num: '01',
                title: 'We map your full launch timeline in week one',
                description: 'Every task identified, sequenced, and assigned a start date — with long-lead items started immediately so the timeline does not extend because of late starts.',
              },
              {
                num: '02',
                title: 'We work inside your EHR and billing systems',
                description: 'No separate portal, no file transfers, no workarounds — we build and operate inside the systems you will run the practice on from day one.',
              },
              {
                num: '03',
                title: 'We communicate with you directly — not through a support queue',
                description: 'You talk to a team member. Questions get answered the same day. Decisions that require your input are surfaced clearly — not buried in a ticket system.',
              },
              {
                num: '04',
                title: 'We stay through the first 60 to 90 days of operations',
                description: 'The weeks after opening surface the gaps that planning cannot fully anticipate. We stay engaged through stabilization — resolving early billing issues, completing pending enrollments, and refining workflows under real conditions.',
              },
              {
                num: '05',
                title: 'We become your ongoing billing and operations partner',
                description: 'After launch, we transition from setup support to ongoing RCM, AR management, credentialing maintenance, and operations support — scaling as the practice grows.',
              },
            ].map((step) => (
              <div key={step.num} className="process-step">
                <div className="process-step-num">{step.num}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Workflow Section - Dynamic (for pages like small-medical-practices) */}
      {solution.sections?.workflow && (
        <section className="who-section who-section--warm">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">{solution.sections.workflow.eyebrow}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.workflow.title }}></h2>
              <p className="section-subtitle">{solution.sections.workflow.description}</p>
            </div>
            <div className="workflow-dashboard fade-in">
              {solution.sections.workflow.items.map((node, index) => (
                <div key={index} className="wf-node">
                  <div className="wf-dot wf-dot--signal">{node.num}</div>
                  <div className="wf-node-label">{node.label}</div>
                  <div className="wf-node-sub">{node.sublabel}</div>
                </div>
              ))}
            </div>
            {solution.sections.workflow.codeBlock && (
              <div className="code-block fade-in" style={{ marginTop: '48px', background: '#FAF7F2', border: '1px solid #E8E2D5', borderRadius: '8px', padding: '28px', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px', lineHeight: '1.8', color: '#0A1628', overflowX: 'auto' }}>
                <div style={{ color: '#00876B', marginBottom: '14px' }}>// Healthcare workflow context — what documentation misses</div>
                {solution.sections.workflow.codeBlock.map((item, idx) => (
                  <div key={idx}>{item.label} = "{item.value}"</div>
                ))}
                <div style={{ color: '#00876B', marginTop: '14px' }}>// HBS provides the operational context your spec does not</div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Denial Patterns Section */}
      {solution.sections?.denialPatterns && (
        <section className="who-section">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">{solution.sections.denialPatterns.eyebrow}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.denialPatterns.title }}></h2>
              <p className="section-subtitle">{solution.sections.denialPatterns.description}</p>
            </div>
            <div className="denial-grid fade-in">
              {solution.sections.denialPatterns.patterns.map((pattern, index) => (
                <div key={index} className="denial-card">
                  <div className={`denial-card-tag ${pattern.tagClass}`}>{pattern.tag}</div>
                  <h4>{pattern.title}</h4>
                  <p>{pattern.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How We Work Section */}
      {solution.sections?.howWeWork && (
        <section className="who-section">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">{solution.sections.howWeWork.eyebrow}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.howWeWork.title }}></h2>
              <p className="section-subtitle">{solution.sections.howWeWork.description}</p>
            </div>
            <div className="process-timeline fade-in" style={{ maxWidth: '780px' }}>
              {solution.sections.howWeWork.process.map((step) => (
                <div key={step.num} className="process-step">
                  <div className="process-step-num">{step.num}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI + Human Section */}
      {solution.sections?.aiHuman && (
        <section className="who-section who-section--warm">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">{solution.sections.aiHuman.eyebrow}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.aiHuman.title }}></h2>
            </div>
            <div className="ai-split fade-in">
              <div className="ai-col ai-col--machine">
                <div className="ai-col-label">AI-assisted workflows</div>
                <div className="ai-items">
                  {solution.sections.aiHuman.machine.map((task, i) => (
                    <div key={i} className="ai-item">
                      <div className="ai-item-dot"></div>
                      <p>{task}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ai-col ai-col--human">
                <div className="ai-col-label">Human specialists</div>
                <div className="ai-items">
                  {solution.sections.aiHuman.human.map((task, i) => (
                    <div key={i} className="ai-item">
                      <div className="ai-item-dot"></div>
                      <p>{task}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {solution.sections.aiHuman.pullQuote && (
              <div className="pull-quote fade-in">{solution.sections.aiHuman.pullQuote}</div>
            )}
          </div>
        </section>
      )}

      {/* Results Section */}
      {solution.sections?.results && (
        <section className="who-section" id="results">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">{solution.sections.results.eyebrow}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.results.title }}></h2>
            </div>
            <div className="outcome-grid fade-in">
              {solution.sections.results.outcomes.map((outcome, i) => (
                <div key={i} className="outcome-card">
                  <div className="outcome-card-num">{outcome.icon}</div>
                  <h4>{outcome.title}</h4>
                  <p>{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compare Section */}
      {solution.sections?.compare && (
        <section className="who-section who-section--ink-soft">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">{solution.sections.compare.eyebrow}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: solution.sections.compare.title }}></h2>
              <p className="section-subtitle">{solution.sections.compare.description}</p>
            </div>
            <div className="compare-wrap fade-in">
              <div className="compare-header">
                <span> Time Since Service</span>
                <span className="hbs-col">With HBS</span>
                <span>Without It</span>
              </div>
              {solution.sections.compare.rows.map((row, i) => (
                <div key={i} className="compare-row">
                  <span className="c-label">{row.label}</span>
                  <span className="c-hbs">{row.hbs}</span>
                  <span className="c-other">{row.other}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {slug === 'hbs-marketing' && (
        <section className="who-section who-section--ink-soft" id="marketplace-form">
          <div className="container">
            <div className="section-header fade-in">
              <div className="eyebrow">Connect with our marketplace execution team</div>
              <h2 className="section-title">Share your needs and we’ll match the right partnership operations support.</h2>
              <p className="section-subtitle">
                Fill out the form below and one of our marketplace partner specialists will follow up with a tailored next step.
              </p>
            </div>
            <div className="marketplace-form fade-in">
              {submitted ? (
                <div className="form-success">
                  <h3>Thanks for reaching out.</h3>
                  <p>We’ve received your request and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="field-row">
                    <label>
                      Full Name *
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                      />
                    </label>
                    <label>
                      Email Address *
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                      />
                    </label>
                  </div>
                  <div className="field-row">
                    <label>
                      Phone Number *
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                      />
                    </label>
                    <label>
                      Service of Interest *
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        required
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <label className="field-full">
                    Message *
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                    />
                  </label>
                  <button type="submit" className="btn btn-primary btn-lg" disabled={!isFormValid || loading}>
                    {loading ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {solution.sections?.finalCta ? (
        <section className="cta-section" id="cta">
          <div className="cta-glow"></div>
          <div className="cta-inner">
            <div className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>
              {solution.sections.finalCta.eyebrow}
            </div>
            <h2 className="cta-title" dangerouslySetInnerHTML={{ __html: solution.sections.finalCta.title }}></h2>
            <p className="cta-text">{solution.sections.finalCta.description}</p>
            <div className="cta-actions">
              {solution.sections.finalCta.buttons.map((button, index) => (
                <a
                  key={index}
                  href="/contact"
                  className={`btn btn-${button.variant} btn-lg`}
                  style={button.variant === 'ghost' ? { color: 'var(--paper)', borderColor: 'rgba(250,247,242,.25)' } : {}}
                >
                  {button.text}
                  <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
            <div className="trust-line">{solution.sections.finalCta.trustLine}</div>
          </div>
        </section>
      ) : (
        <section className="cta-section" id="cta">
          <div className="cta-glow"></div>
          <div className="cta-inner">
            <div className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>
              Start with a launch readiness review
            </div>
            <h2 className="cta-title">
              If you are opening a practice in the next six months, <em>the operational work needs to start now.</em>
            </h2>
            <p className="cta-text">
              We start with a launch readiness assessment — mapping your timeline, identifying what needs to start
              immediately, and showing you where the gaps are between your current status and billing-ready. No commitment
              required.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-light btn-lg">
                Build my practice foundation
                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/contact" className="btn btn-ghost btn-lg" >
                Talk to our startup team
              </a>
            </div>
            <div className="trust-line">HIPAA · BAA on every engagement · No long-term contract required</div>
          </div>
        </section>
      )}

      
    </>
  );
};

export default WhoWeServeLayout;
