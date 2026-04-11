import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans selection:bg-[#3B82F6] selection:text-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-4 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#3B82F6]" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Contact Us</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#1F2937] tracking-tighter leading-[1.1]"
          >
            Let's build the <span className="text-[#3B82F6]">future.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium text-base mt-3"
          >
            Crafting Digital Excellence.
          </motion.p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left Column: Corporate Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-[40%] bg-[#1E3A8A] rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl flex flex-col justify-between"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 p-32 bg-[#3B82F6]/20 blur-[80px] rounded-full -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-8 leading-tight">
                Global capability,<br/>
                <span className="text-[#14B8A6]">Local dedication.</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-[#14B8A6]" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-blue-200/60 font-bold mb-1">Direct Inquiries</p>
                    <a href="mailto:eazyniti@gmail.com" className="text-base font-bold hover:text-[#14B8A6] transition-colors">eazyniti@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-[#14B8A6]" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-blue-200/60 font-bold mb-1">Enterprise Support</p>
                    <a href="tel:+918210700949" className="text-base font-bold hover:text-[#14B8A6] transition-colors">+91 82107 00949</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4 text-[#14B8A6]" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-blue-200/60 font-bold mb-1">Headquarters</p>
                    <p className="text-base font-bold">Jaipur<br/><span className="text-xs font-normal text-blue-100/80">Rajasthan, India</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12 pt-6 border-t border-white/10 flex gap-3">
               {/* Minimalist social icons */}
               {[
                 { name: 'LinkedIn', icon: FaLinkedinIn, url: '#' },
                 { name: 'Twitter', icon: FaTwitter, url: '#' },
                 { name: 'GitHub', icon: FaGithub, url: '#' }
               ].map(network => {
                  const Icon = network.icon;
                  return (
                     <a href={network.url} key={network.name} className="p-2.5 rounded-full border border-white/20 text-white hover:bg-white hover:text-[#1E3A8A] transition-colors flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                     </a>
                  );
               })}
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-[60%] bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-[#1F2937] mb-8">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#F5F7FA] border border-transparent focus:border-[#3B82F6] focus:bg-white rounded-2xl px-5 py-4 text-sm outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Work Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@company.com"
                    className="w-full bg-[#F5F7FA] border border-transparent focus:border-[#3B82F6] focus:bg-white rounded-2xl px-5 py-4 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Company / Organization</label>
                <input 
                  type="text" 
                  placeholder="Acme Corp"
                  className="w-full bg-[#F5F7FA] border border-transparent focus:border-[#3B82F6] focus:bg-white rounded-2xl px-5 py-4 text-sm outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about the scope, timeline, and technical requirements..."
                  className="w-full bg-[#F5F7FA] border border-transparent focus:border-[#3B82F6] focus:bg-white rounded-2xl px-5 py-4 text-sm outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={formStatus !== 'idle'}
                className="w-full mt-4 py-5 bg-[#3B82F6] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-lg shadow-[#3B82F6]/30 hover:bg-[#1E3A8A] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {formStatus === 'idle' && (
                  <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
                {formStatus === 'submitting' && 'Processing...'}
                {formStatus === 'success' && (
                  <><CheckCircle2 className="w-4 h-4 text-[#14B8A6]" /> Received Succesfully</>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;