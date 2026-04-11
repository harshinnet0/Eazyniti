import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BrainCircuit, Zap, ShieldCheck, TrendingUp, Lightbulb } from 'lucide-react';

const WhatWeThink = () => {
  const insights = [
    {
      category: "Perspective",
      title: "The AI-First Enterprise: Moving Beyond the Hype",
      description: "Generative AI is reshaping industries. Discover how we implement real-world AI ecosystems that drive revenue and operational excellence, rather than just acting as slow proof-of-concepts.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      icon: <BrainCircuit className="w-5 h-5 text-[#3B82F6]" />,
      accent: "text-[#3B82F6]"
    },
    {
      category: "Architecture",
      title: "Building SaaS Platforms for Infinite Scale",
      description: "As your user base grows, your infrastructure must adapt instantly. Explore our blueprint for designing multi-tenant architectures that never crack under pressure, built for global reach.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="w-5 h-5 text-[#14B8A6]" />,
      accent: "text-[#14B8A6]"
    },
    {
      category: "Security",
      title: "Zero-Trust Engineering in a Connected World",
      description: "In an era of constant threats, perimeter defense is obsolete. Learn how Eazyniti engineers enterprise applications with embedded zero-trust policies and advanced data protection protocols.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck className="w-5 h-5 text-[#1E3A8A]" />,
      accent: "text-[#1E3A8A]"
    }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen font-sans selection:bg-[#3B82F6] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-gray-200/60">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200 mb-8 shadow-sm"
            >
              <Lightbulb className="w-3 h-3 text-[#3B82F6]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1E3A8A]">Eazyniti Insights</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1F2937] tracking-tighter leading-[1] mb-6"
            >
              Ideas that shape the <span className="text-[#3B82F6]">future.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed"
            >
              We don't just write code; we analyze the shifting tectonic plates of the tech industry. Explore our perspectives on digital engineering, SaaS evolution, and enterprise AI.
            </motion.p>
          </div>

          {/* Right Side Image Context */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-[350px] md:h-[450px] relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/30 to-transparent mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
              alt="Digital Future and Innovation" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED INSIGHTS GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-[#3B82F6]/10 flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={insight.image} 
                  alt={insight.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                  {insight.icon}
                  <span className={`text-[10px] font-black uppercase tracking-widest ${insight.accent}`}>
                    {insight.category}
                  </span>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4 leading-tight group-hover:text-[#3B82F6] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {insight.description}
                </p>
                <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Read Insight</span>
                  <div className="w-10 h-10 rounded-full bg-[#F5F7FA] flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TRUST & EXECUTIVE SUMMARY SECTION */}
      <section className="py-12 px-6 max-w-7xl mx-auto pb-20">
        <div className="bg-[#1E3A8A] rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-10">
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#3B82F6] blur-[100px] rounded-full opacity-40 -mr-40 -mt-20"></div>
          
          <div className="flex-1 z-10">
            <h2 className="text-3xl md:text-4xl font-black leading-[1.1] mb-4">
              Insights backed by <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#14B8A6]">ruthless execution.</span>
            </h2>
            <p className="text-blue-100/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              At Eazyniti, our theories aren't confined to whitepapers. They are tested in the trenches of real engineering. When we share our perspectives, it is because we have successfully implemented these architectures and ecosystems for leading global clients. We bridge the gap between profound ideology and perfect execution.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <TrendingUp className="w-4 h-4 text-[#14B8A6]" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-blue-200/60 mb-0.5">Impact</div>
                  <div className="font-bold text-white text-base">Measurable ROI</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-blue-200/60 mb-0.5">Trust</div>
                  <div className="font-bold text-white text-base">Enterprise Secure</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-[320px] shrink-0 z-10">
            {/* Real Executive Office/Team Image to build trust */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Eazyniti Team Strategy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay quote */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                <p className="text-white italic text-sm font-light mb-3">
                  "The most successful digital products aren't just coded; they are meticulously architected."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center font-black text-xs">
                    E
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">Thought Leadership</div>
                    <div className="text-gray-400 text-[10px]">Eazyniti Internal Research</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhatWeThink;
