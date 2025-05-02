import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Dhanlakshmi Investments</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;
