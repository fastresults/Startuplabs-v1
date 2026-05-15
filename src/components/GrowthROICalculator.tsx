import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, Target, MessageSquare, Shield, Calculator, Clock, LineChart as LineChartIcon, Brain, ArrowRight } from 'lucide-react';

interface BaseMetrics {
  avgCost: number;
  unitsSold: number;
  profitMargin: number;
  revenue: number;
  customers: number;
  retention: number;
  satisfaction: number;
  netIncome: number;
  netGrowth: number;
}

interface GrowthLever {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  min: number;
  max: number;
  default: number;
  unit: string;
  impact: {
    revenue: number;
    customers: number;
    retention: number;
    satisfaction: number;
  };
}

const growthLevers: GrowthLever[] = [
  {
    id: 'acquisition_spend',
    name: 'Customer Acquisition Spend',
    description: 'Monthly budget allocated to acquiring new customers',
    icon: Users,
    min: 1000,
    max: 50000,
    default: 5000,
    unit: '$',
    impact: {
      revenue: 0.8,
      customers: 1.0,
      retention: 0.1,
      satisfaction: 0.2
    }
  },
  {
    id: 'product_development',
    name: 'Product Development',
    description: 'Investment in new features and improvements',
    icon: Shield,
    min: 5000,
    max: 100000,
    default: 20000,
    unit: '$',
    impact: {
      revenue: 0.5,
      customers: 0.3,
      retention: 0.8,
      satisfaction: 0.9
    }
  },
  {
    id: 'pricing_optimization',
    name: 'Price Point Adjustment',
    description: 'Percentage change in pricing strategy',
    icon: DollarSign,
    min: -20,
    max: 50,
    default: 0,
    unit: '%',
    impact: {
      revenue: 1.0,
      customers: -0.5,
      retention: -0.3,
      satisfaction: -0.2
    }
  },
  {
    id: 'customer_service',
    name: 'Customer Service Investment',
    description: 'Resources allocated to customer support and success',
    icon: MessageSquare,
    min: 2000,
    max: 40000,
    default: 10000,
    unit: '$',
    impact: {
      revenue: 0.3,
      customers: 0.2,
      retention: 0.9,
      satisfaction: 1.0
    }
  },
  {
    id: 'marketing_efficiency',
    name: 'Marketing Channel Optimization',
    description: 'Efficiency improvement in marketing spend',
    icon: Target,
    min: -10,
    max: 100,
    default: 0,
    unit: '%',
    impact: {
      revenue: 0.7,
      customers: 0.8,
      retention: 0.2,
      satisfaction: 0.3
    }
  }
];

