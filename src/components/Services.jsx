import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaChalkboardTeacher, FaRocket, FaBriefcase, FaCertificate, FaArrowRight } from 'react-icons/fa';
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
      icon: <FaLaptopCode />,
      title: "Technical Skills Training",
      description: "Master in-demand technologies including React, Node.js, Python, and cloud platforms. Build real-world projects that showcase your abilities to potential employers.",
      features: [
        "Hands-on coding projects",
        "Modern tech stack training",
        "Industry best practices",
        "Code review & feedback"
      ]
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Agile & Scrum Methodology",
      description: "Learn professional project management frameworks used by top tech companies. Understand sprint planning, daily standups, and iterative development.",
      features: [
        "Scrum fundamentals",
        "Agile ceremonies",
        "Sprint planning techniques",
        "Team collaboration tools"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Soft Skills Development",
      description: "Enhance your communication, presentation, and teamwork abilities. Learn how to work effectively in cross-functional teams and lead projects.",
      features: [
        "Communication skills",
        "Presentation techniques",
        "Team collaboration",
        "Leadership development"
      ]
    },
    {
      icon: <FaBriefcase />,
      title: "Career Preparation",
      description: "Get job-ready with resume building, interview preparation, and portfolio development. Connect with our industry network for opportunities.",
      features: [
        "Resume optimization",
        "Mock interviews",
        "LinkedIn profile building",
        "Job search strategies"
      ]
    },
    {
      icon: <FaRocket />,
      title: "Real-World Projects",
      description: "Work on actual industry scenarios and build a professional portfolio. Gain practical experience that employers value.",
      features: [
        "Live project experience",
        "Portfolio development",
        "Client interaction",
        "Problem-solving skills"
      ]
    },
    {
      icon: <FaCertificate />,
      title: "Mentorship & Support",
      description: "Receive personalized guidance from Ahmed Younes and ongoing support throughout your learning journey and beyond.",
      features: [
        "One-on-one mentorship",
        "Weekly Q&A sessions",
        "Community support",
        "Lifetime access to materials"
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
