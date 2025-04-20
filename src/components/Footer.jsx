import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Hive Records</h2>
          <p>Professional recording studio in North Cyprus</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#beat-making">Beat Making</a></li>
              <li><a href="#recording">Recording</a></li>
              <li><a href="#mixing">Mixing & Mastering</a></li>
              <li><a href="#video">Video Production</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>123 Studio Street</li>
              <li>Kyrenia, North Cyprus</li>
              <li>info@hiverecords.com</li>
              <li>+90 533 123 4567</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hive Records. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;