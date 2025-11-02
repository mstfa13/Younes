import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaAward, FaLightbulb, FaRocket, FaUsers, FaHeart, FaArrowRight } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import './About.css';

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

  return (
    <>
      <Header />
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <motion.div 
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 className="about-hero-title" variants={itemVariants}>
              About TechnBytes & Ahmed Younes
            </motion.h1>
            <motion.p className="about-hero-subtitle" variants={itemVariants}>
              Empowering the Next Generation of Tech Professionals
            </motion.p>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="about-full-content">
          <motion.div 
            className="about-full-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* The Story Section */}
            <motion.div className="about-section" variants={itemVariants}>
              <div className="about-section-icon">
                <FaLightbulb />
              </div>
              <h2>The TechnBytes Story</h2>
              <p>
                TechnBytes was born from a simple yet powerful vision: to bridge the gap between 
                academic learning and real-world industry demands. Founded by Ahmed Younes, a seasoned 
                IT professional with over a decade of experience, TechnBytes represents a culmination 
                of years of industry insights, lessons learned, and a deep passion for education.
              </p>
              <p>
                The journey began when Ahmed recognized a critical challenge facing fresh graduates 
                and career switchers - the struggle to transition from theoretical knowledge to 
                practical, market-ready skills. Having witnessed countless talented individuals 
                struggle to break into the tech industry despite their potential, Ahmed decided 
                to create a transformative learning experience that would change this narrative.
              </p>
            </motion.div>

            {/* Ahmed Younes Section */}
            <motion.div className="about-section about-founder" variants={itemVariants}>
              <div className="founder-header">
                <div className="about-section-icon">
                  <FaUserTie />
                </div>
                <div>
                  <h2>Meet Ahmed Younes</h2>
                  <p className="founder-title">Founder & Lead Instructor</p>
                </div>
              </div>
              
              <div className="founder-bio">
                <p>
                  Ahmed Younes brings over <strong>10+ years of hands-on experience</strong> in 
                  software development, IT project management, and digital transformation. His career 
                  spans across prestigious multinational companies including:
                </p>
                
                <ul className="company-list">
                  <li><strong>VOIS (Vodafone Intelligent Solutions)</strong> - Led enterprise-scale 
                  digital transformation initiatives</li>
                  <li><strong>Valeo</strong> - Managed cross-functional agile teams in automotive 
                  software development</li>
                  <li><strong>Etisalat</strong> - Drove telecommunications infrastructure projects</li>
                  <li><strong>El Sewedy</strong> - Spearheaded IT modernization and system integration</li>
                </ul>

                <p>
                  Throughout his career, Ahmed has:
                </p>
                <ul className="achievements-list">
                  <li>Successfully delivered <strong>50+ enterprise-level projects</strong> across 
                  various industries</li>
                  <li>Managed project budgets exceeding <strong>$10 million</strong></li>
                  <li>Led and mentored teams of up to <strong>30+ professionals</strong></li>
                  <li>Trained and guided <strong>500+ aspiring tech professionals</strong></li>
                  <li>Implemented agile methodologies in organizations transitioning from traditional 
                  project management</li>
                  <li>Achieved a <strong>95%+ project success rate</strong> in on-time, on-budget delivery</li>
                </ul>
              </div>
            </motion.div>

            {/* Expertise Section */}
            <motion.div className="about-section" variants={itemVariants}>
              <div className="about-section-icon">
                <FaAward />
              </div>
              <h2>Areas of Expertise</h2>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <h3>Agile & Scrum Methodologies</h3>
                  <p>Certified Scrum Master with extensive experience in agile transformation, 
                  sprint planning, and iterative development processes.</p>
                </div>
                <div className="expertise-item">
                  <h3>Project Management</h3>
                  <p>Expert in end-to-end project lifecycle management, risk mitigation, stakeholder 
                  communication, and resource optimization.</p>
                </div>
                <div className="expertise-item">
                  <h3>Software Development</h3>
                  <p>Proficient in modern development stacks, including React, Node.js, Python, 
                  and cloud technologies (AWS, Azure).</p>
                </div>
                <div className="expertise-item">
                  <h3>Digital Transformation</h3>
                  <p>Strategic planning and execution of enterprise-wide digital transformation 
                  initiatives, modernizing legacy systems.</p>
                </div>
                <div className="expertise-item">
                  <h3>Team Leadership</h3>
                  <p>Building and leading high-performing cross-functional teams, fostering 
                  collaboration, and developing talent.</p>
                </div>
                <div className="expertise-item">
                  <h3>Technical Training</h3>
                  <p>Designing and delivering comprehensive training programs that produce 
                  industry-ready professionals.</p>
                </div>
              </div>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div className="about-section" variants={itemVariants}>
              <div className="about-section-icon">
                <FaRocket />
              </div>
              <h2>Our Mission & Vision</h2>
              <div className="mission-vision">
                <div className="mission-box">
                  <h3>Mission</h3>
                  <p>
                    To empower aspiring tech professionals with the skills, knowledge, and 
                    confidence they need to transition from zero to market-ready, securing 
                    their dream roles in the tech industry. We are committed to providing 
                    hands-on, real-world training that bridges the gap between academic 
                    learning and industry requirements.
                  </p>
                </div>
                <div className="vision-box">
                  <h3>Vision</h3>
                  <p>
                    To become the leading training institution recognized for producing 
                    job-ready tech professionals who excel in their careers. We envision 
                    a future where every graduate from TechnBytes is equipped with not 
                    just technical skills, but also the soft skills, industry knowledge, 
                    and professional network to thrive in the rapidly evolving tech landscape.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What Sets Us Apart */}
            <motion.div className="about-section" variants={itemVariants}>
              <div className="about-section-icon">
                <FaUsers />
              </div>
              <h2>What Sets TechnBytes Apart</h2>
              <div className="differentiators">
                <div className="diff-item">
                  <h3>🎯 Real-World Focus</h3>
                  <p>Every course is designed based on actual industry requirements and real 
                  project scenarios from Ahmed's extensive professional experience.</p>
                </div>
                <div className="diff-item">
                  <h3>🤝 Personalized Mentorship</h3>
                  <p>Small batch sizes ensure individual attention, personalized feedback, 
                  and tailored guidance for each student's career path.</p>
                </div>
                <div className="diff-item">
                  <h3>💼 Job-Ready Training</h3>
                  <p>Beyond technical skills, we focus on resume building, interview preparation, 
                  and professional development to ensure career success.</p>
                </div>
                <div className="diff-item">
                  <h3>🔄 Agile Learning</h3>
                  <p>Courses are continuously updated to reflect the latest industry trends, 
                  technologies, and best practices.</p>
                </div>
                <div className="diff-item">
                  <h3>🌐 Industry Network</h3>
                  <p>Leverage Ahmed's extensive professional network for internship opportunities, 
                  job placements, and industry connections.</p>
                </div>
                <div className="diff-item">
                  <h3>📈 Proven Track Record</h3>
                  <p>With 500+ successfully trained professionals and a high placement rate, 
                  our results speak for themselves.</p>
                </div>
              </div>
            </motion.div>

            {/* Training Sessions Image */}
            <motion.div className="about-section training-session" variants={itemVariants}>
              <div className="about-section-icon">
                <FaUsers />
              </div>
              <h2>Our Training Sessions in Action</h2>
              <div className="session-image-wrapper">
                <img 
                  src="/images/group.png" 
                  alt="Ahmed Younes conducting a TechnBytes training session with students"
                  className="session-group-photo"
                />
                <p className="session-caption">
                  Ahmed Younes engaging with students during a hands-on training session, 
                  demonstrating the personalized and interactive approach that defines TechnBytes.
                </p>
              </div>
            </motion.div>

            {/* Values Section */}
            <motion.div className="about-section about-values" variants={itemVariants}>
              <div className="about-section-icon">
                <FaHeart />
              </div>
              <h2>Our Core Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <strong>Excellence:</strong> We strive for the highest quality in everything 
                  we do, from course content to student support.
                </div>
                <div className="value-item">
                  <strong>Integrity:</strong> We maintain honest, transparent communication and 
                  deliver on our promises.
                </div>
                <div className="value-item">
                  <strong>Innovation:</strong> We continuously evolve our teaching methods and 
                  curriculum to stay ahead of industry trends.
                </div>
                <div className="value-item">
                  <strong>Empowerment:</strong> We believe in empowering students to take control 
                  of their learning journey and career.
                </div>
                <div className="value-item">
                  <strong>Community:</strong> We foster a supportive learning community where 
                  students collaborate and grow together.
                </div>
                <div className="value-item">
                  <strong>Results:</strong> We are committed to measurable outcomes and student 
                  success in securing meaningful employment.
                </div>
              </div>
            </motion.div>

            {/* Cosmic Call to Action */}
            <motion.div 
              className="faq-cosmic-cta"
              variants={itemVariants}
            >
              <div className="cosmic-background">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
              </div>
              <div className="cosmic-content">
                <h3 className="cosmic-title">Ready to Transform Your Future?</h3>
                <p className="cosmic-subtitle">Join hundreds of professionals who've already started their journey</p>
                <motion.a 
                  href="/register.html" 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="cosmic-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaArrowRight className="cosmic-button-icon" />
                  <span className="cosmic-button-text">Start Your Journey Now</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;