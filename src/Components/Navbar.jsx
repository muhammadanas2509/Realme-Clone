import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">realme</div>
      <div className="b1">
      <ul className="navbar-links">
        <li><a href="#home">realme smartphone</a></li>
        <li><a href="#about">narzo smartphone</a></li>
        <li><a href="#services">Audio</a></li>
        <li><a href="#contact">Accessories</a></li>
      </ul>
      </div>
      <div className="b2">
      <ul className="navbar-links">
        <li><a href="#home">Brand</a></li>
        <li><a href="#about">Support</a></li>
        <li><a href="#services">Community</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
