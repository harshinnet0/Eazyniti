import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const IndustryPage = () => {
  const industries = [
    {
      title: "FinTech & Banking",
      desc: "High-frequency trading platforms, secure payment gateways, and blockchain architectures designed for absolute compliance and zero latency.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      accent: "text-blue-400"
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "HIPAA-compliant telemedicine ecosystems, centralized patient data processing, and predictive AI for medical diagnostics.",
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
      accent: "text-teal-400"
    },
    {
      title: "AgriTech Innovations",
      desc: "Precision farming tech, drone-imaging data pipelines, and intelligent supply-chain tracking from farm to market.",
      img: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800",
      accent: "text-emerald-400"
    },
    {
      title: "Retail & E-Commerce",
      desc: "Massively scalable storefront infrastructures handling million-user traction, AI-driven recommendations, and logistics automation.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      accent: "text-orange-400"
    },
    {
      title: "Enterprise SaaS",
      desc: "Modernizing legacy architectures into cloud-native, multi-tenant SaaS structures optimized for global enterprise distribution.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      accent: "text-purple-400"
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Real-time global fleet tracking systems, automated warehouse management, and predictive inventory models.",
      img: "https://images.unsplash.com/photo-1587293852726-69436406f391?auto=format&fit=crop&q=80&w=800",
      accent: "text-yellow-400"
    }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">Industries We Transform</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-[5rem] font-black text-[#1F2937] tracking-tighter mb-8 leading-[1.1]"
          >
            Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 italic">Every Sector.</span>
          </motion.h1>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#151B2B] rounded-[2rem] border border-[#151B2B] hover:border-blue-500/30 transition-all group relative overflow-hidden flex flex-col shadow-xl cursor-pointer"
            >
              {/* Image Section */}
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#151B2B] to-transparent z-10"></div>
                <img 
                  src={ind.img} 
                  alt={ind.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-8 pt-4 flex flex-col flex-grow relative z-20">
                <h3 className="text-2xl font-black text-white mb-4 flex items-center justify-between">
                  {ind.title}
                  <ArrowUpRight className={`w-5 h-5 ${ind.accent} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`} />
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {ind.desc}
                </p>
                
                <div className="mt-auto">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${ind.accent} border-b border-transparent group-hover:border-current transition-colors pb-1`}>
                    Explore Solutions
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default IndustryPage;
