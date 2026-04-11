import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Heart, Globe, Zap, ArrowRight } from 'lucide-react';

const CareersPage = () => {
  const benefits = [
    { title: "Remote-First & Global", desc: "Work from anywhere. We care about the code you ship, not the chair you sit in.", icon: <Globe className="w-5 h-5" /> },
    { title: "Bleeding-Edge Stack", desc: "No legacy tech debt. We build with the latest Next.js, Node, Go, and AI frameworks.", icon: <Zap className="w-5 h-5" /> },
    { title: "Extreme Ownership", desc: "Take charge of massive architectural decisions from day one. Zero bureaucracy.", icon: <Rocket className="w-5 h-5" /> },
    { title: "Health & Wellbeing", desc: "Comprehensive global health coverage, flexible PTO, and wellness stipends.", icon: <Heart className="w-5 h-5" /> }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-32 pb-20 font-sans text-[#1F2937]">
      {/* Hero */}
      <div className="px-6 max-w-7xl mx-auto text-center mb-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-[1]">
          Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] to-[#3B82F6]">impossible.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-500 text-lg md:text-xl max-w-5xl lg:max-w-none mx-auto leading-relaxed">
          We are an elite team of engineers, architects, and visionaries building enterprise-grade digital ecosystems.<br />
          If you love solving the hardest technical challenges, you belong here.
        </motion.p>
      </div>

      {/* Culture Image Banner */}
      <div className="px-4 max-w-[1400px] mx-auto mb-24">
        <div className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" alt="Eazyniti Culture" className="w-full h-full object-cover" />
          <div className="absolute bottom-10 left-10 z-20 text-white">
             <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-2">Collaboration over Hierarchy</h3>
             <p className="text-gray-200">Our async culture allows for deep, focused engineering flow states.</p>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="px-6 max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tight">Why top engineers choose us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 flex justify-center items-center rounded-2xl mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 max-w-5xl mx-auto">
        <div className="bg-[#0B0F19] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-6 relative z-10">Ready to write history?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto relative z-10">We are always looking for exceptional Full-Stack Developers, Cloud Architects, and AI Researchers. View our open roles.</p>
          <a
            href="https://careers.eazyniti.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white hover:bg-gray-200 text-[#0B0F19] font-black rounded-2xl tracking-[0.2em] uppercase text-xs shadow-xl transition-all relative z-10"
          >
            Visit Careers Portal <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
