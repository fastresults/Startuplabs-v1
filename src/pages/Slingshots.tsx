import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Filter, ArrowUpRight, X, Sliders } from 'lucide-react';

interface BusinessConcept {
  id: string;
  title: string;
  description: string;
  category: 'gig' | 'mainstreet' | 'digital' | 'platform';
  image: string;
  tags: string[];
  readTime: number;
  publishDate: string;
}

const businessConcepts: BusinessConcept[] = [
  {
    id: 'freelance-consulting',
    title: 'Business Strategy Consultant',
    description: 'Provide specialized consulting services helping small businesses develop growth strategies, optimize operations, and improve profitability.',
    category: 'gig',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    tags: ['consulting', 'b2b', 'professional-services', 'strategy'],
    readTime: 12,
    publishDate: '2024-03-10'
  },
  {
    id: 'creative-director',
    title: 'Freelance Creative Director',
    description: 'Offer creative direction and brand strategy services to businesses needing cohesive visual identities and marketing campaigns.',
    category: 'gig',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80',
    tags: ['creative', 'branding', 'marketing', 'design'],
    readTime: 10,
    publishDate: '2024-03-09'
  },
  {
    id: 'boutique-fitness',
    title: 'Specialized Fitness Studio',
    description: 'Launch a boutique fitness studio offering unique workout experiences combining multiple disciplines with personalized coaching.',
    category: 'mainstreet',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    tags: ['fitness', 'health', 'wellness', 'local-business'],
    readTime: 15,
    publishDate: '2024-03-10'
  },
  {
    id: 'artisanal-bakery',
    title: 'Artisanal Bakery & Café',
    description: 'Create a destination bakery featuring artisanal breads, pastries, and specialty coffee with a focus on organic ingredients.',
    category: 'mainstreet',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80',
    tags: ['food', 'retail', 'hospitality', 'artisanal'],
    readTime: 13,
    publishDate: '2024-03-09'
  }
];

const categories = [
  { 
    id: 'gig', 
    name: 'Side Hustle', 
    description: 'Start earning with minimal overhead',
    color: 'from-blue-600 to-blue-800',
    hoverColor: 'hover:from-blue-500 hover:to-blue-700',
    icon: '💼'
  },
  { 
    id: 'mainstreet', 
    name: 'Local Business', 
    description: 'Build a brick & mortar presence',
    color: 'from-green-600 to-green-800',
    hoverColor: 'hover:from-green-500 hover:to-green-700',
    icon: '🏪'
  },
  { 
    id: 'digital', 
    name: 'Online Business', 
    description: 'Launch your digital venture',
    color: 'from-purple-600 to-purple-800',
    hoverColor: 'hover:from-purple-500 hover:to-purple-700',
    icon: '🌐'
  },
  { 
    id: 'platform', 
    name: 'Platform', 
    description: 'Create a scalable marketplace',
    color: 'from-red-600 to-red-800',
    hoverColor: 'hover:from-red-500 hover:to-red-700',
    icon: '🚀'
  }
];

const Slingshots = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredConcepts, setFilteredConcepts] = useState<BusinessConcept[]>(businessConcepts);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(businessConcepts.flatMap(concept => concept.tags)));

  useEffect(() => {
    let filtered = [...businessConcepts];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(concept =>
        concept.title.toLowerCase().includes(query) ||
        concept.description.toLowerCase().includes(query) ||
        concept.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(concept => concept.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(concept =>
        selectedTags.every(tag => concept.tags.includes(tag))
      );
    }

    setFilteredConcepts(filtered);
  }, [searchQuery, selectedCategory, selectedTags]);

  const getActiveFilterCount = () => {
    let count = 0;
    if (selectedCategory) count++;
    if (searchQuery) count++;
    if (selectedTags.length > 0) count += selectedTags.length;
    return count;
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setSelectedTags([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero section */}
      <div className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat px-4 sm:px-6" style={{ backgroundImage: 'url("/images/slingshot-header.png")' }}>
        <div className="container mx-auto flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 tracking-tight text-white">
              <span className="font-light">startup</span> <span className="font-extrabold">slingshots</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-400 font-light mb-6">Where founders find their future!</h2>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
              Slingshots by Startuplabs are deep-dive research blueprints designed to propel your startup faster and farther—armed with insights, data, and proven strategies. Explore our curated collection of high-potential business models and startup concepts, ready for you to adapt, launch, and lead.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#1b2029] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Browse Opportunities</h2>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900/20 px-3 py-1 rounded-full border border-blue-900/50">
                    <span className="text-blue-400 text-sm">
                      {filteredConcepts.length} results
                    </span>
                  </div>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-lg hover:bg-black/50 transition-colors text-gray-400 hover:text-white"
                  >
                    <Sliders size={18} />
                    <span>Filters</span>
                    {getActiveFilterCount() > 0 && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {getActiveFilterCount()}
                      </span>
                    )}
                  </button>
                </div>
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
                    <div>
                      <label className="block text-white font-medium mb-2">Search</label>
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          placeholder="Search business concepts..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full bg-black/30 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        />
                        {searchQuery && (
                          <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                          >
                            <X size={20} />
                          </button>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Categories</label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                            className={`px-3 py-1 rounded-full text-sm transition-colors ${
                              selectedCategory === category.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

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
                            className={`px-3 py-1 rounded-full text-sm transition-colors ${
                              selectedTags.includes(tag)
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Category buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                  className={`group relative overflow-hidden rounded-lg transition-all duration-500 p-4 ${
                    selectedCategory === category.id
                      ? 'scale-[1.02] shadow-2xl'
                      : 'hover:scale-[1.01]'
                  }`}
                >
                  {/* Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    category.id === 'gig' ? 'from-blue-600 to-blue-800' :
                    category.id === 'mainstreet' ? 'from-green-600 to-green-800' :
                    category.id === 'digital' ? 'from-purple-600 to-purple-800' :
                    'from-red-600 to-red-800'
                  } opacity-90 transition-all duration-500 group-hover:opacity-100`} />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <h3 className="text-base font-bold text-white mb-1">{category.name}</h3>
                    <p className="text-white/90 text-xs mb-3">{category.description}</p>
                    
                    <div className="flex items-center gap-1 text-white/90 group-hover:text-white transition-colors text-xs">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Blog grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredConcepts.map(concept => (
                <div key={concept.id} className="bg-black/30 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all group">
                  <div className="relative h-48">
                    <img
                      src={concept.image}
                      alt={concept.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          concept.category === 'gig' ? 'bg-blue-500/20 text-blue-400' :
                          concept.category === 'mainstreet' ? 'bg-green-500/20 text-green-400' :
                          concept.category === 'digital' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {categories.find(cat => cat.id === concept.category)?.name}
                        </span>
                        <span className="text-gray-400 text-sm">{concept.readTime} min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {concept.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {concept.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {concept.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-sm text-gray-400">
                            #{tag}
                          </span>
                        ))}
                        {concept.tags.length > 2 && (
                          <span className="text-sm text-gray-400">+{concept.tags.length - 2}</span>
                        )}
                      </div>
                      
                      <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                        Read More
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Slingshots;