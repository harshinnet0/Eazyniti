import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, MonitorCheck, ShieldCheck, Zap, ArrowUpRight, Sparkles, Binary } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-[#F5F7FA] font-sans selection:bg-[#3B82F6] selection:text-white pb-4">
      
      {/* 1. HERO SECTION: Compact & High-Impact */}
      <section className="relative pt-8 md:pt-12 pb-12 px-6 max-w-7xl mx-auto">
        
        {/* Centered Top Label */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm"
          >
            <Users className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">About Us</span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-black text-[#1F2937] tracking-tighter leading-[0.85] mb-6">
              Engineering <br /> <span className="text-[#3B82F6]">Excellence.</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-md mb-8">
              We are an elite collective of software architects and engineers. We transform complex strategic visions into fault-tolerant, endlessly scalable digital ecosystems that power modern enterprises.
            </p>
            {/* Real Experience Stats bar */}
            <div className="flex gap-10 border-t border-gray-200 pt-6">
              <div>
                <p className="text-3xl font-black text-[#1E3A8A]">200+</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#1E3A8A]">5+ Yrs</p>
                <p className="text-[10px] uppercase font-bold text-gray-400">Market Presence</p>
              </div>
            </div>
          </motion.div>

          {/* REAL OFFICE IMAGE COMPOSITION (No Dead Space) */}
          <div className="relative h-[450px]">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} 
              whileInView={{ scale: 1, opacity: 1 }} 
              className="absolute inset-0 rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                alt="Modern Tech Office" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent" />
            </motion.div>
            
            {/* Floating Collaborative Image */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 w-1/2 h-1/2 rounded-[2.5rem] overflow-hidden border-8 border-[#F5F7FA] shadow-2xl z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover" 
                alt="Team Discussion" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THE 3-MODEL ARCHITECTURE (Compact Grid) */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              icon: <Users className="w-5 h-5 text-white" />, 
              title: "Tech Agency", 
              desc: "Providing tech teams and Virtual CTO leadership for startups and universities.",
              accent: "border-[#3B82F6]", 
              glowColor: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]",
              bgGradient: "bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A]"
            },
            { 
              icon: <Code2 className="w-5 h-5 text-white" />, 
              title: "SaaS Solutions", 
              desc: "Building custom-built SaaS platforms that turn visions into market-ready products.",
              accent: "border-[#14B8A6]", 
              glowColor: "group-hover:shadow-[0_0_50px_rgba(20,184,166,0.3)]",
              bgGradient: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]"
            },
            { 
              icon: <MonitorCheck className="w-5 h-5 text-white" />, 
              title: "Licensed Software", 
              desc: "Enterprise-grade software with annual management and licensed-based access.",
              accent: "border-[#A100FF]", 
              glowColor: "group-hover:shadow-[0_0_50px_rgba(161,0,255,0.3)]",
              bgGradient: "bg-gradient-to-br from-[#A100FF] to-[#6B21A8]"
            }
          ].map((model, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -15, scale: 1.02 }}
              className={`group relative p-10 rounded-[3rem] border-b-8 ${model.accent} bg-[#151B2B] shadow-2xl shadow-[#151B2B]/20 ${model.glowColor} transition-all duration-500 flex flex-col items-start`}
            >
              {/* Icon Container with Gradient and 3D feature from Models */}
              <div className={`mb-8 w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:-rotate-6 transition-transform duration-500 ${model.bgGradient}`}>
                {model.icon}
              </div>
              
              {/* Title with Gradient Hover */}
              <h3 className="text-white text-2xl font-black mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {model.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {model.desc}
              </p>
              
              <div className="mt-auto flex items-center gap-2 text-white/50 font-bold text-[10px] uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SECURITY & ROLES (Privacy Policy Direct Integration) */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="bg-[#1E3A8A] rounded-[4rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          <div className="absolute top-0 right-0 p-40 bg-[#3B82F6]/10 blur-[120px] rounded-full -mr-40 -mt-40" />
          
          <div className="flex-1 z-10 space-y-6">
            <h2 className="text-4xl font-black leading-tight">Technology <br /> with Integrity.</h2>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              As a Data Controller and Processor [cite: 12, 14, 16], we ensure strict confidentiality [cite: 44] and enterprise-grade security [cite: 46, 61] in every project.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               {[
                 { t: "Encryption", s: "In transit & rest [cite: 62]" },
                 { t: "Role-Based", s: "Access control [cite: 64]" },
                 { t: "Audits", s: "Regular security [cite: 65]" },
                 { t: "Privacy", s: "Officer Response [cite: 102]" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-[#14B8A6] tracking-widest flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> {item.t}
                    </span>
                    <span className="text-[9px] text-blue-200/60 mt-0.5">{item.s}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="flex-1 w-full rounded-[3.5rem] overflow-hidden h-[350px] shadow-3xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              alt="Engineering Workstation" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent flex items-end p-8">
              <p className="text-xs font-bold italic">"At Eazyniti, privacy is a core part of how we build trust[cite: 111]."</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL COMPACT CTA */}
      <section className="pt-8 text-center px-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-12 py-5 bg-[#3B82F6] text-white rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-[#3B82F6]/30 hover:bg-[#1E3A8A] transition-all"
        >
          Partner with Eazyniti <ArrowUpRight className="ml-2 w-4 h-4 inline group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </section>

    </div>
  );
};

export default AboutPage;