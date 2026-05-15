import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Beaker, Network, DollarSign, BarChart3, Users } from 'lucide-react';
import BuildNavigator from '../components/BuildNavigator';
import Wave from 'react-wavify';

const Development = () => {
  const developmentTools = [
    {
      icon: Code,
      name: 'MVPrototyper',
      title: 'Rapid Product Development',
      description: 'This AI accelerates the journey from concept to viable product by translating business requirements into functional prototypes. It helps founders create testable MVPs without extensive development resources by generating wireframes, simulating user flows, and suggesting tech stack options based on your specific needs. The tool continuously identifies the highest-impact features to prioritize, helping founders avoid feature creep and stay focused on validating core hypotheses with real users before investing in full development.',
      highlight: 'Founders report 60% faster MVP development with our AI-guided approach.'
    },
    {
      icon: Beaker,
      name: 'MarketFit Validator',
      title: 'Customer Discovery',
      description: 'This tool systematizes the customer discovery process to ensure you\'re building something people actually want. It designs statistically valid experiments to test your value propositions, analyzes user feedback to identify patterns that humans might miss, and flags when users\' stated preferences conflict with their observed behaviors. The platform helps founders iterate through build-measure-learn cycles more efficiently, accelerating the path to true product-market fit.',
      highlight: 'Teams achieve product-market fit validation in half the time using our systematic approach.'
    },
    {
      icon: Network,
      name: 'ScalePath Architect',
      title: 'Infrastructure & Technical Debt',
      description: 'This AI platform designs scalable technical infrastructure that won\'t collapse under growth. It analyzes your business model and projected user scaling to recommend appropriate technical architecture decisions from day one, helping prevent costly rewrites later. The system continuously monitors technical debt, prioritizing which issues need immediate attention versus what can wait, and creates implementation roadmaps that balance growth needs with system stability.',
      highlight: 'Prevent up to 70% of common technical scaling issues before they occur.'
    },
    {
      icon: DollarSign,
      name: 'Revenue Blueprint',
      title: 'Business Model Implementation',
      description: 'This tool helps transform your business model from theory to operational reality. It creates detailed implementation plans for your chosen revenue model, identifies the exact systems and processes needed to support it, and benchmarks key metrics against similar models. The AI simulates different pricing strategies and their impact on user acquisition and retention, helping you find the optimal approach for sustainable growth.',
      highlight: 'Optimize your revenue model with insights from 10,000+ successful implementations.'
    },
    {
      icon: BarChart3,
      name: 'Metrics Command Center',
      title: 'Performance Tracking',
      description: 'This AI system ensures founders track the right metrics during the build phase. It identifies the specific leading and lagging indicators most predictive of success for your business model, creates custom dashboards showing only what matters at your current stage, and automatically flags metrics deviating from expected ranges. The tool prevents vanity metric fixation by constantly correlating activities with actual business outcomes, helping teams focus efforts on what truly drives sustainable growth.',
      highlight: 'Focus on the 20% of metrics that drive 80% of your success.'
    },
    {
      icon: Users,
      name: 'Customer Experience Architect',
      title: 'Service Design',
      description: 'This platform helps founders build exceptional customer experiences from first interaction onward. It maps entire customer journeys to identify moments of truth and potential friction points, designs service recovery protocols for when things inevitably go wrong, and creates personalization frameworks that scale with your user base. The AI identifies exactly where human touchpoints create maximum value versus where automation improves efficiency, helping startups balance the personal connection of a small company with the reliability of established businesses even while building.',
      highlight: 'Create enterprise-grade customer experiences on a startup budget.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/dev-bg.png")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="font-light">build your</span> <span className="font-extrabold">startup</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Transform your vision into reality with our expert development services. From stunning websites to robust applications, we build the digital foundation for your startup's success.
            </p>
          </div>

          <div className="relative h-24 mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <Wave 
              fill='url(#gradientDev)'
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
                <linearGradient id="gradientDev" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#A855F7" />
                  <stop offset="90%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </Wave>
            <audio
              src="/images/build-audio.mp3"
              controls
              className="absolute left-4 sm:left-6 lg:left-8 bottom-0 mb-4 z-10 h-10 bg-black/30 backdrop-blur-sm border border-gray-700 rounded px-2 hover:border-purple-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#1b2029] py-16 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-yellow-400">FEATURED TOOL</span> - Startup Build Assistant
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your personal guide through every critical stage of launching your startup. Track progress, get customized recommendations, and access resources for each phase.
            </p>
          </div>
          <BuildNavigator />
        </div>
      </div>

      <div className="bg-[#1b2029] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-yellow-400">AI-POWERED TOOLS</span> - Build Phase Suite
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access our complete suite of advanced development tools designed to accelerate your build phase. Available to all StartupLabs subscribers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentTools.map((tool, index) => (
              <div key={index} className="bg-black/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <tool.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-400">{tool.title}</p>
                  </div>
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

export default Development;