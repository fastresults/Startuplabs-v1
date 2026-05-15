import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Brain, Code, Settings, Users, Info } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ComponentCost {
  name: string;
  min: number;
  max: number;
  value: number;
}

interface Category {
  name: string;
  icon: React.ElementType;
  components: ComponentCost[];
}

const initialCategories: Category[] = [
  {
    name: 'Foundation & Strategy',
    icon: Brain,
    components: [
      { name: 'Brand Development', min: 500, max: 25000, value: 500 },
      { name: 'Business Formation', min: 500, max: 10000, value: 500 },
      { name: 'Funding Strategy', min: 500, max: 20000, value: 500 }
    ]
  },
  {
    name: 'Development & Infrastructure',
    icon: Code,
    components: [
      { name: 'Product Development', min: 500, max: 100000, value: 500 },
      { name: 'Physical & Digital Setup', min: 500, max: 50000, value: 500 },
      { name: 'Marketing Systems', min: 500, max: 30000, value: 500 }
    ]
  },
  {
    name: 'Operations & Execution',
    icon: Settings,
    components: [
      { name: 'Operational Efficiency', min: 500, max: 20000, value: 500 },
      { name: 'Launch Strategy', min: 500, max: 25000, value: 500 },
      { name: 'Team Building', min: 500, max: 40000, value: 500 }
    ]
  },
  {
    name: 'Experience & Growth',
    icon: Users,
    components: [
      { name: 'Customer Experience', min: 500, max: 15000, value: 500 },
      { name: 'Strategic Communications', min: 500, max: 15000, value: 500 }
    ]
  }
];

const businessPresets = {
  sideHustle: 0.4, // 40% of default values
  localBusiness: 0.7, // 70% of default values
  onlineBusiness: 1, // 100% of default values
  platform: 1.3 // 130% of default values
};

const ROICalculator: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const calculateTotalCost = () => {
    return categories.reduce((total, category) => {
      return total + category.components.reduce((catTotal, comp) => catTotal + comp.value, 0);
    }, 0);
  };

  const calculateStartupLabsCost = () => {
    return calculateTotalCost() * 0.4; // 60% savings (40% of DIY cost)
  };

  const calculateTimeSaved = () => {
    const diyMonths = 12;
    return {
      diy: diyMonths,
      startupLabs: diyMonths / 2.5
    };
  };

  const handleSliderChange = (categoryIndex: number, componentIndex: number, value: number) => {
    const newCategories = [...categories];
    newCategories[categoryIndex].components[componentIndex].value = value;
    setCategories(newCategories);
  };

  const applyPreset = (preset: keyof typeof businessPresets) => {
    setSelectedPreset(preset);
    const newCategories = initialCategories.map(category => ({
      ...category,
      components: category.components.map(component => ({
        ...component,
        value: component.min // Set all values to minimum
      }))
    }));
    setCategories(newCategories);
  };

  const chartData = {
    labels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12'],
    datasets: [
      {
        label: 'DIY Approach',
        data: [0, calculateTotalCost() * 0.2, calculateTotalCost() * 0.5, calculateTotalCost() * 0.8, calculateTotalCost()],
        borderColor: '#ef4444',
        tension: 0.4
      },
      {
        label: 'StartupLabs',
        data: [0, calculateStartupLabsCost() * 0.4, calculateStartupLabsCost() * 0.8, calculateStartupLabsCost(), calculateStartupLabsCost()],
        borderColor: '#3b82f6',
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#fff'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff',
          callback: (value: number) => `$${value.toLocaleString()}`
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff'
        }
      }
    }
  };

  return (
    <div className="bg-black/30 rounded-lg border border-gray-700 p-8 mt-12 relative">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
        free StartupLabs tool
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">ROI Calculator</h2>
      <p className="text-gray-400 mb-8">
        Compare the costs and timeline of building your startup independently versus with StartupLabs.
      </p>

      {/* Business Type Presets */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Select Your Business Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Object.entries(businessPresets).map(([type, _]) => (
            <button
              key={type}
              onClick={() => applyPreset(type as keyof typeof businessPresets)}
              className={`p-4 rounded-lg border transition-all ${
                selectedPreset === type
                  ? 'border-blue-500 bg-blue-500/20 text-white'
                  : 'border-gray-700 hover:border-blue-500/50 text-gray-400'
              }`}
            >
              {type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </button>
          ))}
        </div>
      </div>

      {/* Cost Sliders */}
      <div className="space-y-8 mb-12">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-black/20 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                <category.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
            </div>

            <div className="space-y-6">
              {category.components.map((component, componentIndex) => (
                <div key={componentIndex} className="relative">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">{component.name}</span>
                      <button
                        onMouseEnter={() => setActiveTooltip(`${categoryIndex}-${componentIndex}`)}
                        onMouseLeave={() => setActiveTooltip(null)}
                        className="text-gray-400 hover:text-gray-300"
                      >
                        <Info size={16} />
                      </button>
                    </div>
                    <span className="text-blue-400 font-medium">
                      ${component.value.toLocaleString()}
                    </span>
                  </div>

                  {activeTooltip === `${categoryIndex}-${componentIndex}` && (
                    <div className="absolute -top-12 left-0 bg-gray-900 text-white text-sm p-2 rounded shadow-lg z-10">
                      Industry average: ${((component.max + component.min) / 2).toLocaleString()}
                    </div>
                  )}

                  <input
                    type="range"
                    min={component.min}
                    max={component.max}
                    value={component.value}
                    onChange={(e) => handleSliderChange(categoryIndex, componentIndex, parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-black/20 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Cost Comparison</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">DIY Approach:</span>
              <span className="text-2xl font-bold text-white">
                ${calculateTotalCost().toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">With StartupLabs:</span>
              <span className="text-2xl font-bold text-blue-400">
                ${calculateStartupLabsCost().toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-700">
              <span className="text-gray-400">Total Savings:</span>
              <span className="text-2xl font-bold text-green-400">
                ${(calculateTotalCost() - calculateStartupLabsCost()).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-black/20 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-6">Time to Market</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">DIY Approach:</span>
              <span className="text-2xl font-bold text-white">
                {calculateTimeSaved().diy} months
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">With StartupLabs:</span>
              <span className="text-2xl font-bold text-blue-400">
                {calculateTimeSaved().startupLabs} months
              </span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-700">
              <span className="text-gray-400">Time Saved:</span>
              <span className="text-2xl font-bold text-green-400">
                {calculateTimeSaved().diy - calculateTimeSaved().startupLabs} months
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-black/20 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-6">Cost Over Time</h3>
        <div className="h-[400px]">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Schedule Strategy Call
        </button>
      </div>
    </div>
  );
};

export default ROICalculator;