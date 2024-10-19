import React, { useState } from 'react';
import './style.css';
import LoginHeader from './LoginHeader'; // Import the LoginHeader component

const Header = () => {
  // State to track whether the user is hovering over the header
  const [showLoginHeader, setShowLoginHeader] = useState(false);

  // Handle mouse enter and leave events
  const handleMouseEnter = () => {
    setShowLoginHeader(true);
  };

  const handleMouseLeave = () => {
    setShowLoginHeader(false);
  };

  return (
    <div
      className="header-container"
      onMouseEnter={handleMouseEnter} // Show LoginHeader on hover
      onMouseLeave={handleMouseLeave} // Hide LoginHeader when not hovering
    >
      <header className="header">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#category">Category</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Conditionally render the LoginHeader */}
      {showLoginHeader && <LoginHeader />}
    </div>
  );
};

export default Header;
