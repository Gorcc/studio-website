import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './ContactPage.css';
import { useLanguage } from '../context/LanguageContext';

function ContactPage() {
  const { t = key => key, language } = useLanguage() || {};

  const handleWhatsAppClick = () => {
    // Customize the message based on language
    const message = language === 'tr' 
      ? 'Merhaba,%20Hive%20Records%20hakkında%20bilgi%20almak%20istiyorum' 
      : 'Hello,%20I%20would%20like%20to%20get%20information%20about%20Hive%20Records';
    
    window.open(`https://wa.me/905338683477?text=${message}`, '_blank');
  };

  return (
    <section className="contact-page">
      <div className="contact-header-bg">
        <div className="container">
          <Header />
          <h1>{t('contactUs')}</h1>
          <p>{t('getInTouchDesc')}</p>
        </div>
      </div>
      
      <div className="contact-content">
        <div className="contact-info-section">
          <div className="contact-info">
            <div className="info-card">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>{t('visitUs')}</h3>

              <p>Mete Adanır Caddesi</p>
              <p>Barış Parkı Karşısı, Girne</p>
            </div>
            
            <div className="info-card pointer " onClick={handleWhatsAppClick}>
              <div className="icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3> {t('callUs')}</h3>
              <p>+90 533 868 34 77</p>
             
              <p>{t('available247')}</p>
            </div>
            
            <div className="info-card">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>{t('emailUs')}</h3>
              <p>info@hiverecords.com</p>
            </div>
            
            <div className="info-card">
              <div className="icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>{t('workingHours')}</h3>
              <p>{t('open24')}</p>
              <p>{t('days7')}</p>
            </div>
          </div>
          
          <div className="social-links-container">
            <h3>{t('followUs')}</h3>
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
        
        <div className="map-container">
          <h2>{t('findUs')}</h2>
          <div className="google-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.9104286574925!2d33.3140311!3d35.3330457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de13ea058c4dff%3A0x10884af0adb1cef4!2sHive%20Records!5e0!3m2!1str!2s!4v1745269818578!5m2!1str!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hive Records Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;