import { useState } from 'react';
import './banner.css';

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    'linear-gradient(to right, #06327d 40%, #209d5c)', 
    '#209d5c', 
    '#06327d'
  ];

  function handleSlideChange(direction) {
    if (direction === 'next') {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  }

  return (
    <section className='banner'>
      <button className="slide-arrow left" onClick={() => handleSlideChange('prev')}>
        &#8249;
      </button>

      <ul className="slides-container">
        {slides.map((gradient, index) => (
          <li
            key={index}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={{ background: gradient }}
          ></li>
        ))}
      </ul>

      <button className="slide-arrow right" onClick={() => handleSlideChange('next')}>
        &#8250;
      </button>

      <ul className="pagination-container">
        {slides.map((_, index) => (
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