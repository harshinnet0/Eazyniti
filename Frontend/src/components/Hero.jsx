import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen min-h-[100svh] bg-[#05080A] overflow-hidden font-sans">
      
      {/* 1. Background Video Layer (Real Footage) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05080A]/95 via-[#05080A]/60 to-[#05080A]/30 w-full z-10" />
        

        <motion.img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2500&q=80"
          alt="Software engineers working in a premium tech environment"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 0.45 }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-20 min-h-screen min-h-[100svh] max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-start pt-[120px] md:pt-[160px] pb-16">
        <div className="max-w-4xl">
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[#3B82F6] font-bold tracking-[0.25em] md:tracking-[0.3em] text-[11px] md:text-sm uppercase mb-4"
          >
            {'>'} YOUR VISION  OUR EXECUTION ;
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-[90px] font-light leading-[1.05] tracking-tight mb-6"
          >
            Reinventing the <br />
            <span className="font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6]">
              future of business.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-sm sm:text-base md:text-xl max-w-2xl leading-relaxed opacity-90 mb-8"
          >
            Eazyniti is a technology-driven company providing SaaS solutions 
            and acting as a technology partner for startups. We are committed to 
            protecting your data with transparency and security.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 md:gap-8 mt-12 md:mt-6"
          >
            <Link 
              to="/service" 
              className="w-full sm:w-auto bg-[#1E3A8A] text-white px-8 md:px-12 py-5 sm:py-4 text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-[#3B82F6] transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/40 text-center"
            >
              See what we do
            </Link>
            <Link 
              to="/insights" 
              className="w-full sm:w-auto border-2 border-white text-white px-8 md:px-12 py-5 sm:py-4 text-[11px] md:text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-sm text-center"
            >
              Our Insights
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#05080A] via-[#05080A]/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Hero;