const GrowthROICalculator: React.FC = () => {
  const [leverValues, setLeverValues] = useState<Record<string, number>>({});
  const [baseMetrics, setBaseMetrics] = useState<BaseMetrics>({
    avgCost: 67,
    unitsSold: 2000,
    profitMargin: 30,
    revenue: 0,
    customers: 2000,
    retention: 85,
    satisfaction: 80,
    netIncome: 0,
    netGrowth: 0
  });
  const [projectedData, setProjectedData] = useState<any[]>([]);

  useEffect(() => {
    // Initialize lever values with defaults
    const initialValues: Record<string, number> = {};
    growthLevers.forEach(lever => {
      initialValues[lever.id] = lever.default;
    });
    setLeverValues(initialValues);
  }, []);

  useEffect(() => {
    calculateInitialMetrics();
  }, [baseMetrics.avgCost, baseMetrics.unitsSold, baseMetrics.profitMargin, leverValues]);

  const calculateInitialMetrics = () => {
    const revenue = baseMetrics.avgCost * baseMetrics.unitsSold;
    const profitAmount = revenue * (baseMetrics.profitMargin / 100);
    const operatingCosts = revenue - profitAmount;
    const netIncome = revenue - operatingCosts;
    
    setBaseMetrics(prev => ({
      ...prev,
      revenue,
      netIncome,
      netGrowth: 0
    }));

    calculateImpact();
  };

  const calculateImpact = () => {
    let currentMetrics = { ...baseMetrics };
    const monthlyData = [];

    // Calculate 12-month projection
    for (let month = 0; month <= 12; month++) {
      if (month === 0) {
        monthlyData.push({
          month: 'Current',
          ...currentMetrics
        });
        continue;
      }

      const monthMetrics = { ...currentMetrics };
      const totalCosts = calculateTotalCosts(leverValues);

      // Apply lever impacts
      growthLevers.forEach(lever => {
        const value = leverValues[lever.id] || lever.default;
        const normalizedValue = (value - lever.min) / (lever.max - lever.min);
        
        monthMetrics.unitsSold *= (1 + (normalizedValue * lever.impact.customers * 0.08));
        monthMetrics.revenue = monthMetrics.unitsSold * monthMetrics.avgCost;
        monthMetrics.customers *= (1 + (normalizedValue * lever.impact.customers * 0.08));
        monthMetrics.retention = Math.min(100, monthMetrics.retention * (1 + (normalizedValue * lever.impact.retention * 0.02)));
        monthMetrics.satisfaction = Math.min(100, monthMetrics.satisfaction * (1 + (normalizedValue * lever.impact.satisfaction * 0.02)));
      });

      // Calculate net income and growth
      const profitAmount = monthMetrics.revenue * (baseMetrics.profitMargin / 100);
      const operatingCosts = monthMetrics.revenue - profitAmount + totalCosts;
      monthMetrics.netIncome = monthMetrics.revenue - operatingCosts;
      monthMetrics.netGrowth = ((monthMetrics.netIncome - currentMetrics.netIncome) / currentMetrics.netIncome) * 100;

      monthlyData.push({
        month: `Month ${month}`,
        ...monthMetrics
      });

      currentMetrics = monthMetrics;
    }

    setProjectedData(monthlyData);
  };

  const calculateTotalCosts = (levers: Record<string, number>) => {
    return Object.entries(levers).reduce((total, [id, value]) => {
      return total + (value || growthLevers.find(l => l.id === id)?.default || 0);
    }, 0);
  };

  const handleLeverChange = (leverId: string, value: number) => {
    setLeverValues(prev => ({
      ...prev,
      [leverId]: value
    }));
  };

  const handleInputChange = (field: keyof BaseMetrics, value: string) => {
    // Convert empty string to 0, otherwise parse the number
    const numValue = value === '' ? 0 : parseInt(value, 10);
    
    setBaseMetrics(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${Math.round(value)}%`;
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-gray-700 overflow-visible">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient rounded-xl" />
      
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap z-50">
        free StartupLabs tool
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
            <Brain size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Growth ROI Calculator</h2>
            <p className="text-gray-400">
              Visualize how different growth levers impact your startup's key metrics.
            </p>
          </div>
        </div>

        {/* Base Metrics Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-black/30 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                <Calculator size={20} />
              </div>
              <h3 className="text-white font-semibold">Base Metrics</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Average Cost of Product/Service
                </label>
                <div className="relative group">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={baseMetrics.avgCost || ''}
                    onChange={(e) => handleInputChange('avgCost', e.target.value)}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg pl-8 pr-4 py-2 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Units Sold per Month
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={baseMetrics.unitsSold || ''}
                    onChange={(e) => handleInputChange('unitsSold', e.target.value)}
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Profit Margin (%)
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={baseMetrics.profitMargin || ''}
                    onChange={(e) => handleInputChange('profitMargin', e.target.value)}
                    min="0"
                    max="100"
                    className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 appearance-none transition-colors group-hover:border-blue-500/50"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <LineChartIcon size={20} />
              </div>
              <h3 className="text-white font-semibold">Current Performance</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Monthly Revenue:</span>
                <span className="text-white">{formatCurrency(baseMetrics.revenue)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Net Income:</span>
                <span className="text-white">{formatCurrency(baseMetrics.netIncome)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Profit Margin:</span>
                <span className="text-white">{formatPercentage(baseMetrics.profitMargin)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Operating Margin:</span>
                <span className="text-white">
                  {formatPercentage((baseMetrics.netIncome / baseMetrics.revenue) * 100)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Levers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {growthLevers.map(lever => (
            <div key={lever.id} className="bg-black/30 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <lever.icon size={20} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{lever.name}</h3>
                  <p className="text-sm text-gray-400">{lever.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    {lever.unit}{lever.min}
                  </span>
                  <span className="text-blue-400 font-semibold">
                    {lever.unit}{leverValues[lever.id] || lever.default}
                  </span>
                  <span className="text-gray-400">
                    {lever.unit}{lever.max}
                  </span>
                </div>
                <input
                  type="range"
                  min={lever.min}
                  max={lever.max}
                  value={leverValues[lever.id] || lever.default}
                  onChange={(e) => handleLeverChange(lever.id, Number(e.target.value))}
                  className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-black/30 rounded-lg p-4 border border-gray-700 hover:border-green-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Net Income</span>
              <Clock className="text-green-400" size={20} />
            </div>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(projectedData[projectedData.length - 1]?.netIncome || 0)}
            </div>
            <div className="text-sm text-green-400">
              +{Math.round(((projectedData[projectedData.length - 1]?.netIncome || 0) / baseMetrics.netIncome - 1) * 100)}%
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-4 border border-gray-700 hover:border-blue-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Net Growth</span>
              <Clock className="text-blue-400" size={20} />
            </div>
            <div className="text-2xl font-bold text-white">
              {Math.round(projectedData[projectedData.length - 1]?.netGrowth || 0)}%
            </div>
            <div className="text-sm text-blue-400">Month-over-Month</div>
          </div>

          <div className="bg-black/30 rounded-lg p-4 border border-gray-700 hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Units Sold</span>
              <Clock className="text-purple-400" size={20} />
            </div>
            <div className="text-2xl font-bold text-white">
              {new Intl.NumberFormat().format(projectedData[projectedData.length - 1]?.unitsSold || 0)}
            </div>
            <div className="text-sm text-purple-400">
              +{Math.round(((projectedData[projectedData.length - 1]?.unitsSold || 0) / baseMetrics.unitsSold - 1) * 100)}%
            </div>
          </div>

          <div className="bg-black/30 rounded-lg p-4 border border-gray-700 hover:border-yellow-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Revenue</span>
              <Clock className="text-yellow-400" size={20} />
            </div>
            <div className="text-2xl font-bold text-white">
              {formatCurrency(projectedData[projectedData.length - 1]?.revenue || 0)}
            </div>
            <div className="text-sm text-yellow-400">
              +{Math.round(((projectedData[projectedData.length - 1]?.revenue || 0) / baseMetrics.revenue - 1) * 100)}%
            </div>
          </div>
        </div>

        {/* Growth Projection Chart */}
        <div className="bg-black/30 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <LineChartIcon size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">12-Month Growth Projection</h3>
          </div>

          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={projectedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="month"
                  tick={{ fill: '#9CA3AF' }}
                  stroke="#4B5563"
                />
                <YAxis 
                  yAxisId="left"
                  tick={{ fill: '#9CA3AF' }}
                  stroke="#4B5563"
                  tickFormatter={(value) => `$${value.toLocaleString()}`}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: '#9CA3AF' }}
                  stroke="#4B5563"
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '0.375rem'
                  }}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="netIncome" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={false}
                  name="Net Income"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="netGrowth" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={false}
                  name="Net Growth"
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#FBBF24" 
                  strokeWidth={2}
                  dot={false}
                  name="Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-lg font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
            
            <div className="relative flex items-center gap-2">
              <span>Get Expert Growth Strategy</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
    </div>
  );
};

export default GrowthROICalculator;