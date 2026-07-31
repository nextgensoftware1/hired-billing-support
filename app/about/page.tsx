'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function AboutPage() {
  // Scroll effects (client-side only)
  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal animation
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.sr').forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      {/* ===== GLOBAL CSS ===== */}
      <style jsx global>{`
        /* ── RESET & TOKENS ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; font-size: 16px; }
        body { font-family: 'Inter Tight', -apple-system, sans-serif; background: #FAF7F2; color: #0A1628; line-height: 1.5; overflow-x: hidden; }
        ::selection { background: #0A1628; color: #FAF7F2; }
        a { color: inherit; text-decoration: none; }
        :root {
          --ink: #0A1628; --ink-soft: #1B2942; --ink-mute: #475569;
          --paper: #FAF7F2; --paper-warm: #F2EDE3; --paper-line: #E8E2D5;
          --white: #FFFFFF;
          --signal: #00C896; --signal-deep: #00876B; --signal-pale: rgba(0, 200, 150, .08);
          --serif: 'Fraunces', 'Times New Roman', serif;
          --sans: 'Inter Tight', -apple-system, sans-serif;
          --mono: 'JetBrains Mono', monospace;
          --ease: cubic-bezier(.22, 1, .36, 1);
          --max: 1280px; --gutter: clamp(20px, 4vw, 48px);
        }

       
        /* ── HERO ── */
        .about-hero { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; position: relative; padding-top: 0; }
        .hero-left, .hero-right { padding: clamp(80px, 10vw, 140px) clamp(32px, 5vw, 72px) clamp(64px, 10vw, 96px); display: flex; flex-direction: column; justify-content: flex-start; position: relative; }
        .hero-left { background: var(--ink); overflow: hidden; }
        .hero-left::after { content: ''; position: absolute; bottom: -40px; right: -40px; width: 320px; height: 320px; background: radial-gradient(circle, rgba(0, 200, 150, .15), transparent 65%); pointer-events: none; }
        .hero-eyebrow { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: rgba(250, 247, 242, .38); margin-bottom: 32px; display: flex; align-items: center; gap: 12px; }
        .hero-eyebrow::before { content: ''; width: 32px; height: 1px; background: rgba(0, 200, 150, .5); }
        .hero-tagline { font-family: var(--serif); font-size: clamp(2.8rem, 5vw, 5rem); font-weight: 300; letter-spacing: -.03em; line-height: .98; color: var(--paper); font-variation-settings: "opsz" 144; margin-bottom: 40px; }
        .hero-tagline em { font-style: italic; color: var(--signal); display: block; }
        .hero-body { font-size: 15px; line-height: 1.82; color: rgba(250, 247, 242, .55); max-width: 420px; margin-bottom: 48px; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-hero-primary { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; background: var(--signal); color: var(--ink); border-radius: 4px; font-size: 14px; font-weight: 700; transition: background .2s, transform .15s; }
        .btn-hero-primary:hover { background: #00dba6; transform: translateY(-1px); }
        .btn-hero-primary svg { width: 13px; height: 13px; stroke: currentColor; fill: none; stroke-width: 2.5; transition: transform .2s; }
        .btn-hero-primary:hover svg { transform: translateX(3px); }
        .btn-hero-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 13px 24px; color: rgba(250, 247, 242, .65); border: 1px solid rgba(250, 247, 242, .18); border-radius: 4px; font-size: 14px; font-weight: 500; transition: all .2s; }
        .btn-hero-ghost:hover { color: var(--paper); border-color: rgba(250, 247, 242, .4); }
        .hero-ticker { position: absolute; bottom: 0; left: 0; right: 0; border-top: 1px solid rgba(255, 255, 255, .06); padding: 14px 0; overflow: hidden; white-space: nowrap; }
        .ticker-track { display: inline-flex; gap: 0; animation: tickerMove 28s linear infinite; }
        .ticker-item { font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: rgba(250, 247, 242, .2); padding: 0 32px; border-right: 1px solid rgba(255, 255, 255, .08); }
        @keyframes tickerMove { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .hero-right { background: var(--paper-warm); padding: clamp(80px, 10vw, 140px) clamp(32px, 5vw, 72px); display: flex; flex-direction: column; justify-content: center; position: relative; }
        .hero-right-label { font-family: var(--mono); font-size: 9px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 40px; padding-bottom: 14px; border-bottom: 1px solid var(--paper-line); }
        .hero-stat-list { display: flex; flex-direction: column; gap: 0; }
        .hero-stat { display: grid; grid-template-columns: 120px 1fr; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--paper-line); align-items: center; }
        .hero-stat:last-child { border-bottom: none; }
        .hero-stat-num { font-family: var(--serif); font-size: 2.8rem; font-weight: 400; color: var(--signal-deep); line-height: 1; font-variation-settings: "opsz" 144; }
        .hero-stat-desc { font-size: 13px; color: var(--ink-soft); line-height: 1.65; }
        .hero-stat-desc strong { display: block; font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 3px; }
        .hero-scroll-cue { position: absolute; bottom: 32px; right: clamp(32px, 5vw, 72px); display: flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 9px; letter-spacing: .14em; text-transform: uppercase; color: var(--ink-mute); animation: float 3s ease-in-out infinite; }
        .hero-scroll-cue svg { width: 14px; height: 14px; stroke: currentColor; fill: none; stroke-width: 2; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }

        /* ── MANIFESTO ── */
        .manifesto { padding: 120px var(--gutter); background: var(--white); border-top: 1px solid var(--paper-line); border-bottom: 1px solid var(--paper-line); overflow: hidden; }
        .manifesto-inner { max-width: var(--max); margin: 0 auto; }
        .manifesto-kicker { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--signal-deep); margin-bottom: 32px; }
        .manifesto-text { font-family: var(--serif); font-size: clamp(1.9rem, 3.8vw, 3.4rem); font-weight: 300; line-height: 1.22; letter-spacing: -.025em; color: var(--ink); font-variation-settings: "opsz" 144; max-width: 1000px; }
        .manifesto-text em { font-style: italic; color: var(--ink-mute); font-weight: 300; }
        .manifesto-text mark { background: none; color: var(--signal-deep); font-style: normal; }
        .manifesto-aside { margin-top: 64px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--paper-line); border: 1px solid var(--paper-line); border-radius: 8px; overflow: hidden; }
        .manifesto-stat { background: var(--white); padding: 32px 36px; }
        .manifesto-stat-num { font-family: var(--serif); font-size: 2.6rem; font-weight: 400; color: var(--ink); line-height: 1; font-variation-settings: "opsz" 144; margin-bottom: 8px; }
        .manifesto-stat-num span { color: var(--signal-deep); }
        .manifesto-stat p { font-size: 13px; color: var(--ink-mute); line-height: 1.6; max-width: 220px; }

        /* ── WHY WE EXIST ── */
        .why-section { background: var(--paper); border-bottom: 1px solid var(--paper-line); }
        .why-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); display: grid; grid-template-columns: 320px 1fr; gap: 0; }
        .why-sidebar { border-right: 1px solid var(--paper-line); padding: 80px 48px 80px 0; position: sticky; top: 80px; align-self: start; height: fit-content; }
        .why-sidebar-label { font-family: var(--mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 20px; }
        .why-sidebar-title { font-family: var(--serif); font-size: 2rem; font-weight: 400; line-height: 1.1; color: var(--ink); font-variation-settings: "opsz" 72; margin-bottom: 24px; }
        .why-sidebar-title em { font-style: italic; color: var(--ink-mute); }
        .why-sidebar p { font-size: 14px; color: var(--ink-mute); line-height: 1.75; margin-bottom: 24px; }
        .why-sidebar-cta { display: inline-flex; align-items: center; gap: 7px; font-size: 13px; font-weight: 600; color: var(--signal-deep); font-family: var(--mono); letter-spacing: .06em; text-transform: uppercase; }
        .why-sidebar-cta svg { width: 12px; height: 12px; stroke: currentColor; fill: none; stroke-width: 2.5; transition: transform .2s; }
        .why-sidebar-cta:hover svg { transform: translateX(3px); }
        .why-content { padding: 80px 0 80px 72px; }
        .why-item { padding: 48px 0; border-bottom: 1px solid var(--paper-line); display: grid; grid-template-columns: 60px 1fr; gap: 32px; align-items: start; }
        .why-item:last-child { border-bottom: none; padding-bottom: 0; }
        .why-num { font-family: var(--serif); font-size: 2.8rem; font-weight: 300; color: var(--paper-line); line-height: 1; font-variation-settings: "opsz" 144; padding-top: 4px; }
        .why-item-body h3 { font-size: 19px; font-weight: 600; color: var(--ink); margin-bottom: 12px; line-height: 1.3; }
        .why-item-body p { font-size: 15px; color: var(--ink-mute); line-height: 1.82; margin-bottom: 0; }

        /* ── HOW WE WORK ── */
        .how-section { background: var(--ink); padding: 100px 0; overflow: hidden; }
        .how-top { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; margin-bottom: 72px; flex-wrap: wrap; }
        .how-label { font-family: var(--mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: rgba(250, 247, 242, .35); margin-bottom: 16px; }
        .how-title { font-family: var(--serif); font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 400; letter-spacing: -.025em; color: var(--paper); line-height: 1.05; font-variation-settings: "opsz" 144; max-width: 520px; }
        .how-title em { font-style: italic; color: rgba(250, 247, 242, .4); font-weight: 300; }
        .how-steps-scroll { padding: 0 var(--gutter); display: flex; gap: 2px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; -ms-overflow-style: none; }
        .how-steps-scroll::-webkit-scrollbar { display: none; }
        .how-step { flex: 0 0 300px; scroll-snap-align: start; background: rgba(255, 255, 255, .04); border: 1px solid rgba(255, 255, 255, .07); border-radius: 10px; padding: 32px 28px; display: flex; flex-direction: column; gap: 0; transition: background .2s; cursor: default; }
        .how-step:hover { background: rgba(255, 255, 255, .07); }
        .how-step-num { font-family: var(--mono); font-size: 11px; letter-spacing: .14em; color: var(--signal); margin-bottom: 24px; }
        .how-step h4 { font-size: 15px; font-weight: 600; color: var(--paper); margin-bottom: 12px; line-height: 1.3; }
        .how-step p { font-size: 13px; color: rgba(250, 247, 242, .5); line-height: 1.72; flex: 1; }
        .how-step-connector { margin-top: 24px; height: 1px; background: linear-gradient(90deg, var(--signal), transparent); width: 40px; opacity: .4; }

        /* ── AI + HUMAN ── */
        .ai-section { position: relative; overflow: hidden; }
        .ai-section-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .ai-col-left { background: var(--paper-warm); padding: clamp(64px, 8vw, 112px) clamp(32px, 5vw, 80px); }
        .ai-col-right { background: var(--ink-soft); padding: clamp(64px, 8vw, 112px) clamp(32px, 5vw, 80px); }
        .ai-col-label { font-family: var(--mono); font-size: 9px; letter-spacing: .2em; text-transform: uppercase; margin-bottom: 32px; padding-bottom: 14px; border-bottom: 1px solid; }
        .ai-col-left .ai-col-label { color: var(--signal-deep); border-color: rgba(0, 200, 150, .2); }
        .ai-col-right .ai-col-label { color: rgba(250, 247, 242, .4); border-color: rgba(255, 255, 255, .1); }
        .ai-col-title { font-family: var(--serif); font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 400; line-height: 1.12; letter-spacing: -.02em; font-variation-settings: "opsz" 72; margin-bottom: 36px; }
        .ai-col-left .ai-col-title { color: var(--ink); }
        .ai-col-right .ai-col-title { color: var(--paper); }
        .ai-items-list { display: flex; flex-direction: column; gap: 0; }
        .ai-li { display: flex; gap: 14px; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid; }
        .ai-col-left .ai-li { border-color: var(--paper-line); }
        .ai-col-right .ai-li { border-color: rgba(255, 255, 255, .07); }
        .ai-li:last-child { border-bottom: none; }
        .ai-li-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .ai-col-left .ai-li-dot { background: var(--signal); }
        .ai-col-right .ai-li-dot { background: rgba(250, 247, 242, .6); }
        .ai-li p { font-size: 13px; line-height: 1.65; }
        .ai-col-left .ai-li p { color: var(--ink-soft); }
        .ai-col-right .ai-li p { color: rgba(250, 247, 242, .65); }
        .ai-divider { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2; width: 48px; height: 48px; background: var(--paper); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 16px rgba(10, 22, 40, .15); }
        .ai-divider svg { width: 20px; height: 20px; stroke: var(--signal-deep); fill: none; stroke-width: 2; }

        /* ── WHO WE SERVE ── */
        .serve-section { background: var(--paper); padding: 100px 0; }
        .serve-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }
        .serve-top { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 56px; gap: 24px; flex-wrap: wrap; }
        .serve-top-left .serve-label { font-family: var(--mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
        .serve-top-left .serve-label::before { content: ''; width: 20px; height: 1px; background: currentColor; }
        .serve-top-left h2 { font-family: var(--serif); font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-weight: 400; letter-spacing: -.025em; line-height: 1.06; color: var(--ink); font-variation-settings: "opsz" 144; }
        .serve-top-left h2 em { font-style: italic; color: var(--ink-mute); font-weight: 300; }
        .serve-top-right { font-size: 14px; color: var(--ink-mute); line-height: 1.7; max-width: 320px; }
        .serve-mosaic { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--paper-line); border: 1px solid var(--paper-line); border-radius: 12px; overflow: hidden; }
        .serve-tile { background: var(--white); padding: 28px 24px; transition: background .18s; cursor: default; }
        .serve-tile:hover { background: var(--signal-pale); }
        .serve-tile.featured { grid-column: span 2; background: var(--ink); position: relative; overflow: hidden; }
        .serve-tile.featured::after { content: ''; position: absolute; bottom: -30px; right: -30px; width: 120px; height: 120px; background: radial-gradient(circle, rgba(0, 200, 150, .18), transparent 70%); pointer-events: none; }
        .serve-tile-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--signal); margin-bottom: 14px; }
        .serve-tile.featured .serve-tile-dot { background: rgba(0, 200, 150, .6); }
        .serve-tile h5 { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 5px; }
        .serve-tile.featured h5 { color: var(--paper); }
        .serve-tile p { font-size: 12px; color: var(--ink-mute); line-height: 1.6; }
        .serve-tile.featured p { color: rgba(250, 247, 242, .45); }
        .serve-tile.featured .serve-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 16px; font-family: var(--mono); font-size: 9px; letter-spacing: .12em; text-transform: uppercase; color: var(--signal); }
        .serve-tile.featured .serve-link svg { width: 10px; height: 10px; stroke: currentColor; fill: none; stroke-width: 2; transition: transform .2s; }
        .serve-tile.featured:hover .serve-link svg { transform: translateX(3px); }

        /* ── SERVICES BAR ── */
        .services-bar { background: var(--paper-warm); border-top: 1px solid var(--paper-line); border-bottom: 1px solid var(--paper-line); padding: 64px var(--gutter); }
        .services-bar-inner { max-width: var(--max); margin: 0 auto; }
        .services-bar-label { font-family: var(--mono); font-size: 9px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 28px; }
        .services-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .spill { display: inline-flex; align-items: center; gap: 5px; font-size: 13px; color: var(--ink-soft); padding: 7px 16px; border: 1px solid var(--paper-line); border-radius: 100px; background: var(--white); font-weight: 500; transition: all .18s; }
        .spill:hover { border-color: var(--signal-deep); color: var(--signal-deep); background: var(--signal-pale); }
        .spill::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--signal); flex-shrink: 0; }

        /* ── PROMISE ── */
        .promise-section { background: var(--ink); padding: clamp(80px, 10vw, 140px) var(--gutter); position: relative; overflow: hidden; }
        .promise-glow { position: absolute; top: -80px; left: 20%; width: 500px; height: 400px; background: radial-gradient(ellipse at center, rgba(0, 200, 150, .12), transparent 65%); pointer-events: none; }
        .promise-inner { max-width: var(--max); margin: 0 auto; position: relative; z-index: 1; }
        .promise-kicker { font-family: var(--mono); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; color: rgba(250, 247, 242, .3); margin-bottom: 24px; }
        .promise-headline { font-family: var(--serif); font-size: clamp(2.4rem, 5vw, 5rem); font-weight: 300; line-height: 1.04; letter-spacing: -.03em; color: var(--paper); font-variation-settings: "opsz" 144; max-width: 900px; margin-bottom: 56px; }
        .promise-headline em { font-style: italic; color: var(--signal); font-weight: 300; }
        .promise-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(255, 255, 255, .06); border: 1px solid rgba(255, 255, 255, .06); border-radius: 10px; overflow: hidden; margin-bottom: 64px; }
        .promise-item { padding: 32px; background: rgba(255, 255, 255, .03); }
        .promise-item-num { font-family: var(--mono); font-size: 9px; letter-spacing: .14em; text-transform: uppercase; color: rgba(250, 247, 242, .25); margin-bottom: 12px; }
        .promise-item h4 { font-size: 14px; font-weight: 600; color: var(--paper); margin-bottom: 8px; line-height: 1.35; }
        .promise-item p { font-size: 13px; color: rgba(250, 247, 242, .45); line-height: 1.7; }
        .promise-cta-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .btn-promise-primary { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; background: var(--signal); color: var(--ink); border-radius: 4px; font-size: 14px; font-weight: 700; transition: background .2s, transform .15s; }
        .btn-promise-primary:hover { background: #00dba6; transform: translateY(-1px); }
        .btn-promise-primary svg { width: 13px; height: 13px; stroke: currentColor; fill: none; stroke-width: 2.5; transition: transform .2s; }
        .btn-promise-primary:hover svg { transform: translateX(3px); }
        .btn-promise-ghost { display: inline-flex; align-items: center; gap: 7px; padding: 14px 24px; color: rgba(250, 247, 242, .6); border: 1px solid rgba(250, 247, 242, .18); border-radius: 4px; font-size: 14px; font-weight: 500; transition: all .2s; }
        .btn-promise-ghost:hover { color: var(--paper); border-color: rgba(250, 247, 242, .4); }
        .trust-footnote { margin-top: 24px; font-family: var(--mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: rgba(250, 247, 242, .25); }

        /* ── FOOTER ── */
        footer { background: var(--ink); color: rgba(250, 247, 242, .5); padding: 48px 0 28px; border-top: 1px solid rgba(255, 255, 255, .06); }
        .footer-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; font-size: 13px; }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a { color: rgba(250, 247, 242, .5); transition: color .2s; }
        .footer-links a:hover { color: var(--signal); }

        /* ── SCROLL REVEAL ── */
        .sr { opacity: 0; transform: translateY(32px); transition: opacity .9s var(--ease), transform .9s var(--ease); }
        .sr.in { opacity: 1; transform: translateY(0); }
        .sr-delay-1 { transition-delay: .1s; }
        .sr-delay-2 { transition-delay: .22s; }
        .sr-delay-3 { transition-delay: .36s; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .about-hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-right { padding-top: 48px; padding-bottom: 56px; }
          .hero-scroll-cue { display: none; }
          .why-inner { grid-template-columns: 1fr; }
          .why-sidebar { position: relative; top: 0; border-right: none; border-bottom: 1px solid var(--paper-line); padding: 64px 0 40px; }
          .why-content { padding: 48px 0; }
          .ai-section-grid { grid-template-columns: 1fr; }
          .ai-divider { display: none; }
          .serve-mosaic { grid-template-columns: 1fr 1fr; }
          .serve-tile.featured { grid-column: span 2; }
          .promise-grid { grid-template-columns: 1fr 1fr; }
          .manifesto-aside { grid-template-columns: 1fr 1fr; }
          .how-top { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 680px) {
          .serve-mosaic { grid-template-columns: 1fr; }
          .serve-tile.featured { grid-column: span 1; }
          .promise-grid { grid-template-columns: 1fr; }
          .manifesto-aside { grid-template-columns: 1fr; }
          .hero-stat { grid-template-columns: 80px 1fr; }
          .hero-stat-num { font-size: 2rem; }
          .how-step { flex: 0 0 260px; }
          .nav-links { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* ===== HEADER/NAVIGATION (COPIED AS-IS) ===== */}
     

      {/* ===== HERO SECTION ===== */}
      <section className="about-hero">
        <div className="hero-left">
          <div className="hero-eyebrow">About Hired Billing Support</div>
          <h1 className="hero-tagline">
            We work inside your workflow.
            <em>Not around it.</em>
          </h1>
          <p className="hero-body">
            HBS is not a billing vendor. We are an embedded healthcare operations partner — billing, RCM, AR, credentialing, denials, coding, compliance, and practice operations, executed inside your existing systems with the discipline of an in-house team.
          </p>
          <div className="hero-actions">
            <Link href="/find-service" className="btn-hero-primary">
              Find the right service
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/explore-partnership" className="btn-hero-ghost">
              Explore a partnership
            </Link>
          </div>
          <div className="hero-ticker">
            <div className="ticker-track">
              <span className="ticker-item">Medical Billing & RCM</span>
              <span className="ticker-item">AR Management</span>
              <span className="ticker-item">Denial Management</span>
              <span className="ticker-item">Provider Credentialing</span>
              <span className="ticker-item">Payer Enrollment</span>
              <span className="ticker-item">Medical Coding</span>
              <span className="ticker-item">Compliance & Reporting</span>
              <span className="ticker-item">Analytics & Reporting</span>
              <span className="ticker-item">Operations Management</span>
              <span className="ticker-item">Practice Launch</span>
              <span className="ticker-item">Old AR Recovery</span>
              <span className="ticker-item">Medical Billing & RCM</span>
              <span className="ticker-item">AR Management</span>
              <span className="ticker-item">Denial Management</span>
              <span className="ticker-item">Provider Credentialing</span>
              <span className="ticker-item">Payer Enrollment</span>
              <span className="ticker-item">Medical Coding</span>
              <span className="ticker-item">Compliance & Reporting</span>
              <span className="ticker-item">Analytics & Reporting</span>
              <span className="ticker-item">Operations Management</span>
              <span className="ticker-item">Practice Launch</span>
              <span className="ticker-item">Old AR Recovery</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-label">What we actually support</div>
          <div className="hero-stat-list">
            <div className="hero-stat">
              <div className="hero-stat-num">15+</div>
              <div className="hero-stat-desc">
                <strong>Operational functions</strong>
                From billing submission to denial appeal to credentialing renewal — the full backend chain, not just one task.
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">10+</div>
              <div className="hero-stat-desc">
                <strong>Organization types served</strong>
                Solo practices, medical groups, FQHCs, payers, imaging centers, healthtech platforms, and enterprise health systems.
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">∅</div>
              <div className="hero-stat-desc">
                <strong>New platforms required</strong>
                We access your EHR, your payer portals, and your billing software. No parallel systems. No reconciliation overhead.
              </div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">AI+</div>
              <div className="hero-stat-desc">
                <strong>Human execution model</strong>
                AI monitors queues and flags patterns. Specialists handle payer calls, denials, credentialing, and decisions that require judgment.
              </div>
            </div>
          </div>
          <div className="hero-scroll-cue">
            Scroll to learn more
            <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </div>
        </div>
      </section>

      {/* ===== MANIFESTO SECTION ===== */}
      <section className="manifesto">
        <div className="manifesto-inner">
          <div className="manifesto-kicker sr">What we believe</div>
          <p className="manifesto-text sr sr-delay-1">
            Providers should not have to choose between <em>patient care and administrative survival.</em>
            Revenue does not disappear in one dramatic failure — it erodes through <mark>dozens of small workflow gaps</mark>
            that accumulate silently until the cash flow numbers make them impossible to ignore.
          </p>
          <div className="manifesto-aside sr sr-delay-2">
            <div className="manifesto-stat">
              <div className="manifesto-stat-num"><span>78</span>%</div>
              <p>of claim denials are preventable with the right upstream workflow controls in place before the visit</p>
            </div>
            <div className="manifesto-stat">
              <div className="manifesto-stat-num"><span>90</span>+</div>
              <p>days of delayed revenue — the cost of every credentialing delay that nobody tracked closely enough</p>
            </div>
            <div className="manifesto-stat">
              <div className="manifesto-stat-num"><span>40</span>%</div>
              <p>of old AR that practices write off is still partially collectible with a systematic audit and recovery process</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY WE EXIST SECTION ===== */}
      <section className="why-section">
        <div className="why-inner">
          <aside className="why-sidebar">
            <div className="why-sidebar-label">Why we exist</div>
            <h2 className="why-sidebar-title">The problem is not the <em>people. It is the system behind them.</em></h2>
            <p>Healthcare teams are not failing because they lack effort. They are failing because the volume, complexity, and simultaneity of backend operational tasks consistently exceeds what any team can manage alone — without the right structure, tools, and support layer.</p>
            <Link href="/find-service" className="why-sidebar-cta">
              Find the right starting point
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
          </aside>
          <div className="why-content">
            <div className="why-item sr">
              <div className="why-num">01</div>
              <div className="why-item-body">
                <h3>Claims get delayed through workflow gaps, not billing failures</h3>
                <p>A claim does not get denied because the care was inadequate. It gets denied because eligibility was not re-verified before the visit, because the prior authorization expired and nobody caught it, because the ICD-10 code did not align with the documented diagnosis, because the claim sat in a queue for 45 days without follow-up. Each gap is small. Together they erode revenue that was already earned.</p>
              </div>
            </div>
            <div className="why-item sr sr-delay-1">
              <div className="why-num">02</div>
              <div className="why-item-body">
                <h3>Revenue cycle work is not just billing</h3>
                <p>Billing is one step in a much longer chain. Eligibility verification, prior authorization, documentation, coding review, charge entry, claim submission, payer follow-up, denial management, AR aging, payment posting, credentialing, payer enrollment, compliance, and reporting — all of these functions happen simultaneously, interdependently, and without stopping between patients. The practices that collect the most are the ones that manage every step, not just the most visible one.</p>
              </div>
            </div>
            <div className="why-item sr sr-delay-2">
              <div className="why-num">03</div>
              <div className="why-item-body">
                <h3>Hiring more staff solves headcount, not process</h3>
                <p>Adding a billing specialist helps. But adding a billing specialist, a credentialing coordinator, an AR follow-up analyst, a denial manager, and a coding reviewer — all at once, with training, benefits, management overhead, and attrition risk — is expensive, slow, and does not always fix the underlying process problem. The right support model builds the structure first, then executes within it.</p>
              </div>
            </div>
            <div className="why-item sr sr-delay-3">
              <div className="why-num">04</div>
              <div className="why-item-body">
                <h3>Vendors that do not adapt create their own overhead</h3>
                <p>Most healthcare billing vendors operate through their own platform, their own process, and their own reporting cadence — and expect the practice to adapt to them. The result is a vendor relationship that your team also has to manage, reconcile, and correct. HBS works inside your systems, your SOPs, and your communication channels. We are an extension of your team, not a service running parallel to it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK SECTION ===== */}
      <section className="how-section">
        <div className="how-top">
          <div>
            <div className="how-label">Our operating model</div>
            <h2 className="how-title">Discovery before execution. <em>Structure before speed.</em></h2>
          </div>
          <p style={{ fontSize: '14px', color: 'rgba(250,247,242,.45)', maxWidth: '320px', lineHeight: '1.7' }}>
            Every HBS engagement begins the same way — we learn your organization completely before we touch a single queue.
          </p>
        </div>
        <div className="how-steps-scroll">
          <div className="how-step sr">
            <div className="how-step-num">01 — Discovery</div>
            <h4>Operational context review</h4>
            <p>We map your EHR, billing software, payer mix, team structure, SOPs, and current pressure points before recommending anything. We understand the situation first.</p>
            <div className="how-step-connector"></div>
          </div>
          <div className="how-step sr sr-delay-1">
            <div className="how-step-num">02 — Setup</div>
            <h4>System access and SOP alignment</h4>
            <p>We request access to the specific systems we need, review your existing SOPs, and align our processes with your documentation standards. We adapt to you.</p>
            <div className="how-step-connector"></div>
          </div>
          <div className="how-step sr sr-delay-2">
            <div className="how-step-num">03 — Ownership</div>
            <h4>Task ownership and queue assignment</h4>
            <p>We take clear ownership of assigned functions with defined scope. Your team knows exactly what HBS manages and where to reach us for updates or exceptions.</p>
            <div className="how-step-connector"></div>
          </div>
          <div className="how-step sr sr-delay-3">
            <div className="how-step-num">04 — Execution</div>
            <h4>Daily operational execution</h4>
            <p>We work the queues, follow up with payers, track authorizations, manage credentialing timelines, and execute tasks consistently — without reminders, without gaps.</p>
            <div className="how-step-connector"></div>
          </div>
          <div className="how-step sr">
            <div className="how-step-num">05 — Visibility</div>
            <h4>Structured reporting</h4>
            <p>AR aging, denial patterns, credentialing status, and operational KPIs delivered on your preferred schedule and format. You always see what we see.</p>
            <div className="how-step-connector"></div>
          </div>
          <div className="how-step sr sr-delay-1">
            <div className="how-step-num">06 — Growth</div>
            <h4>Continuous improvement</h4>
            <p>As the engagement matures, we identify additional gaps, refine workflows, and adjust scope based on what the data shows and what the team needs.</p>
            <div className="how-step-connector"></div>
          </div>
        </div>
      </section>

      {/* ===== AI + HUMAN SECTION ===== */}
      <section className="ai-section">
        <div className="ai-section-grid">
          <div className="ai-col-left sr">
            <div className="ai-col-label">AI-assisted operations</div>
            <h3 className="ai-col-title">Automation handles the volume. Every task. Every day.</h3>
            <div className="ai-items-list">
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Queue monitoring and task routing across billing, AR, and credentialing functions</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Denial pattern detection — identifying recurring root causes across payer types before they compound</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>AR aging alerts — flagging claims approaching follow-up or appeal deadlines before they age past recovery</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Credentialing timeline tracking — monitoring expiration dates and application status without manual chasing</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Reporting support — compiling KPIs, throughput data, and queue status for leadership visibility</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Workflow visibility — real-time status across every active queue, every function, every day</p>
              </div>
            </div>
          </div>
          <div className="ai-col-right sr sr-delay-1">
            <div className="ai-col-label">Human operations specialists</div>
            <h3 className="ai-col-title">Specialists handle the decisions. Every exception. Every call.</h3>
            <div className="ai-items-list">
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Payer communication — follow-up calls, status checks, and escalation through the right channels and contacts</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Denial reasoning — understanding the specific reason, identifying the upstream gap, writing the right appeal</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Credentialing follow-up — contacting payers, tracking applications, resolving missing document requests</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Coding and documentation review — assessing whether documentation supports the billed level of service</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Patient and provider communication — inquiries, status updates, and coordination that require contextual judgment</p>
              </div>
              <div className="ai-li">
                <div className="ai-li-dot"></div>
                <p>Operational decisions — the judgment calls that payer rules, clinical context, and exception handling require</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ai-divider">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
        </div>
      </section>

      {/* ===== WHO WE SERVE SECTION ===== */}
      <section className="serve-section">
        <div className="serve-inner">
          <div className="serve-top sr">
            <div className="serve-top-left">
              <div className="serve-label">Who we serve</div>
              <h2>Healthcare organizations across <em>every size, stage, and specialty.</em></h2>
            </div>
            <p className="serve-top-right">HBS supports the full range of U.S. healthcare organizations. The same embedded operations model, adapted to the specific payer mix, EHR, and operational reality of each organization type.</p>
          </div>
          <div className="serve-mosaic sr sr-delay-1">
            <div className="serve-tile featured">
              <div className="serve-tile-dot"></div>
              <h5>Specialty Practices</h5>
              <p>Psychiatry · Cardiology · Orthopedic · OBGYN · Neurology · Endocrinology — specialty-specific billing rules, authorization complexity, and coding requirements handled by specialists who understand the clinical context.</p>
              <Link href="/find-service" className="serve-link">
                See specialty billing
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>Startup Practices</h5>
              <p>Building billing and operations infrastructure before the first patient visit</p>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>Small Medical Practices</h5>
              <p>Full-cycle RCM depth without the overhead of a full-time team</p>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>Medium to Large Groups</h5>
              <p>Standardized revenue cycle across multiple providers and locations</p>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>Enterprise & Health Systems</h5>
              <p>Scalable backend operations across complex multi-entity structures</p>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>FQHCs & Safety Net</h5>
              <p>Medicaid billing, PPS, encounter documentation, and compliance support</p>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>Healthcare Payers</h5>
              <p>Backend queue management, provider inquiry handling, enrollment processing</p>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>Labs & Imaging Centers</h5>
              <p>Order intake, authorization management, and billing handoff coordination</p>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>Marketplace Partners</h5>
              <p>Backend RCM execution behind healthcare marketplace referrals</p>
            </div>
            <div className="serve-tile">
              <div className="serve-tile-dot"></div>
              <h5>Developers & Healthtech</h5>
              <p>Workflow intelligence and implementation support for healthcare technology teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES BAR ===== */}
   

      {/* ===== PROMISE SECTION ===== */}
      <section className="promise-section">
        <div className="promise-glow"></div>
        <div className="promise-inner">
          <div className="promise-kicker sr">Our promise</div>
          <h2 className="promise-headline sr sr-delay-1">
            Structure. Consistency.<br />
            Visibility. <em>Reliable execution.</em>
          </h2>
          <div className="promise-grid sr sr-delay-2">
            <div className="promise-item">
              <div className="promise-item-num">01</div>
              <h4>We adapt to your workflow</h4>
              <p>We do not ask you to change your systems, your process, or your team&apos;s communication habits. We learn them. We work within them. We improve them without disrupting what already works.</p>
            </div>
            <div className="promise-item">
              <div className="promise-item-num">02</div>
              <h4>We are accountable, not just active</h4>
              <p>We do not promise to be perfect. We promise to be accountable. When something is not working, we find it. When a process needs to change, we say so before it becomes a revenue problem.</p>
            </div>
            <div className="promise-item">
              <div className="promise-item-num">03</div>
              <h4>You always know where things stand</h4>
              <p>AR aging, denial patterns, credentialing status, and operational KPIs reported on a defined schedule. Your team has full visibility into every function we manage — not through a long email thread, through structured reporting.</p>
            </div>
            <div className="promise-item">
              <div className="promise-item-num">04</div>
              <h4>We flag problems before they cost revenue</h4>
              <p>Proactive, not reactive. Authorization deadlines, AR aging thresholds, credentialing expiration dates, denial patterns — we identify the signal before it becomes a financial impact your team has to recover from.</p>
            </div>
            <div className="promise-item">
              <div className="promise-item-num">05</div>
              <h4>We scale with your organization</h4>
              <p>Whether you add providers, expand service lines, open new locations, or shift payer mix — the support model scales with the growth without a new hiring cycle or a new vendor onboarding process.</p>
            </div>
            <div className="promise-item">
              <div className="promise-item-num">06</div>
              <h4>We fit your billing, not our template</h4>
              <p>Your specialty has specific coding rules. Your payer mix has specific authorization requirements. Your EHR has a specific workflow. We adapt to all of it — not the other way around.</p>
            </div>
          </div>
          <div className="promise-cta-row sr sr-delay-3">
            <Link href="/find-service" className="btn-promise-primary">
              Find the right service
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/explore-partnership" className="btn-promise-ghost">
              Explore a partnership
            </Link>
          </div>
          <div className="trust-footnote sr">HIPAA-aware · BAA available · No long-term contract required · Adapts to your workflow</div>
        </div>
      </section>

     
    </>
  );
}