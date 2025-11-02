import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaBuilding } from 'react-icons/fa';
import './Companies.css';

const Companies = () => {
  const navigate = useNavigate();
  // Company data - Using actual logo files
  const companies = [
    { name: 'VOIS', logo: '/images/companies/vois-new.png' },
    { name: 'Valeo', logo: '/images/companies/Valeo_Logo.svg.png' },
    { name: 'Etisalat', logo: '/images/companies/etisalat-logo-freelogovectors.net_.png' },
    { name: 'El Sewedy', logo: '/images/companies/Elsewedy_Electric_Logo.svg.png' },
    { name: 'Freelancer.com', logo: '/images/companies/Freelancer_logo.png' },
    { name: 'Nawy', logo: '/images/companies/Nawy_Logo.png' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className="companies" 
      id="companies"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="companies-container">
        <motion.h2 className="companies-title" variants={titleVariants}>
          Worked With <span className="gradient-text-animated">Leading Companies</span>
        </motion.h2>

        <div className="companies-slider-wrapper">
          <div className="companies-track">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div key={`first-${index}`} className="company-logo-wrapper">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="company-logo"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="company-logo-placeholder">
                        <span style="font-size: 1.125rem; font-weight: 600; color: var(--text-secondary);">${company.name}</span>
                        <small style="font-size: 0.75rem; color: var(--text-light); font-style: italic;">Logo needed</small>
                      </div>
                    `;
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless infinite scroll */}
            {companies.map((company, index) => (
              <div key={`second-${index}`} className="company-logo-wrapper">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="company-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="company-logo-placeholder">
                        <span style="font-size: 1.125rem; font-weight: 600; color: var(--text-secondary);">${company.name}</span>
                        <small style="font-size: 0.75rem; color: var(--text-light); font-style: italic;">Logo needed</small>
                      </div>
                    `;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div className="companies-cta" variants={titleVariants}>
          <p className="companies-cta-text">Want to bring enterprise-level training to your organization?</p>
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/enterprise')}
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Companies;
