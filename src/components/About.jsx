import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie } from 'react-icons/fa';
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
    <section className="about" id="about">
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
            {/* Replace with actual image */}
            {/* <img src="/images/about-photo.jpg" alt="Professional photo" /> */}
            <div className="about-image-placeholder">
              <FaUserTie />
              <p>Replace with professional photo<br />or symbolic image<br />(Recommended: 600x750px)</p>
            </div>
          </div>
          <div className="about-image-accent"></div>
        </motion.div>

        {/* Right Side - Content */}
        <div className="about-content">
          <motion.p className="about-subtitle" variants={itemVariants}>
            About Me
          </motion.p>

          <motion.h2 className="about-title" variants={itemVariants}>
            Transforming Ideas Into Market-Ready Solutions
          </motion.h2>

          <motion.p className="about-text" variants={itemVariants}>
            With over <strong>10+ years of experience</strong> in software and IT project management, 
            I've led cross-functional teams at leading multinational companies including VOIS, Valeo, 
            Etisalat, and El Sewedy. My expertise spans across <strong>agile methodologies</strong>, 
            <strong>digital transformation</strong>, and <strong>strategic planning</strong>.
          </motion.p>

          <motion.p className="about-text" variants={itemVariants}>
            Throughout my career, I've successfully delivered <strong>50+ enterprise-level projects</strong>, 
            managed budgets exceeding <strong>$10M</strong>, and mentored hundreds of professionals 
            in their journey from junior developers to senior project leads.
          </motion.p>

          <motion.div className="about-highlight" variants={itemVariants}>
            <p>
              <strong>My Mission:</strong> To empower aspiring tech professionals with the skills, 
              knowledge, and confidence they need to go from zero to market-ready, landing their 
              dream roles in the tech industry.
            </p>
          </motion.div>

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
        </div>
      </motion.div>
    </section>
  );
};

export default About;
