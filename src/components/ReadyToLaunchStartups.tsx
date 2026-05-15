import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Brain, Target, DollarSign, Package as PackageIcon, Rocket, LineChart, ArrowRight } from 'lucide-react';

const phases = [
  {
    id: 'ideate',
    title: 'PHASE 1: IDEATE',
    icon: Brain,
    description: 'Transform your vision into a validated business concept',
    summary: 'Ideation deliverables focus on market validation and brand foundations, delivered through battle-tested frameworks and interactive dashboards that allow StartupLab\'s clients to track research progress and access findings in real time.',
    deliverables: [
      {
        name: 'Research & Discovery Package',
        items: []
      },
      {
        name: 'Competitive Analysis Report',
        type: 'DOCUMENT',
        items: [
          '5-competitor assessment focusing on key differentiators and market positioning',
          'Delivered as a PDF with actionable insights'
        ]
      },
      {
        name: 'Business Name & Identity Validation',
        type: 'TOOL',
        items: [
          'Domain availability checker',
          'Trademark screening tool',
          'Jurisdiction-specific business registration requirement checklist'
        ]
      },
      {
        name: 'Market Opportunity Assessment',
        type: 'DOCUMENT',
        items: [
          'Target audience identification',
          'Problem-solution fit analysis',
          'Market size calculation'
        ]
      }
    ]
  },
  {
    id: 'plan',
    title: 'PHASE 2: PLAN',
    icon: Target,
    description: 'Establish your strategic foundation for success',
    summary: 'Planning deliverables provide the business and financial foundations through standardized templates that clients can access and collaborate on through a simple dashboard interface.',
    deliverables: [
      {
        name: 'Strategic Planning Package',
        items: []
      },
      {
        name: 'Business Plan',
        type: 'DOCUMENT',
        items: [
          'One-page business model canvas',
          '3-page executive summary template',
          'Core value proposition statement'
        ]
      },
      {
        name: 'Financial Model',
        type: 'TOOL',
        items: [
          '12-month cash flow projection spreadsheet',
          'Break-even calculator',
          'Startup cost estimator'
        ]
      },
      {
        name: 'Marketing Plan',
        type: 'DOCUMENT',
        items: [
          'Customer acquisition strategy (3 primary channels)',
          'Messaging framework',
          'Marketing budget allocation template'
        ]
      }
    ]
  },
  {
    id: 'fund',
    title: 'PHASE 3: FUND',
    icon: DollarSign,
    description: 'Secure the capital needed to fuel your growth',
    summary: 'Funding deliverables focus on investor-ready materials that can be quickly customized and accessed through a secure client portal with feedback tools and distribution tracking.',
    deliverables: [
      {
        name: 'Investment Package',
        items: []
      },
      {
        name: 'Pitch Deck',
        type: 'ASSET',
        items: [
          '10-slide investor presentation template',
          'Customizable design with industry-specific examples',
          'Key metrics dashboard slide'
        ]
      },
      {
        name: 'Funding Goal Calculator',
        type: 'TOOL',
        items: [
          'Capital requirements estimator',
          'Equity dilution simulator',
          'Investor return calculator'
        ]
      },
      {
        name: 'Investor Outreach Kit',
        type: 'STRATEGIC DIGITAL ASSET',
        items: [
          'Email template series for investor communication',
          '60-second video pitch template',
          'Investor tracking spreadsheet'
        ]
      }
    ]
  },
  {
    id: 'build',
    title: 'PHASE 4: BUILD',
    icon: PackageIcon,
    description: 'Transform your vision into reality',
    summary: 'Build deliverables provide the brand and digital presence elements through modular systems that can be tracked and accessed via a visual project dashboard.',
    deliverables: [
      {
        name: 'Build Package',
        items: []
      },
      {
        name: 'Product Roadmap',
        type: 'DOCUMENT',
        items: [
          'Feature prioritization framework',
          'Development milestone tracker',
          'User testing protocol'
        ]
      },
      {
        name: 'Brand Identity',
        type: 'ASSET',
        items: [
          'Logo (primary and secondary versions)',
          'Brand color palette and typography guide',
          'Brand style guide (5 pages)'
        ]
      },
      {
        name: 'Digital Presence',
        type: 'ASSET',
        items: [
          '5-page responsive website',
          'Social media profile setup (3 primary platforms)',
          'Email template design'
        ]
      }
    ]
  },
  {
    id: 'launch',
    title: 'PHASE 5: LAUNCH',
    icon: Rocket,
    description: 'Execute a successful market entry',
    summary: 'Launch deliverables focus on go-to-market elements delivered through automated systems that clients can monitor and manage via a launch control dashboard.',
    deliverables: [
      {
        name: 'Launch Package',
        items: []
      },
      {
        name: 'Go-to-Market Timeline',
        type: 'TOOL',
        items: [
          'Launch sequence planner',
          'Milestone tracker with automated notifications',
          'Resource allocation calculator'
        ]
      },
      {
        name: 'Customer Conversion System',
        type: 'ASSET',
        items: [
          'Lead capture landing page template',
          'Email nurture sequence (5 emails)',
          'Sales call script template'
        ]
      },
      {
        name: 'Launch Announcement Kit',
        type: 'STRATEGIC DIGITAL ASSET',
        items: [
          'Press release template',
          'Launch announcement video script',
          'Social media launch post templates (10 variations)'
        ]
      }
    ]
  },
  {
    id: 'grow',
    title: 'PHASE 6: GROW',
    icon: LineChart,
    description: 'Scale your success systematically',
    summary: 'Growth deliverables provide metrics and campaigns to sustain momentum, delivered through automated systems with real-time performance dashboards.',
    deliverables: [
      {
        name: 'Growth Package',
        items: []
      },
      {
        name: 'Performance Dashboard',
        type: 'TOOL',
        items: [
          'Key metric tracker (10 KPIs)',
          'Weekly automated reports',
          'Goal tracking visualization'
        ]
      },
      {
        name: 'First Quarter Campaign Bundle',
        type: 'STRATEGIC DIGITAL ASSET',
        items: [
          '90-day marketing campaign template',
          'Content calendar with 12 post templates',
          'Email marketing sequence (8 emails)'
        ]
      },
      {
        name: 'Customer Feedback System',
        type: 'TOOL',
        items: [
          'Net Promoter Score survey template',
          'Customer interview guide',
          'Feedback analysis spreadsheet'
        ]
      }
    ]
  }
];

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="bg-red-900/20 rounded-lg p-6 border border-red-900/50 text-center">
      <h3 className="text-xl font-bold text-white mb-2">Something went wrong</h3>
      <p className="text-red-200 mb-4">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Try again
      </button>
    </div>
  );
};

