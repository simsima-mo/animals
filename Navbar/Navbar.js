import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faSun, faMoon, faPaw, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className="navbar">
      {/* Logo and name on the left */}
      <div className="navbar-logo">
        <FontAwesomeIcon icon={faPaw} className="logo-icon" />
        <span className="brand-name">ANIMALIS</span>
      </div>

      {/* Elements on the right */}
      <div className="navbar-links">
        <button className="nav-button" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faHouse} />
        </button>
        <button className="nav-button" onClick={() => navigate('/login')}>
          <FontAwesomeIcon icon={faUser} />
       </button>
        <button className="nav-button" onClick={() => navigate('/cart')}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="nav-button" onClick={toggleDarkMode}>
          {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;