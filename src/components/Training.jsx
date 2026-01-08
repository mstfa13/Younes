import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaUsers, FaRocket, FaCertificate, FaChartLine } from 'react-icons/fa';
import './Training.css';

const Training = () => {
  // Benefits data
  const benefits = [
    {
      icon: <FaLaptopCode />,
      title: "Hands-On Projects",
      text: "Work on real-world projects that mirror actual industry scenarios."
    },
    {
      icon: <FaUsers />,
      title: "Expert Mentorship",
      text: "Get personalized guidance from industry veterans with 10+ years of experience."
    },
    {
      icon: <FaRocket />,
      title: "Career Acceleration",
      text: "Fast-track your career with proven strategies and insider knowledge."
    },
    {
      icon: <FaCertificate />,
      title: "Industry Certification",
      text: "Receive a recognized certification upon program completion."
    },
    {
      icon: <FaChartLine />,
      title: "Market-Ready Skills",
      text: "Master the exact skills employers are actively looking for today."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const handleEnrollClick = () => {
    window.open('/register.html', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="training" id="training">
      <motion.div 
        className="training-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="training-header">
          <motion.p className="training-subtitle" variants={itemVariants}>
            Transform Your Career
          </motion.p>
          <motion.h2 className="training-title scroll-reveal" variants={itemVariants}>
            <span className="gradient-text-animated">Zero to Market-Ready</span> Program
          </motion.h2>
          <motion.p className="training-description" variants={itemVariants}>
            A comprehensive training program designed to take you from beginner to job-ready 
            professional in the tech industry, with proven methodologies and real-world experience.
          </motion.p>
        </div>

        {/* Two Column Content */}
        <div className="training-content">
          {/* Left Side - Image */}
          <motion.div className="training-image" variants={imageVariants}>
            <div className="training-image-wrapper tilt-3d hover-lift hover-reveal">
              {/* Replace with actual program image/illustration */}
              {/* <img src="/images/training-program.jpg" alt="Training program" /> */}
              <div className="training-image-placeholder">
                <FaGraduationCap />
                <p>Replace with program image<br />or illustration<br />(Recommended: 800x600px)</p>
              </div>
              <div className="training-badge float-animation">Limited Spots Available</div>
            </div>
          </motion.div>

          {/* Right Side - Details */}
          <div className="training-details">
            <motion.h3 className="training-details-title" variants={itemVariants}>
              What You'll Get
            </motion.h3>
            <motion.p className="training-details-text" variants={itemVariants}>
              This intensive program combines theory with practice, giving you everything you need 
              to succeed in today's competitive tech landscape.
            </motion.p>

            {/* Benefits List */}
            <div className="training-benefits">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="benefit-item glass-card hover-lift scroll-reveal"
                  variants={benefitVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-text">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div className="training-cta" variants={itemVariants}>
              <button 
                className="btn btn-primary magnetic squish-click neon-glow" 
                onClick={handleEnrollClick}
                aria-label="Enroll in the training program"
              >
                Enroll Now
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Training;
