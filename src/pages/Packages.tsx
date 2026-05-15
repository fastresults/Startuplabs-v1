import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ROICalculator from '../components/ROICalculator';
import PackageSelector from '../components/PackageSelector';
import { Brain, Rocket, Package as PackageIcon, Calculator, ArrowRight } from 'lucide-react';

const Packages = () => {
  const [activeSection, setActiveSection] = useState('ai-guided');

  const sections = [
    {
      id: 'ai-guided',
      name: 'AI Guided Mode',
      description: 'Access our complete suite of AI-powered tools',
      price: '$995/year'
    },
    {
      id: 'ready-to-launch',
      name: 'Ready-to-Launch',
      description: 'Complete done-for-you startup packages',
      price: '$6,995',
      isSmall: true
    },
    {
      id: 'custom-mvp',
      name: 'Custom MVP Startup',
      description: 'Tailored solutions for unique needs',
      price: 'Custom'
    },
    {
      id: 'roi-calculator',
      name: 'ROI Calculator',
      description: 'Calculate your potential returns',
      price: 'Free'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative pt-24 min-h-[50vh] md:min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/packages-header.png")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 tracking-tight">
              <span className="font-light">startup</span> <span className="font-extrabold">packages</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-10 leading-relaxed">
              Choose from our carefully crafted service packages designed to take your startup from concept to success, with expert guidance every step of the way.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Jump Menu */}
      <div className="sticky top-16 z-40 bg-gradient-to-r from-black via-black/95 to-black border-y border-gray-800 backdrop-blur-sm py-4 sm:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                    section.isSmall ? 'p-2 sm:p-3' : 'p-3 sm:p-4'
                  } ${
                    activeSection === section.id
                      ? 'bg-gradient-to-br from-blue-600 to-blue-800 scale-[1.02] shadow-lg'
                      : 'bg-black/30 hover:bg-black/50'
                  }`}
                >
                  <div className="relative">
                    <h3 className={`${section.isSmall ? 'text-xs sm:text-sm' : 'text-sm sm:text-lg'} font-medium transition-colors ${
                      activeSection === section.id
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-gray-300'
                    }`}>
                      {section.name}
                    </h3>
                    <span className={`${section.isSmall ? 'text-xs' : 'text-xs sm:text-sm'} block mb-1 sm:mb-2 ${
                      activeSection === section.id
                        ? 'text-blue-200'
                        : 'text-blue-400'
                    }`}>
                      {section.price}
                    </span>
                    <p className={`${section.isSmall ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm'} transition-colors ${
                      activeSection === section.id
                        ? 'text-blue-200'
                        : 'text-gray-500 group-hover:text-gray-400'
                    } line-clamp-2`}>
                      {section.description}
                    </p>
                  </div>
                  <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2">
                    <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                      activeSection === section.id
                        ? 'text-white translate-x-0'
                        : 'text-gray-600 group-hover:text-gray-400 -translate-x-2 group-hover:translate-x-0'
                    }`} />
                  </div>

                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Pricing Info */}
      <div className="bg-[#1b2029] pt-8 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-baseline justify-center gap-2 pb-4">
              <span className="text-3xl sm:text-4xl font-bold text-blue-400">$995</span>
              <span className="text-lg sm:text-xl text-gray-400">/year</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section: AI Guided Mode */}
      <div id="ai-guided" className="bg-[#1b2029] pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <PackageSelector />
          </div>
        </div>
      </div>

      {/* Section: ROI Calculator */}
      <div id="roi-calculator" className="bg-[#1b2029] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ROICalculator />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;