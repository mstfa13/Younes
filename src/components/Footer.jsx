import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTiktok, FaYoutube, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Handle About navigation
  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate('/about');
  };

  // Handle FAQ navigation - works from any page
  const handleFAQClick = (e) => {
    e.preventDefault();
    
    // Check if FAQ section exists on current page
    const faqElement = document.getElementById('faq');
    
    if (faqElement) {
      // If on home page, just scroll to FAQ
      faqElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on other page, navigate to home and scroll to FAQ
      navigate('/', { state: { scrollToFAQ: true } });
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
                <span className="footer-logo-main">TechBytes</span>
                <span className="footer-logo-sub">by Ahmed Younes</span>
              </div>
              <p className="footer-tagline">
                Empowering professionals to go from zero to market-ready in tech. 
                Transform your career with proven strategies and expert guidance.
              </p>
              <div className="footer-social">
                <a 
                  href="https://www.linkedin.com/in/ahmed-younes-ay/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61582441811249" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://www.instagram.com/techbytes_by_younes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.tiktok.com/@techbytes_by_younes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
                <a 
                  href="https://www.youtube.com/@techbytesbyyounes"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-links-title">Quick Links</h4>
              <ul className="footer-links-list">
                <li>
                  <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={handleAboutClick}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                    Services
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
                <li><a href="/faq" onClick={handleFAQClick}>FAQ</a></li>
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
              &copy; {currentYear} <a href="#home">TechBytes by Ahmed Younes</a>. All rights reserved.
            </p>
            <div className="footer-credits">
              <span className="footer-credit-item">
                Developed by{' '}
                <a 
                  href="https://fikrax.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-agency-link"
                >
                  FikraX
                </a>
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
