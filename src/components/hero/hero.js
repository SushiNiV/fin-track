import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Savings for your own Sake!</h1>
        <p className="hero-subtitle">
          Track your expenses, budget smarter, and reach your financial goals.
        </p>
        <Link to="/login" className="hero-btn">Get Started</Link>
      </div>
    </section>
  );
};

export default Hero;
