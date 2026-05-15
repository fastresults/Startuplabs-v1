import React from 'react';
import { X } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
  phase?: string;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ isOpen, onClose, videoTitle, phase }) => {
  if (!isOpen) return null;

  // Map phases to their corresponding video sources
  const getVideoSource = () => {
    switch (phase?.toLowerCase()) {
      case 'ideate':
        return {
          poster: "/images/vidplayer.png",
          src: "https://www.youtube.com/embed/Gp8A55gZnBU?si=EYZItITte9XVJXG7",
          title: "Ideation Phase Overview",
          description: "Learn how our AI-powered tools help validate and refine your startup concept"
        };
      case 'plan':
        return {
          poster: "/images/vidplayer.png", 
          src: "https://www.youtube.com/embed/jVkLVRt6c1U",
          title: "Planning Phase Overview",
          description: "Discover our strategic planning tools and business model frameworks"
        };
      case 'fund':
        return {
          poster: "/images/vidplayer.png",
          src: "https://www.youtube.com/embed/8UCi_DXWIQk",
          title: "Funding Phase Overview",
          description: "See how we help you prepare for fundraising and connect with investors"
        };
      case 'build':
        return {
          poster: "/images/vidplayer.png",
          src: "https://www.youtube.com/embed/ZDR433b0HJY",
          title: "Build Phase Overview",
          description: "Explore our development tools and technical infrastructure solutions"
        };
      case 'launch':
        return {
          poster: "/images/vidplayer.png",
          src: "https://www.youtube.com/embed/9bZkp7q19f0",
          title: "Launch Phase Overview",
          description: "Learn about our launch strategies and go-to-market playbooks"
        };
      case 'grow':
        return {
          poster: "/images/vidplayer.png",
          src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          title: "Growth Phase Overview",
          description: "Discover tools for scaling your startup and optimizing performance"
        };
      default:
        return {
          poster: "/images/vidplayer.png",
          src: "https://www.youtube.com/embed/DU0mw-PU9H4",
          title: videoTitle || "Video Preview",
          description: "Overview of StartupLabs tools and methodologies"
        };
    }
  };

  const videoData = getVideoSource();

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
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {videoData.title}
            </h3>
            <p className="text-sm text-gray-400">
              {videoData.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="text-gray-400 hover:text-white" size={20} />
          </button>
        </div>
        
        <div className="relative aspect-video bg-black">
          <iframe
            src={videoData.src}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            Part of the {phase?.toLowerCase() || 'startup'} phase toolkit
          </p>
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerModal;