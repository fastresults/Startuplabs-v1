import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, LineChart, Presentation, GitFork, Shield, Compass,
  ArrowRight, Rocket, Target, Users, DollarSign, Briefcase,
  Search, Clock, MessageSquare, CheckSquare, CheckCircle2, AlertTriangle,
  Milestone, BarChart3
} from 'lucide-react';

interface Question {
  id: string;
  text: string;
  type: 'text' | 'select' | 'number';
  options?: string[];
}

interface EconomyType {
  id: string;
  name: string;
  description: string;
  questions: Question[];
  color: string;
}

interface Plan {
  timeline: {
    phase: string;
    duration: string;
    milestones: string[];
  }[];
  resources: {
    people: string[];
    financial: string[];
    time: string[];
  };
  metrics: string[];
  challenges: string[];
  actionItems: {
    phase: string;
    items: string[];
  }[];
}

const economyTypes: EconomyType[] = [
  {
    id: 'gig',
    name: 'Gig Economy',
    description: 'Build a platform connecting independent workers with clients seeking services.',
    color: 'from-blue-600 to-blue-800',
    questions: [
      {
        id: 'service_type',
        text: 'What type of services will your platform facilitate?',
        type: 'select',
        options: [
          'Professional Services',
          'Creative Work',
          'Manual Labor',
          'Specialized Skills',
          'Consulting'
        ]
      },
      {
        id: 'target_workers',
        text: 'Who are your target service providers?',
        type: 'text'
      },
      {
        id: 'pricing_model',
        text: 'What pricing model will you use?',
        type: 'select',
        options: [
          'Fixed Price',
          'Hourly Rate',
          'Commission Based',
          'Subscription',
          'Hybrid Model'
        ]
      },
      {
        id: 'initial_market',
        text: 'Which geographic market will you target first?',
        type: 'text'
      }
    ]
  },
  {
    id: 'mainstreet',
    name: 'Main Street Economy',
    description: 'Launch a traditional brick-and-mortar business serving local customers.',
    color: 'from-green-600 to-green-800',
    questions: [
      {
        id: 'business_type',
        text: 'What type of Main Street business are you planning?',
        type: 'select',
        options: [
          'Retail Store',
          'Restaurant/Café',
          'Personal Services',
          'Professional Services',
          'Specialty Shop'
        ]
      },
      {
        id: 'location_type',
        text: 'What type of location are you targeting?',
        type: 'select',
        options: [
          'Downtown/City Center',
          'Shopping Center/Mall',
          'Neighborhood Commercial',
          'Business District',
          'Suburban Area'
        ]
      },
      {
        id: 'customer_base',
        text: 'Describe your primary customer base:',
        type: 'text'
      },
      {
        id: 'startup_capital',
        text: 'What is your estimated startup capital?',
        type: 'number'
      }
    ]
  },
  {
    id: 'digital',
    name: 'Digital Economy',
    description: 'Create an online business delivering digital products or services.',
    color: 'from-purple-600 to-purple-800',
    questions: [
      {
        id: 'product_type',
        text: 'What type of digital product/service will you offer?',
        type: 'select',
        options: [
          'SaaS Platform',
          'Digital Content',
          'Online Courses',
          'Digital Downloads',
          'Subscription Service'
        ]
      },
      {
        id: 'tech_stack',
        text: 'What technology stack are you planning to use?',
        type: 'text'
      },
      {
        id: 'monetization',
        text: 'What is your primary monetization strategy?',
        type: 'select',
        options: [
          'Subscription',
          'One-time Purchase',
          'Freemium',
          'Advertising',
          'Marketplace Fees'
        ]
      },
      {
        id: 'target_market',
        text: 'Describe your target market segment:',
        type: 'text'
      }
    ]
  },
  {
    id: 'platform',
    name: 'Platform Economy',
    description: 'Build a marketplace platform connecting multiple user groups.',
    color: 'from-red-600 to-red-800',
    questions: [
      {
        id: 'platform_type',
        text: 'What type of platform are you building?',
        type: 'select',
        options: [
          'Marketplace',
          'Social Platform',
          'Service Exchange',
          'Content Platform',
          'Sharing Economy'
        ]
      },
      {
        id: 'user_groups',
        text: 'Describe the main user groups you\'ll connect:',
        type: 'text'
      },
      {
        id: 'network_effects',
        text: 'How will you achieve network effects?',
        type: 'text'
      },
      {
        id: 'revenue_model',
        text: 'What is your platform\'s revenue model?',
        type: 'select',
        options: [
          'Transaction Fees',
          'Subscription',
          'Advertising',
          'Premium Features',
          'Hybrid Model'
        ]
      }
    ]
  }
];

