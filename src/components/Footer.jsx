import React from 'react';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet';

function Footer() {
  const { t = key => key } = useLanguage() || {};
  
  // Structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicRecordingStudio",
    "name": "Hive Records",
    "image": "https://hiverecords.com/logo.png",
    "url": "https://hiverecords.com",
    "telephone": "+90 533 868 34 77",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mete Adanır Caddesi, Barış Parkı Karşısı",
      "addressLocality": "Girne",
      "addressRegion": "North Cyprus",
      "postalCode": "99300",
      "addressCountry": "CY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.3330457,
      "longitude": 33.3140311
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/hiverecords",
      "https://www.facebook.com/hiverecords"
    ],
    "priceRange": "$$",
    "description": "Professional recording studio in North Cyprus offering music recording, mixing, mastering and video production services."
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>Hive Records</h2>
            <p>{t('professionalStudio')}</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>{t('services')}</h3>
              <ul>
                <li><a href="#beat-making">{t('beatMaking')}</a></li>
                <li><a href="#recording">{t('recording')}</a></li>
                <li><a href="#mixing">{t('mixMastering')}</a></li>
                <li><a href="#video">{t('videoShoot')}</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>{t('contact')}</h3>
              <ul>
                <li>Mete Adanır Caddesi</li>
                <li>Barış Parkı Karşısı, Girne</li>
                <li>okurtg@gmail.com</li>
                <li>+90 533 868 34 77</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hive Records. {t('allRightsReserved')}</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
      </footer>
    </>
  );
}

export default Footer;