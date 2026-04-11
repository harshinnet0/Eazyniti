import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, EyeOff, Server, FileDigit, Cpu } from 'lucide-react';

const TechSecurityPage = () => {
  const policies = [
    { title: "Zero-Trust Architecture", desc: "Implicit trust is a vulnerability. We authenticate and strictly authorize every user, request, and device dynamically.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Military-Grade Encryption", desc: "Enterprise data is encrypted AES-256 both at rest and in transit across all active nodes and databases.", icon: <Lock className="w-6 h-6" /> },
    { title: "Edge DDoS Protection", desc: "Resilient edge networks shielding infrastructures against layer 7 volumetric attacks and automated exploit scanning.", icon: <Server className="w-6 h-6" /> },
    { title: "Regulatory Compliance", desc: "Architectures engineered to mathematically comply with rigorous standardizations including HIPAA, GDPR, and SOC2 Frameworks.", icon: <FileDigit className="w-6 h-6" /> },
    { title: "Automated Threat Hunting", desc: "AI-driven anomaly detection continuously monitoring network traffic to neutralize unseen threats before they escalate.", icon: <Cpu className="w-6 h-6" /> },
    { title: "Data Anonymization", desc: "Advanced hashing and PII obfuscation techniques securing end-user data deep within analytical and AI-training pipelines.", icon: <EyeOff className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-[#F5F7FA] min-h-screen pt-32 pb-20 font-sans text-[#1F2937]">
      {/* Hero */}
      <div className="px-6 max-w-7xl mx-auto text-center mb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
          <span className="text-teal-600 text-[10px] font-black uppercase tracking-[0.2em]">Technology & Security</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tighter mb-8 leading-[0.95]">
          Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-400">absolute safety.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          In an era where massive data breaches occur daily, hope is not a strategy. We construct digital fortresses using Zero-Trust policies, deep encryption, and decentralized infrastructure.
        </motion.p>
      </div>

      {/* Massive Security Graphic Banner */}
      <div className="px-6 max-w-[1200px] mx-auto mb-32">
        <div className="w-full h-[350px] md:h-[450px] bg-[#0B0F19] rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row items-center justify-center border border-gray-800">
           {/* Abstract Cyber Grid Background */}
           <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500 rounded-full blur-[150px] opacity-30"></div>
           
           <div className="p-12 md:p-20 relative z-10 w-full text-center">
              <ShieldCheck className="w-20 h-20 text-teal-400 mx-auto mb-6" />
              <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight mb-4 max-w-3xl mx-auto text-balance">The Gold Standard in Cyber Defense</h2>
              <p className="text-teal-100/60 max-w-2xl mx-auto text-lg">We execute strict DevSecOps procedures. Security isn't bolted on at the end—it's woven directly into the fabric of our codebase from day one to production.</p>
           </div>
        </div>
      </div>

      {/* Policies Grid */}
      <div className="px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-black text-center mb-16 tracking-tight">Our Defense Protocol Blueprint</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((pol, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: idx * 0.1 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-teal-500/30 hover:shadow-2xl transition-all cursor-pointer">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 flex justify-center items-center rounded-2xl mb-6">
                {pol.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{pol.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{pol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TechSecurityPage;
