import React from 'react';
import './BrandFrame.css';

/**
 * BrandFrame Component
 * 
 * Replicates the TechBytes brand identity frame with circuit patterns,
 * gradient overlays, corner borders, and optional logo placement.
 * 
 * Props:
 * - variant: 'full' (viewport height) | 'section' (600px min) | 'card' (400px min)
 * - showLogo: boolean - Display "TechBytes by Younes" logo at bottom center
 * 
 * Usage:
 * <BrandFrame variant="full" showLogo={true}>
 *   <YourContent />
 * </BrandFrame>
 * 
 * Alternative: Use utility class 'brand-frame-bg' for PNG background
 */
const BrandFrame = ({ children, variant = 'full', showLogo = true }) => {
  return (
    <div className={`brand-frame brand-frame-${variant}`}>
      {/* Tech Circuit Pattern Background */}
      <div className="brand-frame-overlay">
        {/* Corner Frames */}
        <div className="frame-corner frame-corner-tl"></div>
        <div className="frame-corner frame-corner-tr"></div>
        <div className="frame-corner frame-corner-bl"></div>
        <div className="frame-corner frame-corner-br"></div>
        
        {/* Circuit Lines */}
        <svg className="circuit-pattern" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0.15)', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: 'rgba(122,0,0,0.3)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(90,0,0,0.5)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          {/* Horizontal lines */}
          <line x1="0" y1="100" x2="400" y2="100" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.4"/>
          <line x1="0" y1="200" x2="300" y2="200" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="1520" y1="100" x2="1920" y2="100" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.4"/>
          <line x1="1620" y1="200" x2="1920" y2="200" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          
          {/* Vertical lines */}
          <line x1="200" y1="0" x2="200" y2="300" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="350" y1="50" x2="350" y2="250" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="1720" y1="0" x2="1720" y2="300" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="1570" y1="50" x2="1570" y2="250" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          
          {/* Diagonal accents */}
          <line x1="150" y1="150" x2="250" y2="200" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.2"/>
          <line x1="1670" y1="150" x2="1770" y2="200" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.2"/>
          
          {/* Circuit nodes */}
          <circle cx="200" cy="100" r="3" fill="rgba(122,0,0,0.4)" />
          <circle cx="350" cy="150" r="3" fill="rgba(122,0,0,0.4)" />
          <circle cx="1720" cy="100" r="3" fill="rgba(122,0,0,0.4)" />
          <circle cx="1570" cy="150" r="3" fill="rgba(122,0,0,0.4)" />
          
          {/* Bottom circuit lines */}
          <line x1="0" y1="880" x2="400" y2="880" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.4"/>
          <line x1="0" y1="980" x2="350" y2="980" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="1520" y1="880" x2="1920" y2="880" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.4"/>
          <line x1="1570" y1="980" x2="1920" y2="980" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          
          <line x1="200" y1="780" x2="200" y2="1080" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          <line x1="1720" y1="780" x2="1720" y2="1080" stroke="url(#circuitGradient)" strokeWidth="1" opacity="0.3"/>
          
          <circle cx="200" cy="880" r="3" fill="rgba(122,0,0,0.4)" />
          <circle cx="1720" cy="880" r="3" fill="rgba(122,0,0,0.4)" />
        </svg>
        
        {/* Brand Logo (if enabled) */}
        {showLogo && (
          <div className="brand-frame-logo">
            <span className="logo-text">TechBytes</span>
            <span className="logo-tagline">by Younes</span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="brand-frame-content">
        {children}
      </div>
    </div>
  );
};

export default BrandFrame;
