import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import About from './components/About';
import Problems from './components/Problems';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QuirkyEffects from './components/QuirkyEffects';
import './quirky-effects.css';

function App() {
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
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default App;
