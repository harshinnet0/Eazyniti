import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone
} from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-12 pb-8 selection:bg-[#3B82F6]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <span className="text-white font-black text-lg">E</span>
              </div>
              <span className="ml-2 font-black text-xl tracking-tighter text-white">
                Eazy<span className="text-[#3B82F6]">niti</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Engineering high-performance SaaS architectures, AI ecosystems, and scalable software solutions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Focus Areas</h4>
            <ul className="space-y-2.5">
              <li className="text-gray-400 text-sm cursor-default">Artificial Intelligence</li>
              <li className="text-gray-400 text-sm cursor-default">Digital Engineering</li>
              <li className="text-gray-400 text-sm cursor-default">SaaS Architecture</li>
              <li className="text-gray-400 text-sm cursor-default">Cloud Computing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
             <h4 className="font-bold text-white text-sm mb-4">Company</h4>
             <ul className="space-y-2.5">
               <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
               <li><Link to="/work" className="text-gray-400 hover:text-white text-sm transition-colors">Portfolio</Link></li>
               <li><Link to="/partner" className="text-gray-400 hover:text-white text-sm transition-colors">Partner with us</Link></li>
               <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
             </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:eazyniti@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#3B82F6]" /> eazyniti@gmail.com
              </a>
              <a href="tel:+918210700949" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#3B82F6]" /> +91 8210700949
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed cursor-default">
                <MapPin className="w-4 h-4 text-[#3B82F6] mt-0.5 shrink-0" />
                <span>Jaipur, Rajasthan<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-gray-500">
            &copy; {currentYear} Eazyniti. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;