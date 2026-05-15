import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Target, Users, DollarSign, Briefcase, LineChart, Shield, Star, 
  ArrowRight, CheckCircle2, AlertTriangle, Milestone, Building, Heart,
  Clock, Globe, Zap, Rocket
} from 'lucide-react';

interface Question {
  id: string;
  text: string;
  type: 'text' | 'select' | 'radio';
  options?: string[];
  category: string;
  icon: React.ElementType;
  description: string;
}

const questions: Question[] = [
  {
    id: 'passion',
    text: 'What drives you to start a business?',
    type: 'select',
    options: [
      'Financial Independence',
      'Creative Expression',
      'Solving Problems',
      'Building Something Meaningful',
      'Industry Innovation',
      'Community Impact',
      'Personal Growth',
      'Professional Freedom'
    ],
    category: 'motivation',
    icon: Heart,
    description: 'Understanding your core motivation helps align recommendations with your personal goals.'
  },
  {
    id: 'experience',
    text: 'What is your professional background?',
    type: 'select',
    options: [
      'Technical/Engineering',
      'Business/Management',
      'Creative/Design',
      'Sales/Marketing',
      'Finance/Accounting',
      'Healthcare/Medical',
      'Education/Teaching',
      'Other Professional'
    ],
    category: 'background',
    icon: Briefcase,
    description: 'Your experience can be leveraged to create competitive advantages.'
  },
  {
    id: 'skills',
    text: 'What are your strongest entrepreneurial skills?',
    type: 'select',
    options: [
      'Strategic Planning',
      'Technical Development',
      'Marketing/Sales',
      'Financial Management',
      'Team Leadership',
      'Product Development',
      'Customer Relations',
      'Operations Management'
    ],
    category: 'capabilities',
    icon: Zap,
    description: 'Identifying your strengths helps focus on business models that maximize your talents.'
  },
  {
    id: 'time_commitment',
    text: 'How much time can you dedicate to your startup?',
    type: 'select',
    options: [
      'Full-time (40+ hours/week)',
      'Part-time (20-39 hours/week)',
      'Side Project (10-19 hours/week)',
      'Limited Hours (<10 hours/week)'
    ],
    category: 'resources',
    icon: Clock,
    description: 'Time investment affects the types of businesses you can realistically pursue.'
  },
  {
    id: 'startup_capital',
    text: 'What is your available startup budget?',
    type: 'select',
    options: [
      'Under $5,000',
      '$5,000 - $25,000',
      '$25,000 - $100,000',
      'Over $100,000'
    ],
    category: 'resources',
    icon: DollarSign,
    description: 'Initial capital requirements vary significantly by business model.'
  },
  {
    id: 'risk_tolerance',
    text: 'How would you describe your risk tolerance?',
    type: 'select',
    options: [
      'Very Conservative',
      'Moderately Conservative',
      'Balanced',
      'Moderately Aggressive',
      'Very Aggressive'
    ],
    category: 'personality',
    icon: Shield,
    description: 'Risk tolerance influences suitable business models and growth strategies.'
  },
  {
    id: 'market_preference',
    text: 'What type of market interests you most?',
    type: 'select',
    options: [
      'Local/Community',
      'Regional',
      'National',
      'International',
      'Digital/Online Only'
    ],
    category: 'vision',
    icon: Globe,
    description: 'Market scope affects everything from operations to scalability.'
  },
  {
    id: 'growth_ambition',
    text: 'What are your growth ambitions?',
    type: 'select',
    options: [
      'Lifestyle Business',
      'Steady Growth',
      'Rapid Expansion',
      'Exit/Acquisition',
      'IPO Potential'
    ],
    category: 'goals',
    icon: Rocket,
    description: 'Growth goals determine required resources and strategic approach.'
  }
];

interface Results {
  readiness: number;
  strengths: string[];
  gaps: string[];
  nextSteps: string[];
  timeline: {
    phase: string;
    duration: string;
    tasks: string[];
  }[];
  recommendations: {
    businessModel: string;
    marketStrategy: string;
    resourceNeeds: string[];
    keyRisks: string[];
    successFactors: string[];
  };
}

