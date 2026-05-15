import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BusinessTrendAnalyzer from '../components/BusinessTrendAnalyzer';
import { Brain, Target, CheckSquare, Users, MessageSquare, Shield } from 'lucide-react';
import Wave from 'react-wavify';

const Ideation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const premiumTools = [
    {
      icon: Target,
      name: 'Market Opportunity Scanner',
      description: 'This powerful ideation tool identifies untapped market opportunities by analyzing consumer pain points, emerging trends, and market gaps. It uses predictive analytics to evaluate market size, growth potential, and timing.',
      highlight: 'Entrepreneurs value how it quantifies market viability with concrete data rather than guesswork, prioritizing concepts with the strongest potential for traction.'
    },
    {
      icon: Brain,
      name: 'Competitive Intelligence Engine',
      description: 'This platform creates comprehensive competitive landscapes by analyzing public and proprietary datasets on competitors\' offerings, pricing strategies, and market positioning. It identifies whitespace opportunities and differentiation angles.',
      highlight: 'Founders use it to position their startups for maximum competitive advantage before writing a single line of code.'
    },
    {
      icon: CheckSquare,
      name: 'Concept Validator',
      description: 'This tool stress-tests startup ideas against multiple validation frameworks without the confirmation bias that plagues founders. It simulates customer behaviors, objections, and adoption barriers.',
      highlight: 'Entrepreneurs appreciate how it forces them to confront uncomfortable questions about their ideas early, saving them from building products nobody wants.'
    },
    {
      icon: Users,
      name: 'Customer Archetype Designer',
      description: 'This platform synthesizes behavioral patterns, psychological drivers, and need states to create detailed customer archetypes for your target market. It identifies early adopter characteristics and potential evangelists.',
      highlight: 'Founders use it to design offerings that resonate deeply with their ideal customers.'
    },
    {
      icon: MessageSquare,
      name: 'Value Proposition Optimizer',
      description: 'This tool helps founders articulate compelling value propositions by analyzing successful messaging patterns across industries. It evaluates different positioning angles against customer pain points and competitive offerings.',
      highlight: 'Entrepreneurs value how it helps them communicate their idea\'s unique value clearly and persuasively from the start.'
    },
    {
      icon: Shield,
      name: 'Regulatory & Barrier Analyzer',
      description: 'This platform identifies potential regulatory hurdles, industry barriers, and market entry challenges specific to your concept. It evaluates compliance requirements, necessary partnerships, and typical timelines.',
      highlight: 'Founders appreciate the comprehensive risk assessment it provides, allowing them to tackle potential showstoppers early.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#1b2029]">
      <Navigation />
      
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/ideation-bg.png")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="font-light">turn your</span> <span className="font-extrabold">ideas</span> <span className="font-light">into reality</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Our AI-powered platform helps validate your startup ideas, create compelling business names, assess market viability, and craft engaging marketing copy - all in minutes.
            </p>
          </div>

          <div className="relative h-24 mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <Wave 
              fill='url(#gradientIdeation)'
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
                <linearGradient id="gradientIdeation" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#3B82F6" />
                  <stop offset="90%" stopColor="#1D4ED8" />
                </linearGradient>
              </defs>
            </Wave>
            <audio
              src="/images/ideation-audio.mp3"
              controls
              className="absolute left-4 sm:left-6 lg:left-8 bottom-0 mb-4 z-10 h-10 bg-black/30 backdrop-blur-sm border border-gray-700 rounded px-2 hover:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#1b2029] py-16">
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          <span className="text-yellow-400">FREE TOOLS</span> - Bloody useful things we're giving away
          <span className="block text-xl font-normal mt-2 text-white/80">(Yes, really. No catches.)</span>
        </h2>
        <BusinessTrendAnalyzer />
      </div>

      <div className="bg-[#1b2029] py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-3xl font-bold text-center mb-12">
            <span className="text-yellow-400">PREMIUM SUITE</span> - Top AI-Powered Tools for Startup Ideation in 2025
            <span className="block text-xl font-normal mt-2 text-white/80">(Think you're ready? Prove it.)</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumTools.map((tool, index) => (
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

export default Ideation;