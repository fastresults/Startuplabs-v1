import { useState } from "react";
import { Link } from "react-router-dom";
import AiGuidedMode from './AiGuidedMode';
import StartupPackageBuilder from './StartupPackageBuilder';
import FreePlan from './FreePlan';
import ReadyToLaunchStartups from './ReadyToLaunchStartups';

const StartupLabsPlan = () => {
  const [activeTab, setActiveTab] = useState('FREE Plan');
  
  const tabs = [
    {
      id: 'FREE Plan',
      name: 'FREE Plan',
      description: 'Powerful tools with zero cost',
      price: '$0'
    },
    {
      id: 'AI Guided Mode',
      name: 'AI Guided Mode',
      description: 'AI Startup Accelerator',
      price: '$995/year'
    },
    {
      id: 'Ready-to-Launch Startups',
      name: 'Ready-to-Launch',
      description: 'Complete turnkey packages',
      price: '$6,995',
      isSmall: true
    },
    {
      id: 'Custom MVP Startups',
      name: 'Custom MVP Startups',
      description: 'Tailored solutions',
      price: 'Custom'
    }
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 px-4 text-center">
        <span className="text-gray-400">Explore Our </span>
        <span className="text-white">Four Startup Paths</span>
        <span className="text-gray-400"> in Depth</span>
      </h1>
      
      <div className="w-full max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl rounded-xl p-4 border border-gray-700/50 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative overflow-hidden rounded-xl transition-all duration-500 p-6 ${
                  tab.isSmall ? 'p-4 sm:p-6' : 'p-6 sm:p-8'
                } ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 scale-[1.02] shadow-lg'
                    : 'bg-black/30 hover:bg-black/50'
                }`}
              >
                <div className="relative">
                  <h3 className={`${tab.isSmall ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'} font-bold transition-colors ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-gray-300'
                  }`}>
                    {tab.name}
                  </h3>
                  <span className={`${tab.isSmall ? 'text-base' : 'text-lg'} block mb-2 sm:mb-3 ${
                    activeTab === tab.id
                      ? 'text-blue-200'
                      : 'text-blue-400'
                  }`}>
                    {tab.price}
                  </span>
                  <p className={`${tab.isSmall ? 'text-sm sm:text-base' : 'text-base sm:text-lg'} transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-200'
                      : 'text-gray-500 group-hover:text-gray-400'
                  } line-clamp-2`}>
                    {tab.description}
                  </p>
                </div>

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === 'FREE Plan' && (
        <div className="w-full space-y-4 mb-8">
          <FreePlan />
        </div>
      )}

      {activeTab === 'AI Guided Mode' && <AiGuidedMode />}

      {activeTab === 'Ready-to-Launch Startups' && <ReadyToLaunchStartups />}

      {activeTab === 'Custom MVP Startups' && (
        <div className="w-full">
          <StartupPackageBuilder />
        </div>
      )}

      <div className="mt-12">
        <Link 
          to="/packages"
          className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
        >
          Book a Discovery Call
        </Link>
      </div>
    </div>
  );
};

export default StartupLabsPlan;