import React from 'react';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-40 pb-20 px-6 font-sans flex flex-col items-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black text-[#1F2937] tracking-tight mb-6 text-center"
      >
        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#3B82F6]">Projects</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-center mb-16"
      >
        Explore how we've engineered robust, scalable architectures and transformed enterprise capabilities across industries.
      </motion.p>
      
      {/* Placeholder Grid for Future Projects */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#151B2B] rounded-3xl p-10 border-t-4 border-[#3B82F6] flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 shadow-2xl shadow-[#3B82F6]/5"
        >
          <div className="bg-[#3B82F6]/10 text-[#3B82F6] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6">FinTech</div>
          <h3 className="text-2xl font-black mb-4">Enterprise Payment Gateway</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow">
            Designed and engineered a high-throughput, latency-optimized payment processor handling millions of transactions daily across multiple geographical regions.
          </p>
          <span className="text-[#3B82F6] text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors flex items-center gap-2">
            Read Case Study <span>&rarr;</span>
          </span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-[#151B2B] rounded-3xl p-10 border-t-4 border-[#14B8A6] flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 shadow-2xl shadow-[#14B8A6]/5"
        >
          <div className="bg-[#14B8A6]/10 text-[#14B8A6] text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-6">HealthTech</div>
          <h3 className="text-2xl font-black mb-4">Cloud Medical Records Suite</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow">
            A Zero-Trust HIPAA-compliant infrastructure ensuring secure cross-hospital global patient data access while eliminating redundancy.
          </p>
          <span className="text-[#14B8A6] text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors flex items-center gap-2">
            Read Case Study <span>&rarr;</span>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
