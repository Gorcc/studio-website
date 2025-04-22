import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const navigate = useNavigate();
  const { t = key => key } = useLanguage() || {};

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="site-header">
      <div className="header-left">
       
        <div className="logo">Hive <span>Records</span></div>
      </div>
      <nav className="nav-links">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>{t('home')}</Link>
        <a href="#services" onClick={(e) => scrollToSection(e, '.stats-description')}>{t('about')}</a>
        <a href="#services" onClick={(e) => scrollToSection(e, '.how-it-works')}>{t('services')}</a>
        <a href="#" onClick={handleContactClick}>{t('contact')}</a>
      </nav>
      <div className="header-right">
        <button className="cta-btn header-btn" onClick={handleContactClick}>{t('getInTouch')}</button>
        <LanguageToggle />
      </div>
    </header>
  );
}

export default Header;