const StartupConfigurator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Results | null>(null);

  const handleBeginAssessment = () => {
    setShowQuestions(true);
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));

    if (currentStep === questions.length - 1) {
      generateResults();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const calculateReadinessScore = (): number => {
    let score = 0;
    
    if (answers.experience && answers.skills) {
      score += 30;
    }

    if (answers.time_commitment === 'Full-time (40+ hours/week)') score += 15;
    if (answers.startup_capital === 'Over $100,000') score += 15;

    if (answers.risk_tolerance === 'Very Aggressive' && answers.growth_ambition === 'Rapid Expansion') {
      score += 20;
    } else if (answers.risk_tolerance === 'Balanced' && answers.growth_ambition === 'Steady Growth') {
      score += 15;
    }

    if (answers.market_preference && answers.passion) {
      score += 20;
    }

    return Math.min(score, 100);
  };

  const generateBusinessModel = (): string => {
    const passion = answers.passion;
    const market = answers.market_preference;
    const capital = answers.startup_capital;

    if (market === 'Digital/Online Only' && capital === 'Under $5,000') {
      return 'Start with a digital product or service that requires minimal upfront investment, such as consulting, content creation, or digital downloads.';
    }

    if (market === 'Local/Community' && passion === 'Community Impact') {
      return 'Consider a local service business that addresses community needs while building strong relationships.';
    }

    return 'Focus on a subscription-based model to create predictable revenue streams while minimizing initial risk.';
  };

  const generateStrengths = (): string[] => {
    const strengths: string[] = [];

    if (answers.experience) {
      strengths.push(`Strong ${answers.experience.toLowerCase()} background`);
    }

    if (answers.skills) {
      strengths.push(`Expertise in ${answers.skills.toLowerCase()}`);
    }

    if (answers.time_commitment === 'Full-time (40+ hours/week)') {
      strengths.push('Full-time commitment to success');
    }

    if (answers.startup_capital === 'Over $100,000') {
      strengths.push('Strong initial funding position');
    }

    return strengths;
  };

  const generateGaps = (): string[] => {
    const gaps: string[] = [];

    if (answers.time_commitment === 'Limited Hours (<10 hours/week)') {
      gaps.push('Limited time availability');
    }

    if (answers.startup_capital === 'Under $5,000') {
      gaps.push('Limited initial funding');
    }

    if (answers.risk_tolerance === 'Very Conservative') {
      gaps.push('Risk aversion may limit growth opportunities');
    }

    return gaps;
  };

  const generateNextSteps = (): string[] => {
    const steps: string[] = [];

    if (answers.startup_capital === 'Under $5,000') {
      steps.push('Research lean startup methodologies');
      steps.push('Identify low-cost marketing channels');
    }

    steps.push('Develop detailed business plan');
    steps.push('Create minimum viable product');
    steps.push('Build initial marketing strategy');
    steps.push('Establish key performance metrics');

    return steps;
  };

  const generateResults = () => {
    const readinessScore = calculateReadinessScore();
    
    const newResults: Results = {
      readiness: readinessScore,
      strengths: generateStrengths(),
      gaps: generateGaps(),
      nextSteps: generateNextSteps(),
      timeline: [
        {
          phase: 'Research & Planning',
          duration: '1-2 months',
          tasks: [
            'Market research and validation',
            'Business plan development',
            'Financial projections',
            'Legal requirements review'
          ]
        },
        {
          phase: 'Setup & Development',
          duration: '2-3 months',
          tasks: [
            'Business registration',
            'Product/service development',
            'Website/platform creation',
            'Initial marketing materials'
          ]
        },
        {
          phase: 'Launch & Growth',
          duration: '3-6 months',
          tasks: [
            'Soft launch and testing',
            'Marketing campaign execution',
            'Customer feedback collection',
            'Operations optimization'
          ]
        }
      ],
      recommendations: {
        businessModel: generateBusinessModel(),
        marketStrategy: 'Implement a digital-first marketing strategy with content marketing and social media.',
        resourceNeeds: [
          'Initial development team',
          'Marketing automation tools',
          'Customer support system',
          'Analytics platform'
        ],
        keyRisks: [
          'Market adoption uncertainty',
          'Resource constraints',
          'Technical challenges',
          'Competition response'
        ],
        successFactors: [
          'Clear value proposition',
          'Strong market positioning',
          'Efficient operations',
          'Customer focus'
        ]
      }
    };

    setResults(newResults);
    setShowResults(true);
  };

  const renderIntro = () => (
    <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 md:p-12 text-center border border-gray-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient" />
      
      <div className="relative z-10">
        <div className="flex flex-col items-center mb-6">
          <div className="hidden md:flex p-3 rounded-lg bg-blue-500/20 text-blue-400">
            <Brain size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">Startup Concept Configurator</h1>
        </div>
        
        <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's create your personalized startup roadmap. Answer a few simple questions and get expert guidance tailored to your vision.
        </p>
        
        <div className="flex justify-center">
          <button
            onClick={() => setShowQuestions(true)}
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
            
            <div className="relative flex items-center gap-2">
              Start Your Assessment
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
    </div>
  );

  const renderQuestion = () => {
    const currentQuestion = questions[currentStep];
    const Icon = currentQuestion.icon;

    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Question {currentStep + 1} of {questions.length}</h3>
              <p className="text-gray-400">Progress: {Math.round(((currentStep + 1) / questions.length) * 100)}%</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
          <div 
            className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-white text-xl mb-2">{currentQuestion.text}</h4>
            <p className="text-gray-400">{currentQuestion.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerChange(currentQuestion.id, option)}
                className={`group relative overflow-hidden p-6 rounded-lg border transition-all duration-300 ${
                  answers[currentQuestion.id] === option
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500 scale-[1.02] shadow-lg'
                    : 'bg-black/30 border-gray-700 hover:border-blue-500/50'
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                
                <div className="relative">
                  <p className={`text-lg transition-colors ${
                    answers[currentQuestion.id] === option ? 'text-white' : 'text-gray-300'
                  }`}>
                    {option}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    if (!results) return null;

    return (
      <div className="space-y-8">
        {/* Readiness Score */}
        <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-8 border border-gray-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Star size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Your Startup Readiness Score</h3>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-4xl font-bold text-blue-400">{results.readiness}%</div>
                <div className="text-gray-400">Overall Readiness</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-white">
                  {results.readiness >= 80 ? 'Excellent' :
                   results.readiness >= 60 ? 'Good' :
                   results.readiness >= 40 ? 'Fair' : 'Needs Work'}
                </div>
                <div className="text-gray-400">Rating</div>
              </div>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  results.readiness >= 80 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  results.readiness >= 60 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  results.readiness >= 40 ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' : 
                  'bg-gradient-to-r from-red-500 to-red-600'
                }`}
                style={{ width: `${results.readiness}%` }}
              />
            </div>
          </div>
        </div>

        {/* Strengths & Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Your Strengths</h3>
            </div>
            <div className="space-y-3">
              {results.strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Areas to Address</h3>
            </div>
            <div className="space-y-3">
              {results.gaps.map((gap, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">{gap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
              <Building size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Implementation Timeline</h3>
          </div>
          
          <div className="space-y-6">
            {results.timeline.map((phase, index) => (
              <div key={index} className="relative pl-8 pb-6 border-l border-gray-700 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 bg-purple-400 rounded-full -translate-x-[9px]" />
                <div className="mb-2">
                  <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                  <span className="text-gray-400">{phase.duration}</span>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-center gap-2 text-gray-300">
                      <Milestone size={16} className="text-purple-400" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Strategic Recommendations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Business Model</h4>
              <p className="text-gray-300">{results.recommendations.businessModel}</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Market Strategy</h4>
              <p className="text-gray-300">{results.recommendations.marketStrategy}</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-3">Resource Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.recommendations.resourceNeeds.map((need, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 size={16} className="text-blue-400" />
                  {need}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Factors & Risks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Key Success Factors</h3>
            </div>
            <div className="space-y-3">
              {results.recommendations.successFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="text-yellow-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">{factor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Risk Factors</h3>
            </div>
            <div className="space-y-3">
              {results.recommendations.keyRisks.map((risk, index) => (
                <div key={index} className="flex items-start gap-2">
                  <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">{risk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <ArrowRight size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Next Steps</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {results.nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-2 bg-blue-900/20 p-4 rounded-lg border border-blue-900/50">
                <ArrowRight className="text-blue-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-gray-300">{step}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link 
              to="/startup-advisor"
              className="group relative overflow-hidden w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
              
              <div className="relative flex items-center justify-center gap-2">
                <Users size={20} />
                Schedule Strategy Call
              </div>
            </Link>
          </div>
        </div>

        {/* Start Over Button */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              setShowResults(false);
              setShowQuestions(false);
              setCurrentStep(0);
              setAnswers({});
            }}
            className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Start New Assessment
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-black/30 rounded-lg border border-gray-700 p-8">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap z-10">
          free StartupLabs tool
        </div>

        {showResults ? renderResults() : (showQuestions ? renderQuestion() : renderIntro())}
      </div>
    </div>
  );
};

export default StartupConfigurator;