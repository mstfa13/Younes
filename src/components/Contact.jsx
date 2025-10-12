import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Add your form submission logic here (e.g., API call, email service)
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className="contact" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <motion.p className="contact-subtitle" variants={itemVariants}>
            Get In Touch
          </motion.p>
          <motion.h2 className="contact-title" variants={itemVariants}>
            Let's Start Your Journey
          </motion.h2>
          <motion.p className="contact-description" variants={itemVariants}>
            Have questions about the program? Ready to transform your career? 
            Reach out and let's discuss how we can help you succeed.
          </motion.p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Left Side - Contact Form */}
          <motion.div className="contact-form-wrapper glass-card hover-lift" variants={itemVariants}>
            {submitted && (
              <div className="form-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your goals and how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-button magnetic squish-click neon-glow">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            {/* Email */}
            <div className="contact-info-item glass-card hover-lift scroll-reveal">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Email</h3>
                <p className="contact-info-text">
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-info-item glass-card hover-lift scroll-reveal">
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Phone</h3>
                <p className="contact-info-text">
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="contact-info-item glass-card hover-lift scroll-reveal">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">Location</h3>
                <p className="contact-info-text">
                  Cairo, Egypt<br />
                  Available for remote consulting worldwide
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <h3 className="contact-social-title">Connect With Me</h3>
              <div className="contact-social-links">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link magnetic hover-lift neon-glow"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link magnetic hover-lift neon-glow"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://twitter.com/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link magnetic hover-lift neon-glow"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="social-link magnetic hover-lift neon-glow"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
