import React from 'react';
import Header from '../components/Header';
import './EquipmentPage.css';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

function EquipmentPage() {
  const { t = key => key, language } = useLanguage() || {};

  const equipmentItems = [
    {
      id: 1,
      name: "Neumann TLM 103",
      image: "https://github.com/Gorcc/cdn/blob/main/hive/eqp1.jpg?raw=true",
      description: language === 'tr' 
        ? `<p>Neumann TLM 103, vokal ve enstrüman kayıtlarında netlik ve detay sunar. Sessiz ortam kayıtları için uygundur.</p>
           <ul>
            <li><strong>7 dB-A kendi gürültü seviyesi:</strong> Düşük arka plan gürültüsü.</li>
            <li><strong>K87 kapsül:</strong> Dengeli ve doğal ses üretimi.</li>
            <li><strong>Frekans aralığı 20 Hz - 20 kHz:</strong> Geniş frekans tepkisi.</li>
            <li><strong>Kardioid patern:</strong> Arka plan seslerini minimuma indirir.</li>
            <li><strong>Dayanıklı metal gövde:</strong> Uzun ömürlü kullanım sağlar.</li>
          </ul>`
        : `<p>The Neumann TLM 103 offers clarity and detail for vocal and instrument recordings. Suitable for quiet environments.</p>
           <ul>
            <li><strong>7 dB-A self-noise level:</strong> Very low background noise.</li>
            <li><strong>K87 capsule:</strong> Balanced and natural sound output.</li>
            <li><strong>Frequency response 20 Hz - 20 kHz:</strong> Wide frequency range.</li>
            <li><strong>Cardioid pattern:</strong> Minimizes background noise.</li>
            <li><strong>Durable metal housing:</strong> Built for longevity.</li>
          </ul>`
    },
    {
      id: 2,
      name: "Universal Audio Apollo Twin X USB",
      image: "https://github.com/Gorcc/cdn/blob/main/hive/eqp2.jpg?raw=true",
      description: language === 'tr'
        ? `<p>Apollo Twin X, yüksek kaliteli preamp'leri ve güçlü DSP işlemcileriyle kayıt ve miks işlemlerinde profesyonel çözümler sunar.</p>
           <ul>
            <li><strong>Temiz preamp'ler:</strong> Doğal ve güçlü ses yakalama.</li>
            <li><strong>UAD DSP işlemciler:</strong> Gerçek zamanlı efekt kullanımı sağlar.</li>
            <li><strong>USB bağlantısı:</strong> Kolay bilgisayar bağlantısı.</li>
            <li><strong>AD/DA dönüştürücüler:</strong> Yüksek çözünürlükte ses.</li>
            <li><strong>Giriş/çıkış seçenekleri:</strong> Çok yönlü kullanım imkanı.</li>
          </ul>`
        : `<p>The Apollo Twin X offers professional solutions for recording and mixing with its high-quality preamps and powerful DSP processors.</p>
           <ul>
            <li><strong>Clean preamps:</strong> Capture natural and powerful audio.</li>
            <li><strong>UAD DSP processors:</strong> Enable real-time plugin usage.</li>
            <li><strong>USB connection:</strong> Simple and reliable computer connection.</li>
            <li><strong>AD/DA converters:</strong> High-resolution audio quality.</li>
            <li><strong>Input/output options:</strong> Versatile connectivity.</li>
          </ul>`
    },
    {
      id: 3,
      name: "EVE Audio SC207",
      image: "https://github.com/Gorcc/cdn/blob/main/hive/eqp3.jpg?raw=true",
      description: language === 'tr'
        ? `<p>SC207 referans monitörleri, miks ve mastering sırasında frekans dengesini doğru duymamıza yardımcı olur.</p>
           <ul>
            <li><strong>6.5” woofer, AMT tweeter:</strong> Detaylı ve dengeli ses üretimi.</li>
            <li><strong>Frekans aralığı 44 Hz - 21 kHz:</strong> Geniş dinleme alanı.</li>
            <li><strong>Bi-amping (LF: 100W, HF: 50W):</strong> Güçlü ve net ses çıkışı.</li>
            <li><strong>DSP kontrollü ayarlar:</strong> Odaya göre hassas ses ayarı.</li>
            <li><strong>Bass reflex kabin:</strong> Temiz ve kontrollü baslar.</li>
          </ul>`
        : `<p>The SC207 reference monitors help us hear frequency balance accurately during mixing and mastering.</p>
           <ul>
            <li><strong>6.5” woofer, AMT tweeter:</strong> Detailed and balanced sound.</li>
            <li><strong>Frequency range 44 Hz - 21 kHz:</strong> Wide listening spectrum.</li>
            <li><strong>Bi-amping (LF: 100W, HF: 50W):</strong> Powerful and clean output.</li>
            <li><strong>DSP-controlled tuning:</strong> Adjusted to the room acoustics.</li>
            <li><strong>Bass reflex cabinet:</strong> Clean and controlled low end.</li>
          </ul>`
    }
  ];

  return (
    <section className="equipment-page">
      <div className="equipment-header-bg">
        <div className="container">
          <Header />
          <h1>{language === 'tr' ? 'Stüdyo Ekipmanlarımız' : 'Our Studio Equipment'}</h1>
          <p>{language === 'tr' 
            ? 'Hive Records’ta profesyonel kayıtlar için teknik donanımı titizlikle seçiyoruz.' 
            : 'At Hive Records, we carefully select our equipment for professional recording quality.'}</p>
        </div>
      </div>
      
      <div className="equipment-content">
        <div className="equipment-items">
          {equipmentItems.map(item => (
            <div className="equipment-item" key={item.id} id={`equipment-${item.id}`}>
              <div className="equipment-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="equipment-item-content">
                <h2>{item.name}</h2>
                <div className="equipment-item-description" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="equipment-sidebar">
          <div className="sidebar-section">
            <h3>{language === 'tr' ? 'Ekipmanlarımız' : 'Our Equipment'}</h3>
            <ul>
              {equipmentItems.map(item => (
                <li key={item.id}>
                  <a href={`#equipment-${item.id}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3>{language === 'tr' ? 'Kayıt Yaptırmak İster misiniz?' : 'Want to Record with Us?'}</h3>
            <p>{language === 'tr'
              ? 'Donanımlarımızla profesyonel bir kayıt deneyimi yaşamak için bizimle iletişime geçin.'
              : 'Get in touch to record with our professional gear.'}</p>
            <Link to="/contact" className="contact-btn">{language === 'tr' ? 'İletişime Geçin' : 'Get in Touch'}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EquipmentPage;
