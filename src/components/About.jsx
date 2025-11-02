import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="about about-compact" id="about">
      <motion.div 
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Left Side - Image */}
        <motion.div className="about-image" variants={imageVariants}>
          <div className="about-image-wrapper tilt-3d hover-lift hover-reveal">
            <img src="/images/About.jpg" alt="Ahmed Younes - TechnBytes Founder" />
          </div>
          <div className="about-image-accent"></div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="about-content">
          <motion.p className="about-subtitle" variants={itemVariants}>
            About TechnBytes & Ahmed Younes
          </motion.p>

          <motion.h2 className="about-title" variants={itemVariants}>
            Transforming Ideas Into Market-Ready Solutions
          </motion.h2>

          <motion.p className="about-text" variants={itemVariants}>
            With over <strong>10+ years of experience</strong> in software and IT project management, 
            Ahmed Younes has led cross-functional teams at leading multinational companies. His expertise 
            spans across <strong>agile methodologies</strong>, <strong>digital transformation</strong>, 
            and <strong>strategic planning</strong>.
          </motion.p>

          {/* Stats Section */}
          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-item glass-card hover-lift scroll-reveal">
              <span className="stat-number gradient-text-animated">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item glass-card hover-lift scroll-reveal">
              <span className="stat-number gradient-text-animated">50+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item glass-card hover-lift scroll-reveal">
              <span className="stat-number gradient-text-animated">500+</span>
              <span className="stat-label">Professionals Trained</span>
            </div>
          </motion.div>

          {/* Read More Button */}
          <motion.div variants={itemVariants}>
            <Link to="/about" className="read-more-btn hover-lift">
              Read Full Story
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
