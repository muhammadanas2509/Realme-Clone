import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Recommended</h4>
          <ul>
            <li>realme C75</li>
            <li>realme 13+ 5G</li>
            <li>realme Note 60</li>
            <li>realme C61</li>
            <li>realme C65</li>
            <li>realme 12</li>
            <li>realme 12+ 5G</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Troubleshooting</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>About realme</h4>
          <ul>
            <li>Our Brand</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact realme</h4>
          <ul>
            <li>WhatsApp</li>
            <li>service.pk@realme.com</li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>04238048018</h4>
          <p>09:30 - 18:00, MON - SAT</p>
          <p>Exclude Holidays</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Pakistan ( English / PKR ) © 2019-2024 realme. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">User Agreement</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Sales</a>
          <a href="#">Warranty Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
