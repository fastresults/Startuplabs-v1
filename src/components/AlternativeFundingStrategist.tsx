import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, Building, LineChart, Calendar, Briefcase, ArrowRight, Brain, Target } from 'lucide-react';

interface FundingOption {
  type: string;
  description: string;
  eligibility: string[];
  requirements: string[];
  timeline: string;
  amount: string;
  dilution: 'None' | 'Low' | 'Medium' | 'High';
  successRate: number;
}

const AlternativeFundingStrategist = () => {
  const [businessModel, setBusinessModel] = useState('');
  const [revenue, setRevenue] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [industry, setIndustry] = useState('');
  const [stage, setStage] = useState('');
  const [showResults, setShowResults] = useState(false);

  const businessModels = {
    gig: [
      'Freelance Professional Services',
      'Creative Services Provider',
      'Specialized Consulting',
      'Online Teaching/Tutoring',
      'Personal Training/Coaching',
      'Technical Freelancing',
      'Content Creation',
      'Virtual Assistant Services'
    ],
    mainStreet: [
      'Retail Store',
      'Restaurant/Café',
      'Professional Services Firm',
      'Health & Wellness Center',
      'Beauty/Personal Care',
      'Home Services Business',
      'Automotive Services',
      'Pet Care Services'
    ],
    digital: [
      'E-commerce Store',
      'SaaS Platform',
      'Mobile App',
      'Digital Content Platform',
      'Online Education Business',
      'Digital Marketing Agency',
      'Subscription Service',
      'Digital Products Store'
    ],
    platform: [
      'Service Marketplace',
      'Peer-to-Peer Platform',
      'B2B Marketplace',
      'Sharing Economy Platform',
      'Booking/Reservation System',
      'Professional Network',
      'Content Monetization Platform',
      'Industry-Specific Marketplace'
    ]
  };

  const industries = {
    technology: [
      'Software Development',
      'AI/Machine Learning',
      'Cybersecurity',
      'Cloud Services',
      'IoT Solutions',
      'Mobile Technology',
      'Enterprise Software',
      'DevOps Tools'
    ],
    healthcare: [
      'Digital Health',
      'Medical Devices',
      'Healthcare IT',
      'Wellness & Fitness',
      'Mental Health',
      'Telemedicine',
      'Health Analytics',
      'Patient Care Solutions'
    ],
    financial: [
      'Fintech',
      'Digital Banking',
      'Investment Platforms',
      'Insurance Tech',
      'Payment Solutions',
      'Blockchain/Crypto',
      'Personal Finance',
      'Lending Solutions'
    ],
    ecommerce: [
      'D2C Brands',
      'Marketplace Solutions',
      'Retail Technology',
      'Subscription Commerce',
      'Social Commerce',
      'Mobile Commerce',
      'Supply Chain Solutions',
      'Inventory Management'
    ],
    education: [
      'EdTech Platforms',
      'Online Learning',
      'Professional Training',
      'Educational Content',
      'Learning Management',
      'Skills Assessment',
      'Career Development',
      'Educational Tools'
    ],
    sustainability: [
      'Clean Energy',
      'Sustainable Products',
      'Waste Management',
      'Green Technology',
      'Environmental Services',
      'Sustainable Transport',
      'Eco-friendly Solutions',
      'Carbon Reduction'
    ],
    media: [
      'Digital Media',
      'Content Creation',
      'Streaming Services',
      'Gaming & Entertainment',
      'Social Media',
      'AR/VR Content',
      'Digital Publishing',
      'Media Analytics'
    ],
    professional: [
      'Business Services',
      'Legal Tech',
      'HR Solutions',
      'Consulting Services',
      'Marketing Services',
      'Professional Networks',
      'Business Analytics',
      'Remote Work Solutions'
    ]
  };

  const fundingOptions: FundingOption[] = [
    {
      type: 'Government Grants',
      description: 'Non-dilutive funding from government agencies supporting innovation and research.',
      eligibility: [
        'Research & Development focus',
        'Job creation potential',
        'Innovation in specific sectors'
      ],
      requirements: [
        'Detailed project proposal',
        'Budget breakdown',
        'Impact assessment'
      ],
      timeline: '3-6 months',
      amount: '$50,000 - $500,000',
      dilution: 'None',
      successRate: 25
    },
    {
      type: 'Revenue-Based Financing',
      description: 'Funding based on future revenue share, ideal for companies with steady monthly revenue.',
      eligibility: [
        'Minimum monthly revenue of $10,000',
        'Operating history > 6 months',
        'Predictable revenue model'
      ],
      requirements: [
        'Financial statements',
        'Revenue projections',
        'Bank statements'
      ],
      timeline: '2-4 weeks',
      amount: '$50,000 - $2,000,000',
      dilution: 'Low',
      successRate: 65
    },
    {
      type: 'Strategic Partnerships',
      description: 'Investment from established companies in your industry seeking innovation.',
      eligibility: [
        'Product-market fit',
        'Strategic alignment',
        'Scalable technology'
      ],
      requirements: [
        'Business plan',
        'Product roadmap',
        'Market analysis'
      ],
      timeline: '3-9 months',
      amount: '$100,000 - $5,000,000',
      dilution: 'Medium',
      successRate: 35
    },
    {
      type: 'Accelerator Programs',
      description: 'Structured programs offering funding, mentorship, and resources.',
      eligibility: [
        'Early-stage startups',
        'Full-time founding team',
        'MVP or prototype'
      ],
      requirements: [
        'Pitch deck',
        'Team profiles',
        'Market validation'
      ],
      timeline: '3-6 months',
      amount: '$20,000 - $150,000',
      dilution: 'Medium',
      successRate: 45
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const renderEligibilityScore = (option: FundingOption) => {
    let score = 0;
    if (revenue === 'high' && option.type === 'Revenue-Based Financing') score += 30;
    if (stage === 'early' && option.type === 'Accelerator Programs') score += 30;
    if (industry === 'tech' && option.type === 'Strategic Partnerships') score += 30;
    score += option.successRate;
    
    return Math.min(Math.max(Math.round(score), 35), 95);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 mb-8 border border-gray-700 overflow-visible mt-12">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap z-50">
          free StartupLabs tool
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient rounded-xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
              <Brain size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Alternative Funding Strategist</h2>
              <p className="text-gray-400">
                Discover and evaluate non-traditional funding options tailored to your startup's unique characteristics.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <label className="block text-white font-medium">Business Model</label>
                <div className="relative group">
                  <select
                    value={businessModel}
                    onChange={(e) => setBusinessModel(e.target.value)}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                    required
                  >
                    <option value="">Select Model</option>
                    <optgroup label="Gig Economy">
                      {businessModels.gig.map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Main Street">
                      {businessModels.mainStreet.map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Digital Economy">
                      {businessModels.digital.map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Platform Economy">
                      {businessModels.platform.map(model => (
                        <option key={model} value={model}>{model}</option>
                      ))}
                    </optgroup>
                  </select>
                  <Target className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-white font-medium">Monthly Revenue</label>
                <div className="relative group">
                  <select
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                    required
                  >
                    <option value="">Select Range</option>
                    <option value="pre">Pre-revenue</option>
                    <option value="low">$1 - $10,000</option>
                    <option value="medium">$10,000 - $50,000</option>
                    <option value="high">$50,000+</option>
                  </select>
                  <DollarSign className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-white font-medium">Team Size</label>
                <div className="relative group">
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                    required
                  >
                    <option value="">Select Size</option>
                    <option value="solo">Solo founder</option>
                    <option value="small">2-5 people</option>
                    <option value="medium">6-15 people</option>
                    <option value="large">15+ people</option>
                  </select>
                  <Users className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-white font-medium">Industry</label>
                <div className="relative group">
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                    required
                  >
                    <option value="">Select Industry</option>
                    <optgroup label="Technology">
                      {industries.technology.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Healthcare">
                      {industries.healthcare.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Financial">
                      {industries.financial.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </optgroup>
                    <optgroup label="E-commerce">
                      {industries.ecommerce.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Education">
                      {industries.education.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Sustainability">
                      {industries.sustainability.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Media">
                      {industries.media.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Professional Services">
                      {industries.professional.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </optgroup>
                  </select>
                  <Building className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-white font-medium">Stage</label>
                <div className="relative group">
                  <select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                    required
                  >
                    <option value="">Select Stage</option>
                    <option value="idea">Idea/Concept</option>
                    <option value="early">Early Stage</option>
                    <option value="growth">Growth Stage</option>
                    <option value="scaling">Scaling</option>
                  </select>
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="group relative overflow-hidden w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
              
              <div className="relative flex items-center justify-center gap-2">
                <span>Analyze Funding Options</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </form>
        </div>

        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      {showResults && (
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Recommended Funding Options</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {fundingOptions.map((option, index) => (
              <div key={index} className="bg-black/30 rounded-lg p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white">{option.type}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Match Score</span>
                    <div className="px-3 py-1 bg-blue-500/20 rounded-full">
                      <span className="text-blue-400 font-bold">{renderEligibilityScore(option)}%</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{option.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-blue-400" size={16} />
                    <span className="text-sm text-gray-400">Timeline: {option.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-blue-400" size={16} />
                    <span className="text-sm text-gray-400">Amount: {option.amount}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-bold text-white mb-2">Eligibility Criteria</h5>
                    <ul className="space-y-1">
                      {option.eligibility.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-bold text-white mb-2">Requirements</h5>
                    <ul className="space-y-1">
                      {option.requirements.map((item, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link 
                  to="/packages"
                  className="w-full mt-6 px-4 py-2 bg-transparent border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all block text-center"
                >
                  View Full Details & Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlternativeFundingStrategist;