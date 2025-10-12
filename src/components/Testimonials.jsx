import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "This program completely transformed my career. I went from having zero tech experience to landing a role as a Junior Project Manager at a Fortune 500 company within 6 months. The hands-on projects and mentorship were invaluable.",
      name: "Sarah Ahmed",
      role: "Junior Project Manager at Tech Corp",
      avatar: null, // Replace with actual avatar path
      rating: 5
    },
    {
      quote: "The Zero to Market-Ready program gave me the exact skills and confidence I needed. The real-world projects prepared me perfectly for interviews, and I received multiple job offers. Highly recommended!",
      name: "Mohamed Hassan",
      role: "IT Project Coordinator at Global Systems",
      avatar: null,
      rating: 5
    },
    {
      quote: "I've taken many online courses, but this program stands out. The personalized mentorship and industry insights made all the difference. I'm now working on enterprise projects I never thought I could handle.",
      name: "Layla Ibrahim",
      role: "Software Project Lead at Innovation Hub",
      avatar: null,
      rating: 5
    },
    {
      quote: "As someone transitioning from a non-tech background, this program was perfect. The step-by-step approach and supportive community helped me build both technical and soft skills required in the industry.",
      name: "Karim Mostafa",
      role: "Agile Project Manager at Digital Solutions",
      avatar: null,
      rating: 5
    }
  ];

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className="testimonials" 
      id="testimonials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <motion.p className="testimonials-subtitle" variants={itemVariants}>
            Success Stories
          </motion.p>
          <motion.h2 className="testimonials-title" variants={itemVariants}>
            What Our <span className="gradient-text-animated">Students</span> Say
          </motion.h2>
          <motion.p className="testimonials-description" variants={itemVariants}>
            Join hundreds of professionals who have transformed their careers through 
            our proven training program.
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <motion.div 
          className="testimonials-slider-wrapper"
          variants={itemVariants}
        >
          <Slider {...sliderSettings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className="testimonial-card glass-card hover-lift scroll-reveal">
                  {/* Quote Icon */}
                  <div className="testimonial-quote-icon">
                    <FaQuoteLeft />
                  </div>

                  {/* Rating Stars */}
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="testimonial-text">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      ) : (
                        <FaUser className="testimonial-avatar-placeholder" />
                      )}
                    </div>
                    <div className="testimonial-info">
                      <div className="testimonial-name">{testimonial.name}</div>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
