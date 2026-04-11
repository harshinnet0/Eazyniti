import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import WhatWeThink from './components/WhatWeThink';
import InsightsPage from './components/InsightsPage';
import ServicePage from './components/ServicePage';
import IndustryPage from './components/IndustryPage';
import StoryVisionPage from './components/StoryVisionPage';
import LeadershipPage from './components/LeadershipPage';
import TechSecurityPage from './components/TechSecurityPage';
import ModelsPage from './components/ModelsPage';
import CareersPage from './components/CareersPage';
import ProcessPage from './components/ProcessPage';
import ProjectsPage from './components/ProjectsPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import './index.css';

const HomePage = () => (
  <>
    <Hero />
    <ModelsPage />
    <AboutPage />
    <ContactPage />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-light-grey selection:bg-electric-blue selection:text-white overflow-x-hidden w-full">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/what-we-think" element={<WhatWeThink />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/story-vision" element={<StoryVisionPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/tech-security" element={<TechSecurityPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
