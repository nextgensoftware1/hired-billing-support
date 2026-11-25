'use client';

import { useEffect } from 'react';

const COOKIE_NAME = 'hbs_attribution';
const ATTRIBUTION_KEYS = [
  'gclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

function readCookie(name: string) {
  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : '';
}

export default function AttributionCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      let saved: Record<string, string> = {};

      try {
        saved = JSON.parse(readCookie(COOKIE_NAME) || '{}');
      } catch {
        saved = {};
      }

      const next = { ...saved };
      ATTRIBUTION_KEYS.forEach((key) => {
        const value = params.get(key)?.trim();
        if (value) next[key] = value;
      });

      if (!next.landing_page) {
        next.landing_page = `${window.location.pathname}${window.location.search}`;
      }
      if (!next.referrer) {
        next.referrer = document.referrer || '';
      }

      document.cookie =
        `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(next))}; ` +
        `Max-Age=${90 * 24 * 60 * 60}; Path=/; SameSite=Lax`;

      document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const anchor = target.closest('a');
        if (!anchor) return;

        try {
          if (anchor.href.startsWith('tel:')) {
            (window as typeof window & { dataLayer?: unknown[] }).dataLayer?.push({
              event: 'phone_click',
              page_path: window.location.pathname,
            });
          } else if (anchor.matches('.btn')) {
            (window as typeof window & { dataLayer?: unknown[] }).dataLayer?.push({
              event: 'cta_click',
              button_location: window.location.pathname,
            });
          }
        } catch {
          // Analytics must never block navigation.
        }
      });
    } catch {
      // Attribution and analytics are optional.
    }
  }, []);

  return null;
}
