import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import StartupLabsPlan from '../components/StartupLabsPlan';
import ReactPlayer from 'react-player';
import { turnkeyStartups } from '../data/turnkeyStartups';

const CompleteAgencyLayout = () => {
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: true,
    features: true,
    welcome: true,
    video: true,
    newSection: true,
    plan: true
  });
  
  const [showTurnkeyPreview, setShowTurnkeyPreview] = useState(false);
  const previewRef = React.useRef<HTMLDivElement>(null);

  const scrollPreview = (direction: 'left' | 'right') => {
    if (previewRef.current) {
      const scrollAmount = 300;
      previewRef.current.scrollTo({
        left: previewRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <div 
        className="relative pt-24 min-h-[70vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/lava.png")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center flex-grow">
          <div className="max-w-3xl">
            <p className="text-white/80 text-lg md:text-xl font-light tracking-widest uppercase mb-4">Atlanta</p>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              <span className="font-light">we'll build your</span> <span className="font-extrabold">profitable</span> <span className="font-light">startup</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              Skip the expensive mistakes. Our proven process has been systematized through numerous successful startups. We'll apply these same methods to yours—cutting months off your timeline and thousands from your budget.
            </p>
          </div>

          <div className="absolute bottom-0 right-0 pointer-events-none hidden md:block">
            <dotlottie-player
              src="https://lottie.host/73d8308e-b1c0-401c-95d4-5a832beb10cb/y7wSPgy5iM.lottie"
              background="transparent"
              speed="1"
              style={{ width: '375px', height: '375px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      </div>

      <section className="bg-black text-white pt-8 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg font-extralight leading-8">
            We are trusted by the world's most innovative teams
          </p>
          
          <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
              <img className="mx-16 inline h-10" src="/logos/a.png" alt="Client Logo 1" />
              <img className="mx-16 inline h-10" src="/logos/b.png" alt="Client Logo 2" />
              <img className="mx-16 inline h-10" src="/logos/c.png" alt="Client Logo 3" />
              <img className="mx-16 inline h-10" src="/logos/d.png" alt="Client Logo 4" />
              <img className="mx-16 inline h-10" src="/logos/e.png" alt="Client Logo 5" />
              <img className="mx-16 inline h-10" src="/logos/f.png" alt="Client Logo 6" />
            </div>

            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
              <img className="mx-16 inline h-10" src="/logos/a.png" alt="Client Logo 1" />
              <img className="mx-16 inline h-10" src="/logos/b.png" alt="Client Logo 2" />
              <img className="mx-16 inline h-10" src="/logos/c.png" alt="Client Logo 3" />
              <img className="mx-16 inline h-10" src="/logos/d.png" alt="Client Logo 4" />
              <img className="mx-16 inline h-10" src="/logos/e.png" alt="Client Logo 5" />
              <img className="mx-16 inline h-10" src="/logos/f.png" alt="Client Logo 6" />
            </div>
          </div>
        </div>
      </section>

      <section className="videohero bg-[#1b2029] py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="w-3/4 aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=DU0mw-PU9H4"
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                light={true}
              />
            </div>
            <button 
              onClick={() => setShowTurnkeyPreview(!showTurnkeyPreview)}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showTurnkeyPreview ? 'Hide Preview' : 'Preview Turnkey Startups'}
              <ArrowRight className="w-5 h-5" />
            </button>

            {showTurnkeyPreview && (
              <div className="mt-12 w-full relative">
                <button
                  onClick={() => scrollPreview('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 text-white hover:bg-black/90 transition-all border border-gray-700 shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={() => scrollPreview('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/80 text-white hover:bg-black/90 transition-all border border-gray-700 shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>

                <div 
                  ref={previewRef}
                  className="flex overflow-x-auto gap-6 pb-4 px-12 scrollbar-hide scroll-smooth"
                >
                  {turnkeyStartups.slice(0, 6).map((startup) => (
                    <div 
                      key={startup.id}
                      className="flex-none w-[350px] bg-black/30 rounded-lg border border-gray-700 overflow-hidden hover:border-blue-500/50 transition-all"
                    >
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
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                              {startup.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-400 mb-4 line-clamp-2">{startup.description}</p>
                        <Link 
                          to={`/turkeystartups/${startup.id}`}
                          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Learn More
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="bg-[#1b2029] border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-12 pl-4 md:pl-8 lg:pl-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-white text-3xl font-bold mb-6">Why use StartupLabs</h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                At precisely this moment, 100,000 entrepreneurs are struggling to launch their startups. You won't be one of them. You've just discovered the methodical, proven path to market.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                Here at StartupLabs.agency, we've built something revolutionary for people exactly like you. We offer four simple paths to startup success:
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2">72%</div>
                  <div className="text-white">Reduced Risk</div>
                </div>
                <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
                  <div className="text-white">Faster Launch</div>
                </div>
                <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">66%</div>
                  <div className="text-white">Cost Savings</div>
                </div>
                <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">90%</div>
                  <div className="text-white">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1b2029] border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Four Paths to Startup Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/30 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4"><span className="text-white">Path 1:</span> <span className="text-blue-400">Free Startup Toolkit</span></h3>
              <p className="text-gray-400 leading-relaxed">
                Powerful business-building tools with zero cost. Not demos or trials—complete resources that deliver immediate results without spending a penny.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4"><span className="text-white">Path 2:</span> <span className="text-purple-400">AI Startup Accelerator</span></h3>
              <p className="text-gray-400 leading-relaxed">
                Our subscription tools eliminate months of work and save thousands. Why crawl when these AI tools let you sprint?
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4"><span className="text-white">Path 3:</span> <span className="text-green-400">Ready-to-Launch Startups</span></h3>
              <p className="text-gray-400 leading-relaxed">
                Proven turnkey businesses awaiting your personal touch. Skip costly mistakes and start generating revenue in weeks, not years.
              </p>
            </div>

            <div className="bg-black/30 p-8 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4"><span className="text-white">Path 4:</span> <span className="text-yellow-400">Your Custom MVP</span></h3>
              <p className="text-gray-400 leading-relaxed">
                Your big idea, expertly built. We create your first working model while you focus on attracting eager customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black p-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-3xl font-bold">from idea to launch—faster</h2>
          <div className="w-12 h-1 bg-white mt-2"></div>
        </div>
      </div>

      <div>
        <div className="border-b border-black">
          <ServiceCard
            title="ideation"
            description="Unleash your entrepreneurial potential with our free AI platform. Validate ideas, create names, assess viability, and craft compelling marketing copy with ease."
            buttonText="take for a spin"
            link="/ideation"
          />
        </div>

        <div className="flex flex-col md:flex-row border-b border-black">
          <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-black">
            <ServiceCard
              title="planning"
              description="Transform your startup into success with expert planning, strategic development, and insightful market strategies, bringing your vision to life."
              buttonText="learn more"
              link="/planning"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <ServiceCard
              title="funding"
              description="Boost your funding journey, providing custom pitches, tailored investor documents, and exclusive insights to strategically accelerate your startup."
              buttonText="learn more"
              link="/funding"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b border-black">
          <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-black">
            <ServiceCard
              title="development"
              description="Craft your unique digital presence by merging impeccable branding with robust e-commerce and engaging digital assets, elevating your startup."
              buttonText="learn more"
              link="/development"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <ServiceCard
              title="your launch"
              description="Propel your launch, blending strategic sales, compelling content, and a dynamic digital presence into a powerful market debut."
              buttonText="learn more"
              link="/launch"
            />
          </div>
        </div>

        <div>
          <ServiceCard
            title="your growth"
            description="Unleash your entrepreneurial potential with our free AI platform. Validate ideas, create names, assess viability, and craft compelling marketing copy with ease."
            buttonText="take for a spin"
            link="/growth"
          />
        </div>
      </div>

      <div className="bg-[#1b2029] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StartupLabsPlan />
        </div>
      </div>

      <div className="bg-black p-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-4xl font-bold">our difference</h2>
          <div className="w-12 h-1 bg-white mt-2"></div>
        </div>
      </div>

      <div className="bg-black bg-cover bg-center bg-no-repeat py-16" style={{ backgroundImage: 'url("/images/difference-bg.png")' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-white text-xl md:text-2xl font-light italic leading-relaxed">
              "Success in the startup world isn't just about having a great idea – it's about having the right guidance, tools, and support system to turn that idea into reality. The difference between success and failure often lies in the ecosystem you build around your vision."
            </blockquote>
            <p className="text-yellow-400 mt-6 text-lg">A. C. Anderson - Founder</p>
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/startup-advisor" 
              className="inline-block bg-blue-600 text-white px-8 py-4 text-lg font-medium rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompleteAgencyLayout;