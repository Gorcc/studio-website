import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageToggle.css';

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === 'en' ? (
        <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/tr.svg" alt="Turkish Flag" />
      ) : (
        <img src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg" alt="English Flag" />
      )}
    </button>
  );
}

export default LanguageToggle;