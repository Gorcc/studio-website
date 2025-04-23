import React, { useState, useRef, useEffect } from 'react';
import './LanguageToggle.css';
import { useLanguage } from '../context/LanguageContext';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lang) => {
    if (language !== lang) {
      toggleLanguage();
    }
    setDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button 
        className="language-toggle-btn" 
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <i className="fas fa-globe"></i>
        <span>{language.toUpperCase()}</span>
      </button>
      
      {dropdownOpen && (
        <div className="language-dropdown">
          <button 
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button 
            className={`language-option ${language === 'tr' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('tr')}
          >
            Türkçe
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageToggle;