import React from 'react';
import Navbar from './Navbar'; 



const Hero = () => {
  return (
      <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/my-image.png)] bg-cover' 
      style={{backgroundSize: "35%", backgroundPosition: "left 100px top 100px"}}> 
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center pb-20 hover:text-orange-500">
          <div>
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


