import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "TechBytes helped me expand my scope and embrace advanced tech approaches. I now lead digital innovation projects that integrate both classical and modern methodologies.",
      name: "Amr Mohamed",
      role: "Software Project Manager / Scrum Master at Connect Digital Solutions",
      program: "TechBytes Graduate",
      avatar: "/images/testimonials/amr-mohamed.jpg",
      linkedin: "https://www.linkedin.com/in/amr-mohamed-0aa55810b/"
    },
    {
      quote: "I have been leading teams on a journey to incorporate technology into our workflows. I am now a better leader for having taken this course and gained practical industry insights.",
      name: "Abdullah Khaled",
      role: "Technical Project Manager at Digital Solutions",
      program: "TechBytes Graduate",
      avatar: "/images/testimonials/abdullah-khaled.jpg",
      linkedin: "https://www.linkedin.com/in/abdullah-khaled-3b3372321/"
    },
    {
      quote: "Working with Ahmed transformed my career. His mentorship helped me transition to leading technical projects with confidence and strategic thinking that drives real business value.",
      name: "Mostafa Arkam",
      role: "Project Manager",
      program: "TechBytes Graduate",
      avatar: "/images/testimonials/mostafa-arkam.jpg",
      linkedin: "#"
    },
    {
      quote: "The practical approach and real-world projects made all the difference. I'm now equipped with the project management skills and technical knowledge that companies are looking for.",
      name: "Omar Kandil",
      role: "IT Project Manager",
      program: "TechBytes Graduate",
      avatar: "/images/testimonials/omar-kandil.jpg",
      linkedin: "#"
    },
    {
      quote: "Ahmed's guidance helped me understand not just the technical aspects, but also how to think strategically about technology solutions and lead teams effectively.",
      name: "Hesham Ahmed",
      role: "Senior Project Manager",
      program: "TechBytes Graduate",
      avatar: "/images/testimonials/hesham-ahmed.jpg",
      linkedin: "#"
    },
    {
      quote: "The comprehensive training and hands-on approach at TechBytes equipped me with the skills to confidently manage complex projects and drive meaningful results in the tech industry.",
      name: "Dalia Hassan",
      role: "Project Manager",
      program: "TechBytes Graduate",
      avatar: "/images/testimonials/dalia.jpg",
      linkedin: "#"
    },
    {
      quote: "TechBytes provided me with the technical foundation and project management expertise I needed to excel in my career. The mentorship was invaluable in shaping my professional growth.",
      name: "Osama Kamal",
      role: "IT Project Manager",
      program: "TechBytes Graduate",
      avatar: "/images/testimonials/osama.jpg",
      linkedin: "#"
    },
    {
      quote: "The program transformed my approach to technology and project leadership. I now have the confidence and skills to tackle challenging projects and deliver exceptional results.",
      name: "Rana Mahmoud",
      role: "Technical Project Manager",
      program: "TechBytes Graduate",
      avatar: "/images/testimonials/rana.jpg",
      linkedin: "#"
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
                <div 
                  className={`testimonial-card glass-card hover-lift scroll-reveal ${testimonial.linkedin ? 'testimonial-card-clickable' : ''}`}
                  onClick={() => {
                    if (testimonial.linkedin) {
                      window.open(testimonial.linkedin, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  style={testimonial.linkedin ? { cursor: 'pointer' } : {}}
                >
                  {/* Program Badge */}
                  <div className="testimonial-program-badge">
                    {testimonial.program}
                  </div>

                  {/* Professional Photo */}
                  <div className="testimonial-image-wrapper">
                    <div className="testimonial-image-gradient"></div>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="testimonial-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Quote Text */}
                  <p className="testimonial-text">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="testimonial-author">
                    <div className="testimonial-name">{testimonial.name}</div>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="testimonials-cta" variants={itemVariants}>
          <h3 className="cta-title">Ready to Write Your Success Story?</h3>
          <p className="cta-text">Join our next cohort and start your transformation today.</p>
          <button 
            className="btn btn-primary btn-large"
            onClick={() => window.open('/register.html', '_blank', 'noopener,noreferrer')}
          >
            Enroll Now
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
