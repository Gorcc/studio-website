import React from 'react';
import './FloatingWidgets.css';
import { useLanguage } from '../context/LanguageContext';

function FloatingWidgets() {
    
  const { language, t = key => key } = useLanguage() || {};

  const handleWhatsAppClick = () => {
    const message = language === 'tr' 
      ? 'Merhaba,%20Hive%20Records%20hakkında%20bilgi%20almak%20istiyorum' 
      : 'Hello,%20I%20would%20like%20to%20get%20information%20about%20Hive%20Records';
    
    window.open(`https://wa.me/905338683477?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+905338683477';
  };

  return (
    <div className="floating-widgets">
      <div className="floating-widget phone-widget" onClick={handlePhoneClick}>
        <i className="fas fa-phone"></i>
      </div>
      <div className="floating-widget whatsapp-widget" onClick={handleWhatsAppClick}>
        <i className="fab fa-whatsapp"></i>
      </div>
    </div>
  );
}

export default FloatingWidgets;