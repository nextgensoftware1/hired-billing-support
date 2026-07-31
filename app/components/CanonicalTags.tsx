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

  return <link rel="canonical" href={canonicalHref} />;
}
