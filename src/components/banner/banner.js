import { useState } from 'react';
import { Link } from 'react-router-dom';
import S2Gif from "../../assets/fin-gif.gif";
import './banner.css';

export default function Banner() {
  const [activeSlide, setActiveSlide] = useState(1);

  const slides = [
    'linear-gradient(45deg, rgb(19, 119, 126), #06327d) 40%',
    'linear-gradient(45deg, #06327d, #209d5c)',
    'linear-gradient(45deg, #209d5c 40%,rgb(19, 119, 126))'
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
          >
            {index === 1 && (
              <div class="s1-content">
              <div class="s1-text">
                <h1 class="s1-title">Savings for your own Sake!</h1>
                <p class="s1-subtitle">Track your expenses, budget smarter, and reach your financial goals.</p>
                <Link to="/login" className="s1-btn">Get Started</Link>
              </div>
            </div>
            )}
            {index === 2 && (
              <div class="s2-content">
                <div class="s2-gifbox">
                  <img src={S2Gif} alt="Savings GIF" className="s2-gif" />
                </div>
                <div class="s2-text">
                  <h1 class="s2-title">Track your expenses</h1>
                  <p class="s2-subtitle"> Instantly track your daily, weekly, and monthly expenses<br></br>without the hassle of spreadsheets.</p>
                  <p class="s2-desc">
                    <span class="bullet">Real-time spending updates</span><br></br>
                    <span class="bullet">Easy-to-read summaries</span><br></br>
                    <span class="bullet">Smart budget alerts</span>
                  </p>
                </div>
            </div>
            )}
          </li>
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