import React from 'react';
import Navbar from './Navbar';
import '@/app/styles/Hero.css'; 
import '@/app/globals.css';


const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <Navbar />
      <div>

      </div>
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block">
        <div className="hero-text">
          <p data-aos="fade-down">I'm</p>
          <p data-aos="fade-down">Shanyal</p>
          <p data-aos="fade-down">Siddiqui</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


