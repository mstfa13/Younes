import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import About from './components/About';
import Training from './components/Training';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
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
        <Training />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
