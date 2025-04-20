import React, { useState, useEffect } from "react";
import "./ServicesSection.css";

function ServicesSection() {
  // Services array for the carousel
  const services = [
    { text: "Beat Making", icon: "💀" },
    { text: "Recording", icon: "⚡" },
    { text: "Mix / Mastering", icon: "🎵" },
    { text: "Video Shoot", icon: "🎬" },
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
                  {service.text}{" "}
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
            Hive Records is a Kyrenia-based recording studio, open 24/7 for
            artists who never sleep on creativity. Whether you're laying down
            your first demo or producing a full album, our space is built for
            all levels of talent. From vocal booths to mixing and mastering — we
            offer everything you need to bring your sound to life.
          </p>

          <div className="stats-container">
            
            <div className="stat-item">
              <h2>
                100<span className="plus-icon">+</span>
              </h2>
              <p>Musicians collaborate</p>
            </div>
            <div className="stat-item">
              <h2>
                100<span className="plus-icon">+</span>
              </h2>
              <p>Tracks produced</p>
            </div>
            <div className="stat-item">
              <h2>
                100<span className="plus-icon">+</span>
              </h2>
              <p>Album produced</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      
      <section className="how-it-works">
        <div className="container">
          <div className="how-header">
            <h2>
              What we do at Hive Records <span className="highlight-icon">⚡</span>
            </h2>
            <p>Safe and secure with tens of thousands of verified reviews</p>
          </div>

          <div className="process-cards">
            <div className="process-card">
              <div className="card-image">
                <img src="https://github.com/Gorcc/cdn/blob/main/hive/beat.jpg?raw=true" alt="Beat making" />
              </div>
              <h3>Beat Making</h3>
            </div>

            <div className="process-card">
              <div className="card-image">
                <img src="https://github.com/Gorcc/cdn/blob/main/hive/recording.jpg?raw=true" alt="Recording" />
              </div>
              <h3>Recording</h3>
            </div>

            <div className="process-card">
              <div className="card-image">
                <img src="https://github.com/Gorcc/cdn/blob/main/hive/mixing.jpg?raw=true" alt="Mix/Mastering" />
              </div>
              <h3>Mix / Mastering</h3>
            </div>

            <div className="process-card">
              <div className="card-image">
                <img src="https://github.com/Gorcc/cdn/blob/main/hive/video.jpg?raw=true" alt="Video Shoot" />
              </div>
              <h3>Video Shoot</h3>
            </div>
          </div>

          <button className="get-started-btn">Get Started!</button>

       
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
