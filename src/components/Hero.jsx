import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
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
    <section className="hero" id="home">
      {/* Decorative Elements */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>

      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Content */}
        <div className="hero-content">
          <motion.h1 className="hero-title scroll-reveal" variants={itemVariants}>
            Helping You Go from <span className="gradient-text-animated">Zero to Market-Ready</span> in Tech.
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            I'm <strong>Ahmed Younes</strong>, a Software & IT Project Manager who worked with 
            top multinational companies, helping professionals and teams deliver exceptional results.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <button 
              className="btn btn-primary magnetic squish-click neon-glow" 
              onClick={() => scrollToSection('training')}
              aria-label="Join the training program"
            >
              Join My Program
            </button>
            <button 
              className="btn btn-secondary magnetic squish-click" 
              onClick={() => scrollToSection('about')}
              aria-label="See my portfolio and work"
            >
              See My Work
            </button>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div 
          className="hero-image"
          variants={imageVariants}
        >
          <div className="hero-image-wrapper tilt-3d hover-lift float-animation">
            <img src="/images/hero-portrait.png" alt="Ahmed Younes - Professional portrait" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
