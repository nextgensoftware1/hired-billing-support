/**
 * Testimonial Slider Module
 * Handles automatic and manual navigation of testimonial carousel
 */

class TestimonialSlider {
  constructor() {
    this.slider = document.querySelector('.testi-slider-inner');
    this.prevBtn = document.querySelector('.slider-prev');
    this.nextBtn = document.querySelector('.slider-next');
    this.testimonials = document.querySelectorAll('.testi');
    this.currentIndex = 0;
    this.autoRotateInterval = null;
    this.autoRotateDelay = 5000; // 5 seconds

    if (this.slider && this.prevBtn && this.nextBtn && this.testimonials.length > 0) {
      this.init();
    }
  }

  init() {
    // Bind event listeners
    this.prevBtn.addEventListener('click', () => this.goToPrevious());
    this.nextBtn.addEventListener('click', () => this.goToNext());

    // Start auto-rotation
    this.startAutoRotate();

    // Pause auto-rotation on hover
    this.slider.parentElement.addEventListener('mouseenter', () => this.stopAutoRotate());
    this.slider.parentElement.addEventListener('mouseleave', () => this.startAutoRotate());
  }

  updateSlider() {
    const offset = this.currentIndex * 100;
    this.slider.style.transform = `translateX(-${offset}%)`;
  }

  goToPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.updateSlider();
    this.restartAutoRotate();
  }

  goToNext() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.updateSlider();
    this.restartAutoRotate();
  }

  startAutoRotate() {
    if (this.autoRotateInterval) return; // Already running
    
    this.autoRotateInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      this.updateSlider();
    }, this.autoRotateDelay);
  }

  stopAutoRotate() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }

  restartAutoRotate() {
    this.stopAutoRotate();
    this.startAutoRotate();
  }

  destroy() {
    this.stopAutoRotate();
    this.prevBtn?.removeEventListener('click', () => this.goToPrevious());
    this.nextBtn?.removeEventListener('click', () => this.goToNext());
  }
}

// Initialize slider when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new TestimonialSlider();
    });
  } else {
    new TestimonialSlider();
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TestimonialSlider;
}
