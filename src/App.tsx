import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Transformations from './components/Transformations';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Dashboard from './components/Dashboard';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleCookieAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieBanner(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <About />
              <Services />
              <Transformations />
              <Blog />
              <Contact />
              <Footer />
              {showCookieBanner && <CookieBanner onAccept={handleCookieAccept} />}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;