import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

function Header() {
  const navigate = useNavigate();
  const { t = key => key } = useLanguage() || {};
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);

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

  const handleLogoClick = () => {
    setMenuOpen(false);
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="site-header">
      <div className="header-left">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          Hive <span>Records</span>
        </div>
      </div>
      <div className="header-mobile-controls">
        <LanguageToggle />
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={handleHamburgerClick}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
        <Link to="/" onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}>{t('home')}</Link>
        <a href="#services" onClick={(e) => scrollToSection(e, '.stats-description')}>{t('about')}</a>
        <a href="#services" onClick={(e) => scrollToSection(e, '.how-it-works')}>{t('services')}</a>
        <a href="#" onClick={handleContactClick}>{t('contact')}</a>
        <a href="/blog">Blog</a>
        <a href="/Equipment">{t('equipment')}</a>
      </nav>
      <div className="header-right desktop-only">
        <button className="cta-btn header-btn" onClick={handleContactClick}>{t('getInTouch')}</button>
        <LanguageToggle />
      </div>
    </header>
  );
}

export default Header;