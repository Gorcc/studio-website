import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted>
        <source src="/images/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="container">
        <header className="hero-header">
          <div className="logo">Hive <span>Records</span></div>
          <nav className="nav-links">
            <a href="#studios">Studios</a>
            <a href="#mastering">Mastering</a>
            <a href="#artists">Artists</a>
            <a href="#releases">Releases</a>
            <a href="#news">News</a>
          </nav>
          <button className="cta-btn">Get in Touch</button>
        </header>

        {/* Hero Text */}
        <div className="hero-content">
          <h1 className="title">
          The Best <br></br> Mixing & Mastering
          in North Cyprus <span className="highlight-icon">⚡</span>
          </h1>
          
          <div className="tagline">
            <p>The world has enough noise.</p>
            <p>Let's make something different.</p>
          </div>
          
          <a href="#services" className="hero-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;