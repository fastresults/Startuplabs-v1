import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { searchVideos, type VideoInfo } from '../lib/youtube';
import VideoModal from './VideoModal';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { throttle } from '../lib/utils';
import LazyImage from './LazyImage';

interface VideoSliderProps {
  category: string;
}

const VideoSlider: React.FC<VideoSliderProps> = ({ category }) => {
  const [videos, setVideos] = useState<VideoInfo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const [containerRef, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '100px',
  });

  const fetchVideos = useCallback(async () => {
    if (!category) {
      setError('No category specified');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setVideos([]); // Clear existing videos while loading
      
      const searchQuery = `${category} business success stories`;
      const results = await searchVideos(searchQuery);
      
      if (!results.length) {
        setError('No videos found for this category');
        return;
      }

      setVideos(results);
      setCurrentIndex(0);
    } catch (err) {
      console.error('Error fetching videos:', err);
      setError(err instanceof Error ? err.message : 'Failed to load videos');
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    if (isVisible) {
      fetchVideos();
    }
  }, [fetchVideos, isVisible]);

  const nextSlide = useCallback(throttle(() => {
    if (videos.length <= 1) return;
    setCurrentIndex(prev => (prev + 1) % videos.length);
  }, 300), [videos.length]);

  const prevSlide = useCallback(throttle(() => {
    if (videos.length <= 1) return;
    setCurrentIndex(prev => (prev - 1 + videos.length) % videos.length);
  }, 300), [videos.length]);

  const openVideoModal = useCallback((index: number) => {
    setCurrentVideoIndex(index);
    setIsModalOpen(true);
  }, []);

  const nextVideo = useCallback(() => {
    if (videos.length <= 1) return;
    setCurrentVideoIndex(prev => (prev + 1) % videos.length);
  }, [videos.length]);

  const prevVideo = useCallback(() => {
    if (videos.length <= 1) return;
    setCurrentVideoIndex(prev => (prev - 1 + videos.length) % videos.length);
  }, [videos.length]);

  if (loading) {
    return (
      <div ref={containerRef} className="flex items-center justify-center h-64 bg-black/30 rounded-lg border border-gray-700">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div ref={containerRef} className="flex items-center justify-center h-64 bg-black/30 rounded-lg border border-gray-700">
        <p className="text-red-400">{error}</p>
      </div>
    );
  }

  if (!videos.length) {
    return (
      <div ref={containerRef} className="flex items-center justify-center h-64 bg-black/30 rounded-lg border border-gray-700">
        <p className="text-gray-400">No videos available</p>
      </div>
    );
  }

  const currentVideo = videos[currentIndex];

  return (
    <div ref={containerRef} className="relative">
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <LazyImage
          src={currentVideo.thumbnail}
          alt={currentVideo.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/vidplayer.png';
            (e.target as HTMLImageElement).alt = 'Video thumbnail unavailable';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-xl font-bold text-white mb-2">
            {currentVideo.title}
          </h3>
          {currentVideo.description && (
            <p className="text-gray-300 line-clamp-2">
              {currentVideo.description}
            </p>
          )}
          
          <div className="flex items-center gap-4 mt-4">
            <button 
              onClick={() => openVideoModal(currentIndex)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Play video"
            >
              <Play size={16} />
              Watch Now
            </button>
            <div className="text-gray-400">
              {currentIndex + 1} of {videos.length}
            </div>
          </div>
        </div>
      </div>

      {videos.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 text-white hover:bg-black/90 transition-all border border-gray-700"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/80 text-white hover:bg-black/90 transition-all border border-gray-700"
            aria-label="Next video"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={videos[currentVideoIndex]?.id}
        title={videos[currentVideoIndex]?.title}
        onPrevious={prevVideo}
        onNext={nextVideo}
        hasPrevious={videos.length > 1}
        hasNext={videos.length > 1}
      />
    </div>
  );
};

export default VideoSlider;