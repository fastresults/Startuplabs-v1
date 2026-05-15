import React, { useState } from 'react';
import { Search, Brain, Target, Users, MessageSquare, Shield, ArrowRight } from 'lucide-react';
import IdeaAnalysisCard from './IdeaAnalysisCard';
import IdeationInsights from './IdeationInsights';
import { fetchTrendlyInsights, analyzeTrendDirection, getMarketPotential } from '../lib/trendly';

interface TrendData {
  timeline: { date: string; value: number }[];
  avgInterest: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  trendPercentage: number;
}

interface Analysis {
  idea: string;
  sector: string;
  rank: number;
  totalIdeas: number;
  trendData: TrendData;
  insights: string[];
  relatedQueries: { query: string }[];
  relatedTopics: { topic: string }[];
  topCompetitors: {
    idea: string;
    rank: number;
    trendDirection: 'rising' | 'falling' | 'stable';
  }[];
}

const BusinessTrendAnalyzer: React.FC = () => {
  const [businessIdea, setBusinessIdea] = useState('');
  const [sector, setSector] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [error, setError] = useState('');

  const sectors = [
    { id: 'gig', name: 'Side Hustle', description: 'Start earning with minimal overhead', icon: '💼' },
    { id: 'mainstreet', name: 'Local Business', description: 'Build a brick & mortar presence', icon: '🏪' },
    { id: 'digital', name: 'Online Business', description: 'Launch your digital venture', icon: '🌐' },
    { id: 'platform', name: 'Platform', description: 'Create a scalable marketplace', icon: '🚀' }
  ];

  const analyzeTrends = async () => {
    if (!businessIdea || !sector) {
      setError('Please enter a business idea and select a sector');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const trendsData = await fetchTrendlyInsights(businessIdea);
      
      const trendData = {
        timeline: trendsData.interest_over_time,
        avgInterest: trendsData.trend_metrics.average_interest,
        trendDirection: analyzeTrendDirection(trendsData),
        trendPercentage: trendsData.trend_metrics.year_over_year_growth
      };

      const marketPotential = getMarketPotential(trendsData);
      const rank = Math.max(1, Math.min(1000, 1000 - (marketPotential.score * 10)));

      const insights = [
        ...marketPotential.factors,
        `${trendData.trendDirection === 'rising' ? 'Growing' : trendData.trendDirection === 'falling' ? 'Declining' : 'Stable'} market interest indicates ${trendData.trendDirection === 'rising' ? 'potential opportunity' : trendData.trendDirection === 'falling' ? 'possible market saturation' : 'established market'}`,
        `${sector === 'digital' ? 'Digital transformation trends suggest continued growth' : sector === 'platform' ? 'Platform business models show strong network effects' : 'Local market dynamics remain important'}`
      ];

      const topCompetitors = trendsData.competitor_insights.slice(0, 3).map(competitor => ({
        idea: competitor.name,
        rank: Math.floor(rank * (1 + (competitor.growth / 100))),
        trendDirection: competitor.growth > 5 ? 'rising' : competitor.growth < -5 ? 'falling' : 'stable'
      }));

      const analysis: Analysis = {
        idea: businessIdea,
        sector: sectors.find(s => s.id === sector)?.name || '',
        rank,
        totalIdeas: 1000,
        trendData,
        insights,
        relatedQueries: trendsData.related_queries.map(query => ({ query })),
        relatedTopics: trendsData.related_topics.map(topic => ({ topic })),
        topCompetitors
      };
      
      setAnalysis(analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze trends. Please try again.');
      console.error('Error analyzing trends:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 mb-8 border border-gray-700 overflow-visible mt-12">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-6 py-1.5 rounded-full shadow-lg whitespace-nowrap z-50">
          free StartupLabs tool
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient rounded-xl" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
              <Brain size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Business Trend Analyzer</h2>
              <p className="text-gray-400">
                Analyze market trends and validate your business idea with real-time data.
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Enter Your Business Concept</label>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Describe your business idea..."
                  value={businessIdea}
                  onChange={(e) => setBusinessIdea(e.target.value)}
                  className="w-full bg-black/30 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors group-hover:border-blue-500/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Select Business Sector</label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sectors.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSector(sector === s.id ? '' : s.id)}
                    className={`group relative overflow-hidden rounded-xl transition-all duration-500 ${
                      sector === s.id
                        ? 'scale-[1.02] shadow-2xl'
                        : 'hover:scale-[1.01]'
                    }`}
                  >
                    {/* Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      sector === s.id
                        ? 'from-blue-600 to-blue-800'
                        : 'from-black to-gray-900'
                    } opacity-90 transition-all duration-500 group-hover:opacity-100`} />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                    
                    {/* Content */}
                    <div className="relative p-4">
                      <div className="text-3xl mb-2">{s.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-1">{s.name}</h3>
                      <p className="text-gray-400 text-sm">{s.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              onClick={analyzeTrends}
              disabled={isLoading}
              className="group relative overflow-hidden w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
              
              {/* Content */}
              <div className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Target size={20} />
                    Analyze Market Trends
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Decorative blurred circles */}
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      {analysis && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <IdeaAnalysisCard analysis={analysis} />
          </div>
          <div>
            <IdeationInsights analysis={analysis} />
          </div>
        </div>
      )}

      {!analysis && !isLoading && (
        <div className="text-center py-12 bg-black/30 rounded-lg border border-gray-700">
          <Target size={48} className="mx-auto text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            Ready to Validate Your Idea?
          </h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Enter your business concept above and get instant insights based on real market data.
          </p>
        </div>
      )}
    </div>
  );
};

export default BusinessTrendAnalyzer;