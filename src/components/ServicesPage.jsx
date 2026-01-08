import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { 
  FaUserTie,
  FaCompass,
  FaGraduationCap,
  FaClipboardCheck,
  FaFileAlt,
  FaBuilding,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaStar
} from 'react-icons/fa';
import './ServicesPage.css';

function ServicesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'career-mentoring',
      icon: <FaUserTie />,
      title: 'Career Mentoring',
      tagline: 'Fast-Track Your Tech Career Growth',
      description: 'A focused 1:1 mentoring experience to guide you confidently through your tech career. Move beyond generic advice to get a personalized roadmap based on your unique experience, strengths, and ambitions.',
      duration: '1 Hour',
      features: [
        'Clear career target identification (PM, Scrum Master, Product Manager, Agile Coach)',
        'Personalized skill gap analysis (soft & technical skills)',
        'Immediate actionable steps you can implement next week',
        'Enhanced productivity tactics tailored to your work environment',
        'Solutions for current work challenges and blockers'
      ],
      whoIsItFor: [
        'Professionals wanting to switch to leadership roles',
        'Those feeling stuck or unnoticed in current positions',
        'New Scrum Masters or Project Managers wanting to start strong',
        'Anyone facing specific work challenges needing expert perspective'
      ],
      highlights: ['1-on-1 Session', 'Personalized Plan', 'Immediate Results']
    },
    {
      id: 'career-consultation',
      icon: <FaCompass />,
      title: 'Tech Career Consultation',
      tagline: 'Find Your Perfect Tech Career Path',
      description: 'A customized one-to-one session designed to give you complete clarity on choosing the right career path in the tech industry. We analyze your background, skills, personality, and goals to identify the role that suits you best.',
      duration: '1 Hour',
      features: [
        'Definitive analysis of best-fit tech roles (coding, non-coding, managerial)',
        'Realistic action plan with time investment and steps required',
        'Market intelligence on salary ranges and industry demands',
        'Identification of internships and entry-points at large companies',
        'Professional strength and gap analysis for your profile'
      ],
      whoIsItFor: [
        'Fresh graduates unsure how to start in tech',
        'Career shifters confused between different tech paths',
        'Junior tech professionals wanting to shift roles strategically',
        'Anyone interested in understanding all tech career options'
      ],
      highlights: ['Career Clarity', 'Market Insights', 'Personalized Roadmap']
    },
    {
      id: 'pm-program',
      icon: <FaGraduationCap />,
      title: 'Software PM: Zero to Hero Program',
      tagline: 'From Trainee to Top Candidate in 8 Weeks',
      description: 'A comprehensive career transformation program that bridges the gap between theoretical knowledge and real-world expertise. Master Agile, Scrum, and software delivery practices exactly as they happen inside professional tech companies.',
      duration: '8 Weeks + 1 Month Career Support',
      features: [
        'Industry frameworks: PMBOK (PMP-aligned), Scrum/CSM, SAFe 6.0',
        'Technical fluency: SDLC, APIs, DevOps, cloud basics',
        'Real-world project portfolio with actual artifacts',
        'Professional toolkit: templates, RAID logs, sprint plans',
        'Career support: mock interviews, CV optimization, LinkedIn makeover',
        'Private community access for networking and job leads',
        '1:1 mentoring session for personalized guidance'
      ],
      whoIsItFor: [
        'Career shifters from Dev, QA, or Business Analysis roles',
        'Aspiring Project Leaders targeting Scrum Master or Agile PM roles',
        'Current practitioners lacking formal Agile/PM training',
        'Fresh graduates wanting to enter tech with confidence'
      ],
      highlights: ['8-Week Intensive', 'Career Accelerator', 'Job-Ready Skills'],
      featured: true
    },
    {
      id: 'mock-interview',
      icon: <FaClipboardCheck />,
      title: 'Mock Interview Session',
      tagline: 'Practice Makes Perfect',
      description: 'Experience a full professional interview simulation tailored to your target role. Go through real HR, technical, and behavioral questions with structured evaluation and expert feedback to prepare you for the real thing.',
      duration: '1 Hour (30 min interview + 30 min feedback)',
      features: [
        'Realistic interview simulation for your target role',
        'Assessment of communication, leadership, and problem-solving',
        'Evaluation of Agile, Scrum, and software concept understanding',
        'Structured feedback using STAR, SOAR, CAR frameworks',
        'Personalized improvement plan before your actual interview'
      ],
      whoIsItFor: [
        'Aspiring Scrum Masters, Product Owners, and Project Managers',
        'Career shifters moving into Agile roles',
        'Anyone with an interview scheduled soon',
        'Professionals preparing for international or Big Tech companies'
      ],
      highlights: ['Realistic Practice', 'Expert Feedback', 'Interview Ready']
    },
    {
      id: 'resume-writing',
      icon: <FaFileAlt />,
      title: 'Professional Resume Writing',
      tagline: 'Stand Out to Recruiters',
      description: 'Get a professionally crafted, modern, and high-impact resume that reflects your true value. We help you position yourself as a top candidate with ATS-optimized formatting and achievement-based writing.',
      duration: '2-3 Working Days',
      features: [
        'Complete professional resume rewrite',
        'ATS-optimized format that passes screening systems',
        'Strong positioning for your target job roles',
        'Achievement-based writing with measurable results',
        'Professional branding suitable for international opportunities'
      ],
      whoIsItFor: [
        'Job seekers not getting interview callbacks',
        'Career shifters needing to reframe past experience',
        'Tech professionals aiming for Big Tech or MNCs',
        'Fresh graduates needing a professional first resume'
      ],
      highlights: ['ATS-Optimized', 'Modern Design', 'Results-Focused']
    },
    {
      id: 'corporate-training',
      icon: <FaBuilding />,
      title: 'Corporate Training',
      tagline: 'Empower Your Teams with Agile',
      description: 'Boost team productivity and project success with practical Agile training tailored to your company. Interactive workshops, hands-on exercises, and customized sessions that match your organization\'s challenges and goals.',
      duration: 'Customizable (Half-day to 4 weeks)',
      features: [
        'Agile transformation readiness and mindset training',
        'Improved project delivery using Scrum, Kanban, and scaling frameworks',
        'Role clarity: Scrum Master, Product Owner, RTE, Delivery Lead',
        'Hands-on training with Jira, Trello, Azure DevOps, Miro',
        'Company-specific solutions based on your current workflow'
      ],
      whoIsItFor: [
        'Companies transitioning from traditional to Agile delivery',
        'Teams struggling with project delays or unclear processes',
        'Startups scaling operations and delivery teams',
        'Organizations preparing for digital transformation'
      ],
      highlights: ['Team Workshops', 'Customized Training', 'Measurable Results']
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
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-page-hero">
          <div className="services-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="services-hero-content"
            >
              <p className="services-hero-subtitle">Our Services</p>
              <h1 className="services-hero-title">
                Transform Your <span className="highlight-text">Tech Career</span>
              </h1>
              <p className="services-hero-description">
                From personalized mentoring to comprehensive training programs, we offer 
                everything you need to succeed in the tech industry. Choose the service 
                that matches your goals and start your transformation today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="services-list-section">
          <div className="services-list-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="services-list"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className={`service-detail-card ${service.featured ? 'featured' : ''}`}
                  variants={itemVariants}
                >
                  {service.featured && (
                    <div className="featured-badge">
                      <FaStar /> Most Popular
                    </div>
                  )}
                  
                  <div className="service-detail-header">
                    <div className="service-detail-icon">
                      {service.icon}
                    </div>
                    <div className="service-detail-info">
                      <h2 className="service-detail-title">{service.title}</h2>
                      <p className="service-detail-tagline">{service.tagline}</p>
                      <div className="service-duration">
                        <FaClock />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="service-detail-description">{service.description}</p>

                  <div className="service-detail-content">
                    <div className="service-features-section">
                      <h3>What You'll Gain</h3>
                      <ul className="service-features-list">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>
                            <FaCheckCircle className="feature-check" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-audience-section">
                      <h3>Who Is This For?</h3>
                      <ul className="service-audience-list">
                        {service.whoIsItFor.map((item, idx) => (
                          <li key={idx}>
                            <FaUsers className="audience-icon" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-detail-footer">
                    <div className="service-highlights">
                      {service.highlights.map((highlight, idx) => (
                        <span key={idx} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
                    <motion.a
                      href="/register.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-cta-btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started <FaArrowRight />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-page-cta">
          <div className="services-cta-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="services-cta-content"
            >
              <h2>Not Sure Which Service Is Right for You?</h2>
              <p>
                Book a free consultation and let's discuss your goals. We'll help you 
                choose the perfect path to accelerate your tech career.
              </p>
              <motion.a
                href="/register.html"
                target="_blank"
                rel="noopener noreferrer"
                className="services-cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Consultation <FaArrowRight />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ServicesPage;
