import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.jpeg" alt="logog" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Our Services</a></li>
        <li><a href="/contact">Contact us</a></li>
        <li><a href="/about">About us</a></li>
      </ul>
      <button className="contact-button">Contact us</button>
    </nav>
  );
}

export default Navbar;
