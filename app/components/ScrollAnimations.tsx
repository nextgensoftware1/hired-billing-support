// app/components/ScrollAnimations.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    let fadeObserver: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Initialize fade-in observer
    const initializeObservers = () => {
      // Create observer
      fadeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              fadeObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
      );

      // Observe all fade-in elements
      const fadeInElements = document.querySelectorAll('.fade-in');
      fadeInElements.forEach((el) => {
        fadeObserver?.observe(el);
      });

      // Force visibility for elements already in viewport
      fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in');
        }
      });
    };

    // Use small delay to ensure DOM is fully ready after route change
    timeoutId = setTimeout(initializeObservers, 100);

    // Cleanup function
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (fadeObserver) fadeObserver.disconnect();
    };
  }, [pathname]); // Re-run when pathname changes

  return null; // This component doesn't render anything
}