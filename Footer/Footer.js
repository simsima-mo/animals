import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <p>
            <a href="https://instagram.com/Animalis_SCI" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </p>
          <p>
            <a href="https://facebook.com/Animalis_SCI" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 ANIMALIS - All Rights Reserved</p>
          <p>
            Made with ❤️ by <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">Animalis Team</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
