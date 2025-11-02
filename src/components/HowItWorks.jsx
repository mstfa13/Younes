import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaBook, FaLaptopCode, FaBriefcase } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <FaUserPlus />,
      title: "Apply & Get Accepted",
      description: "Submit your application and join our next cohort. We'll assess your goals and ensure our program is the right fit for you.",
      duration: "Day 1"
    },
    {
      number: "02",
      icon: <FaBook />,
      title: "Master the Fundamentals",
      description: "Build a solid foundation with our structured curriculum. Learn the core concepts and tools used by professional developers.",
      duration: "Weeks 1-4"
    },
    {
      number: "03",
      icon: <FaLaptopCode />,
      title: "Build Real Projects",
      description: "Apply your knowledge by working on real-world projects. Create a portfolio that demonstrates your skills to potential employers.",
      duration: "Weeks 5-10"
    },
    {
      number: "04",
      icon: <FaBriefcase />,
      title: "Land Your Dream Job",
      description: "Get career support including resume review, interview prep, and job placement assistance. We help you until you succeed.",
      duration: "Weeks 11-12+"
    }
  ];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="how-it-works" id="how-it-works">
      <motion.div 
        className="how-it-works-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="how-it-works-header">
          <motion.p className="how-it-works-subtitle" variants={itemVariants}>
            Your Journey
          </motion.p>
          <motion.h2 className="how-it-works-title" variants={itemVariants}>
            How It <span className="highlight-text">Works</span>
          </motion.h2>
          <motion.p className="how-it-works-description" variants={itemVariants}>
            Our proven 4-step process takes you from beginner to job-ready in just 12 weeks. 
            Here's exactly what to expect on your journey with TechnBytes.
          </motion.p>
        </div>

        <div className="steps-timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="step-item"
              variants={itemVariants}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon-wrapper">
                  <div className="step-icon">{step.icon}</div>
                </div>
                <div className="step-details">
                  <div className="step-duration">{step.duration}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </motion.div>
          ))}
        </div>

        <motion.div className="how-it-works-cta" variants={itemVariants}>
          <h3 className="cta-title">Start Your Transformation Today</h3>
          <p className="cta-text">Limited spots available for our next cohort starting soon.</p>
          <div className="cta-buttons">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => window.open('/register.html', '_blank', 'noopener,noreferrer')}
            >
              Apply Now
            </button>
            <button 
              className="btn btn-secondary btn-large"
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View FAQs
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
