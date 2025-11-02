import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaComments, FaLanguage } from 'react-icons/fa';
import './RegistrationForm.css';

const RegistrationForm = ({ isOpen, onClose, inline = false }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    field: '',
    englishLevel: '',
    communicationSkills: '',
    technicalBackground: '',
    availability: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!inline && isOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!inline) {
      document.body.style.overflow = 'unset';
    }

    return () => {
      if (!inline) document.body.style.overflow = 'unset';
    };
  }, [isOpen, inline]);

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
      
      // Reset form after 2 seconds and close
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          age: '',
          education: '',
          field: '',
          englishLevel: '',
          communicationSkills: '',
          technicalBackground: '',
          availability: '',
          motivation: ''
        });
        onClose();
      }, 2000);
    }, 1500);
  };

  if (!inline && !isOpen) return null;

  const inner = (
      <motion.div 
        className="registration-container"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => inline ? null : e.stopPropagation()}
      >
        {/* Header */}
        <div className="registration-header">
          <div>
            <h2 className="registration-title">Join TechBytes Program</h2>
            <p className="registration-subtitle">Fill out the form below to start your journey</p>
          </div>
          <button 
            className="registration-close"
            onClick={() => (inline ? window.close() : onClose())}
            aria-label={inline ? 'Close tab' : 'Close registration form'}
          >
            <FaTimes />
          </button>
        </div>

        {/* Form */}
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="registration-form-content">
            {/* Personal Information Section */}
            <div className="form-section">
              <h3 className="form-section-title">
                <FaUser /> Personal Information
              </h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="age" className="form-label">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your age"
                    min="18"
                    max="100"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
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

            {/* Educational Background Section */}
            <div className="form-section">
              <h3 className="form-section-title">
                <FaGraduationCap /> Educational Background
              </h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="education" className="form-label">Highest Education Level *</label>
                  <select
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Select your education level</option>
                    <option value="high-school">High School</option>
                    <option value="associate">Associate Degree</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="field" className="form-label">Field of Study *</label>
                  <input
                    type="text"
                    id="field"
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., Computer Science, Engineering"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Skills Assessment Section */}
            <div className="form-section">
              <h3 className="form-section-title">
                <FaLanguage /> Skills Assessment
              </h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="englishLevel" className="form-label">English Level *</label>
                  <select
                    id="englishLevel"
                    name="englishLevel"
                    value={formData.englishLevel}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Select your English level</option>
                    <option value="beginner">Beginner (A1-A2)</option>
                    <option value="intermediate">Intermediate (B1-B2)</option>
                    <option value="advanced">Advanced (C1)</option>
                    <option value="proficient">Proficient (C2)</option>
                    <option value="native">Native Speaker</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="communicationSkills" className="form-label">Communication Skills *</label>
                  <select
                    id="communicationSkills"
                    name="communicationSkills"
                    value={formData.communicationSkills}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Rate your communication skills</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="good">Good</option>
                    <option value="very-good">Very Good</option>
                    <option value="excellent">Excellent</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="technicalBackground" className="form-label">Technical Background *</label>
                <select
                  id="technicalBackground"
                  name="technicalBackground"
                  value={formData.technicalBackground}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Select your technical background</option>
                  <option value="none">No Technical Background</option>
                  <option value="basic">Basic (Some exposure to tech)</option>
                  <option value="intermediate">Intermediate (Can work with tools)</option>
                  <option value="advanced">Advanced (Professional experience)</option>
                  <option value="expert">Expert (Years of experience)</option>
                </select>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="form-section">
              <h3 className="form-section-title">
                <FaComments /> Additional Information
              </h3>

              <div className="form-group">
                <label htmlFor="availability" className="form-label">Weekly Availability *</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">How many hours per week can you commit?</option>
                  <option value="5-10">5-10 hours/week</option>
                  <option value="10-15">10-15 hours/week</option>
                  <option value="15-20">15-20 hours/week</option>
                  <option value="20+">20+ hours/week</option>
                  <option value="full-time">Full-time commitment</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="motivation" className="form-label">Why do you want to join TechBytes? *</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell us about your goals and what you hope to achieve..."
                  rows="4"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="registration-footer">
            {submitSuccess ? (
              <div className="submit-success">
                <div className="success-icon">✓</div>
                <p>Registration submitted successfully!</p>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </>
            )}
          </div>
        </form>
      </motion.div>
  );

  if (inline) {
    return (
      <div className="registration-page">
        {inner}
      </div>
    );
  }

  return createPortal(
    <motion.div 
      className="registration-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {inner}
    </motion.div>,
    document.body
  );
};

export default RegistrationForm;
