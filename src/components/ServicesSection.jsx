import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import { useLanguage } from "../context/LanguageContext";

function ServicesSection() {
  const { t = key => key } = useLanguage() || {};

  // Services array for the carousel
  const services = [
    { textKey: "beatMaking", icon: "💀" },
    { textKey: "recording", icon: "⚡" },
    { textKey: "mixMastering", icon: "🎵" },
    { textKey: "videoShoot", icon: "🎬" },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <>
      {/* Marquee Section - Now with white background */}
      <section className="marquee-section">
        <div className="services-footer">
          <div className="carousel-container">
            <div className="marquee-content">
              {/* Repeat the services twice for seamless looping */}
              {[...services, ...services, ...services].map((service, index) => (
                <span key={index} className="carousel-item">
                  {t(service.textKey)}{" "}
                  <span className="highlight-icon">{service.icon}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <p className="stats-description">
            {t('studioDescription')}
          </p>

          <div className="stats-container">
            <div className="stat-item">
              <h2>
                10<span className="plus-icon">+</span>
              </h2>
              <p>{t('musiciansCollaborate')}</p>
            </div>
            <div className="stat-item">
              <h2>
                80<span className="plus-icon">+</span>
              </h2>
              <p>{t('tracksProduced')}</p>
            </div>
            <div className="stat-item">
              <h2>
                20<span className="plus-icon">+</span>
              </h2>
              <p>{t('albumProduced')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-header">
            <h2>
              {t('whatWeDo')} <span className="highlight-icon">⚡</span>
            </h2>
            <p>{t('safeAndSecure')}</p>
          </div>

          <div className="process-cards">
            <div className="process-card">
              <div className="card-image">
                <img src="https://github.com/Gorcc/cdn/blob/main/hive/beat.jpg?raw=true" alt="Beat making" />
              </div>
              <h3>{t('beatMaking')}</h3>
            </div>

            <div className="process-card">
              <div className="card-image">
                <img src="https://github.com/Gorcc/cdn/blob/main/hive/recording.jpg?raw=true" alt="Recording" />
              </div>
              <h3>{t('recording')}</h3>
            </div>

            <div className="process-card">
              <div className="card-image">
                <img src="https://github.com/Gorcc/cdn/blob/main/hive/mixing.jpg?raw=true" alt="Mix/Mastering" />
              </div>
              <h3>{t('mixMastering')}</h3>
            </div>

            <div className="process-card">
              <div className="card-image">
                <img src="https://github.com/Gorcc/cdn/blob/main/hive/video.jpg?raw=true" alt="Video Shoot" />
              </div>
              <h3>{t('videoShoot')}</h3>
            </div>
          </div>

          <Link to="/contact" className="get-started-btn">{t('getStarted')}</Link>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
