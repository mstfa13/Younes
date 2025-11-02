import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaClock, FaBriefcase, FaChartLine, FaLightbulb, FaUsers } from 'react-icons/fa';
import './Problems.css';

const Problems = () => {
  const problems = [
    {
      icon: <FaBriefcase />,
      title: "Lack of Practical Experience",
      description: "Most training focuses on theory, leaving you unprepared for real-world job requirements."
    },
    {
      icon: <FaClock />,
      title: "Time-Consuming Learning Paths",
      description: "Traditional education takes years while the industry demands immediate, job-ready skills."
    },
    {
      icon: <FaChartLine />,
      title: "Skills Gap",
      description: "What you learn doesn't match what employers actually need, creating a frustrating disconnect."
    },
    {
      icon: <FaUsers />,
      title: "No Mentorship",
      description: "Learning alone without guidance from experienced professionals leads to slow progress and mistakes."
    },
    {
      icon: <FaLightbulb />,
      title: "Unclear Career Path",
      description: "Without clear direction, it's hard to know what to learn and how to position yourself in the market."
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Outdated Curriculum",
      description: "Many programs teach obsolete technologies that are no longer relevant in today's job market."
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
    <section className="problems" id="problems">
      <motion.div 
        className="problems-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="problems-header">
          <motion.p className="problems-subtitle" variants={itemVariants}>
            The Challenge
          </motion.p>
          <motion.h2 className="problems-title" variants={itemVariants}>
            Why Most People Struggle to <span className="highlight-text">Break Into Tech</span>
          </motion.h2>
          <motion.p className="problems-description" variants={itemVariants}>
            Breaking into the tech industry is harder than ever. Here are the common roadblocks 
            holding talented people back from achieving their career goals.
          </motion.p>
        </div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="problem-card"
              variants={itemVariants}
            >
              <div className="problem-icon">
                {problem.icon}
              </div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div className="problems-cta" variants={itemVariants}>
          <p className="cta-text">Sound familiar? There's a better way.</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Our Solution
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Problems;
