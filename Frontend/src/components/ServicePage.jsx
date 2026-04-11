import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Cloud, 
  ShieldCheck, 
  Briefcase, 
  Layout, 
  Settings, 
  Sprout,
  ArrowUpRight
} from 'lucide-react';

const ServicePage = () => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Artificial Intelligence",
      desc: "Custom AI models and LLM integrations, specialized in Agricultural AI solutions.",
      accent: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "SaaS Architecture",
      desc: "Building scalable, multi-tenant architectures designed for high-performance growth.",
      accent: "from-purple-500 to-indigo-400"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Technology Consulting",
      desc: "Virtual CTO services to lead your technical roadmap and scale engineering teams.",
      accent: "from-emerald-500 to-teal-400"
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Digital Engineering",
      desc: "End-to-end product engineering from ideation to deployment (KrishiVision style).",
      accent: "from-orange-500 to-yellow-400"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Computing",
      desc: "Secure cloud infrastructure, DevOps automation, and serverless deployments.",
      accent: "from-blue-600 to-blue-400"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Experience",
      desc: "High-end, minimalist interfaces with Framer Motion animations and premium feel.",
      accent: "from-pink-500 to-rose-400"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Cybersecurity",
      desc: "Robust security audits and protection for your digital assets and user data.",
      accent: "from-red-500 to-orange-400"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Managed Services",
      desc: "24/7 technical support and maintenance to ensure zero-downtime operations.",
      accent: "from-gray-400 to-gray-200"
    }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-32 pb-20 px-6 font-sans selection:bg-blue-500/30">
      
      {/* Background Ambience Removed for Light Theme */}

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">Our Capabilities</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-[5rem] font-black text-[#1F2937] tracking-tighter mb-8 leading-[1.1]"
          >
            Solutions for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic">Digital Age.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Eazyniti delivers world-class engineering. We don't just build apps; we architect ecosystems that scale, protect, and innovate.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            return (
              <Link to={`/service/${slug}`} key={idx} className="block group">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#151B2B] p-8 rounded-[2rem] border border-[#151B2B] hover:border-blue-500/30 transition-all relative overflow-hidden h-full flex flex-col shadow-xl"
                >
                  {/* Subtle Gradient Glow on Hover */}
                  <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 transition-opacity blur-2xl`}></div>
                  
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit text-white group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                    {service.desc}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-900 flex flex-col items-center text-center text-white overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 tracking-tight">Have a custom requirement?</h2>
          <p className="text-blue-100 mb-10 max-w-xl relative z-10">Our lead architects and CTOs are ready to discuss your architecture and provide a free consultation.</p>
          <Link to="/contact" className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all relative z-10">
            Schedule Tech Audit
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ServicePage;