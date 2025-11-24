import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { 
  FaLaptopCode, 
  FaUsers, 
  FaChalkboardTeacher, 
  FaRocket, 
  FaBriefcase, 
  FaCertificate,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import './ServicesPage.css';

function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Technical Skills Training',
      description: 'Master in-demand technical skills through comprehensive, hands-on training programs.',
      features: [
        'Programming fundamentals (Java, Python, JavaScript)',
        'Web development (HTML, CSS, React)',
        'Database management and SQL',
        'Version control with Git and GitHub',
        'Cloud computing basics (AWS, Azure)'
      ],
      highlights: ['Beginner to Advanced', 'Project-Based', 'Industry Standards']
    },
    {
      icon: <FaUsers />,
      title: 'Agile & Scrum Methodology',
      description: 'Learn modern project management frameworks used by top tech companies worldwide.',
      features: [
        'Scrum framework and ceremonies',
        'Sprint planning and execution',
        'User story creation and estimation',
        'Kanban and workflow optimization',
        'Team collaboration best practices'
      ],
      highlights: ['Certified Training', 'Real Scenarios', 'Team Projects']
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Soft Skills Development',
      description: 'Build essential professional skills that complement your technical expertise.',
      features: [
        'Effective communication and presentation',
        'Leadership and team management',
        'Problem-solving and critical thinking',
        'Time management and productivity',
        'Professional networking strategies'
      ],
      highlights: ['Interactive Workshops', 'Practical Exercises', 'Expert Mentorship']
    },
    {
      icon: <FaRocket />,
      title: 'Career Preparation',
      description: 'Get job-ready with comprehensive career support and interview preparation.',
      features: [
        'Resume building and optimization',
        'LinkedIn profile enhancement',
        'Technical interview preparation',
        'Behavioral interview coaching',
        'Salary negotiation strategies'
      ],
      highlights: ['Mock Interviews', 'CV Reviews', 'Career Guidance']
    },
    {
      icon: <FaBriefcase />,
      title: 'Real-World Projects',
      description: 'Work on industry-grade projects that showcase your skills to potential employers.',
      features: [
        'End-to-end project development',
        'Agile workflow implementation',
        'Code review and best practices',
        'Portfolio-ready deliverables',
        'Team collaboration experience'
      ],
      highlights: ['Portfolio Building', 'Industry Experience', 'Team Collaboration']
    },
    {
      icon: <FaCertificate />,
      title: 'Mentorship & Support',
      description: 'Receive ongoing guidance from experienced industry professionals.',
      features: [
        '1-on-1 mentorship sessions',
        'Career counseling and planning',
        'Technical doubt resolution',
        'Industry insights and trends',
        'Lifetime alumni network access'
      ],
      highlights: ['Expert Mentors', 'Ongoing Support', 'Community Access']
    }
  ];

  const benefits = [
    'Industry-experienced instructors',
    'Flexible learning schedule',
    'Hands-on practical training',
    'Job placement assistance',
    'Certificate of completion',
    'Lifetime learning resources'
  ];

  return (
    <>
      <Header />
      <div className="services-page">
        {/* Hero Section */}
        <motion.section 
          className="services-hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="services-hero-content">
            <motion.h1 
              className="services-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="services-hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Comprehensive training programs designed to transform you into a job-ready tech professional
            </motion.p>
          </div>
        </motion.section>

        {/* Services Grid Section */}
        <section className="services-page-content">
          <div className="services-page-container">
            <motion.div 
              className="services-page-grid"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-page-card glass-card hover-lift"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="service-page-icon">{service.icon}</div>
                  <h3 className="service-page-title">{service.title}</h3>
                  <p className="service-page-description">{service.description}</p>
                  
                  <div className="service-page-highlights">
                    {service.highlights.map((highlight, idx) => (
                      <span key={idx} className="service-highlight-badge">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <ul className="service-page-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="feature-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits Section */}
            <motion.div 
              className="services-benefits"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="benefits-title">Why Choose TechBytes?</h2>
              <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="benefit-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <FaCheckCircle className="benefit-icon" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="services-page-cta"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cta-title">Ready to Transform Your Career?</h2>
              <p className="cta-text">
                Join hundreds of successful graduates who have launched their tech careers with TechBytes
              </p>
              <button 
                className="cta-button btn-primary"
                onClick={() => navigate('/register')}
              >
                Start Your Journey <FaArrowRight />
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ServicesPage;
