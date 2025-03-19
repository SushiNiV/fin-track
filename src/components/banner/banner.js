import { useState } from 'react';
import './banner.css';

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const colorSlides = ['red', 'orange', 'yellow', 'green', 'blue']; // Color-based slides

  function handleSlideChange(direction) {
    if (direction === 'next') {
      setActiveSlide((prev) => (prev === colorSlides.length - 1 ? 0 : prev + 1));
    } else {
      setActiveSlide((prev) => (prev === 0 ? colorSlides.length - 1 : prev - 1));
    }
  }

  return (
    <section className='banner'>
      {/* Left Arrow */}
      <button className="slide-arrow left" onClick={() => handleSlideChange('prev')}>
        &#8249;
      </button>

      {/* Slide Container */}
      <ul className="slides-container">
        {colorSlides.map((color, index) => (
          <li
            key={index}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundColor: color }}
          ></li>
        ))}
      </ul>

      {/* Right Arrow */}
      <button className="slide-arrow right" onClick={() => handleSlideChange('next')}>
        &#8250;
      </button>

      {/* Pagination Dots */}
      <ul className="pagination-container">
        {colorSlides.map((_, index) => (
          <li
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
          ></li>
        ))}
      </ul>
    </section>
  );
}