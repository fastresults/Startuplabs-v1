import React, { useState, useEffect } from 'react';
import { 
  Database, Code, Zap, BarChart, Cloud, Lock,
  Lightbulb, PieChart, DollarSign, Package, Rocket, TrendingUp,
  Users, FileText, PenTool, Search, Layout, LineChart
} from 'lucide-react';

// Initialize hours with benchmark values (reduced by half)
const initialHours = {
  // Ideation Phase (35 hours)
  'market-research': 20, // Comprehensive market analysis and research
  'concept-validation': 15, // Customer interviews and validation

  // Planning Phase (42.5 hours)  
  'business-strategy': 25, // Business model and strategy development
  'financial-planning': 17.5, // Financial modeling and projections

  // Funding Phase (35 hours)
  'pitch-deck': 12.5, // Professional pitch deck creation
  'investor-strategy': 22.5, // Investor strategy and preparation

  // Build Phase (100 hours)
  'tech-development': 80, // Core MVP development
  'brand-identity': 20, // Complete brand identity development

  // Launch Phase (40 hours)
  'launch-strategy': 17.5, // Launch planning and strategy
  'marketing-setup': 22.5, // Marketing infrastructure setup

  // Growth Phase (35 hours)
  'growth-analytics': 15, // Analytics setup and dashboards
  'scaling-operations': 20 // Operations optimization and scaling
};

