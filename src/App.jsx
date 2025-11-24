import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import About from './components/About';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QuirkyEffects from './components/QuirkyEffects';
import './quirky-effects.css';

function App() {
  const location = useLocation();

  // Handle scrolling to FAQ section when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollToFAQ) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const faqElement = document.getElementById('faq');
        if (faqElement) {
          faqElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <QuirkyEffects />
      <Header />
      <main className="app">
        <Hero />
        <Companies />
        <About />
        <Problems />
        <Solutions />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default App;
