import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Footer Content */}
          <div className="footer-content">
            {/* Brand Section */}
            <div className="footer-brand">
              <div className="footer-logo">
                Ahmed<span>Younes</span>
              </div>
              <p className="footer-tagline">
                Empowering professionals to go from zero to market-ready in tech. 
                Transform your career with proven strategies and expert guidance.
              </p>
              <div className="footer-social">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://twitter.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="footer-social-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-links-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#training" onClick={(e) => { e.preventDefault(); scrollToSection('training'); }}>
                    Training Program
                  </a>
                </li>
                <li>
                  <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-links">
              <h4 className="footer-links-title">Resources</h4>
              <ul className="footer-links-list">
                <li><a href="#blog">Blog</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#support">Support</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="footer-links">
              <h4 className="footer-links-title">Legal</h4>
              <ul className="footer-links-list">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#disclaimer">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {currentYear} <a href="#home">Ahmed Younes</a>. All rights reserved.
            </p>
            <div className="footer-credits">
              <span className="footer-credit-item">
                Built with React & Vite
              </span>
              <span className="footer-credit-item">
                Designed with ❤️
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;
