import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MonitorCheck, Cpu, Code2, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const EazynitiModels = () => {
  const models = [
    {
      id: 1,
      title: "Technology Agency",
      badge: "Virtual CTO",
      description: "We provide an elite plug-and-play tech team and expert CTO leadership to scale your organization effortlessly.",
      features: ["Strategic Leadership", "Full-Stack Deployment", "Agile & Scalable Teams"],
      icon: <Users className="w-6 h-6 text-white" />,
      glowColor: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]",
      borderColor: "group-hover:border-[#3B82F6]/50 border-white/5",
      bgGradient: "bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A]",
      accentText: "text-[#3B82F6]",
      btnBg: "hover:bg-[#3B82F6] hover:text-white"
    },
    {
      id: 2,
      title: "SaaS Solutions",
      badge: "Custom Build",
      description: "We architect and build tailored Software-as-a-Service platforms that turn your visionary ideas into market reality.",
      features: ["Infinite Scalability", "Modern Architectures", "Seamless API Integrations"],
      icon: <Code2 className="w-6 h-6 text-white" />,
      glowColor: "group-hover:shadow-[0_0_50px_rgba(20,184,166,0.3)]",
      borderColor: "group-hover:border-[#14B8A6]/50 border-white/5",
      bgGradient: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
      accentText: "text-[#14B8A6]",
      btnBg: "hover:bg-[#14B8A6] hover:text-white"
    },
    {
      id: 3,
      title: "Licensed Software",
      badge: "Enterprise",
      description: "Deploy our battle-tested, enterprise-grade software solutions managed annually for absolute peace of mind.",
      features: ["Strict Confidentiality", "Zero-Trust Security", "24/7 Managed Support"],
      icon: <MonitorCheck className="w-6 h-6 text-white" />,
      glowColor: "group-hover:shadow-[0_0_50px_rgba(161,0,255,0.3)]",
      borderColor: "group-hover:border-[#A100FF]/50 border-white/5",
      bgGradient: "bg-gradient-to-br from-[#A100FF] to-[#6B21A8]",
      accentText: "text-[#A100FF]",
      btnBg: "hover:bg-[#A100FF] hover:text-white"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="bg-[#F5F7FA] pt-32 pb-12 px-6 font-sans relative overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-[#3B82F6] opacity-10 blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#A100FF] opacity-5 blur-[150px]"></div>
      </div>

      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 bg-white mb-4 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#3B82F6] animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500">Architecture of Success</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#1F2937] text-5xl md:text-6xl font-black tracking-tighter"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#14B8A6] to-[#A100FF]">Execution Models</span>
        </motion.h2>
      </div>

      {/* --- ANIMATED PREMIUM CARDS --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {models.map((model) => (
          <motion.div 
            key={model.id}
            variants={cardVariants}
            whileHover={{ y: -20, scale: 1.02 }}
            className={`group relative bg-[#151B2B] rounded-[2.5rem] p-10 border transition-all duration-500 flex flex-col h-full shadow-2xl shadow-[#151B2B]/20 ${model.borderColor} ${model.glowColor}`}
          >
            {/* Top Icon & Badge */}
            <div className="flex items-start justify-between mb-8">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:-rotate-6 transition-transform duration-500 ${model.bgGradient}`}>
                {model.icon}
              </div>
              <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                <span className={`text-[10px] font-black uppercase tracking-widest ${model.accentText}`}>
                  {model.badge}
                </span>
              </div>
            </div>
            
            {/* Title & Desc */}
            <h3 className="text-white text-3xl font-black mb-4 leading-[1.1] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
              {model.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm mb-10 flex-grow">
              {model.description}
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-10 pt-8 border-t border-white/5">
              {model.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300 text-sm font-medium">
                  <CheckCircle2 className={`w-4 h-4 mr-3 ${model.accentText}`} />
                  {feature}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button className={`w-full py-4 rounded-xl text-white font-bold text-[11px] uppercase tracking-[0.2em] border border-white/10 bg-white/5 flex items-center justify-center gap-2 transition-all duration-300 ${model.btnBg}`}>
              Deploy Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* --- TRUST BANNER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-24 px-8 py-8 bg-[#1E3A8A] border border-[#3B82F6]/50 shadow-2xl shadow-[#1E3A8A]/30 rounded-[2rem] text-white flex flex-col md:flex-row items-center gap-8 relative z-10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#3B82F6] rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
        
        <div className="relative shrink-0">
          <div className="absolute inset-0 bg-[#3B82F6] blur-xl opacity-60 animate-pulse" />
          <div className="relative p-5 bg-white/10 backdrop-blur-md rounded-[1.75rem] border border-white/20 shadow-xl">
            <ShieldCheck className="w-8 h-8 text-[#14B8A6]" />
          </div>
        </div>
        
        <div className="text-center md:text-left z-10">
          <h4 className="text-xl font-black mb-2 tracking-tight">Enterprise-Grade Security</h4>
          <p className="text-blue-100/90 text-sm leading-relaxed">
            Eazyniti enforces absolute data privacy and state-of-the-art encryption protocols across all business models. Your intellectual property remains securely yours.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EazynitiModels;
