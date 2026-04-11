import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, Menu, X, ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    {
      name: "What we do",
      path: "/service",
      hasDropdown: true,
      dropdownContent: {
        title: "What we do",
        link: "/service",
        sections: [
          {
            title: "Capabilities",
            baseLink: "/service",
            items: [
              "Artificial Intelligence", 
              "Digital Engineering", 
              "SaaS Architecture", 
              "Cloud Computing",
              "Technology Consulting (Virtual CTO)", 
              "UI/UX Design", 
              "Managed Services"
            ]
          },
          {
            title: "Industries",
            baseLink: "/industries",
            items: [
              "Startups & Entrepreneurs", 
              "Education & Universities", 
              "Healthcare Technology", 
              "E-commerce",
              "Agricultural Tech (AgriTech)", 
              "Financial Technology (FinTech)"
            ]
          }
        ]
      }
    },
    { name: "What we think", path: "/what-we-think", hasDropdown: false },
    {
      name: "Who we are",
      path: "/about",
      hasDropdown: true,
      dropdownContent: {
        title: "Who we are",
        link: "/about",
        sections: [
          {
            title: "About Us",
            items: [
              { name: "Our Story & Vision", link: "/story-vision" }, 
              { name: "Leadership Team", link: "/leadership" }, 
              { name: "Technology & Security", link: "/tech-security" }
            ]
          },
          {
            title: "Work With Us",
            items: [
              { name: "Business Models", link: "/models" }, 
              { name: "Our Process", link: "/process" }, 
              { name: "Careers", link: "/careers" }
            ]
          }
        ]
      }
    },
    { name: "Our Projects", path: "/projects", hasDropdown: false },
    { name: "Contact Us", path: "/contact", hasDropdown: false },
  ];

  const activeDropdownData = navLinks.find(link => link.name === activeDropdown);

  // Determine if the current page has a light background at the top
  const lightPaths = ['/contact', '/about', '/what-we-think', '/industries', '/story-vision', '/leadership', '/tech-security', '/models', '/process', '/projects', '/careers'];
  const isLightPage = lightPaths.includes(location.pathname) || location.pathname.startsWith('/service');

  // Determine Navbar base classes
  let navClasses = "fixed top-0 w-full z-[999] transition-all duration-300 ";
  if (isMobileMenuOpen || activeDropdown) {
    navClasses += "bg-[#000000] text-white border-b border-zinc-800";
  } else if (isScrolled) {
    navClasses += "bg-white/95 backdrop-blur-md text-black shadow-sm";
  } else {
    // Top of page
    navClasses += isLightPage ? "bg-transparent text-black" : "bg-transparent text-white";
  }

  // Get Started Button classes
  const getStartedClasses = (isScrolled || isLightPage) && !isMobileMenuOpen && !activeDropdown 
    ? 'border-black bg-black text-white hover:bg-transparent hover:text-black hover:border-black' 
    : 'border-white text-white hover:bg-white hover:text-black';

  // Border class for the utilities
  const utilBorderClass = (isScrolled || isLightPage) && !isMobileMenuOpen && !activeDropdown 
    ? 'border-black/20' 
    : 'border-white/20';

  return (
    <nav ref={dropdownRef} className={navClasses}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px] md:h-20 relative">

        <Link to="/" className="text-lg sm:text-xl font-black tracking-tighter z-[1001] flex-shrink-0">
          Eazyniti<span className="text-[#A100FF] ml-0.5">{">"}</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeDropdown === link.name;
            return (
              <li key={link.name} className="relative h-20 flex items-center">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(isActive ? null : link.name)}
                    className={`flex items-center gap-1 text-[13px] font-bold tracking-wide transition-colors ${isActive ? (isScrolled && !activeDropdown ? 'text-[#A100FF]' : 'text-white') : 'hover:text-[#A100FF]'}`}
                  >
                    {link.name}
                    {isActive ? <ChevronUp size={14} className="ml-1 text-white" /> : <ChevronDown size={14} className="ml-1" />}
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="flex items-center gap-1 text-[13px] font-bold tracking-wide hover:text-[#A100FF] transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-6">
          <div className={`hidden xl:flex items-center gap-4 border-l pl-4 ${utilBorderClass}`}>
            <Search size={18} className="cursor-pointer hover:text-[#A100FF]" />
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#A100FF]">
              <Globe size={18} />
              <span className="text-xs font-bold leading-none">India</span>
              <ChevronDown size={14} />
            </div>
          </div>
          <Link to="/contact" className={`hidden sm:block px-5 py-2 border-2 text-[10px] font-bold uppercase tracking-widest transition-all ${getStartedClasses}`}>
            Get Started
          </Link>
          <button
            type="button"
            className="xl:hidden p-2 z-[1001]"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
      {activeDropdown && activeDropdownData?.dropdownContent && (
        <div className="hidden xl:block absolute top-[80px] left-0 w-full bg-[#1e1e1e] border-t border-zinc-800 text-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-w-[1440px] mx-auto px-6 py-12 flex gap-16 min-h-[400px]">

            {/* Title Section (Left) */}
            <div className="w-[280px] shrink-0">
              <Link
                to={activeDropdownData.dropdownContent.link}
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-3 text-[32px] font-black tracking-tight group hover:opacity-80 transition-opacity"
              >
                {activeDropdownData.dropdownContent.title}
                <div className="bg-[#A100FF] w-8 h-8 flex flex-shrink-0 items-center justify-center text-white group-hover:translate-x-2 transition-transform shadow-[0_0_15px_rgba(161,0,255,0.5)]">
                  <span className="font-bold text-lg leading-none">{">"}</span>
                </div>
              </Link>
            </div>

            {/* Links Section (Right Grid) */}
            <div className="flex-1 flex gap-12 justify-start">
              {activeDropdownData.dropdownContent.sections.map((section, idx) => {

                // Split into two columns if items are many (like Accenture's Industries and Capabilities)
                const splitThreshold = 10;
                const needsSplit = section.items.length > splitThreshold;
                const half = needsSplit ? Math.ceil(section.items.length / 2) : section.items.length;
                const col1 = section.items.slice(0, half);
                const col2 = needsSplit ? section.items.slice(half) : [];

                return (
                  <div key={idx} className="flex-1 max-w-[500px]">
                    <h4 className="text-gray-400 mb-6 text-sm font-medium">{section.title}</h4>
                    <div className="flex gap-8">
                      {/* Column 1 */}
                      <ul className="flex-1 space-y-3">
                        {col1.map((item, idx) => {
                          const itemName = typeof item === 'object' ? item.name : item;
                          const itemLink = typeof item === 'object' ? item.link : (section.baseLink || activeDropdownData.dropdownContent.link);
                          return (
                            <li key={idx}>
                              <Link
                                to={itemLink}
                                onClick={() => setActiveDropdown(null)}
                                className="text-[13px] font-bold text-gray-200 hover:text-white hover:underline decoration-1 underline-offset-4 block"
                              >
                                {itemName}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      {/* Column 2 */}
                      {needsSplit && (
                        <ul className="flex-1 space-y-3">
                          {col2.map((item, idx) => {
                            const itemName = typeof item === 'object' ? item.name : item;
                            const itemLink = typeof item === 'object' ? item.link : (section.baseLink || activeDropdownData.dropdownContent.link);
                            return (
                              <li key={idx}>
                                <Link
                                  to={itemLink}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[13px] font-bold text-gray-200 hover:text-white hover:underline decoration-1 underline-offset-4 block"
                                >
                                  {itemName}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      <div className={`xl:hidden fixed inset-0 bg-black text-white transition-all duration-500 z-[1000] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-24 px-6 sm:px-8 pb-8 overflow-y-auto">

          <div className="flex items-center gap-6 mb-10 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2 cursor-pointer">
              <Search size={20} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-400">Search</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Globe size={18} className="text-[#A100FF]" />
              <span className="text-[10px] font-bold uppercase tracking-widest">India</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-white/5 py-3">
                <div className="flex justify-between items-center gap-4">
                  {link.hasDropdown ? (
                    <button
                      type="button"
                      className={`text-left text-xl font-semibold tracking-tight ${mobileExpanded === link.name ? 'text-[#A100FF]' : 'text-white'}`}
                      onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-xl font-semibold tracking-tight text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.hasDropdown && (
                    <button
                      type="button"
                      className="text-gray-500"
                      aria-expanded={mobileExpanded === link.name}
                      onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                    >
                      {mobileExpanded === link.name ? <Minus size={18} /> : <Plus size={18} />}
                    </button>
                  )}
                </div>

                {link.hasDropdown && mobileExpanded === link.name && link.dropdownContent && (
                  <div className="mt-4 ml-2 flex flex-col gap-5 border-l-2 border-[#A100FF]/30 pl-4 animate-in fade-in slide-in-from-top-1">
                    {link.dropdownContent.sections.map((section, idx) => (
                      <div key={idx}>
                        <p className="text-[#A100FF] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{section.title}</p>
                        <div className="flex flex-col gap-2">
                          {section.items.map((item, idx) => {
                            const itemName = typeof item === 'object' ? item.name : item;
                            const itemLink = typeof item === 'object' ? item.link : (section.baseLink || link.dropdownContent.link);
                            return (
                              <Link 
                                key={idx} 
                                to={itemLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-left text-gray-300 text-sm font-medium py-1"
                              >
                                {itemName}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="mt-12 w-full block text-center py-4 bg-white text-black font-bold uppercase tracking-widest text-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
