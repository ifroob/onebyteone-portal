import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import QuizSection from './components/QuizSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <div className="App bg-slate-900 text-white overflow-x-hidden">
      <SEO />
      <Navigation />
      <HeroSection />
      <QuizSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;