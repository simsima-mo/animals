// Navbar.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faSun, faMoon, faPaw, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cart }) {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="navbar-logo">
        <FontAwesomeIcon icon={faPaw} className="logo-icon" />
        <span className="brand-name">ANIMALIS</span>
      </div>

      {/* Navbar links */}
      <div className="navbar-links">
        <button className="nav-button" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faHouse} />
        </button>
        <button className="nav-button" onClick={() => navigate('/login')}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="nav-button" onClick={() => navigate('/cart')}>
          <FontAwesomeIcon icon={faCartShopping} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </button>
        <button className="nav-button" onClick={toggleDarkMode}>
          {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
