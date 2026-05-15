import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, Target, Users, DollarSign, Briefcase, LineChart, 
  ShoppingBag, MessageSquare, Globe, CheckCircle2, ArrowRight,
  AlertTriangle, Milestone, Brain, Shield, Calendar, Star, Building
} from 'lucide-react';

interface Question {
  id: string;
  text: string;
  type: 'text' | 'select' | 'radio';
  options?: string[];
  category?: string;
  icon?: React.ElementType;
}

const questions: Question[] = [
  {
    id: 'business_type',
    text: 'What type of business are you planning to start?',
    type: 'select',
    options: [
      'Service-based Business',
      'E-commerce Store',
      'SaaS Platform',
      'Mobile App',
      'Local Business',
      'Marketplace Platform',
      'Content/Media Business',
      'Consulting Practice'
    ],
    category: 'business',
    icon: Briefcase
  },
  {
    id: 'industry',
    text: 'Which industry sector interests you most?',
    type: 'select',
    options: [
      'Technology',
      'Healthcare',
      'Education',
      'Finance',
      'Retail',
      'Entertainment',
      'Professional Services',
      'Food & Beverage'
    ],
    category: 'business',
    icon: Globe
  },
  {
    id: 'experience',
    text: 'What is your level of experience in this industry?',
    type: 'select',
    options: [
      'No experience',
      '1-3 years',
      '4-7 years',
      '8+ years',
      'Expert level'
    ],
    category: 'background',
    icon: Brain
  },
  {
    id: 'skills',
    text: 'What are your strongest professional skills?',
    type: 'select',
    options: [
      'Technical/Development',
      'Sales/Marketing',
      'Operations/Management',
      'Finance/Accounting',
      'Creative/Design',
      'Customer Service',
      'Strategy/Planning',
      'Research/Analysis'
    ],
    category: 'background',
    icon: Shield
  },
  {
    id: 'startup_budget',
    text: 'What is your available budget to start your business?',
    type: 'select',
    options: [
      'Under $5,000',
      '$5,000 - $25,000',
      '$25,000 - $100,000',
      'Over $100,000'
    ],
    category: 'resources',
    icon: DollarSign
  },
  {
    id: 'time_commitment',
    text: 'How much time can you dedicate to your startup weekly?',
    type: 'select',
    options: [
      'Part-time (10-20 hours)',
      'Full-time (40+ hours)',
      'All-in (60+ hours)'
    ],
    category: 'resources',
    icon: Calendar
  }
];

const BuildNavigator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showQuestions, setShowQuestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Results | null>(null);

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

  const generateResults = () => {
    let readinessScore = 0;
    
    if (answers.experience) {
      switch (answers.experience) {
        case 'Expert level': readinessScore += 25; break;
        case '8+ years': readinessScore += 20; break;
        case '4-7 years': readinessScore += 15; break;
        case '1-3 years': readinessScore += 10; break;
        default: readinessScore += 5;
      }
    }

    if (answers.startup_budget) {
      switch (answers.startup_budget) {
        case 'Over $100,000': readinessScore += 25; break;
        case '$25,000 - $100,000': readinessScore += 20; break;
        case '$5,000 - $25,000': readinessScore += 15; break;
        default: readinessScore += 10;
      }
    }

    if (answers.time_commitment) {
      switch (answers.time_commitment) {
        case 'All-in (60+ hours)': readinessScore += 25; break;
        case 'Full-time (40+ hours)': readinessScore += 20; break;
        default: readinessScore += 10;
      }
    }

    if (answers.skills) {
      readinessScore += 25;
    }

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
      ]
    };

    setResults(newResults);
    setShowResults(true);
  };

  const generateStrengths = (): string[] => {
    const strengths: string[] = [];

    if (answers.experience && answers.experience !== 'No experience') {
      strengths.push('Relevant industry experience');
    }

    if (answers.skills) {
      strengths.push(`Strong ${answers.skills.toLowerCase()} capabilities`);
    }

    if (answers.startup_budget && answers.startup_budget !== 'Under $5,000') {
      strengths.push('Adequate initial funding available');
    }

    if (answers.time_commitment === 'All-in (60+ hours)') {
      strengths.push('High level of commitment and dedication');
    }

    return strengths;
  };

  const generateGaps = (): string[] => {
    const gaps: string[] = [];

    if (answers.experience === 'No experience') {
      gaps.push('Limited industry experience');
    }

    if (answers.startup_budget === 'Under $5,000') {
      gaps.push('Limited initial funding');
    }

    if (answers.time_commitment === 'Part-time (10-20 hours)') {
      gaps.push('Limited time availability');
    }

    return gaps;
  };

  const generateNextSteps = (): string[] => {
    const steps: string[] = [];

    if (answers.experience === 'No experience') {
      steps.push('Conduct thorough market research');
      steps.push('Connect with industry mentors');
    }

    if (answers.startup_budget === 'Under $5,000') {
      steps.push('Explore lean startup methodologies');
      steps.push('Investigate funding options');
    }

    steps.push('Develop detailed business plan');
    steps.push('Create minimum viable product');
    steps.push('Build initial marketing strategy');

    return steps;
  };

  const renderIntro = () => (
    <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-12 text-center border border-gray-700 overflow-visible mt-12">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap z-50">
        free StartupLabs tool
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient rounded-xl" />
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Welcome to BuildNavigator</h1>
        <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's create your personalized startup roadmap. Answer a few simple questions and get expert guidance tailored to your vision.
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
              <h3 className="text-2xl font-bold text-white">Build Readiness Score</h3>
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
        {showResults ? renderResults() : (showQuestions ? renderQuestion() : renderIntro())}
      </div>
    </div>
  );
};

export default BuildNavigator;