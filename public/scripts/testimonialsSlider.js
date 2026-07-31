/**
 * Testimonials Slider Module
 * Handles the continuous loop of the testimonial carousel.
 */

class TestimonialsSlider {
  constructor() {
    this.track = null;
    this.cards = [];
    this.currentIndex = 0;
    this.autoRotateInterval = null;
    this.autoRotateDelay = 4000;
    this.originalCardCount = 4;
    this.isInitialized = false;
    this.resizeObserver = null;

    this.init();
  }

  init() {
    if (this.isInitialized) return;

    this.track = document.querySelector('.testi-track');
    this.cards = Array.from(document.querySelectorAll('.testi'));

    if (!this.track || this.cards.length === 0) {
      return;
    }

    this.isInitialized = true;
    this.currentIndex = 0;
    this.track.style.transition = 'none';
    this.track.style.willChange = 'transform';

    this.bindEvents();
    this.updateSlider();

    window.requestAnimationFrame(() => {
      this.updateSlider();
      this.startAutoRotate();
    });

    window.setTimeout(() => this.updateSlider(), 150);
  }

  bindEvents() {
    window.addEventListener('resize', () => this.updateSlider());
    window.addEventListener('load', () => this.updateSlider());

    if (typeof ResizeObserver !== 'undefined' && this.track) {
      this.resizeObserver = new ResizeObserver(() => this.updateSlider());
      this.resizeObserver.observe(this.track);
    }

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopAutoRotate();
      } else {
        this.startAutoRotate();
      }
    });
  }

  getCardWidth() {
    if (!this.track || this.cards.length === 0) return 0;

    const firstCard = this.cards[0];
    const trackStyle = window.getComputedStyle(this.track);
    const gapValue = parseFloat(trackStyle.columnGap || trackStyle.gap || '40') || 40;

    return firstCard.getBoundingClientRect().width + gapValue;
  }

  updateSlider() {
    if (!this.track || this.cards.length === 0) return;

    const cardWidth = this.getCardWidth();
    if (!cardWidth) return;

    this.track.style.transform = `translateX(-${this.currentIndex * cardWidth}px)`;
  }

  nextSlide() {
    if (!this.track || this.cards.length === 0) return;

    this.currentIndex++;
    const cardWidth = this.getCardWidth();

    if (!cardWidth) return;

    const shouldReset = this.currentIndex >= this.originalCardCount;

    this.track.style.transition = 'transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
    this.updateSlider();

    if (shouldReset) {
      window.setTimeout(() => {
        this.track.style.transition = 'none';
        this.currentIndex = 0;
        this.updateSlider();
      }, 800);
    }
  }

  startAutoRotate() {
    if (this.autoRotateInterval) return;

    this.autoRotateInterval = window.setInterval(() => {
      this.nextSlide();
    }, this.autoRotateDelay);
  }

  stopAutoRotate() {
    if (this.autoRotateInterval) {
      window.clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }

  destroy() {
    this.stopAutoRotate();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}

let sliderInstance = null;

function initializeTestimonialsSlider() {
  if (sliderInstance || typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const start = () => {
    if (sliderInstance) return;
    sliderInstance = new TestimonialsSlider();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    window.requestAnimationFrame(start);
  }
}

initializeTestimonialsSlider();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TestimonialsSlider;
}
