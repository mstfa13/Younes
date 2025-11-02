import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaUsers, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import './EnterpriseForm.css';

const EnterpriseForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    contactName: '',
    jobTitle: '',
    email: '',
    phone: '',
    companySize: '',
    trainingNeeds: '',
    numberOfEmployees: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          companyName: '',
          industry: '',
          contactName: '',
          jobTitle: '',
          email: '',
          phone: '',
          companySize: '',
          trainingNeeds: '',
          numberOfEmployees: '',
          timeline: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <div className="enterprise-form-page">
      <motion.div 
        className="enterprise-form-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="enterprise-form-header" variants={itemVariants}>
          <h1 className="enterprise-form-title">
            Enterprise Training <span className="highlight-text">Solutions</span>
          </h1>
          <p className="enterprise-form-subtitle">
            Transform your team with customized training programs. Fill out the form below and our team will contact you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form 
          className="enterprise-form" 
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          {/* Company Information */}
          <div className="form-section">
            <h3 className="form-section-title">
              <FaBuilding /> Company Information
            </h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your company name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="industry" className="form-label">Industry *</label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance & Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="telecommunications">Telecommunications</option>
                  <option value="education">Education</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="companySize" className="form-label">Company Size *</label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1,000 employees</option>
                  <option value="1000+">1,000+ employees</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="numberOfEmployees" className="form-label">Employees to Train *</label>
                <input
                  type="number"
                  id="numberOfEmployees"
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Number of employees"
                  min="1"
                  required
                />
              </div>
            </div>
          </div>

          {/* Contact Person */}
          <div className="form-section">
            <h3 className="form-section-title">
              <FaUser /> Contact Person
            </h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactName" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="jobTitle" className="form-label">Job Title *</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your job title"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">Business Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>
          </div>

          {/* Training Requirements */}
          <div className="form-section">
            <h3 className="form-section-title">
              <FaBriefcase /> Training Requirements
            </h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="trainingNeeds" className="form-label">Training Focus Area *</label>
                <select
                  id="trainingNeeds"
                  name="trainingNeeds"
                  value={formData.trainingNeeds}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select training area</option>
                  <option value="project-management">Project Management</option>
                  <option value="agile-scrum">Agile & Scrum</option>
                  <option value="software-development">Software Development</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="digital-transformation">Digital Transformation</option>
                  <option value="leadership">Leadership & Management</option>
                  <option value="technical-skills">Technical Skills</option>
                  <option value="custom">Custom Program</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="timeline" className="form-label">Preferred Timeline *</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (Within 1 month)</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6+months">6+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Additional Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell us more about your training needs, goals, or any specific requirements..."
                rows="5"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button 
              type="submit" 
              className="btn btn-primary btn-large enterprise-submit-btn"
              disabled={isSubmitting || submitSuccess}
            >
              {isSubmitting ? (
                'Submitting...'
              ) : submitSuccess ? (
                <>
                  <FaCheckCircle /> Request Submitted!
                </>
              ) : (
                'Submit Enterprise Request'
              )}
            </button>
            <p className="form-note">
              We'll review your request and get back to you within 24 hours
            </p>
          </div>
        </motion.form>

        {/* Success Message */}
        {submitSuccess && (
          <motion.div 
            className="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <FaCheckCircle className="success-icon" />
            <h3>Thank you for your interest!</h3>
            <p>Our enterprise team will contact you shortly to discuss your training needs.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default EnterpriseForm;
