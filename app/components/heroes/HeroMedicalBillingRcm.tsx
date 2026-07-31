'use client';

import React from 'react';
import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroMedicalBillingRcm({ solution }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#0A1628"
                strokeWidth="0.5"
                opacity="0.08"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="hero-grain"></div>
      </div>
      <div className="hero-inner">
        <div>
          {solution.hero && (
            <>
              <div className="eyebrow reveal reveal-1">{solution.hero.eyebrow}</div>
              <h1 className="display reveal reveal-2" style={{ marginTop: "20px" }} dangerouslySetInnerHTML={{ __html: solution.hero.title }} />
               <p className="sub reveal reveal-3" >{solution.hero.subtitle}</p>
              <p className="lede reveal reveal-3" >{solution.hero.description}</p>
               <div className="hero-actions reveal reveal-4" >
                <a href="/contact" className="btn btn-primary btn-lg">
                  Contact us
                  <svg
                    className="arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#services" className="btn btn-ghost btn-lg">
                  Services
                </a>
              </div>
            </>
          )}
        </div>
        {solution.hero && (
        <div className="reveal reveal-4" style={{ animationDelay: '0.55s' }}>
        <div className="hero-card">
  <h4>
    — Practice Revenue Snapshot · 30-day
  </h4>

  <div className="ar-card-row ar-green">
    <span className="ar-lbl">
      Billed
    </span>

    <div className="ar-bar">
      <span style={{ width: '100%' }}></span>
    </div>

    <span className="ar-val">
      $198K
    </span>
  </div>

  <div className="ar-card-row ar-amber">
    <span className="ar-lbl">
      Before HBS
    </span>

    <div className="ar-bar">
      <span style={{ width: '71%' }}></span>
    </div>

    <span className="ar-val">
      $141K
    </span>
  </div>

  <div className="ar-card-row ar-green">
    <span className="ar-lbl">
      With HBS
    </span>

    <div className="ar-bar">
      <span style={{ width: '95%' }}></span>
    </div>

    <span className="ar-val">
      $189K
    </span>
  </div>

  <div
    className="gap-callout"
    style={{ marginTop: '20px' }}
  >
    <div className="gc-lbl">
      — Revenue recovered monthly
    </div>

    <div className="gc-val">
      $48,000 — the production-to-collection gap, closed.
    </div>
  </div>

  <div
    style={{
      marginTop: '14px',
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
    }}
  >
    <span className="card-tag before">
      71% COLLECTION RATE
    </span>

    <span className="card-tag after">
      95% COLLECTION RATE
    </span>
  </div>
</div>
        </div>
        )}
      </div>
    </section>
  );
}
