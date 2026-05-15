import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, LineChart, Presentation, GitFork, Shield, Compass } from 'lucide-react';
import AlternativeFundingStrategist from '../components/AlternativeFundingStrategist';
import Wave from 'react-wavify';

const Funding = () => {
  const aiTools = [
    {
      icon: Brain,
      name: 'Investor Match AI',
      description: 'This platform analyzes your startup\'s unique attributes and matches you with investors who have historically funded similar companies. It evaluates your business model, growth metrics, and market position against investor preferences and portfolio patterns.',
      highlight: 'Founders praise how it helps them avoid wasting time pitching to investors with misaligned interests, instead connecting them with funders who understand their specific vision and industry dynamics.'
    },
    {
      icon: LineChart,
      name: 'Valuation Optimizer',
      description: 'Stop guessing what your startup is worth. This tool uses predictive modeling based on thousands of funding rounds to create defensible valuation frameworks tailored to your growth stage, industry, and business metrics.',
      highlight: 'Investors respect proposals backed by its data-driven approach.'
    },
    {
      icon: Presentation,
      name: 'Pitch Deck Architect',
      description: 'This AI analyzes successful funding pitches across industries to help craft compelling investor narratives. It identifies which metrics, visuals, and messaging patterns resonate most with different investor types.',
      highlight: 'Founders credit it with dramatically improving their pitch success rates by highlighting the elements investors actually care about.'
    },
    {
      icon: GitFork,
      name: 'Cap Table Simulator',
      description: 'This intuitive platform visualizes how different funding structures will impact ownership and control over multiple rounds. It helps founders model various scenarios including equity splits, option pools, convertible notes, and SAFEs.',
      highlight: 'Entrepreneurs use it to avoid costly cap table mistakes that could haunt them in later stages and to have more informed conversations with potential investors.'
    },
    {
      icon: Shield,
      name: 'Due Diligence Accelerator',
      description: 'Prepare for investor scrutiny before it happens. This tool conducts comprehensive pre-due diligence assessments across legal, financial, and operational dimensions, identifying potential red flags and documentation gaps.',
      highlight: 'Founders value how it helps them present a clean, investment-ready business that can withstand rigorous examination.'
    },
    {
      icon: Compass,
      name: 'Alternative Funding Navigator',
      description: 'Beyond traditional VC, this platform maps the expanding universe of funding options including revenue-based financing, crowdfunding, grants, accelerators, and strategic partnerships.',
      highlight: 'Entrepreneurs appreciate its ability to uncover non-dilutive capital sources that traditional advisors might overlook.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/funding-bg.png")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="font-light">secure your</span> <span className="font-extrabold">startup funding</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Get investor-ready with professional pitch decks, financial models, and direct access to our network of angel investors and venture capital firms.
            </p>
          </div>

          <div className="relative h-24 mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <Wave 
              fill='url(#gradientFunding)'
              paused={false}
              style={{ 
                display: 'flex',
                opacity: 0.5,
                width: '100%'
              }}
              options={{
                height: 80,
                amplitude: 40,
                speed: 0.35,
                points: 3,
                bones: 5
              }}
            >
              <defs>
                <linearGradient id="gradientFunding" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#F59E0B" />
                  <stop offset="90%" stopColor="#D97706" />
                </linearGradient>
              </defs>
            </Wave>
            <audio
              src="/images/fund-audio.mp3"
              controls
              className="absolute left-4 sm:left-6 lg:left-8 bottom-0 mb-4 z-10 h-10 bg-black/30 backdrop-blur-sm border border-gray-700 rounded px-2 hover:border-yellow-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#1b2029] py-16 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-yellow-400">FEATURED TOOL</span> - Alternative Funding Strategist
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover and evaluate non-traditional funding options beyond venture capital, tailored to your startup's unique characteristics.
            </p>
          </div>
          <AlternativeFundingStrategist />
        </div>
      </div>

      <div className="bg-[#1b2029] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-yellow-400">TOP AI-POWERED TOOLS</span> - Startup Funding Suite 2025
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access our complete suite of advanced funding tools designed to maximize your fundraising success. Available to all StartupLabs subscribers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-black/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <tool.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4 min-h-[80px]">
                  {tool.description}
                </p>
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <p className="text-blue-400 text-sm">
                    {tool.highlight}
                  </p>
                </div>
                <Link 
                  to="/packages"
                  className="w-full mt-6 px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Funding;