const PlanCraft = () => {
  const [selectedEconomy, setSelectedEconomy] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [plan, setPlan] = useState<Plan | null>(null);

  const handleEconomySelect = (economyId: string) => {
    setSelectedEconomy(economyId);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setPlan(null);
  };

  const handleAnswerSubmit = (answer: string) => {
    const economy = economyTypes.find(e => e.id === selectedEconomy);
    if (!economy) return;

    const currentQuestion = economy.questions[currentQuestionIndex];
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));

    if (currentQuestionIndex < economy.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      generatePlan();
    }
  };

  const generatePlan = () => {
    const newPlan: Plan = {
      timeline: [
        {
          phase: 'Research & Planning',
          duration: '1-2 months',
          milestones: [
            'Market research and validation',
            'Business plan development',
            'Financial projections',
            'Legal requirements review'
          ]
        },
        {
          phase: 'Setup & Development',
          duration: '2-3 months',
          milestones: [
            'Business registration',
            'Product/service development',
            'Website/platform creation',
            'Initial marketing materials'
          ]
        },
        {
          phase: 'Launch & Growth',
          duration: '3-6 months',
          milestones: [
            'Soft launch and testing',
            'Marketing campaign execution',
            'Customer feedback collection',
            'Operations optimization'
          ]
        }
      ],
      resources: {
        people: [
          'Project Manager',
          'Technical Lead',
          'Marketing Specialist',
          'Operations Manager'
        ],
        financial: [
          'Initial investment: $50,000',
          'Operating costs: $10,000/month',
          'Marketing budget: $15,000',
          'Emergency fund: $25,000'
        ],
        time: [
          'Planning phase: 2 months',
          'Development: 3 months',
          'Launch preparation: 1 month',
          'Initial growth phase: 6 months'
        ]
      },
      metrics: [
        'Customer acquisition cost',
        'Monthly recurring revenue',
        'User engagement rate',
        'Customer lifetime value',
        'Churn rate'
      ],
      challenges: [
        'Market competition',
        'Technical development complexity',
        'Customer acquisition',
        'Operational scalability',
        'Cash flow management'
      ],
      actionItems: [
        {
          phase: 'Immediate',
          items: [
            'Complete market research',
            'Develop MVP specifications',
            'Create financial projections',
            'Begin legal registration'
          ]
        },
        {
          phase: 'Short-term',
          items: [
            'Build core product features',
            'Establish partnerships',
            'Create marketing strategy',
            'Set up analytics'
          ]
        },
        {
          phase: 'Long-term',
          items: [
            'Scale operations',
            'Expand market reach',
            'Optimize processes',
            'Build team capacity'
          ]
        }
      ]
    };

    setPlan(newPlan);
  };

  const renderQuestion = () => {
    const economy = economyTypes.find(e => e.id === selectedEconomy);
    if (!economy) return null;

    const currentQuestion = economy.questions[currentQuestionIndex];

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">Question {currentQuestionIndex + 1} of {economy.questions.length}</h3>
          <span className="text-gray-400">Progress: {Math.round(((currentQuestionIndex + 1) / economy.questions.length) * 100)}%</span>
        </div>

        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div 
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / economy.questions.length) * 100}%` }}
          />
        </div>

        <div className="space-y-4">
          <p className="text-white text-lg">{currentQuestion.text}</p>
          
          {currentQuestion.type === 'select' && (
            <div className="space-y-3">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSubmit(option)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                    answers[currentQuestion.id] === option
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {(currentQuestion.type === 'text' || currentQuestion.type === 'number') && (
            <div className="space-y-4">
              <input
                type={currentQuestion.type}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your answer"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleAnswerSubmit((e.target as HTMLInputElement).value);
                  }
                }}
              />
              <button
                onClick={(e) => {
                  const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                  handleAnswerSubmit(input.value);
                }}
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPlan = () => {
    if (!plan) return null;

    return (
      <div className="space-y-8">
        {/* Timeline */}
        <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="text-blue-400" size={24} />
            <h3 className="text-xl font-bold text-white">Implementation Timeline</h3>
          </div>
          
          <div className="space-y-6">
            {plan.timeline.map((phase, index) => (
              <div key={index} className="relative pl-8 pb-6 border-l border-gray-700 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                <div className="mb-2">
                  <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                  <span className="text-gray-400">{phase.duration}</span>
                </div>
                <ul className="space-y-2">
                  {phase.milestones.map((milestone, mIndex) => (
                    <li key={mIndex} className="flex items-center gap-2 text-gray-300">
                      <Milestone size={16} className="text-blue-400" />
                      {milestone}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users size={20} className="text-blue-400" />
              People
            </h4>
            <ul className="space-y-2">
              {plan.resources.people.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <DollarSign size={20} className="text-blue-400" />
              Financial
            </h4>
            <ul className="space-y-2">
              {plan.resources.financial.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Clock size={20} className="text-blue-400" />
              Time
            </h4>
            <ul className="space-y-2">
              {plan.resources.time.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metrics & Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <BarChart3 size={20} className="text-blue-400" />
              Key Metrics
            </h4>
            <ul className="space-y-2">
              {plan.metrics.map((metric, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <AlertTriangle size={20} className="text-red-400" />
              Key Challenges
            </h4>
            <ul className="space-y-2">
              {plan.challenges.map((challenge, index) => (
                <li key={index} className="text-gray-300 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-400" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Rocket className="text-blue-400" size={20} />
            Action Plan
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plan.actionItems.map((phase, index) => (
              <div key={index}>
                <h5 className="font-semibold text-white mb-4">{phase.phase} Actions</h5>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-center gap-2">
                      <ArrowRight size={16} className="text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Start Over Button */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              setSelectedEconomy(null);
              setCurrentQuestionIndex(0);
              setAnswers({});
              setPlan(null);
            }}
            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start New Plan
          </button>
        </div>
      </div>
    );
  };

  const renderIntro = () => (
    <>
      <div className="relative bg-black/30 rounded-lg border border-gray-700 p-8 mb-12">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap z-50">
          free StartupLabs tool
        </div>
        
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Choose Your Startup Path
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Select the economic model that best fits your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {economyTypes.map(economy => (
            <button
              key={economy.id}
              onClick={() => handleEconomySelect(economy.id)}
              className={`group relative overflow-hidden rounded-xl transition-all duration-500 ${
                selectedEconomy === economy.id
                  ? 'scale-[1.02] shadow-2xl'
                  : 'hover:scale-[1.01]'
              }`}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${economy.color} opacity-90 transition-all duration-500 group-hover:opacity-100`} />
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
              
              {/* Content */}
              <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{economy.name}</h3>
                <p className="text-white/90 text-lg mb-6">{economy.description}</p>
                
                <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto">
      {!selectedEconomy && renderIntro()}
      
      {selectedEconomy && !plan && (
        <div className="relative bg-black/30 rounded-lg border border-gray-700 p-8">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
            free StartupLabs tool
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Let's Craft Your Plan</h2>
            <p className="text-gray-400">Answer a few questions to generate your customized startup roadmap</p>
          </div>
          {renderQuestion()}
        </div>
      )}
      
      {plan && (
        <div className="relative bg-black/30 rounded-lg border border-gray-700 p-8">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
            free StartupLabs tool
          </div>
          {renderPlan()}
        </div>
      )}
    </div>
  );
};

export default PlanCraft;