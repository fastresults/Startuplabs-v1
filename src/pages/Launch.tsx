import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Rocket, Newspaper, Users, ArrowUpRight, MessageSquare, Shield } from 'lucide-react';
import LaunchNavigator from '../components/LaunchNavigator';
import Wave from 'react-wavify';

const Launch = () => {
  const launchTools = [
    {
      icon: Rocket,
      name: 'LaunchPad Orchestrator',
      title: 'Campaign Management',
      description: 'This AI platform orchestrates all aspects of your launch campaign with military precision. It creates multi-channel launch timelines with dependencies and critical paths clearly mapped, coordinates messaging across platforms to maintain consistency, and automatically adjusts strategies based on real-time performance metrics. The system prevents launch delays by flagging bottlenecks before they impact timelines and recommends contingency plans for common launch scenarios, allowing founders to navigate the chaotic launch period with confidence.',
      highlight: 'Reduce launch coordination overhead by 60% with AI-driven campaign management.'
    },
    {
      icon: Newspaper,
      name: 'Media Momentum',
      title: 'PR & Press Strategy',
      description: 'This AI tool transforms how startups approach media coverage during launch. It identifies journalists and outlets most likely to cover your specific innovation based on their historical interests, creates personalized pitch angles for each target, and suggests optimal timing for outreach. The platform monitors social sentiment in real-time during launch, allowing immediate response to any narrative shifts, and recommends follow-up stories to maintain momentum after initial coverage peaks.',
      highlight: 'Double your media coverage success rate with AI-powered targeting and timing.'
    },
    {
      icon: Users,
      name: 'Audience Activator',
      title: 'Early Adopter Engagement',
      description: 'This platform focuses specifically on mobilizing your early supporter community during launch. It segments your waitlist, beta users, and prospects based on engagement potential, creates personalized activation sequences for each group, and identifies potential champions who can amplify your message. The AI designs referral incentives optimized for viral spread within your specific market and tracks word-of-mouth metrics to capitalize on organic growth opportunities during the critical launch window.',
      highlight: 'Achieve 3x higher early adopter activation rates with personalized engagement.'
    },
    {
      icon: ArrowUpRight,
      name: 'Conversion Catalyst',
      title: 'Funnel Optimization',
      description: 'This AI service maximizes conversion rates during your highest-visibility period. It conducts real-time A/B testing across landing pages, signup flows, and pricing presentations, implements dynamic content personalization based on traffic source and user behavior, and identifies abandonment patterns with immediate remedy suggestions. The system continuously optimizes every touchpoint in your conversion funnel, ensuring you capitalize on the heightened interest during launch.',
      highlight: 'Increase launch conversion rates by up to 40% through AI optimization.'
    },
    {
      icon: MessageSquare,
      name: 'Feedback Intelligence',
      title: 'Launch Listening',
      description: 'This tool systematizes how startups capture and analyze user reactions during launch. It aggregates feedback across review sites, social platforms, support tickets, and direct communications, identifies sentiment patterns and priority issues requiring immediate attention, and creates categorized action items for your team. The AI distinguishes between noise and signal in early feedback, helping founders focus on the insights that truly impact product-market fit.',
      highlight: 'Turn 90% of user feedback into actionable improvements within hours.'
    },
    {
      icon: Shield,
      name: 'Competitive Response Predictor',
      title: 'Market Positioning',
      description: 'This intelligence platform anticipates how competitors will react to your launch. It analyzes competitor communication patterns, pricing strategies, and historical responses to market entrants to predict likely countermoves. The AI recommends preemptive positioning to neutralize expected competitive messaging and identifies opportunities to decisively differentiate in areas competitors cannot easily match. The system continues monitoring competitive responses post-launch, suggesting tactical adjustments to maintain your advantage.',
      highlight: 'Stay two steps ahead of competitors with AI-powered market intelligence.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/launch-bg.png")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="font-light">launch your</span> <span className="font-extrabold">startup</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Make a powerful market entry with our comprehensive launch services. From marketing strategies to operational excellence, we ensure your startup hits the ground running.
            </p>
          </div>

          <div className="relative h-24 mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
            <Wave 
              fill='url(#gradientLaunch)'
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
                <linearGradient id="gradientLaunch" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#C084FC" />
                  <stop offset="90%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
            </Wave>
            <audio
              src="/images/launch-audio.mp3"
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
              <span className="text-yellow-400">FEATURED TOOL</span> - LaunchNavigator
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your personal guide to a successful startup launch. Get a customized launch playbook with timeline, strategies, and actionable steps.
            </p>
          </div>
          <LaunchNavigator />
        </div>
      </div>

      <div className="bg-[#1b2029] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              <span className="text-yellow-400">AI-POWERED TOOLS</span> - Launch Phase Suite
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access our complete suite of advanced launch tools designed to ensure a successful market entry. Available to all StartupLabs subscribers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {launchTools.map((tool, index) => (
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

export default Launch;