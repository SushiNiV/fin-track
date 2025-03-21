import { useState, useEffect } from 'react';
import './banner2.css';

export default function Banner2() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = ['#00FF00', '#FFFFFF', '#FF0000'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  function handleSlideChange(direction) {
    setActiveSlide((prev) => {
      if (direction === 'next') return prev === slides.length - 1 ? 0 : prev + 1;
      return prev === 0 ? slides.length - 1 : prev - 1;
    });
  }

  return (
    <section className='banner2'>
      <button className="slide-arrow2 left2" onClick={() => handleSlideChange('prev')}>
        &#8249;
      </button>

      <ul className="slides-container2">
        {slides.map((color, index) => (
          <li
            key={index}
            className={`slide2 ${index === activeSlide ? 'active2' : ''}`}
            style={{ background: color }}
          ></li>
        ))}
      </ul>

      <button className="slide-arrow2 right2" onClick={() => handleSlideChange('next')}>
        &#8250;
      </button>

      <ul className="pagination-container2">
        {slides.map((_, index) => (
          <li
            key={index}
            className={`dot2 ${index === activeSlide ? 'active2' : ''}`}
            onClick={() => setActiveSlide(index)}
          ></li>
        ))}
      </ul>
    </section>
  );
}