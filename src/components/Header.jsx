import React, { useState, useEffect } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll for header shadow effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position (only on home page)
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'problems', 'solutions', 'how-it-works', 'training', 'testimonials', 'faq'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.header-nav') && !event.target.closest('.mobile-menu-toggle')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <a 
          href="/" 
          className="header-logo"
          onClick={(e) => { 
            e.preventDefault(); 
            if (location.pathname === '/') {
              scrollToSection('home');
            } else {
              navigate('/');
            }
          }}
        >
          <div className="header-logo-icon">
            AY
          </div>
          <span className="header-logo-main">TechBytes</span>
          <span className="header-logo-sub">by Ahmed Younes</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={(e) => { 
                  e.preventDefault(); 
                  navigate('/about');
                  setMobileMenuOpen(false);
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#training" 
                className={`nav-link ${activeSection === 'training' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('training'); }}
              >
                Program
              </a>
            </li>
            <li>
              <a 
                href="#testimonials" 
                className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
              >
                FAQ
              </a>
            </li>
          </ul>

          <button 
            className="btn btn-primary header-cta"
            onClick={() => window.open('/register.html', '_blank', 'noopener,noreferrer')}
          >
            Join Program
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <a 
              href="#home" 
              className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="/about" 
              className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={(e) => { 
                e.preventDefault(); 
                navigate('/about');
                setMobileMenuOpen(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#training" 
              className={`mobile-nav-link ${activeSection === 'training' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('training'); }}
            >
              Program
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className={`mobile-nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a 
              href="#faq" 
              className={`mobile-nav-link ${activeSection === 'faq' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
            >
              FAQ
            </a>
          </li>
        </ul>

        <button 
          className="btn btn-primary mobile-cta"
          onClick={() => {
            setMobileMenuOpen(false);
            window.open('/register.html', '_blank', 'noopener,noreferrer');
          }}
        >
          Join Program
        </button>
      </div>
    </header>
  );
};

export default Header;
