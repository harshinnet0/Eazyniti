import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, ArrowRight, ArrowUpRight, Zap, Building2, CheckCircle2 } from 'lucide-react';

const PartnerPage = () => {
  const partnershipTypes = [
    {
      id: 1,
      title: "Technology Partners",
      description: "Integrate your SaaS or infrastructure with our engineering ecosystem to offer joint solutions to elite enterprise clients.",
      icon: <Zap className="w-5 h-5 text-[#3B82F6]" />,
      benefits: ["API Integration Access", "Co-Marketing Programs", "Technical Support"]
    },
    {
      id: 2,
      title: "Agency Partners",
      description: "Expand your agency's capabilities. Leverage Eazyniti as your white-label engineering arm to deliver complex applications.",
      icon: <Building2 className="w-5 h-5 text-[#14B8A6]" />,
      benefits: ["White-label Engineering", "Dedicated PM", "Revenue Split"]
    },
    {
      id: 3,
      title: "Strategic & Referral",
      description: "Connect us with startups and enterprises needing elite engineering, and earn significant recurring revenue shares.",
      icon: <Users className="w-5 h-5 text-[#A100FF]" />,
      benefits: ["High Commission Model", "Fast Onboarding", "Transparent Reporting"]
    }
  ];

  const trustedPartners = [
    {
      name: "Vivekananda Global University",
      shortName: "VGU",
      url: "vgu.ac.in",
      href: "https://vgu.ac.in",
      category: "Education",
      desc: "Comprehensive digital transformation for one of India's leading universities. We manage their core infrastructure, ERP databases, automated admission portals, and custom web architecture tailored to support thousands of concurrent students and faculty members. Our resilient tech stacks ensure 99.9% uptime for their critical educational services."
    },
    {
      name: "Habbitt Laundry",
      shortName: "Habbitt",
      url: "habbittlaundry.com",
      href: "https://www.habbittlaundry.com/",
      category: "Consumer Tech",
      desc: "End-to-end technology partner for smart laundry ecosystem. We built and continue to scale their enterprise-grade on-demand SaaS architecture, delivery routing algorithms, and customer-facing mobile interfaces. Our cloud infrastructure allows them to process vast contactless orders securely."
    },
    {
      name: "Advi Consulting",
      shortName: "Advi",
      url: "adviconsulting.com",
      href: "https://adviconsulting.com/",
      category: "Consulting",
      desc: "Dedicated engineering arm powering high-level business intelligence portals. We architected their secure data-driven ecosystems and customized workflow automation. By maintaining their internal software frameworks, we enable Advi to deliver premium consultancy experiences."
    },
    {
      name: "Intern4ge",
      shortName: "Intern",
      url: "intern4ge.in",
      href: "https://www.intern4ge.in/about",
      category: "EdTech",
      desc: "Full-scale deployment of talent ecosystems and precise applicant tracking platforms. We handle the complex algorithms behind their internship matching systems, securing immense databases while providing lightning-fast UI experiences for rising talent."
    },
    {
      name: "Qubix India",
      shortName: "Qubix",
      url: "qubix.in",
      href: "#",
      category: "Enterprise",
      desc: "Technical backbone for next-generation corporate solutions. We engineer complex, scalable digital pipelines and internal tools that allow Qubix to maintain an edge. From cloud hosting architecture to advanced UX development, we maintain their functional technology spectrum."
    }
  ];

  return (
    <div className="bg-[#F5F7FA] font-sans">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-gray-200/60 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200 mb-6 shadow-sm"
            >
              <Handshake className="w-3 h-3 text-[#3B82F6]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#1E3A8A]">Partner Program</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-[#1F2937] tracking-tighter leading-[1] mb-6"
            >
              Partner with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#14B8A6]">Eazyniti</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg max-w-lg leading-relaxed mb-8"
            >
              We believe in the power of ecosystems. Join the Eazyniti partner network to unlock new revenue streams, deliver elite engineering to your clients, and build the future of software, together.
            </motion.p>

            <motion.a 
              href="mailto:eazyniti@gmail.com?subject=Partnership%20Inquiry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A8A] text-white rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg hover:shadow-blue-500/30 hover:bg-[#3B82F6] transition-all transform hover:-translate-y-1"
            >
              Apply to Partner <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full aspect-[4/3] bg-[#151B2B] rounded-[3rem] relative shadow-2xl overflow-hidden border border-gray-200"
          >
             <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
              alt="Eazyniti Partnership" 
              className="w-full h-full object-cover mix-blend-overlay opacity-60"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#1E3A8A]/80 to-transparent mix-blend-overlay"></div>
             
              {/* Decorative element */}
             <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] text-white">
                <h3 className="font-bold text-lg mb-1">Growth Multiplier</h3>
                <p className="text-blue-100 text-xs">Our partners experience exponential scale by leveraging our engineering backbone.</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Trusted Partners Section */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full border border-gray-200 mb-4 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1E3A8A]">Trusted By Industry Leaders</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-[#1F2937]">
                We engine the growth <br /> of <span className="text-[#3B82F6]">visionary brands.</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed mb-2">
              From global universities to dynamic consumer tech startups, top tier organizations rely on our engineering agency to operate at scale. We serve as their dedicated technical backbone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustedPartners.map((partner, i) => (
              <motion.a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-[#F5F7FA] border border-gray-200 hover:border-[#3B82F6]/50 hover:shadow-xl transition-all duration-500 overflow-hidden relative flex flex-col h-full"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6] opacity-0 group-hover:opacity-10 blur-[50px] rounded-full transition-opacity duration-500"></div>
                
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-12 h-12 bg-white flex-shrink-0 shadow-sm rounded-2xl flex items-center justify-center font-black text-[#1E3A8A] text-xl border border-gray-100 group-hover:bg-[#3B82F6] group-hover:text-white group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-500">
                    {partner.shortName.charAt(0)}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white shadow-sm border border-gray-100">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#14B8A6]">{partner.category}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-black mb-4 text-[#1F2937] group-hover:text-[#3B82F6] transition-colors relative z-10 tracking-tight">{partner.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow relative z-10 pr-2">{partner.desc}</p>
                
                <div className="mt-auto flex items-center justify-between border-t border-gray-200/80 pt-6 relative z-10">
                  <span className="text-[10px] font-bold text-gray-400 font-mono tracking-wider group-hover:text-gray-800 transition-colors">{partner.url}</span>
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[#3B82F6] group-hover:border-[#3B82F6] group-hover:text-white text-gray-400 transition-colors duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Partner Types Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#1F2937] tracking-tighter mb-4">How we can collaborate</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Choose a partnership model that perfectly aligns with your business goals and audience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partnershipTypes.map((model) => (
             <div key={model.id} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A]/5 transition-colors">
                  {model.icon}
                </div>
                <h3 className="font-bold text-[#1F2937] text-xl mb-3">{model.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {model.description}
                </p>
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  {model.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-xs font-semibold text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#3B82F6]" />
                      {benefit}
                    </div>
                  ))}
                </div>
             </div>
          ))}
        </div>
      </section>
      
      {/* 3. CTA */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-[#151B2B] rounded-[3rem] p-12 relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute top-[-50%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#3B82F6] opacity-10 blur-[100px] pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 relative z-10">
            Ready to scale together?
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto relative z-10 text-sm">
            Reach out to our partnership team to discuss how we can create mutual value and dominate the market.
          </p>
          <a href="mailto:eazyniti@gmail.com?subject=Partnership%20Inquiry" className="inline-block relative z-10 bg-white text-[#151B2B] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-[#3B82F6] hover:text-white transition-colors duration-300">
            Contact Partner Team
          </a>
        </div>
      </section>

    </div>
  );
};

export default PartnerPage;
