import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Target, Users, DollarSign, LineChart, ArrowRight, CheckCircle2, AlertTriangle, Briefcase, MessageSquare, Shield, Map, Compass, Globe, Camera, Ticket } from 'lucide-react';
import VideoSlider from '../components/VideoSlider';

const LocalExperienceCuration = () => {
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
      <div className="relative pt-24 min-h-[50vh] flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506903536293-8419449075a7?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2029] via-black/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end flex-grow relative z-10 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium border border-blue-500/30 mb-4">
              TURNKEY STARTUP
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white font-bold">
              Local Experience Curation
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Launch a business that uncovers and packages authentic neighborhood experiences for tourists and locals, providing story-driven immersion, boutique group access, and tech-enabled discovery of hidden gems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Monthly Income</div>
                <div className="text-lg font-bold text-white">{formatCurrency(10000)} - {formatCurrency(35000)}</div>
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
                  The experience economy is booming as travelers and locals increasingly seek authentic, immersive experiences over traditional tourism. This turnkey solution provides everything needed to launch and scale a successful local experience curation business that connects people with hidden gems and authentic stories in their own backyard or while traveling.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Time Commitment</h3>
                    <p className="text-gray-300 text-sm">Full-time recommended</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Skill Level</h3>
                    <p className="text-gray-300 text-sm">Intermediate storytelling/hospitality</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Location</h3>
                    <p className="text-gray-300 text-sm">Local presence required</p>
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
                Watch success stories and get inspired by entrepreneurs who have built thriving local experience curation businesses.
              </p>
              <VideoSlider category="local experience tourism business" />
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
                    <span>Experience economy valued at {formatCurrency(8.2)}B and growing 18% annually</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>73% of millennials prefer spending on experiences over things</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Post-pandemic demand for outdoor/hyperlocal activities up 300%</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Corporate retreat market shifting to local authentic experiences</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Competitive Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Neighborhood anthropologists (deep local researchers on staff)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Dynamic pricing algorithms (demand-based experience pricing)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Community equity model (locals profit from recurring bookings)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Augmented reality layers (historical/architectural overlays)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Startup Costs Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Experience Development</span>
                  <span className="text-white">{formatCurrency(15000)} - {formatCurrency(100000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Tech Platform</span>
                  <span className="text-white">{formatCurrency(20000)} - {formatCurrency(150000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Local Partnerships</span>
                  <span className="text-white">{formatCurrency(5000)} - {formatCurrency(50000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Marketing</span>
                  <span className="text-white">{formatCurrency(10000)} - {formatCurrency(75000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Insurance</span>
                  <span className="text-white">{formatCurrency(7000)} - {formatCurrency(30000)}</span>
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
                    <h4 className="font-bold text-white mb-2">Experience Bookings</h4>
                    <p className="text-gray-300 text-sm">Per-person ticket sales for curated experiences</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Private Group Customization</h4>
                    <p className="text-gray-300 text-sm">Corporate team-building, celebrations, family events</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Local Merchant Partnerships</h4>
                    <p className="text-gray-300 text-sm">Commission-based revenue from featured businesses</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Membership Program</h4>
                    <p className="text-gray-300 text-sm">Premium access subscription for regular participants</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Content Licensing</h4>
                    <p className="text-gray-300 text-sm">Experience documentaries to travel platforms</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Pricing Strategy</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Group Experience</div>
                    <div className="text-white">{formatCurrency(45)} - {formatCurrency(150)}/person</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Private Booking</div>
                    <div className="text-white">{formatCurrency(500)} - {formatCurrency(3000)}/group</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Merchant Commission</div>
                    <div className="text-white">15-25% of sales</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Membership</div>
                    <div className="text-white">{formatCurrency(25)}/month</div>
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
                      <div className="text-white font-medium">Hotel Concierge Partnerships</div>
                      <p className="text-gray-400 text-sm">Commission-based referrals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Airbnb Experience Listings</div>
                      <p className="text-gray-400 text-sm">Platform visibility for travelers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Local Influencer Collaborations</div>
                      <p className="text-gray-400 text-sm">Authentic content creation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Corporate HR Departments</div>
                      <p className="text-gray-400 text-sm">Team experiences and retreats</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Conversion Tactics</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">"Locals-Only" Preview Nights</div>
                    <div className="text-white font-medium">Community engagement and word-of-mouth</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Merchant Loyalty Punch Cards</div>
                    <div className="text-white font-medium">Cross-promotion with local businesses</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">UGC Contests</div>
                    <div className="text-white font-medium">Best experience photos/stories</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Limited-Time "Insider Access" Drops</div>
                    <div className="text-white font-medium">Exclusive, time-limited experiences</div>
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
                    <span>Seasonal demand fluctuations</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Maintaining experience quality at scale</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Balancing tourist/local participant mix</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Vendor reliability (small local businesses)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Margin Structure</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Public Experiences</div>
                    <div className="text-xl font-bold text-white">55-70% margin</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Private Groups</div>
                    <div className="text-xl font-bold text-white">65-80% margin</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Digital Content</div>
                    <div className="text-xl font-bold text-white">85%+ margin</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Target LTV</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(600)}+</div>
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
                        License your experience framework to local operators
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Centralized booking platform with local execution
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Themed Subscription Boxes</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Local goods + stories delivered monthly
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Virtual experience components
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">City Storytelling Archives</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Historical content library development
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Licensing to media and education
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Resident Ambassador Program</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Train locals to become certified guides
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Community-powered experience creation
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
                      <div className="text-white font-medium">Neighborhood Gentrification Backlash</div>
                      <p className="text-gray-400 text-sm">Community advisory boards</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Over-reliance on Key Local Personalities</div>
                      <p className="text-gray-400 text-sm">Experience documentation systems</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Weather-Dependent Experiences</div>
                      <p className="text-gray-400 text-sm">Indoor/rain alternatives</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Copycat Competitors</div>
                      <p className="text-gray-400 text-sm">Trademarked experience frameworks</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">12-Month Launch Roadmap</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Phase 1 (0-4 months)</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Develop 5 signature experiences</li>
                      <li className="text-gray-300 text-sm">• Partner with 20 local businesses</li>
                      <li className="text-gray-300 text-sm">• Soft launch with concierge partners</li>
                      <li className="text-gray-300 text-sm">• Build basic booking system</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Phase 2 (5-8 months)</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Launch membership program</li>
                      <li className="text-gray-300 text-sm">• Add AR features</li>
                      <li className="text-gray-300 text-sm">• Expand to corporate market</li>
                      <li className="text-gray-300 text-sm">• Develop merch line</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Phase 3 (9-12 months)</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Neighborhood expansion</li>
                      <li className="text-gray-300 text-sm">• Content licensing deals</li>
                      <li className="text-gray-300 text-sm">• Local resident ambassador program</li>
                      <li className="text-gray-300 text-sm">• Reach {formatCurrency(50000)} MRR</li>
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
                  <span className="text-gray-300">Cultural anthropology background</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Hospitality operations experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Community organizing skills</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Storytelling/content creation ability</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-white font-medium mb-2">Critical Early Hires</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Experience Designer</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Local Liaison</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">AR Developer</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Partnerships Manager</span>
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
                  <h4 className="font-bold text-white mb-2">Travel Platforms</h4>
                  <p className="text-gray-300 text-sm">Looking to add unique local experiences</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Hotel Groups</h4>
                  <p className="text-gray-300 text-sm">Strategic investment for guest experiences</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Franchise Model</h4>
                  <p className="text-gray-300 text-sm">Scalable system for multiple locations</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Experience SaaS Platform</h4>
                  <p className="text-gray-300 text-sm">Technology transition for wider impact</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Local Experience Curation Business?</h2>
            <p className="text-gray-300 mb-6">
              Get everything you need to launch and grow a successful local experience curation business. Our turnkey solution includes complete documentation, tools, templates, and expert guidance.
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

export default LocalExperienceCuration;