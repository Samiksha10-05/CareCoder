// src/App.js
import React from 'react';
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Testimonial from './Components/Testimonials';
import Footer from './Components/Footer';
import LatestArticles from './Components/LatestArticles';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Testimonial />
      <LatestArticles/>
      <Footer />
    </div>
  );
}

export default App;
