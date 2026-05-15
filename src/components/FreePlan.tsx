import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';

interface Tool {
  id: number;
  title: string;
  description: string;
  image: string;
  phase: string;
  phaseNumber: string;
  phaseColor: string;
  route: string;
}

const tools: Tool[] = [
  {
    id: 1,
    title: "Business Trend Analyzer",
    description: "Analyze market trends and validate your business idea with real-time data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    phase: "IDEATE",
    phaseNumber: "1",
    phaseColor: "#6366F1",
    route: "/ideation"
  },
  {
    id: 2,
    title: "PlanCrafter",
    description: "Transform your vision into an actionable roadmap with customized strategy development.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    phase: "PLAN",
    phaseNumber: "2",
    phaseColor: "#8B5CF6",
    route: "/planning"
  },
  {
    id: 3,
    title: "Alternative Funding Strategist",
    description: "Discover non-traditional funding options tailored to your startup's unique characteristics.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80",
    phase: "FUND",
    phaseNumber: "3",
    phaseColor: "#EC4899",
    route: "/funding"
  },
  {
    id: 4,
    title: "Startup Launch Assistant",
    description: "Track progress through critical building stages with customized recommendations and resources.",
    image: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80",
    phase: "BUILD",
    phaseNumber: "4",
    phaseColor: "#F97316",
    route: "/development"
  },
  {
    id: 5,
    title: "LaunchNavigator",
    description: "Create a customized launch playbook with timeline, strategies, and actionable steps.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80",
    phase: "LAUNCH",
    phaseNumber: "5",
    phaseColor: "#EF4444",
    route: "/launch"
  },
  {
    id: 6,
    title: "Growth ROI Calculator",
    description: "Visualize how different growth levers impact your startup's key metrics.",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80",
    phase: "GROW",
    phaseNumber: "6",
    phaseColor: "#22C55E",
    route: "/growth"
  }
];

const FreePlan: React.FC = () => {
  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div 
            key={tool.id}
            className="group relative bg-gradient-to-br from-black/40 to-black/20 rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Image Section with Overlay */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={tool.image}
                alt={tool.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              
              {/* Phase Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${tool.phaseColor}20`,
                    color: tool.phaseColor,
                    border: `1px solid ${tool.phaseColor}40`
                  }}
                >
                  {tool.phaseNumber}
                </div>
                <span 
                  className="text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${tool.phaseColor}20`,
                    color: tool.phaseColor,
                    border: `1px solid ${tool.phaseColor}40`
                  }}
                >
                  {tool.phase}
                </span>
              </div>

              {/* Video Preview Button */}
              <button 
                className="absolute top-4 right-4 p-2 bg-blue-500/10 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-colors border border-blue-500/30"
              >
                <Play className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-400">
                  {tool.description}
                </p>
              </div>

              {/* Action Button */}
              <Link
                to={tool.route}
                className="group/btn relative overflow-hidden w-full px-4 py-3 bg-gradient-to-r from-blue-600/10 to-blue-400/10 backdrop-blur-sm border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2 mt-6"
              >
                <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/btn:translate-x-full transition-all duration-1000" />
                <span className="relative">Visit Now</span>
                <ArrowRight size={16} className="relative transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>

            {/* Animated gradient overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 pointer-events-none transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreePlan;