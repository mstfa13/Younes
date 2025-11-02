import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';
import './FAQ.css';

const faqs = [
  {
    q: 'Who is the TechBytes program for?',
    a: 'Ambitious professionals and graduates looking to build real, job-ready skills and accelerate their careers in tech—no matter their starting point.'
  },
  {
    q: 'How long does the program take?',
    a: 'Most learners complete the core track in 8–12 weeks with 6–10 hours/week. We also offer flexible pacing if you need more time.'
  },
  {
    q: 'Do I need a technical background?',
    a: 'No. We start from fundamentals and guide you through practical, hands-on projects. A growth mindset and consistency are what matter most.'
  },
  {
    q: 'What support do I get?',
    a: 'You get structured curriculum, mentor guidance, feedback on projects, and career support—plus a community of peers to learn with.'
  },
  {
    q: 'How do I join?',
    a: 'Click “Join Program” at the top of the page. You\'ll complete a short application and we\'ll follow up with next steps.'
  }
];

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button
        className="faq-question"
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        onClick={() => setOpen(v => !v)}
      >
        <span className="faq-q-text">{item.q}</span>
        <span className="faq-icon" aria-hidden>
          {open ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <motion.div
        id={`faq-panel-${index}`}
        className="faq-answer"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="faq-answer-inner">{item.a}</div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <p className="faq-eyebrow">Questions</p>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know before getting started.</p>
        </div>

        <div className="faq-grid">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

        <motion.div 
          className="faq-cosmic-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
      </div>
    </section>
  );
};

export default FAQ;
