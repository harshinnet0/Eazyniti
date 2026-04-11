import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MonitorCheck, Code2, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const ModelsPage = () => {
  const models = [
    {
      id: 1,
      title: "Technology Agency",
      badge: "Virtual CTO",
      description: "We provide an elite plug-and-play tech team and expert CTO leadership to scale effortlessly.",
      features: ["Strategic Leadership", "Full-Stack Deployment", "Agile Teams"],
      icon: <Users className="w-5 h-5 text-white" />,
      glowColor: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]",
      borderColor: "group-hover:border-[#3B82F6]/50 border-white/5",
      bgGradient: "bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A]",
      accentText: "text-[#3B82F6]",
      btnBg: "hover:bg-[#3B82F6] hover:text-white"
    },
    {
      id: 2,
      title: "SaaS Solutions",
      badge: "Custom Build",
      description: "We architect and build tailored Software-as-a-Service platforms for your visionary ideas.",
      features: ["Infinite Scalability", "Modern Architectures", "API Integrations"],
      icon: <Code2 className="w-5 h-5 text-white" />,
      glowColor: "group-hover:shadow-[0_0_40px_rgba(20,184,166,0.2)]",
      borderColor: "group-hover:border-[#14B8A6]/50 border-white/5",
      bgGradient: "bg-gradient-to-br from-[#14B8A6] to-[#0F766E]",
      accentText: "text-[#14B8A6]",
      btnBg: "hover:bg-[#14B8A6] hover:text-white"
    },
    {
      id: 3,
      title: "Licensed Software",
      badge: "Enterprise",
      description: "Deploy our battle-tested, enterprise-grade software solutions managed for peace of mind.",
      features: ["Strict Confidentiality", "Zero-Trust Security", "24/7 Support"],
      icon: <MonitorCheck className="w-5 h-5 text-white" />,
      glowColor: "group-hover:shadow-[0_0_40px_rgba(161,0,255,0.2)]",
      borderColor: "group-hover:border-[#A100FF]/50 border-white/5",
      bgGradient: "bg-gradient-to-br from-[#A100FF] to-[#6B21A8]",
      accentText: "text-[#A100FF]",
      btnBg: "hover:bg-[#A100FF] hover:text-white"
    }
  ];

  return (
    <div className="bg-[#F5F7FA] pt-24 pb-12 px-6 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#3B82F6] opacity-5 blur-[120px]"></div>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-4 shadow-sm"
        >
          <Sparkles className="w-3 h-3 text-[#3B82F6]" />
          <span className="text-[9px] font-black tracking-widest uppercase text-gray-500">Architecture of Success</span>
        </motion.div>

        <motion.h2 className="text-[#1F2937] text-4xl md:text-5xl font-black tracking-tighter">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#14B8A6] to-[#A100FF]">Execution Models</span>
        </motion.h2>
      </div>

      {/* COMPACT CARDS GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {models.map((model) => (
          <motion.div 
            key={model.id}
            whileHover={{ y: -8 }}
            className={`group relative bg-[#151B2B] rounded-[2rem] p-7 border transition-all duration-500 flex flex-col h-full shadow-xl ${model.borderColor} ${model.glowColor}`}
          >
            {/* Top Icon & Badge */}
            <div className="flex items-start justify-between mb-6">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 ${model.bgGradient}`}>
                {model.icon}
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <span className={`text-[9px] font-black uppercase tracking-widest ${model.accentText}`}>
                  {model.badge}
                </span>
              </div>
            </div>
            
            {/* Title & Desc */}
            <h3 className="text-white text-xl font-bold mb-3 leading-tight tracking-tight">
              {model.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-xs mb-6 flex-grow">
              {model.description}
            </p>
            
            {/* Features */}
            <div className="space-y-3 mb-6 pt-5 border-t border-white/5">
              {model.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300 text-[11px] font-medium">
                  <CheckCircle2 className={`w-3.5 h-3.5 mr-2 ${model.accentText}`} />
                  {feature}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button className={`w-full py-3 rounded-xl text-white font-bold text-[10px] uppercase tracking-widest border border-white/10 bg-white/5 flex items-center justify-center gap-2 transition-all duration-300 ${model.btnBg}`}>
              Deploy Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Trust Banner - Compact */}
      <motion.div 
        className="max-w-4xl mx-auto mt-12 px-6 py-6 bg-[#1E3A8A] border border-[#3B82F6]/50 shadow-xl rounded-[1.5rem] text-white flex flex-col md:flex-row items-center gap-6 relative z-10"
      >
        <div className="relative shrink-0 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
          <ShieldCheck className="w-6 h-6 text-[#14B8A6]" />
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-lg font-black mb-1 tracking-tight">Enterprise-Grade Security</h4>
          <p className="text-blue-100/90 text-[10px] leading-relaxed">
            Eazyniti enforces absolute data privacy and state-of-the-art encryption across all models. Your intellectual property remains yours.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ModelsPage;