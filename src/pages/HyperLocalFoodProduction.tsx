import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Target, Users, DollarSign, LineChart, ArrowRight, CheckCircle2, AlertTriangle, Briefcase, MessageSquare, Shield, Leaf, Cloud, Droplet } from 'lucide-react';
import VideoSlider from '../components/VideoSlider';

const HyperLocalFoodProduction = () => {
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
      <div className="relative pt-24 min-h-[50vh] flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2029] via-black/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end flex-grow relative z-10 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium border border-blue-500/30 mb-4">
              TURNKEY STARTUP
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white font-bold">
              Hyper-Local Food Production
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Launch an ultra-fresh food production business delivering farm-to-table produce within 24 hours, creating neighborhood-level food security with transparent sourcing and zero-mile distribution.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Monthly Income</div>
                <div className="text-lg font-bold text-white">{formatCurrency(8000)} - {formatCurrency(25000)}</div>
              </div>
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Startup Costs</div>
                <div className="text-lg font-bold text-white">{formatCurrency(15000)} - {formatCurrency(75000)}</div>
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
                  The hyper-local food production market is experiencing rapid growth as consumers increasingly prioritize locally-sourced, sustainable food options. This turnkey solution provides everything needed to launch and scale a successful urban farming business that delivers ultra-fresh produce directly to local customers.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Time Commitment</h3>
                    <p className="text-gray-300 text-sm">Full-time (60+ hours during harvest)</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Skill Level</h3>
                    <p className="text-gray-300 text-sm">Intermediate farming knowledge</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-300 text-sm">Urban/suburban growing space required</p>
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
                Watch success stories and get inspired by entrepreneurs who have built thriving urban farming and local food production businesses.
              </p>
              <VideoSlider category="urban farming business" />
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
                    <span>70% of consumers prioritize locally-sourced foods</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Urban farming sector growing at 7.2% CAGR globally</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>200% increase in backyard chicken coops since 2020</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>{formatCurrency(3.5)}M average revenue for successful micro-farms</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Competitive Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Neighborhood exclusivity: "Your block's farm" positioning</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Unique growing methods: Vertical/container/hydroponic systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Story-driven branding: Named livestock, harvest photos</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Emergency preparedness angle: Local food security</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Startup Costs Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Land Access</span>
                  <span className="text-white">{formatCurrency(0)} (rooftop leases) - {formatCurrency(30000)} (land lease)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Growing Systems</span>
                  <span className="text-white">{formatCurrency(15000)} (containers) - {formatCurrency(75000)} (greenhouse)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Licensing</span>
                  <span className="text-white">{formatCurrency(2000)} - {formatCurrency(10000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Distribution</span>
                  <span className="text-white">{formatCurrency(5000)} (bike cart) - {formatCurrency(25000)} (refrigerated van)</span>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Total Initial Investment</span>
                    <span className="font-bold text-white">{formatCurrency(15000)} - {formatCurrency(75000)}</span>
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
                <h3 className="text-lg font-bold text-white mb-4">Revenue Streams</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">CSA Subscriptions</h4>
                    <p className="text-gray-300 text-sm">Community Supported Agriculture weekly boxes</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Farmers Market Sales</h4>
                    <p className="text-gray-300 text-sm">Direct-to-consumer weekend stalls</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Restaurant Wholesale</h4>
                    <p className="text-gray-300 text-sm">Premium accounts with local chefs</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Agritourism</h4>
                    <p className="text-gray-300 text-sm">Farm dinners, workshops, tours</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Value-Added Products</h4>
                    <p className="text-gray-300 text-sm">Preserves, fermented foods, specialty items</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Pricing Strategy</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">CSA Share</div>
                    <div className="text-white">{formatCurrency(35)} - {formatCurrency(75)}/week</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Premium Salad Greens</div>
                    <div className="text-white">{formatCurrency(5)}/oz</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Farm Eggs</div>
                    <div className="text-white">{formatCurrency(8)}/dozen</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Wholesale Accounts</div>
                    <div className="text-white">20-30% below retail</div>
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
                <h3 className="text-lg font-bold text-white mb-4">Most Effective Channels</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Nextdoor/Facebook Community</div>
                      <p className="text-gray-400 text-sm">Hyper-targeted neighborhood marketing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Elementary School Programs</div>
                      <p className="text-gray-400 text-sm">Garden education and family outreach</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Local Chef Collaborations</div>
                      <p className="text-gray-400 text-sm">Restaurant partnerships and events</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Crisis Preparedness Meetups</div>
                      <p className="text-gray-400 text-sm">Food security and resilience positioning</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Conversion Tactics</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">"Meet Your Farmer" Open Days</div>
                    <div className="text-white font-medium">Farm tours and tastings</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Harvest Share Lottery</div>
                    <div className="text-white font-medium">Limited availability creates demand</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Volunteer-for-Produce</div>
                    <div className="text-white font-medium">Work exchange programs</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Restaurant Ingredient Naming</div>
                    <div className="text-white font-medium">Menu recognition for chefs</div>
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
                <h3 className="text-lg font-bold text-white mb-4">Key Operational Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Zoning law navigation: Urban agriculture regulations</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Labor intensity: 60+ hour harvest weeks</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Pest management: Organic compliance difficulties</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Seasonal cash flow: Winter production solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Unit Economics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Leafy Greens Margin</div>
                    <div className="text-xl font-bold text-white">60-75%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Eggs Margin</div>
                    <div className="text-xl font-bold text-white">40-50%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Value-Added Products</div>
                    <div className="text-xl font-bold text-white">80%+</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Average Revenue/Acre</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(50000)} - {formatCurrency(100000)}</div>
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
                <h3 className="text-lg font-bold text-white mb-4">Expansion Pathways</h3>
                <div className="space-y-6">
                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Neighborhood Franchise Model</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Replicate in adjacent neighborhoods
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        License your growing system
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Apartment Building Installations</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Rooftop gardens for multi-family housing
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Resident amenity partnerships
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Municipal Contracts</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        School lunch programs
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Hospital food service
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Climate-Adaptive Crops</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Drought-resistant varieties
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Specialized growing techniques
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
                <h3 className="text-lg font-bold text-white mb-4">High Risks</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Crop Failure</div>
                      <p className="text-gray-400 text-sm">Diversified crop planning and succession planting</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Water Access Issues</div>
                      <p className="text-gray-400 text-sm">Rainwater collection systems and efficient irrigation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Neighborhood Opposition</div>
                      <p className="text-gray-400 text-sm">Community advisory board and transparent operations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Distribution Spoilage</div>
                      <p className="text-gray-400 text-sm">Mobile cold storage and just-in-time harvesting</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">12-Month Launch Roadmap</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Season 1 (Months 1-6)</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Secure growing site</li>
                      <li className="text-gray-300 text-sm">• Plant first succession crops</li>
                      <li className="text-gray-300 text-sm">• Launch 25-member CSA</li>
                      <li className="text-gray-300 text-sm">• Establish 1 restaurant account</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Season 2 (Months 7-12)</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Add egg/honey production</li>
                      <li className="text-gray-300 text-sm">• Install winter growing system</li>
                      <li className="text-gray-300 text-sm">• Develop 3 value-added products</li>
                      <li className="text-gray-300 text-sm">• Reach {formatCurrency(15000)}/month revenue</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Founder Fit Section */}
          <section id="founder-fit" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <Users size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Founder Fit Considerations</h2>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Ideal Entrepreneur Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Hands-on farming experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Community organizing skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Mechanical aptitude</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Basic food safety certification</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-white font-medium mb-2">Critical Early Hires</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Harvest manager</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Neighborhood ambassador</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Instagram-savvy marketer</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Exit Potential Section */}
          <section id="exit" className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <DollarSign size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Exit Potential</h2>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-6">
                This business model represents a strong acquisition target for several types of companies:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Grocery Chains</h4>
                  <p className="text-gray-300 text-sm">Looking to expand local sourcing programs</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Meal Kit Companies</h4>
                  <p className="text-gray-300 text-sm">Seeking ultra-fresh ingredient sources</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Residential Developers</h4>
                  <p className="text-gray-300 text-sm">Adding food amenities to communities</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Food Cooperatives</h4>
                  <p className="text-gray-300 text-sm">Expanding production capabilities</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Hyper-Local Food Production Business?</h2>
            <p className="text-gray-300 mb-6">
              Get everything you need to launch and grow a successful hyper-local food production business. Our turnkey solution includes complete documentation, tools, templates, and expert guidance.
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

export default HyperLocalFoodProduction;