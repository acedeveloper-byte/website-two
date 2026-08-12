'use client';

import Image from 'next/image';
import Link from 'next/link';
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
          <div className="col-12 col-lg-7 text-center w-100" data-aos="fade-up">

          <h1 className="text-white">
            Fly with <span className="hero-title">Confidence, Clarity, and Calm.</span> <br />
          </h1>
          </div>
          <div className="col-12 mt-5" data-aos="fade-up">
            <FlightSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