const ReadyToLaunchStartups = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready-to-Launch Startups</h2>
          <p className="text-gray-400 mb-8">
            Choose from our collection of market-tested, turnkey startups—each one packed with everything included in the Phases outlined below. From polished branding and a ready-to-go digital presence to a tailored social strategy and hands-on launch support, our packages give you everything you need to step confidently into entrepreneurship.
          </p>
          <Link 
            to="/turkeystartups"
            className="PreviewStartups inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white shadow-lg animate-color-fade"
          >
            Preview Ready-to-Launch Startups
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div key={phase.id} className="bg-black/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                  <phase.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                  <p className="text-sm text-gray-400">{phase.description}</p>
                </div>
              </div>

              {phase.summary && (
                <p className="text-blue-400 text-sm bg-blue-900/20 p-4 rounded-lg border border-blue-900/50 mb-6">
                  {phase.summary}
                </p>
              )}

              <div className="space-y-6">
                {phase.deliverables.map((deliverable, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-medium">{deliverable.name}</h4>
                      {deliverable.type && (
                        <span className="text-xs font-medium px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                          {deliverable.type}
                        </span>
                      )}
                    </div>
                    {deliverable.items && deliverable.items.length > 0 && (
                      <ul className="space-y-2 mt-2">
                        {deliverable.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                            <ArrowRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mx-auto">
            <span>I Am Ready to Purchase Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ReadyToLaunchStartups;