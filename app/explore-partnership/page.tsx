"use client";
import React, { useEffect, useRef } from 'react';

export default function ExplorePartnershipPage() {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        const handleScroll = () => {
            nav.classList.toggle('scrolled', window.scrollY > 8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style jsx global>{`
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
          --signal-pale: rgba(0,200,150,.08);
          --amber: #F59E0B;
          --amber-deep: #B45309;
          --amber-pale: rgba(245,158,11,.08);
          --danger: #D64545;
          --danger-pale: rgba(214,69,69,.07);
          --radius: 4px;
          --radius-lg: 12px;
          --max: 1280px;
          --gutter: clamp(20px,4vw,48px);
          --serif: 'Fraunces','Times New Roman',serif;
          --sans: 'Inter Tight',-apple-system,sans-serif;
          --mono: 'JetBrains Mono',monospace;
          --ease: cubic-bezier(.22,1,.36,1);
        }

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:var(--sans);background:var(--paper);color:var(--ink);line-height:1.5;font-size:16px;overflow-x:hidden}
        ::selection{background:var(--ink);color:var(--paper)}
        a{color:inherit;text-decoration:none}
        img{max-width:100%;display:block}

        .container{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}
        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
        .three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}

        .eyebrow{font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.18em;color:var(--ink-mute);display:inline-flex;align-items:center;gap:10px}
        .eyebrow::before{content:'';width:24px;height:1px;background:currentColor}
        .eyebrow--light{color:rgba(250,247,242,.5)}
        .eyebrow--light::before{background:rgba(250,247,242,.4)}

        nav.top{position:fixed;top:0;left:0;right:0;z-index:100;backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);background:rgba(250,247,242,.82);border-bottom:1px solid transparent;transition:border-color .3s var(--ease)}
        nav.top.scrolled{border-bottom-color:var(--paper-line)}
        .nav-inner{max-width:var(--max);margin:0 auto;padding:18px var(--gutter);display:flex;align-items:center;justify-content:space-between;gap:32px}
        .logo{display:flex;align-items:center;gap:10px;font-family:var(--serif);font-size:20px;font-weight:500;letter-spacing:-.02em;color:var(--ink)}
        .logo-mark{width:28px;height:28px;background:var(--ink);border-radius:50%;position:relative;flex-shrink:0}
        .logo-mark::after{content:'';position:absolute;inset:7px;border-radius:50%;background:var(--signal)}
        .nav-links{display:flex;gap:32px;list-style:none}
        .nav-links a{color:var(--ink-soft);font-size:14px;font-weight:500;transition:color .2s}
        .nav-links a:hover{color:var(--ink)}

        .btn{display:inline-flex;align-items:center;gap:8px;padding:11px 22px;border-radius:var(--radius);font-family:var(--sans);font-size:14px;font-weight:600;cursor:pointer;border:1px solid transparent;transition:background .2s var(--ease),color .2s,transform .15s;white-space:nowrap}
        .btn:hover{transform:translateY(-1px)}
        .btn .arrow{transition:transform .2s;flex-shrink:0}
        .btn:hover .arrow{transform:translateX(3px)}
        .btn-primary{background:var(--ink);color:var(--paper);border-color:var(--ink)}
        .btn-primary:hover{background:var(--ink-soft)}
        .btn-ghost{background:transparent;color:var(--ink);border-color:var(--paper-line)}
        .btn-ghost:hover{background:var(--paper-warm);border-color:var(--ink-mute)}
        .btn-light{background:var(--paper);color:var(--ink);border-color:var(--paper)}
        .btn-light:hover{background:var(--paper-warm)}
        .btn-signal{background:var(--signal);color:var(--ink);border-color:var(--signal)}
        .btn-signal:hover{background:var(--signal-deep);color:var(--paper)}
        .btn-lg{padding:14px 28px;font-size:15px}

        .consultation-hero{background:var(--paper);padding:140px 0 100px;position:relative;overflow:hidden}
        .consultation-hero-bg{position:absolute;inset:0;pointer-events:none}
        .consultation-hero-bg svg{width:100%;height:100%}
        .consultation-hero-grain{position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");opacity:.4}
        .consultation-hero-inner{position:relative;z-index:1;max-width:var(--max);margin:0 auto;padding:0 var(--gutter);display:grid;grid-template-columns:1fr 440px;gap:64px;align-items:center}
        .consultation-hero-badge{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:10px;text-transform:uppercase;letter-spacing:.16em;color:var(--signal-deep);background:rgba(0,200,150,.08);border:1px solid rgba(0,200,150,.2);padding:6px 14px;border-radius:100px;margin-bottom:24px}
        .consultation-hero-title{font-family:var(--serif);font-size:50px;font-weight:400;letter-spacing:-.025em;line-height:1.15;color:var(--ink);margin:24px 0 28px;font-variation-settings:"opsz" 144}
        .consultation-hero-title em{font-style:italic;font-weight:300;color:var(--ink-mute)}
        .consultation-hero-subtitle{font-family:var(--sans);font-size:clamp(16px,1.4vw,17px);font-weight:600;line-height:1.7;color:#1B2942;max-width:540px;margin-top:28px;margin-bottom:0}
        .consultation-hero-lede{font-family:var(--sans);font-size:clamp(15px,1.3vw,16px);font-weight:400;line-height:1.75;color:#3D4F66;max-width:540px;margin-top:20px;margin-bottom:36px}
        .consultation-hero-actions{display:flex;gap:12px;flex-wrap:wrap}

        .cp-card{background:var(--white);border:1px solid var(--paper-line);border-radius:var(--radius-lg);overflow:hidden;box-shadow:0 4px 32px rgba(10,22,40,.10),0 1px 4px rgba(10,22,40,.05)}
        .cp-header{background:var(--ink);padding:22px 24px 18px}
        .cp-header-label{font-family:var(--mono);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,247,242,.38);margin-bottom:12px}
        .cp-main-row{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:6px}
        .cp-big{font-family:var(--serif);font-size:2.6rem;color:var(--signal);line-height:1;font-variation-settings:"opsz" 144}
        .cp-unit{font-size:11px;color:rgba(250,247,242,.45);padding-bottom:4px;margin-left:4px}
        .cp-trend{display:inline-flex;align-items:center;gap:5px;font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--signal);background:rgba(0,200,150,.12);border:1px solid rgba(0,200,150,.2);padding:3px 10px;border-radius:100px}
        .cp-trend-dot{width:5px;height:5px;border-radius:50%;background:var(--signal)}
        .cp-header-sub{font-family:var(--mono);font-size:9px;color:rgba(250,247,242,.35);letter-spacing:.08em;margin-top:6px}
        .cp-body{background:#111f35;padding:16px 20px}
        .cp-grid{display:grid;grid-template-columns:1fr 1fr;gap:0}
        .cp-metric{padding:10px;border-bottom:1px solid rgba(255,255,255,.06);border-right:1px solid rgba(255,255,255,.06)}
        .cp-metric:nth-child(2n){border-right:none}
        .cp-metric:nth-last-child(-n+2){border-bottom:none}
        .cp-m-label{font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:rgba(250,247,242,.32);margin-bottom:5px}
        .cp-m-value{font-size:14px;font-weight:600;margin-bottom:5px}
        .cp-m-value.sig{color:var(--signal)}
        .cp-m-value.amb{color:var(--amber)}
        .cp-m-value.lite{color:rgba(250,247,242,.8)}
        .cp-spark{height:3px;border-radius:2px;background:rgba(255,255,255,.08);overflow:hidden}
        .cp-spark-fill{height:100%;border-radius:2px}
        .spark-sig{background:var(--signal)}
        .spark-amb{background:var(--amber)}
        .spark-lite{background:rgba(250,247,242,.35)}
        .cp-queue{background:var(--white);padding:16px 20px}
        .cp-queue-title{font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.14em;color:var(--ink-mute);margin-bottom:10px}
        .cp-queue-row{display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--paper-line)}
        .cp-queue-row:last-of-type{border-bottom:none}
        .cp-q-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
        .cp-q-lbl{font-size:11px;color:var(--ink-soft);flex:1;line-height:1.3}
        .cp-q-badge{font-family:var(--mono);font-size:8px;letter-spacing:.08em;padding:2px 9px;border-radius:100px;white-space:nowrap}
        .badge-ok{background:rgba(0,200,150,.1);color:var(--signal-deep)}
        .badge-warn{background:rgba(245,158,11,.12);color:var(--amber-deep)}
        .badge-idle{background:var(--paper-warm);color:var(--ink-mute)}
        .badge-info{background:rgba(10,22,40,.07);color:var(--ink-soft)}
        .cp-footer{background:var(--ink);padding:12px 20px;display:flex;align-items:center;justify-content:space-between}
        .cp-footer-pill{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--signal)}
        .cp-footer-pulse{width:6px;height:6px;border-radius:50%;background:var(--signal)}
        .cp-footer-right{font-family:var(--mono);font-size:9px;color:rgba(250,247,242,.3);letter-spacing:.08em}

        .reveal{opacity:0;transform:translateY(20px)}
        .reveal-1{animation:rv .8s var(--ease) .10s forwards}
        .reveal-2{animation:rv .8s var(--ease) .22s forwards}
        .reveal-3{animation:rv .8s var(--ease) .36s forwards}
        .reveal-4{animation:rv .8s var(--ease) .50s forwards}
        @keyframes rv{to{opacity:1;transform:translateY(0)}}
        .fade-in{opacity:0;transform:translateY(28px);transition:opacity .9s var(--ease),transform .9s var(--ease)}
        .fade-in.in{opacity:1;transform:translateY(0)}

        .consultation-section{padding:100px 0;position:relative}
        .consultation-section--warm{background:var(--paper-warm)}
        .consultation-section--ink{background:var(--ink);color:var(--paper)}
        .consultation-section--ink-soft{background:var(--ink-soft);color:var(--paper)}
        .consultation-section--ink .eyebrow,.consultation-section--ink-soft .eyebrow{color:rgba(250,247,242,.5)}
        .consultation-section--ink .eyebrow::before,.consultation-section--ink-soft .eyebrow::before{background:rgba(250,247,242,.4)}
        .consultation-section--ink p,.consultation-section--ink-soft p{color:rgba(250,247,242,.65)}

        .section-header{margin-bottom:64px}
        .section-title{font-family:var(--serif);font-size:clamp(2rem,3.8vw,3rem);font-weight:400;letter-spacing:-.025em;line-height:1.06;margin-top:16px;max-width:780px;font-variation-settings:"opsz" 144}
        .section-title em{font-style:italic;font-weight:300;color:var(--ink-mute)}
        .section-subtitle{margin-top:18px;font-size:16px;line-height:1.75;color:var(--ink-mute);max-width:560px}
        .consultation-section--ink .section-title,.consultation-section--ink-soft .section-title{color:var(--paper)}
        .consultation-section--ink .section-title em,.consultation-section--ink-soft .section-title em{color:rgba(250,247,242,.5)}
        .consultation-section--ink .section-subtitle,.consultation-section--ink-soft .section-subtitle{color:rgba(250,247,242,.6)}

        .monologue{max-width:780px;border-left:2px solid var(--paper-line);padding-left:32px}
        .monologue p{font-size:16px;line-height:1.85;color:var(--ink-soft);margin-bottom:20px}
        .monologue p:last-child{margin-bottom:0}
        .monologue .highlight{font-family:var(--serif);font-size:19px;font-style:italic;color:var(--ink);line-height:1.5}

        .pathway-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:48px}
        .pathway-card{background:var(--white);border:1px solid var(--paper-line);border-radius:var(--radius-lg);padding:28px;transition:border-color .2s,transform .2s}
        .pathway-card:hover{border-color:var(--signal-deep);transform:translateY(-2px)}
        .pathway-card-tag{font-family:var(--mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;padding:3px 10px;border-radius:100px;display:inline-block;margin-bottom:14px}
        .ptag-rcm{background:rgba(0,200,150,.1);color:var(--signal-deep)}
        .ptag-ar{background:rgba(245,158,11,.1);color:var(--amber-deep)}
        .ptag-ops{background:rgba(10,22,40,.07);color:var(--ink-soft)}
        .ptag-tech{background:rgba(124,58,237,.07);color:#5B21B6}
        .ptag-cred{background:rgba(214,69,69,.08);color:var(--danger)}
        .ptag-analytics{background:rgba(14,165,233,.1);color:#0369A1}
        .pathway-card h4{font-family:var(--serif);font-size:1.1rem;font-weight:400;color:var(--ink);margin-bottom:8px;line-height:1.3;font-variation-settings:"opsz" 72}
        .pathway-card p{font-size:13px;color:var(--ink-mute);line-height:1.65;margin-bottom:16px}
        .pathway-card-link{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--signal-deep);font-family:var(--mono);letter-spacing:.06em;text-transform:uppercase}
        .pathway-card-link svg{transition:transform .2s}
        .pathway-card:hover .pathway-card-link svg{transform:translateX(3px)}

        .decision-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:40px}
        .decision-card{background:var(--white);border:1px solid var(--paper-line);border-radius:var(--radius-lg);padding:20px 22px;cursor:pointer;transition:all .2s}
        .decision-card:hover{border-color:var(--signal);background:var(--signal-pale)}
        .dc-icon{font-size:22px;margin-bottom:10px}
        .dc-title{font-size:13px;font-weight:600;color:var(--ink);margin-bottom:4px}
        .dc-sub{font-size:11px;color:var(--ink-mute);line-height:1.5}

        .process-timeline{display:flex;flex-direction:column}
        .process-step{display:grid;grid-template-columns:48px 1fr;gap:0 24px;padding:28px 0;border-bottom:1px solid var(--paper-line);align-items:start}
        .process-step:last-child{border-bottom:none}
        .process-step-num{font-family:var(--mono);font-size:11px;color:var(--signal-deep);letter-spacing:.1em;padding-top:4px}
        .process-step h4{font-size:15px;font-weight:600;color:var(--ink);margin-bottom:6px}
        .process-step p{font-size:14px;color:var(--ink-mute);line-height:1.72}
        .consultation-section--ink .process-step{border-color:rgba(250,247,242,.1)}
        .consultation-section--ink .process-step h4{color:var(--paper)}
        .consultation-section--ink .process-step p{color:rgba(250,247,242,.6)}
        .consultation-section--ink .process-step-num{color:var(--signal)}

        .ai-split{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--paper-line);border-radius:var(--radius-lg);overflow:hidden;margin-top:48px}
        .ai-col{padding:36px}
        .ai-col--machine{background:var(--paper-warm)}
        .ai-col--human{background:var(--white)}
        .ai-col-label{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;margin-bottom:24px;padding-bottom:14px;border-bottom:1px solid var(--paper-line)}
        .ai-col--machine .ai-col-label{color:var(--signal-deep)}
        .ai-col--human .ai-col-label{color:var(--ink-mute)}
        .ai-items{display:flex;flex-direction:column;gap:14px}
        .ai-item{display:flex;gap:12px;align-items:flex-start}
        .ai-item-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;margin-top:6px}
        .ai-col--machine .ai-item-dot{background:var(--signal)}
        .ai-col--human .ai-item-dot{background:var(--ink)}
        .ai-item p{font-size:13px;color:var(--ink-mute);line-height:1.6}

        .outcome-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:48px}
        .outcome-card{padding:28px;background:var(--white);border:1px solid var(--paper-line);border-radius:var(--radius-lg)}
        .outcome-card-num{font-family:var(--serif);font-size:2.4rem;font-weight:400;color:var(--signal);line-height:1;margin-bottom:8px}
        .outcome-card h4{font-size:14px;font-weight:600;color:var(--ink);margin-bottom:6px}
        .outcome-card p{font-size:13px;color:var(--ink-mute);line-height:1.65}
        @media(max-width:1024px){.outcome-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:720px){.outcome-grid{grid-template-columns:1fr}}

        .pull-quote{font-family:var(--serif);font-size:clamp(1.1rem,2.2vw,1.45rem);font-style:italic;color:var(--ink);line-height:1.65;padding:28px 32px;border-left:3px solid var(--signal);background:var(--signal-pale);border-radius:0 var(--radius) var(--radius) 0;margin:40px 0;max-width:860px}

        .signal-band{background:var(--signal-pale);border:1px solid rgba(0,200,150,.2);border-radius:var(--radius-lg);padding:28px 36px;margin-top:48px;display:flex;align-items:flex-start;gap:20px}
        .sb-icon{width:36px;height:36px;background:rgba(0,200,150,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
        .sb-dot{width:10px;height:10px;border-radius:50%;background:var(--signal)}
        .sb-content h4{font-family:var(--serif);font-size:1.05rem;color:var(--ink);margin-bottom:6px;font-variation-settings:"opsz" 72}
        .sb-content p{font-size:14px;color:var(--ink-mute);line-height:1.7}

        .cta-section{background:var(--ink);padding:120px var(--gutter);text-align:center;position:relative;overflow:hidden}
        .cta-glow{position:absolute;bottom:-80px;left:50%;transform:translateX(-50%);width:600px;height:400px;background:radial-gradient(ellipse at center,rgba(0,200,150,.2),transparent 70%);pointer-events:none}
        .cta-inner{position:relative;z-index:1;max-width:680px;margin:0 auto}
        .cta-title{font-family:var(--serif);font-size:clamp(2.2rem,4.5vw,3.4rem);font-weight:400;letter-spacing:-.025em;line-height:1.06;color:var(--paper);margin:16px 0 24px;font-variation-settings:"opsz" 144}
        .cta-title em{font-style:italic;font-weight:300;color:rgba(250,247,242,.5)}
        .cta-text{font-size:16px;line-height:1.75;color:rgba(250,247,242,.6);margin-bottom:40px}
        .cta-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .trust-line{margin-top:28px;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,247,242,.35)}

        footer{background:var(--ink);color:rgba(250,247,242,.6);padding:60px 0 32px;border-top:1px solid rgba(255,255,255,.06)}
        .footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;font-size:13px}
        .footer-inner a{color:rgba(250,247,242,.6)}
        .footer-inner a:hover{color:var(--signal)}
        .footer-legal{display:flex;gap:24px}

        .related-strip{background:var(--paper-warm);border-top:1px solid var(--paper-line);padding:28px 0}
        .related-inner{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
        .related-label{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-mute)}
        .related-link{font-size:13px;color:var(--ink-soft);padding:5px 14px;border:1px solid var(--paper-line);border-radius:100px;background:var(--white);transition:border-color .2s,color .2s}
        .related-link:hover{border-color:var(--signal-deep);color:var(--signal-deep)}

        @media(max-width:1024px){
          .consultation-hero-inner{grid-template-columns:1fr}
          .consultation-hero-visual{display:none}
          .two-col{grid-template-columns:1fr;gap:40px}
          .three-col{grid-template-columns:1fr}
          .ai-split{grid-template-columns:1fr}
        }
        @media(max-width:720px){
          .consultation-section{padding:64px 0}
          .consultation-hero{padding:110px 0 72px}
          .cta-section{padding:80px var(--gutter)}
          .section-header{margin-bottom:40px}
          .nav-links{display:none}
          .decision-grid{grid-template-columns:1fr 1fr}
          .pathway-grid{grid-template-columns:1fr}
        }
      `}</style>



            <main>
                <section className="consultation-hero">
                    <div className="consultation-hero-bg">
                        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                        <div className="consultation-hero-grain"></div>
                    </div>
                    <div className="consultation-hero-inner">
                        <div className="consultation-hero-content">
                            <div className="eyebrow">Consultation · Explore Partnership</div>
                            <h1 className="consultation-hero-title reveal reveal-2">
                                Before you commit to a service model,
                                <em>understand whether it actually fits your organization.</em>
                            </h1>
                            <p className="consultation-hero-subtitle reveal reveal-3">
                                Most healthcare organizations know they need operational support. Fewer know which kind, at which level, built around which systems and workflows. A partnership that does not fit the actual operational reality of your organization will either underdeliver or create its own overhead.
                            </p>
                            <p className="consultation-hero-lede reveal reveal-3">
                                Hired Billing Support helps you explore a partnership model built around your actual workflow, specialty, payer mix, systems, and growth stage — before recommending anything.
                            </p>
                            <div className="consultation-hero-actions reveal reveal-4">
                                <a href="#cta" className="btn btn-primary btn-lg">
                                    Explore a partnership
                                    <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M13 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a href="#who" className="btn btn-ghost btn-lg">See who this is for</a>
                            </div>
                        </div>
                        <div className="consultation-hero-visual reveal reveal-4" style={{ animationDelay: '.55s' }}>
                            <div className="cp-card">
                                <div className="cp-header">
                                    <div className="cp-header-label">— Partnership Consultation · Pre-Engagement Review</div>
                                    <div className="cp-main-row">
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                                            <span className="cp-big">4</span>
                                            <span className="cp-unit">partnership models available</span>
                                        </div>
                                        <span className="cp-trend">
                                            <span className="cp-trend-dot"></span>Custom configurations welcome
                                        </span>
                                    </div>
                                    <div className="cp-header-sub">Adapted to your workflow · Not a preset package</div>
                                </div>
                                <div className="cp-body">
                                    <div className="cp-grid">
                                        <div className="cp-metric">
                                            <div className="cp-m-label">Embedded RCM</div>
                                            <div className="cp-m-value sig">Full-cycle</div>
                                            <div className="cp-spark"><div className="cp-spark-fill spark-sig" style={{ width: '100%' }}></div></div>
                                        </div>
                                        <div className="cp-metric">
                                            <div className="cp-m-label">AR + Denials</div>
                                            <div className="cp-m-value sig">Recovery</div>
                                            <div className="cp-spark"><div className="cp-spark-fill spark-sig" style={{ width: '90%' }}></div></div>
                                        </div>
                                        <div className="cp-metric">
                                            <div className="cp-m-label">Credentialing</div>
                                            <div className="cp-m-value amb">+ Enrollment</div>
                                            <div className="cp-spark"><div className="cp-spark-fill spark-amb" style={{ width: '80%' }}></div></div>
                                        </div>
                                        <div className="cp-metric">
                                            <div className="cp-m-label">Operations</div>
                                            <div className="cp-m-value lite">+ Analytics</div>
                                            <div className="cp-spark"><div className="cp-spark-fill spark-lite" style={{ width: '85%' }}></div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cp-queue">
                                    <div className="cp-queue-title">Partnership Consultation Pathway</div>
                                    <div className="cp-queue-row">
                                        <div className="cp-q-dot" style={{ background: 'var(--signal)' }}></div>
                                        <span className="cp-q-lbl">Step 1 — Operational context review</span>
                                        <span className="cp-q-badge badge-ok">First call</span>
                                    </div>
                                    <div className="cp-queue-row">
                                        <div className="cp-q-dot" style={{ background: 'var(--signal)' }}></div>
                                        <span className="cp-q-lbl">Step 2 — Workflow and pressure mapping</span>
                                        <span className="cp-q-badge badge-ok">No commitment</span>
                                    </div>
                                    <div className="cp-queue-row">
                                        <div className="cp-q-dot" style={{ background: 'var(--signal)' }}></div>
                                        <span className="cp-q-lbl">Step 3 — Partnership model recommendation</span>
                                        <span className="cp-q-badge badge-ok">Built for you</span>
                                    </div>
                                    <div className="cp-queue-row">
                                        <div className="cp-q-dot" style={{ background: 'var(--amber)' }}></div>
                                        <span className="cp-q-lbl">Step 4 — Engagement starts on your terms</span>
                                        <span className="cp-q-badge badge-warn">When ready</span>
                                    </div>
                                </div>
                                <div className="cp-footer">
                                    <span className="cp-footer-pill">
                                        <span className="cp-footer-pulse"></span>
                                        The consultation costs nothing. The wrong model costs everything.
                                    </span>
                                    <span className="cp-footer-right">No pressure</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="consultation-section" id="who">
                    <div className="container">
                        <div className="section-header fade-in">
                            <div className="eyebrow">Who this is for</div>
                            <h2 className="section-title">
                                Explore Partnership is for healthcare organizations <em>that know they need support — but are not sure what kind.</em>
                            </h2>
                            <p className="section-subtitle">
                                This is not a page for organizations that already know exactly which service they need. It is for organizations that want to understand how an embedded operations partner would fit before committing to anything.
                            </p>
                        </div>
                        <div className="decision-grid fade-in">
                            {[
                                { icon: '🏥', title: 'Medical Practices', sub: 'Solo to large group, all specialties, looking for billing and operations depth' },
                                { icon: '🏢', title: 'MSOs & Health Systems', sub: 'Multi-entity, multi-provider, needing standardized backend infrastructure' },
                                { icon: '⚕️', title: 'FQHCs & Safety Net', sub: 'Mission-driven, complex payer mix, limited administrative capacity' },
                                { icon: '🔄', title: 'Healthcare Payers', sub: 'Payer operations teams needing scalable backend processing support' },
                                { icon: '🧪', title: 'Labs & Imaging Centers', sub: 'Order intake, authorization management, and billing handoff support' },
                                { icon: '🤝', title: 'Marketplace Partners', sub: 'Platforms and agencies needing backend execution for healthcare clients' },
                                { icon: '💻', title: 'Developers & Healthtech', sub: 'Technical teams needing healthcare operations context and implementation support' },
                                { icon: '🏗️', title: 'New Practices', sub: 'Startup practices building backend infrastructure before launch' },
                            ].map((item, index) => (
                                <div className="decision-card" key={index}>
                                    <div className="dc-icon">{item.icon}</div>
                                    <div className="dc-title">{item.title}</div>
                                    <div className="dc-sub">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="consultation-section consultation-section--warm">
                    <div className="container">
                        <div className="section-header fade-in">
                            <div className="eyebrow">Why organizations explore before they commit</div>
                            <h2 className="section-title">The wrong operational support model <em>creates its own problems.</em></h2>
                        </div>
                        <div className="monologue fade-in">
                            <p>Most healthcare organizations that have had a poor vendor experience describe it the same way. The vendor had a process. The organization had a different process. The vendor did not adapt. The workflow conflicts created rework, exceptions, and communication breakdowns. The organization spent more time managing the vendor relationship than the vendor saved them in operational overhead.</p>
                            <p>A healthcare operations partnership that does not start with understanding your actual workflow, your specific payer mix, your current systems, and your particular pressure points is not a partnership — it is a service contract applied to a situation the vendor never fully understood.</p>
                            <p className="highlight">"The right support model starts with understanding your organization, not forcing your team into a prebuilt package. That is what the consultation is for."</p>
                            <p>Before any recommendation is made, HBS starts by understanding what your organization actually needs — which operational functions are creating the most pressure, which systems you use, which payers you work with, and what your team is capable of managing internally versus where external support would genuinely help.</p>
                        </div>
                    </div>
                </section>

                <section className="consultation-section">
                    <div className="container">
                        <div className="section-header fade-in">
                            <div className="eyebrow">Specific reasons to explore first</div>
                            <h2 className="section-title">The partnership questions <em>worth answering before you commit.</em></h2>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '48px' }} className="fade-in">
                            {[
                                {
                                    num: '01',
                                    title: 'Your organization has a specific EHR, billing system, and workflow that vendors rarely adapt to',
                                    text: 'The operational support that works inside your specific EHR, billing platform, and administrative structure is not the same as generic billing support applied to a different system. If a vendor\'s team will not work inside your actual tools, the integration creates friction rather than relief.'
                                },
                                {
                                    num: '02',
                                    title: 'Your payer mix and specialty create billing rules that require specific knowledge',
                                    text: 'A cardiology practice, an FQHC, and an orthopedic group all need billing support — but the authorization complexity, coding requirements, payer relationships, and documentation standards are completely different. Generic support applied to a specialty-specific problem underperforms on the specific problems that matter most.'
                                },
                                {
                                    num: '03',
                                    title: 'You want to scale without building an internal department, but you are not sure which functions to outsource first',
                                    text: 'Not every function needs external support simultaneously. Starting with the highest-pressure point — the one where internal capacity is most strained and the revenue impact is most direct — produces faster results than a full-service engagement that begins everywhere at once.'
                                },
                                {
                                    num: '04',
                                    title: 'Leadership wants to understand the model before committing resources',
                                    text: 'A healthcare executive or practice owner who has been through a failed vendor relationship is appropriately cautious. Understanding how the engagement is structured, how communication works, how performance is measured, and what the exit looks like before committing is not overthinking — it is appropriate due diligence.'
                                },
                                {
                                    num: '05',
                                    title: 'The organization has tried support before and it did not adapt to the team\'s actual workflow',
                                    text: 'Most failed billing vendor relationships share a common structure: the vendor had one way of doing things, the practice had a different way, and the friction between them never fully resolved. Exploring how HBS would specifically adapt to your workflow — not theoretically, but in practical terms — is the right first conversation before any engagement begins.'
                                }
                            ].map((item, index) => (
                                <div key={index} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '0 24px', padding: '28px 0', borderBottom: index < 4 ? '1px solid var(--paper-line)' : 'none', alignItems: 'start' }}>
                                    <div style={{ fontFamily: 'var(--serif)', fontSize: '13px', color: 'var(--ink-mute)', paddingTop: '3px' }}>{item.num}</div>
                                    <div>
                                        <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--ink-mute)', lineHeight: 1.72 }}>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="consultation-section consultation-section--ink" id="models">
                    <div className="container">
                        <div className="section-header fade-in">
                            <div className="eyebrow">Partnership models HBS can support</div>
                            <h2 className="section-title">Every model adapted to <em>your organization's actual operational structure.</em></h2>
                            <p className="section-subtitle">These are not fixed packages. They are partnership structures that can be combined, scoped, and adapted based on the consultation.</p>
                        </div>
                        <div className="pathway-grid fade-in" style={{ marginTop: 0 }}>
                            {[
                                { tag: 'ptag-rcm', tagText: 'Billing & RCM', title: 'Embedded RCM Operations', desc: 'Full revenue cycle management — charge entry, claim submission, payer follow-up, payment posting, denial management, and AR — as an embedded team inside your workflow.', link: '/solutions/medical-billing-rcm', linkText: 'Explore RCM support' },
                                { tag: 'ptag-ar', tagText: 'AR & Recovery', title: 'AR Recovery Partnership', desc: 'Targeted AR recovery — aging bucket analysis, payer follow-up, denial appeals, and old AR recovery — for organizations with revenue sitting uncollected in the cycle.', link: '/solutions/ar-management', linkText: 'Explore AR recovery' },
                                { tag: 'ptag-cred', tagText: 'Credentialing', title: 'Credentialing & Enrollment', desc: 'Provider credentialing, payer enrollment, recredentialing management, and CAQH maintenance — keeping providers billing-active without internal staff managing the timeline.', link: '/solutions/provider-credential', linkText: 'Explore credentialing' },
                                { tag: 'ptag-ops', tagText: 'Operations', title: 'Practice Operations Support', desc: 'Prior authorization, eligibility verification, scheduling support, SOP development, and daily administrative workflow management — the operational layer between clinical care and billing.', link: '/solutions/operations-management', linkText: 'Explore operations' },
                                { tag: 'ptag-analytics', tagText: 'Analytics', title: 'Analytics & Compliance', desc: 'Operational reporting, RCM analytics, denial trend analysis, payer performance visibility, and compliance-aware billing operations — for organizations that need better insight to manage better.', link: '/solutions/analytics-reporting', linkText: 'Explore analytics' },
                                { tag: 'ptag-tech', tagText: 'Enterprise / Partner', title: 'Enterprise or Partner Model', desc: 'For payer organizations, health systems, marketplace partners, and healthcare technology teams that need a scalable backend operations partner across multiple clients, functions, or workflows.', link: '/who-we-serve/hbs-marketing', linkText: 'Explore partner model' },
                            ].map((card, index) => (
                                <div key={index} className="pathway-card" style={{ background: 'rgba(255,255,255,.04)', borderColor: 'rgba(255,255,255,.1)' }}>
                                    <span className={`pathway-card-tag ${card.tag}`}>{card.tagText}</span>
                                    <h4 style={{ color: 'var(--paper)' }}>{card.title}</h4>
                                    <p style={{ color: 'rgba(250,247,242,.6)' }}>{card.desc}</p>
                                    <a href={card.link} className="pathway-card-link" style={{ color: 'var(--signal)' }}>
                                        {card.linkText}
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M13 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="consultation-section" id="how">
                    <div className="container">
                        <div className="section-header fade-in">
                            <div className="eyebrow">How the consultation works</div>
                            <h2 className="section-title">A structured operational review. <em>Not a sales call.</em></h2>
                            <p className="section-subtitle">The consultation is designed to help you understand what the right partnership would look like for your specific organization — and whether HBS is the right fit for it.</p>
                        </div>
                        <div className="process-timeline fade-in" style={{ maxWidth: '780px' }}>
                            {[
                                { num: '01', title: 'Operational context conversation — what is actually happening', text: 'We start with your organization\'s operational reality — what functions are under the most pressure, which revenue cycle steps are creating the most friction, what your team is managing well, and where capacity is the limiting factor. This is a conversation, not an intake form.' },
                                { num: '02', title: 'Systems, workflow, and payer environment review', text: 'We ask about your EHR, billing software, payer mix, specialty, patient volume, credentialing status, and existing staff structure — because the right support model depends on these specifics. Support that works for one practice may not work for another with a different system or payer environment.' },
                                { num: '03', title: 'Operational pressure mapping — what to address first', text: 'Based on the conversation, we identify which functions would have the highest impact if supported externally. Sometimes it is billing. Sometimes it is AR. Sometimes it is credentialing delays or prior authorization volume. The first step should address the highest-pressure point, not the most comprehensive list.' },
                                { num: '04', title: 'Partnership model recommendation — built around your reality', text: 'We recommend a partnership structure based on what we heard — which functions, at what scope, using which systems, with what communication cadence, and at what engagement structure. You receive a specific recommendation, not a package menu.' },
                                { num: '05', title: 'You decide whether and how to proceed — on your timeline', text: 'The consultation produces clarity, not commitment. If the model fits, we agree on how to begin. If it does not fit — or if the timing is not right — we say so clearly and leave the relationship open for when it is.' }
                            ].map((step, index) => (
                                <div key={index} className="process-step">
                                    <div className="process-step-num">{step.num}</div>
                                    <div>
                                        <h4>{step.title}</h4>
                                        <p>{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="consultation-section consultation-section--warm">
                    <div className="container">
                        <div className="section-header fade-in">
                            <div className="eyebrow">The AI + human advantage in our consultation process</div>
                            <h2 className="section-title">Structured intake. <em>Human judgment on every recommendation.</em></h2>
                        </div>
                        <div className="ai-split fade-in">
                            <div className="ai-col ai-col--machine">
                                <div className="ai-col-label">AI-assisted consultation intake</div>
                                <div className="ai-items">
                                    {[
                                        'Operational intake questionnaire routing and data organization',
                                        'Revenue cycle pressure pattern identification from intake responses',
                                        'Service pathway matching based on organizational profile',
                                        'Partnership model comparison and configuration support',
                                        'Consultation scheduling and follow-up communication',
                                        'Proposal and engagement document preparation support'
                                    ].map((text, index) => (
                                        <div key={index} className="ai-item">
                                            <div className="ai-item-dot"></div>
                                            <p>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="ai-col ai-col--human">
                                <div className="ai-col-label">Human consultation specialists</div>
                                <div className="ai-items">
                                    {[
                                        'Operational context interview and workflow discussion',
                                        'Healthcare-specific judgment on which pressure point to address first',
                                        'Payer, specialty, and system-specific partnership model design',
                                        'Honest assessment of fit — including when HBS is not the right answer',
                                        'Transition planning and onboarding structure design',
                                        'Long-term relationship management and performance review'
                                    ].map((text, index) => (
                                        <div key={index} className="ai-item">
                                            <div className="ai-item-dot"></div>
                                            <p>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="pull-quote fade-in">
                            "A consultation that recommends the same service regardless of what you say is not a consultation — it is a sales pitch with extra steps. The value of a real operational consultation is that it might tell you to start somewhere different than you expected, or that you do not need what you thought you needed."
                        </div>
                    </div>
                </section>

                <section className="consultation-section" id="results">
                    <div className="container">
                        <div className="section-header fade-in">
                            <div className="eyebrow">What comes out of the consultation</div>
                            <h2 className="section-title">Clarity on the right support model. <em>Confidence before commitment.</em></h2>
                        </div>
                        <div className="outcome-grid fade-in">
                            {[
                                { num: '◎', title: 'A clear picture of your operational pressure points', text: 'The consultation identifies where your revenue cycle or operations are under the most strain — not what you assumed from the outside, but what the actual data and workflow discussion reveals.' },
                                { num: '✓', title: 'A specific partnership model recommendation', text: 'Not a package menu — a recommendation for which functions to support, at what scope, in which systems, with what cadence, adapted to your specific organization.' },
                                { num: '→', title: 'A clear first step — where to start and why', text: 'The right first step in a partnership is the one that addresses the highest-pressure point first. The consultation identifies that step with the specific reasoning behind the recommendation.' },
                                { num: '$', title: 'Visibility into the revenue impact of the right model', text: 'For most organizations, the right operational support model has a measurable revenue impact — through collection rate improvement, AR recovery, denial reduction, or credentialing timeline acceleration.' },
                                { num: '⚡', title: 'Confidence that the model fits before the engagement begins', text: 'The consultation de-risks the decision — you understand exactly how HBS would work inside your organization before any commitment is made.' },
                                { num: '↓', title: 'An honest answer — even if it is not what you expected', text: 'If HBS is not the right fit for your organization, we say so clearly. The consultation is designed to produce the right outcome for you, not the preferred commercial outcome for us.' }
                            ].map((outcome, index) => (
                                <div key={index} className="outcome-card">
                                    <div className="outcome-card-num">{outcome.num}</div>
                                    <h4>{outcome.title}</h4>
                                    <p>{outcome.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="consultation-section consultation-section--warm">
                    <div className="container">
                        <div className="signal-band fade-in">
                            <div className="sb-icon"><div className="sb-dot"></div></div>
                            <div className="sb-content">
                                <h4>Not sure if this is the right page for you?</h4>
                                <p>If you already know which service you need and want to explore the specific options, the <a href="/find-service" style={{ color: 'var(--signal-deep)', fontWeight: 600 }}>Find Services</a> page will guide you through a service-matching process based on your specific operational problem. Both pages lead to the same consultation — just through different starting points.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <section className="cta-section" id="cta">
                <div className="cta-glow"></div>
                <div className="cta-inner">
                    <div className="eyebrow eyebrow--light" style={{ justifyContent: 'center' }}>Book a partnership consultation</div>
                    <h2 className="cta-title">The consultation is free. <em>The right model is priceless.</em></h2>
                    <p className="cta-text">We start with a 30-45 minute operational context conversation — no intake form, no pre-packaged pitch. You describe your organization, your current operational pressure, and what you are trying to accomplish. We tell you what the right partnership model would look like and whether HBS is the right partner to deliver it.</p>
                    <div className="cta-actions">
                        <a href="/contact" className="btn btn-light btn-lg">
                            Explore a partnership
                            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="/contact" className="btn btn-ghost btn-lg" style={{ color: 'var(--paper)', borderColor: 'rgba(250,247,242,.25)' }}>Discuss your operating model</a>
                    </div>
                    <div className="trust-line">No commitment required · No sales pressure · Honest fit assessment · HIPAA · BAA available</div>
                </div>
            </section>




        </>
    );
}