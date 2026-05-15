import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Filter, ArrowUpRight, ChevronLeft, ChevronRight, Sliders, X, ChevronDown, ChevronUp } from 'lucide-react';
import { turnkeyStartups } from '../data/turnkeyStartups';
import type { TurnkeyStartup } from '../types';
import TurnkeyStartupCard from '../components/TurnkeyStartupCard';
import Pagination from '../components/Pagination';

const TurnkeyStartups = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStartups, setFilteredStartups] = useState<TurnkeyStartup[]>(turnkeyStartups);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [timeCommitment, setTimeCommitment] = useState<string | null>(null);
  const [skillLevel, setSkillLevel] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const categories = [
    { id: 'sidehustle', name: 'Side Hustle', color: 'blue' },
    { id: 'mainstreet', name: 'Local Business', color: 'green' },
    { id: 'digital', name: 'Online Business', color: 'purple' },
    { id: 'platform', name: 'Platform', color: 'orange' }
  ];

  const allTags = Array.from(new Set(turnkeyStartups.flatMap(startup => startup.tags)));

  const timeCommitments = ['Part-time', 'Full-time'];
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced'];
  const locations = ['Remote', 'Local', 'Hybrid'];

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setSelectedTags([]);
    setTimeCommitment(null);
    setSkillLevel(null);
    setLocation(null);
    setCurrentPage(1);
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (selectedCategory) count++;
    if (searchQuery) count++;
    if (selectedTags.length > 0) count += selectedTags.length;
    if (timeCommitment) count++;
    if (skillLevel) count++;
    if (location) count++;
    return count;
  };

  useEffect(() => {
    // Log the total number of startups in the data
    console.log(`Total startups in data: ${turnkeyStartups.length}`);
    
    let filtered = [...turnkeyStartups];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(startup =>
        startup.title.toLowerCase().includes(query) ||
        startup.description.toLowerCase().includes(query) ||
        startup.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(startup => startup.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(startup =>
        selectedTags.every(tag => startup.tags.includes(tag))
      );
    }

    if (timeCommitment) {
      filtered = filtered.filter(startup => startup.attributes.timeCommitment === timeCommitment);
    }

    if (skillLevel) {
      filtered = filtered.filter(startup => startup.attributes.skillLevel === skillLevel);
    }

    if (location) {
      filtered = filtered.filter(startup => startup.attributes.location === location);
    }

    // Log the filtered results
    console.log(`Filtered startups: ${filtered.length}`);
    
    setFilteredStartups(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, selectedCategory, selectedTags, timeCommitment, skillLevel, location]);

  // Get current startups for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStartups = filteredStartups.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of results
    window.scrollTo({
      top: document.getElementById('results-heading')?.offsetTop || 0,
      behavior: 'smooth'
    });
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
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/slingshot-header.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end flex-grow relative z-10 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight text-white">
              <span className="font-light">turnkey</span> <span className="font-extrabold">startups</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Browse our collection of ready-to-launch business opportunities. Each comes complete with proven systems, comprehensive documentation, and expert guidance to accelerate your entrepreneurial journey.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1b2029] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4" id="results-heading">
                <h2 className="text-2xl font-bold text-white">Browse Turnkey Startups</h2>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900/20 px-3 py-1 rounded-full border border-blue-900/50">
                    <span className="text-blue-400 text-sm">
                      {filteredStartups.length} results
                    </span>
                  </div>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="group relative overflow-hidden px-6 py-3 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-lg transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                    <div className="relative flex items-center gap-2">
                      <Sliders size={18} />
                      <span>Filters</span>
                      {getActiveFilterCount() > 0 && (
                        <span className="flex items-center justify-center w-6 h-6 text-xs font-bold bg-white text-blue-600 rounded-full">
                          {getActiveFilterCount()}
                        </span>
                      )}
                    </div>
                  </button>
                </div>
              </div>

              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search turnkey startups..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/30 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {showFilters && (
                <div className="bg-black/30 rounded-lg border border-gray-700 p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Filters</h3>
                    <button
                      onClick={clearFilters}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                    >
                      <X size={16} />
                      Clear all
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Categories */}
                    <div>
                      <label className="block text-white font-medium mb-2">Categories</label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              selectedCategory === category.id
                                ? `bg-${category.color}-600 text-white`
                                : 'bg-black/30 text-gray-400 hover:bg-black/50'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Commitment */}
                    <div>
                      <label className="block text-white font-medium mb-2">Time Commitment</label>
                      <div className="flex flex-wrap gap-2">
                        {timeCommitments.map(time => (
                          <button
                            key={time}
                            onClick={() => setTimeCommitment(timeCommitment === time ? null : time)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              timeCommitment === time
                                ? 'bg-blue-600 text-white'
                                : 'bg-black/30 text-gray-400 hover:bg-black/50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Skill Level */}
                    <div>
                      <label className="block text-white font-medium mb-2">Skill Level</label>
                      <div className="flex flex-wrap gap-2">
                        {skillLevels.map(skill => (
                          <button
                            key={skill}
                            onClick={() => setSkillLevel(skillLevel === skill ? null : skill)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              skillLevel === skill
                                ? 'bg-blue-600 text-white'
                                : 'bg-black/30 text-gray-400 hover:bg-black/50'
                            }`}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-white font-medium mb-2">Location</label>
                      <div className="flex flex-wrap gap-2">
                        {locations.map(loc => (
                          <button
                            key={loc}
                            onClick={() => setLocation(location === loc ? null : loc)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              location === loc
                                ? 'bg-blue-600 text-white'
                                : 'bg-black/30 text-gray-400 hover:bg-black/50'
                            }`}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <label className="block text-white font-medium mb-2">Tags</label>
                      <div className="flex flex-wrap gap-2">
                        {allTags.map(tag => (
                          <button
                            key={tag}
                            onClick={() => setSelectedTags(
                              selectedTags.includes(tag)
                                ? selectedTags.filter(t => t !== tag)
                                : [...selectedTags, tag]
                            )}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              selectedTags.includes(tag)
                                ? 'bg-blue-600 text-white'
                                : 'bg-black/30 text-gray-400 hover:bg-black/50'
                            }`}
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Items per page */}
                    <div>
                      <label className="block text-white font-medium mb-2">Items per page</label>
                      <div className="flex flex-wrap gap-2">
                        {[9, 12, 24, 36].map(count => (
                          <button
                            key={count}
                            onClick={() => setItemsPerPage(count)}
                            className={`px-4 py-2 rounded-lg transition-all ${
                              itemsPerPage === count
                                ? 'bg-blue-600 text-white'
                                : 'bg-black/30 text-gray-400 hover:bg-black/50'
                            }`}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Startup Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentStartups.map((startup) => (
                <TurnkeyStartupCard key={startup.id} startup={startup} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              totalItems={filteredStartups.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              siblingCount={1}
            />

            {/* No Results Message */}
            {filteredStartups.length === 0 && (
              <div className="bg-black/30 p-8 rounded-lg border border-gray-700 text-center mt-8">
                <h3 className="text-xl font-bold text-white mb-4">No matching startups found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your filters to see more results.</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TurnkeyStartups;