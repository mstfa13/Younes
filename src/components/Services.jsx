import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserTie, FaComments, FaGraduationCap, FaMicrophone, FaFileAlt, FaBuilding, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
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

  const services = [
    {
      icon: <FaUserTie />,
      title: "Career Mentoring",
      description: "One-on-one personalized mentoring sessions to guide your career in tech. Get expert advice on career paths, skill development, and professional growth.",
      features: [
        "1-hour private sessions",
        "Personalized career roadmap",
        "Industry insights & guidance",
        "Ongoing support"
      ]
    },
    {
      icon: <FaComments />,
      title: "Tech Career Consultation",
      description: "Comprehensive consultation sessions for career transition or advancement in tech. Perfect for those looking to break into or grow within the industry.",
      features: [
        "Career path analysis",
        "Skills gap assessment",
        "Market trends insights",
        "Action plan development"
      ]
    },
    {
      icon: <FaGraduationCap />,
      title: "Interactive Software Agile PM Career Accelerator",
      description: "Intensive 8-week program that transforms beginners into job-ready Product Managers. Includes 1-month post-program support for career launch.",
      features: [
        "8 weeks intensive training",
        "Real-world PM projects",
        "1-month career support",
        "Certificate of completion"
      ]
    },
    {
      icon: <FaMicrophone />,
      title: "Mock Interview Sessions",
      description: "Prepare for your tech interviews with realistic mock sessions. Get valuable feedback and tips to ace your next interview.",
      features: [
        "Real interview simulation",
        "Behavioral & technical prep",
        "Detailed feedback",
        "Confidence building"
      ]
    },
    {
      icon: <FaFileAlt />,
      title: "Resume Writing Service",
      description: "Professional resume writing and optimization to help you stand out. ATS-friendly formats that get you noticed by recruiters.",
      features: [
        "ATS-optimized format",
        "Keyword optimization",
        "Professional layout",
        "LinkedIn optimization"
      ]
    },
    {
      icon: <FaBuilding />,
      title: "Corporate Training",
      description: "Customized training programs for organizations looking to upskill their teams. Scalable solutions for companies of all sizes.",
      features: [
        "Customized curriculum",
        "Flexible scheduling",
        "Team-based learning",
        "Progress tracking"
      ]
    }
  ];

  return (
    <section className="services" id="services">
      <motion.div 
        className="services-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="services-header" variants={itemVariants}>
          <p className="services-subtitle">What We Offer</p>
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            Comprehensive training programs designed to take you from zero to market-ready 
            with the skills, knowledge, and confidence needed to succeed in tech.
          </p>
          <button 
            className="btn btn-secondary services-learn-more"
            onClick={() => navigate('/services')}
          >
            View All Services <FaArrowRight />
          </button>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card glass-card hover-lift"
              variants={itemVariants}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-bullet">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="services-cta" variants={itemVariants}>
          <h3 className="cta-title">Ready to Transform Your Career?</h3>
          <p className="cta-text">
            Join hundreds of professionals who've already started their journey with TechBytes.
          </p>
          <div className="services-cta-buttons">
            <button 
              className="btn btn-secondary cta-button cta-button-secondary"
              onClick={() => navigate('/services')}
            >
              Explore All Services <FaArrowRight />
            </button>
            <button 
              className="btn btn-primary cta-button"
              onClick={() => window.open('/register.html', '_blank', 'noopener,noreferrer')}
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
