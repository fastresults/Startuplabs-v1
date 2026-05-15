import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PlanCraft from '../components/PlanCraft';
import { Brain, Rocket, LayoutGrid, Users, Settings, LineChart } from 'lucide-react';
import Wave from 'react-wavify';

const Planning = () => {
  const paidTools = [
    {
      icon: Brain,
      name: 'The Strategic Navigator',
      description: 'A comprehensive business planning tool that transforms your vision into an actionable roadmap. Enter your business concept and target market, and the AI generates a customized strategy playbook with milestone timelines, resource allocation guides, and funding projections tailored to your specific industry.',
      highlight: 'Founders praise its ability to identify blind spots and contingency scenarios they haven\'t considered.'
    },
    {
      icon: Rocket,
      name: 'Prototype Accelerator',
      description: 'This tool revolutionizes product development by instantly translating your concept into detailed specifications, component requirements, and development timelines. It simulates user interactions to identify UX issues before you build.',
      highlight: 'Startups report cutting their time-to-MVP by 40% while significantly improving first-version product-market fit.'
    },
    {
      icon: LayoutGrid,
      name: 'Business Model Canvas AI',
      description: 'Stop guessing which revenue model works best. This platform analyzes thousands of startup patterns to recommend optimal business models for your specific value proposition and market. It identifies key partnerships, resource requirements, and cost structures.',
      highlight: 'Founders use it to validate their business assumptions before burning through capital.'
    },
    {
      icon: Users,
      name: 'TeamForge AI',
      description: 'Built for founders who understand that execution is everything. This platform analyzes your business goals, then helps identify optimal team structures, roles, and skill gaps based on successful startup patterns.',
      highlight: 'Creates talent acquisition roadmaps aligned with your growth stages and provides customized onboarding workflows.'
    },
    {
      icon: Settings,
      name: 'Service Blueprint Designer',
      description: 'For service-based startups, this tool creates comprehensive service delivery frameworks optimized for scalability and customer experience. It maps customer journeys, identifies operational requirements at each touchpoint, and recommends automation opportunities.',
      highlight: 'The AI continuously optimizes based on service delivery metrics to improve margins and customer satisfaction.'
    },
    {
      icon: LineChart,
      name: 'Startup Scenario Modeler',
      description: 'This powerful simulation tool lets founders test their business models against multiple market conditions and competitive scenarios. It creates dynamic financial models that adapt to changing assumptions.',
      highlight: 'Investors are increasingly expecting founders to show scenario planning that this tool provides in minutes instead of weeks.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/planning-bg.png")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="font-light">craft your</span> <span className="font-extrabold">startup plan</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Transform your vision into an actionable roadmap with PlanCraft. Our AI-powered planning tool creates detailed, customized strategies based on your chosen economic model.
            </p>
          </div>

          <div className="relative h-24 mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <Wave 
              fill='url(#gradientPlanning)'
              paused={false}
              style={{ 
                display: 'flex',
                opacity: 0.5,
                width: '100%'
              }}
              options={{
                height: 60,
                amplitude: 50,
                speed: 0.25,
                points: 4,
                bones: 8
              }}
            >
              <defs>
                <linearGradient id="gradientPlanning" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#22C55E" />
                  <stop offset="90%" stopColor="#15803D" />
                </linearGradient>
              </defs>
            </Wave>
            <audio
              src="/images/plan-audio.mp3"
              controls
              className="absolute left-4 sm:left-6 lg:left-8 bottom-0 mb-4 z-10 h-10 bg-black/30 backdrop-blur-sm border border-gray-700 rounded px-2 hover:border-green-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#1b2029] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PlanCraft />
        </div>
      </div>

      <div className="bg-[#1b2029] py-16 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-yellow-400">PREMIUM TOOLS</span> - Startup Planning Suite
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access our complete suite of advanced planning tools designed to accelerate your startup journey. Available to all StartupLabs subscribers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paidTools.map((tool, index) => (
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

export default Planning;