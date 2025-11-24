import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaComments, FaLanguage } from 'react-icons/fa';
import './RegistrationForm.css';

const RegistrationForm = ({ isOpen, onClose, inline = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    currentJob: '',
    company: '',
    yearsOfExperience: '',
    university: '',
    graduationYear: '',
    major: '',
    majorOther: '',
    englishLevel: '',
    howDidYouHear: '',
    resume: null,
    setupPreference: '',
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
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare form data for Google Sheets
      const submissionData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        currentJob: formData.currentJob,
        company: formData.company,
        yearsOfExperience: formData.yearsOfExperience,
        university: formData.university,
        graduationYear: formData.graduationYear,
        major: formData.major === 'Other' ? formData.majorOther : formData.major,
        englishLevel: formData.englishLevel,
        howDidYouHear: formData.howDidYouHear,
        setupPreference: formData.setupPreference,
        motivation: formData.motivation
      };

      // Google Apps Script Web App URL for Individuals Form
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxOyjeec6CFEV8LI8PvfJFvjh0DJsDOcjeeeanVVdwUpjzi8v5Gp5YfSL0nC3duTEkI/exec';

      // Submit to Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Show success message
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 2 seconds and close
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          currentJob: '',
          company: '',
          yearsOfExperience: '',
          university: '',
          graduationYear: '',
          major: '',
          majorOther: '',
          englishLevel: '',
          howDidYouHear: '',
          resume: null,
          setupPreference: '',
          motivation: ''
        });
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your application. Please try again or contact us directly.');
    }
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
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+20 100 000 0000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
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
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">Address / City *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your city or address"
                  required
                />
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="form-section">
              <h3 className="form-section-title">
                <FaUser /> Professional Information
              </h3>

              <div className="form-group">
                <label htmlFor="currentJob" className="form-label">Current Job *</label>
                <input
                  type="text"
                  id="currentJob"
                  name="currentJob"
                  value={formData.currentJob}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g., Software Engineer, Undergraduate, Student / Marketing Specialist"
                  required
                />
                <small className="form-help-text">
                  • If undergraduate/Student, please write "Undergraduate"<br />
                  • If you are a student but currently working beside university, please write [ Student / (Your Current Role) ]
                </small>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="If Not Applicable, write NA"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="yearsOfExperience" className="form-label">Years of Experience *</label>
                  <select
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Select years of experience</option>
                    <option value="0">0 Years (No Experience)</option>
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6-10">6-10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
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
                  <label htmlFor="university" className="form-label">University *</label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your university name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="graduationYear" className="form-label">Graduation Year *</label>
                  <input
                    type="number"
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., 2023"
                    min="1950"
                    max="2030"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="major" className="form-label">Major *</label>
                <select
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Select your major</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Management">Management</option>
                  <option value="Economics">Economics</option>
                  <option value="Medicine">Medicine</option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Arts">Arts</option>
                  <option value="Science">Science</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.major === 'Other' && (
                <div className="form-group">
                  <label htmlFor="majorOther" className="form-label">If Other, Please Specify</label>
                  <input
                    type="text"
                    id="majorOther"
                    name="majorOther"
                    value={formData.majorOther}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Please specify your major"
                  />
                </div>
              )}
            </div>

            {/* Skills Assessment Section */}
            <div className="form-section">
              <h3 className="form-section-title">
                <FaLanguage /> Skills Assessment
              </h3>

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
                  <option value="Beginner">Beginner (A1-A2)</option>
                  <option value="Intermediate">Intermediate (B1-B2)</option>
                  <option value="Advanced">Advanced (C1)</option>
                  <option value="Proficient">Proficient (C2)</option>
                  <option value="Native">Native Speaker</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="howDidYouHear" className="form-label">How did you hear about us? *</label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Friend/Colleague">Friend/Colleague</option>
                  <option value="Google Search">Google Search</option>
                  <option value="University/College">University/College</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="resume" className="form-label">Attach Your Resume/CV</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  className="form-input form-file"
                  accept=".pdf,.doc,.docx"
                />
                <small className="form-help-text">
                  Upload 1 supported file: PDF or document. Max 10 MB.
                </small>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="form-section">
              <h3 className="form-section-title">
                <FaComments /> Additional Information
              </h3>

              <div className="form-group">
                <label className="form-label">Which Setup Do you prefer? *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="setupPreference"
                      value="Online"
                      checked={formData.setupPreference === 'Online'}
                      onChange={handleChange}
                      required
                    />
                    <span>Online</span>
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      name="setupPreference"
                      value="Offline"
                      checked={formData.setupPreference === 'Offline'}
                      onChange={handleChange}
                      required
                    />
                    <span>Offline</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="motivation" className="form-label">Why are you applying for this Course? *</label>
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
