import React from 'react';
import "./style.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Font Awesome icons
const Footer = () => {
  return (
    <div className='footer'>

      <div className='logo-footer' >
        <h3>Logo</h3>
      </div>
      <div className='adrr'>
        <h1>Dhanalakshmi Hardware</h1>
        <h1>Address</h1>
        <h2>1-H. Surendra Nagar Ist Street, Medumukkam Main Hd, Adambakkam, Chennai, Tamil Nadu 6</h2>

      </div>
      <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
    </div>
  );
}

export default Footer;

