import React from 'react';
import { motion } from 'framer-motion';

const StoryVisionPage = () => {
  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-32 pb-20 font-sans text-[#1F2937]">
      {/* Hero Section */}
      <div className="px-6 max-w-7xl mx-auto text-center mb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
          <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">Our History</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter mb-8 leading-[0.95]">
          A vision forged in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">innovation.</span>
        </motion.h1>
      </div>

      {/* Story Content Block */}
      <div className="px-6 max-w-5xl mx-auto mb-24">
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-gray-100 flex flex-col gap-16 relative overflow-hidden">
            {/* The Roots: KrishiVision */}
            <div>
               <h2 className="text-3xl font-black tracking-tight mb-6 text-[#1F2937] flex items-center gap-4">
                 <span className="w-2 md:w-10 h-1 bg-green-500 inline-block rounded-full"></span> The Genesis: KrishiVision
               </h2>
               <p className="text-gray-500 leading-relaxed text-lg mb-6">
                 Our roots didn't start in a typical air-conditioned corporate boardroom. Eazyniti's DNA was actively forged in the fields with our deep-tech agricultural AI platform: <strong>KrishiVision</strong>. We recognized a massive gap where cutting-edge technology was failing to reach the foundational sectors that needed it the most. 
               </p>
               <p className="text-gray-500 leading-relaxed text-lg">
                 By engineering complex machine learning models to detect remote crop diseases and dynamically predict logistical yields, we discovered something critical. Solving deeply fundamental software problems required highly robust, endlessly scalable backend digital architectures.
               </p>
            </div>

            {/* The Evolution: Eazyniti */}
            <div>
               <h2 className="text-3xl font-black tracking-tight mb-6 text-[#1F2937] flex items-center gap-4">
                 <span className="w-2 md:w-10 h-1 bg-blue-500 inline-block rounded-full"></span> The Evolution: Eazyniti
               </h2>
               <p className="text-gray-500 leading-relaxed text-lg mb-6">
                 The profound success of KrishiVision taught our board a permanent engineering lesson: The architectural blueprints we built to handle massive, disparate data sets in harsh operating environments could rapidly revolutionize any global industry.
               </p>
               <p className="text-gray-500 leading-relaxed text-lg">
                 Thus, Eazyniti was born. We successfully pivoted from being uniquely an Ag-tech pioneer to becoming an elite technology consulting and architecture firm. Today, we empower bootstrapped startups and massive enterprises alike with the exact same ruthless technical execution and structural integrity.
               </p>
            </div>
         </motion.div>
      </div>

      {/* Vision Statement Banner */}
      <div className="px-6 max-w-7xl mx-auto">
        <div className="bg-[#0B0F19] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-[150px] pointer-events-none"></div>
          
          <h3 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-8 relative z-10">Our Vision</h3>
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-[1.2] max-w-4xl mx-auto relative z-10 mb-16 text-balance">
            "To be the foremost architects of the digital age, transforming visionary ideas into fault-tolerant, scalable enterprise realities."
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 relative z-10 border-t border-white/10 pt-16 text-left">
             <div>
                <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full"></div>
                <h4 className="text-xl font-bold text-white mb-3">Built for Scale</h4>
                <p className="text-gray-400 text-sm leading-relaxed">We architect and provision cloud systems anticipating 100x user growth from day one operations.</p>
             </div>
             <div>
                <div className="w-12 h-1 bg-purple-500 mb-6 rounded-full"></div>
                <h4 className="text-xl font-bold text-white mb-3">Zero Compromise</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Enterprise security and API speed are never mutually exclusive concepts within our codebases.</p>
             </div>
             <div>
                <div className="w-12 h-1 bg-teal-500 mb-6 rounded-full"></div>
                <h4 className="text-xl font-bold text-white mb-3">Empowering Founders</h4>
                <p className="text-gray-400 text-sm leading-relaxed">We handle the grueling technical complexities so visionary founders can properly lead their organizations.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryVisionPage;
