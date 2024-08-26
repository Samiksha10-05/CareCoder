// src/App.js
import React from 'react';
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Testimonial from './Components/Testimonials';
import Footer from './Components/Footer';
import LatestArticles from './Components/LatestArticles';
import TwoColumnSection from './Components/TwoColumnSection';
import '@fortawesome/fontawesome-free/css/all.min.css';


import heroimg from "./assets/heroimg.png"


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <TwoColumnSection
        imageSrc= {heroimg} // Replace with your image path
        heading="Leading healthcare providers"
        description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone."
        buttonText="Learn more"
        buttonLink="#"
        imageOnLeft={true}  // Image on the left (default)
      />
      <TwoColumnSection
        imageSrc= {heroimg} // Replace with your image path
        heading="Leading healthcare providers"
        description="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone."
        buttonText="Learn more"
        buttonLink="#"
        imageOnLeft={false}  // Image on the left (default)
      />
      <Testimonial />
      <LatestArticles/>
      <Footer />
    </div>
  );
}

export default App;
