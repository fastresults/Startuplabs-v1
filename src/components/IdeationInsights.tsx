import React from 'react';
import { TrendingUp, TrendingDown, Minus, Search, Hash, Rocket, ArrowRight } from 'lucide-react';

interface Competitor {
  idea: string;
  rank: number;
  trendDirection: 'rising' | 'falling' | 'stable';
}

interface Analysis {
  relatedQueries: { query: string }[];
  relatedTopics: { topic: string }[];
  topCompetitors: Competitor[];
}

interface IdeationInsightsProps {
  analysis: Analysis;
}

const IdeationInsights: React.FC<IdeationInsightsProps> = ({ analysis }) => {
  if (!analysis) return null;
  
  const { 
    relatedQueries = [], 
    relatedTopics = [],
    topCompetitors = [] 
  } = analysis;

  const getTrendIcon = (direction: 'rising' | 'falling' | 'stable') => {
    switch (direction) {
      case 'rising':
        return <TrendingUp className="text-green-400" size={16} />;
      case 'falling':
        return <TrendingDown className="text-red-400" size={16} />;
      default:
        return <Minus className="text-gray-400" size={16} />;
    }
  };
  
  return (
    <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl overflow-visible border border-gray-700">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient rounded-xl" />

      {/* Header */}
      <div className="relative p-6 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white">Market Intelligence</h3>
        <p className="text-gray-400 text-sm">Additional insights to help refine your idea</p>
      </div>
      
      {/* Similar Opportunities */}
      {topCompetitors.length > 0 && (
        <div className="relative p-6 border-b border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Rocket className="text-blue-400" size={20} />
            Similar Opportunities
          </h4>
          <div className="space-y-3">
            {topCompetitors.map((item, index) => (
              <div 
                key={index} 
                className="bg-black/30 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getTrendIcon(item.trendDirection)}
                    <span className="text-gray-300">{item.idea}</span>
                  </div>
                  <span className="text-sm px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                    #{item.rank}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Search Insights */}
      {relatedQueries.length > 0 && (
        <div className="relative p-6 border-b border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Search className="text-blue-400" size={20} />
            What People Are Searching
          </h4>
          <div className="flex flex-wrap gap-2">
            {relatedQueries.slice(0, 8).map((query, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-black/30 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                {query.query}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Related Topics */}
      {relatedTopics.length > 0 && (
        <div className="relative p-6 border-b border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Hash className="text-blue-400" size={20} />
            Related Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {relatedTopics.slice(0, 8).map((topic, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-900/20 text-blue-400 text-sm rounded-full border border-blue-900/50 hover:bg-blue-900/30 transition-all"
              >
                {topic.topic}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Next Steps */}
      <div className="relative p-6 bg-black/20">
        <h4 className="text-lg font-semibold text-white mb-4">Ideation Next Steps</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <ArrowRight className="text-blue-400 mt-1" size={16} />
            <span className="text-gray-300">Validate with potential customers</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="text-blue-400 mt-1" size={16} />
            <span className="text-gray-300">Research competitors in this space</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="text-blue-400 mt-1" size={16} />
            <span className="text-gray-300">Define your unique value proposition</span>
          </div>
          <div className="flex items-start gap-2">
            <ArrowRight className="text-blue-400 mt-1" size={16} />
            <span className="text-gray-300">Create a minimal viable product</span>
          </div>
        </div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
    </div>
  );
};

export default IdeationInsights;