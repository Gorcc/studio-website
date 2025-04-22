import React from 'react';
import './HeroSection.css';
import Header from './Header';
import { useLanguage } from '../context/LanguageContext';

function HeroSection() {
  // Add a fallback in case the context is not available
  const { t = key => key } = useLanguage() || {};
  
  const scrollToStats = (e) => {
    e.preventDefault();
    const statsSection = document.querySelector('.services-footer');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="container">
        <Header />

        {/* Hero Text */}
        <div className="hero-content">
          <h1 className="title">
            {t('bestMixing')} <span className="highlight-icon">⚡</span>
          </h1>
          
          <div className="tagline">
            <p>{t('worldHasNoise')}</p>
            <p>{t('makeDifferent')}</p>
          </div>
          
          <a href="#services" className="hero-btn" onClick={scrollToStats}>{t('learnMore')}</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;