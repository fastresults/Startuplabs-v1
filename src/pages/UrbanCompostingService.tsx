import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Target, Users, DollarSign, LineChart, ArrowRight, CheckCircle2, AlertTriangle, Briefcase, MessageSquare, Shield, Leaf, Recycle, Truck } from 'lucide-react';
import VideoSlider from '../components/VideoSlider';

const UrbanCompostingService = () => {
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
      <div className="relative pt-24 min-h-[50vh] flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2029] via-black/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end flex-grow relative z-10 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium border border-blue-500/30 mb-4">
              TURNKEY STARTUP
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white font-bold">
              Urban Composting Service
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Launch a zero-waste organic waste collection and composting business that provides effortless waste diversion for urban dwellers while creating a closed-loop system that returns finished compost to customers and local urban farms.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Monthly Income</div>
                <div className="text-lg font-bold text-white">{formatCurrency(8000)} - {formatCurrency(25000)}</div>
              </div>
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Startup Costs</div>
                <div className="text-lg font-bold text-white">{formatCurrency(5000)} - {formatCurrency(50000)}</div>
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
                  Urban composting services are experiencing rapid growth as cities increasingly mandate organic waste separation and environmentally-conscious consumers seek convenient ways to reduce their carbon footprint. This turnkey solution provides everything needed to launch and scale a successful urban composting business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Time Commitment</h3>
                    <p className="text-gray-300 text-sm">Full-time required</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Skill Level</h3>
                    <p className="text-gray-300 text-sm">Intermediate composting knowledge</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-300 text-sm">Urban/suburban with processing site</p>
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
                Watch success stories and get inspired by entrepreneurs who have built thriving urban composting businesses.
              </p>
              <VideoSlider category="urban composting business" />
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
                    <span>42% of municipal waste is compostable but only 6% gets composted</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>73% of millennials willing to pay more for sustainable services</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Cities mandating organic waste separation (NYC, SF, Seattle)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Urban farming boom creating compost demand</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Competitive Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Odor-free collection system (specialized containers)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Bike-powered logistics (eco-friendly branding)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Block-level saturation (neighborhood-by-neighborhood rollout)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Impact dashboard (personalized carbon savings reports)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Startup Costs Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Collection Bins</span>
                  <span className="text-white">{formatCurrency(2000)} - {formatCurrency(15000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Transport</span>
                  <span className="text-white">{formatCurrency(5000)} (cargo bikes) - {formatCurrency(50000)} (electric van)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Processing Site</span>
                  <span className="text-white">{formatCurrency(0)} (partner farms) - {formatCurrency(100000)} (urban facility)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Marketing</span>
                  <span className="text-white">{formatCurrency(3000)} - {formatCurrency(30000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Permits</span>
                  <span className="text-white">{formatCurrency(1000)} - {formatCurrency(10000)}</span>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Total Initial Investment</span>
                    <span className="font-bold text-white">{formatCurrency(5000)} - {formatCurrency(50000)}</span>
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
                    <h4 className="font-bold text-white mb-2">Residential Subscriptions</h4>
                    <p className="text-gray-300 text-sm">Weekly/biweekly pickup services</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Commercial Contracts</h4>
                    <p className="text-gray-300 text-sm">Restaurants, offices, schools</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Compost Sales</h4>
                    <p className="text-gray-300 text-sm">Retail and bulk finished compost</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Municipal Partnerships</h4>
                    <p className="text-gray-300 text-sm">Waste diversion incentives</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Educational Programs</h4>
                    <p className="text-gray-300 text-sm">Workshops, school partnerships</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Pricing Strategy</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Residential Service</div>
                    <div className="text-white">{formatCurrency(20)} - {formatCurrency(35)}/month</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Commercial Service</div>
                    <div className="text-white">{formatCurrency(100)} - {formatCurrency(300)}/month</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Compost Sales</div>
                    <div className="text-white">{formatCurrency(5)} - {formatCurrency(15)}/gallon</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Workshops</div>
                    <div className="text-white">{formatCurrency(500)} - {formatCurrency(2000)}/event</div>
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
                      <div className="text-white font-medium">Building Manager Partnerships</div>
                      <p className="text-gray-400 text-sm">Multi-unit dwellings</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Farmers Market Presence</div>
                      <p className="text-gray-400 text-sm">Direct to eco-conscious consumers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Zero-Waste Influencer Collabs</div>
                      <p className="text-gray-400 text-sm">Social media partnerships</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Community Garden Alliances</div>
                      <p className="text-gray-400 text-sm">Local growing partnerships</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Conversion Tactics</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">First Month Free for Referrals</div>
                    <div className="text-white font-medium">Incentivize word-of-mouth growth</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">"Adopt-a-Block" Challenges</div>
                    <div className="text-white font-medium">Neighborhood-level competitions</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Corporate Sustainability Certifications</div>
                    <div className="text-white font-medium">B2B environmental credentials</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">School Compost Education Programs</div>
                    <div className="text-white font-medium">Family engagement through children</div>
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
                    <span>Seasonal volume fluctuations (summer peaks)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Contamination issues (non-compostables in bins)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Processing site logistics (urban space constraints)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Route density optimization (fuel/time efficiency)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Margin Structure</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Collections</div>
                    <div className="text-xl font-bold text-white">40-50% margin</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Compost Sales</div>
                    <div className="text-xl font-bold text-white">60-75% margin</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Education</div>
                    <div className="text-xl font-bold text-white">80%+ margin</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Target Customer LTV</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(500)}+</div>
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
                    <h4 className="text-lg font-semibold text-white">Municipal Contracts</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        City-wide waste diversion programs
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Public space composting
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Vertical Farming Partnerships</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Closed-loop nutrient systems
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Integrated growing operations
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Product Line Extension</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Compost tea and specialty soil blends
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Branded gardening supplies
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Franchise Model</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Neighborhood-based operators
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Standardized systems and branding
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
                <h3 className="text-lg font-bold text-white mb-4">Critical Risks</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Processing Site Complaints</div>
                      <p className="text-gray-400 text-sm">Odor-blocking technology and buffer zones</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Volunteer Turnover</div>
                      <p className="text-gray-400 text-sm">Employee profit-sharing and clear career paths</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Contamination Lawsuits</div>
                      <p className="text-gray-400 text-sm">Clear guidelines and customer education</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Fuel Price Volatility</div>
                      <p className="text-gray-400 text-sm">Solar-powered processing and electric vehicles</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">12-Month Launch Roadmap</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Phase 1 (0-3 months)</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Secure first 3 apartment buildings</li>
                      <li className="text-gray-300 text-sm">• Establish processing partnership</li>
                      <li className="text-gray-300 text-sm">• Develop collection app</li>
                      <li className="text-gray-300 text-sm">• Train initial team</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Phase 2 (4-6 months)</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Launch commercial service</li>
                      <li className="text-gray-300 text-sm">• Win municipal pilot</li>
                      <li className="text-gray-300 text-sm">• Expand to 2 new neighborhoods</li>
                      <li className="text-gray-300 text-sm">• Develop education curriculum</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Phase 3 (7-12 months)</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Open urban composting hub</li>
                      <li className="text-gray-300 text-sm">• Launch product line</li>
                      <li className="text-gray-300 text-sm">• Reach 500+ subscribers</li>
                      <li className="text-gray-300 text-sm">• Secure B Corp certification</li>
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
                  <span className="text-gray-300">Passion for sustainability</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Logistics/operations experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Community organizing skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Comfort with outdoor work</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-white font-medium mb-2">Critical Early Hires</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Route manager</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Compost technician</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Outreach coordinator</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Electric bike mechanic</span>
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
                  <h4 className="font-bold text-white mb-2">Waste Management Companies</h4>
                  <p className="text-gray-300 text-sm">Looking to expand green services</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Municipal Operators</h4>
                  <p className="text-gray-300 text-sm">Seeking established collection networks</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Sustainable Lifestyle Brands</h4>
                  <p className="text-gray-300 text-sm">Adding service components to product lines</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Social Enterprise Investors</h4>
                  <p className="text-gray-300 text-sm">Impact-focused investment portfolios</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Urban Composting Service?</h2>
            <p className="text-gray-300 mb-6">
              Get everything you need to launch and grow a successful urban composting business. Our turnkey solution includes complete documentation, tools, templates, and expert guidance.
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

export default UrbanCompostingService;