import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { TurnkeyStartup } from '../types';

interface TurnkeyStartupCardProps {
  startup: TurnkeyStartup;
}

const TurnkeyStartupCard: React.FC<TurnkeyStartupCardProps> = ({ startup }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getCategoryStyles = (category: string) => {
    switch(category) {
      case 'digital':
        return 'bg-purple-500/20 text-purple-400';
      case 'mainstreet':
        return 'bg-green-500/20 text-green-400';
      case 'platform':
        return 'bg-orange-500/20 text-orange-400';
      default:
        return 'bg-blue-500/20 text-blue-400';
    }
  };

  const getCategoryName = (category: string) => {
    switch(category) {
      case 'digital':
        return 'Online Business';
      case 'mainstreet':
        return 'Local Business';
      case 'platform':
        return 'Platform';
      case 'sidehustle':
        return 'Side Hustle';
      default:
        return 'Business';
    }
  };

  return (
    <div className="bg-black/30 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all h-full flex flex-col">
      <div className="relative h-48">
        <img
          src={startup.image}
          alt={startup.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{startup.title}</h3>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryStyles(startup.category)}`}>
              {getCategoryName(startup.category)}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-400 mb-4 flex-grow">{startup.description}</p>
        
        <div className="space-y-4 mt-auto">
          <div>
            <div className="text-sm text-gray-400 mb-1">Startup Costs</div>
            <div className="text-white font-medium">
              {formatCurrency(startup.startupCosts.min)} - {formatCurrency(startup.startupCosts.max)}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-400 mb-1">Monthly Income Potential</div>
            <div className="text-white font-medium">
              {formatCurrency(startup.monthlyIncome.min)} - {formatCurrency(startup.monthlyIncome.max)}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">Time Commitment</div>
                <div className="text-white">{startup.attributes.timeCommitment}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Skill Level</div>
                <div className="text-white">{startup.attributes.skillLevel}</div>
              </div>
            </div>
          </div>

          <Link 
            to={`/turkeystartups/${startup.id}`}
            className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <span>View Details</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TurnkeyStartupCard;