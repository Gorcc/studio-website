import React from 'react';
import './HeroSection.css';
import Header from './Header';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const { t = key => key, language } = useLanguage() || {};
  const navigate = useNavigate();
  
  const scrollToStats = (e) => {
    e.preventDefault();
    const statsSection = document.querySelector('.services-footer');
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    // Customize the message based on language
    const message = language === 'tr' 
      ? 'Bir%20seans%20rezervasyonu%20yapmak%20istiyorum' 
      : 'I%20want%20to%20book%20a%20session';
    
    window.open(`https://wa.me/905331234567?text=${message}`, '_blank');
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
          
          <div className="hero-buttons">
            <a href="#services" className="hero-btn" onClick={scrollToStats}>{t('learnMore')}</a>
            <button className="book-now-btn" onClick={handleBookNow}>
              <i className="fab fa-whatsapp"></i> {t('bookNow')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;