import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the language context
const LanguageContext = createContext();

// Provider component
export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage || 'en';
  });
  
  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
  }, [language]);
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translations object
// Add this to your translations object in LanguageContext.jsx
// Add or update these translations in your LanguageContext.jsx file
const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    getInTouch: "Get in Touch",
    
    // Hero Section
    bestMixing: "The Best Mixing & Mastering in North Cyprus",
    worldHasNoise: "The world has enough noise.",
    makeDifferent: "Let's make something different.",
    learnMore: "Learn More",
    
    // Services Section
    beatMaking: "Beat Making",
    recording: "Recording",
    mixMastering: "Mix / Mastering",
    videoShoot: "Video Shoot",
    studioDescription: "Hive Records is a Kyrenia-based recording studio, open 24/7 for artists who never sleep on creativity. Whether you're laying down your first demo or producing a full album, our space is built for all levels of talent. From vocal booths to mixing and mastering — we offer everything you need to bring your sound to life.",
    musiciansCollaborate: "Musicians collaborate",
    tracksProduced: "Tracks produced",
    albumProduced: "Album produced",
    whatWeDo: "What we do at Hive Records",
    safeAndSecure: "Real artists. Real reviews. Real results.",
    getStarted: "Get Started!",
    
    // Contact Page
    contactUs: "Contact Us",
    getInTouchDesc: "Get in touch with our team and let's create something amazing together",
    visitUs: "Visit Us",
    callUs: "Call Us",
    available247: "Available 24/7",
    emailUs: "Email Us",
    workingHours: "Working Hours",
    open24: "Open 24 hours a day",
    days7: "7 days a week",
    followUs: "Follow Us",
    findUs: "Find Us",
    backToHome: "← Back to Home",
    
    // Footer
    professionalStudio: "Professional recording studio in North Cyprus",
    allRightsReserved: "All rights reserved.",
    services: "Services",
    company: "Company",
    aboutUs: "About Us",
    ourTeam: "Our Team",
    careers: "Careers",
    bookNow:"Book Now"
  },
  tr: {
    // Header
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    contact: "İletişim",
    getInTouch: "Bize Ulaşın",
    
    // Hero Section
    bestMixing: "Kuzey Kıbrıs'ta En İyi Miks ve Mastering",
    worldHasNoise: "Dünyada yeterince gürültü var.",
    makeDifferent: "Hadi farklı bir şey yapalım.",
    learnMore: "Daha Fazla Bilgi",
    
    // Services Section
    beatMaking: "Beat Yapımı",
    recording: "Kayıt",
    mixMastering: "Miks / Mastering",
    videoShoot: "Video Çekimi",
    studioDescription: "Hive Records, yaratıcılık üzerine asla uyumayan sanatçılar için 7/24 açık olan Girne merkezli bir kayıt stüdyosudur. İster ilk demonuzu kaydediyor olun, ister tam bir albüm üretiyor olun, stüdyomuz her seviyedeki yetenek için tasarlanmıştır. Vokal kabinlerinden miksleme ve masteringe kadar - sesinizi hayata geçirmek için ihtiyacınız olan her şeyi sunuyoruz.",
    musiciansCollaborate: "Müzisyen işbirliği",
    tracksProduced: "Üretilen parça",
    albumProduced: "Üretilen albüm",
    whatWeDo: "Hive Records'ta neler yapıyoruz",
    safeAndSecure: "Gerçek sanatçılar. Gerçek yorumlar. Gerçek sonuçlar",
    getStarted: "Hemen Başla!",
    bookNow: "Rezervasyon",
    // Contact Page
    contactUs: "Bize Ulaşın",
    getInTouchDesc: "Ekibimizle iletişime geçin ve birlikte harika bir şeyler yaratalım",
    visitUs: "Bizi Ziyaret Edin",
    callUs: "Bizi Arayın",
    available247: "7/24 Ulaşılabilir",
    emailUs: "E-posta Gönderin",
    workingHours: "Çalışma Saatleri",
    open24: "Günde 24 saat açık",
    days7: "Haftanın 7 günü",
    followUs: "Bizi Takip Edin",
    findUs: "Bizi Bulun",
    backToHome: "← Ana Sayfaya Dön",
    
    // Footer
    professionalStudio: "Kuzey Kıbrıs'ın profesyonel kayıt stüdyosu",
    allRightsReserved: "Tüm hakları saklıdır.",
    services: "Hizmetler",
    company: "Şirket",
    aboutUs: "Hakkımızda",
    ourTeam: "Ekibimiz",
    careers: "Kariyer"
  }
};