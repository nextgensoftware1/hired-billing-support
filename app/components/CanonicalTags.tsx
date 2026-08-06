'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export default function CanonicalTags() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const canonicalHref = useMemo(() => {
    const baseUrl = 'https://www.hiredbillingsupport.com';
    const path = pathname || '/';
    const query = searchParams?.toString();

    return `${baseUrl}${path}${query ? `?${query}` : ''}`;
  }, [pathname, searchParams]);

  const shouldRenderCanonical = useMemo(() => {
    if (!pathname) return true;

    // These dynamic routes already provide self-referencing canonical tags via
    // Next.js metadata API and should not render the global tag again.
    return !/^\/(solutions|who-we-serve|blog)\/[^^/]+$/.test(pathname);
  }, [pathname]);

  if (!shouldRenderCanonical) {
    return null;
  }

  return <link rel="canonical" href={canonicalHref} />;
}
