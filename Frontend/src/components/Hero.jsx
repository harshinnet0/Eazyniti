import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen min-h-[100svh] bg-light-grey overflow-hidden font-sans">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        {/* Subtle dark gradient to ensure hero text (which is light/white) stands out on the clear image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent w-full md:w-2/3 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
          alt="Eazyniti Background"
          className="w-full h-full object-cover transform scale-105 opacity-100 animate-ambient-pan"
        />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-20 min-h-screen min-h-[100svh] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-start pt-[120px] md:pt-[160px] pb-16">
        <div className="max-w-4xl">
          
          {/* Accent Label */}
          <h2 className="text-electric-blue font-bold tracking-[0.25em] md:tracking-[0.3em] text-[11px] md:text-sm uppercase animate-fade-in-up mb-4">
            {'>'} YOUR VISION  OUR EXECUTION ;
          </h2>

          {/* Main Headline */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-[90px] font-light leading-[1.05] tracking-tight animate-fade-in-up animation-delay-100 mb-6">
            Reinventing the <br />
            <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-deep-blue to-teal-accent">future of business</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed opacity-90 animate-fade-in-up animation-delay-200 mb-8">
            Eazyniti is a technology-driven company providing SaaS solutions 
            and acting as a technology partner for startups. We are committed to 
            protecting your data with transparency and security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-12 md:mt-6 animate-fade-in-up animation-delay-300">
            <Link to="/service" className="w-full sm:w-auto bg-deep-blue text-white px-8 md:px-12 py-5 sm:py-4 text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-electric-blue transition-all transform hover:-translate-y-1 shadow-lg shadow-deep-blue/20 text-center">
              See what we do
            </Link>
            <Link to="/insights" className="w-full sm:w-auto border-2 border-white text-white px-8 md:px-12 py-5 sm:py-4 text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-sm text-center">
              Our Insights
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
