import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Target, Users, DollarSign, Briefcase, LineChart, 
  ShoppingBag, MessageSquare, Globe, CheckCircle2, ArrowRight,
  AlertTriangle, Milestone, Brain, Shield, Calendar, Star, Building
} from 'lucide-react';

interface Assessment {
  id: string;
  question: string;
  type: 'text' | 'select' | 'radio';
  options?: string[];
  category: 'business' | 'audience' | 'timeline' | 'resources';
}

interface TimelinePhase {
  name: string;
  duration: string;
  tasks: string[];
  dependencies?: string[];
}

interface MediaContact {
  name: string;
  outlet: string;
  focus: string;
  relevance: number;
}

interface LaunchMetric {
  name: string;
  description: string;
  target: string;
  category: 'acquisition' | 'engagement' | 'conversion' | 'retention';
}

interface Results {
  readiness: number;
  strengths: string[];
  gaps: string[];
  timeline: {
    phase: string;
    duration: string;
    tasks: string[];
  }[];
  nextSteps: string[];
}

const LaunchNavigator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Results | null>(null);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const generateResults = () => {
    // Calculate readiness score based on answers
    const readinessScore = 75; // Example score

    // Example results data
    const resultsData: Results = {
      readiness: readinessScore,
      strengths: [
        'Clear target market identification',
        'Strong value proposition',
        'Realistic timeline planning',
        'Adequate resource allocation'
      ],
      gaps: [
        'Marketing channel diversification needed',
        'Additional team resources may be required',
        'Competitive analysis needs strengthening'
      ],
      timeline: [
        {
          phase: 'Planning & Preparation',
          duration: '4-6 weeks',
          tasks: [
            'Finalize business plan',
            'Complete market research',
            'Develop marketing strategy'
          ]
        },
        {
          phase: 'Development & Testing',
          duration: '6-8 weeks',
          tasks: [
            'Build MVP',
            'Conduct user testing',
            'Implement feedback'
          ]
        },
        {
          phase: 'Launch & Growth',
          duration: '4-6 weeks',
          tasks: [
            'Execute marketing campaign',
            'Monitor KPIs',
            'Gather customer feedback'
          ]
        }
      ],
      nextSteps: [
        'Schedule detailed planning session',
        'Begin resource allocation',
        'Start building marketing assets',
        'Set up analytics tracking'
      ]
    };

    setResults(resultsData);
    setShowResults(true);
  };

  const renderIntro = () => (
    <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-12 text-center border border-gray-700 overflow-visible mt-12">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap z-50">
        free StartupLabs tool
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient rounded-xl" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
            <Rocket size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">LaunchNavigator</h1>
        </div>
        
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's create your personalized launch playbook. Answer a few simple questions and get expert guidance tailored to your vision.
        </p>
        
        <button
          onClick={() => setShowQuestions(true)}
          className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
          
          <div className="relative flex items-center gap-2">
            Start Your Plan
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </button>
      </div>

      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
    </div>
  );

  const renderAssessment = () => (
    <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-gray-700 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient" />
      
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap z-10">
        free StartupLabs tool
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
            <Rocket size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Launch Assessment</h2>
            <p className="text-gray-400">Complete this assessment to get your personalized launch playbook</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-white font-medium">
              What type of business are you launching?
            </label>
            <div className="relative group">
              <select 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                required
              >
                <option value="">Select business type</option>
                <option value="service">Service-based Business</option>
                <option value="ecommerce">E-commerce Store</option>
                <option value="saas">SaaS Platform</option>
                <option value="mobile">Mobile App</option>
                <option value="local">Local Business</option>
                <option value="marketplace">Marketplace Platform</option>
                <option value="content">Content/Media Business</option>
                <option value="consulting">Consulting Practice</option>
              </select>
              <Target className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-white font-medium">
              Who is your primary target audience?
            </label>
            <div className="relative group">
              <select 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                required
              >
                <option value="">Select target audience</option>
                <option value="b2c">Consumers (B2C)</option>
                <option value="b2b">Businesses (B2B)</option>
                <option value="b2b2c">Both B2B and B2C</option>
                <option value="enterprise">Enterprise Companies</option>
                <option value="government">Government/Institutions</option>
              </select>
              <Users className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-white font-medium">
              What industry are you operating in?
            </label>
            <div className="relative group">
              <select 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                required
              >
                <option value="">Select industry</option>
                <option value="tech">Technology</option>
                <option value="health">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
                <option value="media">Media & Entertainment</option>
              </select>
              <Building className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-white font-medium">
              What is your target launch timeline?
            </label>
            <div className="relative group">
              <select 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                required
              >
                <option value="">Select timeline</option>
                <option value="1-2">1-2 months</option>
                <option value="3-4">3-4 months</option>
                <option value="5-6">5-6 months</option>
                <option value="6+">6+ months</option>
              </select>
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-white font-medium">
              What is your launch budget range?
            </label>
            <div className="relative group">
              <select 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                required
              >
                <option value="">Select budget range</option>
                <option value="under5k">Under $5,000</option>
                <option value="5k-20k">$5,000 - $20,000</option>
                <option value="20k-50k">$20,000 - $50,000</option>
                <option value="50k+">$50,000+</option>
              </select>
              <DollarSign className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-white font-medium">
              How large is your launch team?
            </label>
            <div className="relative group">
              <select 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                required
              >
                <option value="">Select team size</option>
                <option value="solo">Solo founder</option>
                <option value="small">2-5 people</option>
                <option value="medium">6-10 people</option>
                <option value="large">10+ people</option>
              </select>
              <Users className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-white font-medium">
              Which marketing channels will you focus on?
            </label>
            <div className="relative group">
              <select 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                required
              >
                <option value="">Select primary channels</option>
                <option value="social">Social Media</option>
                <option value="content">Content Marketing</option>
                <option value="pr">PR & Media</option>
                <option value="paid">Paid Advertising</option>
                <option value="email">Email Marketing</option>
                <option value="community">Community Building</option>
              </select>
              <MessageSquare className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-white font-medium">
              What are your primary success metrics?
            </label>
            <div className="relative group">
              <select 
                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                required
              >
                <option value="">Select key metrics</option>
                <option value="acquisition">User Acquisition</option>
                <option value="revenue">Revenue Growth</option>
                <option value="engagement">Customer Engagement</option>
                <option value="market">Market Share</option>
                <option value="brand">Brand Awareness</option>
              </select>
              <LineChart className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
            </div>
          </div>
        </div>

        <button
          onClick={() => generateResults()}
          className="group relative overflow-hidden w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 mt-8"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
          
          <div className="relative flex items-center justify-center gap-2">
            Generate Launch Playbook
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </div>
        </button>
      </div>

      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
    </div>
  );

  const renderQuestion = () => {
    const currentQuestion = questions[currentStep];
    const Icon = currentQuestion.icon || Target;

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
          <p className="text-white text-xl">{currentQuestion.text}</p>
          
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
              <h3 className="text-2xl font-bold text-white">Launch Readiness Score</h3>
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
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold text-white">Launch Timeline</h3>
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

        {/* Next Steps */}
        <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <Rocket size={24} />
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
            Start New Plan
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-[#1b2029] rounded-lg shadow-lg border border-gray-700 p-8 mb-8">
        {showResults ? renderResults() : (showQuestions ? renderAssessment() : renderIntro())}
      </div>
    </div>
  );
};

export default LaunchNavigator;