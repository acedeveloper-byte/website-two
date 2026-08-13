'use client';

import Image from 'next/image';
import clearPlane from '../assets/clear-plane.png';
import FlightSearch from './FlightSearch';

const Hero = () => {
  return (
    <section className="hero-bg-section pt-5 pb-4 pb-lg-5">
      <div className="hero-bg-image-wrapper">
        <Image src={clearPlane} alt="Clear plane background" fill className="hero-bg-image" priority />
      </div>
      <div className="container hero-bg-content">
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-8 text-center w-100" data-aos="fade-up">
            <h1 className="text-white mb-4">
              Travel research for <span className="hero-title">routes, destinations, and trip planning.</span>
            </h1>
            
          </div>
          <div className="col-12 mt-5" data-aos="fade-up">
            <FlightSearch />  
          </div>
          <div className="alert alert-light alert-dismissible fade show mx-auto" role="alert">
              <strong>Independent Travel Assistance:</strong> We are a free, third-party travel information platform. Our team helps with airline contact information and general booking questions.
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
