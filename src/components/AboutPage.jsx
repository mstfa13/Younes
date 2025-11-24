import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaArrowRight,
  FaAward,
  FaUsers,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
  FaBriefcase,
  FaLightbulb,
  FaHandshake
} from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import './AboutPageModern.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Practical Learning",
      description: "We believe in learning by doing. Every concept is tied to real-world applications."
    },
    {
      icon: <FaUsers />,
      title: "Community First",
      description: "Building a supportive network where students grow together and help each other succeed."
    },
    {
      icon: <FaRocket />,
      title: "Career Focused",
      description: "Every program is designed with one goal: getting you job-ready and market-competitive."
    },
    {
      icon: <FaHandshake />,
      title: "Transparency",
      description: "Clear expectations, honest feedback, and realistic outcomes. No false promises."
    }
  ];

  const achievements = [
    {
      icon: <FaUsers />,
      number: "500+",
      label: "Students Trained"
    },
    {
      icon: <FaBriefcase />,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: <FaAward />,
      number: "50+",
      label: "Projects Delivered"
    },
    {
      icon: <FaChartLine />,
      number: "95%",
      label: "Success Rate"
    }
  ];

  return (
    <>
      <Header />
      <div className="about-page-modern">
        {/* Hero Section */}
        <section className="about-hero-modern">
          <div className="about-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="about-hero-content"
            >
              <p className="about-hero-subtitle">About TechBytes</p>
              <h1 className="about-hero-title">
                Empowering the Next Generation of <span className="highlight-text">Tech Leaders</span>
              </h1>
              <p className="about-hero-description">
                TechBytes was founded with a simple mission: bridge the gap between education and 
                employment by providing practical, industry-relevant training that transforms beginners 
                into job-ready professionals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="about-story-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="about-story-content"
            >
              <motion.div className="about-story-text" variants={itemVariants}>
                <h2 className="section-title">The Story Behind TechBytes</h2>
                <p className="section-description">
                  Founded by <strong>Ahmed Younes</strong>, a seasoned IT Project Manager and Agile Scrum Master 
                  with over 10 years of experience in leading digital transformation initiatives at multinational 
                  corporations like Vodafone, Etisalat, and Valeo.
                </p>
                <p className="section-description">
                  After witnessing countless talented individuals struggle to break into tech due to the gap 
                  between academic learning and industry requirements, Ahmed decided to create a solution. 
                  TechBytes was born from the belief that anyone with dedication and proper guidance can 
                  build a successful career in technology.
                </p>
                <p className="section-description">
                  What started as small training workshops has grown into a comprehensive program that has 
                  helped over 500 professionals transition into tech roles, learn market-ready skills, and 
                  advance their careers.
                </p>
              </motion.div>

              <motion.div className="about-story-highlights" variants={itemVariants}>
                <div className="highlight-card">
                  <FaGraduationCap className="highlight-icon" />
                  <h3>Expert-Led Training</h3>
                  <p>Learn from someone who's been in the trenches and knows what it takes to succeed.</p>
                </div>
                <div className="highlight-card">
                  <FaBriefcase className="highlight-icon" />
                  <h3>Industry Experience</h3>
                  <p>Curriculum built from real enterprise projects and actual job requirements.</p>
                </div>
                <div className="highlight-card">
                  <FaRocket className="highlight-icon" />
                  <h3>Proven Results</h3>
                  <p>95% of our graduates successfully transition to tech roles within months.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-values-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div className="section-header" variants={itemVariants}>
                <h2 className="section-title">Our Core Values</h2>
                <p className="section-description">
                  The principles that guide everything we do at TechBytes
                </p>
              </motion.div>

              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="value-card"
                    variants={itemVariants}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="about-achievements">
          <div className="about-achievements-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="achievements-grid"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  variants={itemVariants}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="about-connect">
          <div className="about-connect-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="connect-content"
            >
              <h2 className="connect-title">Connect with Ahmed Younes</h2>
              <p className="connect-description">
                Follow the journey, get insights, and stay updated with the latest in tech education
              </p>
              <div className="social-links-modern">
                <a href="https://www.linkedin.com/in/ahmed-younes-ay/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582441811249" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/techbytes_by_younes" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@techbytes_by_younes" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaTiktok />
                </a>
                <a href="https://www.youtube.com/@techbytesbyyounes" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaYoutube />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-modern">
          <div className="about-cta-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cta-content-modern"
            >
              <h2 className="cta-title-modern">Ready to Transform Your Career?</h2>
              <p className="cta-description-modern">
                Join hundreds of professionals who've successfully transitioned into tech with TechBytes
              </p>
              <motion.a
                href="/register.html"
                target="_blank"
                rel="noreferrer noopener"
                className="cta-button-modern"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey <FaArrowRight />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;