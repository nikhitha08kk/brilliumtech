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
          <h3>Logo</h3>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home"><h1>Home</h1></a></li>
            <li><a href="#about"><h1>About</h1></a></li>
            <li><a href="#category"><h1>Category</h1></a></li>
            <li><a href="#testimonials"><h1>Testimonials</h1></a></li>
            <li><a href="#contact"><h1>Contact</h1></a></li>
          </ul>
        </nav>
      </header>

      {/* Conditionally render the LoginHeader */}
      {showLoginHeader && <LoginHeader />}
    </div>
  );
};

export default Header;
