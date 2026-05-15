import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { LineChart, Users, DollarSign, ArrowUpRight, Target, Brain } from 'lucide-react';
import GrowthROICalculator from '../components/GrowthROICalculator';
import Wave from 'react-wavify';

const Growth = () => {
  const growthTools = [
    {
      icon: Target,
      name: 'Retention Reactor',
      title: 'Customer Stickiness',
      description: 'This tool remains critical as improving customer retention is one of the fundamental growth levers for startups GrowthMentor. The AI identifies early warning signs of potential churn, designs personalized reengagement sequences, and creates loyalty programs calibrated to your specific customer psychology. It continuously refines your product experience based on usage patterns, ensuring your offering becomes more valuable to users over time.',
      highlight: 'Reduce churn by up to 40% through AI-driven retention strategies.'
    },
    {
      icon: Brain,
      name: 'Growth Lever Identifier',
      title: 'Strategic Focus',
      description: 'This AI platform helps founders find the 10% of work that will bring 90% of the results before running out of money First Round Review. It analyzes your business model, customer data, and market conditions to identify the specific growth levers most likely to drive exponential results for your unique situation. The system continuously monitors performance metrics to validate which levers are working and help you pivot quickly from ineffective strategies.',
      highlight: 'Focus resources on the 20% of initiatives driving 80% of growth.'
    },
    {
      icon: DollarSign,
      name: 'Revenue Model Optimizer',
      title: 'Business Model Refinement',
      description: 'This tool focuses on optimizing your revenue model based on your product type, value proposition, market size, and customer willingness to pay LinkedIn. It simulates different pricing strategies and their impact on user acquisition and retention, tests various packaging options, and measures key metrics like average revenue per user, customer acquisition cost, and lifetime value to help you find the optimal approach for sustainable growth.',
      highlight: 'Increase average revenue per user by 35% through optimized pricing.'
    },
    {
      icon: ArrowUpRight,
      name: 'Acquisition Channel Optimizer',
      title: 'Marketing Efficiency',
      description: 'This AI system helps you analyze customer segments, behaviors, and preferences to choose the most effective acquisition channels LinkedIn. It automatically reallocates budget based on real-time performance data, identifies underutilized customer acquisition channels specific to your industry, and creates personalized messaging for micro-segments of your audience while measuring metrics like cost per acquisition and conversion rates.',
      highlight: 'Reduce customer acquisition costs by up to 45% while scaling growth.'
    },
    {
      icon: LineChart,
      name: 'Expansion Revenue Engine',
      title: 'Growth From Within',
      description: 'This platform focuses on expanding your product range to meet existing customer needs and growing revenue from your current customer base Olivinemarketing, often the most efficient growth path. It identifies ideal expansion moments in the customer journey, creates personalized upsell and cross-sell recommendations based on usage patterns, and designs pricing tiers that naturally encourage account expansion.',
      highlight: 'Increase customer lifetime value by 60% through strategic expansion.'
    },
    {
      icon: Users,
      name: 'Team Growth Accelerator',
      title: 'Talent Optimization',
      description: 'This tool addresses the critical human side of growth, recognizing that startup owners can spend around 40% of their working hours on tasks that don\'t generate income such as hiring and HR tasks Embroker. It forecasts talent needs based on growth projections, identifies roles that will become bottlenecks before they impact performance, and creates hiring roadmaps with optimal sequencing to maintain momentum through rapid growth phases.',
      highlight: 'Reduce hiring time by 50% while improving team performance.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/growth-bg.png")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="font-light">grow your</span> <span className="font-extrabold">startup</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Scale your startup with data-driven strategies, automation tools, and growth hacking techniques that deliver measurable results and sustainable success.
            </p>
          </div>

          <div className="relative h-24 mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <Wave 
              fill='url(#gradientGrowth)'
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
                <linearGradient id="gradientGrowth" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#EC4899" />
                  <stop offset="90%" stopColor="#BE185D" />
                </linearGradient>
              </defs>
            </Wave>
            <audio
              src="/images/grow-audio.mp3"
              controls
              className="absolute left-4 sm:left-6 lg:left-8 bottom-0 mb-4 z-10 h-10 bg-black/30 backdrop-blur-sm border border-gray-700 rounded px-2 hover:border-pink-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#1b2029] py-16 border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-yellow-400">FEATURED TOOL</span> - Growth ROI Calculator
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visualize how different growth levers impact your startup's key metrics. Adjust the sliders to see how your decisions affect revenue, customer base, retention, and satisfaction.
            </p>
          </div>
          <GrowthROICalculator />
        </div>
      </div>

      <div className="bg-[#1b2029] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-yellow-400">AI-POWERED TOOLS</span> - Growth Phase Suite
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access our complete suite of advanced growth tools designed to accelerate your startup's expansion. Available to all StartupLabs subscribers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {growthTools.map((tool, index) => (
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

export default Growth;