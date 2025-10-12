import React, { useEffect, useState } from 'react';

const QuirkyEffects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorOutlinePosition, setCursorOutlinePosition] = useState({ x: 0, y: 0 });

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Cursor Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Delayed cursor outline for smooth trail effect
      setTimeout(() => {
        setCursorOutlinePosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D Tilt Effect on Mouse Move for Images
  useEffect(() => {
    const tiltElements = document.querySelectorAll('.tilt-3d');
    
    const handleTilt = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };
    
    const resetTilt = (element) => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };
    
    tiltElements.forEach((element) => {
      element.addEventListener('mousemove', (e) => handleTilt(e, element));
      element.addEventListener('mouseleave', () => resetTilt(element));
    });
    
    return () => {
      tiltElements.forEach((element) => {
        element.removeEventListener('mousemove', (e) => handleTilt(e, element));
        element.removeEventListener('mouseleave', () => resetTilt(element));
      });
    };
  }, []);

  // Magnetic Effect on Hover
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    const handleMagnetic = (e, element) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };
    
    const resetMagnetic = (element) => {
      element.style.transform = 'translate(0, 0)';
    };
    
    magneticElements.forEach((element) => {
      element.addEventListener('mousemove', (e) => handleMagnetic(e, element));
      element.addEventListener('mouseleave', () => resetMagnetic(element));
    });
    
    return () => {
      magneticElements.forEach((element) => {
        element.removeEventListener('mousemove', (e) => handleMagnetic(e, element));
        element.removeEventListener('mouseleave', () => resetMagnetic(element));
      });
    };
  }, []);

  // Scroll Reveal Animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const handleScrollReveal = () => {
      revealElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  // Parallax Effect
  useEffect(() => {
    const handleParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax-layer');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor (Desktop only) */}
      <div 
        className="cursor-dot"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="cursor-outline"
        style={{
          left: `${cursorOutlinePosition.x}px`,
          top: `${cursorOutlinePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Animated Background Blobs */}
      <div className="animated-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-circle"></div>
        <div className="shape shape-square"></div>
        <div className="shape shape-triangle"></div>
      </div>
    </>
  );
};

export default QuirkyEffects;
