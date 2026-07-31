'use client';

import { useEffect, useRef, useState } from 'react';

type Testimonial = {
  quote: string;
  avatar: string;
  name: string;
  role: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length === 0) return;

    let visibleSlides = 1;

    const updateTransform = () => {
      const firstCard = cards[0];
      const trackStyle = window.getComputedStyle(track);
      const gapValue = Number.parseFloat(trackStyle.columnGap || trackStyle.gap || '40') || 40;
      const cardWidthNoGap = firstCard.getBoundingClientRect().width;
      const containerWidth = track.parentElement?.getBoundingClientRect().width || track.getBoundingClientRect().width;

      visibleSlides = Math.max(1, Math.floor((containerWidth + gapValue) / (cardWidthNoGap + gapValue)));
      const maxIndex = Math.max(0, testimonials.length - visibleSlides);
      const index = Math.min(activeIndex, maxIndex);

      if (index !== activeIndex) {
        setActiveIndex(index);
      }

      track.style.transition = 'transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
      track.style.transform = `translateX(-${index * (cardWidthNoGap + gapValue)}px)`;
    };

    const handleResize = () => {
      window.requestAnimationFrame(updateTransform);
    };

    const handleVisibility = () => {
      if (document.hidden) return;
      window.requestAnimationFrame(updateTransform);
    };

    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(handleResize) : null;

    if (resizeObserver) {
      resizeObserver.observe(track);
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    document.addEventListener('visibilitychange', handleVisibility);

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = current + 1;
        const maxIndex = Math.max(0, testimonials.length - visibleSlides);
        return nextIndex > maxIndex ? 0 : nextIndex;
      });
    }, 5000);

    window.requestAnimationFrame(updateTransform);
    window.setTimeout(updateTransform, 150);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      resizeObserver?.disconnect();
    };
  }, [activeIndex, testimonials.length]);

  return (
    <section className="block">
      <div className="container">
        {/* <div className="block-head fade-in">
          <div className="eyebrow">In their own words</div>
          <h2 className="display">From physicians who got their <em>evenings back.</em></h2>
        </div> */}
        <div className="testimonial-slider fade-in">
          <div className="testi-track" ref={trackRef}>
            {testimonials.map((testi, idx) => (
              <div key={`${testi.name}-${idx}`} className="testi">
                <div className="testi-quote">{testi.quote}</div>
                <div className="testi-attr">
                  <div className="testi-avatar">{testi.avatar}</div>
                  <div>
                    <div className="testi-name">{testi.name}</div>
                    <div className="testi-role">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-dots" style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '999px',
                  border: '0',
                  background: idx === activeIndex ? 'var(--signal)' : 'rgba(10, 22, 40, 0.2)',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
