import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const mockServiceDetails = {
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    tagline: "Custom AI models and LLM integrations",
    content: "We engineer proprietary Artificial Intelligence solutions tailored for your enterprise. From fine-tuned Large Language Models to predictive analytics in specialized fields like Agriculture and Finance, we ensure your business is ready for the next decade.",
    features: ["Custom LLM Training & Fine-tuning", "Predictive Machine Learning Models", "Computer Vision and OCR Systems", "Natural Language Processing (NLP)"],
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  "saas-architecture": {
    title: "SaaS Architecture",
    tagline: "Scalable, multi-tenant digital ecosystems",
    content: "We specialize in developing robust SaaS platforms capable of handling millions of concurrent users. Our architectures are built on modern cloud paradigms ensuring Zero-Trust security, strict data isolation, and sub-second scaling latencies.",
    features: ["Multi-tenant Database Architecture", "Microservices & Serverless Design", "High-Availability Redundancy", "Automated Subscription Management"],
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  "cybersecurity": {
    title: "Cybersecurity",
    tagline: "Zero-Trust infrastructure and hardened perimeters",
    content: "Protecting enterprise assets is non-negotiable. We implement rigorous security audits, vulnerability testing, and end-to-end encryption protocols to ensure absolute data confidentiality and protection against advanced persistent threats.",
    features: ["Zero-Trust Network Architecture", "Penetration Testing & Audits", "End-to-End Encryption Setup", "Compliance (HIPAA, GDPR, SOC2)"],
    accent: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  }
};

const ServiceDetailPage = () => {
  const { id } = useParams();
  
  // Provide a robust fallback for other services
  const service = mockServiceDetails[id] || {
    title: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    tagline: "Enterprise-grade technical capability",
    content: "Eazyniti provides comprehensive solutions and dedicated engineering teams to execute this capability at scale. Our Virtual CTOs oversee every aspect from structural blueprinting to final production deployment, ensuring flawless delivery.",
    features: ["Strategic Technical Consulting", "End-to-End Engineering Implementation", "Scalable System Architecture", "24/7 Managed Support & Monitoring"],
    accent: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20"
  };

  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-32 pb-20 px-6 font-sans text-[#1F2937]">

      <div className="max-w-5xl mx-auto relative z-10">
        <Link to="/service" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors text-sm font-bold uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-[#0B0F19] text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Background Glow Inside the Card */}
          <div className={`absolute top-0 right-0 w-[400px] h-[400px] ${service.bg} rounded-full blur-[100px] pointer-events-none opacity-40`}></div>

          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${service.bg} border ${service.border} mb-8 relative z-10`}>
            <span className={`w-2 h-2 rounded-full bg-current ${service.accent} animate-pulse`}></span>
            <span className={`${service.accent} text-[10px] font-black uppercase tracking-[0.2em]`}>Capability Deep Dive</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 relative z-10">{service.title}</h1>
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 mb-12 font-medium max-w-2xl relative z-10">
            {service.tagline}
          </p>
          
          <div className="prose prose-invert prose-lg max-w-none relative z-10">
            <p className="text-gray-400 leading-relaxed mb-16 text-lg">
              {service.content}
            </p>
            
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Key Deliverables</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                  <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${service.accent}`} />
                  <span className="text-gray-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 p-8 rounded-3xl bg-[#151B2B] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <h4 className="text-xl font-bold mb-2">Ready to implement {service.title}?</h4>
              <p className="text-gray-400 text-sm">Schedule a technical audit with our engineering team today.</p>
            </div>
            <Link to="/contact" className="flex-shrink-0 bg-white text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-gray-200 transition-all flex items-center gap-2">
              Consult a CTO
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
