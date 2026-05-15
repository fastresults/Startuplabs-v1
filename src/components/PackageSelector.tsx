import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Brain, Target, DollarSign, Package, Rocket, LineChart, ArrowRight, Briefcase, Building, Globe, Users, ShoppingBag, Code, Zap, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import AiGuidedMode from './AiGuidedMode';
import ReadyToLaunchStartups from './ReadyToLaunchStartups';
import StartupPackageBuilder from './StartupPackageBuilder';
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";

const PackageSelector = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [revenueRange, setRevenueRange] = useState<[number, number]>([0, 100000]);
  const [setupTimeRange, setSetupTimeRange] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [carouselRef, setCarouselRef] = useState(null);

  return (
    <div className="bg-[#1b2029]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div id="ai-guided">
            <AiGuidedMode />
          </div>

          <div id="ready-to-launch" className="relative bg-black/30 p-8 rounded-lg border border-blue-500 scale-[1.02] shadow-xl mt-16">
            <div className="absolute -top-4 right-4 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
              MOST POPULAR
            </div>
            <ReadyToLaunchStartups />
          </div>

          <div id="custom-mvp" className="relative bg-black/30 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 mt-24">
            <div className="text-blue-400 text-sm font-semibold mb-2">CUSTOM SOLUTION</div>
            <h3 className="text-3xl font-bold text-yellow-400">Custom MVP Startup</h3>
            <div className="text-4xl font-bold text-white">Custom</div>
            <div className="text-gray-400 text-lg mb-1">Flexible pricing based on needs</div>
            <p className="text-white/80 mb-8">For those with specific needs, we offer precision services with transparent pricing.</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-white/80">
                <svg className="text-blue-400 mr-2 mt-1 flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Select individual services as needed
              </li>
              <li className="flex items-start text-white/80">
                <svg className="text-blue-400 mr-2 mt-1 flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Add capabilities as your venture evolves
              </li>
              <li className="flex items-start text-white/80">
                <svg className="text-blue-400 mr-2 mt-1 flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pay only for essential components
              </li>
              <li className="flex items-start text-white/80">
                <svg className="text-blue-400 mr-2 mt-1 flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Flexible engagement options
              </li>
              <li className="flex items-start text-white/80">
                <svg className="text-blue-400 mr-2 mt-1 flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Seamless integration with existing resources
              </li>
              <li className="flex items-start text-white/80">
                <svg className="text-blue-400 mr-2 mt-1 flex-shrink-0 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Scale services with your growth trajectory
              </li>
            </ul>

            <Link
              to="/startup-advisor"
              className="group relative overflow-hidden w-full py-4 text-lg font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r from-black to-black/90 text-white hover:from-blue-600 hover:to-blue-700"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
              
              <div className="relative flex items-center gap-2">
                Book a Free Discovery Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSelector;