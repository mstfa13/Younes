import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaUserTie, FaCertificate, FaHandshake, FaChartLine } from 'react-icons/fa';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: <FaRocket />,
      title: "Real-World Projects",
      description: "Work on actual industry projects that build your portfolio and prove your capabilities to employers."
    },
    {
      icon: <FaUserTie />,
      title: "Expert Mentorship",
      description: "Learn directly from professionals with 10+ years of experience who've been where you want to go."
    },
    {
      icon: <FaChartLine />,
      title: "Market-Relevant Curriculum",
      description: "Focus on the exact skills and technologies that companies are hiring for right now."
    },
    {
      icon: <FaHandshake />,
      title: "Personalized Guidance",
      description: "Get one-on-one support tailored to your learning pace, background, and career goals."
    },
    {
      icon: <FaCertificate />,
      title: "Proven Framework",
      description: "Follow a structured path that's helped 500+ students successfully transition into tech careers."
    },
    {
      icon: <FaCheckCircle />,
      title: "Job-Ready in Weeks",
      description: "Complete the program in 8-12 weeks and be ready to apply for jobs with confidence."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="solutions" id="solutions">
      <motion.div 
        className="solutions-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="solutions-header">
          <motion.p className="solutions-subtitle" variants={itemVariants}>
            Our Approach
          </motion.p>
          <motion.h2 className="solutions-title" variants={itemVariants}>
            The <span className="highlight-text">TechnBytes Solution</span>
          </motion.h2>
          <motion.p className="solutions-description" variants={itemVariants}>
            We've designed a comprehensive program that addresses every challenge you face, 
            providing clear pathways from where you are to where you want to be.
          </motion.p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="solution-card"
              variants={itemVariants}
            >
              <div className="solution-icon">
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="solutions-cta" variants={itemVariants}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Career?</h3>
            <p className="cta-text">Join 500+ professionals who've successfully made the transition.</p>
          </div>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => window.open('/register.html', '_blank', 'noopener,noreferrer')}
          >
            Join Program Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Solutions;
