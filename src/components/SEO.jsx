import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '../context/LanguageContext';

function SEO({ title, description, keywords }) {
  const { language } = useLanguage() || { language: 'en' };
  
  const defaultTitle = language === 'en' 
    ? 'Hive Records | Professional Recording Studio in North Cyprus' 
    : 'Hive Records | Kuzey Kıbrıs\'ın Profesyonel Kayıt Stüdyosu';
  
  const defaultDescription = language === 'en'
    ? 'Professional music recording, mixing, mastering and video production services in Kyrenia, North Cyprus. Open 24/7 for all your music production needs.'
    : 'Girne, Kuzey Kıbrıs\'ta profesyonel müzik kayıt, miks, mastering ve video prodüksiyon hizmetleri. Tüm müzik prodüksiyon ihtiyaçlarınız için 7/24 açık.';
  
  const defaultKeywords = language === 'en'
    ? 'recording studio, north cyprus, kyrenia, music production, video shoot, mixing, mastering, beat making'
    : 'kayıt stüdyosu, kuzey kıbrıs, girne, müzik prodüksiyon, klip çekimi, miks, mastering, beat yapımı, kıbrıs müzik stüdyosu, kıbrıs müzik kayıt, girne müzik stüdyosu, kıbrıs klip çekimi, girne klip çekimi, kıbrıs record music';
  
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hiverecords.com" />
      <meta property="og:image" content="https://hiverecords.com/logo.png" />
      <link rel="canonical" href="https://hiverecords.com" />
      <html lang={language} />
    </Helmet>
  );
}

export default SEO;