const StartupPackageBuilder = () => {
  const [activePhase, setActivePhase] = useState('ideate');
  const [selectedServices, setSelectedServices] = useState({});
  const [hoursModified, setHoursModified] = useState(false);
  const [hours, setHours] = useState(initialHours);

  const [summary, setSummary] = useState({
    totalHours: 0,
    subtotal: 0,
    discount: 0,
    total: 0,
    selectedPhases: []
  });

  const phases = [
    { id: 'ideate', name: 'Ideate', icon: <Lightbulb className="text-blue-400" /> },
    { id: 'plan', name: 'Plan', icon: <PieChart className="text-blue-400" /> },
    { id: 'fund', name: 'Fund', icon: <DollarSign className="text-blue-400" /> },
    { id: 'build', name: 'Build', icon: <Package className="text-blue-400" /> },
    { id: 'launch', name: 'Launch', icon: <Rocket className="text-blue-400" /> },
    { id: 'grow', name: 'Grow', icon: <TrendingUp className="text-blue-400" /> }
  ];

  const allServices = {
    ideate: [
      {
        id: 'market-research',
        name: 'Market Research & Analysis',
        icon: <Search className="text-blue-400" />,
        hourlyRate: 150,
        description: 'Deep dive into market opportunities and competitor landscape',
        items: ['Market size analysis', 'Competitor research', 'Target audience profiling', 'Market trends report']
      },
      {
        id: 'concept-validation',
        name: 'Concept Validation',
        icon: <Lightbulb className="text-blue-400" />,
        hourlyRate: 175,
        description: 'Validate your business concept with potential customers',
        items: ['Customer interviews', 'Concept testing', 'Value proposition design', 'Initial feedback analysis']
      }
    ],
    plan: [
      {
        id: 'business-strategy',
        name: 'Business Strategy',
        icon: <PieChart className="text-blue-400" />,
        hourlyRate: 200,
        description: 'Develop comprehensive business and revenue models',
        items: ['Business model canvas', 'Revenue strategy', 'Pricing models', 'Growth projections']
      },
      {
        id: 'financial-planning',
        name: 'Financial Planning',
        icon: <DollarSign className="text-blue-400" />,
        hourlyRate: 175,
        description: 'Create detailed financial projections and budgets',
        items: ['Financial forecasting', 'Budget planning', 'Cash flow analysis', 'Break-even analysis']
      }
    ],
    fund: [
      {
        id: 'pitch-deck',
        name: 'Pitch Deck Creation',
        icon: <FileText className="text-blue-400" />,
        hourlyRate: 150,
        description: 'Craft compelling investor presentations',
        items: ['Story development', 'Slide design', 'Financial highlights', 'Pitch coaching']
      },
      {
        id: 'investor-strategy',
        name: 'Investor Strategy',
        icon: <Users className="text-blue-400" />,
        hourlyRate: 225,
        description: 'Develop fundraising strategy and investor relations',
        items: ['Investor targeting', 'Valuation analysis', 'Term sheet review', 'Negotiation support']
      }
    ],
    build: [
      {
        id: 'tech-development',
        name: 'Technical Development',
        icon: <Code className="text-blue-400" />,
        hourlyRate: 200,
        description: 'Build your product with expert developers',
        items: ['Architecture design', 'MVP development', 'Technical documentation', 'Quality assurance']
      },
      {
        id: 'brand-identity',
        name: 'Brand Identity',
        icon: <PenTool className="text-blue-400" />,
        hourlyRate: 150,
        description: 'Create a distinctive brand identity',
        items: ['Logo design', 'Brand guidelines', 'Visual identity', 'Brand messaging']
      }
    ],
    launch: [
      {
        id: 'launch-strategy',
        name: 'Launch Strategy',
        icon: <Rocket className="text-blue-400" />,
        hourlyRate: 175,
        description: 'Plan and execute your market entry',
        items: ['Launch timeline', 'Marketing plan', 'PR strategy', 'Launch metrics']
      },
      {
        id: 'marketing-setup',
        name: 'Marketing Infrastructure',
        icon: <Layout className="text-blue-400" />,
        hourlyRate: 150,
        description: 'Set up your marketing and sales channels',
        items: ['Website setup', 'Analytics implementation', 'Marketing automation', 'Sales pipeline']
      }
    ],
    grow: [
      {
        id: 'growth-analytics',
        name: 'Growth Analytics',
        icon: <BarChart className="text-blue-400" />,
        hourlyRate: 175,
        description: 'Track and optimize your key metrics',
        items: ['KPI dashboard', 'Performance tracking', 'Growth optimization', 'Regular reporting']
      },
      {
        id: 'scaling-operations',
        name: 'Scaling Operations',
        icon: <TrendingUp className="text-blue-400" />,
        hourlyRate: 200,
        description: 'Scale your operations efficiently',
        items: ['Process optimization', 'Team planning', 'Systems integration', 'Automation setup']
      }
    ]
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getDiscountText = () => {
    const discountPercentage = (summary.discount / summary.subtotal) * 100;
    return `Package Discount (${discountPercentage.toFixed(0)}% off)`;
  };

  const isPhaseSelected = (phaseId: string) => {
    return allServices[phaseId].some(service => selectedServices[service.id]);
  };

  const incrementHours = (serviceId: string) => {
    setHours(prev => ({
      ...prev,
      [serviceId]: (prev[serviceId] || 0) + 1
    }));
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: true
    }));
    setHoursModified(true);
  };

  const decrementHours = (serviceId: string) => {
    setHours(prev => {
      const newHours = {
        ...prev,
        [serviceId]: Math.max((prev[serviceId] || 0) - 1, 0)
      };
      
      if (newHours[serviceId] === 0) {
        setSelectedServices(prevSelected => {
          const { [serviceId]: removed, ...rest } = prevSelected;
          return rest;
        });
      }
      
      return newHours;
    });
    setHoursModified(true);
  };

  useEffect(() => {
    const selectedPhases = phases
      .map(phase => phase.id)
      .filter(phaseId => allServices[phaseId].some(service => selectedServices[service.id]));

    let totalHours = 0;
    let subtotal = 0;

    Object.entries(hours).forEach(([serviceId, serviceHours]) => {
      if (serviceHours > 0) {
        totalHours += serviceHours;
        const service = Object.values(allServices)
          .flat()
          .find(s => s.id === serviceId);
        if (service) {
          subtotal += service.hourlyRate * serviceHours;
        }
      }
    });

    let discount = 0;
    if (totalHours >= 100) {
      discount = subtotal * 0.20;
    } else if (totalHours >= 50) {
      discount = subtotal * 0.15;
    } else if (totalHours >= 20) {
      discount = subtotal * 0.10;
    }

    setSummary({
      totalHours,
      subtotal,
      discount,
      total: subtotal - discount,
      selectedPhases
    });
  }, [hours, selectedServices]);

  return (
    <div className="bg-[#1b2029] p-6 rounded-lg">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">Build Your Custom MVP Startup Package</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Select the services and development hours needed for your enterprise startup project.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center mb-6 gap-2">
        {phases.map((phase) => (
          <button
            key={phase.id}
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
              activePhase === phase.id
                ? 'bg-blue-600 text-white'
                : 'bg-black/30 text-gray-400 hover:bg-black/50'
            } ${
              isPhaseSelected(phase.id) && activePhase !== phase.id
                ? 'ring-2 ring-blue-500/50'
                : ''
            }`}
            onClick={() => setActivePhase(phase.id)}
          >
            <span className="mr-2">{phase.icon}</span>
            <span>{phase.name}</span>
            {isPhaseSelected(phase.id) && (
              <span className="ml-2 w-2 h-2 bg-green-500 rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      <div className="text-center mb-8">
        <h2 className="text-xl font-medium text-white mb-2">
          {activePhase === 'ideate' && "Phase 1: Ideate - Develop and validate your business concept"}
          {activePhase === 'plan' && "Phase 2: Plan - Create a comprehensive business strategy"}
          {activePhase === 'fund' && "Phase 3: Fund - Prepare for successful fundraising"}
          {activePhase === 'build' && "Phase 4: Build - Develop your product and brand"}
          {activePhase === 'launch' && "Phase 5: Launch - Enter the market with impact"}
          {activePhase === 'grow' && "Phase 6: Grow - Scale your business efficiently"}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {activePhase === 'ideate' && "Select the services needed to identify market opportunities, develop your concept, and validate with potential customers."}
          {activePhase === 'plan' && "Select the services needed to build a solid business model, position against competitors, and project finances."}
          {activePhase === 'fund' && "Select the services needed to create investor materials, define your funding strategy, and prepare for fundraising."}
          {activePhase === 'build' && "Select the services needed to bring your product to life with technical development and brand identity creation."}
          {activePhase === 'launch' && "Select the services needed to plan your market entry, generate PR, and acquire your first customers."}
          {activePhase === 'grow' && "Select the services needed to track performance, retain customers, and scale your operations."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {allServices[activePhase].map((service) => (
          <div 
            key={service.id}
            className={`bg-black/30 rounded-lg border transition-all duration-200 hover:border-blue-500/50 ${
              selectedServices[service.id] ? 'border-blue-500' : 'border-gray-700'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-900/20 rounded-lg mr-3">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{service.name}</h3>
                <div className="ml-auto text-blue-400 font-medium">${service.hourlyRate}/hr</div>
              </div>
              
              <p className="text-gray-400 mb-3 text-sm">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium text-white mb-2 text-sm">Includes:</h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-blue-400 mr-1">•</span>
                      <span className="text-xs text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <button 
                  onClick={() => decrementHours(service.id)} 
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70"
                >
                  −
                </button>
                <div className="flex items-center">
                  <span className="mx-2 text-lg font-medium text-white">
                    {hours[service.id] || 0}
                  </span>
                  <span className="text-gray-400 text-sm">hrs</span>
                </div>
                <button 
                  onClick={() => incrementHours(service.id)} 
                  className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hoursModified && (
        <>
          <div className="bg-black/30 rounded-lg border border-gray-700 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Your Startup Package Summary</h2>
            
            <div className="mb-4">
              {summary.selectedPhases.length > 0 ? (
                <div className="space-y-3">
                  {summary.selectedPhases.map(phaseId => {
                    const phaseServices = Object.keys(selectedServices)
                      .filter(serviceId => {
                        return allServices[phaseId].some(service => service.id === serviceId);
                      })
                      .map(serviceId => {
                        const service = allServices[phaseId].find(s => s.id === serviceId);
                        return {
                          ...service,
                          hours: hours[serviceId]
                        };
                      });
                    
                    if (phaseServices.length === 0) return null;
                    
                    const phase = phases.find(p => p.id === phaseId);
                    
                    return (
                      <div key={phaseId} className="pb-2 border-b border-gray-700">
                        <div className="flex items-center mb-1">
                          <span className="mr-2">{phase.icon}</span>
                          <span className="font-medium text-white">{phase.name} Phase</span>
                        </div>
                        <div className="pl-6">
                          {phaseServices.map(service => (
                            <div key={service.id} className="flex justify-between text-sm py-1">
                              <span className="text-gray-400">{service.name}</span>
                              <span className="text-gray-400">{service.hours} hrs</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No services selected yet</p>
              )}
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <div className="flex items-center">
                <span className="text-gray-400">Total Development Hours</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg font-medium text-white">{summary.totalHours}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-gray-400">Subtotal</span>
              <span className="text-lg font-medium text-white">{formatCurrency(summary.subtotal)}</span>
            </div>
            
            {summary.discount > 0 && (
              <div className="flex items-center justify-between py-2 border-b border-gray-700 text-green-400">
                <div className="flex items-center">
                  <span>{getDiscountText()}</span>
                </div>
                <span className="font-medium">-{formatCurrency(summary.discount)}</span>
              </div>
            )}
            
            <div className="flex items-center justify-between py-4">
              <span className="text-xl font-semibold text-white">Total Investment</span>
              <div className="text-2xl font-bold text-blue-400">
                {formatCurrency(summary.total)}
              </div>
            </div>
            
            <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center">
              <span>Get Started with Your Custom Package</span>
            </button>
            
            <p className="text-center text-gray-400 mt-4 text-sm">
              Your dedicated startup team will guide you through each selected phase
            </p>
          </div>

          <div className="bg-black/30 rounded-lg border border-gray-700 p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Package Benefits</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                <h3 className="font-medium text-white mb-2">Expert Team Access</h3>
                <p className="text-gray-400 text-sm">Work with specialized professionals across all aspects of your startup journey</p>
              </div>
              
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                <h3 className="font-medium text-white mb-2">Complete Customization</h3>
                <p className="text-gray-400 text-sm">Tailor services to your specific industry, audience, and growth ambitions</p>
              </div>
              
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                <h3 className="font-medium text-white mb-2">Integrated Approach</h3>
                <p className="text-gray-400 text-sm">All services work together seamlessly across technical and business domains</p>
              </div>
              
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                <h3 className="font-medium text-white mb-2">Accelerated Timeline</h3>
                <p className="text-gray-400 text-sm">Launch faster with our proven frameworks and ready-to-implement resources</p>
              </div>
              
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                <h3 className="font-medium text-white mb-2">Ongoing Support</h3>
                <p className="text-gray-400 text-sm">Guidance throughout implementation with regular check-ins and adjustments</p>
              </div>
              
              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                <h3 className="font-medium text-white mb-2">Future-Proof Foundation</h3>
                <p className="text-gray-400 text-sm">Build with scalability and growth in mind from day one</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-900/50 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Included: StartupLabs AI Guided Mode</h2>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Included</span>
            </div>
            
            <p className="text-gray-400 mb-4">Your custom package includes access to our AI-powered startup tools:</p>
            
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm text-gray-400">AI business model assessment</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm text-gray-400">Automated competitive analysis</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm text-gray-400">Basic brand identity generator</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm text-gray-400">Startup financial templates</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm text-gray-400">Standard website templates</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm text-gray-400">Launch checklist generator</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StartupPackageBuilder;