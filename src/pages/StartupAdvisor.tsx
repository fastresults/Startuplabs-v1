import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import StartupConfigurator from '../components/StartupConfigurator';

const StartupAdvisor = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1b2029]">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat px-4 sm:px-6"
        style={{ backgroundImage: 'url("/images/rocket-header.png")' }}
      >
        <div className="container mx-auto flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight text-white">
              <span className="font-light">startup</span> <span className="font-extrabold">advisor</span>
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
              Let's build your startup success story together. Our AI-powered advisor will guide you through every step of your entrepreneurial journey.
            </p>
          </div>
        </div>
      </div>

      {/* Configurator Section */}
      <div className="bg-[#1b2029] py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              <span className="text-yellow-400">FEATURED TOOL</span> - Startup Concept Configurator
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Answer a few questions about your goals, skills, and resources to get personalized startup recommendations and a detailed roadmap for success.
            </p>
          </div>
          
          <StartupConfigurator />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StartupAdvisor;