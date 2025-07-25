import React from 'react';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">&copy; {new Date().getFullYear()} AI Educator Platform. All rights reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Sitemap</a>
            <a href="https://www.instagram.com/vishesh_013_" className="footer-link">Instagram</a>
            <a href="#" className="footer-link">FaceBook</a>
            <a href="#" className="footer-link">Twiter</a>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;