import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero hero-modern" id="home">
      <motion.div 
        className="hero-container hero-modern-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Content */}
        <div className="hero-content hero-modern-content">
          <motion.h1 className="hero-title-modern" variants={itemVariants}>
            Learn. Lead. <span className="highlight-text">Transform.</span>
          </motion.h1>

          <motion.p className="hero-subtitle-modern" variants={itemVariants}>
            Build in-demand skills to unlock your potential and drive outcomes for your career and business.
          </motion.p>

          <motion.div className="hero-ctas" variants={itemVariants}>
            <button 
              className="btn btn-primary hero-cta-primary"
              onClick={() => window.open('/register.html', '_blank', 'noopener,noreferrer')}
            >
              For Individuals
            </button>
            <button 
              className="btn btn-secondary hero-cta-secondary"
              onClick={() => navigate('/enterprise')}
            >
              For Businesses
            </button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div className="hero-trust-badge" variants={itemVariants}>
            <div className="trust-avatars">
              <div className="avatar-circle">
                <img src="/images/testimonials/amr-mohamed.jpg" alt="Client" />
              </div>
              <div className="avatar-circle">
                <img src="/images/testimonials/abdullah-khaled.jpg" alt="Client" />
              </div>
              <div className="avatar-circle">
                <img src="/images/testimonials/mostafa-arkam.jpg" alt="Client" />
              </div>
              <div className="avatar-circle">
                <img src="/images/testimonials/omar-kandil.jpg" alt="Client" />
              </div>
              <div className="avatar-circle">
                <img src="/images/testimonials/hesham-ahmed.jpg" alt="Client" />
              </div>
            </div>
            <div className="trust-text">
              <div className="trust-count">500+</div>
              <div className="trust-label">Clients Trust Ahmed Younes</div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Hero Image */}
        <motion.div 
          className="hero-image-panel"
          variants={imageVariants}
        >
          <div className="hero-image-frame">
            <img src="/images/Profile.png" alt="Ahmed Younes - Professional Tech Mentor" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
