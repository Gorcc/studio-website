import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import Header from './Header';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const { t = key => key, language } = useLanguage() || {};
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  // Handle loading state
  useEffect(() => {
    const videoElement = document.querySelector('.background-video');
    
    const handleVideoLoaded = () => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    
    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleVideoLoaded);
      
      // Fallback in case video takes too long
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      
      return () => {
        videoElement.removeEventListener('loadeddata', handleVideoLoaded);
        clearTimeout(timeoutId);
      };
    }
  }, []);
  
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
    
    window.open(`https://wa.me/905338683477?text=${message}`, '_blank');
  };

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-logo">Hive <span>Records</span></div>
            <div className="loading-spinner"></div>
          </div>
        </div>
      )}
      
      <section className={`hero-section ${isLoading ? 'hidden' : 'fade-in'}`}>
        {/* Background Video */}
        <video className="background-video" autoPlay loop muted playsInline>
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
            <div className="social-icons">
              <a href="https://www.instagram.com/hiverecords24/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@hiverecords_24?_t=ZS-8vm2XVGuROq&_r=1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://youtube.com/@hiverecords2244?si=HpkHluPQmnNWyj8X" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;