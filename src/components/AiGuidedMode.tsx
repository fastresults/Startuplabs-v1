import React, { useState, useRef } from "react";
import { Play, Brain, Target, Users, DollarSign, Briefcase, LineChart, Shield, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPlayerModal from './VideoPlayerModal';

const stages = [
  {
    title: "Ideation",
    color: "#3B82F6",
    tools: [
      {
        name: "Market Opportunity Scanner",
        description: "Identifies untapped market opportunities by analyzing consumer pain points and emerging trends",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
      },
      {
        name: "Competitive Intelligence Engine",
        description: "Creates comprehensive competitive landscapes to identify whitespace opportunities",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      },
      {
        name: "Concept Validator",
        description: "Stress-tests startup ideas against multiple validation frameworks",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
      },
      {
        name: "Customer Archetype Designer",
        description: "Synthesizes behavioral patterns to create detailed customer archetypes",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      },
      {
        name: "Value Proposition Optimizer",
        description: "Helps founders articulate compelling value propositions",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80"
      },
      {
        name: "Regulatory Navigator",
        description: "Identifies potential regulatory hurdles and compliance requirements",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    title: "Planning",
    color: "#10B981",
    tools: [
      {
        name: "Strategic Navigator",
        description: "Transforms your vision into an actionable roadmap with clear milestones",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
      },
      {
        name: "Prototype Accelerator",
        description: "Translates concepts into detailed specifications and development timelines",
        image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80"
      },
      {
        name: "Business Model Canvas AI",
        description: "Analyzes startup patterns to recommend optimal business models",
        image: "https://images.unsplash.com/photo-1531403009284-440f7d0c914d?auto=format&fit=crop&q=80"
      },
      {
        name: "TeamForge AI",
        description: "Identifies optimal team structures and skill requirements",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      },
      {
        name: "Service Blueprint Designer",
        description: "Creates scalable service delivery frameworks",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
      },
      {
        name: "Startup Scenario Modeler",
        description: "Tests business models against multiple market conditions",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    title: "Funding",
    color: "#EC4899",
    tools: [
      {
        name: "Investor Match AI",
        description: "Matches your startup with investors who have historically funded similar companies",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80"
      },
      {
        name: "Valuation Optimizer",
        description: "Creates defensible valuation frameworks based on thousands of funding rounds",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
      },
      {
        name: "Pitch Deck Architect",
        description: "Analyzes successful funding pitches to help craft compelling investor narratives",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
      },
      {
        name: "Cap Table Simulator",
        description: "Visualizes how different funding structures impact ownership over multiple rounds",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
      },
      {
        name: "Due Diligence Accelerator",
        description: "Conducts comprehensive pre-due diligence assessments",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
      },
      {
        name: "Alternative Funding Navigator",
        description: "Maps the expanding universe of funding options beyond traditional VC",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    title: "Development",
    color: "#8B5CF6",
    tools: [
      {
        name: "MVPrototyper",
        description: "Accelerates journey from concept to viable product with functional prototypes",
        image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80"
      },
      {
        name: "MarketFit Validator",
        description: "Systematizes customer discovery to ensure product-market fit",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      },
      {
        name: "ScalePath Architect",
        description: "Designs scalable technical infrastructure that won't collapse under growth",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      },
      {
        name: "Revenue Blueprint",
        description: "Transforms business models from theory to operational reality",
        image: "https://images.unsplash.com/photo-1554224155-8947cbd47b3e?auto=format&fit=crop&q=80"
      },
      {
        name: "Metrics Command Center",
        description: "Ensures founders track the right metrics and prevents vanity metric fixation",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
      },
      {
        name: "Customer Experience Architect",
        description: "Builds exceptional customer experiences from first interaction onward",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    title: "Launch",
    color: "#EF4444",
    tools: [
      {
        name: "LaunchPad Orchestrator",
        description: "Orchestrates all aspects of your launch campaign with military precision",
        image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80"
      },
      {
        name: "Media Momentum",
        description: "Transforms how startups approach media coverage during launch",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4f6d7e3?auto=format&fit=crop&q=80"
      },
      {
        name: "Audience Activator",
        description: "Mobilizes your early supporter community with personalized activation sequences",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      },
      {
        name: "Conversion Catalyst",
        description: "Maximizes conversion rates during launch with real-time optimization",
        image: "https://images.unsplash.com/photo-1533750516515-26f878702324?auto=format&fit=crop&q=80"
      },
      {
        name: "Feedback Intelligence",
        description: "Captures and analyzes user feedback across multiple channels during launch",
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
      },
      {
        name: "Competitive Response Predictor",
        description: "Anticipates and prepares for competitor reactions to your launch",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
      }
    ]
  },
  {
    title: "Growth",
    color: "#22C55E",
    tools: [
      {
        name: "Retention Reactor",
        description: "Identifies early warning signs of potential churn and designs reengagement sequences",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
      },
      {
        name: "Growth Lever Identifier",
        description: "Finds the 10% of work that will bring 90% of results before running out of money",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
      },
      {
        name: "Revenue Model Optimizer",
        description: "Optimizes your revenue model based on product type and market size",
        image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80"
      },
      {
        name: "Acquisition Channel Optimizer",
        description: "Reallocates marketing budget based on real-time performance data",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0f?auto=format&fit=crop&q=80"
      },
      {
        name: "Expansion Revenue Engine",
        description: "Focuses on expanding your product range to meet existing customer needs",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
      },
      {
        name: "Team Growth Accelerator",
        description: "Forecasts talent needs and creates hiring roadmaps during rapid growth",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      }
    ]
  }
];

const AiGuidedMode = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string>('');
  const [selectedPhase, setSelectedPhase] = useState<string>('');
  const [showResults, setShowResults] = useState(true);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handlePlayClick = (e: React.MouseEvent, title: string, phase: string) => {
    e.stopPropagation();
    setSelectedVideoTitle(title);
    setVideoModalOpen(true);
    setSelectedPhase(phase);
  };

  return (
    <div className="w-full bg-[#1b2029] p-2 sm:p-3 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">StartupLabs AI Guided Mode</h1>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="bg-blue-900/20 text-blue-400 font-medium px-3 py-1 rounded-full text-sm border border-blue-900/50">100% AI-POWERED</span>
          <span className="bg-purple-900/20 text-purple-400 font-medium px-3 py-1 rounded-full text-sm border border-purple-900/50">PREMIUM SUITE</span>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Leverage our AI toolkit to transform your entrepreneurial journey, strategically advancing from ideation through scaling with data-driven precision. <span className="text-white font-bold">Click each phase below</span> to expand benefits.
        </p>
      </div>
      
      <div className="relative py-8">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 text-white hover:bg-black/90 transition-all border border-gray-700 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 text-white hover:bg-black/90 transition-all border border-gray-700 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 mb-12 pb-4 px-12 scrollbar-hide scroll-smooth"
        >
          {stages.map((stage, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(activeStage === index ? null : index)}
              className={`flex-shrink-0 p-6 rounded-xl transition-all duration-500 transform ${
                activeStage === index 
                  ? 'bg-gradient-to-br from-black/60 to-black/40 border-2 scale-[1.02] shadow-xl' 
                  : 'bg-black/20 border hover:scale-[1.01]'
              }`}
              style={{ 
                borderColor: activeStage === index ? stage.color : 'rgb(55, 65, 81)',
                minWidth: '280px'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg ${
                    activeStage === index ? 'animate-pulse' : ''
                  }`}
                  style={{ 
                    backgroundColor: `${stage.color}20`,
                    color: stage.color,
                    border: `1px solid ${stage.color}40`
                  }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 
                    className={`text-xl font-bold mb-1 transition-colors ${
                      activeStage === index ? `text-${stage.color}` : 'text-white'
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="text-sm text-gray-400">{stage.tools.length} premium tools</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="relative group">
                  <button
                    onClick={(e) => handlePlayClick(e, `${stage.title} Overview`, stage.title)}
                    className={`p-2 rounded-lg transition-all ${
                      activeStage === index 
                        ? 'bg-blue-500/20 hover:bg-blue-500/30' 
                        : 'bg-black/30 hover:bg-black/50'
                    }`}
                  >
                    <Play className={`w-5 h-5 ${
                      activeStage === index ? 'text-blue-400' : 'text-gray-400'
                    }`} />
                  </button>
                  <div className="absolute -bottom-8 right-0 bg-black/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Watch video
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Explore</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeStage === index ? 'text-blue-400 translate-x-1' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeStage !== null && (
        <div className="bg-black/20 rounded-lg border border-gray-700 p-8 mb-12 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages[activeStage].tools.map((tool, toolIndex) => (
              <div 
                key={toolIndex}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setExpandedTool(expandedTool === `${activeStage}-${toolIndex}` ? null : `${activeStage}-${toolIndex}`)}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img 
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-900/20 text-blue-400 border border-blue-900/50">
                        AI-POWERED
                      </span>
                    </div>
                    <h3 className="text-white font-semibold">{tool.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">{tool.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showResults && (
        <div className="space-y-8 w-full">
          <div className="bg-black/30 p-6 sm:p-8 rounded-lg border border-gray-700 w-full">
            <h3 className="text-xl font-bold text-white mb-6">Accelerate Your Startup with AI</h3>
            <p className="text-gray-400 mb-6">
              All premium AI-powered tools designed to help founders move faster, make better decisions, and avoid costly mistakes.
            </p>
            <div className="w-full">
              <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Star className="w-5 h-5" />
                <span className="whitespace-nowrap">Upgrade to Premium AI Suite</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <VideoPlayerModal 
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoTitle={selectedVideoTitle}
        phase={selectedPhase}
      />
    </div>
  );
};

export default AiGuidedMode;