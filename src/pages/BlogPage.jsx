import React from 'react';
import Header from '../components/Header';
import './BlogPage.css';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

function BlogPage() {
  const { t = key => key, language } = useLanguage() || {};

  const blogPosts = [
    {
      id: 1,
      title: language === 'tr' 
        ? "Hive Records: Kıbrıs'ta Müzik Sahnesi İçin Yeni Bir Nefes"
        : 'Hive Records: A Fresh Air for the Cyprus Music Scene',
      image:"https://github.com/Gorcc/cdn/blob/main/hive/produc.jpg?raw=true",
      date: '2024-08-29',
      
      content: language === 'tr'
        ? `<p>Kıbrıs'ta müzik yapmak isteyen biri için doğru ortamı bulmak bazen düşündüğünüzden daha zor olabilir. Hive Records olarak tam da bu boşluğu doldurmak istiyoruz.</p>
           <p>Stüdyomuz, Girne'nin merkezinde yer alıyor. İlham geldiği anda kayıt yapabileceğiniz, samimi ama profesyonel bir ortam sunuyoruz. 7/24 açık olmamız, özellikle bağımsız sanatçılar için büyük bir avantaj.</p>
           <p>Kayıt dışında klip çekimi hizmetimiz de var. Kıbrıs'ın eşsiz doğasını ve sokak ruhunu müziğinizle buluşturan çekimler yapıyoruz. Görsel açıdan güçlü projeler üretmek bizim için en az ses kadar önemli.</p>
           <p>Hive Records olarak hedefimiz, sadece kaliteli kayıtlar yapmak değil; aynı zamanda Kıbrıs müzik sahnesine katkı sağlamak. İster ilk kaydınızı yapıyor olun, ister uzun süredir bu işin içinde olun, burası sizin için bir ev olabilir.</p>`
        : `<p>Finding the right environment to make music in Cyprus can be more difficult than it seems. At Hive Records, we aim to fill that gap with a creative and professional space.</p>
           <p>Our studio is located right in the center of Kyrenia. It's open 24/7, which means whenever inspiration strikes, you're welcome to record. We designed the space to feel both cozy and high-end — perfect for artists at any stage.</p>
           <p>We also offer music video production. Using Cyprus' natural beauty and street vibes, we help you tell your story visually, not just sonically. For us, a strong visual goes hand in hand with great sound.</p>
           <p>At Hive Records, our goal isn't just to make high-quality recordings — we also want to support and grow the local music scene. Whether you're recording for the first time or you've been doing this for years, we hope to make you feel at home.</p>`
    },
    {
      id: 2,
      title: language === 'tr'
        ? "Hive Records Stüdyosu: Neden 7/24 Açığız?"
        : 'Hive Records Studio: Why We\'re Open 24/7',
      image:"https://github.com/Gorcc/cdn/blob/main/hive/tips.jpg?raw=true",
      date: '2024-09-12',
      content: language === 'tr'
    
        ? `<p>Hive Records olarak stüdyomuzu 7/24 açık tutmamızın bir nedeni var: İlham saati olmaz. Yaratıcılık, bazen gecenin bir yarısında gelir; bazen de sabahın erken saatlerinde. Biz bu anları kaçırmanızı istemiyoruz.</p>
           <p>Sanatçılarımıza özgürlük tanımak istiyoruz. Çoğu zaman gündüz saatleri dolu ya da gürültülü olabilir. Gece sessizliği ise birçok müzisyen için en iyi kayıt ortamıdır. Hive, bu özgürlüğü size sunar.</p>
           <p>Ayrıca tam zamanlı çalışan, öğrenci olan ya da gündüz vakti uygun olmayan herkes için erişilebilir olmayı amaçlıyoruz. Müzik, herkesin hakkı. Saat sınırlamaları yüzünden ertelenmemeli.</p>
           <p>Bu yüzden biz, kapılarımızı ilhama her daim açık tutuyoruz. Hive Records sadece bir stüdyo değil, ilhamın saati olmayan bir yaratım alanı.</p>`
        : `<p>There's a reason why Hive Records is open 24/7: inspiration doesn't follow a schedule. Creativity can strike at 3 AM or early in the morning — and we don't want artists to miss that moment.</p>
           <p>We believe in giving artists full freedom. Daytime hours can be noisy, busy, or simply inconvenient. For many, the quiet of night is the perfect recording environment. Hive offers you that freedom.</p>
           <p>We also want to stay accessible to everyone — whether you work full-time, are a student, or simply can't make it during the day. Music belongs to everyone, and it shouldn't be limited by time.</p>
           <p>That's why our doors are always open to inspiration. Hive Records isn't just a studio — it's a timeless space where creativity lives.</p>`
    },
    {
        id: 3,
        title: language === 'tr'
          ? "Hive Records Ekipmanları: Mükemmel Ses İçin Seçilenler"
          : "Hive Records Equipment: Chosen for Perfect Sound",
        image: "https://github.com/Gorcc/cdn/blob/main/hive/beat.jpg?raw=true",
        date: '2024-09-25',
        content: language === 'tr'
          ? `<p>Müziğinizin en iyi şekilde duyulması için, endüstri standardı ekipmanlarla çalışıyoruz. Her bir parça, stüdyomuzda mükemmel ses kalitesi sağlamak için özenle seçilmiştir.</p>
             <h4>🎤 Neumann TLM 103</h4>
             <ul>
               <li>Düşük Gürültü (7 dB-A): Sessiz kayıtlar için ideal.</li>
               <li>Yüksek Hassasiyet: İnce ses detaylarını yakalar.</li>
               <li>Dayanıklı Metal Gövde: Güvenilir ve uzun ömürlü.</li>
               <li>K 87 Kapsül: Hassas ses reprodüksiyonu.</li>
               <li>20 Hz - 20 kHz Aralık: Vokal ve enstrümanlar için mükemmel.</li>
               <li>Kardioid Patern: İstenmeyen gürültüyü azaltır.</li>
             </ul>
             <h4>🎛️ Universal Audio Apollo Twin X USB</h4>
             <ul>
               <li>Yüksek Kaliteli Preamp'ler: Temiz ve şeffaf sinyal amplifikasyonu sağlar.</li>
               <li>AD/DA Dönüştürücüler: Yüksek doğruluk ve detaylı ses kalitesi sunar.</li>
               <li>UAD DSP İşlemciler: Bilgisayarınızı yormadan gerçek zamanlı ses işleme eklentileri kullanımı.</li>
               <li>USB Bağlantısı: Kolay ve güvenilir bağlantı sağlar.</li>
               <li>Çeşitli Giriş ve Çıkışlar: Aynı anda birden fazla kaynağı kaydedebilirsiniz.</li>
             </ul>
             <h4>🔊 EVE Audio SC207</h4>
             <ul>
               <li>6.5-inç Woofer ve AMT Tweeter: Hassas ses reprodüksiyonu.</li>
               <li>Frekans Aralığı 44 Hz - 21 kHz: Tüm müzik türleri için uygun.</li>
               <li>Dahili Bi-Amping: LF için 100W, HF için 50W.</li>
               <li>DSP Kontrolü: Oda akustiğine göre ayarlanabilir.</li>
               <li>Dayanıklı Kabin ve Bass Reflex Port: Temiz ve güçlü bas sesi.</li>
               <li>Ayarlanabilir Frekans Filtreleri: İdeal ses dengesini yakalayın.</li>
             </ul>`
          : `<p>To make sure your music sounds its best, we work with industry-standard equipment. Every piece in our studio is carefully selected to ensure top-tier sound quality.</p>
             <h4>🎤 Neumann TLM 103</h4>
             <ul>
               <li>Low Self-Noise (7 dB-A): Ideal for quiet recordings.</li>
               <li>High Sensitivity: Captures subtle sound details.</li>
               <li>Durable Metal Body: Built to last.</li>
               <li>K 87 Capsule: Precision sound reproduction.</li>
               <li>20 Hz - 20 kHz Range: Perfect for vocals and instruments.</li>
               <li>Cardioid Pattern: Reduces unwanted background noise.</li>
             </ul>
             <h4>🎛️ Universal Audio Apollo Twin X USB</h4>
             <ul>
               <li>High-Quality Preamps: Clean and transparent signal amplification.</li>
               <li>AD/DA Converters: Accurate and detailed sound reproduction.</li>
               <li>UAD DSP Processors: Run real-time audio plugins without overloading your computer.</li>
               <li>USB Connection: Easy and stable connectivity.</li>
               <li>Multiple I/O: Record multiple sources simultaneously.</li>
             </ul>
             <h4>🔊 EVE Audio SC207</h4>
             <ul>
               <li>6.5-inch Woofer & AMT Tweeter: Accurate audio response.</li>
               <li>44 Hz - 21 kHz Frequency Range: Great for all music genres.</li>
               <li>Bi-Amping: 100W for LF, 50W for HF.</li>
               <li>DSP Control: Tailors sound to your room's acoustics.</li>
               <li>Sturdy Cabinet & Bass Reflex Port: Delivers clean and deep bass.</li>
               <li>Adjustable Frequency Filters: Fine-tune your sound.</li>
             </ul>`
      }
      
  ];

  return (
    <section className="blog-page">
      <div className="blog-header-bg">
        <div className="container">
          <Header />
          <h1>{t('blog')}</h1>
          <p>{t('blogDescription')}</p>
        </div>
      </div>
      
      <div className="blog-content">
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div className="blog-post" key={post.id}>
              <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-post-content">
                <h2>{post.title}</h2>
                <div className="blog-post-meta">
                  <span className="date">{post.date}</span>
                </div>
                <p className="excerpt">{post.excerpt}</p>
                <div className="blog-post-full" dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-sidebar">
          <div className="sidebar-section">
            <h3>{t('recentPosts')}</h3>
            <ul>
              {blogPosts.map(post => (
                <li key={post.id}>
                  <Link to={`/blog#post-${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-section">
            <h3>{t('contactUs')}</h3>
            <p>{t('blogContactText')}</p>
            <Link to="/contact" className="contact-btn">{t('getInTouch')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;