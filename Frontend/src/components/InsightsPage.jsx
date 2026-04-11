import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Download, Search, Mail, FileText, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightsPage = () => {
  const featuredInsight = {
    category: "Annual Tech Report",
    title: "The Architecture of Tomorrow: AI & Zero-Trust Networks",
    description: "Our comprehensive 2026 report on how enterprise infrastructures are rapidly evolving. We analyzed over 50 global SaaS migrations to determine the definitive framework for the next decade of digital engineering.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    readTime: "12 min read"
  };

  const insightsList = [
    {
      category: "Whitepaper",
      title: "Cost Optimization in Multi-Cloud Microservices",
      desc: "A deeper look at avoiding vendor lock-in while minimizing serverless computing bloat.",
      icon: <FileText className="w-4 h-4" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      category: "Case Study",
      title: "Scaling FinTech: Handling 1M Requests/Sec",
      desc: "How we engineered a highly resilient payment aggregator that defied traditional latency benchmarks.",
      icon: <TrendingUp className="w-4 h-4" />,
      color: "text-teal-500",
      bg: "bg-teal-500/10"
    },
    {
      category: "Tech Trend",
      title: "LLM Hallucinations: Building RAG Pipelines",
      desc: "Practical engineering solutions to ground generative AI outputs within strict enterprise data parameters.",
      icon: <Cpu className="w-4 h-4" />,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen font-sans selection:bg-blue-500 text-[#1F2937]">
      
      {/* Search / Filter Bar Header */}
      <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200">
        <div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Insights <span className="text-gray-400">&</span> Research</h1>
          <p className="text-xl text-gray-500 max-w-2xl">Proprietary analysis and architectural frameworks curated by Eazyniti's Lead Virtual CTOs.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
          <div className="relative w-full md:w-auto">
             <input type="text" placeholder="Search insights..." className="pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full md:w-64" />
             <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      <div className="px-6 max-w-7xl mx-auto py-12">
        {/* Featured Insight (McKinsey Style Big Block) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-[2rem] overflow-hidden bg-[#0B0F19] text-white flex flex-col lg:flex-row mb-16 shadow-2xl group cursor-pointer"
        >
          <div className="w-full lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
            <img src={featuredInsight.image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent lg:hidden" />
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-3 mb-6">
               <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Featured Report</span>
               <span className="text-gray-400 text-xs font-medium">{featuredInsight.readTime}</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight mb-6 leading-tight group-hover:text-blue-400 transition-colors">
              {featuredInsight.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {featuredInsight.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center">
                <BookOpen className="w-4 h-4" /> Read Report
              </button>
              <button className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors w-full sm:w-auto justify-center border border-white/10">
                <Download className="w-4 h-4" /> PDF
              </button>
            </div>
          </div>
        </motion.div>

        {/* Latest Perspectives Grid */}
        <div className="mb-20">
           <h3 className="text-2xl font-black tracking-tight mb-8">Latest Perspectives</h3>
           <div className="grid md:grid-cols-3 gap-8">
             {insightsList.map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer"
                >
                   <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-full ${item.bg} flex items-center justify-center`}>
                        {item.icon}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>
                        {item.category}
                      </span>
                   </div>
                   <h4 className="text-xl font-bold mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                     {item.title}
                   </h4>
                   <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                     {item.desc}
                   </p>
                   <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#1F2937]">Explore</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                   </div>
                </motion.div>
             ))}
           </div>
        </div>

      </div>
      
      {/* Newsletter Block */}
      <div className="bg-[#151B2B] py-24 px-6 text-center text-white relative overflow-hidden">
         {/* Subtle ambient blur */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>

         <div className="max-w-2xl mx-auto relative z-10">
            <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-500/20">
               <Mail className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Stay ahead of the curve.</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl mx-auto">Join 10,000+ top-tier tech executives receiving our architectural blueprints and technical analysis directly to their inbox every month.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
               <input type="email" placeholder="Work email address" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 flex-grow text-sm transition-colors text-white" />
               <button type="button" className="bg-blue-600 text-white font-bold uppercase tracking-widest text-[10px] px-8 py-4 rounded-2xl hover:bg-blue-500 transition-colors flex-shrink-0 border border-blue-500">
                 Subscribe
               </button>
            </form>
         </div>
      </div>

    </div>
  );
};

export default InsightsPage;
