import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoId, 
  title,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false
}) => {
  const [showAttribution, setShowAttribution] = useState(true);

  if (!isOpen) return null;

  const videoUrl = "https://www.youtube.com/embed/" + videoId;
  const channelUrl = `https://www.youtube.com/channel/${videoId.substring(0, 4)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 bg-black/90 rounded-lg border border-gray-700 overflow-hidden animate-fadeIn">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white line-clamp-1">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="text-gray-400 hover:text-white" size={20} />
          </button>
        </div>
        
        <div className="relative aspect-video bg-black">
          <iframe
            src={videoUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Navigation buttons */}
          {hasPrevious && (
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 text-white hover:bg-black/90 transition-all border border-gray-700 shadow-lg"
              aria-label="Previous video"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          
          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 text-white hover:bg-black/90 transition-all border border-gray-700 shadow-lg"
              aria-label="Next video"
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {/* Video Attribution Overlay */}
          {showAttribution && (
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700 text-sm text-white max-w-[60%]">
              <div className="flex items-start gap-2">
                <Info size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Content from YouTube</p>
                  <p className="text-gray-400 text-xs mt-1">
                    This video is hosted on YouTube and subject to their terms of service.
                    <a 
                      href={`https://www.youtube.com/watch?v=${videoId}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 ml-1"
                    >
                      View on YouTube
                    </a>
                  </p>
                </div>
                <button 
                  onClick={() => setShowAttribution(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {hasPrevious && (
              <button
                onClick={onPrevious}
                className="px-3 py-1 bg-black/50 text-gray-400 rounded hover:bg-black/70 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                <ChevronLeft size={16} />
                Previous
              </button>
            )}
            
            {hasNext && (
              <button
                onClick={onNext}
                className="px-3 py-1 bg-black/50 text-gray-400 rounded hover:bg-black/70 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                Next
                <ChevronRight size={16} />
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {!showAttribution && (
              <button
                onClick={() => setShowAttribution(true)}
                className="px-3 py-1 bg-black/50 text-gray-400 rounded hover:bg-black/70 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                <Info size={16} />
                Show Attribution
              </button>
            )}
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;