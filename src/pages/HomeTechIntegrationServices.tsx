import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Target, Users, DollarSign, LineChart, ArrowRight, CheckCircle2, AlertTriangle, Briefcase, MessageSquare, Shield, Wifi, Home, Cpu, Settings, Zap } from 'lucide-react';
import VideoSlider from '../components/VideoSlider';

const HomeTechIntegrationServices = () => {
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
      <div className="relative pt-24 min-h-[50vh] flex flex-col bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2029] via-black/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end flex-grow relative z-10 pb-16">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium border border-blue-500/30 mb-4">
              TURNKEY STARTUP
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white font-bold">
              Home Tech Integration Services
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Launch a comprehensive smart home integration business that unifies disparate systems into intuitive control solutions, provides future-proof designs, and delivers ongoing technical support for residential and commercial clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Monthly Income</div>
                <div className="text-lg font-bold text-white">{formatCurrency(15000)} - {formatCurrency(50000)}</div>
              </div>
              <div className="bg-black/30 px-4 py-2 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Startup Costs</div>
                <div className="text-lg font-bold text-white">{formatCurrency(20000)} - {formatCurrency(150000)}</div>
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
                  The smart home market is experiencing explosive growth, with 45% of U.S. homes now having at least 3 smart devices. This turnkey solution provides everything needed to launch and scale a successful home technology integration business that unifies disparate systems into seamless, intuitive control solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Time Commitment</h3>
                    <p className="text-gray-300 text-sm">Full-time required</p>
                  </div>
                  
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h3 className="font-bold text-white mb-2">Skill Level</h3>
                    <p className="text-gray-300 text-sm">Intermediate technical knowledge</p>
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
                Watch success stories and get inspired by entrepreneurs who have built thriving home technology integration businesses.
              </p>
              <VideoSlider category="smart home integration business" />
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
                    <span>45% of U.S. homes now have at least 3 smart devices</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Professional installation preferred by 68% for complex systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>New construction requiring pre-wiring growing at 12% annually</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Luxury home sector spending {formatCurrency(15000)}+ per property on integration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Competitive Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Vendor-agnostic approach (not locked to single ecosystem)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Certified technicians (Control4, Crestron, Savant)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Showroom experience center (immersive tech demos)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Energy efficiency specialization (smart grid integrations)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-4">Startup Costs Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Training/Certifications</span>
                  <span className="text-white">{formatCurrency(5000)} - {formatCurrency(25000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Demo Equipment</span>
                  <span className="text-white">{formatCurrency(15000)} - {formatCurrency(100000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Vehicle/Tools</span>
                  <span className="text-white">{formatCurrency(30000)} - {formatCurrency(75000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Showroom</span>
                  <span className="text-white">{formatCurrency(0)} (virtual) - {formatCurrency(150000)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Inventory</span>
                  <span className="text-white">{formatCurrency(20000)} - {formatCurrency(200000)}</span>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Total Initial Investment</span>
                    <span className="font-bold text-white">{formatCurrency(20000)} - {formatCurrency(150000)}</span>
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
                    <h4 className="font-bold text-white mb-2">System Design/Installation</h4>
                    <p className="text-gray-300 text-sm">Project-based fees with 15-30% margins</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Monthly Monitoring/Maintenance</h4>
                    <p className="text-gray-300 text-sm">Recurring revenue from service plans</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Equipment Markup</h4>
                    <p className="text-gray-300 text-sm">Wholesale to retail pricing on hardware</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Premium Concierge Services</h4>
                    <p className="text-gray-300 text-sm">24/7 support tiers for high-end clients</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <h4 className="font-bold text-white mb-2">Developer/Builder Partnerships</h4>
                    <p className="text-gray-300 text-sm">New construction pre-wiring contracts</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Pricing Models</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Basic Package</div>
                    <div className="text-white">{formatCurrency(5000)} - {formatCurrency(15000)} (3-5 devices)</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Whole-Home</div>
                    <div className="text-white">{formatCurrency(25000)} - {formatCurrency(75000)} (full automation)</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Commercial</div>
                    <div className="text-white">{formatCurrency(100000)}+ (multi-zone systems)</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Margin Structure</div>
                    <div className="text-white">Hardware: 25-40%</div>
                    <div className="text-white">Labor: 50-65%</div>
                    <div className="text-white">Subscriptions: 70-85%</div>
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
                      <div className="text-white font-medium">Builder/Architect Referrals</div>
                      <p className="text-gray-400 text-sm">New construction partnerships</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Home Security Partnerships</div>
                      <p className="text-gray-400 text-sm">Cross-sell opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Luxury Real Estate Agents</div>
                      <p className="text-gray-400 text-sm">High-end property network</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Home Show Demonstrations</div>
                      <p className="text-gray-400 text-sm">Interactive technology exhibits</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Conversion Tactics</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Free Smart Home "Health Check"</div>
                    <div className="text-white font-medium">Audit existing systems and identify improvements</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Energy Savings Calculator</div>
                    <div className="text-white font-medium">Demonstrate ROI through utility cost reduction</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Trade-In Programs</div>
                    <div className="text-white font-medium">Credit for outdated technology</div>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Builder Incentive Programs</div>
                    <div className="text-white font-medium">Commissions for new construction referrals</div>
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
                    <span>Technology obsolescence (rapid product cycles)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Interoperability issues (competing standards)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>High client education needs</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span>Cybersecurity liability (IoT vulnerabilities)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Project Management</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Average Project Timeline</div>
                    <div className="text-white">2-6 weeks (residential)</div>
                    <div className="text-white">1-3 months (commercial)</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Project ROI Target</div>
                    <div className="text-white">35-50%</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Key Performance Metrics</div>
                    <div className="text-white">Client satisfaction score</div>
                    <div className="text-white">Project completion time</div>
                    <div className="text-white">Service call frequency</div>
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
                    <h4 className="text-lg font-semibold text-white">Vertical Integration</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Acquire security/alarm company
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Develop proprietary control software
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Rental Property Solutions</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Landlord tech packages
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Vacation rental automation
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 pb-6 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Aging-in-Place Specialization</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Health monitoring systems
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Accessibility automation
                      </li>
                    </ul>
                  </div>

                  <div className="relative pl-8 border-l border-gray-700">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]" />
                    <h4 className="text-lg font-semibold text-white">Energy Utility Partnerships</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Demand response programs
                      </li>
                      <li className="flex items-center gap-2 text-gray-300">
                        <ArrowRight size={16} className="text-blue-400" />
                        Smart grid integration
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
                      <div className="text-white font-medium">Equipment Damage During Installs</div>
                      <p className="text-gray-400 text-sm">Rigorous pre-testing protocols</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Client Dissatisfaction with Complexity</div>
                      <p className="text-gray-400 text-sm">Tiered user training programs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Vendor Supply Chain Issues</div>
                      <p className="text-gray-400 text-sm">Multi-vendor inventory</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-red-400 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <div className="text-white font-medium">Smart Home Standard Wars</div>
                      <p className="text-gray-400 text-sm">Future-proof wiring standards</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">12-Month Launch Roadmap</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Quarter 1</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Obtain key certifications</li>
                      <li className="text-gray-300 text-sm">• Establish vendor accounts</li>
                      <li className="text-gray-300 text-sm">• Complete 3 pro bono showcase homes</li>
                      <li className="text-gray-300 text-sm">• Develop quoting templates</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Quarter 2</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Launch basic service website</li>
                      <li className="text-gray-300 text-sm">• Partner with 2 local builders</li>
                      <li className="text-gray-300 text-sm">• Implement project management software</li>
                      <li className="text-gray-300 text-sm">• Hire first technician</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                    <div className="text-sm text-blue-400 mb-2">Quarters 3-4</div>
                    <ul className="space-y-1">
                      <li className="text-gray-300 text-sm">• Open demo center</li>
                      <li className="text-gray-300 text-sm">• Add monitoring services</li>
                      <li className="text-gray-300 text-sm">• Secure commercial account</li>
                      <li className="text-gray-300 text-sm">• Reach {formatCurrency(50000)}/month revenue</li>
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
                  <span className="text-gray-300">Low-voltage electrical background</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">IT/networking certification</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Luxury customer service experience</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">Continuous learning mindset</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-white font-medium mb-2">Critical Early Hires</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Lead system designer</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">CAD technician</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Service coordinator</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-400 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-300">Procurement specialist</span>
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
                  <h4 className="font-bold text-white mb-2">National Integrators</h4>
                  <p className="text-gray-300 text-sm">Looking to expand geographic footprint</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Private Equity</h4>
                  <p className="text-gray-300 text-sm">Roll-up opportunities in fragmented market</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Strategic Buyers</h4>
                  <p className="text-gray-300 text-sm">Utilities and security firms seeking expansion</p>
                </div>
                
                <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-900/50">
                  <h4 className="font-bold text-white mb-2">Franchise Development</h4>
                  <p className="text-gray-300 text-sm">Potential to create franchise model</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Home Tech Integration Business?</h2>
            <p className="text-gray-300 mb-6">
              Get everything you need to launch and grow a successful home technology integration business. Our turnkey solution includes complete documentation, tools, templates, and expert guidance.
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

export default HomeTechIntegrationServices;