import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

function HomePage() {
  const { language } = useLanguage() || { language: 'en' };
  
  // SEO content based on language
  const seoTitle = language === 'en' 
    ? 'Hive Records | Professional Recording Studio in North Cyprus' 
    : 'Hive Records | Kuzey Kıbrıs\'ta Profesyonel Kayıt Stüdyosu';
  
  const seoDescription = language === 'en'
    ? 'Professional music recording, mixing, mastering and video production services in Kyrenia, North Cyprus. Open 24/7 for all your music production needs.'
    : 'Girne, Kuzey Kıbrıs\'ta profesyonel müzik kayıt, miks, mastering ve video prodüksiyon hizmetleri. Tüm müzik prodüksiyon ihtiyaçlarınız için 7/24 açık.';
  
  const seoKeywords = language === 'en'
    ? 'recording studio, north cyprus, kyrenia, music production, video shoot, mixing, mastering, beat making'
    : 'kayıt stüdyosu, kuzey kıbrıs, girne, müzik prodüksiyon, klip çekimi, miks, mastering, beat yapımı, kıbrıs müzik stüdyosu, kıbrıs müzik kayıt, girne müzik stüdyosu, kıbrıs klip çekimi, girne klip çekimi, kıbrıs record music';

  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      />
      <HeroSection />
      <ServicesSection />
    </>
  );
}

export default HomePage;