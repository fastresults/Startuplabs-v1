import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Minus, Star, Target, Users, Clock } from 'lucide-react';

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
}

interface IdeaAnalysisCardProps {
  analysis: Analysis;
}

const IdeaAnalysisCard: React.FC<IdeaAnalysisCardProps> = ({ analysis }) => {
  if (!analysis) return null;
  
  const { idea, sector, rank, totalIdeas, trendData, insights } = analysis;
  
  const chartData = trendData.timeline.map(point => ({
    date: point.date,
    value: point.value
  }));
  
  let marketStrength = 'Very Strong';
  let strengthColor = 'text-green-400';
  let strengthBg = 'bg-green-500/20';
  let strengthBorder = 'border-green-500/50';
  
  if (rank > totalIdeas * 0.1) {
    marketStrength = 'Strong';
    strengthColor = 'text-green-400';
    strengthBg = 'bg-green-500/20';
    strengthBorder = 'border-green-500/50';
  } 
  if (rank > totalIdeas * 0.25) {
    marketStrength = 'Moderate';
    strengthColor = 'text-blue-400';
    strengthBg = 'bg-blue-500/20';
    strengthBorder = 'border-blue-500/50';
  }
  if (rank > totalIdeas * 0.5) {
    marketStrength = 'Fair';
    strengthColor = 'text-yellow-400';
    strengthBg = 'bg-yellow-500/20';
    strengthBorder = 'border-yellow-500/50';
  }
  if (rank > totalIdeas * 0.75) {
    marketStrength = 'Weak';
    strengthColor = 'text-red-400';
    strengthBg = 'bg-red-500/20';
    strengthBorder = 'border-red-500/50';
  }

  const TrendIcon = trendData.trendDirection === 'rising' 
    ? TrendingUp 
    : trendData.trendDirection === 'falling'
      ? TrendingDown
      : Minus;

  const trendColor = trendData.trendDirection === 'rising'
    ? 'text-green-400'
    : trendData.trendDirection === 'falling'
      ? 'text-red-400'
      : 'text-gray-400';
  
  return (
    <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl overflow-visible border border-gray-700">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient rounded-xl" />

      {/* Header */}
      <div className="relative p-6 border-b border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{idea}</h2>
            <p className="text-gray-400">Business Sector: {sector}</p>
          </div>
          <div className={`px-4 py-2 ${strengthBg} rounded-lg border ${strengthBorder}`}>
            <div className="flex items-center gap-2">
              <Star className={strengthColor} size={20} />
              <span className={`font-semibold ${strengthColor}`}>{marketStrength}</span>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Target className="text-blue-400" size={20} />
              <h3 className="text-gray-400">Market Ranking</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">#{rank}</span>
              <span className="text-gray-400 text-sm">of {totalIdeas}</span>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-blue-400" size={20} />
              <h3 className="text-gray-400">Market Interest</h3>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{trendData.avgInterest.toFixed(1)}</span>
              <span className="text-gray-400 text-sm">avg. score</span>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="text-blue-400" size={20} />
              <h3 className="text-gray-400">Trend Direction</h3>
            </div>
            <div className="flex items-center gap-2">
              <TrendIcon className={trendColor} size={24} />
              <span className={`text-lg font-semibold ${trendColor}`}>
                {trendData.trendPercentage > 0 ? '+' : ''}{trendData.trendPercentage.toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Interest Trend (Last 90 Days)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => value.split(' ')[0]}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                stroke="#4B5563"
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
                stroke="#4B5563"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '0.375rem',
                  color: '#F3F4F6'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Insights */}
      <div className="p-6 border-t border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Market Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="bg-black/30 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <div className="flex items-start gap-2">
                <Star className="text-blue-400 flex-shrink-0 mt-1" size={16} />
                <p className="text-gray-300">{insight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
    </div>
  );
};

export default IdeaAnalysisCard;