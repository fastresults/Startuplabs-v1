import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Target, Users, DollarSign, LineChart, ArrowRight, CheckCircle2, AlertTriangle, Briefcase, MessageSquare, Shield } from 'lucide-react';
import VideoSlider from '../components/VideoSlider';

const PetWasteRemoval = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', name: 'Overview' },
    { id: 'inspiration', name: 'Inspiration' },
    { id: 'viability', name: 'Business Viability' },
    { id: 'foundation', name: 'Business Foundation' },
    { id: 'acquisition', name: 'Client Acquisition' },
    { id: 'operations', name: 'Operations' },
    { id: 'growth', name: 'Growth & Scaling' },
    { id: 'risks', name: 'Risk Mitigation' }
  ];

  // Handle scroll position updates
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1b2029]">
      <Navigation />

      {/* Hero Section */}
      <div className="relative pt-24 min-h-[50vh] flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2029] via-black/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end flex-grow relative z-10 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium border border-blue-500/30 mb-4">
              TURNKEY STARTUP
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white font-bold">
              Pet Waste Removal Service
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Launch a premium, subscription-based pet waste removal business with eco-friendly practices and franchise potential.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Monthly Income</div>
                <div className="text-lg font-bold text-white">{formatCurrency(8000)} - {formatCurrency(25000)}</div>
              </div>
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Startup Costs</div>
                <div className="text-lg font-bold text-white">{formatCurrency(5000)} - {formatCurrency(10000)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 bg-gradient-to-r from-black via-black/95 to-black border-y border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`px-6 py-2 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-black/30 text-gray-400 hover:bg-black/50'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview Section */}
          <section id="overview" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Brain size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Overview</h2>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <div className="space-y-6">
                <p className="text-gray-300">
                  Pet waste removal services are in high demand as busy pet owners seek convenient solutions for maintaining clean and healthy yards. This turnkey solution provides everything needed to launch and scale a successful pet waste removal business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Time Commitment</h3>
                    <p className="text-gray-300 text-sm">Full-time for optimal growth</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Skill Level</h3>
                    <p className="text-gray-300 text-sm">Beginner-friendly</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-300 text-sm">Local service area required</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Inspiration Section */}
          <section id="inspiration" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Brain size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Success Stories & Inspiration</h2>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-6">
                Watch success stories and get inspired by entrepreneurs who have built thriving pet waste removal businesses.
              </p>
              <VideoSlider category="pet waste removal" />
            </div>
          </section>

          {/* Business Viability Section */}
          <section id="viability" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Business Viability</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Market Opportunity</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>85M+ pet dogs in the US alone</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Growing demand from busy professionals</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>High customer retention rates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Revenue Potential</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Entry Level</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(8000)} - {formatCurrency(15000)}/month</div>
                    <div className="text-sm text-gray-400">50-75 recurring clients</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Scaled</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(20000)}+ /month</div>
                    <div className="text-sm text-gray-400">Multiple service teams, 200+ clients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Startup Costs Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Equipment & Supplies</span>
                  <span className="text-white">{formatCurrency(2000)} - {formatCurrency(4000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Marketing & Website</span>
                  <span className="text-white">{formatCurrency(1500)} - {formatCurrency(3000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Legal & Insurance</span>
                  <span className="text-white">{formatCurrency(1000)} - {formatCurrency(2000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Vehicle Expenses</span>
                  <span className="text-white">{formatCurrency(500)} - {formatCurrency(1000)}</span>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Total Initial Investment</span>
                    <span className="font-bold text-white">{formatCurrency(5000)} - {formatCurrency(10000)}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Business Foundation Section */}
          <section id="foundation" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Business Foundation</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Service Packages</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Weekly Service</h4>
                    <p className="text-gray-300 text-sm">{formatCurrency(25)} - {formatCurrency(35)} per visit</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Bi-Weekly Service</h4>
                    <p className="text-gray-300 text-sm">{formatCurrency(30)} - {formatCurrency(40)} per visit</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">One-Time Cleanup</h4>
                    <p className="text-gray-300 text-sm">{formatCurrency(50)} - {formatCurrency(100)} per visit</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Equipment Needs</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Essential Tools</div>
                    <div className="text-white">Pooper scoopers, waste bags, sanitizer</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Safety Equipment</div>
                    <div className="text-white">Gloves, masks, protective gear</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Transportation</div>
                    <div className="text-white">Reliable vehicle with storage</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Client Acquisition Section */}
          <section id="acquisition" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Client Acquisition</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Marketing Channels</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Local SEO</div>
                      <p className="text-gray-400 text-sm">Optimize for local search visibility</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Social Media</div>
                      <p className="text-gray-400 text-sm">Facebook & Instagram targeting</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Partnerships</div>
                      <p className="text-gray-400 text-sm">Local vets and pet stores</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Sales Process</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Step 1</div>
                    <div className="text-white font-medium">Free Yard Assessment</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Step 2</div>
                    <div className="text-white font-medium">Custom Quote</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Step 3</div>
                    <div className="text-white font-medium">Service Agreement</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Operations Section */}
          <section id="operations" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Operations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Service Delivery</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Route optimization software</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Quality control checklists</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Service completion photos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Profit Margins</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Weekly Service</div>
                    <div className="text-xl font-bold text-white">70-80% margin</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">One-Time Service</div>
                    <div className="text-xl font-bold text-white">60-70% margin</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Growth & Scaling Section */}
          <section id="growth" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <LineChart size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Growth & Scaling</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Growth Phases</h3>
                <div className="space-y-6">
                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Phase 1 (0-6 Months)</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Build initial client base
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Establish service processes
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Phase 2 (6-12 Months)</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Hire first employees
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Expand service area
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Phase 3 (1-2 Years)</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Multiple service teams
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Franchise development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Risk Mitigation Section */}
          <section id="risks" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Risk Mitigation</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Common Pitfalls</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Seasonal Fluctuations</div>
                      <p className="text-gray-400 text-sm">Diversify services for year-round income</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Employee Turnover</div>
                      <p className="text-gray-400 text-sm">Competitive pay and clear procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Route Inefficiency</div>
                      <p className="text-gray-400 text-sm">Use route optimization software</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Adaptation Strategy</h3>
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <p className="text-gray-300">
                    Add complementary services like pet sitting or yard maintenance during slow seasons. Focus on building recurring revenue through subscription plans.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Pet Waste Removal Business?</h2>
            <p className="text-gray-300 mb-6">
              Get everything you need to launch and grow a successful pet waste removal business. Our turnkey solution includes complete documentation, tools, templates, and expert guidance.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <span>Get Started With This Turnkey Business</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PetWasteRemoval;