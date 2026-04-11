import React from 'react';
import { motion } from 'framer-motion';

const LeadershipPage = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-40 pb-20 px-6 font-sans flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black text-[#1F2937] tracking-tight mb-6 text-center"
      >
        Leadership <span className="text-[#3B82F6]">Team</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-center"
      >
        Meet the seasoned architects, technologists, and strategists behind Eazyniti's transformative enterprise solutions.
      </motion.p>
    </div>
  );
};

export default LeadershipPage;
