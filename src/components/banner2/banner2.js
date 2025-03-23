import { useState, useEffect } from 'react';
import './banner2.css';

export default function Banner2() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    'linear-gradient(to bottom, #f4f6f9 2%, #bbe0ff 35%, #f4f6f9 90%)',
    'linear-gradient(to bottom, #f4f6f9 2%, #b5ffcc 35%, #f4f6f9 90%)',
    'linear-gradient(to bottom, #f4f6f9 2%, #bbe0ff 35%, #f4f6f9 90%)',
    'linear-gradient(to bottom, #f4f6f9 2%, #b5ffcc 35%, #f4f6f9 90%)'
];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

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
          >
            {index === 0 && (
              <div class="s02-content">
                  <h1 class="s02-title">The 50/30/20 Rule</h1>
                  <p class="s02-subtitle">Instantly track your daily, weekly, and monthly expenses without the hassle of spreadsheets.</p>
            </div>
            )}
            {index === 1 && (
              <div class="s12-content">
                  <h1 class="s12-title">Avoid Impulse Buying</h1>
                  <p class="s12-subtitle">Pause before you purchase! Ask yourself: Do I really need this?</p>
            </div>
            )}
            {index === 2 && (
              <div class="s02-content">
                  <h1 class="s02-title">Track Small Expenses</h1>
                  <p class="s02-subtitle">Little things add up! Coffee, snacks, and subscriptions—monitor them.</p>
            </div>
            )}
            {index === 3 && (
              <div class="s12-content">
                  <h1 class="s12-title">Automate Your Savings</h1>
                  <p class="s12-subtitle">Set up automatic savings deposits and grow your wealth effortlessly.</p>
            </div>
            )}
          </li>
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